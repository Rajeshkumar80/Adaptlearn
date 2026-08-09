# Phase 5 — Frontend Rebuild

**Precondition:** Phase 4 complete — backend is fully functional with real data before frontend work starts, so frontend is built against real API responses, not guesses.

**Goal:** Full UI covering student + teacher flows. This is a rebuild, not a patch — but reuse existing components (`ui/*`, charts, toast, sidebar, header per SYSTEM_REPORT) rather than rewriting from scratch where they still fit.

**Important instruction to the agent:** Do NOT produce generic, templated-looking AI UI (default shadcn spacing, default color palettes, no visual identity). Load and follow the design constraints in the frontend-design skill before writing any component. Every screen needs an intentional layout decision, not a default one.

## Task 5.1 — Design tokens + IA pass
Before writing components, define: color palette (this project has no established palette per memory — pick one deliberate direction, e.g. academic/serious given VTU context, and state the reasoning), typography scale, spacing scale. Write information architecture: full site map covering student routes (existing 29 + new: notes-by-module, assignments, roadmap, "how I learn" state view) and new teacher routes (dashboard, classes, notes upload, assignments, test creation, analytics, cheat reports).
**Verify:** paste the token definitions and route map before building screens.

## Task 5.2 — Student: RAG tutor UI (subject/course-code scoped Q&A)
Chat-style interface scoped by subject+module selector, renders VTU-formatted answers (points, diagram blocks), shows follow-up MCQ inline after each answer, submits MCQ response and shows immediate mastery feedback.
**Verify:** screenshot or component render proof against real backend response from Phase 3/4.

## Task 5.3 — Student: scheduler with free-hours input
Simple form: "how many hours today", "what tasks/topics", "how long each takes" → submits to Phase 2 Task 2.11 endpoint → renders returned schedule as a day-plan (reuse existing planner UI shell if one exists, confirm from Phase 1 audit).
**Verify:** real submission → real rendered schedule from real API response.

## Task 5.4 — Student: state tracker / "how I learn" page
Visualizes forgetting curve per topic, fast/slow learning indicators, mastery trend — pull from existing BKT data (confirmed via Phase 1 audit) plus new PYQ importance and dependency-gating status from Phase 2.
**Verify:** real chart rendered from real seeded student's data.

## Task 5.5 — Student: notes-by-subject/module + assignments tab
Per-subject column: notes list (filterable by module) from Phase 2 Task 2.4, assignments list with submit-upload flow from Task 2.5, shows grade once teacher grades it.
**Verify:** full real flow — student views notes uploaded in Phase 4, submits an assignment, screenshot before/after grading.

## Task 5.6 — Student: roadmap/planner view
Step-by-step visual roadmap per topic using existing dependency graph data (Phase 2 Task 2.9), locked/unlocked states based on prerequisite mastery.
**Verify:** real render showing at least one locked and one unlocked topic from real seeded state.

## Task 5.7 — Teacher: dashboard + analytics
Class-wide performance charts (reuse admin analytics chart components if they fit), pulling from Phase 2 Task 2.7.
**Verify:** real render from real seeded class data.

## Task 5.8 — Teacher: notes upload + assignment creation/grading UI
Upload form (subject+module tagged) → triggers Phase 3/4 ingestion pipeline. Assignment creation form + submissions list with inline grading (marks + feedback fields).
**Verify:** full real flow with screenshots, teacher account from Phase 4 seed data.

## Task 5.9 — Teacher: test creation + cheat report view
Test creation form with marking scheme config. Cheat report view surfacing `CheatFlag` data per test per student (Phase 2 Task 2.7).
**Verify:** real render showing at least one flagged student from seeded/test data.

## Task 5.10 — Teacher: class + notification management
Create class, add/remove students (Task 2.6), send notification form (Task 2.8) with real-time delivery confirmation.
**Verify:** two-browser-tab proof — teacher sends, student tab receives live.

## Task 5.11 — Role-based routing + nav
Confirm login redirects correctly by role, nav/sidebar shows only role-appropriate items, unauthorized route access is blocked client-side (in addition to the server-side 403 from Phase 2.3).
**Verify:** attempt to hit a teacher route as a logged-in student, confirm client blocks/redirects, not just a broken page.

---

## Phase Exit Check
- [ ] Every screen built against REAL backend data, not mocked
- [ ] Design tokens applied consistently, no default-template look (spot check 3 random screens)
- [ ] All student flows working end-to-end
- [ ] All teacher flows working end-to-end
- [ ] Role-based access enforced client + server side
- [ ] At minimum one frontend test file added (per Phase 1 audit finding: zero frontend tests currently exist — this gap must close before calling the project done)

**Do not proceed to `06_integration_final.md` until every screen has been clicked through with real data, not assumed working from code review alone.**
