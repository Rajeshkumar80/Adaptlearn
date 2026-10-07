# AdaptLearn — Final RAG Pipeline Specification
## Multi-Source Knowledge Ingestion, Hierarchical Retrieval & Reranking

> **Status:** Verified & Tested (100% Pass Rate across 77 Unit & Integration Tests)  
> **Curriculum:** VTU CSE 2022 Scheme (26 Subjects, 125 Modules)

---

## 1. Multi-Tier Knowledge Hierarchy

AdaptLearn enforces a 5-tier knowledge hierarchy to ensure academic accuracy and clean provenance separation:

```text
┌─────────────────────────────────────────────────────────────────┐
│ Tier 1: Core Academic Knowledge (Module Notes & Textbooks)       │
│ • Authoritative definition, fundamental mechanisms, parameters │
│ • Sourced from VTU official notes & standard course textbooks   │
├─────────────────────────────────────────────────────────────────┤
│ Tier 2: Exam-Oriented Knowledge (Question Banks & Solved QBs)   │
│ • Solved answers, marking rubrics, structured key points        │
│ • High-priority reranking boost (1.25x weight)                  │
├─────────────────────────────────────────────────────────────────┤
│ Tier 3: Historical Exam Evidence (Previous Year Papers — PYQ)   │
│ • Real university question sessions (e.g. "June July 2025")     │
│ • Never treated as definition source; evidence of exam trends   │
├─────────────────────────────────────────────────────────────────┤
│ Tier 4: Practice & Exam Patterns (Model Question Papers)        │
│ • Model question sets, practice formulations                    │
│ • Segregated from PYQ (never conflated with real past exams)    │
├─────────────────────────────────────────────────────────────────┤
│ Tier 5: Supporting Visual Resources (Diagram Assets & Mermaid)  │
│ • Curated labelled diagrams from syllabus notes & schematics    │
│ • Verified Mermaid fallback specifications                      │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. Ingestion & Preprocessing Pipeline

### 2.1 Storage Layout
```text
knowledge/
  ├── subjects.json                  # Canonical 26-subject registry
  ├── knowledge_manifest.json        # Integrity checksums and chunk counts
  ├── BCS302/
  │     ├── metadata.json            # Subject & module descriptors
  │     ├── module1.md ... module5.md# 5 Syllabus modules (Markdown)
  │     ├── question_bank_solutions.md
  │     └── important_questions.md
  └── ... (25 other subjects)

DATA/
  ├── question_papers/               # PYQs and Model Papers by semester & subject
  │     ├── 3RD SEM/BCS302/previous_papers.md
  │     ├── 3RD SEM/BCS302/model_papers.md
  │     └── ...
  ├── diagrams/                      # Labelled diagram images & SVG schematics
  └── diagram_topic_map.json         # Diagram metadata & keywords map
```

### 2.2 Ingestion Guarantees
- Text from notes and question papers preserves headings, bullet structures, code blocks, and math formulas.
- Every chunk tracks its provenance: `subjectCode`, `moduleNumber`, `sourceFile`, `contentType`.
- Suffix stemming and regex normalization handle varied VTU abbreviations (e.g., `K-Map`, `kmap`, `Karnaugh Map`).

---

## 3. Hierarchical Retrieval Engine

```text
Student Question
      │
      ▼
1. Canonical Subject Routing:
   Resolves code via `knowledge/subjects.json` (e.g. "DDCO" → "BCS302").
      │
      ▼
2. Module Number Resolver:
   Detects targeted module (1–5) using title keyword matching.
      │
      ▼
3. Semantic Paragraph Chunking:
   Extracts candidate text blocks from `knowledge/<SUBJECT>/` files.
      │
      ▼
4. Multi-Faceted Scoring:
   • Token Overlap (stemmed word intersection)
   • Exact N-Gram Phrase Bonus (+8 per phrase match)
   • Domain Keyword Alignment (+15 for core entities: "addressing mode", "k-map", "1nf", etc.)
   • Module Alignment Bonus (+6 if topical relevance confirmed)
      │
      ▼
5. Cross-Subject Boundary Enforcement:
   Filters out bleed from unrelated branches (e.g., prevents OS/Cloud terms in DDCO/Microcontrollers).
```

---

## 4. Reranker & Dynamic Context Budgeting

### 4.1 Reranking Strategy
Every candidate chunk is evaluated by [`reranker.ts`](file:///d:/Adaptlearn/backend/src/services/reranker.ts):
$$\text{FinalScore} = (\text{RawScore} \times \text{ContentTypeWeight}) + \text{ModuleBonus} + (\text{KeyPointMatches} \times 3) + \text{TopicMatch}$$

- **Content-Type Multipliers:**
  - `qbank` / `important_questions`: **1.25x**
  - `primary_module`: **1.15x**
  - `textbook`: **1.0x**

### 4.2 Dynamic Context Budgets
Context sent to the LLM is tightly budgeted according to estimated answer depth:
- **Short / Definition (2–4 marks):** 1,500 characters
- **Standard Explanation (5–8 marks):** 3,200 characters
- **Deep Architecture / Derivation (10–15 marks):** 4,500 characters

### 4.3 Confidence Thresholds
- **HIGH:** Top candidate score $\ge 35$
- **MEDIUM:** Top candidate score $\ge 20$
- **LOW:** Top candidate score $\ge 10$
- **NONE:** Score $< 10$ or zero chunks (triggers honest syllabus notice)
