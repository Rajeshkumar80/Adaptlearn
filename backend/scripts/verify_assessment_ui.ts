import puppeteer from "puppeteer-core";

async function verifyAssessmentUI() {
  console.log("=== PHASE 4 ASSESSMENT & INTEGRITY UI VERIFICATION ===");

  // 1. Authenticate Teacher & Student
  const teacherRes = await fetch("http://localhost:8001/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "teacher1@adaptlearn.dev", password: "Teacher@123" }),
  });
  const { token: teacherToken } = (await teacherRes.json()) as any;

  const studentRes = await fetch("http://localhost:8001/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "demo.student@adaptlearn.dev", password: "Student@123" }),
  });
  const { token: studentToken } = (await studentRes.json()) as any;

  // Create demo test
  const testCreateRes = await fetch("http://localhost:8001/api/tests", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${teacherToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      subjectCode: "BCS701",
      title: "Module 1 AI Search & Heuristics Assessment",
      durationMin: 15,
      moduleNumber: 1,
      difficulty: "MEDIUM",
      attemptLimit: 3,
      integrityThreshold: 4,
      questions: [
        {
          text: "Which condition must a heuristic satisfy to be considered admissible in A* tree search?",
          questionType: "MCQ",
          options: [
            "It must never overestimate the cost to reach the goal",
            "It must always equal the exact cost",
            "It must overestimate by at least 10%",
            "It must be purely random",
          ],
          correctIndex: 0,
          marks: 2,
        },
        {
          text: "Explain the difference between A* search and Greedy Best-First Search.",
          questionType: "DESCRIPTIVE",
          marks: 5,
          rubric: "Compare evaluation functions: f(n) = g(n) + h(n) vs f(n) = h(n)",
          expectedKeywords: ["evaluation", "g(n)", "h(n)", "optimal", "cost"],
          modelAnswer: "A* evaluates f(n) = g(n) + h(n) considering both path cost and heuristic. Greedy only uses f(n) = h(n).",
        },
      ],
    }),
  });
  const { test } = (await testCreateRes.json()) as any;

  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });

    // Set student token in localStorage
    await page.goto("http://localhost:3000/login", { waitUntil: "domcontentloaded" });
    await page.evaluate((jwt) => localStorage.setItem("adaptlearn_token", jwt), studentToken);

    await page.goto("http://localhost:3000/student/tests", { waitUntil: "networkidle0" });
    await page.waitForFunction(() => !document.body.innerText.includes("Opening the ledger"), { timeout: 15000 });
    await new Promise((r) => setTimeout(r, 2000));

    // Click Start or Retake Test
    console.log("Waiting for Start/Retake Test button...");
    console.log("Page text snippet:", (await page.evaluate(() => document.body.innerText)).slice(0, 300));
    const startBtn =
      (await page.$("button ::-p-text(Start Test)")) ||
      (await page.$("button ::-p-text(Retake Test)"));
    console.log("Found startBtn:", !!startBtn);
    if (startBtn) {
      await startBtn.click();
      await page.waitForSelector("textarea", { timeout: 10000 });
      await new Promise((r) => setTimeout(r, 1000));

      // Select MCQ option A
      const optionA = await page.$("button ::-p-text(A.)");
      if (optionA) await optionA.click();

      // Type descriptive answer
      const textarea = await page.$("textarea");
      if (textarea) {
        await textarea.type("A* search uses evaluation function f(n) = g(n) + h(n) with admissible heuristic, whereas greedy only uses h(n).", { delay: 5 });
      }

      // Submit test
      const submitBtn = await page.$("button ::-p-text(Final Submit)");
      if (submitBtn) {
        await submitBtn.click();
        console.log("Submitted test, waiting for LLM evaluation...");
        await page.waitForFunction(() => document.body.innerText.includes("Return to Assessments"), { timeout: 45000 });
        await new Promise((r) => setTimeout(r, 1500));
        await page.screenshot({ path: "d:\\Adaptlearn\\assessment_student_result.png", fullPage: true });
        console.log("Screenshot captured: d:\\Adaptlearn\\assessment_student_result.png");
      }
    }

    console.log("=== VERIFICATION COMPLETED ===");
  } finally {
    await fetch(`http://localhost:8001/api/tests/${test.id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${teacherToken}` },
    });
    await browser.close();
  }
}

verifyAssessmentUI().catch((err) => {
  console.error("UI Verification failed:", err);
  process.exit(1);
});
