import http from "http";
import https from "https";
import { z } from "zod";

const OLLAMA_HOST = process.env.OLLAMA_HOST || "127.0.0.1";
const OLLAMA_PORT = Number(process.env.OLLAMA_PORT || 11434);
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || "llama3.1:8b";
const GROQ_API_KEY = process.env.GROQ_API_KEY || "";

const userRateLimits = new Map<string, { count: number; resetAt: number }>();

/**
 * Checks per-user rate limit (max 30 requests per 60 seconds).
 */
export function checkUserRateLimit(userId: string, maxPerMin = 30): boolean {
  const now = Date.now();
  const entry = userRateLimits.get(userId);
  if (!entry || now > entry.resetAt) {
    userRateLimits.set(userId, { count: 1, resetAt: now + 60000 });
    return true;
  }
  if (entry.count >= maxPerMin) return false;
  entry.count++;
  return true;
}

/**
 * Wraps user-supplied content to prevent prompt injection.
 */
export function sanitizeUntrustedInput(text: string): string {
  const sanitized = (text || "").replace(/<\/?(?:system|instruction|prompt)[^>]*>/gi, "");
  return `<untrusted_student_input>\n${sanitized.slice(0, 4000)}\n</untrusted_student_input>`;
}

async function callOllama(messages: { role: string; content: string }[], timeoutMs = 25000): Promise<string> {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      model: OLLAMA_MODEL,
      messages,
      stream: false,
      options: { temperature: 0.1, num_predict: 1000 },
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
        let raw = "";
        res.on("data", (chunk) => (raw += chunk));
        res.on("end", () => {
          try {
            resolve(JSON.parse(raw)?.message?.content || "");
          } catch {
            reject(new Error("Failed to parse Ollama response"));
          }
        });
      }
    );
    req.setTimeout(timeoutMs, () => {
      req.destroy();
      reject(new Error("Ollama timeout"));
    });
    req.on("error", reject);
    req.write(payload);
    req.end();
  });
}

async function callGroq(messages: { role: string; content: string }[], timeoutMs = 15000): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!GROQ_API_KEY) {
      reject(new Error("No Groq API key configured"));
      return;
    }
    const payload = JSON.stringify({
      model: "llama-3.1-8b-instant",
      messages,
      temperature: 0.1,
      response_format: { type: "json_object" },
    });

    const req = https.request(
      {
        hostname: "api.groq.com",
        path: "/openai/v1/chat/completions",
        method: "POST",
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(payload),
        },
      },
      (res) => {
        let raw = "";
        res.on("data", (chunk) => (raw += chunk));
        res.on("end", () => {
          try {
            const parsed = JSON.parse(raw);
            resolve(parsed?.choices?.[0]?.message?.content || "");
          } catch {
            reject(new Error("Failed to parse Groq response"));
          }
        });
      }
    );
    req.setTimeout(timeoutMs, () => {
      req.destroy();
      reject(new Error("Groq timeout"));
    });
    req.on("error", reject);
    req.write(payload);
    req.end();
  });
}

/**
 * Universal LLM gateway with timeout, 1 retry, multi-tier fallback, and schema validation.
 */
export async function executeStructuredLlm<T>(options: {
  systemPrompt: string;
  userPrompt: string;
  schema: z.ZodSchema<T>;
  fallbackGenerator: () => T;
}): Promise<T> {
  const messages = [
    { role: "system", content: options.systemPrompt },
    { role: "user", content: options.userPrompt },
  ];

  for (let attempt = 1; attempt <= 2; attempt++) {
    let rawOutput = "";
    try {
      rawOutput = await callOllama(messages, 20000);
    } catch {
      try {
        rawOutput = await callGroq(messages, 15000);
      } catch {
        // Fall through to retry or fallback
      }
    }

    if (rawOutput && rawOutput.trim().length > 0) {
      try {
        const cleaned = rawOutput
          .replace(/^```json\s*/i, "")
          .replace(/^```\s*/i, "")
          .replace(/\s*```$/i, "")
          .trim();
        const parsed = JSON.parse(cleaned);
        const validated = options.schema.safeParse(parsed);
        if (validated.success) {
          return validated.data;
        }
      } catch {
        // Retry on parse error if attempt == 1
      }
    }
  }

  // Graceful deterministic fallback
  return options.fallbackGenerator();
}
