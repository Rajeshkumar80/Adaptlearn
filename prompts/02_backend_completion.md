# Phase 2 — Backend Completion (Teacher Portal + Student Gap-Fill)

**Precondition:** Phase 1 exit check fully passed. Do not start this phase otherwise.

**Goal:** Extend the Prisma schema and Express routes to cover the teacher role and the student-side features not yet built, WITHOUT breaking any of the currently-passing tests from Phase 1.5.

## Task 2.1 — Schema design review before writing code
Before touching `schema.prisma`, write out (in a scratch file, not committed) the new models and their relations:
- `Class` (id, name, branch, semester, createdByTeacherId, students[])
- `Notes` (id, subjectCode, moduleNumber, title, fileUrl, uploadedByTeacherId, classId, createdAt)
- `Assignment` (id, subjectCode, title, description, dueDate, createdByTeacherId, classId)
- `AssignmentSubmission` (id, assignmentId, studentId, fileUrl, submittedAt, marks, feedback, gradedAt)
- Extend `User` model with `role: STUDENT | TEACHER | ADMIN` if not already an enum, and `classId` for students
- `CheatFlag` — confirm this already exists from anti-cheat (Phase 1 audit); if not, add (studentId, testId, type, severity, timestamp)

**Verify:** paste the diff you intend to apply to `schema.prisma` before running migrate. Confirm no existing model's required fields are broken by the change (check cascade delete rules match existing pattern per SYSTEM_REPORT: "Cascade deletes on all User relations").

## Task 2.2 — Migrate
```
npx prisma migrate dev --name teacher_portal_and_notes
```
**Verify:** paste migration output, confirm no data loss warnings on tables that matter (fine on dev DB, but call out if it would be destructive on a real DB).

## Task 2.3 — Auth/role middleware extension
Confirm existing `middleware/auth.ts` role-check pattern (used for admin routes per SYSTEM_REPORT). Extend to support `TEACHER` role using the SAME pattern, not a new one.
**Verify:** unit test or curl proving a STUDENT JWT gets 403 on a teacher-only route, and a TEACHER JWT gets 200.

## Task 2.4 — Teacher routes: Notes CRUD
`POST /api/teacher/notes` (upload, subject+module scoped), `GET /api/teacher/notes`, `DELETE /api/teacher/notes/:id`
`GET /api/student/notes?subject=&module=` (student read access, scoped to their class)
**Verify:** curl sequence — teacher uploads note, student in same class can fetch it, student in a DIFFERENT class cannot. Paste all three responses.

## Task 2.5 — Teacher routes: Assignments CRUD + grading
`POST /api/teacher/assignments`, `GET /api/teacher/assignments/:id/submissions`, `PATCH /api/teacher/assignments/:id/submissions/:studentId` (marks + feedback)
`POST /api/student/assignments/:id/submit` (upload), `GET /api/student/assignments`
**Verify:** curl sequence covering: create assignment → student submits → teacher grades → student sees marks. Paste all steps.

## Task 2.6 — Teacher routes: Class management
`POST /api/teacher/classes` (create, with USN/branch/semester naming), `POST /api/teacher/classes/:id/students` (add), `DELETE /api/teacher/classes/:id/students/:studentId` (remove)
**Verify:** curl proving add/remove works and reflects in student's `classId`.

## Task 2.7 — Teacher analytics + cheat report
`GET /api/teacher/analytics` — class-wide performance aggregation (reuse existing admin analytics query pattern, scope to teacher's classes only)
`GET /api/teacher/tests/:id/cheat-report` — surface existing `CheatFlag` data per-test, per-student (this is a READ view on data that likely already exists per Phase 1 audit — confirm, don't rebuild collection logic)
**Verify:** curl output showing real aggregated numbers from seeded data.

## Task 2.8 — Notifications: teacher → student
Confirm existing Socket.io notification system (per SYSTEM_REPORT this exists for admin announcements). Extend so TEACHER role can emit to their specific class room, not global.
**Verify:** two terminal windows — one student socket client connected, teacher sends notification via API, student receives it in real time. Paste both terminal logs.

## Task 2.9 — Dependency graph hard-gating
Confirm `Topic` model has prerequisite relations (check existing schema per report's `/mastery/graph` reference). Add server-side enforcement: block `POST /api/learning-state/update` (or wherever study progress is recorded) if prerequisite topic mastery < 0.7.
**Verify:** curl attempting to study a gated topic before prerequisite is met → expect 403/400 with clear error. Then complete prerequisite, retry → expect success.

## Task 2.10 — PYQ frequency scorer (backend logic only, no NLP extraction yet — see note)
Add a `pyqImportance` field to `Topic` (0-100 score). For now, this is manually seedable data (subject-matter input), NOT auto-extracted via NLP — that's a report feature you're explicitly deferring (confirm this decision is documented, see Phase 6). Wire `pyqImportance` into the existing scheduler priority formula per report §5.5: `priority = (1-mastery)*0.4 + pyqImportance*0.3 + dependencyCount*0.2 + forgettingUrgency*0.1`.
**Verify:** show the actual formula in code, and one real priority calculation with real numbers from seeded data.

## Task 2.11 — Scheduler: accept explicit free-hours input
Extend planner route to accept `{ availableHoursToday: number }` from the student and feed it into Phase 2 (Time Allocation) of the existing scheduler logic instead of using a hardcoded default.
**Verify:** curl with two different `availableHoursToday` values, show the returned schedule differs proportionally.

---

## Phase Exit Check
- [ ] Schema migrated cleanly, no broken existing models
- [ ] Full test suite re-run — paste real pass/fail count, compare to Phase 1 baseline (any regressions must be fixed before proceeding)
- [ ] Every new route has a pasted curl verification, not a claim
- [ ] Role middleware proven with real 403/200 responses
- [ ] Dependency gating proven with a blocked-then-unblocked real request pair

**Do not proceed to `03_rag_pipeline.md` until this is fully green.**
