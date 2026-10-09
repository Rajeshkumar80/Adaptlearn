import { prisma } from "../src/db";
import { createApp } from "../src/index";
import jwt from "jsonwebtoken";
import { config } from "../src/config";
import http from "http";

async function testGenerate() {
  const app = createApp();
  const server = http.createServer(app);
  await new Promise<void>((resolve) => server.listen(8002, () => resolve()));

  try {
    const student = await prisma.user.findFirst({ where: { role: "STUDENT" } });
    if (!student) {
      console.error("No student");
      return;
    }
    const token = jwt.sign(
      { id: student.id, email: student.email, role: student.role },
      config.jwtSecret,
      { expiresIn: "7d" }
    );

    console.log("Testing POST /api/study-plan/generate with BCS701...");
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 14);
    const targetDateStr = targetDate.toISOString().slice(0, 10);

    const res = await fetch("http://localhost:8002/api/study-plan/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        subjectCodes: ["BCS701"],
        targetDate: targetDateStr,
        isExamDate: true,
        hoursPerDay: 2.0,
        mode: "3-2-1",
        preferredSlot: "EVENING",
      }),
    });

    console.log("Status:", res.status);
    const body = await res.json();
    console.log("Body:", JSON.stringify(body, null, 2).slice(0, 500));

    // Test with invalid / empty topics
    console.log("Testing with subject with NO topics (e.g. BCS803)...");
    const res2 = await fetch("http://localhost:8002/api/study-plan/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        subjectCodes: ["BCS803"],
        targetDate: targetDateStr,
        isExamDate: true,
        hoursPerDay: 2.0,
        mode: "3-2-1",
        preferredSlot: "EVENING",
      }),
    });
    console.log("Status2:", res2.status);
    console.log("Body2:", await res2.json());

    // Test with past date
    console.log("Testing with past targetDate...");
    const res3 = await fetch("http://localhost:8002/api/study-plan/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        subjectCodes: ["BCS701"],
        targetDate: "2020-01-01",
        isExamDate: true,
        hoursPerDay: 2.0,
        mode: "3-2-1",
        preferredSlot: "EVENING",
      }),
    });
    console.log("Status3:", res3.status);
    console.log("Body3:", await res3.json());
  } finally {
    server.close();
  }
}

testGenerate().catch(console.error).finally(() => prisma.$disconnect());
