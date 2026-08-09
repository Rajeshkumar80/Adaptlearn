# Phase 6 — Integration, Full Test Pass, Scope Truth Document

**Precondition:** Phase 5 complete, every screen clicked through with real data.

**Goal:** End-to-end proof the whole system works together, full regression test, and a single honest document reconciling what was built against the original Team 15 report — this is what defends the project in viva.

## Task 6.1 — Full regression test suite
Run backend tests + any frontend tests added in Phase 5.5.11.
**Verify:** paste the complete real pass/fail output. Any failure must be fixed before continuing — do not defer to "known issue" without explicit human sign-off.

## Task 6.2 — End-to-end user journey test (manual, scripted)
Script and execute, with real screenshots/curl at each step:
1. Teacher creates a class, adds students
2. Teacher uploads notes for a subject/module
3. Teacher creates an assignment and a test
4. Student logs in, sees notification, views notes, asks the AI tutor a question, answers the follow-up MCQ
5. Student uses the scheduler with a free-hours input, gets a plan
6. Student attempts a gated topic before prerequisite — blocked; completes prerequisite — unblocked
7. Student takes the test, triggers an anti-cheat flag (e.g. tab switch) intentionally to prove detection works
8. Student submits the assignment
9. Teacher grades the assignment, views the cheat report for the test, views class analytics
10. Student sees their grade and updated mastery/leaderboard position

**Verify:** paste/attach every step's real evidence in order. This sequence IS your demo script — treat it as such.

## Task 6.3 — Performance sanity check
Hit key endpoints (health, ai/ask, planner, dashboard) and note real response times. Confirm rate limits behave as configured (Phase 3.8).
**Verify:** paste real timing numbers, not assumed "5-50ms" carried over from old docs.

## Task 6.4 — Security pass
Confirm: JWT fail-fast still works (Phase 1 audit baseline), role middleware still enforced after all Phase 2/5 changes, no secrets committed (`git log -p | grep -i "api_key\|secret"` on recent commits), rate limiting active on AI + auth routes.
**Verify:** paste each check's real output.

## Task 6.5 — Update all docs to match reality
- README: correct test counts, correct route/model/page counts, correct feature list (only list what's actually built and verified in this loop)
- `.env.example`: fully accurate, no stale provider references
- Remove or archive `docker-compose.yml` decision from Phase 1.8, documented clearly

## Task 6.6 — Report Alignment Document (the viva-defense artifact)
Create `REPORT_ALIGNMENT.md` — a table with three columns: **Report claim (Team 15 PDF)** | **Built as specified / Built differently / Deferred / Cut**, covering every feature discussed across this build, explicitly including:
- General Mode (non-VTU users) — state cut/deferred and why
- VTU Auto-Detection — state cut/deferred and why
- NLP topic dependency auto-extraction — state cut/deferred and why (Phase 2.9 used manual/seeded prerequisites instead)
- PYQ pattern analysis — state it was built as a simplified frequency scorer (Phase 4.4), not full NLP question-classification, and why
- Multi-Armed Bandit for learning-method selection — state cut/deferred and why
- Diagram/numerical assessment formats beyond MCQ — state current MCQ-only limitation and why
- Retention Reward (3-day-later recheck) — state cut/deferred and why
- Reading-speed-based time estimation — state cut/deferred and why
- RL scheduler — state honestly whether it's a trained DQN or a heuristic priority formula with logged trajectories for future training (per earlier scoping decision) — **do not let this entry overclaim**
- Teacher portal, notes/assignments, class management — state explicitly this is new scope beyond the original report, added deliberately

This document is what you present if asked "does the code match your report" — it must be defensible, specific, and honest, not marketing copy.

**Verify:** paste the final table in full.

---

## Final Exit Check — Project Goal State
- [ ] All 6 phases' exit checks passed with real evidence, no gaps
- [ ] Full regression suite green (or every failure explicitly triaged with human sign-off)
- [ ] End-to-end journey script executed and evidenced
- [ ] Security pass clean
- [ ] Docs match reality
- [ ] REPORT_ALIGNMENT.md complete and honest

**When every box above is checked with real evidence attached, the loop terminates. Print a final summary: what was built, what was deferred, what was cut, and the real final test count.**
