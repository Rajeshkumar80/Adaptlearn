import puppeteer from "puppeteer-core";

async function verifyDashboardAtWidths() {
  console.log("1. Obtaining auth token for Demo Student...");
  const loginRes = await fetch("http://localhost:8001/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "demo.student@adaptlearn.dev", password: "Student@123" }),
  });

  const { token, user } = await loginRes.json();
  if (!token) throw new Error("Could not obtain auth token!");
  console.log(`   Logged in as: ${user.name}`);

  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  try {
    const page = await browser.newPage();

    // Seed localStorage on origin
    await page.goto("http://localhost:3000/login", { waitUntil: "domcontentloaded" });
    await page.evaluate((jwt) => {
      localStorage.setItem("adaptlearn_token", jwt);
    }, token);

    const widths = [
      { name: "desktop", width: 1280, height: 900, file: "d:\\Adaptlearn\\dashboard_desktop.png" },
      { name: "tablet", width: 768, height: 1024, file: "d:\\Adaptlearn\\dashboard_tablet.png" },
      { name: "mobile", width: 375, height: 812, file: "d:\\Adaptlearn\\dashboard_mobile.png" },
    ];

    for (const target of widths) {
      console.log(`2. Setting viewport to ${target.name} (${target.width}x${target.height})...`);
      await page.setViewport({ width: target.width, height: target.height });

      await page.goto("http://localhost:3000/student/dashboard", { waitUntil: "networkidle2" });
      await new Promise((r) => setTimeout(r, 1500));

      const bodyText = await page.evaluate(() => document.body.innerText);

      console.log(`3. Checking text integrity for ${target.name}...`);
      const hasNaN = bodyText.includes("NaN%") || bodyText.includes("NaN");
      const hasUndefined = bodyText.includes("undefined") || bodyText.includes("null%");

      console.log(`   ${target.name} - Contains NaN: ${hasNaN}, Contains undefined: ${hasUndefined}`);
      if (hasNaN || hasUndefined) {
        throw new Error(`FAIL: Found invalid text on ${target.name} viewport!`);
      }

      await page.screenshot({ path: target.file, fullPage: true });
      console.log(`   Screenshot saved: ${target.file}`);
    }

    console.log("SUCCESS: T1.5 verified across desktop (1280px), tablet (768px), and mobile (375px)!");
  } finally {
    await browser.close();
  }
}

verifyDashboardAtWidths().catch((err) => {
  console.error("Dashboard verification error:", err);
  process.exit(1);
});
