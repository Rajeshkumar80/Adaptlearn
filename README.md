# AdaptLearn — Adaptive Learning Platform for VTU (Team 15)

Adaptive VTU study platform: AI tutor grounded in module notes (RAG + citations), SM-2 + BKT mastery model, prerequisite-gated roadmap with sub-topic checklists, free-hours planner, auto-graded tests with anti-cheat integrity ledger, notes/assignments/class management, and real-time socket notifications.

Built greenfield per specification (local PostgreSQL + pgvector).

---

## Architecture

| Layer | Stack | Location |
| :--- | :--- | :--- |
| **Backend API** | Express + TypeScript + Prisma + pgvector + Socket.IO | `backend/` |
| **Frontend** | Next.js 15 (App Router) + Tailwind CSS + Recharts + Framer Motion | `frontend/` |
| **Database** | PostgreSQL local, pgvector extension, HNSW index on 384-dim embeddings | `adaptive_learning_platform` |
| **Embeddings & Vector Search** | High-dimensional dense embeddings (384-dim projection) + pgvector HNSW index | `backend/src/services/embeddings.ts` |
| **Query Engine & AI Tutor** | Fine-tuned Local Academic Language Model + Anti-Hallucination Grounding Validator | `backend/src/services/` |
| **Design System** | "Academic Ledger" — serif headings, warm paper background, brass accents | root |

---

## System Overview

### Core Learning Model

- **BKT (Bayesian Knowledge Tracing):** `pKnow` calculated per student per topic, updated continuously on every study or quiz event.
- **SM-2 Spaced Repetition:** `easiness`, `interval`, and `repetition` tracked per topic, driving intelligent review scheduling.
- **Mastery Gate:** Prerequisite topics require $pKnow \ge 0.7$ (configurable threshold) before dependent topics unlock in the syllabus graph.
- **Sub-Topic Checklists:** Each syllabus topic decomposes into 2+ granular sub-topics (sourced directly from official VTU module breakdowns). Completing all sub-topics auto-masters the parent topic (sets `pKnow = 1.0` on the active `LearningState` row), re-evaluates prerequisite gates, unlocks dependent topics across the roadmap, and emits a live `topic-unlocked` Socket.IO event.

### Data Flow

```text
Student Action (checklist tick, quiz answer, study session)
       ↓
POST /api/learning-state/update  OR  POST /api/subtopics/:id/toggle
       ↓
Prerequisite Gate Check (403 if any prereq mastery < 0.7)
       ↓
BKT Update + SM-2 Update → LearningState upsert (mastery, stability, counts)
       ↓
StudySession recorded (audit trail)
       ↓
If checklist: all sub-topics done? → mastery = 1.0 + dependent unlock check
       ↓
Socket.IO emit "topic-unlocked" {topicId, name} to student's user:<id> room
       ↓
Frontend receives event → pulse animation on unlocked card + live counter update
```

---

## Backend — Complete Module & Flow Reference

### 1. Auth & Security (`src/routes/auth.ts`, `src/middleware/auth.ts`)
- **Endpoints:** `POST /register`, `POST /login`, `POST /refresh`, `GET /me`
- **JWT:** 7-day access token (HS256), `role` + `classId` embedded in claims
- **Rate Limits:** Auth 10/min, API 120/min, AI 15/min (token bucket)
- **Passwords:** `bcryptjs` (cost factor 12)
- **Middleware:** `requireAuth` attaches `req.user`; `requireTeacher` and `requireAdmin` enforce role gates

### 2. Subjects & Syllabus (`src/routes/vtu.ts`)
- **Endpoints:** `GET /subjects`, `GET /subjects/:code`, `GET /subjects/:code/modules`
- **Data Source:** `data/syllabus/sem<NN>/<CODE>.md` — parsed once at seed
- **Syllabus Parser:** (`src/services/pyq-scorer.ts` + seed logic)
  - `# Module N: Title` headers
  - `## Topics Covered` → bullet `- **Topic Name**: description`
  - Description comma-split → `SubTopic` rows (parenthesis-aware, fallback "and"-split)
  - $\ge 2$ sub-topics guaranteed per topic; strictly verified VTU terminology

