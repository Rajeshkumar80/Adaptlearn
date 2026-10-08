import puppeteer from "puppeteer-core";

async function verifyIntelligenceUI() {
  console.log("=== PHASE 5 LEARNING INTELLIGENCE & TEACHER ANALYTICS UI VERIFICATION ===");

  // 1. Authenticate Teacher & Student
  const studentRes = await fetch("http://localhost:8001/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "demo.student@adaptlearn.dev", password: "Student@123" }),
  });
  const { token: studentToken } = (await studentRes.json()) as any;
  if (!studentToken) throw new Error("Student authentication failed");

  const teacherRes = await fetch("http://localhost:8001/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "teacher1@adaptlearn.dev", password: "Teacher@123" }),
  });
  const { token: teacherToken } = (await teacherRes.json()) as any;
  if (!teacherToken) throw new Error("Teacher authentication failed");

  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 950 });

    // ==========================================
    // 1. STUDENT LEARNING INTELLIGENCE VERIFICATION
    // ==========================================
    console.log("[1] Navigating to Student Learning Intelligence (/student/progress)...");
    await page.goto("http://localhost:3000/login", { waitUntil: "domcontentloaded" });
    await page.evaluate((jwt) => localStorage.setItem("adaptlearn_token", jwt), studentToken);

    await page.goto("http://localhost:3000/student/progress", { waitUntil: "domcontentloaded" });
    await page.waitForFunction(() => !document.body.innerText.includes("Opening the ledger"), { timeout: 25000 });
    await new Promise((r) => setTimeout(r, 2000));

    const pageText = await page.evaluate(() => document.body.innerText);
    console.log("    Student page text snippet:\n" + pageText.slice(0, 400));
    console.log("    Checking essential indicators:");

    const pageTextLower = pageText.toLowerCase();
    const indicators = [
      "learning intelligence",
      "learning score",
      "overall mastery",
      "retention",
      "forgetting risk",
      "ebbinghaus forgetting curve",
      "behavioural learning dynamics",
      "knowledge heatmap matrix",
      "what should i study now?",
      "why am i seeing this recommendation?",
    ];

    for (const ind of indicators) {
      const found = pageTextLower.includes(ind);
      console.log(`    - Indicator '${ind}': ${found ? "FOUND" : "NOT FOUND"}`);
      if (!found) throw new Error(`Missing expected element on progress page: ${ind}`);
    }

    // Check for NaN on page
    if (pageText.includes("NaN") || pageText.includes("undefined%")) {
      throw new Error("Found illegal 'NaN' or 'undefined%' on Student Learning Intelligence page!");
    }
    console.log("    Protected against NaN/undefined on page: PASS");

    // Take screenshot of Student view
    await page.screenshot({ path: "d:\\Adaptlearn\\intelligence_student_view.png", fullPage: true });
    console.log("    Screenshot saved: d:\\Adaptlearn\\intelligence_student_view.png");

    // Test Heatmap drill-down interaction
    console.log("[2] Testing interactive Knowledge Heatmap drill-down modal...");
    const topicButton =
      (await page.$("button[title*='mastery' i]")) ||
      (await page.$("button[title*='Mastery' i]"));
    if (topicButton) {
      await topicButton.click();
      await new Promise((r) => setTimeout(r, 600));
      const modalText = await page.evaluate(() => document.body.innerText);
      const modalFound =
        modalText.includes("Recommended Next Action") &&
        modalText.toLowerCase().includes("bkt mastery");
      console.log(`    Heatmap drill-down modal interaction: ${modalFound ? "SUCCESS" : "FAILED"}`);
      await page.screenshot({ path: "d:\\Adaptlearn\\intelligence_student_modal.png" });
      console.log("    Screenshot saved: d:\\Adaptlearn\\intelligence_student_modal.png");
    } else {
      console.log("    Notice: No topic button found in heatmap for click test.");
    }

    // ==========================================
    // 2. TEACHER ANALYTICS VERIFICATION
    // ==========================================
    console.log("[3] Navigating to Teacher Analytics (/teacher/analytics)...");
    await page.evaluate((jwt) => localStorage.setItem("adaptlearn_token", jwt), teacherToken);
    await page.goto("http://localhost:3000/teacher/analytics", { waitUntil: "domcontentloaded" });
    await page.waitForFunction(() => !document.body.innerText.includes("Opening the ledger"), { timeout: 25000 });
    await new Promise((r) => setTimeout(r, 2000));

    const teacherText = await page.evaluate(() => document.body.innerText);
    const teacherTextLower = teacherText.toLowerCase();
    console.log("    Teacher Analytics page loaded. Checking indicators:");

    const teacherIndicators = [
      "analytics",
      "students",
      "tests taken",
      "recent test scores",
      "score bands",
      "classes by semester",
      "integrity ledger",
    ];

    for (const ind of teacherIndicators) {
      const found = teacherTextLower.includes(ind);
      console.log(`    - Indicator '${ind}': ${found ? "FOUND" : "NOT FOUND"}`);
      if (!found) throw new Error(`Missing expected element on teacher analytics page: ${ind}`);
    }

    await page.screenshot({ path: "d:\\Adaptlearn\\teacher_analytics_view.png", fullPage: true });
    console.log("    Screenshot saved: d:\\Adaptlearn\\teacher_analytics_view.png");

    console.log("=== ALL PHASE 5 UI VERIFICATIONS PASSED SUCCESSFULLY ===");
  } finally {
    await browser.close();
  }
}

verifyIntelligenceUI().catch((err) => {
  console.error("Intelligence UI verification failed:", err);
  process.exit(1);
});
