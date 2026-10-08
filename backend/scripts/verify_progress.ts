import puppeteer from "puppeteer-core";

async function verifyProgressPage() {
  console.log("1. Fetching auth token directly from backend API...");
  const loginRes = await fetch("http://localhost:8001/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "demo.student@adaptlearn.dev", password: "Student@123" }),
  });

  const { token, user } = await loginRes.json();
  if (!token) throw new Error("Could not obtain auth token!");
  console.log(`   Logged in as: ${user.name} (${user.role})`);

  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
    defaultViewport: { width: 1280, height: 900 },
  });

  try {
    const page = await browser.newPage();

    console.log("2. Seeding localStorage with auth credentials on origin...");
    await page.goto("http://localhost:3000/login", { waitUntil: "domcontentloaded" });
    await page.evaluate((jwt) => {
      localStorage.setItem("adaptlearn_token", jwt);
    }, token);

    console.log("3. Navigating to /student/progress...");
    await page.goto("http://localhost:3000/student/progress", { waitUntil: "networkidle2" });
    await new Promise((r) => setTimeout(r, 2000));

    const bodyText = await page.evaluate(() => document.body.innerText);

    console.log("4. Verifying page content and checking for NaN...");
    const hasNaN = bodyText.includes("NaN%") || bodyText.includes("NaN");
    console.log(`   Contains NaN: ${hasNaN}`);

    if (hasNaN) {
      throw new Error("FAIL: Found 'NaN' in page body text!");
    }

    const screenshotPath = "d:\\Adaptlearn\\progress_verified.png";
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`   Screenshot successfully saved to: ${screenshotPath}`);

    const relevantLines = bodyText
      .split("\n")
      .map((s) => s.trim())
      .filter((l) => l.includes("retention") || l.includes("mastery") || l.includes("curve") || l.includes("Forgetting"))
      .slice(0, 6);
    console.log("5. Verified UI content snippets:", relevantLines);

    console.log("SUCCESS: T0.2 verified. No NaN% anywhere on the progress page!");
  } finally {
    await browser.close();
  }
}

verifyProgressPage().catch((err) => {
  console.error("Verification error:", err);
  process.exit(1);
});