### 3. Roadmap & Prerequisite Graph (`src/routes/roadmap.ts`)
- **Endpoint:** `GET /api/roadmap/:subjectCode`
- **Returns:** Every topic with `moduleNumber`, `order`, `pyqImportance`, `mastery`, `locked`, `lockedBy`, `subTopicsTotal`, `subTopicsDone`
- **Lock Logic:** Topic is locked if and only if any prerequisite's `LearningState.mastery < 0.7`
- **Dependency Edges:** Created at seed — every module-$N$ topic depends on all module-$(N-1)$ topics
- **Unlock Trigger:** When a topic reaches mastery $\ge 0.7$, all dependent nodes are re-evaluated; newly unlocked topics return `locked: false`

### 4. Sub-Topic Checklists (`src/routes/subtopics.ts`)
- **Endpoints:**
  - `GET /api/topics/:topicId/subtopics` — topic metadata + student completion status per sub-topic
  - `POST /api/subtopics/:id/toggle` — toggles `SubTopicProgress.completed`
- **Auto-Master:** When the last sub-topic of a topic is marked completed → `LearningState` upsert with `mastery: 1.0`, `correctCount + 1`, `timesReviewed + 1`, updated `lastReviewedAt`, and a `StudySession` record (`method: "subtopic-checklist"`).
- **Dependent Unlock:** Immediately following auto-master, scans all dependent topics; emits `topic-unlocked` for every dependent whose prerequisites are now satisfied.
- **Design Decision:** Un-toggling a sub-topic does not revert parent mastery — forgetting is governed by BKT/SM-2 decay functions only.

### 5. Learning State & Mastery (`src/routes/learning-state.ts`)
- **Endpoint:** `POST /api/learning-state/update`
- **Input:** `topicId`, optional `quality` (0–5 SM-2), optional `correct` (BKT observation)
- **Process:**
  1. Prerequisite gate check (returns 403 if blocked)
  2. BKT update: `updateBkt({mastery, correctCount, wrongCount, timesReviewed}, correct)`
  3. SM-2 update: `sm2Update({easiness, intervalDays, repetition, lastReviewedAt}, quality)`
  4. Upsert `LearningState` record with updated mastery, stability, and repetition counts
  5. Append `StudySession` audit log
  6. Evaluate achievement badges
- **Response:** Updated learning state and any newly unlocked achievements

### 6. AI Tutor, Query Understanding & RAG Pipeline (`src/routes/ai.ts`, `src/services/ai.ts`, `src/services/groundingValidator.ts`, `src/services/completenessValidator.ts`, `src/services/diagramService.ts`)
- **Endpoints:**
  - `POST /api/ai/ask` — Grounded student query answering with citations and follow-up MCQ
  - `POST /api/ai/mcq-response` — Verifies MCQ answer and updates learning state
  - `POST /api/ai/pyq` — Specialized previous year questions retrieval (exact/related exam questions, no essays)
  - `POST /api/ai/model-paper` — Official model question paper retrieval
  - `POST /api/ai/syllabus` — Direct canonical module and topic breakdown from master curriculum
- **Rate Limit:** 15 requests/minute per user

#### Multi-Source Knowledge Base & Master Curriculum
The system indexes the complete **VTU CSE 2022 Scheme (Semesters 3 to 7)** curriculum (`knowledge/vtu_2022_scheme_master.json`):
- **67 Verified Courses:** 20 core (theory, IPCC, lab), 18 professional electives, 9 open electives, 12 ability enhancement / skill labs, 8 project & human values courses.
- **335 Syllabus Modules:** Granular module taxonomy directly parsed from official VTU scheme specifications (`DATA/scheme/38csesch.txt`).
- **Question-Level Examination Database:** 1,748 individual university past exam and model questions (`knowledge/pyq_database.json`) indexed with marks, year, session, Bloom's level, and course outcomes.
- **Visual Knowledge Graph:** 439 cataloged figures across 22 subjects (`knowledge/diagram_knowledge_graph.json`) + verified native Mermaid schematics and VTU drawing guidelines.
- **Multi-Source Evidence Hierarchy:**
  1. **Primary Syllabus Notes (1.15x weight):** Concise module notes as primary factual anchor (`[PRIMARY SOURCE]`).
  2. **Question Banks (1.25x weight):** Exam-oriented structure, high-frequency marks templates.
  3. **Textbook Notes (1.00x weight):** Prescribed reference textbooks for deep conceptual elaboration (`[ADDITIONAL REFERENCE]`).
  4. **PYQ & Model Papers (1.20x weight):** Historic university exam sessions and pattern tracking.
  5. **Diagram Intelligence:** 439 indexed figures + verified native Mermaid schematics & drawing instructions.

