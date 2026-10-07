# AdaptLearn — Complete Project Report
> **Platform:** VTU CSE Adaptive Learning System
> **Status:** Web app complete · ML model training in progress (Kaggle)
> **Date:** October 2026

---

## 1. What Is AdaptLearn

AdaptLearn is a full-stack adaptive learning platform built specifically for VTU (Visvesvaraya Technological University) Computer Science Engineering students (3rd to 7th semester). It combines a traditional learning management system with a custom-trained AI tutor and a Bayesian knowledge tracking algorithm that personalises the learning experience per student.

The core idea: instead of showing every student the same content, AdaptLearn tracks each student's mastery on every topic using the BKT (Bayesian Knowledge Tracing) algorithm, adapts AI answer depth based on mastery level, and schedules study sessions using spaced repetition.

---

## 2. System Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         STUDENT / TEACHER                           │
└──────────────────────────────┬──────────────────────────────────────┘
                               │ HTTP + WebSocket
┌──────────────────────────────▼──────────────────────────────────────┐
│              FRONTEND  (Next.js 15, React 19, TypeScript)           │
│  AI Tutor Chat · Dashboard · Progress · Tests · Roadmap             │
│  Scheduler · Notes · Assignments · Journal                          │
└──────────────────────────────┬──────────────────────────────────────┘
                               │ REST API (port 8001)
┌──────────────────────────────▼──────────────────────────────────────┐
│              BACKEND  (Node.js, Express, TypeScript)                │
│  Auth · AI · Learning-State · Tests · Assignments · Chat            │
│  Documents · Notifications · Roadmap · Planner · VTU data          │
└──────────┬───────────────────┬───────────────────┬──────────────────┘
           │                   │                   │
    ┌──────▼──────┐    ┌───────▼──────┐    ┌───────▼──────┐
    │  PostgreSQL  │    │    Ollama    │    │  File System  │
    │  (Prisma)   │    │  LLM Server  │    │   /uploads   │
    │  DB + pgvec │    │  port 11434  │    │   diagrams   │
    └─────────────┘    └──────────────┘    └──────────────┘
                              │
                    ┌─────────▼──────────┐
                    │  adaptlearn model  │
                    │  (Qwen2.5-1.5B     │
                    │   + LoRA adapter)  │
                    └────────────────────┘
