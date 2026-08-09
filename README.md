# AdaptLearn — Adaptive Learning Platform for VTU (Team 15)

Adaptive VTU study platform: AI tutor grounded in module notes (RAG + citations),
SM-2 + BKT mastery model, prerequisite-gated roadmap, free-hours planner, auto-graded
tests with anti-cheat integrity ledger, notes/assignments/class management, and
real-time socket notifications.

Built greenfield per `000_MASTER_PROMPT.md` (no Docker; local PostgreSQL + pgvector).

## Architecture

| Layer | Stack | Location |
|---|---|---|
| Backend API | Express + TypeScript + Prisma + pgvector + Socket.IO | `backend-ts/` |
| Frontend | Next.js 15 (App Router) + Tailwind v4 + Recharts + framer-motion | `frontend/` |
| Database | PostgreSQL 18 local, pgvector 0.8.6, HNSW index on 384-dim embeddings | `adaptive_learning_platform` |
| Embeddings | Gemini 2.5 Flash (`gemini-2.5-flash`, 768→384-dim projection) | `backend-ts/src/services/embeddings.ts` |
| Design system | "Academic Ledger" — see `DESIGN.md` | root |

## Setup

1. `cd backend-ts && npm install && npx prisma generate && npx prisma db push && npx prisma db seed`
2. Copy `.env.example` → `.env` and set `DATABASE_URL`, `JWT_SECRET`, `GEMINI_API_KEY`.
3. `npm run dev` → API on `http://localhost:8001` (Socket.IO on the same port).
4. `cd ../frontend && npm install`
5. Copy `.env.example` → `.env.local` (`NEXT_PUBLIC_BACKEND_URL=http://localhost:8001`).
6. `npm run dev` → app on `http://localhost:3000`.

Ingest VTU syllabus + PYQ corpus:
`npm run ingest -- --subject BCS501 --module 1` (or `--all`). Note files under
`data/`; every uploaded note is chunked + embedded on the fly (`/api/notes`).

## Demo accounts (seeded)

| Role | Email | Password |
|---|---|---|
| Student | `demo.student@adaptlearn.dev` | `Student@123` |
| Teacher | `teacher1@adaptlearn.dev` | `Teacher@123` |
| Admin | `admin@adaptlearn.dev` | `Admin@123` |

## Features (built + verified live)

- **AI Tutor** (`/student/tutor`): RAG answers with citations, follow-up MCQ per topic
  feeding BKT (`/api/ai/ask`, `/api/ai/mcq-response`). Rate limit 15/min.
- **Mastery model**: BKT update + SM-2 spaced repetition (`/api/learning-state/update`);
  forgetting-curve projection on `/student/progress`.
- **Dependency gate**: learning-state updates on topics with unmet prerequisites return
  403 with `blockedPrerequisites` (`requiredMastery: 0.7`).
- **Planner** (`/student/scheduler`): priority = mastery deficit + PYQ importance +
  dependency count + review-due; time allocated proportionally to free hours.
- **Roadmap** (`/student/roadmap`): module-gated unlock, PYQ importance per topic.
- **Tests** (`/student/tests`, `/teacher/tests`): teacher-created auto-graded MCQs,
  anti-cheat events (TAB_SWITCH etc.), cheat-report modal, integrity ledger on
  `/teacher/analytics`. One attempt per student per test.
- **Notes** (`/teacher/notes`): markdown/txt/pdf upload → chunk + embed → student view.
- **Assignments** (`/teacher/assignments`, `/student/assignments`): class-scoped,
  file-URL submission, teacher grading with feedback.
- **Classes** (`/teacher/classes`): create class, roster management, live notifications
  via Socket.IO (`/api/notifications/send`).
- **Analytics** (`/teacher/analytics`): students/tests/avg-score/cheat-flag counts,
  score chart, integrity ledger.
- **Auth**: JWT (7d) with role `STUDENT | TEACHER | ADMIN`, classId in token for
  socket room join; 401 fail-fast, 403 role checks, rate limits (auth 10/min,
  api 120/min, ai 15/min).

## Tests

- Backend: `cd backend-ts && npx jest` → **28 tests / 28 pass** (6 suites: BKT, SM-2,
  embeddings, scheduler, PYQ scorer, API/auth).
- Frontend: `cd frontend && npx vitest run` → **4 tests / 4 pass** (RoleGuard).
- Typecheck: `cd frontend && npx tsc --noEmit` → clean.

## Routes

~50 endpoints under `/api`: `auth`, `vtu`, `student`, `teacher`, `admin`, `tests`,
`learning`, `learning-state`, `planner`, `roadmap`, `notifications`, `journal`,
`notes`, `assignments`, `classes`, `ingestion`, `ai`, `documents`, `study-plan`.
See `backend-ts/src/routes/` and the e2e demo `backend-ts/e2e-demo.ps1`.

## Honest limitations

- Gemini **free tier: 20 generateContent requests/day** — heavy AI demo days will 429
  at the provider until the window resets.
- MCQ-only assessment (no diagram/numerical input grading); prerequisites are seeded
  from syllabus structure, not NLP-extracted.
- Real-time notifications require the client to be connected to the Socket.IO room
  (`class:<id>`); historical fallback is the inbox via `/api/notifications/mine`.
- See `docs/REPORT_ALIGNMENT.md` for the full report-vs-implementation reconciliation.