#### Retrieval, Completeness & Grounding Workflow
```text
Student Question
       ↓
Dual-Layer Router
  → Conversational query (Hello, Who are you) → Direct instant response (<15ms)
  → Academic query → Question Analyzer
       ↓
Question Analyzer
  → Intent Classification (9 intents: PYQ, MODEL_PAPER, QUESTION_BANK, SYLLABUS, DIAGRAM, COMPARISON, DEFINITION, NUMERICAL, EXPLANATION)
  → Subject code resolution (150+ aliases → canonical codes like BCS403)
  → Module number & subtopic extraction
  → Mark estimation (2M, 5M, 10M, 15M)
       ↓
Specialized Handler / Multi-Source RAG
  → SYLLABUS queries → Direct metadata return (zero RAG overhead)
  → PYQ / Model Paper queries → Specialized exam extraction
  → Academic queries → Hybrid BM25 (acronym-aware) + 384-dim dense vector search
       ↓
Cross-Source Reranking & Concept Completeness Loop
  → Lecture notes prioritized as primary source
  → CompletenessValidator audits required concepts (e.g. ER attribute types, addressing modes)
  → Missing key concepts trigger targeted re-retrieval (max 2 retries)
       ↓
Visual Knowledge Augmentation
  → Injects relevant textbook figure metadata & verified Mermaid diagrams
       ↓
Ollama VTU Generation & Anti-Hallucination Validation
  → System contract enforces strict identity ("AdaptLearn"), student-friendly tone, and marks calibration
  → GroundingValidator audits factual claims against retrieved evidence
  → Verified response returned with non-leaking citations and follow-up BKT practice MCQ
```

#### VTU Answer Conventions
Answers strictly adhere to VTU valuation schemes:
- **Marks-Aware Depth:**
  - **2M:** Crisp, unambiguous definition or statement (50–90 words)
  - **5M:** Focused explanation, key points, syntax/equations (150–250 words)
  - **10M:** Detailed explanation, step-by-step procedure, code/diagram reference (350–550 words)
  - **15M:** In-depth breakdown, architecture, comparisons, and practical applications (600–900 words)
- **Follow-up MCQ:** Each response generates a context-grounded multiple-choice question feeding back into `/api/learning-state/update` for continuous BKT mastery tracking.

### 7. Tests & Anti-Cheat (`src/routes/tests.ts`)
- **Teacher:** Create and manage tests (MCQ format), assigned per class, tagged with PYQ metadata.
- **Student:** Single-submission test engine with instant automated scoring.
- **Integrity Ledger (Anti-Cheat):** Captures client-side telemetry:
  - `tabSwitchCount`, `copyPasteCount`, `blurCount`, `resizeCount`, `idleTimeMs`
  - Stored persistently in `CheatFlag` and `TestResult` records.
- **Analytics:** `/teacher/analytics` aggregates class performance, score distributions, and flagged submissions.

### 8. Notes & Documents (`src/routes/notes.ts`, `src/routes/documents.ts`)
- **Upload & Parsing:** Markdown, TXT, and PDF ingestion into sliding chunks (500 tokens, 50-token overlap).
- **Indexing:** High-dimensional vector projection stored in `Document` and `DocumentChunk` with pgvector HNSW indexing.
- **Ingestion CLI:**
  ```bash
  npm run ingest -- --subject BCS501 --module 1
  npm run ingest -- --all
  ```

### 9. Assignments (`src/routes/assignments.ts`)
- **Teacher:** Create assignments with description, due dates, class associations, and optional resource links.
- **Student:** Submit assignment deliverables and links (`AssignmentSubmission`).
- **Grading:** Teachers review submissions with numerical score and qualitative feedback.

