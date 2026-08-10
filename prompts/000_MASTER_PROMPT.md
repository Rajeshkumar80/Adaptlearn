# AdaptLearn — MASTER BUILD PROMPT (single-file, no Docker)

You are an autonomous coding agent. Execute everything below **in order, one task at a time**, inside the `adaptlearn/` repo. This file replaces the 6-file split — everything is here.

## Non-negotiable rules
1. One task at a time. Implement → verify with REAL terminal/curl output → commit → next task. Never batch.
2. Never say "done"/"working"/"fixed" without pasting the actual output that proves it. If you can't produce real proof, mark it BLOCKED and stop.
3. No Docker. Everything runs via local Postgres + `npm run dev`. Do not reintroduce docker-compose.
4. If blocked 2+ retries on the same error, stop and report the exact error — do not keep guessing.
5. Gate at the end of every numbered section (0-6) — print a summary, confirm every checkbox has real evidence, then continue.
6. Never fabricate test counts or "green" claims carried over from old docs — always re-run and report the real number.

---

## 0. Tech Stack (confirmed, do not change)

| Layer | Tech |
|---|---|
| Frontend | Next.js 15, React 19, TypeScript, Tailwind CSS 4 |
| Backend | Express.js + TypeScript, Prisma ORM |
| Database | PostgreSQL 14+ (local, no Docker) |
| Vector store | pgvector extension on the same Postgres |
| Auth | JWT (jsonwebtoken) + bcryptjs |
| AI | Google Gemini 2.5 Flash — chat, RAG answers, MCQ generation, roadmap |
| Embeddings | `@xenova/transformers` (`all-MiniLM-L6-v2`, local, CPU, free) — fallback to Gemini embedding endpoint only if local model fails to load |
| Cache | Redis (ioredis) with in-memory fallback if `REDIS_URL` unset — leave unset for now |
| Real-time | Socket.io, JWT-authenticated |
| Testing | Jest (backend), Vitest/Playwright (frontend — currently zero test files, must add at least one) |

---

## 1. Full Folder Structure (target state — build toward this)

```
adaptlearn/
├── backend-ts/
│   ├── src/
│   │   ├── routes/
│   │   │   ├── auth.ts
│   │   │   ├── student.ts
│   │   │   ├── teacher.ts              # NEW
│   │   │   ├── admin.ts
│   │   │   ├── tests.ts
│   │   │   ├── learning.ts
│   │   │   ├── learning-state.ts
│   │   │   ├── planner.ts
│   │   │   ├── roadmap.ts
│   │   │   ├── notifications.ts
│   │   │   ├── journal.ts
│   │   │   ├── notes.ts                # NEW
│   │   │   ├── assignments.ts          # NEW
│   │   │   ├── classes.ts              # NEW
│   │   │   ├── ingestion.ts            # RAG doc ingestion
│   │   │   ├── ai.ts                   # RAG ask + tutor + MCQ
│   │   │   ├── documents.ts
│   │   │   ├── study-plan.ts
│   │   │   └── vtu.ts
│   │   ├── services/
│   │   │   ├── bkt.ts
│   │   │   ├── sm2.ts
│   │   │   ├── achievements.ts
│   │   │   ├── scheduler.ts            # priority formula + free-hours allocation
│   │   │   ├── embeddings.ts           # NEW — chunk + embed
│   │   │   ├── retrieval.ts            # NEW — pgvector similarity search
│   │   │   └── pyq-scorer.ts           # NEW
│   │   ├── middleware/
│   │   │   ├── auth.ts                 # extend for TEACHER role
│   │   │   ├── rate-limit.ts
│   │   │   ├── security.ts
│   │   │   └── validation.ts
│   │   ├── utils/
│   │   │   └── auth.ts                 # JWT sign/verify, fail-fast on missing secret
│   │   ├── cache.ts
│   │   ├── websocket.ts
│   │   ├── error-tracking.ts
│   │   ├── config.ts
│   │   ├── index.ts
│   │   └── __tests__/
│   ├── prisma/
│   │   └── schema.prisma
│   ├── data/                            # NEW — put PDFs here, see §5
│   │   ├── syllabus/
│   │   │   ├── sem5/
│   │   │   └── sem6/
│   │   ├── textbooks-notes/
│   │   │   ├── sem5/<SUBJECT_CODE>/
│   │   │   └── sem6/<SUBJECT_CODE>/
│   │   ├── pyqs/
│   │   │   ├── sem5/<SUBJECT_CODE>/
│   │   │   └── sem6/<SUBJECT_CODE>/
│   │   └── model-papers/
│   │       ├── sem5/<SUBJECT_CODE>/
│   │       └── sem6/<SUBJECT_CODE>/
│   ├── scripts/
│   │   └── ingest-data.ts               # NEW — batch-runs ingestion over data/
│   ├── .env
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── (student routes: dashboard, ai-tutor, planner, roadmap,
│   │   │   │    mastery+graph, tests, analytics, notes, assignments,
│   │   │   │    journal, leaderboard, notifications, profile)
│   │   │   └── admin/ + teacher/        # NEW teacher routes
│   │   ├── components/
│   │   ├── contexts/
│   │   └── lib/
│   └── package.json
├── docs/
│   └── REPORT_ALIGNMENT.md              # generated at the end
├── .gitignore
└── README.md
```

