# AdaptLearn — Final Demo Guide & Presentation Walkthrough
## Step-by-Step Live Demonstration Script for Examiners & Reviewers

> **System:** AdaptLearn Major Project — Grounded Hybrid AI Educational Assistant  
> **Scheme:** VTU CSE 2022 Scheme

---

## 1. The Core Demo Story (Elevator Pitch)

When presenting AdaptLearn to faculty, examiners, or evaluators, explain the system in this exact narrative:

1. **The Problem:** General LLMs often fabricate generic software engineering jargon (such as "Structural Modularity" or "Deterministic Control") when asked VTU-specific engineering questions, and they fail to follow the marking rubrics (2M vs 10M) or retrieve genuine exam questions.
2. **The AdaptLearn Solution:** We built a grounded, multi-tier hybrid architecture:
   - **ML Model:** Extracts intent, concepts, question type, and requested marks.
   - **Hierarchical RAG:** Searches verified VTU module notes, textbooks, and question banks across 26 subjects.
   - **Exam Evidence Engine:** Retrieves historical VTU exam papers (PYQs) and model papers without hallucinating exam years.
   - **Diagram Subsystem:** Fetches verified technical diagrams or creates validated structural schematics.
   - **Ollama Generation:** Synthesizes structured examination answers tailored to marks (2M, 5M, 10M, 15M).
   - **Grounding Validator:** Verifies technical overlap and rejects generic filler before the answer is delivered.

---

## 2. Recommended Live Demonstration Questions

### Demo 1: The Core 10-Mark Theory Question
- **Query:** `"Explain addressing modes with suitable examples for 10 marks."`
- **Expected Highlights:**
  - Subject resolved: **BCS302** (Digital Design and Computer Organization), Module 3.
  - Sections generated: 4 structured sections (Definition, Explanation, How It Works, Examples).
  - Addressing modes covered: Immediate, Register, Direct, Indirect.
  - Provenance: Sourced directly from Module 3 notes and VTU question bank.
  - Zero generic filler.

### Demo 2: Architecture & Diagram Retrieval
- **Query:** `"Explain ARM architecture with a neat diagram for 10 marks."`
- **Expected Highlights:**
  - Subject resolved: **BCS402** (Microcontrollers), Module 5.
  - Diagram: ARM Cortex architecture diagram retrieved and verified.
  - Zero cross-subject contamination (no 8051 or DDCO confusion).

### Demo 3: Programming Question with Complexity
- **Query:** `"Write a BFS program and explain its complexity."`
- **Expected Highlights:**
  - Subject resolved: **BCS304** (Data Structures and Applications).
  - Code: Complete executable C program for Graph BFS.
  - Complexity: Explicitly states Time Complexity $O(V + E)$ and Space Complexity $O(V)$.

### Demo 4: Negative Query Handling (Zero Hallucination)
- **Query:** `"Explain quantum biological telepathy in underwater submarines."`
- **Expected Highlights:**
  - RAG status: `hasContext: false`, Retrieval Confidence: `NONE`.
  - Honest message: *"Notice: Topic Not Found in VTU Syllabus Knowledge Base."*
  - Zero hallucinated essays.

### Demo 5: Mark-Based Adaptation
- **Comparison:** Ask `"Explain machine learning types"` for **2 marks** vs **15 marks**:
  - **2 Marks:** Produces concise 2 sections (definition + core principle).
  - **15 Marks:** Produces 6 comprehensive sections (definition, mechanism, real-world case studies, comparative matrix, exam tips).

---

## 3. How to Run the Verification Commands

From the root directory (`d:\Adaptlearn`):

1. **Phase 3 Regression Suite (10/10):**
   ```bash
   node scripts/test_runtime_rag.js
   ```
2. **Phase 4 Pipeline Evaluation Suite (57/57):**
   ```bash
   node scripts/test_phase4_pipeline.js
   ```
3. **Master End-to-End Integration Suite (10/10):**
   ```bash
   node scripts/test_final_integration.js
   ```
4. **Backend TypeScript Build:**
   ```bash
   cd backend && npm run build
   ```
5. **Frontend Production Build:**
   ```bash
   cd frontend && npm run build
   ```
