// Real-socket abort probe: curl closes the socket at N seconds (like a browser
// abort), then we verify the generation slot was freed by timing a follow-up.
const { execSync, spawn } = require("child_process");
const http = require("http");

const BASE = "http://localhost:8001";

function login() {
  const out = execSync(
    `curl -s -X POST ${BASE}/api/auth/login -H "Content-Type: application/json" -d "{\\"email\\":\\"demo.student@adaptlearn.dev\\",\\"password\\":\\"Student@123\\"}"`,
    { encoding: "utf-8" }
  );
  return JSON.parse(out).token;
}

function streamOnce(token, body, { socketCloseAfterMs = 0 } = {}) {
  return new Promise((resolve) => {
    const t0 = Date.now();
    let firstTokenMs = -1, tokens = 0, done = false, error = "";
    const payload = JSON.stringify(body);
    const req = http.request(
      { host: "localhost", port: 8001, path: "/api/ai/ask/stream", method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}`, "Content-Length": Buffer.byteLength(payload) } },
      (res) => {
        let buf = "";
        res.on("data", (chunk) => {
          buf += chunk.toString();
          let idx;
          while ((idx = buf.indexOf("\n\n")) >= 0) {
            const frame = buf.slice(0, idx); buf = buf.slice(idx + 2);
            const evLine = frame.split("\n").find(l => l.startsWith("event: "));
            if (evLine?.includes("token")) { tokens++; if (firstTokenMs < 0) firstTokenMs = Date.now() - t0; }
            if (evLine?.includes("done")) done = true;
            if (evLine?.includes("error")) error = frame.slice(0, 120);
          }
        });
        res.on("end", () => resolve({ firstTokenMs, tokens, done, error, total: Date.now() - t0 }));
      }
    );
    req.on("error", (e) => resolve({ firstTokenMs, tokens, done, error: e.message, total: Date.now() - t0 }));
    req.on("close", () => {
      // destroyed socket or server closed — resolve with what we have
      setTimeout(() => resolve({ firstTokenMs, tokens, done, error: error || "closed", total: Date.now() - t0 }), 50);
    });
    if (socketCloseAfterMs > 0) {
      // Simulate browser abort: destroy the socket mid-stream
      setTimeout(() => req.destroy(), socketCloseAfterMs);
    }
    req.end(payload);
  });
}

async function main() {
  const token = login();

  console.log("== Real-socket abort at 4s ==");
  const aborted = await streamOnce(token, { question: "Explain instruction cycle stages in detail", subjectCode: "BCS302" }, { socketCloseAfterMs: 4000 });
  console.log(`  aborted request: firstToken=${aborted.firstTokenMs}ms tokens=${aborted.tokens} total=${(aborted.total/1000).toFixed(1)}s`);

  // small settle delay
  await new Promise(r => setTimeout(r, 1500));

  console.log("== Follow-up request (slot must be free) ==");
  const followUp = await streamOnce(token, { question: "Define addressing mode briefly", subjectCode: "BCS302" });
  console.log(`  follow-up: firstToken=${followUp.firstTokenMs}ms tokens=${followUp.tokens} done=${followUp.done} total=${(followUp.total/1000).toFixed(1)}s`);
  if (followUp.firstTokenMs > 15000) {
    console.log("  FAIL: slot was NOT freed promptly after abort");
    process.exit(1);
  }
  console.log("  PASS: slot freed after client abort");
  process.exit(0);
}

main();
