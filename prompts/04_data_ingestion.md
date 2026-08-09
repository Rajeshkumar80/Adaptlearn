# Phase 4 — Real VTU Data Ingestion (Sem 5 & 6, CSE 2022 Scheme)

**Precondition:** Phase 3 RAG pipeline proven working end-to-end with test/sample documents.

**Goal:** Load real VTU semester 5 & 6 CSE syllabus, textbooks/notes, and PYQs into the system so the RAG pipeline answers from real course content, and seed 3-4 teacher accounts + 30-40 student accounts for demo.

## This phase has a hard external dependency

The source PDFs (syllabus, textbooks/notes, PYQs for sem 5 & 6) must be supplied by the human before this phase can run. **If files are not yet present in the input directory, STOP and report this as BLOCKED — do not fabricate or hallucinate VTU syllabus content to fill the gap.**

## Task 4.1 — Inventory check
List every file provided. For each, identify: subject code, subject name, semester, document type (syllabus / textbook-notes / PYQ / model-paper).
**Verify:** print the full inventory table before ingesting anything. If subject codes are ambiguous or missing from filenames, ask rather than guess.

## Task 4.2 — Subject + Module seed data
Before bulk document ingestion, seed the `Subject` and `Topic`/`Module` structure from the official VTU syllabus for each subject (subject code, name, modules, course outcomes, credits). This is structured data entry, not RAG — it drives the dependency graph and CO mapping, so accuracy matters more than speed here.
**Verify:** paste seeded row counts per subject, spot-check 2 subjects' module lists against the actual syllabus PDF.

## Task 4.3 — Bulk document ingestion
Run the Phase 3 ingestion pipeline (`/api/documents/ingest` or a batch script wrapping it) across all provided textbook/notes PDFs, tagged by subject+module.
**Verify:** paste per-subject chunk counts. Spot check: retrieve 3 random chunks and confirm they contain real, readable VTU content (not garbled OCR/extraction).

## Task 4.4 — PYQ ingestion + frequency scoring
Ingest PYQ PDFs. For each subject, extract question-to-topic mapping (this can be a simpler keyword/LLM-assisted classification pass, NOT the full NLP pipeline from the report — confirm this scoping decision is intentional, see Phase 6 notes on deferred features). Compute frequency scores per topic and populate the `pyqImportance` field added in Phase 2 Task 2.10.
**Verify:** paste a real topic → pyqImportance score table for at least one subject, spot-check that high-frequency topics look plausible (i.e., a topic you know is commonly asked scores higher than a rarely-tested one).

## Task 4.5 — Course Outcome mapping
Populate CO data (number, description, Bloom's level, weightage) per subject from the syllabus, link to relevant `DocumentChunk`s so retrieval answers can cite CO alignment (used by Phase 3 Task 3.6 formatting).
**Verify:** one real retrieved answer showing a CO reference sourced from actual seeded data.

## Task 4.6 — Demo user seed (3-4 teachers, 30-40 students)
Extend `seed.ts`: create 3-4 teacher accounts (assign to different subjects), 30-40 student accounts with realistic USN/branch/semester naming, distributed across 1-2 `Class` records created in Phase 2.
**Verify:** paste seeded counts, and one full login test per role (teacher + student) showing JWT issued correctly.

---

## Phase Exit Check
- [ ] Real VTU content ingested and spot-checked for extraction quality
- [ ] PYQ frequency scores populated and sanity-checked
- [ ] CO mapping present and retrievable
- [ ] Demo accounts seeded and login-tested for both roles
- [ ] Full test suite re-run, no regressions

**Do not proceed to `05_frontend_rebuild.md` until real data is confirmed loaded — do not proceed on placeholder/seed-only data if real files were supposed to be provided.**
