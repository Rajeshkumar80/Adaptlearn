import puppeteer from "puppeteer-core";

async function verifyNotesUI() {
  console.log("=== T3.3 NOTES UI VERIFICATION ===");

  // 1. Authenticate Demo Student
  const studentLoginRes = await fetch("http://localhost:8001/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "demo.student@adaptlearn.dev", password: "Student@123" }),
  });
  const { token: studentToken } = await studentLoginRes.json();

  // 2. Authenticate Teacher
  const teacherLoginRes = await fetch("http://localhost:8001/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "teacher1@adaptlearn.dev", password: "Teacher@123" }),
  });
  const { token: teacherToken } = await teacherLoginRes.json();

  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });

    // --- STUDENT VIEW ---
    console.log("[1] Setting student token and loading /student/notes...");
    await page.goto("http://localhost:3000/login", { waitUntil: "networkidle0" });
    await page.evaluate((jwt) => localStorage.setItem("adaptlearn_token", jwt), studentToken);

    await page.goto("http://localhost:3000/student/notes", { waitUntil: "networkidle0" });
    await page.waitForFunction(() => !document.body.innerText.includes("Opening the ledger"), { timeout: 15000 });
    await new Promise((r) => setTimeout(r, 2500));

    await page.screenshot({ path: "d:\\Adaptlearn\\notes_student_view.png", fullPage: true });
    console.log("    Screenshot captured: d:\\Adaptlearn\\notes_student_view.png");

    // Open first Preview button if present
    const previewBtn = await page.$("button ::-p-text(Preview)");
    if (previewBtn) {
      console.log("    Clicking Preview button...");
      await previewBtn.click();
      await new Promise((r) => setTimeout(r, 2000));
      await page.screenshot({ path: "d:\\Adaptlearn\\notes_student_preview_modal.png", fullPage: true });
      console.log("    Screenshot captured: d:\\Adaptlearn\\notes_student_preview_modal.png");
    }

    // --- TEACHER VIEW ---
    console.log("[2] Setting teacher token and loading /teacher/notes...");
    await page.evaluate((jwt) => localStorage.setItem("adaptlearn_token", jwt), teacherToken);
    await page.goto("http://localhost:3000/teacher/notes", { waitUntil: "networkidle0" });
    await page.waitForFunction(() => !document.body.innerText.includes("Opening the ledger"), { timeout: 15000 });
    await new Promise((r) => setTimeout(r, 2500));

    await page.screenshot({ path: "d:\\Adaptlearn\\notes_teacher_view.png", fullPage: true });
    console.log("    Screenshot captured: d:\\Adaptlearn\\notes_teacher_view.png");

    console.log("=== UI VERIFICATION COMPLETED SUCCESSFULLY ===");
  } finally {
    await browser.close();
  }
}

verifyNotesUI().catch((err) => {
  console.error("UI Verification failed:", err);
  process.exit(1);
});
