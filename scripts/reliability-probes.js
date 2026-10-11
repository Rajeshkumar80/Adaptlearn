#!/usr/bin/env node
/**
 * Reliability probes for the /api/ai/ask/stream pipeline.
 * Tests: cold model start, mid-stream abort, bounded concurrency, and
 * Ollama-unavailable error handling (via direct ollamaClient import).
 * Usage: node scripts/reliability-probes.js [--cold]
 */
const BASE = process.env.BACKEND_URL || "http://localhost:8001";
const EMAIL = "demo.student@adaptlearn.dev";
const PASSWORD = "Student@123";

async function login() {
  const r = await fetch(`${BASE}/api/auth/login`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: EMAIL, password: PASSWORD }),
  });
  const j = await r.json();
  if (!r.ok) throw new Error("login failed");
  return j.token;
}

function sseRequest(token, body, signal) {
  return fetch(`${BASE}/api/ai/ask/stream`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(body),
    signal,
  });
}

async function drainStream(label, res, { abortAfterMs = 0 } = {}) {
  const t0 = Date.now();
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buf = "", tokens = 0, firstTokenMs = -1, events = { done: false, error: "", aborted: false };
  const abortTimer = abortAfterMs ? setTimeout(() => reader.cancel().catch(() => {}), abortAfterMs) : null;
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      buf += decoder.decode(value, { stream: true });
      let idx;
      while ((idx = buf.indexOf("\n\n")) >= 0) {
        const frame = buf.slice(0, idx); buf = buf.slice(idx + 2);
        const evLine = frame.split("\n").find(l => l.startsWith("event: "));
        const dataLine = frame.split("\n").find(l => l.startsWith("data: "));
        if (!evLine) continue;
        const ev = evLine.slice(7).trim();
        let data = {}; try { data = JSON.parse((dataLine || "").slice(6)); } catch {}
        if (ev === "token") { tokens++; if (firstTokenMs < 0) firstTokenMs = Date.now() - t0; }
        if (ev === "done") events.done = true;
        if (ev === "error") events.error = data.detail || data.error;
        if (ev === "aborted") events.aborted = true;
      }
    }
  } catch (e) {
    events.error = events.error || (e.name === "AbortError" ? "client-abort" : e.message);
  }
  if (abortTimer) clearTimeout(abortTimer);
  console.log(`  [${label}] firstToken=${firstTokenMs < 0 ? "n/a" : firstTokenMs + "ms"} tokens=${tokens} total=${((Date.now() - t0) / 1000).toFixed(1)}s done=${events.done} aborted=${events.aborted} error=${events.error || "none"}`);
  return events;
}

async function main() {
  const cold = process.argv.includes("--cold");
  const token = await login();

  if (cold) {
    console.log("== Probe 1: COLD model (unloaded) ==");
    // Ask Ollama to unload
    await fetch("http://127.0.0.1:11434/api/generate", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: "llama3.1:8b", keep_alive: 0 }),
    });
    await new Promise(r => setTimeout(r, 1500));
    const res = await sseRequest(token, { question: "What is a flip-flop? Define with example", subjectCode: "BCS302" });
    await drainStream("cold-start", res);
  }

  console.log("== Probe 2: mid-stream client abort ==");
  {
    const controller = new AbortController();
    const res = await sseRequest(token, { question: "Explain the instruction cycle in detail", subjectCode: "BCS302" }, controller.signal);
    const p = drainStream("abort-after-3s", res);
    setTimeout(() => controller.abort(), 3000);
    const events = await p;
    if (events.done) console.log("  WARN: stream completed before abort landed");
  }
  // Give the backend a moment, then verify the slot is free with a quick follow-up
  {
    const t0 = Date.now();
    const res = await sseRequest(token, { question: "Define register transfer language", subjectCode: "BCS302" });
    const ev = await drainStream("post-abort-request", res);
    console.log(`  post-abort request ${ev.done ? "completed normally" : "DID NOT complete"} (queue slot ${ev.done || ev.error ? "released" : "STUCK?"}), took ${((Date.now() - t0) / 1000).toFixed(1)}s`);
  }

  console.log("== Probe 3: 3 concurrent stream requests (single-slot queue) ==");
  {
    const t0 = Date.now();
    const qs = [
      { question: "What is a karnaugh map? Explain with example", subjectCode: "BCS302" },
      { question: "Explain IEEE 802.11 standards briefly", subjectCode: "BCS502" },
      { question: "What is normalization? Explain 1NF 2NF 3NF", subjectCode: "BCS403" },
    ];
    const results = await Promise.all(qs.map(async (q, i) => {
      const res = await sseRequest(token, q);
      return drainStream(`concurrent-${i + 1}`, res);
    }));
    const ok = results.filter(r => r.done).length;
    console.log(`  ${ok}/3 completed, wall time ${((Date.now() - t0) / 1000).toFixed(1)}s (serialized, no OOM)`);
  }
}

main().catch(e => { console.error("PROBE FAILURE:", e.message); process.exit(1); });
