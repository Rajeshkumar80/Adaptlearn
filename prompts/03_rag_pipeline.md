# Phase 3 — RAG Pipeline (VTU Concept Q&A)

**Precondition:** Phase 1 Task 1.7 delivered a verdict (real / fake / partial RAG). This phase's scope depends entirely on that verdict — read it before starting.

**Goal:** VTU subject/module-scoped question answering that retrieves relevant chunks instead of stuffing whole documents into context, with VTU-format answers (clean points, diagrams where relevant, CO-aligned) and an automatic follow-up MCQ that feeds the BKT state tracker.

## Branch based on Phase 1.7 verdict

### If verdict was "RAG is fake" or "RAG is partial" — build/fix these:

## Task 3.1 — Add vector storage
Use `pgvector` extension on the existing Postgres (simplest — no new infra) UNLESS Phase 1 found Redis/other vector store already wired in.
```
CREATE EXTENSION IF NOT EXISTS vector;
```
Add a `DocumentChunk` Prisma model: `(id, sourceDocumentId, subjectCode, moduleNumber, content, embedding vector(768), createdAt)`. Confirm embedding dimension matches whatever embedding model you pick in 3.2.
**Verify:** migration output showing extension + table created.

## Task 3.2 — Embedding generation
Use a free/local embedding option first (check what's feasible on Ryzen 7 / 16GB RAM / RTX 4050 6GB VRAM — e.g. `all-MiniLM-L6-v2` via `@xenova/transformers` in Node, runs CPU-fine for this data volume, OR Gemini's embedding endpoint if simplicity is preferred over local-first). State which you chose and why.
Write `embedDocument(text: string): Promise<number[]>`.
**Verify:** paste a real embedding vector's length and first 5 values for a test string.

## Task 3.3 — Chunking strategy
Chunk by semantic boundary where possible (paragraph/heading), target ~300-500 tokens per chunk with ~50 token overlap. Do NOT chunk by fixed character count blindly — VTU notes have headings/module structure worth respecting.
**Verify:** run chunker on one real uploaded document, paste chunk count + first/last chunk content to confirm boundaries make sense.

## Task 3.4 — Ingestion route
`POST /api/documents/ingest` — teacher/admin uploads a PDF/notes file → extract text → chunk → embed → store with subjectCode/moduleNumber tags.
**Verify:** curl uploading a real sample doc, confirm `DocumentChunk` rows created (paste `SELECT count(*)` before/after).

## Task 3.5 — Retrieval + answer route
`POST /api/ai/ask` — input: `{ question, subjectCode, moduleNumber? }`
- Embed the question
- Cosine-similarity search (`<=>` operator in pgvector) scoped to subjectCode (and module if given), top-k (start with k=5)
- Build prompt: retrieved chunks + instruction to answer in VTU exam format (clear points, diagrams described where relevant, reference course outcomes if chunk metadata includes CO tags) → send to Gemini 2.5 Flash
**Verify:** curl a real question against real ingested data, paste the answer AND the chunk IDs that were retrieved (prove retrieval happened, not just "trust me").

### If verdict was "RAG is real" — skip to Task 3.6, only add what's missing.

## Task 3.6 — VTU answer formatting
Confirm/add a system prompt enforcing: point-wise structure, diagram description blocks where applicable, CO reference if available in chunk metadata. Test against 3 different question types (definition, comparison, numerical) — VTU answers differ by format for each.
**Verify:** paste all 3 real answers.

## Task 3.7 — Auto follow-up MCQ + state tracker hook
After every `/api/ai/ask` response, trigger a second Gemini call: generate 1 MCQ testing the concept just explained, tagged to the relevant `topicId`.
`POST /api/ai/ask` response should include `{ answer, followUpMcq: { question, options, correctIndex } }`.
When student answers it (`POST /api/ai/mcq-response`), feed result into existing BKT update function (`bkt.ts` — confirmed exists per Phase 1 audit) as a lightweight quiz-based update.
**Verify:** full real sequence — ask question → get MCQ → submit wrong answer → confirm mastery score in DB moved down (or stayed appropriately low), then submit right answer on a retry → confirm mastery moved up. Paste the DB values before/after.

## Task 3.8 — Rate limit + cost guard on new AI routes
Reuse the existing `aiLimiter` middleware pattern (per SYSTEM_REPORT: 15/min) on `/api/ai/ask` and the MCQ-generation call. Confirm token/cost logging exists or add basic logging of Gemini calls per user per day.
**Verify:** curl the route 16 times in a minute, confirm the 16th is rate-limited.

---

## Phase Exit Check
- [ ] Vector storage + embeddings proven with real data, not placeholder
- [ ] Retrieval proven — chunk IDs shown, not just an answer that could've come from context-stuffing
- [ ] VTU-format answers verified across 3 question types
- [ ] MCQ → BKT feedback loop proven with real before/after mastery values
- [ ] Full test suite re-run, no regressions from Phase 2 baseline

**Do not proceed to `04_data_ingestion.md` until retrieval is proven with real chunk-level evidence.**