---

## 2. Environment Configuration

Create `backend-ts/.env` (this file must be in `.gitignore` — confirm before writing):

```env
DATABASE_URL="postgresql://postgres:Postgres%40123@localhost:5432/adaptive_learning_platform"
JWT_SECRET="<generate with: openssl rand -base64 32>"
GEMINI_API_KEY="REPLACE_ME_IN_ENV_FILE"
PORT=8001
NODE_ENV=development
# REDIS_URL left unset intentionally — in-memory cache fallback is used
```

**Important note on the password:** the raw password is `Postgres@123`. In a URL, `@` is a reserved delimiter, so it MUST be percent-encoded as `%40` inside `DATABASE_URL`, exactly as written above — do not paste the raw `@` or the connection will fail to parse (Prisma will throw a misleading auth error, not a syntax error, so this is easy to misdiagnose).

Create `frontend/.env.local`:
```env
BACKEND_URL=http://localhost:8001
```

Update `backend-ts/.env.example` to mirror the keys above WITHOUT real values (placeholders only) — this file IS committed, so it must never contain the real password or API key.

**Verify:** `cat backend-ts/.env` with the API key and password redacted in your pasted output (show only that the keys exist, not their values) — do not print secrets into logs or commit messages.

---

## 3. Setup Steps (in order)

### 3.1 Install
```
cd backend-ts && npm install
cd ../frontend && npm install
```
**Verify:** `node_modules` populated in both, paste `npm ls --depth=0` summary.

### 3.2 Provision Postgres locally (no Docker)
Install Postgres 14+ natively if not present. Create the DB:
```
createdb adaptive_learning_platform
```
Enable pgvector:
```sql
CREATE EXTENSION IF NOT EXISTS vector;
```
**Verify:** `psql -U postgres -d adaptive_learning_platform -c '\dx'` shows `vector` extension listed.

### 3.3 Prisma
```
cd backend-ts
npx prisma generate
npx prisma db push
npm run db:seed
```
**Verify:** paste full output, confirm seed row counts.

### 3.4 Run backend test suite (ground truth, not old claims)
```
npm test
```
**Verify:** paste the real pass/fail summary line. This is your actual baseline — not the "176/176" from old docs until re-proven.

### 3.5 Boot both apps
```
npm run dev     # backend-ts → :8001
npm run dev     # frontend → :3000
```
**Verify:** `curl http://localhost:8001/api/health` → 200 with DB counts. Frontend loads at `:3000`.

---

## 4. Feature Build — Backend (do in this order, each fully verified before next)

### 4.1 RAG audit
Before building anything new, inspect `src/routes/documents.ts` (or equivalent). Determine and report: does it chunk? embed? retrieve via similarity search? or does it stuff whole documents into the Gemini prompt? State the verdict explicitly with file/line refs.

### 4.2 Schema extensions
Add to `schema.prisma`:
- `Class` (id, name, branch, semester, createdByTeacherId, students User[])
- `Notes` (id, subjectCode, moduleNumber, title, fileUrl, uploadedByTeacherId, classId, createdAt)
- `Assignment` (id, subjectCode, title, description, dueDate, createdByTeacherId, classId)
- `AssignmentSubmission` (id, assignmentId, studentId, fileUrl, submittedAt, marks, feedback, gradedAt)
- `DocumentChunk` (id, sourceDocumentId, subjectCode, moduleNumber, content, embedding Unsupported("vector(384)"), createdAt) — 384 dims for MiniLM-L6-v2, adjust if you use a different embedder
- `Topic`: add `pyqImportance Float @default(0)`, confirm prerequisite relation exists for dependency gating
- `User`: confirm/add `role Role @enum(STUDENT, TEACHER, ADMIN)`, `classId String?`
Run `npx prisma migrate dev --name teacher_rag_extensions`.
**Verify:** paste migration output, no broken existing models.

