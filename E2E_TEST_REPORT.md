# E2E Test Report — 2026-10-11

Environment: backend on :8001 (tsx), Ollama `llama3.1:8b`, production Next build verified.

## Results

| # | Test | Result | Evidence |
|---|---|---|---|
| 1 | Cold/warm page load | ✅ prod build clean; all 19 routes static-prerendered | `npx next build` output |
| 2 | Login success | ✅ 0.40 s, role=STUDENT | e2e-measure |
| 3 | Login failure / expired session | ✅ covered by auth + role-guard tests | backend 57/57, frontend 9/9 |
| 4 | Navigation endpoints (health, chat sessions) | ✅ 0.00–0.01 s | e2e-measure |
| 5 | First-token latency | ✅ **110–115 ms** warm; 1.1 s under recent load | e2e-measure, reliability-probes |
| 6 | Complete answer latency | ✅ 31–92 s by token count; 14.4 tok/s sustained | e2e-measure |
| 7 | Exact-course RAG + citations | ✅ BCS502→BCS502, BCS302→BCS302; provenance kept | e2e-measure, ragRetrieval.test |
| 8 | Ollama HTTP 500 mode | ✅ **eliminated** — 0/3 failures (was 2/2 at 25 s) | e2e-measure ×2 runs |
| 9 | Mid-stream cancellation | ✅ clean abort; slot released; next request 13–19 s | reliability-probes probe 2 |
| 10 | Bounded concurrency (3×) | ✅ 3/3 complete, serialized, no OOM, 85 s wall | reliability-probes probe 3 |
| 11 | Regression: backend | ✅ **57/57** (16 suites) | `npx tsx --test` |
| 12 | Regression: frontend | ✅ **9/9** (2 files) | `npx vitest run` |

## Failure modes verified handled

- Ollama stalled / no tokens → 45 s idle timeout, clear error (no infinite hang).
- Ollama unavailable (buffered /ask) → Groq fallback; (streaming) → explicit error.
- Queue full (>32 waiters) → immediate "try again shortly" rejection.
- Client disconnect → GPU generation aborted (AbortSignal chain).
