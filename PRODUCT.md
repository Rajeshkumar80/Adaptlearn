# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Primary: VTU (Visvesvaraya Technological University) BCS-scheme engineering students. Situation: studying BCS subjects (Software Engineering, OOPS, Computer Networks, etc.) through module-mapped notes, with exams and viva approaching. Job: absorb syllabus content, test themselves, track mastery, and stay on a study schedule.
- Secondary: teachers who manage classes, notes, assignments, tests, and monitor student performance and anti-cheat reports. Admin (platform operator) who oversees counts and system health.

## Product Purpose

AdaptLearn is an adaptive learning platform for VTU students and their teachers. Students study module-mapped subject notes, ask an AI RAG tutor, take tests, track mastery per subject, and get adaptive scheduling. Teachers author and distribute notes/assignments/tests, view analytics, and grade with AI assistance. Success = a student can study a full subject, verify understanding, and demonstrate mastery; a teacher can run their class digitally end-to-end.

## Positioning

The syllabus is the unit of truth: every note, test question, tutor answer, and mastery metric is mapped to VTU modules and topics, so study effort is always anchored to what the exam actually covers. The AI tutor answers only from the ingested course documents (RAG), so answers cite the module notes rather than generic knowledge.

## Operating Context

- Students study in long sessions at a laptop (and mobile on the bus/dorm): warm, readable screens; dense data when tracking progress; a chat-style tutor panel; module-mapped navigation with a subject picker.
- Teachers work desktop-first, data-dense: class rosters, test results, cheat-flag reports, assignment submission lists, analytics.
- Admin sees platform-level counts and system health.
- Evaluation context matters: exam-hall heritage, marks registers, viva — screenshots are shown to faculty in review; the UI must look deliberate and non-generic.

## Capabilities and Constraints

Confirmed functionality:
- Roles: STUDENT, TEACHER, ADMIN (JWT auth, role-based guards).
- Student: AI RAG tutor with chat history, module-mapped notes (PDF-only ingestion), tests with scoring, adaptive scheduler, mastery/progress tracker, roadmap, assignments (submit + graded result).
- Teacher: dashboards, analytics, classes, notes upload, tests, assignments with AI-assisted grading and manual override, anti-cheat flag reports.
- Admin: platform dashboard with counts (users, students, teachers, classes, tests, chunks, notes, assignments, cheat flags, submissions).
- Backend: Express + Prisma + SQLite (Port 8001). Frontend: Next.js App Router + Tailwind CSS v4 + TypeScript (Port 3000).
- AI: Gemini (gemini-3.5-flash) for tutor + grading via `geminiGenerate`; RAG over embedded document chunks.
- Constraint: functionality, routes, API contract, and behavior must not change during redesign; only visual/UX surface and component structure may be reorganized.

## Brand Commitments

- Product name: AdaptLearn.
- Design world as of redesign start: "Academic Ledger" (navy/cream/brass, hairline rules, Fraunces + Public Sans) — being replaced by user request with a bold new visual world; product truth preserved.
- Deliberate rejection of generic shadcn/SaaS defaults (gray-100 cards, blue-500 buttons, 8px radii, purple gradients) remains binding in any new world.

## Evidence on Hand

- Existing running app with real routes, components, and data (69 users, 11 subjects, 102 topics, 127 documents, 1033 chunks, 11 classes in the dev DB).
- DESIGN.md documenting the incumbent Academic Ledger system (to be replaced).
- Demo credentials: teacher1@adaptlearn.dev / Teacher@123, demo.student@adaptlearn.dev / Student@123, admin@adaptlearn.dev / Admin@123.

## Product Principles

1. The syllabus/module is the organizing unit — nothing floats free of it.
2. AI is assistive and grounded — tutor answers cite course docs; grading is AI-draft, teacher-ratified.
3. Mastery is earned and visibly tracked — progress must be legible at a glance.
4. Two audiences, one system — student warmth and teacher density share one identity, never two apps.
5. Craft is non-negotiable — the UI must look deliberate, not like template output.

## Accessibility & Inclusion

- Reduced-motion support (prefers-reduced-motion) was a shipped behavior; keep it.
- Keyboard focus rings, tabular numerals for data, legible contrast for long reading sessions.