```

---

## 3. Technology Stack

### Frontend
| Tech | Version | Purpose |
|------|---------|---------|
| Next.js | 15 | React framework, app router, SSR |
| React | 19 | UI library |
| TypeScript | 5.7 | Type safety |
| Tailwind CSS | 4 | Utility-first styling |
| Framer Motion | 12 | Animations (chat phases, transitions) |
| Recharts | 2 | Progress charts, mastery graphs |
| Socket.io-client | 4 | Real-time notifications |
| Axios | 1.7 | HTTP client with auth interceptor |
| Lucide React | 0.474 | Icons |

### Backend
| Tech | Version | Purpose |
|------|---------|---------|
| Node.js | 22 | Runtime |
| Express | 4 | HTTP server |
| TypeScript | 5.7 | Type safety |
| Prisma | 6 | ORM + schema migrations |
| PostgreSQL | — | Primary database |
| pgvector | — | Vector similarity search (document chunks) |
| Socket.io | 4 | WebSocket server |
| JWT | — | Authentication tokens |
| bcryptjs | — | Password hashing |
| Multer | 2 | File uploads |
| Helmet | 8 | HTTP security headers |
| Zod | 3 | Request validation |
| express-rate-limit | 7 | API rate limiting |

### ML Pipeline
| Tech | Version | Purpose |
|------|---------|---------|
| Python | 3.11 | ML runtime (CUDA support) |
| PyTorch | 2.5.1+cu124 | Deep learning framework |
| Transformers | 5.18 | Model loading, tokenization, training |
| PEFT | 0.21 | LoRA / QLoRA fine-tuning |
| TRL | 1.14 | SFT training utilities |
| BitsAndBytes | 0.50 | 4-bit quantization |
| Accelerate | 1.15 | Distributed training support |
| Qwen2.5-1.5B-Instruct | — | Base model being fine-tuned |

### Infrastructure
| Component | Details |
|-----------|---------|
| GPU | NVIDIA RTX 4050 Laptop, 6.4 GB VRAM |
| CUDA | 12.4 |
| Ollama | 0.34.4 — serves the trained model locally |
| Training (Kaggle) | P100 GPU, 16 GB VRAM — training run |

---

## 4. Database Schema — 22 Models

### Core User Models
- **User** — students and teachers. Fields: email, password (bcrypt), name, role (STUDENT/TEACHER/ADMIN), USN, branch, semester, classId
- **Class** — a teacher's class group. Links students, assignments, tests, notes

### Academic Hierarchy
- **Subject** — VTU subject (e.g. BCS502 Computer Networks). Has modules and course outcomes
- **Module** — numbered sub-unit of a subject (1-5)
- **CourseOutcome** — VTU CO1-CO5 with Bloom's level and weightage
- **Topic** — individual topics within a module. Has prerequisites (dependency graph)
- **SubTopic** — granular sub-topics under a topic with completion tracking

### AI & Learning State
- **LearningState** — per user per topic: `mastery` (float 0-1), `stability`, `difficulty`, `correctCount`, `wrongCount`, `timesReviewed`, `lastReviewedAt`. This is the core adaptive model
- **StudySession** — log of every study/quiz interaction. Feeds BKT updates
- **ChatSession** — AI tutor conversation session (persisted)
- **ChatMessage** — individual messages with embedded quiz, diagrams, and chunk references

### Assessment
- **Test** — teacher-created quiz: multiple-choice questions, time limit, class assignment
- **Question** — MCQ with 4 options, `correctIndex`, marks, optional topic linkage
- **TestResult** — student score, answer breakdown, timestamp
- **CheatFlag** — tab-switch / focus-loss events during tests, with severity

### Content
- **Notes** — teacher-uploaded files per subject/module
- **Assignment** — task with due date, linked to class
- **AssignmentSubmission** — student file upload + marks/feedback
- **Document** — processed document with extracted chunks for RAG
- **DocumentChunk** — text chunk with `vector(384)` embedding for similarity search
- **PageImage** — extracted diagram images from documents

### Student Features
- **StudyPlan** — daily study plan JSON
- **StudyTask** — individual scheduled tasks with completion status
- **Achievement** — badges earned
- **JournalEntry** — private learning journal
- **Notification** — system/teacher notifications

---

## 5. Backend API Routes (21 route files)

| Route | Path | Description |
|-------|------|-------------|
| Auth | `/api/auth` | Register, login, JWT refresh |
| Student | `/api/student` | Student profile, progress overview |
| Teacher | `/api/teacher` | Teacher dashboard, class management |
| Admin | `/api/admin` | User management, system stats |
| AI | `/api/ai` | AI ask, MCQ response, quiz grading |
| Chat | `/api/chat` | Chat sessions, message persistence |
| Learning State | `/api/learning-state` | BKT updates, mastery tracking |
| Learning | `/api/learning` | Topics, roadmap, curriculum |
| Tests | `/api/tests` | Test CRUD, anti-cheat, results |
| Assignments | `/api/assignments` | Assignments + submissions |
| Classes | `/api/classes` | Class management |
| Documents | `/api/documents` | Upload, chunk, embed |
| Notes | `/api/notes` | Notes per subject/module |
| Notifications | `/api/notifications` | Push + read/unread |
| Journal | `/api/journal` | Personal journal entries |
| Planner | `/api/planner` | Study task scheduling |
| Roadmap | `/api/roadmap` | Topic dependency roadmap |
| Study Plan | `/api/study-plan` | AI-generated study plans |
| Subtopics | `/api/topics` | SubTopic progress tracking |
| VTU | `/api/vtu` | VTU exam data, PYQ lookup |
| Health | `/api/health` | DB stats, Ollama model check |

---

## 6. AI Tutor — How It Works End-to-End

### When a student asks a question:

```
1. Student types question in AI tutor chat
   e.g. "Explain the OSI model with neat diagram"

2. Frontend (page.tsx):
   - Detects VTU subject code via regex (e.g. BCS502 in question)
   - Shows "thinking" phase animation with step timeline
   - POSTs to /api/ai/ask

3. Backend (routes/ai.ts):
   - Validates request with Zod
   - Builds system prompt with VTU format rules
   - Calls Ollama HTTP API → adaptlearn model
   - Parses JSON response
   - Looks up diagram_topic_map.json for matching diagrams by topic
   - Generates 3 follow-up MCQ questions (second Ollama call)
   - Finds related topic in DB for BKT binding
   - Returns: { answer, diagrams, followUpQuiz }

