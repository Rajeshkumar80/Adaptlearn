import { prisma } from "../src/db";
import jwt from "jsonwebtoken";
import { config } from "../src/config";

async function benchmark() {
  const student = await prisma.user.findFirst({ where: { role: "STUDENT" } });
  if (!student) return;
  const token = jwt.sign(
    { id: student.id, email: student.email, role: student.role },
    config.jwtSecret,
    { expiresIn: "7d" }
  );

  const endpoints = [
    "/student/intelligence",
    "/notifications/mine",
    "/study-plan/active",
    "/study-plan/subjects",
    "/learning/mastery/graph",
    "/learning/behavior",
    "/notes?semester=7",
    "/student/assignments",
    "/tests/available",
  ];

  console.log("Benchmarking endpoints on http://localhost:8001/api...");
  for (const ep of endpoints) {
    const t0 = Date.now();
    try {
      const res = await fetch(`http://localhost:8001/api${ep}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const t1 = Date.now();
      console.log(`  ${ep.padEnd(28)} Status: ${res.status} | Latency: ${t1 - t0}ms`);
    } catch (e: any) {
      console.log(`  ${ep.padEnd(28)} Error: ${e.message}`);
    }
  }
}

benchmark().catch(console.error).finally(() => prisma.$disconnect());
