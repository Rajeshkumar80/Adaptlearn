import { prisma } from "../db";

async function runAssessmentLiveFlow() {
  console.log("=== T4 ASSESSMENT & INTEGRITY LIVE FLOW TEST ===");

  // 1. Authenticate Teacher & Student
  const teacherRes = await fetch("http://localhost:8001/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "teacher1@adaptlearn.dev", password: "Teacher@123" }),
  });
  const { token: teacherToken, user: teacherUser } = (await teacherRes.json()) as any;
  if (!teacherToken) throw new Error("Teacher login failed");
  console.log(`[1] Teacher authenticated: ${teacherUser.name}`);

  const studentRes = await fetch("http://localhost:8001/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "demo.student@adaptlearn.dev", password: "Student@123" }),
  });
  const { token: studentToken, user: studentUser } = (await studentRes.json()) as any;
  if (!studentToken) throw new Error("Student login failed");
  console.log(`[2] Student authenticated: ${studentUser.name}`);

  // 2. Teacher creates Assessment with MCQ + Descriptive questions
  const createTestRes = await fetch("http://localhost:8001/api/tests", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${teacherToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      subjectCode: "BCS701",
      title: "VTU 7th Sem CSE Test: AI Search & Admissibility",
      durationMin: 15,
      moduleNumber: 1,
      difficulty: "MEDIUM",
      attemptLimit: 3,
      integrityThreshold: 4,
      questions: [
        {
          text: "Which property ensures A* search is optimal on a tree search?",
          questionType: "MCQ",
          options: ["Admissibility", "Completeness", "Greediness", "Randomness"],
          correctIndex: 0,
          marks: 2,
        },
        {
          text: "Explain the admissibility condition of a heuristic in A* search algorithm.",
          questionType: "DESCRIPTIVE",
          marks: 5,
          rubric: "h(n) must never overestimate the true cost to reach the goal state",
          expectedKeywords: ["admissible", "heuristic", "overestimate", "cost", "goal"],
          modelAnswer:
            "A heuristic h(n) is admissible if it never overestimates the cost to reach the goal, meaning h(n) <= h*(n).",
        },
      ],
    }),
  });
  const testJson = (await createTestRes.json()) as any;
  console.log(`[3] Test created: HTTP ${createTestRes.status} -> ID: ${testJson.test?.id}, totalMarks: ${testJson.test?.totalMarks}`);
  if (createTestRes.status !== 201 || !testJson.test?.id) throw new Error("Failed to create test");
  const testId = testJson.test.id;

  try {
    // 3. Student views available tests
    const availRes = await fetch("http://localhost:8001/api/tests/available", {
      headers: { Authorization: `Bearer ${studentToken}` },
    });
    const availJson = (await availRes.json()) as any;
    const foundTest = availJson.tests?.find((t: any) => t.id === testId);
    console.log(`[4] Student sees available test: found=${!!foundTest}, pastAttempts=${foundTest?.results?.length || 0}`);
    if (!foundTest) throw new Error("Created test not found in student available list");

    // 4. Student begins test attempt (take endpoint)
    const takeRes = await fetch(`http://localhost:8001/api/tests/${testId}/take`, {
      headers: { Authorization: `Bearer ${studentToken}` },
    });
    const takeJson = (await takeRes.json()) as any;
    console.log(`[5] Student takes test: HTTP ${takeRes.status}, attempt #=${takeJson.currentAttemptNumber}/${takeJson.attemptLimit}`);
    const q1 = takeJson.test?.questions?.[0];
    const q2 = takeJson.test?.questions?.[1];
    // Verify no answer leakage
    if (q1?.correctIndex !== undefined || q2?.modelAnswer !== undefined) {
      throw new Error("SECURITY FAILURE: Answer key or model answer leaked to student in /take endpoint!");
    }
    console.log("    Security check passed: 0 answer keys or model answers exposed to client.");

    // 5. Test Integrity Engine (escalating warnings)
    const integrityEvents = [
      { type: "TAB_SWITCH", details: "Switched to external tab" },
      { type: "CLIPBOARD_PASTE", details: "Attempted paste in text area" },
      { type: "WINDOW_BLUR", details: "Window lost focus" },
      { type: "TAB_SWITCH", details: "Second tab switch" },
      { type: "TAB_SWITCH", details: "Third tab switch triggering force submit" },
    ];

    let lastWarningResult: any = null;
    for (let i = 0; i < integrityEvents.length; i++) {
      const ev = integrityEvents[i];
      const evRes = await fetch(`http://localhost:8001/api/tests/${testId}/integrity-event`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${studentToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...ev, attemptNumber: 1 }),
      });
      lastWarningResult = (await evRes.json()) as any;
      console.log(`    Integrity Event #${i + 1} (${ev.type}): WarningCount=${lastWarningResult.warningCount}, Action=${lastWarningResult.actionTaken}`);
    }
    if (lastWarningResult.actionTaken !== "FORCE_SUBMIT") {
      throw new Error("Integrity engine failed to trigger FORCE_SUBMIT on 5th event!");
    }
    console.log(`[6] Integrity escalation verified: 4 warnings, 5th triggered ${lastWarningResult.actionTaken}`);

    // 6. Student submits attempt #1 with auto-grading + LLM evaluation
    const submitRes = await fetch(`http://localhost:8001/api/tests/${testId}/submit`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${studentToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answers: [
          { questionId: q1.id, selectedIndex: 0 },
          {
            questionId: q2.id,
            textAnswer:
              "An admissible heuristic in A* search is one that never overestimates the actual cost to reach the goal state.",
          },
        ],
        timeTakenSec: 95,
        status: "AUTO_SUBMITTED_INTEGRITY",
      }),
    });
    const submitJson = (await submitRes.json()) as any;
    console.log(`[7] Attempt #1 submitted: HTTP ${submitRes.status}, Score=${submitJson.result?.score}/${submitJson.result?.totalMarks}`);
    console.log(`    Descriptive Feedback: ${submitJson.evaluation?.items?.[1]?.feedback}`);
    if (submitRes.status !== 200 || submitJson.result?.score < 5) {
      throw new Error("Submission evaluation scored lower than expected for valid answer");
    }

    // 7. Student submits attempt #2 and attempt #3
    for (let attempt = 2; attempt <= 3; attempt++) {
      const subRes = await fetch(`http://localhost:8001/api/tests/${testId}/submit`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${studentToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          answers: [{ questionId: q1.id, selectedIndex: 0 }],
          timeTakenSec: 45,
          status: "SUBMITTED",
        }),
      });
      console.log(`[8.${attempt}] Attempt #${attempt} submitted: HTTP ${subRes.status}`);
      if (subRes.status !== 200) throw new Error(`Attempt #${attempt} failed`);
    }

    // 8. Attempt #4 MUST be rejected with HTTP 409 Conflict
    const attempt4Res = await fetch(`http://localhost:8001/api/tests/${testId}/take`, {
      headers: { Authorization: `Bearer ${studentToken}` },
    });
    const attempt4Json = (await attempt4Res.json()) as any;
    console.log(`[9] Attempt #4 take request: HTTP ${attempt4Res.status} -> ${attempt4Json.error}`);
    if (attempt4Res.status !== 409) {
      throw new Error(`Attempt #4 was NOT rejected with HTTP 409! Got: ${attempt4Res.status}`);
    }
    console.log("    Attempt limit strictly enforced: 4th attempt rejected with 409 Conflict.");

    // 9. Teacher reviews submissions and applies override
    const resultsRes = await fetch(`http://localhost:8001/api/tests/${testId}/results`, {
      headers: { Authorization: `Bearer ${teacherToken}` },
    });
    const resultsJson = (await resultsRes.json()) as any;
    console.log(`[10] Teacher fetched results: count=${resultsJson.results?.length}`);
    const firstResult = resultsJson.results?.[0];

    const gradeOverrideRes = await fetch(`http://localhost:8001/api/tests/results/${firstResult.id}/grade`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${teacherToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        teacherMarksOverride: 7.0,
        overrideScore: 7.0,
        teacherFeedback: "Teacher validated: Outstanding concise explanation of admissibility.",
      }),
    });
    const gradeJson = (await gradeOverrideRes.json()) as any;
    console.log(`[11] Teacher override: HTTP ${gradeOverrideRes.status}, FinalScore=${gradeJson.result?.score}, Feedback="${gradeJson.result?.teacherFeedback}"`);
    if (gradeJson.result?.score !== 7.0) throw new Error("Teacher grade override failed to update final score");

    // 10. Teacher views Integrity Report and CSV export
    const integrityRes = await fetch(`http://localhost:8001/api/tests/${testId}/integrity-report`, {
      headers: { Authorization: `Bearer ${teacherToken}` },
    });
    const integrityJson = (await integrityRes.json()) as any;
    console.log(`[12] Integrity Report: totalEvents=${integrityJson.totalIntegrityEvents}, studentsFlagged=${integrityJson.studentsFlaggedCount}`);
    console.log(`    CSV Header: ${integrityJson.csvData?.split("\n")[0]}`);
    console.log(`    Disclosure: ${integrityJson.disclosure?.slice(0, 70)}...`);
    if (!integrityJson.csvData?.includes("Student Name") || !integrityJson.disclosure) {
      throw new Error("Integrity report missing CSV or mandatory disclosure");
    }

    console.log("=== ALL PHASE 4 BACKEND ASSESSMENTS & INTEGRITY CHECKS PASSED ===");
  } finally {
    // Cleanup test
    await fetch(`http://localhost:8001/api/tests/${testId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${teacherToken}` },
    });
    console.log("[Cleanup] Test deleted from DB.");
  }
}

runAssessmentLiveFlow().catch((err) => {
  console.error("Live test failed:", err);
  process.exit(1);
});