4. Frontend (AnswerRenderer.tsx):
   - Renders each JSON section as a styled card:
       concept     → navy left-border card
       detail      → brass left-border card
       how_it_works → blue left-border card
       example     → green left-border card
       diagram_ref → fetches real <img> from /uploads/diagrams/
       conclusion  → grey card
   - Shows key_terms highlighted in answer text
   - Displays real diagram images below the answer

5. QuizCard.tsx:
   - Shows 3 MCQ follow-up questions one at a time
   - Student answers → POST /api/ai/mcq-response
   - BKT mastery updated in DB
   - Shows mastery delta (e.g. "+0.043")
```

### Answer JSON format the model outputs:
```json
{
  "question": "Explain the OSI model with neat diagram",
  "subject_code": "BCS502",
  "topic": "OSI Reference Model",
  "module": 1,
  "related_topics": ["TCP/IP Model", "Protocol Layers"],
  "sections": [
    { "type": "concept",      "heading": "Definition",     "text": "...", "key_terms": ["OSI","layer"] },
    { "type": "detail",       "heading": "Seven Layers",   "text": "...", "key_terms": ["Physical","Transport"] },
    { "type": "how_it_works", "heading": "Working",        "text": "1. Sender...\n2. Each layer..." },
    { "type": "example",      "heading": "Example",        "text": "When sending email..." },
    { "type": "diagram_ref",  "heading": "Diagram",        "diagram_tag": "BCS502-osi-model-m1-diagram" },
    { "type": "conclusion",   "heading": "Conclusion",     "text": "OSI standardizes..." }
  ]
}
```

---

## 7. BKT Algorithm — How Mastery Tracking Works

**Bayesian Knowledge Tracing (BKT)** is the ML algorithm running in the backend to track each student's knowledge on every topic.

### The model parameters:
```
P(Learn)  = 0.10  — probability of learning a topic from one interaction
P(Guess)  = 0.25  — probability of getting it right without knowing it
P(Slip)   = 0.10  — probability of getting it wrong despite knowing it
```

### The update equation:
```
On a correct answer:
  P(Known | correct) = P(Known) × (1 - P(Slip))
                       ─────────────────────────────────────────────
                       P(Known) × (1 - P(Slip)) + (1-P(Known)) × P(Guess)

On an incorrect answer:
  P(Known | wrong) = P(Known) × P(Slip)
                     ─────────────────────────────────────────────────
                     P(Known) × P(Slip) + (1-P(Known)) × (1 - P(Guess))

After each update, apply learning:
  P(Known_new) = P(Known_updated) + (1 - P(Known_updated)) × P(Learn)
```

### Where it runs:
- `/api/ai/mcq-response` — after AI chat MCQ quiz answers
- `/api/ai/quiz-grade` — after short-answer quiz grading  
- `/api/learning-state/update` — after test questions
- Every correct/wrong answer in assigned tests

### What mastery scores mean:
| Score | Interpretation | App Behaviour |
|-------|---------------|---------------|
| 0.0 – 0.4 | Not yet learned | AI gives extra detailed answers, more examples |
| 0.4 – 0.7 | Partially learned | Normal answer depth |
| 0.7 – 1.0 | Mastered | AI can give concise answers, harder follow-ups |

### Database storage:
```
LearningState {
  userId, topicId,
  mastery: Float (0-1),
  correctCount, wrongCount, timesReviewed,
  lastReviewedAt
}
```

---

## 8. ML Model — How It's Trained

### Base model: Qwen2.5-1.5B-Instruct
- 1.5 billion parameter instruction-tuned LLM by Alibaba
- Small enough to run on 6GB VRAM via 4-bit quantization
- Strong at following structured output formats (JSON)

### Fine-tuning technique: QLoRA (Quantized Low-Rank Adaptation)
```
Base model (1.5B params, frozen) + LoRA adapter (~2-3M trainable params)
         ↓
4-bit NF4 quantization (weights stored as 4-bit, computed as bfloat16)
         ↓
Only LoRA adapter trains — learns VTU format on top of base knowledge
         ↓
After training: merge adapter into base → register with Ollama as "adaptlearn"
```

### LoRA configuration:
```
rank (r)       = 16    — adapter matrix dimension, balance of capacity vs overfit
lora_alpha     = 32    — scaling factor (2 × rank, standard practice)
lora_dropout   = 0.05  — prevents overfitting
target_modules = q_proj, k_proj, v_proj, o_proj, gate_proj, up_proj, down_proj
                         — all attention and MLP projection layers