### 4.3 Role middleware
Extend `middleware/auth.ts` to support TEACHER using the existing admin-check pattern.
**Verify:** curl proving STUDENT→403, TEACHER→200 on a teacher-only test route.

### 4.4 Embeddings + chunking service
`services/embeddings.ts`: chunk by paragraph/heading (~300-500 tokens, ~50 overlap), embed with `@xenova/transformers` `all-MiniLM-L6-v2`.
**Verify:** run on one real text file, paste chunk count + a real embedding vector's length.

### 4.5 Retrieval service
`services/retrieval.ts`: cosine similarity search via pgvector `<=>` operator, scoped by subjectCode/moduleNumber, top-k=5.
**Verify:** paste a real query's retrieved chunk IDs + content snippets.

### 4.6 Ingestion route + script
`POST /api/teacher/notes` (upload → chunk → embed → store, tagged by subject/module) and `scripts/ingest-data.ts` (batch-walks `backend-ts/data/` and ingests everything found, for when the dataset arrives — see §5).
**Verify:** curl one real upload, confirm `DocumentChunk` row count increases.

### 4.7 RAG ask route + VTU formatting
`POST /api/ai/ask` `{ question, subjectCode, moduleNumber? }` → embed question → retrieve → build VTU-format prompt (point-wise, diagram blocks where relevant, CO reference if chunk has CO metadata) → Gemini 2.5 Flash.
**Verify:** paste 3 real answers (definition/comparison/numerical question types) with retrieved chunk IDs shown.

### 4.8 Follow-up MCQ + BKT hook
After each `/api/ai/ask` response, second Gemini call generates 1 topic-tagged MCQ. `POST /api/ai/mcq-response` feeds result into existing `bkt.ts` update.
**Verify:** real before/after mastery values in DB across a wrong-then-right answer sequence.

### 4.9 Dependency-graph gating
Server-side block on `learning-state/update` if prerequisite mastery < 0.7.
**Verify:** curl blocked attempt (error), complete prerequisite, retry succeeds.

### 4.10 PYQ scorer
`services/pyq-scorer.ts`, wire `pyqImportance` into scheduler priority: `priority = (1-mastery)*0.4 + pyqImportance*0.3 + dependencyCount*0.2 + forgettingUrgency*0.1`.
**Verify:** one real priority calc with real numbers.

### 4.11 Scheduler free-hours input
Planner route accepts `{ availableHoursToday }`, feeds into time-allocation phase.
**Verify:** two different hour inputs → proportionally different schedules, curl both.

### 4.12 Teacher: notes/assignments/classes/analytics/cheat-report routes
Build per the CRUD list in §1 folder structure (`teacher.ts`, `notes.ts`, `assignments.ts`, `classes.ts`).
**Verify:** full curl sequence per feature — create, read, grade, cheat-report — with real responses pasted.

### 4.13 Notifications: teacher → class room
Extend Socket.io to support class-scoped rooms, not just global/role.
**Verify:** two terminal clients, teacher sends, student receives live — paste both logs.

### 4.14 Rate limiting on new AI routes
Apply existing `aiLimiter` (15/min) to `/api/ai/ask` and MCQ generation.
**Verify:** 16th call in a minute is rate-limited, paste response.

**Section 4 exit check:** full backend test suite re-run, zero regressions vs §3.4 baseline, every route above has pasted curl proof.

---

## 5. Where to Put Your Data (for later, when you provide it)

Drop files into `backend-ts/data/` following this convention — the ingestion script in §4.6 expects it:

```
backend-ts/data/
├── syllabus/sem5/<SUBJECT_CODE>.pdf
├── syllabus/sem6/<SUBJECT_CODE>.pdf
├── textbooks-notes/sem5/<SUBJECT_CODE>/*.pdf
├── textbooks-notes/sem6/<SUBJECT_CODE>/*.pdf
├── pyqs/sem5/<SUBJECT_CODE>/*.pdf
├── pyqs/sem6/<SUBJECT_CODE>/*.pdf
└── model-papers/sem5|sem6/<SUBJECT_CODE>/*.pdf
```

Example: `backend-ts/data/textbooks-notes/sem6/18CS62/module3-notes.pdf`