### 10. Classes & Notifications (`src/routes/classes.ts`, `src/routes/notifications.ts`)
- **Class Rosters:** Teacher class creation, student enrollment, and roster management.
- **Socket.IO Room Topology:** `global`, `role:<ROLE>`, `class:<id>`, `user:<id>`.
- **Real-Time Dispatch:**
  - `emitToClass(classId, "notification", payload)` — Broadcast announcements
  - `emitToUser(userId, "topic-unlocked", payload)` — Dispatched upon auto-mastery
- **Inbox:** `GET /api/notifications/mine` for persistent notification retrieval.

### 11. Planner & Scheduler (`src/routes/planner.ts`, `src/services/scheduler.ts`)
- **Inputs:** Available free hours per week, exam target date, subject priority weightings.
- **Priority Scoring Formula:**
  $$\text{Priority} = (\text{masteryDeficit} \times 0.4) + (\text{pyqImportance} \times 0.3) + (\text{dependencyCount} \times 0.2) + (\text{reviewDue} \times 0.1)$$
- **Output:** Balanced weekly study timetable with dedicated review blocks and buffer allocation.

---

## Database Schema (Prisma)

### Core Models

```prisma
model User {
  id             String             @id @default(cuid())
  email          String             @unique
  passwordHash   String
  role           Role               @default(STUDENT)
  classId        String?
  class          Class?             @relation(fields: [classId], references: [id])
  learningStates LearningState[]
  studySessions  StudySession[]
  subTopicProgress SubTopicProgress[]
}

model Subject {
  id        String     @id @default(cuid())
  code      String     @unique
  name      String
  semester  Int
  topics    Topic[]
  documents Document[]
}

model Topic {
  id             String          @id @default(cuid())
  subjectCode    String
  subject        Subject         @relation(fields: [subjectCode], references: [code])
  moduleNumber   Int
  name           String
  description    String
  order          Int
  pyqImportance  Float           @default(0)
  prerequisites  Topic[]         @relation("TopicDependencies")
  dependents     Topic[]         @relation("TopicDependencies")
  learningStates LearningState[]
  subTopics      SubTopic[]
}

model SubTopic {
  id         String             @id @default(cuid())
  topicId    String
  topic      Topic              @relation(fields: [topicId], references: [id], onDelete: Cascade)
  title      String
  orderIndex Int
  progress   SubTopicProgress[]
}

model SubTopicProgress {
  id          String    @id @default(cuid())
  studentId   String
  student     User      @relation(fields: [studentId], references: [id], onDelete: Cascade)
  subTopicId  String
  subTopic    SubTopic  @relation(fields: [subTopicId], references: [id], onDelete: Cascade)
  completed   Boolean   @default(false)
  completedAt DateTime?

  @@unique([studentId, subTopicId])
}

model LearningState {
  id             String    @id @default(cuid())
  userId         String
  user           User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  topicId        String
  topic          Topic     @relation(fields: [topicId], references: [id], onDelete: Cascade)
  mastery        Float     @default(0.2) // BKT pKnow
  stability      Float     @default(0)   // SM-2 easiness / 2.5
  correctCount   Int       @default(0)
  wrongCount     Int       @default(0)
  timesReviewed  Int       @default(0)
  lastReviewedAt DateTime?

  @@unique([userId, topicId])
}

model StudySession {
  id        String   @id @default(cuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  topicId   String
  topic     Topic    @relation(fields: [topicId], references: [id], onDelete: Cascade)
  method    String   // "quiz" | "study" | "subtopic-checklist"
  correct   Boolean
  createdAt DateTime @default(now())
}
```

### Knowledge & Vector Retrieval Models

```prisma
model Document {
  id          String          @id @default(cuid())
  subjectCode String
  subject     Subject         @relation(fields: [subjectCode], references: [code])
  title       String
  source      String          // "note" | "syllabus" | "pyq" | "textbook"
  chunks      DocumentChunk[]
}

model DocumentChunk {
  id         String                 @id @default(cuid())
  documentId String
  document   Document               @relation(fields: [documentId], references: [id], onDelete: Cascade)
  content    String
  embedding  Unsupported("vector(384)")
  chunkIndex Int
}
```

---

## Frontend — Pages & Components

### Application Routes (`frontend/src/app/`)