```

### Training configuration:
```
Optimizer:         AdamW (fused, CUDA-native)
Learning rate:     2e-4 with cosine decay
Warmup:            5% of steps (avoids loss spike at start)
Weight decay:      0.01 (L2 regularisation)
Batch size:        2 per device
Grad accumulation: 4 steps → effective batch = 8
Max seq length:    768 tokens
Epochs:            3 with early stopping on val_loss
Mixed precision:   bfloat16 (RTX 4050 supports bf16)
```

### Training data — 39,375 pairs across 25 subjects:
```
Source            Pairs    How generated
─────────────────────────────────────────────────────────────────
Notes .txt files  ~38,000  Pure Python parser (no LLM)
                           Reads 205 notes files, detects headings,
                           groups content into structured sections,
                           generates 3 question styles per topic

PYQ .md files        526   Extracts real VTU exam questions from
                           previous_papers.md + model_papers.md,
                           matches to most relevant paragraph in notes

Original pairs       160   Previously generated with Ollama llama3.1:8b
                           (BBOC407, BCS701 — old format, compatible)
─────────────────────────────────────────────────────────────────
TOTAL            39,375    25 subjects, ~1,500 pairs each
Split:           31,501 train / 3,937 val / 3,937 test (80/10/10)
```

### How data generation works (no hallucination):
```
Input:  BCS502-module-1-pdf-1.txt (real VTU lecture notes)
         "1. DATA COMMUNICATIONS
          Data communication is the process of transferring data..."

Process: Python parser
  → Detects heading "DATA COMMUNICATIONS" (numbered, caps, title-case patterns)
  → Groups: heading + 3-paragraph body + bullet points + example sentences
  → Generates 3 question variants:
      "Explain Data Communications with a neat diagram."
      "Define Data Communications. Explain its working with a suitable example."
      "Describe the concept of Data Communications in Computer Networks."
  → Builds sections from the actual text:
      concept  = first 3 sentences of body paragraph
      detail   = remaining paragraphs (real notes content)
      how_it_works = numbered bullet points from notes
      example  = sentences containing "example/e.g./for instance"
      diagram_ref = added if topic has visual keywords (network, architecture...)
      conclusion = template sentence

Output: One JSON line in training_data_notes.jsonl (zero hallucination)
```

### Training timeline:
```
Platform: Kaggle (P100 GPU, 16 GB VRAM)
  → 31,501 pairs × 3 epochs × ~3 sec/step ≈ 8-10 hours
  → Currently running

Local RTX 4050 (6.4 GB VRAM) estimate if needed:
  → 31,501 pairs × 3 epochs × ~3 sec/step ≈ 10-12 hours
```

### After training — deployment:
```
1. export_to_ollama.py merges LoRA adapter into base Qwen2.5-1.5B weights
2. Writes Ollama Modelfile with system prompt
3. ollama create adaptlearn -f Modelfile
4. backend/.env: OLLAMA_MODEL=adaptlearn
5. App now uses the fine-tuned VTU model instead of base llama3.1:8b
```

---

## 9. Diagram System

### 1,947 diagram PNGs extracted from VTU PDF notes

**Pipeline:**
1. PDFs were processed and diagram images extracted to `DATA/diagrams/<SEM>/<SUBJ>/`
2. `build_diagram_index.py` parses `diagram-index.tmp` (1,929 entries with captions)
3. Each diagram is tagged with topic + keywords using regex pattern matching
4. 403 diagrams successfully tagged across 20 subjects
5. 399 PNGs copied to `backend/uploads/diagrams/<SUBJ>/`

**At inference time:**
```
Student asks "Explain OSI model"
     ↓
Backend extracts topic from AI answer ("OSI Reference Model")
     ↓
findDiagrams("BCS502", "OSI Reference Model", module=1)
     ↓
Scores each diagram by: topic name match (+10), keyword match (+5),
caption match (+3), module match (+2)
     ↓
Returns top 3 matching diagrams with URLs
     ↓
