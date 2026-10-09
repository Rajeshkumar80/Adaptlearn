# AdaptLearn — Adaptive Learning Platform for VTU CSE

> **AI-Driven Academic Learning Platform Grounded in the VTU 2022 Scheme (Semesters 3 to 7)**  
> Featuring Local LLM (Ollama) & Cloud Fallback, Multi-Source RAG with Citations, Ebbinghaus Forgetting Model, Adaptive Study Scheduling, Anti-Cheat Assessment Engine, and Real-Time Academic Analytics.

---

## Table of Contents
- [1. Overview](#1-overview)
- [2. System Architecture](#2-system-architecture)
- [3. Key Platform Capabilities](#3-key-platform-capabilities)
- [4. Technology Stack](#4-technology-stack)
- [5. Prerequisites](#5-prerequisites)
- [6. Environment Setup & Configuration](#6-environment-setup--configuration)
- [7. Ollama AI Model Installation & Setup](#7-ollama-ai-model-installation--setup)
- [8. Database Migration & Data Seeding](#8-database-migration--data-seeding)
- [9. Running the Application](#9-running-the-application)
- [10. Demo Credentials](#10-demo-credentials)
- [11. Overall System Workflow (How It Works)](#11-overall-system-workflow-how-it-works)
- [12. Project Structure](#12-project-structure)
- [13. Testing & Verification](#13-testing--verification)
- [14. License](#14-license)

---

## 1. Overview

**AdaptLearn** is an end-to-end adaptive educational platform engineered specifically for computer science engineering students and teachers under the **Visvesvaraya Technological University (VTU) 2022 Scheme**.

Traditional learning platforms treat students with a one-size-fits-all timeline. AdaptLearn replaces static study plans with **cognitive intelligence**:
1. **Mathematical Memory Modeling:** Tracks student memory retention using the **Ebbinghaus Forgetting Curve** and **Bayesian Knowledge Tracing (BKT)** to predict exactly when a topic will be forgotten.
2. **Adaptive Study Scheduling:** Dynamically generates calendarized study routines with multiple pedagogical pacing strategies (Classic 3-2-1 Spaced, 80/20 Pareto Yield, Balanced Modular, and Exam Crunch Sprint), preserving all generated plans and allowing instant strategy switching.
3. **Grounded AI Tutor:** Delivers zero-hallucination answers to student queries, fully cited from official VTU textbooks, module lecture notes, and question banks.
4. **Exam Integrity & Assessment:** Auto-evaluates multiple-choice and descriptive questions with LLM-assisted rubric grading, while monitoring client-side test taking telemetry (tab switches, paste events, focus blurs) to produce an anti-cheat audit ledger for educators.
5. **Secure Academic Repository:** Offers streaming access and in-browser PDF previewing for 300+ lecture notes spanning Semesters 3 through 7.

---

## 2. System Architecture

```mermaid
graph TD
    subgraph Client ["Client Layer (Next.js 15)"]
        UI["Student & Teacher Portals"]
        Cache["Stale-While-Revalidate Memory Cache (0ms Tab Switching)"]
        PDFView["In-App PDF Blob Previewer"]
        Integrity["Anti-Cheat Telemetry Watcher"]
    end

    subgraph Backend ["Backend API Layer (Express + TypeScript)"]
        Auth["Auth & RBAC Middleware (JWT)"]
        Scheduler["Adaptive Scheduler Engine (SM-2 + BKT)"]
        Intelligence["Cognitive Tracking & Forgetting Engine"]
        RAG["Multi-Source RAG & Question Analyzer"]
        TestEngine["Assessment & Integrity Ledger"]
        NotesAPI["Secure Notes Streaming & Validation"]
    end

    subgraph AI ["AI & Inference Layer"]
        Ollama["Local Ollama Runtime (llama3.1:8b)"]
        Groq["Cloud LLM Fallback (Qwen / Llama via Groq)"]
        Embeddings["Xenova Dense Embeddings (384-dim)"]
    end

    subgraph Storage ["Data & Storage Layer"]
        Postgres[("PostgreSQL 16 + pgvector")]
        SecureFiles["Secure PDF Disk Storage"]
        KnowledgeBase["VTU Curriculum & Question Banks"]
    end

    UI --> Cache
    Cache --> Auth
    PDFView --> NotesAPI
    Integrity --> TestEngine

    Auth --> Scheduler
    Auth --> Intelligence
    Auth --> RAG
    Auth --> TestEngine
    Auth --> NotesAPI

    RAG --> Embeddings
    RAG --> KnowledgeBase
    RAG --> Ollama
    Ollama -.->|Failover / Timeout| Groq

    Scheduler --> Postgres
    Intelligence --> Postgres
    TestEngine --> Postgres
    NotesAPI --> SecureFiles
```

---

## 3. Key Platform Capabilities

### 🎓 For Students
- **Executive Learning Dashboard:** Live cognitive KPIs, forgetting risk indicators, study streak counters, and AI-recommended focus queues.
- **Academic AI Tutor:** Ask questions in natural language. Receives structured answers with mark calibration (2M, 5M, 10M, 15M), step-by-step math derivations, Mermaid architecture diagrams, textbook citations, and interactive follow-up practice quizzes.
- **Adaptive Scheduler & Prerequisite Roadmap:**
  - Create custom study plans based on target exam dates and daily hours.
  - Choose between **3-2-1 Spaced**, **80/20 Pareto**, **Balanced**, and **Exam Crunch** pacing modes.
  - **Multi-Plan Preservation:** Keep all generated plans saved and switch between them anytime from the top bar.
  - **Dynamic Strategy Switching:** Switch strategies inside the comparison modal to recalculate tasks in real time.
  - Drag-and-drop to reorder tasks, mark completions, and trigger dependency unlocks.
- **VTU Academic Notes:** Browse 300+ PDF notes filtered by Semester (3–7), Subject, and Module with instant in-modal preview and authenticated downloads.
- **Assessment Center:** Take timed assessments with instant automated scoring, detailed answer keys, and teacher feedback.
- **Instant Tab Transitions:** Client-side memory caching ensures moving between Dashboard, Scheduler, Notes, Tests, and Assignments is instantaneous (0ms) without loading flicker.

### 👨‍🏫 For Teachers & Administrators
- **Teacher Analytics Hub:** Real-time visibility into class average mastery, score distributions, and at-risk students.
- **Test Authoring & Grading:** Create custom tests tagged with VTU course outcomes and PYQ weightage. Review descriptive submissions with LLM rubric assistance or apply manual score overrides.
- **Anti-Cheat Audit Ledger:** Inspect test-taking telemetry flags (tab-switching frequency, clipboard pastes, window loss) to uphold academic integrity.
- **Class Rosters & Notes Publishing:** Manage student enrollments across branches and upload verified PDF lecture notes.

---

## 4. Technology Stack

| Domain | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | Next.js 15 (App Router), React 19, TypeScript | Server and client rendered UI |
| **Styling & UX** | Tailwind CSS, Framer Motion, Lucide Icons | Responsive "Academic Ledger" design system |
| **Data Viz** | Recharts, SVG Canvas | Forgetting curves, cognitive heatmaps, progress rings |
| **Backend API** | Express.js, TypeScript, Node.js | REST API, streaming endpoints, RBAC |
| **ORM & Database**| Prisma ORM, PostgreSQL 16 with `pgvector` | Relational tables + 384-dimensional vector indexing |
| **Real-time** | Socket.IO | Topic unlock broadcasts, class notifications |
| **Local AI (Primary)**| Ollama (`llama3.1:8b` or `qwen2.5:7b`) | On-device, private, zero-latency local LLM inference |
| **Cloud AI (Fallback)**| Groq SDK (`qwen/qwen3.8-27b`) | Sub-second cloud failover for LLM generation |
| **Embeddings** | `@xenova/transformers` (`all-MiniLM-L6-v2`) | Local 384-dim semantic embeddings |
| **Security** | Helmet, bcryptjs, JWT (HS256) | Security headers, password hashing, bearer auth |

---

## 5. Prerequisites

Before installing AdaptLearn, ensure you have the following installed on your machine:

1. **Node.js:** v18.18.0 or higher (v20+ recommended). Check with `node -v`.
2. **Python:** v3.10 or higher. Check with `python --version`.
3. **PostgreSQL:** v15 or higher with `pgvector` installed.
4. **Git:** To clone and manage repositories.
5. **Ollama:** To run the local language model (`llama3.1:8b`).

---

## 6. Environment Setup & Configuration

### Step 1: Clone the Repository
```bash
git clone https://github.com/Rajeshkumar80/Adaptlearn.git
cd Adaptlearn
```

### Step 2: Configure the Backend Environment
Create `backend/.env`:
```env
# Server Port
PORT=8001

# PostgreSQL Database Connection URL (with pgvector)
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/adaptlearn?schema=public"

# JSON Web Token Secret
JWT_SECRET="adaptlearn_super_secure_jwt_dev_secret_key_2026"

# Local Ollama LLM Configuration
OLLAMA_HOST="http://localhost:11434"
OLLAMA_MODEL="llama3.1:8b"

# Optional Cloud LLM Fallback (Groq API Key)
# Get a free key at https://console.groq.com
GROQ_API_KEY=""
GROQ_MODEL="qwen/qwen3.8-27b"

# Storage Directories
SECURE_STORAGE_PATH="./secure_storage"
```

### Step 3: Configure the Frontend Environment
Create `frontend/.env.local`:
```env
# Backend API Base URL
NEXT_PUBLIC_BACKEND_URL="http://localhost:8001"
```

### Step 4: Prepare PostgreSQL with `pgvector`
In your PostgreSQL database tool (psql, pgAdmin, DBeaver), create the database and enable the vector extension:
```sql
CREATE DATABASE adaptlearn;
\c adaptlearn;
CREATE EXTENSION IF NOT EXISTS vector;
```

---

## 7. Ollama AI Model Installation & Setup

AdaptLearn uses **Ollama** to run large language models locally on your hardware. This guarantees privacy, zero token costs, and offline availability.

### Step 1: Install Ollama
- **Windows:** Download the Windows installer from [ollama.com/download](https://ollama.com/download) and run the setup.
- **macOS:** Download the macOS `.zip` from [ollama.com/download](https://ollama.com/download).
- **Linux:** Run `curl -fsSL https://ollama.ai/install.sh | sh`.

### Step 2: Download the LLM Model
Open a new command prompt or terminal and pull the recommended model:
```bash
# Recommended default model (4.7 GB)
ollama run llama3.1:8b
```
> *Alternative lightweight model for lower-spec PCs:*
> ```bash
> ollama run qwen2.5:7b
> ```
Once the model downloads and displays a `>>>` prompt, type `/exit` to exit the chat.

### Step 3: Start the Ollama Service
Ensure Ollama is running in the background:
```bash
ollama serve
```
By default, Ollama listens on `http://localhost:11434`. You can test it by opening `http://localhost:11434` in your browser—it will display `"Ollama is running"`.

### Step 4: Intelligent Cloud Fallback (Optional)
If your machine does not have a dedicated GPU or Ollama takes longer than 15 seconds to synthesize complex responses, AdaptLearn automatically fails over to the Groq cloud API. Simply add your key in `backend/.env`:
```env
GROQ_API_KEY="gsk_your_groq_api_key_here"
```
*If Groq is not configured, the system uses deterministic curriculum synthesis as an offline safety fallback.*

---

## 8. Database Migration & Data Seeding

Install dependencies and populate the database with the complete VTU CSE curriculum, notes, tests, and assignments:

### 1. Install Backend & Frontend Dependencies
```bash
# Install backend packages
cd backend
npm install

# Install frontend packages
cd ../frontend
npm install
cd ..
```

### 2. Push Schema & Seed Initial Curriculum
```bash
cd backend

# Push Prisma schema to Postgres
npx prisma db push

# Seed core subjects, modules, topics, and demo users
npm run db:seed
```

### 3. Seed Canonical Notes, Tests & Assignments
Run the automated seeders from `backend/`:
```bash
# 1. Seed canonical VTU subjects and 5 modules per course
npx tsx scripts/seed_canonical_subjects_and_topics.ts

# 2. Bulk seed 300+ lecture notes (from DATA/VTU_CSE_Notes)
npx tsx scripts/bulk_seed_notes.ts

# 3. Seed comprehensive student tests with question banks
npx tsx scripts/seed_comprehensive_tests.ts

# 4. Seed academic assignments with rubrics
npx tsx scripts/seed_rich_assignments.ts

cd ..
```

---

## 9. Running the Application

### Option A: One-Click Startup (Windows)
Double-click `START.bat` in the project root. This automatically:
1. Starts `ollama serve` in a background window.
2. Starts the Backend API on `http://localhost:8001`.
3. Starts the Next.js Frontend on `http://localhost:3000`.

### Option B: Manual Startup

**Terminal 1 — Ollama:**
```bash
ollama serve
```

**Terminal 2 — Backend API:**
```bash
cd backend
npm run dev
# Running on http://localhost:8001
```

**Terminal 3 — Frontend Web App:**
```bash
cd frontend
npm run dev
# Accessible at http://localhost:3000
```

### Verification Endpoints:
- **Frontend App:** [http://localhost:3000](http://localhost:3000)
- **Backend Health Check:** [http://localhost:8001/api/health](http://localhost:8001/api/health)
- **Ollama Engine:** [http://localhost:11434](http://localhost:11434)

---

## 10. Demo Credentials

The database comes pre-seeded with three demo roles:

| Role | Email | Password | Permissions & Features |
| :--- | :--- | :--- | :--- |
| **Student** | `demo.student@adaptlearn.dev` | `Student@123` | AI Tutor, Scheduler, Notes, Tests, Assignments, Learning Intelligence |
| **Teacher** | `teacher1@adaptlearn.dev` | `Teacher@123` | Class Analytics, Test Authoring, Anti-Cheat Review, Notes Upload |
| **Admin** | `admin@adaptlearn.dev` | `Admin@123` | Full administrative platform access |

---

## 11. Overall System Workflow (How It Works)

### 1. Student Learning Journey
```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                             STUDENT JOURNEY                                 │
└─────────────────────────────────────────────────────────────────────────────┘
  1. Login & Dashboard ────► Reviews Learning Ledger, Forgetting Risk, & KPIs
         │
  2. Adaptive Scheduler ───► Chooses Exam Date, Hours, & Strategy (3-2-1 / 80-20)
         │                   Preserves multiple plans; switches strategies on the fly
         ▼
  3. AI Tutor Q&A ────────► Asks syllabus queries; RAG retrieves textbook evidence
         │                   Generates cited answer + interactive follow-up MCQ
         ▼
  4. Academic Notes ──────► Reads & previews PDF module notes inside app modal
         │
  5. Tests & Assignments ─► Submits timed exam; anti-cheat telemetry logged
         │
  6. Mastery Growth ──────► Ebbinghaus retention and BKT stability update in DB
```

### 2. Multi-Source RAG & Grounded Q&A Flow
```text
Student Query ("Explain Addressing Modes in BCS302 for 10 marks")
       │
       ▼
[Dual-Layer Intent Router]
  ├── Conversational queries ("Hello", "Who are you") ──► Instant Direct Response (<15ms)
  └── Academic queries ────────────────────────────────► Question Analyzer
                                                               │
                                                               ▼
[Question Analyzer & Multi-Source RAG]
  ├── Resolves subject alias: "BCS302"
  ├── Extracts Module: 3 (Instruction Formats & Addressing Modes)
  ├── Detects Marks requirement: 10 Marks (triggers detailed 350-word answer)
  └── Hybrid Retrieval:
        ├── Primary Syllabus Notes (1.15x weight)
        ├── Previous Year Questions (1.20x weight)
        └── Textbook Notes (1.00x weight)
                               │
                               ▼
[Concept Completeness & Grounding Validator]
  ├── Audits essential concepts (Immediate, Direct, Indirect, Indexed)
  └── Injects relevant Mermaid schematics from Visual Knowledge Graph
                               │
                               ▼
[LLM Answer Generation (Ollama llama3.1:8b / Groq)]
  ├── Formats according to VTU valuation schemes
  ├── Appends non-leaking syllabus citations
  └── Generates follow-up multiple-choice question for active recall
```

### 3. Adaptive Scheduling Engine
The scheduler allocates daily study slots across available study days using four distinct pacing models:
- **3-2-1 Spaced Method:** 50% Learn · 33% Revise · 17% Test. Optimal for full-semester mastery and long-term retention.
- **80/20 Pareto Yield:** 50% Learn · 30% Revise · 20% Test. Focuses on high-frequency PYQ weightage topics first.
- **Balanced Modular:** 50% Learn · 30% Revise · 20% Test. Chronological pacing across modules for continuous CIE habits.
- **Exam Crunch Sprint:** 30% Learn · 40% Revise · 30% Test. Rapid revision drills and test-taking for the final 1–2 weeks before university exams.

---

## 12. Project Structure

```text
Adaptlearn/
├── backend/                        # Express + TypeScript API Server
│   ├── prisma/
│   │   ├── schema.prisma           # Relational & Vector Schema
│   │   └── seed.ts                 # Database seeder (users, subjects)
│   ├── scripts/                    # Bulk seeders, verification suites
│   ├── secure_storage/             # Local encrypted PDF notes storage
│   └── src/
│       ├── middleware/             # Auth, Security (Helmet/CORS), Rate limiting
│       ├── routes/                 # API Routes (auth, study-plan, notes, ai, tests)
│       └── services/               # RAG, LLM, Scheduler, Forgetting model
├── frontend/                       # Next.js 15 App Router Frontend
│   ├── src/
│   │   ├── app/                    # Pages: /student/*, /teacher/*, /login
│   │   ├── components/             # UI Design System, Schedulers, Navbars
│   │   └── lib/                    # API client, SWR cache, subjects hook
├── knowledge/                      # Master VTU 2022 Scheme Corpus (Sem 3-7)
│   ├── subjects.json               # Canonical course registry
│   ├── vtu_2022_scheme_master.json # 67 courses, 335 modules taxonomy
│   └── pyq_database.json           # 1,748 indexed past exam questions
├── ml-pipeline/                    # LoRA fine-tuning & GGUF export scripts
├── scripts/                        # RAG and knowledge retrieval test suites
├── START.bat                       # One-click Windows development launcher
└── README.md                       # Master Documentation
```

---

## 13. Testing & Verification

AdaptLearn includes a comprehensive suite of automated verification scripts:

```bash
# Run RAG coverage & retrieval verification
node scripts/test_rag_full_coverage.js

# Test knowledge retrieval accuracy
python scripts/test_knowledge_retrieval.py

# Run master backend end-to-end verification
cd backend
npx tsx scripts/master_e2e_verification.ts

# Run scheduler unit tests
npm test -- src/__tests__/schedulerPlanGeneration.test.ts
```

All 19 frontend routes build with zero TypeScript and ESLint errors:
```bash
cd frontend
npm run build
```

---

## 14. License

This project is licensed under the **MIT License**. Built with ❤️ for VTU Computer Science & Engineering students and educators.
