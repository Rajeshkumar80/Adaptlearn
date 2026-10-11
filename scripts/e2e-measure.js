#!/usr/bin/env node
/**
 * E2E baseline/verification harness for AdaptLearn performance work.
 * Measures: login, health, RAG retrieval timing, /api/ai/ask latency + status,
 * navigation endpoints. Usage: node scripts/e2e-measure.js [--skip-ask]
 */
const BASE = process.env.BACKEND_URL || "http://localhost:8001";
const EMAIL = process.env.TEST_EMAIL || "demo.student@adaptlearn.dev";
const PASSWORD = process.env.TEST_PASSWORD || "Student@123";

const results = [];
function record(name, ms, extra = "") {
  results.push({ name, ms, extra });
  console.log(`  ${(ms / 1000).toFixed(2)}s  ${name}${extra ? "  | " + extra : ""}`);
}

async function timed(name, fn) {
  const t0 = Date.now();
  try {
    const extra = await fn();
    record(name, Date.now() - t0, extra);
  } catch (err) {
    const status = err?.response?.status;
    const detail = err?.response?.data ? JSON.stringify(err.response.data).slice(0, 160) : err.message;
    record(name, Date.now() - t0, `FAILED ${status || ""} ${detail}`);
  }
}

async function main() {
  console.log(`== E2E measure against ${BASE} ==`);
  let token = null;

  await timed("POST /auth/login", async () => {
    const r = await fetch(`${BASE}/api/auth/login`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: EMAIL, password: PASSWORD }),
    });
    if (!r.ok) throw Object.assign(new Error("login failed"), { response: { status: r.status, data: await r.json().catch(() => "") } });
    const j = await r.json();
    token = j.token;
    return `role=${j.user.role}`;
  });

  const auth = { "Content-Type": "application/json", Authorization: `Bearer ${token}` };

  await timed("GET /api/health", async () => {
    const r = await fetch(`${BASE}/api/health`);
    if (!r.ok) throw new Error("health failed");
    return "";
  });

  if (!token) { console.log("No token; stopping."); return; }

  await timed("GET /chat (sessions)", async () => {
    const r = await fetch(`${BASE}/api/chat`, { headers: auth });
    if (!r.ok) throw new Error("chat list failed");
    return "";
  });

  // RAG retrieval quality/latency probes (exact-course mapping checks)
  const ragProbes = [
    { q: "Explain client server architecture and its types", expectSubject: "BCS502" },
    { q: "What is addressing mode? Explain different types of addressing modes", expectSubject: "BCS302" },
  ];
  for (const p of ragProbes) {
    await timed(`POST /ai/ask "${p.q.slice(0, 40)}..."`, async () => {
      const r = await fetch(`${BASE}/api/ai/ask`, {
        method: "POST", headers: auth,
        body: JSON.stringify({ question: p.q, subjectCode: "GENERAL" }),
      });
      const body = await r.json();
      if (!r.ok) throw Object.assign(new Error("ask failed"), { response: { status: r.status, data: body } });
      const subj = body?.answer?.subject_code;
      const sections = body?.answer?.sections?.length ?? 0;
      const conf = body?.retrievalConfidence;
      const t = body?.timings ? `retr=${body.timings.retrievalMs}ms llm=${body.timings.llmMs}ms` : "";
      return `subject=${subj} (want ${p.expectSubject}) sections=${sections} conf=${conf} ${t}`;
    });
  }

  // Streaming probe: first-token latency, token count, total latency
  await timed("POST /ai/ask/stream (streaming)", async () => {
    const t0 = Date.now();
    const r = await fetch(`${BASE}/api/ai/ask/stream`, {
      method: "POST", headers: auth,
      body: JSON.stringify({ question: "What is addressing mode? Explain different types of addressing modes", subjectCode: "GENERAL" }),
    });
    if (!r.ok || !r.body) throw Object.assign(new Error("stream failed"), { response: { status: r.status, data: "" } });
    const reader = r.body.getReader();
    const decoder = new TextDecoder();
    let buf = "", tokens = 0, firstTokenMs = -1, retrievalMs = -1, done = false, finalSubj = "";
    for (;;) {
      const { done: rdDone, value } = await reader.read();
      if (rdDone) break;
      buf += decoder.decode(value, { stream: true });
      let idx;
      while ((idx = buf.indexOf("\n\n")) >= 0) {
        const frame = buf.slice(0, idx); buf = buf.slice(idx + 2);
        const evLine = frame.split("\n").find(l => l.startsWith("event: "));
        const dataLine = frame.split("\n").find(l => l.startsWith("data: "));
        if (!evLine || !dataLine) continue;
        const ev = evLine.slice(7).trim();
        let data = {}; try { data = JSON.parse(dataLine.slice(6)); } catch { continue; }
        if (ev === "retrieval_done") retrievalMs = data.retrievalMs;
        if (ev === "token") { tokens++; if (firstTokenMs < 0) firstTokenMs = Date.now() - t0; }
        if (ev === "done") { done = true; finalSubj = data?.answer?.subject_code; }
        if (ev === "error") throw new Error("SSE error: " + JSON.stringify(data).slice(0, 160));
      }
    }
    const totalMs = Date.now() - t0;
    return `firstToken=${firstTokenMs}ms tokens=${tokens} retrieval=${retrievalMs}ms total=${totalMs}ms done=${done} subject=${finalSubj}`;
  });

  console.log("\n== Summary ==");
  for (const r of results) {
    console.log(`${(r.ms / 1000).toFixed(2)}s\t${r.name}\t${r.extra}`);
  }
  require("fs").writeFileSync(__dirname + "/e2e-last-run.json", JSON.stringify(results, null, 2));
}

main().catch((e) => { console.error(e); process.exit(1); });