Frontend renders <img src="/uploads/diagrams/BCS502/BCS502-osi-...png" />
```

**Diagram topic map** (`DATA/diagram_topic_map.json`):
```json
{
  "BCS502": [
    { "tag": "BCS502-osi-model-m1-diagram",
      "topic": "OSI Reference Model",
      "keywords": ["OSI", "layers", "network"],
      "module": 1,
      "url": "/uploads/diagrams/BCS502/BCS502-module-1-pdf-p5-i1.png",
      "caption": "The OSI model divides network communication..." }
  ]
}
```

---

## 10. Real-Time Features — WebSocket

**Socket.io** server integrated into the backend (same HTTP server, port 8001).

**Authentication:** JWT token passed in `socket.handshake.auth.token` — same token as REST API.

**Rooms automatically joined on connect:**
- `global` — all connected users
- `role:STUDENT` / `role:TEACHER` — role-based rooms
- `user:<id>` — private user room
- `class:<classId>` — class room (if student is in a class)

**Events emitted by backend:**
- New test published → `emitToClass(classId, "test:new", testData)`
- Assignment posted → class room notification
- Grade published → `emitToUser(studentId, "result:ready", resultData)`
- System notification → individual or broadcast

---

## 11. Frontend Pages

### Student Pages
| Page | Route | Key Features |
|------|-------|--------------|
| Dashboard | `/student/dashboard` | Stats, recent activity, mastery overview |
| AI Tutor | `/student/tutor` | Chat with AI, structured answers, diagrams, quiz |
| Progress | `/student/progress` | BKT mastery charts per topic, area charts |
| Roadmap | `/student/roadmap` | Topic dependency graph, SubTopic completion |
| Scheduler | `/student/scheduler` | Daily study task planner |
| Tests | `/student/tests` | Take assigned tests, view results |
| Assignments | `/student/assignments` | View + submit assignments |
| Notes | `/student/notes` | Browse teacher-uploaded notes |

### Teacher Pages
| Page | Route | Key Features |
|------|-------|--------------|
| Dashboard | `/teacher/dashboard` | Class overview, student mastery heatmap |
| Tests | `/teacher/tests` | Create/manage MCQ tests |
| Assignments | `/teacher/assignments` | Create/grade assignments |
| Notes | `/teacher/notes` | Upload notes files |
| Analytics | `/teacher/analytics` | Per-topic mastery across class |
| Classes | `/teacher/classes` | Manage enrolled students |

### Design System (Academic Ledger)
Custom Tailwind CSS design system with CSS variables:
- **Colors:** navy (#1e3a5f), brass (#a67c2e), ink (#26221c), paper (#ffffff)
- **Typography:** Fraunces (display serif), Public Sans (body)
- **Components:** `PageShell`, `Card`, `Badge`, `StatCard`, `MasteryBar`, `Toast`, `EmptyState`
- All 4px border radius — clean, academic ledger aesthetic

---

## 12. Data Flow — Complete Journey

```
Student asks: "Explain Binary Search Tree with diagram"
                          │
                          ▼
         Frontend (page.tsx) — detects phase: submitted → thinking → writing
                          │
                          ▼
         POST /api/ai/ask { question, subjectCode: "BCS304", moduleNumber: 2 }
                          │
                          ▼
         Backend (ai.ts)
           1. Rate limit check (20 req/min)
           2. Auth middleware (JWT verify)
           3. Build Ollama prompt with SYSTEM instructions
           4. Call Ollama → adaptlearn model
           5. Parse JSON response
           6. findDiagrams("BCS304", "Binary Search Tree", 2)
           7. Second Ollama call → generate 3 MCQ questions
           8. Find topic in DB for BKT binding
                          │
                          ▼
         Response: { answer: {sections[...]}, diagrams: [{url, topic}], followUpQuiz }
                          │
                          ▼
         Frontend renders answer:
           concept card → "A BST is a binary tree where left < root < right..."
           detail card  → "Each node has at most two children..."
           how_it_works → "1. Start at root\n2. If target < node..."
           example card → "Insert 50, 30, 70, 20, 40..."
           diagram      → <img src="/uploads/diagrams/BCS304/BCS304-bst-m2-diagram.png">
           conclusion   → "BST enables O(log n) search..."
                          │
                          ▼
         QuizCard shows: "In a BST, where is the minimum element found?"
           A) Root    B) Left leaf ✓    C) Right leaf    D) Any leaf
                          │
           Student selects B (correct)
                          ▼
         POST /api/ai/mcq-response { topicId, correct: true }
                          │
                          ▼
         BKT update:  mastery: 0.42 → 0.51  (delta: +0.09)
         DB updated: LearningState { mastery: 0.51, correctCount: 3 }
                          │
                          ▼
         Next time student asks about BST:
           mastery=0.51 → normal depth answer
           mastery=0.75 → concise answer + harder follow-up question