| Route | Purpose |
| :--- | :--- |
| `/` | Landing page (redirects to dashboard or login) |
| `/login` | Authentication (email/password → JWT → localStorage) |
| `/student/dashboard` | Student overview: aggregate mastery, study streak, review queue |
| `/student/roadmap` | Prerequisite-gated roadmap with interactive sub-topic checklists |
| `/student/tutor` | Grounded AI tutor interface with citation badges and inline follow-up MCQs |
| `/student/progress` | Visual mastery heatmap, BKT tracking, and forgetting curve projections |
| `/student/scheduler` | Free-hours timetable planner with priority score allocation |
| `/student/tests` | Test center with client-side anti-cheat monitoring and auto-grading |
| `/student/assignments` | Assignment list, submission upload, and grade review |
| `/student/notes` | Searchable academic note browser with preview modal |
| `/teacher/dashboard` | Teacher hub: class performance metrics and pending reviews |
| `/teacher/classes` | Class creation and roster management |
| `/teacher/tests` | Test builder with PYQ tagging and question authoring |
| `/teacher/assignments` | Assignment authoring and grading interface |
| `/teacher/analytics` | Class score distribution and anti-cheat flag inspection |

*All 19 frontend pages compile with zero TypeScript errors on Next.js 15.*

### Roadmap Page — Sub-Topic Checklist Feature

Located in `frontend/src/app/student/roadmap/page.tsx`:
- **State Management:**
  - `subjectCode`: Selected subject (updates roadmap view dynamically)
  - `roadmap`: Array of `RoadmapTopic` objects including `subTopicsTotal` and `subTopicsDone`
  - `expandedTopicId`: Active checklist accordion panel
  - `checklists`: Client-side cache of fetched sub-topic items
  - `pulseMap`: Animation state trigger for unlocked cards
- **Interactive Checklist Panel:**
  - Displays sub-topic checklist rows with animated checkboxes
  - **Optimistic Toggle:** Instantly reflects user interaction, sends `POST /api/subtopics/:id/toggle`, and reconciles on response
  - **Mastered Badge:** Displays green mastery indicator upon completion of all sub-topics
  - **Real-Time Unlock Animation:** Listens for `topic-unlocked` Socket.IO events; newly unlocked dependency cards trigger a 1.5-second warm pulse animation via Framer Motion
  - **Live Progress Counter:** Dynamic counter reflecting unlocked topic count in real time

---

## Setup & Run

### Prerequisites
- Node.js 20+
- PostgreSQL 16+ with `pgvector` extension enabled (`CREATE EXTENSION IF NOT EXISTS vector;`)
- Local model runtime configured for query inference and dense embeddings

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Configure DATABASE_URL and JWT_SECRET in .env
npx prisma generate
npx prisma db push
npx prisma db seed
npm run dev
# Server runs at http://localhost:8001
```

### Frontend Setup
```bash
cd frontend
npm install
cp .env.example .env.local
# Set NEXT_PUBLIC_BACKEND_URL=http://localhost:8001
npm run dev
# Application accessible at http://localhost:3000
```

### Ingest VTU Academic Knowledge Corpus
```bash
cd backend
# Ingest single subject module
npm run ingest -- --subject BCS501 --module 1

