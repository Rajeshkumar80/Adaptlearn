import http from "http";

/**
 * Shared Ollama client for long-form generation.
 *
 * Fixes the previous failure mode: a 25s hard timeout on non-streaming
 * /api/chat calls. On the RTX 4050 (6 GB) llama3.1:8b generates ~12-14 tok/s,
 * so a 1000-token answer legitimately takes 70-90s. This client:
 *  - streams tokens (NDJSON) so first-token latency is ~1-3s warm and the
 *    socket stays alive while generating (no idle-death mid-answer);
 *  - sends keep_alive so the model stays loaded between questions;
 *  - serializes generations (max 1 concurrent) to prevent VRAM/RAM
 *    exhaustion from overlapping requests, with a bounded queue wait;
 *  - propagates AbortSignal so a closed browser tab stops GPU generation.
 */

const OLLAMA_HOST = process.env.OLLAMA_HOST || "127.0.0.1";
const OLLAMA_PORT = Number(process.env.OLLAMA_PORT || 11434);
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || "llama3.1:8b";
const KEEP_ALIVE = process.env.OLLAMA_KEEP_ALIVE || "30m";

// 6 GB VRAM / 16 GB RAM: overlapping generations risk OOM (observed HTTP 500).
// ponytail: single global slot; per-model semaphore if multiple models ever serve.
const MAX_CONCURRENT = 1;
// One full generation takes ~90s on this hardware; a 2-deep queue can therefore
// wait ~3min for its slot. Waiting (idle SSE socket, no GPU/RAM cost) beats a
// false "queue timed out" error after 60s while the answer was 30s away.
const QUEUE_WAIT_MS = 240_000;
const STREAM_IDLE_TIMEOUT_MS = 45_000; // no tokens for this long = hang
const NONSTREAM_TIMEOUT_MS = 150_000;  // generous; real answers take ~90s

let busy = false;
interface Waiter { resolve: () => void; timer: NodeJS.Timeout }
const waiters: Waiter[] = [];

function acquire(): Promise<void> {
  if (!busy) { busy = true; return Promise.resolve(); }
  if (waiters.length >= 32) {
    return Promise.reject(new Error("Generation queue is full; try again shortly"));
  }
  return new Promise((resolve, reject) => {
    const w: Waiter = { resolve, timer: null as unknown as NodeJS.Timeout };
    w.timer = setTimeout(() => {
      const i = waiters.indexOf(w);
      if (i >= 0) waiters.splice(i, 1);
      reject(new Error("Waiting for the local model queue timed out; try again shortly"));
    }, QUEUE_WAIT_MS);
    waiters.push(w);
  });
}

function release(): void {
  const next = waiters.shift();
  if (next) {
    clearTimeout(next.timer);
    next.resolve(); // hand the slot directly; busy stays true
  } else {
    busy = false;
  }
}

async function withGenerationSlot<T>(fn: () => Promise<T>): Promise<T> {
  await acquire();
  try {
    return await fn();
  } finally {
    release();
  }
}

export interface OllamaGenerateOptions {
  temperature?: number;
  numPredict?: number;
  numCtx?: number;
  signal?: AbortSignal;
  onToken?: (token: string) => void;
}

/**
 * Generates a completion. Streams NDJSON from Ollama; forwards tokens to
 * onToken when provided, resolves with the full text either way.
 */
export function ollamaGenerate(
  messages: { role: string; content: string }[],
  opts: OllamaGenerateOptions = {}
): Promise<string> {
  const streaming = typeof opts.onToken === "function";
  return withGenerationSlot(() => new Promise<string>((resolve, reject) => {
    const payload = JSON.stringify({
      model: OLLAMA_MODEL,
      messages,
      stream: true, // always stream from Ollama; buffered when no onToken
      keep_alive: KEEP_ALIVE,
      options: {
        temperature: opts.temperature ?? 0.25,
        num_ctx: opts.numCtx ?? 3072,
        num_predict: opts.numPredict ?? 1200,
      },
    });

    const req = http.request(
      {
        host: OLLAMA_HOST,
        port: OLLAMA_PORT,
        path: "/api/chat",
        method: "POST",
        headers: { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(payload) },
      },
      (res) => {
        if (res.statusCode && res.statusCode >= 400) {
          let body = "";
          res.on("data", (d) => (body += d));
          res.on("end", () => reject(new Error(`Ollama HTTP ${res.statusCode}: ${body.slice(0, 200)}`)));
          return;
        }

        let full = "";
        let buffer = "";
        let idleTimer: NodeJS.Timeout | null = null;
        const armIdle = () => {
          if (idleTimer) clearTimeout(idleTimer);
          idleTimer = setTimeout(() => {
            req.destroy(new Error("Ollama stalled (no tokens received)"));
          }, streaming ? STREAM_IDLE_TIMEOUT_MS : NONSTREAM_TIMEOUT_MS);
        };
        armIdle();

        const finish = () => {
          if (idleTimer) clearTimeout(idleTimer);
          resolve(full);
        };

        res.on("data", (chunk) => {
          armIdle();
          buffer += chunk.toString("utf-8");
          let nl: number;
          while ((nl = buffer.indexOf("\n")) >= 0) {
            const line = buffer.slice(0, nl).trim();
            buffer = buffer.slice(nl + 1);
            if (!line) continue;
            try {
              const evt = JSON.parse(line);
              const token = evt?.message?.content;
              if (typeof token === "string" && token.length > 0) {
                full += token;
                opts.onToken?.(token);
              }
              if (evt?.done) {
                finish();
                res.removeAllListeners("data");
                res.removeAllListeners("end");
                return;
              }
            } catch {
              // partial line or non-JSON; skip
            }
          }
        });
        res.on("end", finish);
      }
    );

    req.on("error", (err) => reject(err));
    if (opts.signal) {
      if (opts.signal.aborted) {
        req.destroy(new Error("Client aborted"));
      } else {
        opts.signal.addEventListener("abort", () => req.destroy(new Error("Client aborted")), { once: true });
      }
    }
    req.end(payload);
  }));
}
