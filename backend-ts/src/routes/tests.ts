import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { requireAuth, requireTeacher, AuthRequest } from "../middleware/auth";
import { validate } from "../middleware/validation";

const prisma = new PrismaClient();
const router = Router();

const testSchema = z.object({
  subjectCode: z.string().min(1),
  title: z.string().min(1),
  durationMin: z.number().int().min(1).default(30),
  classId: z.string().optional(),
  questions: z
    .array(
      z.object({
        text: z.string().min(1),
        options: z.array(z.string()).min(2),
        correctIndex: z.number().int().min(0),
        marks: z.number().int().min(1).default(2),
        topicId: z.string().optional(),
      })
    )
    .min(1),
});

// Teacher creates a test (with questions)
router.post("/", requireAuth, requireTeacher, validate(testSchema), async (req: AuthRequest, res) => {
  const { subjectCode, title, durationMin, classId, questions } = req.body;
  const test = await prisma.test.create({
    data: {
      subjectCode,
      title,
      durationMin,
      classId: classId || null,
      createdByTeacherId: req.user!.id,
      isActive: true,
      questions: {
        create: questions.map((q: any) => ({
          text: q.text,
          options: q.options,
          correctIndex: q.correctIndex,
          marks: q.marks,
          topicId: q.topicId || null,
        })),
      },
    },
    include: { questions: true },
  });
  res.status(201).json({ test });
});

// Teacher lists own tests
router.get("/", requireAuth, requireTeacher, async (req: AuthRequest, res) => {
  const tests = await prisma.test.findMany({
    where: { createdByTeacherId: req.user!.id },
    include: { _count: { select: { questions: true, results: true, cheatFlags: true } } },
    orderBy: { createdAt: "desc" },
  });
  res.json({ tests });
});

// Student: available active tests for their class
router.get("/available", requireAuth, async (req: AuthRequest, res) => {
  const user = await prisma.user.findUnique({ where: { id: req.user!.id }, select: { classId: true } });
  const tests = await prisma.test.findMany({
    where: { isActive: true, classId: user?.classId ?? undefined },
    select: {
      id: true,
      subjectCode: true,
      title: true,
      durationMin: true,
      _count: { select: { questions: true } },
      results: { where: { studentId: req.user!.id }, select: { score: true, totalMarks: true, submittedAt: true } },
    },
  });
  res.json({ tests });
});

// Student: fetch test questions (without answers)
router.get("/:id/take", requireAuth, async (req: AuthRequest, res) => {
  const test = await prisma.test.findFirst({
    where: { id: req.params.id, isActive: true },
    include: {
      questions: {
        select: { id: true, text: true, options: true, marks: true },
        orderBy: { createdAt: "asc" },
      },
    },
  });
  if (!test) {
    res.status(404).json({ error: "Test not found" });
    return;
  }
  res.json({ test });
});

const submitSchema = z.object({
  answers: z.array(z.object({ questionId: z.string(), selectedIndex: z.number().int().min(0) })),
  cheatEvents: z
    .array(z.object({ type: z.string(), severity: z.string().optional(), details: z.string().optional() }))
    .optional(),
});

// Student: submit test → auto-grade, record anti-cheat flags, feed BKT on MCQs
router.post("/:id/submit", requireAuth, validate(submitSchema), async (req: AuthRequest, res) => {
  const test = await prisma.test.findFirst({
    where: { id: req.params.id, isActive: true },
    include: { questions: true },
  });
  if (!test) {
    res.status(404).json({ error: "Test not found" });
    return;
  }
  const existing = await prisma.testResult.findUnique({
    where: { testId_studentId: { testId: test.id, studentId: req.user!.id } },
  });
  if (existing) {
    res.status(409).json({ error: "Already submitted this test" });
    return;
  }

  let score = 0;
  let totalMarks = 0;
  const answers = req.body.answers.map((a: any) => {
    const q = test.questions.find((qq) => qq.id === a.questionId);
    if (!q) return { questionId: a.questionId, skipped: true, correct: false };
    totalMarks += q.marks;
    const correct = a.selectedIndex === q.correctIndex;
    if (correct) score += q.marks;
    return { questionId: q.id, selectedIndex: a.selectedIndex, correct };
  });
  if (totalMarks === 0) totalMarks = test.questions.reduce((s, q) => s + q.marks, 0);

  const result = await prisma.testResult.create({
    data: {
      testId: test.id,
      studentId: req.user!.id,
      score,
      totalMarks,
      answers,
    },
  });

  // anti-cheat flags from client-reported events
  for (const ev of req.body.cheatEvents || []) {
    await prisma.cheatFlag.create({
      data: {
        testId: test.id,
        studentId: req.user!.id,
        type: ev.type,
        severity: ev.severity || "MEDIUM",
        details: ev.details || "",
      },
    });
  }

  // feed correct/wrong answers into BKT per question topic
  for (const a of answers) {
    if (typeof a.correct !== "boolean") continue;
    const q = test.questions.find((qq) => qq.id === a.questionId);
    if (!q?.topicId) continue;
    await prisma.studySession.create({
      data: { userId: req.user!.id, topicId: q.topicId, method: "test", correct: a.correct },
    });
  }

  res.json({ result });
});

export default router;
