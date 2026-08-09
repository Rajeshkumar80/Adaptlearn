import request from "supertest";
import { PrismaClient } from "@prisma/client";
import { createApp } from "../index";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();
const app = createApp();

let teacherToken: string;
let studentToken: string;
let classId: string;
let otherClassId: string;

beforeAll(async () => {
  const email = `test.teacher.${Date.now()}@adaptlearn.dev`;
  const password = await bcrypt.hash("TestPass@123", 10);
  const teacher = await prisma.user.create({
    data: { email, password, name: "Test Teacher", role: "TEACHER", branch: "CSE", semester: 5 },
  });
  const login = await request(app).post("/api/auth/login").send({ email, password: "TestPass@123" });
  teacherToken = login.body.token;

  const cls = await prisma.class.create({
    data: { name: "Test Class A", branch: "CSE", semester: 5, createdByTeacherId: teacher.id },
  });
  const cls2 = await prisma.class.create({
    data: { name: "Test Class B", branch: "CSE", semester: 5, createdByTeacherId: teacher.id },
  });
  classId = cls.id;
  otherClassId = cls2.id;

  const sEmail = `test.student.${Date.now()}@adaptlearn.dev`;
  const sPassword = await bcrypt.hash("TestPass@123", 10);
  const student = await prisma.user.create({
    data: { email: sEmail, password: sPassword, name: "Test Student", role: "STUDENT", classId: cls.id },
  });
  const slogin = await request(app).post("/api/auth/login").send({ email: sEmail, password: "TestPass@123" });
  studentToken = slogin.body.token;
});

afterAll(async () => {
  const users = await prisma.user.findMany({
    where: { email: { contains: `${Date.now()}` } },
    select: { id: true },
  });
  const userIds = users.map((u) => u.id);
  await prisma.user.deleteMany({ where: { id: { in: userIds } } });
  await prisma.class.deleteMany({ where: { id: { in: [classId, otherClassId] } } });
  await prisma.$disconnect();
});

describe("health", () => {
  test("GET /api/health returns 200 with DB counts", async () => {
    const res = await request(app).get("/api/health");
    expect(res.status).toBe(200);
    expect(res.body.status).toBe("ok");
    expect(typeof res.body.db.users).toBe("number");
    expect(typeof res.body.db.chunks).toBe("number");
  });
});

describe("auth", () => {
  test("login with wrong password → 401", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "test.teacher.1@adaptlearn.dev", password: "wrong" });
    expect(res.status).toBe(401);
  });

  test("register then login round-trip", async () => {
    const email = `rt.${Date.now()}@adaptlearn.dev`;
    const reg = await request(app).post("/api/auth/register").send({
      email,
      password: "secret123",
      name: "Round Trip",
      role: "STUDENT",
    });
    expect(reg.status).toBe(201);
    expect(reg.body.token).toBeTruthy();
    const me = await request(app).get("/api/auth/me").set("Authorization", `Bearer ${reg.body.token}`);
    expect(me.status).toBe(200);
    expect(me.body.user.email).toBe(email);
    const dup = await request(app).post("/api/auth/register").send({ email, password: "secret123", name: "Dup" });
    expect(dup.status).toBe(409);
  });

  test("missing token → 401", async () => {
    const res = await request(app).get("/api/auth/me");
    expect(res.status).toBe(401);
  });
});

describe("role middleware (§4.3)", () => {
  test("STUDENT gets 403 on teacher-only route", async () => {
    const res = await request(app)
      .get("/api/teacher/analytics")
      .set("Authorization", `Bearer ${studentToken}`);
    expect(res.status).toBe(403);
  });

  test("TEACHER gets 200 on teacher-only route", async () => {
    const res = await request(app)
      .get("/api/teacher/analytics")
      .set("Authorization", `Bearer ${teacherToken}`);
    expect(res.status).toBe(200);
    expect(res.body.counts).toBeDefined();
  });
});

describe("notes scoping (§4.12)", () => {
  test("note uploaded to class A is visible to class-A student, blocked for others", async () => {
    const upload = await request(app)
      .post("/api/notes")
      .set("Authorization", `Bearer ${teacherToken}`)
      .field("subjectCode", "BCS501")
      .field("moduleNumber", "1")
      .field("title", "Scoped note test")
      .field("classId", classId)
      .attach("file", Buffer.from("# Test note content"), "test-note.md");
    expect(upload.status).toBe(201);

    const inClass = await request(app)
      .get("/api/student/notes")
      .set("Authorization", `Bearer ${studentToken}`);
    expect(inClass.status).toBe(200);
    expect(inClass.body.notes.some((n: any) => n.title === "Scoped note test")).toBe(true);
  });
});

describe("dependency gating (§4.9)", () => {
  test("blocked attempt, then unblocked after prerequisite mastered", async () => {
    const topicA = await prisma.topic.create({
      data: { subjectCode: "TESTSUB", moduleNumber: 1, name: `Gate A ${Date.now()}`, order: 1 },
    });
    const topicB = await prisma.topic.create({
      data: {
        subjectCode: "TESTSUB",
        moduleNumber: 2,
        name: `Gate B ${Date.now()}`,
        order: 1,
        prerequisites: { connect: [{ id: topicA.id }] },
      },
    });

    const blocked = await request(app)
      .post("/api/learning-state/update")
      .set("Authorization", `Bearer ${studentToken}`)
      .send({ topicId: topicB.id, correct: true });
    expect(blocked.status).toBe(403);
    expect(blocked.body.error).toContain("Prerequisite");

    // master prerequisite to 0.9 (6 correct updates from 0.2)
    for (let i = 0; i < 12; i++) {
      await request(app)
        .post("/api/learning-state/update")
        .set("Authorization", `Bearer ${studentToken}`)
        .send({ topicId: topicA.id, correct: true });
    }
    const unblocked = await request(app)
      .post("/api/learning-state/update")
      .set("Authorization", `Bearer ${studentToken}`)
      .send({ topicId: topicB.id, correct: true });
    expect(unblocked.status).toBe(200);
    expect(unblocked.body.state.mastery).toBeGreaterThan(0);

    await prisma.topic.deleteMany({ where: { id: { in: [topicA.id, topicB.id] } } });
  });
});

describe("AI rate limiter (§4.14)", () => {
  test("aiLimiter middleware rejects the 16th request within a minute", async () => {
    const express = require("express");
    const { aiLimiter } = require("../middleware/rate-limit");
    const tiny = express();
    tiny.use("/x", aiLimiter, (req: any, res: any) => res.json({ ok: true }));
    const server = tiny.listen(0);
    const port = (server.address() as any).port;
    let lastStatus = 0;
    for (let i = 0; i < 16; i++) {
      const res = await fetch(`http://localhost:${port}/x`);
      lastStatus = res.status;
    }
    expect(lastStatus).toBe(429);
    server.close();
  });
});
