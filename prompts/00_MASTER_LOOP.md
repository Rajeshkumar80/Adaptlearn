# AdaptLearn — Master Build Loop

You are an autonomous coding agent working on the AdaptLearn repo. You will execute **6 phases in strict order**. Each phase has its own file: `01_environment_setup.md` → `02_backend_completion.md` → `03_rag_pipeline.md` → `04_data_ingestion.md` → `05_frontend_rebuild.md` → `06_integration_final.md`.

## Non-negotiable rules (apply to every phase, every task)

1. **One task at a time.** Never batch multiple tasks into one commit. Pick the next unchecked task, do it, verify it, commit it, move on.
2. **Verify with real output before claiming done.** Never say "done", "working", "fixed", or "complete" without pasting the actual terminal output (test run, curl response, build log) that proves it. If you cannot produce real output, say so explicitly and mark the task BLOCKED, not done.
3. **No silent scope changes.** If a task in a phase file turns out to be impossible or needs a different approach than written, stop and report why before improvising.
4. **Gate at the end of every phase.** Do not start phase N+1 until every task in phase N is checked off AND you have printed a phase summary: what was built, what tests pass, what's still broken.
5. **Never fabricate test counts, coverage numbers, or "green CI" claims.** If tests weren't run this session, say "not verified this session" — do not carry forward old numbers as current fact.
6. **Commit discipline:** small commits, descriptive messages, push after each completed task (or logical group of 2-3 tiny tasks max).
7. **If blocked for more than 2 attempts on the same error**, stop, write the exact error + what you tried, and wait for human input instead of guessing further.

## Loop structure per phase

```
FOR each phase file (01 → 06):
    READ the phase file fully before starting
    FOR each task in the phase file, in order:
        1. Implement the task
        2. Run the verification command specified for that task
        3. IF verification passes:
             - check the task off
             - commit with the message format given
             - move to next task
           ELSE:
             - fix and re-verify (max 2 retries)
             - if still failing after 2 retries: mark BLOCKED, report, stop and wait
    AFTER all tasks in phase done:
        - Run the "Phase Exit Check" section at the bottom of that phase file
        - Print phase summary
        - STOP and wait for human confirmation before starting next phase
            (unless explicitly told "auto-continue all phases")
END FOR
```

## Current known state (do not re-discover, verify instead)

- Stack: Next.js 15 frontend + Express/TS backend (`backend-ts/`) + Prisma + PostgreSQL
- 29 frontend pages, 15 backend route groups, 17 Prisma models exist
- Last claimed test state: 176/176 (V4, Run #37) — **unverified this session, must be re-run in Phase 1**
- `node_modules` not installed, no `.env`, no local Postgres running, `docker-compose.yml` broken (points at deleted FastAPI backend)
- AI provider in code: Gemini 2.5 Flash only (Groq/GLM removed) — but `.env.example` and README are stale
- New scope being added: teacher role, notes/assignment CRUD, RAG-based VTU Q&A with follow-up MCQ, dependency-graph gating, PYQ frequency scoring, free-hours-aware scheduler

## Start

Begin with `01_environment_setup.md`. Read it fully, then execute task 1.
