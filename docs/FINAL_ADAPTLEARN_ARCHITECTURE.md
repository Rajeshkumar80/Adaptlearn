# AdaptLearn — Final System Architecture
## Complete Grounded Educational AI System for VTU CSE 2022 Scheme

> **Status:** Production Architecture Verified  
> **Evaluation:** 77/77 Tests Passing (100%)  
> **Key Principle:** ML understands questions; RAG retrieves verified academic truth; Ollama generates according to strict VTU examination rubrics; Grounding Validator verifies fidelity.

---

## 1. High-Level Architecture Overview

AdaptLearn separates query comprehension, academic retrieval, exam pattern matching, diagram synthesis, language generation, and factual verification into isolated, traceable stages:

```text
                                  USER QUESTION
                                        │
                                        ▼
                   ┌───────────────────────────────────────────┐
                   │       EXISTING ADAPTLEARN ML MODEL        │
                   │    (GGUF in Ollama / Local Retrieval)     │
                   └────────────────────┬──────────────────────┘
                                        ▼
                   ┌───────────────────────────────────────────┐
                   │             QUESTION ANALYZER             │
                   │ • Canonical Subject (BCS302, BCS402, ...) │
                   │ • Module Number Resolution (1–5)          │
                   │ • 12 Question Types (definition, code,..) │
                   │ • Mark Estimation (2M, 5M, 10M, 15M)      │
                   │ • Key-point & Entity Extraction           │
                   │ • Ambiguity Detector & Clarification      │
                   └────────────────────┬──────────────────────┘
                                        ▼
                   ┌───────────────────────────────────────────┐
                   │             MULTI-SOURCE RAG              │
                   │ • Tier 1: Module Notes & Textbooks        │
                   │ • Tier 2: Question Banks & Important Qs   │
                   │ • Tier 3: Previous Year Papers (PYQs)     │
                   │ • Tier 4: Model Question Papers           │
                   │ • Tier 5: Diagram Assets & Schematics     │
                   └────────────────────┬──────────────────────┘
                                        ▼
                   ┌───────────────────────────────────────────┐
                   │                 RERANKER                  │
                   │ • Content-type priority weighting         │
                   │ • Key-point token & n-gram overlap        │
                   │ • Module alignment & syllabus boundaries  │
                   │ • Dynamic Context Budgeting (1500–4500c)  │
                   │ • Retrieval Confidence (HIGH/MED/LOW/NONE)│
                   └────────────────────┬──────────────────────┘
                                        ▼
                               BEST VERIFIED CONTEXT
                                        │
                       ┌────────────────┴────────────────┐
                       ▼                                 ▼
               TEXT EVIDENCE RETRIEVAL             DIAGRAM SUBSYSTEM
                       │                         • Indexed Asset Search
                       │                         • Verified Fallback Generator
                       │                         • Structural Validation Check
                       └────────────────┬────────────────┘
                                        ▼
                   ┌───────────────────────────────────────────┐
                   │          STRUCTURED OLLAMA PROMPT         │
                   │ • Authoritative Syllabus Context          │
                   │ • PYQ Historical Evidence (No Hallucinated│
                   │   Years)                                  │
                   │ • Model Paper Practice (Clean Segregation)│
                   │ • VTU Answer Rules by Marks (2M–15M)      │
                   └────────────────────┬──────────────────────┘
                                        ▼
                   ┌───────────────────────────────────────────┐
                   │                OLLAMA LLM                 │
                   │         (VTU-Oriented Answer Gen)         │
                   └────────────────────┬──────────────────────┘
                                        ▼
                   ┌───────────────────────────────────────────┐
                   │            GROUNDING VALIDATOR            │
                   │ • Zero Generic Filler Enforcement         │
                   │ • Cross-Subject Hardware Barrier Check    │
                   │ • Grounding Score (overlap with context)  │
                   │ • Diagram-Text Topic Alignment Check      │
                   └────────────────────┬──────────────────────┘
                                  /            \
                             PASS                FAIL (Score < 0.25 or Filler)
                              │                        │
                              ▼                        ▼
                        FINAL ANSWER          TARGETED RETRY LOOP
                                              (Max 2 retries with
                                               targeted correction)
```

---

## 2. Component Specifications