Once files are present, run:
```
npx ts-node scripts/ingest-data.ts
```
This walks the tree, tags each chunk with subject code (from folder name) + module (from filename or content heading detection), and calls the §4.4/4.5 pipeline. **Do not fabricate VTU content if this folder is empty — that's a later step, not part of this build pass.**

---

## 6. Frontend Build (after §4 fully verified working against real curl responses)

### 6.0 UI/UX bar — non-negotiable, apply to every screen

This must look like a professional, funded EdTech product, not a bootcamp CRUD demo. Concretely:

- **No default component look.** Reject default shadcn spacing/sizing, default `gray-100`/`blue-500` palettes, default border-radius everywhere. Pick one deliberate visual direction and justify it in writing before building (e.g. "academic ledger" — serif headings, navy/cream, generous whitespace, subtle grid lines — vs "ops console" — dark mode, monospace data, dense information hierarchy). Reuse the two design directions already explored for the VTU Result Fetcher project (academic ledger / dark ops-console) as a starting reference point if useful, or pick a third deliberate direction — do not default to generic.
- **Typography:** a real type scale (not browser defaults) — one display/heading font pairing + one body font, defined sizes for h1-h6/body/caption, consistent line-height.
- **Color:** a defined palette with semantic tokens (primary, surface, border, success/warning/error, muted-text) — not ad hoc hex codes per component.
- **Motion:** purposeful micro-interactions (page transitions, loading skeletons, toast entrances, hover/focus states) — Framer Motion is already a known preference for this stack, reuse it.
- **Empty/loading/error states designed, not skipped** — every list/table screen (notes, assignments, leaderboard, cheat report) needs a real empty state, a real skeleton loader, and a real error state, not a blank div.
- **Data-dense screens (teacher analytics, cheat report, admin dashboard)** need actual information hierarchy — grouped cards, real charts (recharts, already in the approved library list), not raw tables dumped on the page.
- **Mobile-usable at minimum for student-facing screens** (dashboard, notes, AI tutor, scheduler) — teacher screens can be desktop-first if time-constrained, but must not be visually broken on a laptop-width screen.
- **Consistency check before Section 6 exit:** screenshot 5 random screens side by side — if they look like they came from different apps (inconsistent spacing, mismatched buttons, different card styles), that's a fail, go back and unify the component library usage.

Load and follow the `frontend-design` skill guidance before writing the first component — it has the concrete design-token and layout constraints for this environment.

Build in this order, each screen verified against REAL backend responses (not mocks):
1. Design tokens + full route map (student + teacher)
2. Student: RAG tutor chat UI with inline follow-up MCQ
3. Student: scheduler form (free-hours input → rendered plan)
4. Student: state-tracker/"how I learn" page (forgetting curve, mastery trend)
5. Student: notes-by-subject/module tab + assignment submit flow
6. Student: roadmap view with locked/unlocked topics
7. Teacher: dashboard + analytics
8. Teacher: notes upload + assignment create/grade UI
9. Teacher: test creation + cheat-report view
10. Teacher: class management + notification sender
11. Role-based routing/nav guard (client-side, on top of server 403s)
12. At least one Vitest/Playwright test file (currently zero exist — this must close)

**Section 6 exit check:** every screen clicked through with real data, screenshots/proof pasted, role-guarded routes tested both ways (blocked + allowed).

---

## 7. Final Integration, Testing, Debugging

1. Full regression: backend + new frontend tests, paste complete real output.
2. Scripted end-to-end journey (teacher creates class → uploads notes → creates assignment/test → student logs in → gets notification → asks AI tutor → answers MCQ → uses scheduler → hits dependency gate → takes test → triggers anti-cheat flag intentionally → submits assignment → teacher grades + views cheat report + analytics → student sees grade/mastery update). Paste real evidence at every step, in order — this is your demo script.
3. Debugging protocol for any failure: capture exact error + stack trace, isolate to the smallest reproducible request (single curl, not the whole flow), fix, re-run the SAME curl to confirm, then re-run the full journey step to confirm no side-effect broke elsewhere.
4. Security pass: JWT fail-fast still works, role middleware enforced post-changes, no secrets in git history (`git log -p | grep -iE "api_key|secret|postgres%40|gemini"` on recent commits — must return nothing), rate limits active.
5. Update README + `.env.example` to match reality (real test count, real route/model counts).
6. Generate `docs/REPORT_ALIGNMENT.md`: table of every report feature → Built as specified / Built differently / Deferred / Cut, with honest reasoning — explicitly cover General Mode, VTU auto-detection, NLP auto topic-extraction, full PYQ NLP classification (vs the simplified frequency scorer actually built), Multi-Armed Bandit method-selection, non-MCQ assessment formats, 3-day retention reward, reading-speed estimation, and whether the RL scheduler is a trained model or a heuristic with logged trajectories — do not overclaim.