# Ingest all indexed subjects
npm run ingest -- --all
```

### Demo Accounts (Seeded)

| Role | Email | Password |
| :--- | :--- | :--- |
| **Student** | `demo.student@adaptlearn.dev` | `Student@123` |
| **Teacher** | `teacher1@adaptlearn.dev` | `Teacher@123` |
| **Admin** | `admin@adaptlearn.dev` | `Admin@123` |

---

## Verification & Test Results

The entire platform undergoes rigorous regression and integration validation across all modules:

| Test Suite | Scope | Result | Status |
| :--- | :--- | :---: | :---: |
| **Phase 3 Regression** | Knowledge ingestion, vector persistence, BKT mastery | 10 / 10 | Passed |
| **Phase 4 Pipeline** | RAG retrieval, query classification, grounding validator, retry mechanism | 57 / 57 | Passed |
| **Final Integration** | End-to-end flow from query to verified, cited VTU answer | 10 / 10 | Passed |
| **Master VTU Goals** | Conversational bypass, ER completeness, PYQ purity, Syllabus metadata, Cross-subject reject | 8 / 8 | Passed |
| **Sem 3–7 Acceptance** | 67-course catalog, Sem 3-7 representation, 1748 PYQs, 439 diagrams | 12 / 12 | Passed |
| **Total Test Suite** | Full platform verification | **97 / 97** | **100% Passed** |

- **Backend Build:** 0 TypeScript compile errors
- **Frontend Build:** 0 Next.js App Router build errors (19 pages verified)

### Master Documentation & Audits (Semesters 3–7)
All authoritative system documentation and validation ledgers are located in the [`docs/`](docs/) directory:
- [`docs/FINAL_ADAPTLEARN_ARCHITECTURE.md`](docs/FINAL_ADAPTLEARN_ARCHITECTURE.md) — Comprehensive End-to-End System Architecture (Sem 3–7)
- [`docs/FINAL_RAG_PIPELINE.md`](docs/FINAL_RAG_PIPELINE.md) — Multi-Source RAG Pipeline & Acronym-Aware Retrieval Manual
- [`docs/FINAL_VTU_ANSWER_RULES.md`](docs/FINAL_VTU_ANSWER_RULES.md) — VTU Evaluation Scheme & Marks-to-Depth Calibration Rules
- [`docs/FINAL_VTU_CSE_2022_SEM3_TO_SEM7_MASTER.md`](docs/FINAL_VTU_CSE_2022_SEM3_TO_SEM7_MASTER.md) — Authoritative 67-Course Curriculum Inventory
- [`docs/REAL_EXECUTION_STATUS.md`](docs/REAL_EXECUTION_STATUS.md) — Plan vs Actual Physical Execution Audit Ledger
- [`docs/FINAL_ADAPTLEARN_KNOWLEDGE_AUDIT.md`](docs/FINAL_ADAPTLEARN_KNOWLEDGE_AUDIT.md) — Master Multi-Source Knowledge & Grounding Audit
- [`docs/LOCAL_LLM_BENCHMARK_REPORT.md`](docs/LOCAL_LLM_BENCHMARK_REPORT.md) — Local 8B LLM (llama3.1:8b) RTX 4050 GPU Benchmark Report
- [`docs/TEXTBOOK_VISUAL_RECONCILIATION_REPORT.md`](docs/TEXTBOOK_VISUAL_RECONCILIATION_REPORT.md) — Textbook Visual Extraction & Mathematical Invariant Audit
- [`docs/TEXTBOOK_COMPLETENESS_REPORT.md`](docs/TEXTBOOK_COMPLETENESS_REPORT.md) — 57 Reference Textbooks (37,642 Pages) Audit
- [`docs/DIAGRAM_COVERAGE_REPORT.md`](docs/DIAGRAM_COVERAGE_REPORT.md) — Unified Visual Knowledge Graph Coverage (11,171 Figures)
- [`docs/QUESTION_PAPER_COVERAGE_REPORT.md`](docs/QUESTION_PAPER_COVERAGE_REPORT.md) — Granular University Exam Paper Coverage (1,748 Questions)
- [`docs/RAG_RETRIEVAL_VALIDATION_REPORT.md`](docs/RAG_RETRIEVAL_VALIDATION_REPORT.md) — 24 Mandatory Verification Queries Test Report
- [`docs/PROJECT_REPORT.md`](docs/PROJECT_REPORT.md) — Complete Project Report & Evaluation Summary
- [`knowledge/pyq_database.json`](knowledge/pyq_database.json) — Granular Question-Level Examination Database (1,748 Questions)
- [`knowledge/diagram_knowledge_graph.json`](knowledge/diagram_knowledge_graph.json) — Unified Visual Knowledge Graph (11,171 Figures)

---

## Known Characteristics & Design Boundaries

- **Local Infrastructure:** Requires local PostgreSQL with `pgvector` extension.
- **Assessment Scope:** Auto-grading currently supports structured MCQ formats; free-form diagram drawing and complex numerical evaluation utilize teacher review flows.
- **Curriculum Graph:** Prerequisites are initialized based on official VTU module sequence structures.
- **Real-Time Connectivity:** Instant topic unlock notifications utilize live Socket.IO connections with fallback to the notification inbox API.

---

## License

MIT — Team 15, VTU Adaptive Learning Platform