```

---

## 13. Security

| Feature | Implementation |
|---------|---------------|
| Passwords | bcryptjs hashing, never stored plain |
| Auth tokens | JWT with secret, 7-day expiry |
| Route protection | `requireAuth` middleware on all private routes |
| Role enforcement | `RoleGuard` component + `role:TEACHER` checks in backend |
| Rate limiting | 200 req/min global, 20 req/min on AI routes |
| HTTP headers | Helmet.js (CSP, HSTS, X-Frame-Options) |
| Input validation | Zod schemas on all POST/PATCH bodies |
| SQL injection | Prisma ORM (parameterised queries) |
| Anti-cheat | Tab-switch + focus-loss detection during tests |

---

## 14. Current State Summary

### What works right now (connect to localhost:3000):
- ✅ Full authentication (student + teacher + admin roles)
- ✅ AI tutor chat with structured JSON answers and diagram images
- ✅ MCQ follow-up quiz after every AI answer
- ✅ BKT mastery tracking per topic
- ✅ Real-time notifications via WebSocket
- ✅ Teacher test creation + student test taking + anti-cheat
- ✅ Assignment upload + grading
- ✅ Progress charts and mastery heatmaps
- ✅ Study planner and roadmap
- ✅ Notes upload by teachers

### Currently using (temporary):
- ⏳ `llama3.1:8b` as the AI model (generic, not VTU-trained)
- ⏳ After training completes → switches to `adaptlearn` (fine-tuned on VTU data)

### Training status:
- Training data: 39,375 pairs across 25 VTU subjects — **DONE**
- Model fine-tuning: **RUNNING on Kaggle** (Qwen2.5-1.5B + QLoRA, ~8-10 hrs)
- After training: run `export_to_ollama.py`, set `OLLAMA_MODEL=adaptlearn` in .env

---

## 15. To Start the App

```cmd
:: Start all services
d:\Adaptlearn\START.bat

:: Or manually:
:: Terminal 1 — Ollama
ollama serve

:: Terminal 2 — Backend
cd d:\Adaptlearn\backend
node_modules\.bin\tsx.cmd src/index.ts

:: Terminal 3 — Frontend
cd d:\Adaptlearn\frontend
npm run dev

:: Access at:
:: http://localhost:3000          (app)
:: http://localhost:8001/api/health  (backend health)

:: Demo logins:
:: Student: demo.student@adaptlearn.dev / Student@123
:: Teacher: teacher1@adaptlearn.dev / Teacher@123
```

---

## 16. Files and Directories

```
d:\Adaptlearn\
  backend\
    src\
      index.ts          App entry point, Express setup, WebSocket init
      routes\           21 route handlers
      middleware\       auth.ts (JWT), security.ts (Helmet)
      utils\auth.ts     JWT sign/verify helpers
      db.ts             Prisma client singleton
      websocket.ts      Socket.io setup, room management
    prisma\
      schema.prisma     22-model database schema
      seed.ts           Demo data seeder
    uploads\diagrams\   399 diagram PNGs (served as static files)
    .env                DB URL, JWT secret, Ollama config

  frontend\
    src\app\
      student\          Student pages (tutor, dashboard, progress, etc.)
      teacher\          Teacher pages
      login\            Auth page
      globals.css       Design tokens, custom classes
    src\components\
      SideNav.tsx       Navigation sidebar
      ui.tsx            Design system components
      RoleGuard.tsx     Route protection component
    src\lib\
      api.ts            Axios instance with auth interceptor
      auth.tsx          useAuth hook, token management
      subjects.ts       VTU subject data

  DATA\
    VTU_CSE_Notes\      205 lecture note .txt files (25 subjects × 5 modules)
    VTU_CSE_Textbooks\  57 textbook .txt files (reference books)
    diagrams\           1,947 diagram PNGs extracted from notes PDFs
    question_papers\    45 clean .md files (PYQ + model papers)
    diagram_topic_map.json   403 diagrams with topic tags

  ml-pipeline\
    data_gen\
      generate_combined_dataset.py   Ollama-based generator (backup)
    scripts\
      build_balanced_dataset.py      Main converter: notes → JSONL (fast)
      build_diagram_index.py         Diagram topic tagger
      convert_notes_to_jsonl.py      Per-subject notes converter
      extract_qpapers.py             Question paper → .md extractor
    training\
      train_lora.py                  QLoRA fine-tuning (no pyarrow)
      export_to_ollama.py            Exports trained model to Ollama
    output\
      training_data_notes.jsonl      63,000+ generated pairs
      training_data_combined.jsonl   39,375 balanced pairs
      train.jsonl                    31,501 training pairs
      val.jsonl                      3,937 validation pairs
      test.jsonl                     3,937 test pairs

  MASTER_PLAN.md         Full step-by-step plan and status
  START.bat              One-click start all services
```