### 2.1 Query Understanding Layer
- **Module:** [`questionAnalyzer.ts`](file:///d:/Adaptlearn/backend/src/services/questionAnalyzer.ts)
- **Role:** Classifies incoming student prompts into 12 distinct VTU question types:
  `definition`, `explain`, `describe`, `list`, `compare`, `differentiate`, `derive`, `calculate`, `numerical`, `algorithm`, `program`, `architecture`.
- **Marks & Depth:** Estimates depth (`short`, `medium`, `deep`) and maps to VTU marking scale (2M, 5M, 10M, 15M).
- **Ambiguity Guard:** Detects bare queries (e.g. single words like "architecture") without curriculum context and prompts students for subject clarification before retrieving.

### 2.2 Hierarchical Knowledge Ingestion & RAG
- **Module:** [`ragService.ts`](file:///d:/Adaptlearn/backend/src/services/ragService.ts)
- **Data Store:** 125 syllabus modules across 26 canonical VTU CSE 2022 Scheme subjects in `knowledge/<SUBJECT>/` + `DATA/question_papers/`.
- **Hierarchical Filter:** Subject resolution → Module resolution → Semantic paragraph chunking → N-gram phrase & keyword scoring.
- **Contamination Shield:** Enforces strict curriculum boundaries; queries for hardware subjects (BCS302, BCS402) are protected from software/cloud bleed.

### 2.3 Reranker & Context Budgeting
- **Module:** [`reranker.ts`](file:///d:/Adaptlearn/backend/src/services/reranker.ts)
- **Weighting:** Reranks candidate chunks with bonuses for Question Bank solutions (1.25x), primary module notes (1.15x), module match (+8), and key-point overlap (+3 per keyword).
- **Budgeting:** Allocates character budgets:
  - 1,500 chars for short/definition queries (2–4 marks)
  - 3,200 chars for standard explanations (5–8 marks)
  - 4,500 chars for deep architecture/10–15 mark questions
- **Confidence Scoring:** Assigns `HIGH`, `MEDIUM`, `LOW`, or `NONE` retrieval confidence.

### 2.4 Diagram Subsystem
- **Module:** [`diagramService.ts`](file:///d:/Adaptlearn/backend/src/services/diagramService.ts)
- **Requirement Detection:** Categorizes diagram need as `requiresDiagram`, `diagramHelpful`, or `diagramNotNeeded`.
- **Priority:**
  1. Verified labelled diagram from indexed assets (`DATA/diagrams/`)
  2. Verified technical fallback Mermaid specification (e.g. 1NF–BCNF hierarchy, 8051 pinout, ARM registers)
- **Consistency Guard:** Validates diagram node count, connections, and semantic alignment with the topic to eliminate mismatched diagrams.

### 2.5 Auxiliary Formula & Code Pipelines
- **Code Pipeline:** [`codePipeline.ts`](file:///d:/Adaptlearn/backend/src/services/codePipeline.ts) — Full C/C++ implementations for data structures and graph algorithms (BFS, DFS, binary search) with asymptotic complexity analysis.
- **Formula Pipeline:** [`formulaService.ts`](file:///d:/Adaptlearn/backend/src/services/formulaService.ts) — Mathematical formulas (Effective Access Time, Shannon Capacity, 8051 Baud Rate, Gray Code) with LaTeX rendering and step-by-step substitution templates.

### 2.6 Post-Generation Validation & Retry Loop
- **Module:** [`groundingValidator.ts`](file:///d:/Adaptlearn/backend/src/services/groundingValidator.ts)
- **Sanitizer:** Eliminates hallucinated boilerplate sections (e.g., "Structural Modularity", "Deterministic Control", "Initialization & Ingestion").
- **Grounding Score:** Computes technical token overlap between the generated text and the retrieved context (threshold: ≥ 0.25).
- **Controlled Retries:** Re-prompts Ollama with targeted rejection notes up to 2 times; if insufficient context persists, gracefully falls back to an honest syllabus notice.

---

## 3. Technology Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js 25 + TypeScript 5.7 |
| Web Framework | Express 4.21 + Helmet + CORS |
| ORM & Database | Prisma 6.4 + PostgreSQL + pgvector |
| Frontend | Next.js 15 + React 19 + TypeScript |
| Local LLM | Ollama (`adaptlearn` GGUF) |
| Cloud Fallback | Groq API (`qwen/qwen3.8-27b`) |
| Parsing & RAG | Custom TypeScript Hierarchical Search + Regex Stemmer |
