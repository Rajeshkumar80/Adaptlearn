import request from "supertest";
import { PrismaClient } from "@prisma/client";
import { createApp } from "../index";
import bcrypt from "bcryptjs";

// Mock Gemini: first /ai/ask call returns the answer, second returns quiz JSON,
// quiz-grade returns grading JSON.
jest.mock("../services/gemini", () => ({
  geminiGenerate: jest.fn(async (prompt: string) => {
    if (prompt.includes("state tracing")) {
      return JSON.stringify({
        questions: [
          { kind: "mcq", question: "Which phase follows Design in the Waterfall model?", options: ["Implementation", "Testing", "Deployment", "Maintenance"], correctIndex: 0 },
          { kind: "short", question: "Why must each Waterfall phase complete before the next?", modelAnswer: "Each phase's output feeds the next phase." },
          { kind: "mcq", question: "Waterfall is best for requirements that are:", options: ["Stable", "Volatile", "Ambiguous", "Unknown"], correctIndex: 0 },
          { kind: "short", question: "Name one Waterfall phase.", modelAnswer: "Requirements, Design, Implementation, Testing or Deployment." },
          { kind: "mcq", question: "The Waterfall model is also called:", options: ["Sequential", "Spiral", "Iterative", "Incremental"], correctIndex: 0 },
        ],
      });
    }
    if (prompt.includes("Grade this student")) {
      return JSON.stringify({ correct: true, feedback: "Covers the core concept well." });
    }
    return "The Waterfall model is a sequential software development model with five phases: Requirements, Design, Implementation, Testing, Deployment. Each phase must complete before the next begins.";
  }),
}));

const prisma = new PrismaClient();
const app = createApp();

let studentToken: string;
let topicId: string;

beforeAll(async () => {
  const email = `test.quiz.${Date.now()}@adaptlearn.dev`;
  const password = await bcrypt.hash("TestPass@123", 10);
  const student = await prisma.user.create({
    data: { email, password, name: "Quiz Test Student", role: "STUDENT", semester: 5 },
  });
  const login = await request(app).post("/api/auth/login").send({ email, password: "TestPass@123" });
  studentToken = login.body.token;

  const topic = await prisma.topic.findFirst({ where: { subjectCode: "BCS501" } });
  topicId = topic?.id ?? "";
});

afterAll(async () => {
  const users = await prisma.user.findMany({
    where: { email: { contains: `${Date.now()}` } },
    select: { id: true },
  });
  await prisma.user.deleteMany({ where: { id: { in: users.map((u) => u.id) } } });
  await prisma.$disconnect();
});

describe("ai state-tracing quiz", () => {
  test("POST /api/ai/ask returns a 5-question mixed quiz", async () => {
    const res = await request(app)
      .post("/api/ai/ask")
      .set("Authorization", `Bearer ${studentToken}`)
      .send({ question: "Explain the Waterfall model", subjectCode: "BCS501" });

    expect(res.status).toBe(200);
    expect(res.body.answer).toContain("sequential");
    expect(res.body.followUpQuiz.questions).toHaveLength(5);
    const kinds = res.body.followUpQuiz.questions.map((q: any) => q.kind);
    expect(kinds.filter((k: string) => k === "mcq").length).toBeGreaterThanOrEqual(2);
    expect(kinds.filter((k: string) => k === "short").length).toBeGreaterThanOrEqual(2);
    expect(res.body.retrievedChunks.length).toBeGreaterThan(0);
  });

  test("POST /api/ai/mcq-response feeds BKT", async () => {
    const res = await request(app)
      .post("/api/ai/mcq-response")
      .set("Authorization", `Bearer ${studentToken}`)
      .send({ topicId, correct: true });
    expect(res.status).toBe(200);
    expect(typeof res.body.delta).toBe("number");
    expect(res.body.masteryAfter).toBeGreaterThan(res.body.masteryBefore);
  });

  test("POST /api/ai/quiz-grade grades a short answer and feeds BKT", async () => {
    const res = await request(app)
      .post("/api/ai/quiz-grade")
      .set("Authorization", `Bearer ${studentToken}`)
      .send({
        topicId,
        question: "Why must each Waterfall phase complete before the next?",
        studentAnswer: "Each phase's output is the input to the next phase.",
        modelAnswer: "Each phase's output feeds the next phase.",
      });
    expect(res.status).toBe(200);
    expect(res.body.correct).toBe(true);
    expect(res.body.feedback).toContain("core concept");
    expect(typeof res.body.delta).toBe("number");
  });

  test("POST /api/ai/quiz-grade rejects empty answers", async () => {
    const res = await request(app)
      .post("/api/ai/quiz-grade")
      .set("Authorization", `Bearer ${studentToken}`)
      .send({ topicId, question: "", studentAnswer: "", modelAnswer: "" });
    expect(res.status).toBe(400);
  });
});