**Final goal state reached when:** every section 0-7 checkbox has real pasted evidence, full test suite is green (or every failure has explicit human sign-off), and `REPORT_ALIGNMENT.md` is complete and honest. Print a final summary: what's built, what's deferred, what's cut, real final test count.

---

## 8. Relationship to `prompts/` folder files

If the `prompts/` folder already has `00_MASTER_LOOP.md` through `06_integration_final.md` pasted in, know this:

- **This file (`000_MASTER_PROMPT.md`) is the standalone, single-file version** — everything in one place, no Docker, real config values baked in. Use this if running the whole build in one long agent session.
- **The 6-file split (`01`–`06`) is the same build broken into phase-gated files** — useful if you want to stop and review after each phase instead of letting the agent run the whole thing unattended. If using those instead of this file:
  - **Skip `01_environment_setup.md` Task 1.2** (Docker Postgres) and **Task 1.8** (fix docker-compose) — both assume Docker, which you've now dropped. Use §3.2 of this file (native `createdb`) instead.
  - Everything else in `01`–`06` still applies unchanged; this file's §4–§7 content is functionally the same build, just merged.
- **Don't run both simultaneously against the same repo** — pick one entry point per session so the agent isn't reading two conflicting task lists. Recommended: use this file (`000`) as the primary; keep `01`–`06` as a reference/checkpoint structure if you want to pause between phases.



Here's the git workflow block — paste it into `000_MASTER_PROMPT.md` as a new **§2.5** (right after the Environment Configuration section, before Setup Steps):

```markdown
## 2.5 Git Workflow — commit and push discipline

Repo is already initialized and connected:
```
origin: https://github.com/Rajeshkumar80/Adaptlearn.git
branch: main
```

**Rules for every phase in this document (§3 through §7):**

1. **Commit after every completed task**, not after every phase — small, verified, working commits. Never commit a task that failed its "Verify" step.
2. **Commit message format:**
   ```
   [phase-2.4] add teacher notes CRUD routes + curl-verified

   - POST/GET/DELETE /api/teacher/notes
   - scoped access confirmed: same-class read allowed, cross-class blocked
   - tests: 178/178 passing (was 176 baseline)
   ```
   Tag with the section number from this doc (e.g. `[phase-4.7]`, `[phase-6.2]`) so history maps back to this prompt.
3. **Push after every phase exit check passes** (end of §3, §4, §5, §6, §7) — not mid-phase. This keeps `main` always in a working, demoable state at each checkpoint, so you can roll back to the last good phase boundary if something later breaks.
4. **Never commit `.env` or any file containing the real `DATABASE_URL` or `GEMINI_API_KEY`.** Before every commit:
   ```
   git status
   ```
   confirm `.env` is not staged (it must appear in `.gitignore` — verify this in §1's setup, task-zero, before the first commit). If `.env` ever gets accidentally staged, unstage it, do NOT commit, and check `.gitignore` immediately.
5. **Before every push**, run:
   ```
   git log -p -3 | grep -iE "api_key|secret|postgres%40|gemini|AQ\."
   ```
   Must return nothing. If it returns a match, stop — do not push — flag it and wait for human instruction (a leaked key in history needs rotation, not just a new commit).
6. **If a phase exit check fails and you must stop mid-phase**, still commit whatever passed tasks exist (working state), but do NOT push until the phase is fully green — keep `main` push history representing only verified checkpoints.

**Push command (after each phase gate, once §4/5/6 secrets-check above is clean):**
```
git add .
git commit -m "[phase-N] <summary>"
git push origin main
```
```

Drop that in, and also add one line to the **Non-negotiable rules** list at the very top of the file:

```markdown
7. Follow the Git Workflow in §2.5 exactly — commit per task, push per phase gate, secrets-check before every push.
```

That's it — no new file needed since you're merging it in yourself. One thing to actually go do right now, separate from the prompt: **your Gemini key is in this chat's plaintext history** — rotate it in Google AI Studio once things are wired up, and only the rotated key goes into `.env` going forward.