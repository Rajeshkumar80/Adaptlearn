# Phase 1 — Environment Setup & Ground-Truth Audit

**Goal:** Get the existing codebase actually running locally, and produce a truthful, verified picture of what works — no claims from memory or old docs.

## Task 1.1 — Install dependencies
```
cd backend-ts && npm install
cd ../frontend && npm install
```
**Verify:** `ls node_modules | wc -l` in both dirs returns nonzero. Paste output.
**Commit:** none needed (node_modules is gitignored)

## Task 1.2 — Provision PostgreSQL
Use Docker if available, else local install.
```
docker run --name adaptlearn-pg -e POSTGRES_PASSWORD=devpass -e POSTGRES_DB=adaptlearn -p 5432:5432 -d postgres:14
```
**Verify:** `psql -h localhost -U postgres -c '\l'` lists `adaptlearn` DB, or `nc -zv localhost 5432` succeeds. Paste output.

## Task 1.3 — Create `.env`
Copy `backend-ts/.env.example`, fix stale values:
- Remove `GROQ_API_KEY` and `GLM`/Zhipu references (provider is Gemini-only in code — confirm in `src/config.ts` or equivalent before deleting)
- Set `DATABASE_URL=postgresql://postgres:devpass@localhost:5432/adaptlearn`
- Set `JWT_SECRET` (generate: `openssl rand -base64 32`)
- Set `GEMINI_API_KEY` (placeholder if not yet provided by user — flag this as a blocker for later tasks that need live Gemini calls)
- Set `REDIS_URL` only if Redis is available, else leave unset (in-memory cache fallback is by design, confirmed in code)

**Verify:** `cat backend-ts/.env` (redact secrets in output) shows all required keys present, no GLM/Groq leftovers.

## Task 1.4 — Prisma generate + push + seed
```
cd backend-ts
npx prisma generate
npx prisma db push
npm run db:seed
```
**Verify:** paste full output of each command. `db push` must show tables created; seed must show row counts inserted (no errors).

## Task 1.5 — Run backend test suite for real
```
npm test
```
**Verify:** paste the FULL test summary line (e.g. `Tests: X passed, Y total`). Compare this actual number against the previously claimed "176/176". If it differs, report the difference — do not silently update docs to match old claims.

## Task 1.6 — Boot backend + frontend, smoke test
```
npm run dev   # backend-ts, expect :8001
```
```
npm run dev   # frontend, expect :3000
```
**Verify:** `curl http://localhost:8001/api/health` returns 200 with DB counts. Load `http://localhost:3000` and confirm login page renders (screenshot or curl status 200). Paste both.

## Task 1.7 — RAG audit (critical — determines Phase 3 scope)
Locate the `/api/documents/ask` (or equivalent) route implementation.
Answer definitively, with file/line references:
- Does it chunk uploaded text before sending to Gemini? (yes/no + file)
- Does it generate embeddings and store them anywhere (pgvector column, separate vector store)? (yes/no + file)
- Does it perform similarity search / retrieval at query time, or does it stuff the entire document into the prompt context? (describe exact mechanism)
- What happens if a 500-page PDF is uploaded — will it fit in the Gemini context window as currently implemented?

**Output required:** a short written verdict — "RAG is real" / "RAG is fake (raw context stuffing)" / "RAG is partial (X works, Y missing)" — this decides whether Phase 3 is a fix or a from-scratch build.

## Task 1.8 — Fix docker-compose.yml
Current file builds `context: ./backend` (deleted FastAPI project). Either:
(a) Add a `Dockerfile` for `backend-ts` and repoint compose at it, or
(b) Delete docker-compose.yml and document that dev setup is npm-only for now (faster, recommended if time-constrained)
**Verify:** if (a), `docker compose config` validates with no errors. If (b), confirm removal + note added to README.

## Task 1.9 — Fix stale docs
- `.env.example`: remove GROQ/GLM, match real Gemini-only config
- `README.md`: correct test count to the real number from Task 1.5, correct route module count if changed
**Verify:** grep for `GROQ` and `GLM`/`Zhipu` across repo returns zero matches outside of git history/changelog files.

---

## Phase Exit Check
Before moving to Phase 2, confirm and print:
- [ ] Both `npm install`s succeeded
- [ ] Postgres reachable
- [ ] `.env` complete and accurate
- [ ] Prisma migrated + seeded with real row counts shown
- [ ] Real test count from this session's `npm test` run (not the old "176" claim)
- [ ] Backend `:8001` and frontend `:3000` both booted and smoke-tested
- [ ] RAG verdict delivered (real / fake / partial) with file references
- [ ] docker-compose fixed or removed
- [ ] Stale docs corrected

**Do not proceed to `02_backend_completion.md` until every box above has real proof attached, not an assumption.**
