# AdaptLearn — Performance Baseline & Verified Results

Date: 2026-10-11 · Machine: local dev (RTX 4050 6 GB, 16 GB RAM) · Model: `llama3.1:8b` Q4_K_M

## Root cause of the two HTTP 500 failures (reproduced → fixed → verified)

**Cause (measured):** the old `ollamaChat()` imposed a **25 s hard timeout on non-streaming
`/api/chat`** calls. A full VTU answer at this hardware's sustained ~14 tok/s takes **31–92 s**
(436–1200 tokens). The timer fired mid-generation, destroyed the socket, and surfaced as
HTTP 500 to the frontend after ~25 s. Verified by timing math before any code change:
`num_predict=1200 × 1/14 tok/s ≈ 86 s ≫ 25 s`.

**Fix (`backend/src/services/ollamaClient.ts`, new shared client):**
- Always streams NDJSON from Ollama → the socket stays alive while generating; no idle-death.
- `keep_alive: 30m` → model stays loaded between questions (no per-question cold load).
- Single-slot generation queue (max 1 concurrent) → cannot OOM the 6 GB VRAM / 16 GB RAM.
- 45 s *idle* timeout (no tokens = hang) instead of a destructive *total* timeout.
- AbortSignal propagation end-to-end: browser tab close → Express → GPU generation stops.
- Queue wait 60 s → **240 s**: one generation ≈ 90 s, so a 2-deep queue legitimately waits
  ~3 min. At 60 s, 2 of 3 concurrent requests failed with a false "queue timed out" error
  (measured in probe run 1); after the fix **3/3 complete** (probe run 2).

## Measured before/after

| Metric | Before (baseline) | After (verified live) | Target | Status |
|---|---|---|---|---|
| Login (POST /auth/login) | ~0.33–0.40 s | **0.40 s** | <1 s | ✅ |
| RAG retrieval only | 77–109 ms | **9–109 ms** | <500 ms | ✅ |
| First visible token (warm, streaming) | n/a (no streaming; 25 s → 500) | **110–115 ms** | 2–3 s | ✅ |
| Full answer (436 tok) | died at 25 s (HTTP 500) | **31–33 s** (14.4 tok/s) | report separately | ✅ hw-bound |
| Full answer (1200 tok, longest) | died at 25 s (HTTP 500) | **92 s** | report separately | ✅ hw-bound |
| 3 concurrent requests | would OOM / queue-fail | **3/3 complete, 85 s wall, serialized** | bounded | ✅ |
| Mid-stream abort | hung | **clean client-abort; slot freed; next request 13–19 s** | recovery | ✅ |
| Production build (frontend) | — | clean, 19 routes | — | ✅ |
| `/student/tutor` first-load JS | "6,006 modules" (dev metric) | **16.9 kB route / 182 kB first load** | lean | ✅ |
| Backend tests | 44/44 | **57/57** (16 suites) | no regressions | ✅ |
| Frontend tests | 9/9 | **9/9** | no regressions | ✅ |

**Full-answer latency is hardware-bound**, not a software defect: 464 tokens ÷ 14.4 tok/s
≈ 33 s on RTX 4050. The only software lever is generating fewer tokens, which would
degrade VTU exam-answer quality — not taken. First-token streaming is the UX fix and it
lands in ~0.1 s warm.

## Commands (reproducible)

```bash
# backend tests          cd backend && npx tsx --test src/__tests__/*.test.ts
# frontend tests         cd frontend && npx vitest run
# frontend prod build    cd frontend && npx next build
# backend tsc            cd backend && npx tsc --noEmit
# e2e timings            node scripts/e2e-measure.js
# abort + concurrency    node scripts/reliability-probes.js
```

## Changed files

- `backend/src/services/ollamaClient.ts` (new) — streaming Ollama client
- `backend/src/routes/ai.ts` — `/ask` uses shared client; new `/ask/stream` SSE endpoint
- `backend/src/services/ragService.ts` — per-file chunk cache (mtime+size invalidated);
  previously every `/ask` re-read + re-tokenized every module file synchronously
- `backend/src/services/llm.ts` — client wiring
- `frontend/src/app/student/tutor/page.tsx` — SSE consumption, live tokens, AbortController
- `scripts/e2e-measure.js`, `scripts/reliability-probes.js`, `scripts/abort-probe.js` (new)

## Remaining blockers / notes

- Cold model load (first question after Ollama restart) adds ~5–20 s before first token;
  mitigated by `keep_alive: 30m` for all subsequent questions. Not further reducible.
- Cloud Groq fallback retained for buffered `/ask` when Ollama is down (verified by test suite).
- Streaming requests do not silently fail over to Groq (incoherent mid-answer); they surface
  a clear error instead — intentional.
