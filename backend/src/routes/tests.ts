import { Router } from "express";
import { z } from "zod";
import { prisma } from "../db";
import { requireAuth, requireTeacher, AuthRequest } from "../middleware/auth";

const router = Router();

router.post("/", requireAuth, requireTeacher, async (req: AuthRequest, res) => {
  try {
    const body = z.object({
      subjectCode: z.string().min(1),
      title: z.string().min(1),
      durationMin: z.number().int().min(1).default(30),
      classId: z.string().optional(),
      questions: z.array(z.object({
        text: z.string().min(1),
        options: z.array(z.string()).min(2),
        correctIndex: z.number().int().min(0),
        marks: z.number().int().min(1).default(2),
        topicId: z.string().optional(),
      })).min(1),
    }).parse(req.body);

    const test = await prisma.test.create({
      data: {
        subjectCode: body.subjectCode,
        title: body.title,
        durationMin: body.durationMin,
        classId: body.classId || null,
        createdByTeacherId: req.user!.id,
        isActive: true,
        questions: { create: body.questions.map(q => ({ text: q.text, options: q.options, correctIndex: q.correctIndex, marks: q.marks, topicId: q.topicId || null })) },
      },
      include: { questions: true },
    });
    res.status(201).json({ test });
  } catch (err: any) { res.status(400).json({ error: err.message }); }
});

router.get("/", requireAuth, requireTeacher, async (req: AuthRequest, res) => {
  const tests = await prisma.test.findMany({
    where: { createdByTeacherId: req.user!.id },
    include: { _count: { select: { questions: true, results: true, cheatFlags: true } } },
    orderBy: { createdAt: "desc" },
  });
  res.json({ tests });
});

router.delete("/:id", requireAuth, requireTeacher, async (req: AuthRequest, res) => {
  const r = await prisma.test.deleteMany({ where: { id: req.params.id, createdByTeacherId: req.user!.id } });
  if (r.count === 0) { res.status(404).json({ error: "Test not found" }); return; }
  res.json({ deleted: r.count });
});

router.get("/available", requireAuth, async (req: AuthRequest, res) => {
  const user = await prisma.user.findUnique({ where: { id: req.user!.id }, select: { classId: true } });
  const tests = await prisma.test.findMany({
    where: { isActive: true, classId: user?.classId ?? undefined },
    select: {
      id: true, subjectCode: true, title: true, durationMin: true,
      _count: { select: { questions: true } },
      results: { where: { studentId: req.user!.id }, select: { score: true, totalMarks: true, submittedAt: true } },
    },
  });
  res.json({ tests });
});

router.get("/:id/take", requireAuth, async (req, res) => {
  const test = await prisma.test.findFirst({
    where: { id: req.params.id, isActive: true },
    include: { questions: { select: { id: true, text: true, options: true, marks: true }, orderBy: { createdAt: "asc" } } },
  });
  if (!test) { res.status(404).json({ error: "Test not found" }); return; }
  res.json({ test });
});

router.post("/:id/submit", requireAuth, async (req: AuthRequest, res) => {
  try {
    const body = z.object({
      answers: z.array(z.object({ questionId: z.string(), selectedIndex: z.number().int().min(0) })),
      cheatEvents: z.array(z.object({ type: z.string(), severity: z.string().optional(), details: z.string().optional() })).optional(),
    }).parse(req.body);

    const test = await prisma.test.findFirst({ where: { id: req.params.id, isActive: true }, include: { questions: true } });
    if (!test) { res.status(404).json({ error: "Test not found" }); return; }

    const pastAttempts = await prisma.testResult.findMany({
      where: { testId: test.id, studentId: req.user!.id },
      orderBy: { attemptNumber: "asc" },
    });
    const attemptCount = pastAttempts.length;
    if (attemptCount >= (test.attemptLimit || 3)) {
      res.status(409).json({ error: `Maximum attempt limit reached (${test.attemptLimit || 3} attempts allowed)` });
      return;
    }
    const attemptNumber = attemptCount + 1;

    let score = 0;
    let totalMarks = test.questions.reduce((s, q) => s + q.marks, 0);
    const answers = body.answers.map(a => {
      const q = test.questions.find(qq => qq.id === a.questionId);
      if (!q) return { questionId: a.questionId, skipped: true, correct: false };
      const correct = a.selectedIndex === q.correctIndex;
      if (correct) score += q.marks;
      return { questionId: q.id, selectedIndex: a.selectedIndex, correct };
    });

    const result = await prisma.testResult.create({
      data: {
        testId: test.id,
        studentId: req.user!.id,
        attemptNumber,
        score,
        totalMarks,
        answers,
      },
    });

    for (const ev of body.cheatEvents || []) {
      await prisma.cheatFlag.create({
        data: {
          testId: test.id,
          studentId: req.user!.id,
          attemptNumber,
          type: ev.type,
          severity: ev.severity || "MEDIUM",
          details: ev.details || "",
        },
      });
    }

    res.json({ result });
  } catch (err: any) { res.status(400).json({ error: err.message }); }
});

export default router;
