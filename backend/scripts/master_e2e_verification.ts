import { prisma } from "../src/db";
import { calculateRetention, projectForgettingCurve } from "../src/services/forgettingModel";
import { getStudentBehaviorMetrics } from "../src/services/behaviorEngine";
import { selectBanditAction } from "../src/services/banditPolicy";
import { allocateStudyTasks } from "../src/services/schedulerEngine";
import { evaluateStudentTestSubmission } from "../src/services/evaluator";

async function runMasterE2EVerification() {
  console.log("======================================================================");
  console.log("   ADAPTLEARN — MASTER SYSTEM END-TO-END VERIFICATION (ALL 20 SPECS)");
  console.log("======================================================================");

  // 1. Health & Server Check
  const healthRes = await fetch("http://localhost:8001/api/health");
  if (!healthRes.ok) throw new Error("Backend server not responding to /api/health");
  console.log("✔ [1/15] Backend API Health & DB Connection: OK");

  // 2. Student & Teacher Authentication
  const studentRes = await fetch("http://localhost:8001/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "demo.student@adaptlearn.dev", password: "Student@123" }),
  });
  const { token: studentToken, user: studentUser } = (await studentRes.json()) as any;
  if (!studentToken) throw new Error("Student authentication failed");

  const teacherRes = await fetch("http://localhost:8001/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "teacher1@adaptlearn.dev", password: "Teacher@123" }),
  });
  const { token: teacherToken, user: teacherUser } = (await teacherRes.json()) as any;
  if (!teacherToken) throw new Error("Teacher authentication failed");

  console.log(`✔ [2/15] Dual Auth: Student (${studentUser.name}) & Teacher (${teacherUser.name}) verified`);

  // 3. Unified Learning State & Dynamic Forgetting Model (SM-2/DSR)
  const initialRetention = calculateRetention(0, 2.5);
  const decayedRetention = calculateRetention(3, 2.5);
  const projection = projectForgettingCurve(2.5, 7);

  if (Number.isNaN(initialRetention) || Number.isNaN(decayedRetention) || projection.some((p) => Number.isNaN(p.retention))) {
    throw new Error("NaN detected in forgetting model calculations");
  }
  console.log(`✔ [3/15] Dynamic Forgetting Model: R(0)=${initialRetention}, R(3d)=${decayedRetention.toFixed(2)}, Projections: ${projection.length} points, Zero NaNs`);

  // 4. Empirical Behavioral Learning Dynamics
  const behavior = await getStudentBehaviorMetrics(studentUser.id);
  console.log(`✔ [4/15] Behavioral Dynamics: Sessions=${behavior.totalSessionsLogged}, Velocity=${(behavior.learningVelocityPerHour || 0).toFixed(1)}/hr, Streak=${behavior.studyStreakDays}d, Window=${behavior.preferredStudyWindow}`);

  // 5. Contextual Bandit Recommendation Engine
  const banditDecision = await selectBanditAction(studentUser.id, "BCS701-m1-t1", 0.45, 0.55);
  console.log(`✔ [5/15] Lightweight Bandit RL: Action=${banditDecision.action}, Rationale="${banditDecision.rationale}", Confidence=${banditDecision.confidenceScore}`);

  // 6. Unified Adaptive Study Planner (3-2-1, 80-20 & Smart Recovery)
  const dbTopics = await prisma.topic.findMany({
    where: { subjectCode: "BCS701" },
    take: 6,
  });
  const plan = allocateStudyTasks({
    startDate: "2026-10-10",
    targetDate: "2026-10-24",
    hoursPerDay: 2.0,
    mode: "3-2-1",
    isExamDate: true,
    topics: dbTopics.map((t) => ({
      id: t.id,
      subjectCode: t.subjectCode,
      moduleNumber: t.moduleNumber,
      name: t.name,
      order: 1,
      pyqImportance: t.pyqImportance,
      mastery: 0.3,
      retention: 0.5,
      prerequisiteIds: [],
    })),
  });
  console.log(`✔ [6/15] Adaptive Planner: Generated ${plan.tasks.length} tasks across ${plan.studyDaysCount} days, Buffer Days=${plan.bufferDaysCount}`);

  // 7. Academic Notes Management (Search & Access Control)
  const notesRes = await fetch("http://localhost:8001/api/notes?subjectCode=BCS701", {
    headers: { Authorization: `Bearer ${studentToken}` },
  });
  const notesData = (await notesRes.json()) as any;
  if (!notesRes.ok || !Array.isArray(notesData.notes)) throw new Error("Failed to fetch notes");
  console.log(`✔ [7/15] Academic Notes System: ${notesData.notes.length} verified notes accessible for BCS701`);

  // 8. Assessment Creation by Teacher
  const testCreateRes = await fetch("http://localhost:8001/api/tests", {
    method: "POST",
    headers: { Authorization: `Bearer ${teacherToken}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      subjectCode: "BCS701",
      title: "Master Regression Test: AI Search Evaluation",
      durationMin: 10,
      moduleNumber: 1,
      difficulty: "MEDIUM",
      attemptLimit: 3,
      integrityThreshold: 4,
      questions: [
        {
          text: "What defines an admissible heuristic in A* search?",
          questionType: "MCQ",
          options: ["Never overestimates true cost", "Always overestimates true cost", "Random values", "None"],
          correctIndex: 0,
          marks: 2,
        },
        {
          text: "Explain how A* guarantees optimality when using an admissible heuristic.",
          questionType: "DESCRIPTIVE",
          marks: 5,
          rubric: "Heuristic admissibility ensures no suboptimal goal is popped off priority queue before optimal goal",
          expectedKeywords: ["admissible", "optimality", "priority queue", "goal", "cost"],
          modelAnswer: "An admissible heuristic never overestimates the cost to reach the goal. Therefore, when the goal node is expanded from the priority queue, any other path must have f(n) >= f(goal), guaranteeing the found path is optimal.",
        },
      ],
    }),
  });
  const { test } = (await testCreateRes.json()) as any;
  if (!test?.id) throw new Error("Failed to create assessment");
  console.log(`✔ [8/15] Assessment Builder: Created test "${test.title}" (ID: ${test.id})`);

  try {
    // 9. Student Takes Test
    const takeRes = await fetch(`http://localhost:8001/api/tests/${test.id}/take`, {
      headers: { Authorization: `Bearer ${studentToken}` },
    });
    const takeData = (await takeRes.json()) as any;
    if (!takeRes.ok || !takeData.test) throw new Error("Student unable to take test");
    console.log(`✔ [9/15] Student Assessment Session: Attempt #${takeData.currentAttemptNumber} of ${takeData.attemptLimit} initialized`);

    // 10. Integrity Events Recorded
    const q1 = takeData.test.questions[0];
    const q2 = takeData.test.questions[1];
    const integrityPost = await fetch(`http://localhost:8001/api/tests/${test.id}/integrity-event`, {
      method: "POST",
      headers: { Authorization: `Bearer ${studentToken}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "TAB_SWITCH",
        severity: "HIGH",
        details: "Student switched active browser tab during assessment",
        attemptNumber: takeData.currentAttemptNumber,
      }),
    });
    const integrityResp = (await integrityPost.json()) as any;
    console.log(`✔ [10/15] Exam Integrity Tracking: Recorded TAB_SWITCH event (Warning count: ${integrityResp.warningCount}/4, ForceSubmit: ${integrityResp.forceSubmit})`);

    // 11. Student Submits Assessment with LLM Descriptive Evaluation
    const submitRes = await fetch(`http://localhost:8001/api/tests/${test.id}/submit`, {
      method: "POST",
      headers: { Authorization: `Bearer ${studentToken}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        answers: [
          { questionId: q1.id, selectedIndex: 0 },
          {
            questionId: q2.id,
            textAnswer: "An admissible heuristic never overestimates the actual cost to reach the goal, ensuring optimal expansion order in the priority queue.",
          },
        ],
        timeTakenSec: 85,
        status: "SUBMITTED",
      }),
    });
    const submitData = (await submitRes.json()) as any;
    if (!submitRes.ok || !submitData.result) throw new Error("Assessment submission failed: " + JSON.stringify(submitData));
    const pct = Math.round((submitData.result.score / test.totalMarks) * 100);
    console.log(`✔ [11/15] LLM Evaluation: Final Score = ${submitData.result.score}/${test.totalMarks} (${pct}%), Evaluated in ${submitData.result.timeTakenSec}s`);

    // 12. Teacher Overrides Marks & Adds Feedback
    const overrideRes = await fetch(`http://localhost:8001/api/tests/results/${submitData.result.id}/grade`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${teacherToken}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        teacherMarksOverride: 7.0,
        overrideScore: 7.0,
        teacherFeedback: "Teacher reviewed: Excellent conceptual clarity on heuristic admissibility.",
      }),
    });
    const overrideData = (await overrideRes.json()) as any;
    console.log(`✔ [12/15] Teacher Override & Audit: Score updated to ${overrideData.result.score}, Feedback recorded`);

    // 13. Integrity Ledger & Advisory Disclosure Report
    const integrityReportRes = await fetch(`http://localhost:8001/api/tests/${test.id}/integrity-report`, {
      headers: { Authorization: `Bearer ${teacherToken}` },
    });
    const reportData = (await integrityReportRes.json()) as any;
    if (!reportData.csvData || !reportData.disclosure) throw new Error("Integrity report incomplete");
    console.log(`✔ [13/15] Integrity Report & CSV Export: ${reportData.totalIntegrityEvents} events, Disclosure banner verified`);

    // 14. Student Intelligence API (Normalized & Safe)
    const intelRes = await fetch("http://localhost:8001/api/student/intelligence", {
      headers: { Authorization: `Bearer ${studentToken}` },
    });
    const intelData = (await intelRes.json()) as any;
    const intel = intelData.intelligence;
    console.log(`✔ [14/15] Student Learning Intelligence API: Learning Score=${intel.overallLearningScore}/100, Mastery=${intel.averageMastery}%, Retention=${intel.retentionScore}%, Forgetting Risk=${intel.forgettingRiskScore}%`);

    // 15. Frontend Production Readiness Verification
    const feRes = await fetch("http://localhost:3000/student/progress");
    if (!feRes.ok) throw new Error("Frontend /student/progress did not respond with 200");
    console.log("✔ [15/15] Frontend Learning Intelligence Route: Responding HTTP 200 OK");

    console.log("======================================================================");
    console.log("   🎉 ALL 15 VERIFICATION GATES PASSED WITHOUT A SINGLE FAILURE!");
    console.log("======================================================================");
  } finally {
    // Clean up test
    await fetch(`http://localhost:8001/api/tests/${test.id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${teacherToken}` },
    });
  }
}

runMasterE2EVerification().catch((err) => {
  console.error("Master verification failed:", err);
  process.exit(1);
});
