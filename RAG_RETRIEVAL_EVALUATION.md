# RAG Retrieval Evaluation — Measured (2026-10-11)

## Retrieval latency (verified live, `node scripts/e2e-measure.js`)

| Stage | Measured |
|---|---|
| Full RAG retrieval (`retr=` in /ai/ask) | **68–109 ms** |
| Streaming-path retrieval (`retrieval=` in /ask/stream) | **9–10 ms** (warm chunk cache) |

Target <500 ms ✅. The 9 ms streaming case demonstrates the per-file chunk cache
(mtime+size invalidated) introduced in `ragService.ts` — repeated queries skip all
file reads and tokenization.

## Exact-course mapping (verified live)

| Query | Resolved | Expected |
|---|---|---|
| "Explain client server architecture…" | BCS502 | BCS502 ✅ |
| "What is addressing mode? …" | BCS302 | BCS302 ✅ |

Regression coverage: `backend/src/__tests__/ragRetrieval.test.ts` (updated in this pass).
Offline knowledge-retrieval suite: `python scripts/test_knowledge_retrieval.py` → 8/8.

## Pipeline (unchanged in shape, cached underneath)

subject resolve → module resolve → chunk retrieval (cached, tokenized once per file) →
rerank → bounded context assembly → PYQ match → diagram map lookup → citations/provenance.

Preserved exactly: course-code mapping, source provenance, diagram map
(`DATA/diagram_topic_map.json`), PYQ lists, out-of-syllabus handling. Nothing was disabled
to gain speed — the win is I/O + tokenization caching and the streaming client.

## Not done / known limits

- No vector search exists in this codebase (lexical + phrase + domain bonuses only);
  accuracy is bounded by that design. Indexing into a vector store is a future work item,
  not part of this pass.
- Diagram relevance threshold (score ≥ 20) unchanged.
