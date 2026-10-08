import { Router } from "express";
import { z } from "zod";
import { prisma } from "../db";
import { requireAuth, requireTeacher, AuthRequest } from "../middleware/auth";
import { evaluateTestSubmission, syncTestResultsToLearningState } from "../services/evaluator";
import { recordIntegrityEvent, getTestIntegrityReport } from "../services/testIntegrityService";

const router = Router();

const questionCreateSchema = z.object({
  text: z.string().min(1),
  questionType: z.enum(["MCQ", "DESCRIPTIVE"]).default("MCQ"),
  options: z.array(z.string()).default([]),
  correctIndex: z.number().int().min(0).default(0),
  marks: z.number().int().min(1).default(2),
  topicId: z.string().optional(),
  rubric: z.any().optional(),
  expectedKeywords: z.array(z.string()).optional(),
  modelAnswer: z.string().optional(),
});

const testCreateSchema = z.object({
  subjectCode: z.string().min(1),
  title: z.string().min(1),
  durationMin: z.number().int().min(1).default(30),
  classId: z.string().optional(),
  moduleNumber: z.number().int().min(1).max(5).optional(),
  difficulty: z.enum(["EASY", "MEDIUM", "HARD"]).default("MEDIUM"),
  attemptLimit: z.number().int().min(1).max(10).default(3),
  integrityThreshold: z.number().int().min(1).max(10).default(4),
  questions: z.array(questionCreateSchema).min(1),
});

// POST /api/tests - Teacher creates test
router.post("/", requireAuth, requireTeacher, async (req: AuthRequest, res) => {
  try {
    const body = testCreateSchema.parse(req.body);
    const totalMarks = body.questions.reduce((sum, q) => sum + q.marks, 0);

    const test = await prisma.test.create({
      data: {
        subjectCode: body.subjectCode,
        title: body.title,
        durationMin: body.durationMin,
        moduleNumber: body.moduleNumber || null,
        difficulty: body.difficulty,
        attemptLimit: body.attemptLimit,
        integrityThreshold: body.integrityThreshold,
        totalMarks,
        classId: body.classId || null,
        createdByTeacherId: req.user!.id,
        isActive: true,
        questions: {
          create: body.questions.map((q) => ({
            text: q.text,
            questionType: q.questionType,
            options: q.options || [],
            correctIndex: q.correctIndex ?? 0,
            marks: q.marks,
            topicId: q.topicId || null,
            rubric: q.rubric || null,
            expectedKeywords: q.expectedKeywords || [],
            modelAnswer: q.modelAnswer || null,
          })),
        },
      },
      include: { questions: true },
    });

    res.status(201).json({ test });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/tests - Teacher lists created tests
router.get("/", requireAuth, requireTeacher, async (req: AuthRequest, res) => {
  const tests = await prisma.test.findMany({
    where: { createdByTeacherId: req.user!.id },
    include: {
      _count: { select: { questions: true, results: true, cheatFlags: true } },
    },
    orderBy: { createdAt: "desc" },
  });
  res.json({ tests });
});

// DELETE /api/tests/:id - Teacher deletes test
router.delete("/:id", requireAuth, requireTeacher, async (req: AuthRequest, res) => {
  const r = await prisma.test.deleteMany({
    where: { id: req.params.id, createdByTeacherId: req.user!.id },
  });
  if (r.count === 0) {
    res.status(404).json({ error: "Test not found" });
    return;
  }
  res.json({ deleted: r.count });
});

// GET /api/tests/available - Student lists accessible tests with attempt history
router.get("/available", requireAuth, async (req: AuthRequest, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user!.id },
    select: { classId: true, semester: true },
  });

  const tests = await prisma.test.findMany({
    where: {
      isActive: true,
      OR: [{ classId: null }, { classId: user?.classId ?? "__none__" }],
    },
    select: {
      id: true,
      subjectCode: true,
      title: true,
      durationMin: true,
      moduleNumber: true,
      difficulty: true,
      attemptLimit: true,
      totalMarks: true,
      _count: { select: { questions: true } },
      results: {
        where: { studentId: req.user!.id },
        select: {
          id: true,
          attemptNumber: true,
          score: true,
          totalMarks: true,
          status: true,
          submittedAt: true,
          integrityWarnings: true,
        },
        orderBy: { attemptNumber: "asc" },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  res.json({ tests });
});

// GET /api/tests/:id/take - Student begins test attempt (verifies attempt limit)
router.get("/:id/take", requireAuth, async (req: AuthRequest, res) => {
  const test = await prisma.test.findFirst({
    where: { id: req.params.id, isActive: true },
    include: {
      questions: {
        select: {
          id: true,
          text: true,
          questionType: true,
          options: true,
          marks: true,
          rubric: true,
          topicId: true,
        },
        orderBy: { createdAt: "asc" },
      },
    },
  });

  if (!test) {
    res.status(404).json({ error: "Test not found" });
    return;
  }

  // Check attempt limit
  const pastAttempts = await prisma.testResult.count({
    where: { testId: test.id, studentId: req.user!.id },
  });

  if (pastAttempts >= (test.attemptLimit || 3)) {
    res.status(409).json({
      error: `Maximum attempt limit reached (${test.attemptLimit || 3} attempts allowed)`,
      attemptsUsed: pastAttempts,
      attemptLimit: test.attemptLimit || 3,
    });
    return;
  }

  res.json({
    test,
    currentAttemptNumber: pastAttempts + 1,
    attemptLimit: test.attemptLimit || 3,
  });
});

// POST /api/tests/:id/submit - Student submits answers
router.post("/:id/submit", requireAuth, async (req: AuthRequest, res) => {
  try {
    const body = z.object({
      answers: z.array(
        z.object({
          questionId: z.string(),
          selectedIndex: z.number().int().optional(),
          textAnswer: z.string().optional(),
        })
      ),
      timeTakenSec: z.number().int().default(0),
      status: z.string().default("SUBMITTED"),
      cheatEvents: z.array(
        z.object({
          type: z.string(),
          severity: z.string().optional(),
          details: z.string().optional(),
        })
      ).optional(),
    }).parse(req.body);

    const test = await prisma.test.findFirst({
      where: { id: req.params.id, isActive: true },
      include: { questions: true },
    });
    if (!test) {
      res.status(404).json({ error: "Test not found" });
      return;
    }

    const pastAttempts = await prisma.testResult.findMany({
      where: { testId: test.id, studentId: req.user!.id },
    });
    if (pastAttempts.length >= (test.attemptLimit || 3)) {
      res.status(409).json({
        error: `Maximum attempt limit reached (${test.attemptLimit || 3} attempts allowed)`,
      });
      return;
    }
    const attemptNumber = pastAttempts.length + 1;

    // 1. Evaluate submission (auto-grade MCQ + LLM/deterministic descriptive)
    const evalResult = await evaluateTestSubmission(test.questions as any, body.answers);

    // 2. Persist test result
    const result = await prisma.testResult.create({
      data: {
        testId: test.id,
        studentId: req.user!.id,
        attemptNumber,
        score: evalResult.totalScore,
        totalMarks: evalResult.totalMarks,
        answers: evalResult.items as any,
        status: body.status,
        timeTakenSec: body.timeTakenSec,
        integrityWarnings: body.cheatEvents?.length || 0,
        evaluationDetails: evalResult.items as any,
      },
    });

    // 3. Persist cheat events
    for (const ev of body.cheatEvents || []) {
      await recordIntegrityEvent(test.id, req.user!.id, {
        ...ev,
        attemptNumber,
      });
    }

    // 4. AI Feedback Loop: sync outcomes to student topic mastery & stability
    await syncTestResultsToLearningState(req.user!.id, test.questions as any, evalResult.items);

    res.json({ result, evaluation: evalResult });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// POST /api/tests/:id/integrity-event - Live integrity logging with warning escalation
router.post("/:id/integrity-event", requireAuth, async (req: AuthRequest, res) => {
  try {
    const body = z.object({
      type: z.string().min(1),
      severity: z.string().optional(),
      details: z.string().optional(),
      attemptNumber: z.number().int().optional().default(1),
    }).parse(req.body);

    const result = await recordIntegrityEvent(req.params.id, req.user!.id, body);
    res.json(result);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// PATCH /api/tests/results/:resultId/grade - Teacher overrides evaluation or marks
router.patch("/results/:resultId/grade", requireAuth, requireTeacher, async (req: AuthRequest, res) => {
  try {
    const body = z.object({
      teacherMarksOverride: z.number().min(0).optional(),
      teacherFeedback: z.string().optional(),
      overrideScore: z.number().min(0).optional(),
    }).parse(req.body);

    const result = await prisma.testResult.findUnique({
      where: { id: req.params.resultId },
    });
    if (!result) {
      res.status(404).json({ error: "Result not found" });
      return;
    }

    const updated = await prisma.testResult.update({
      where: { id: result.id },
      data: {
        score: body.overrideScore !== undefined ? body.overrideScore : (body.teacherMarksOverride ?? result.score),
        teacherMarksOverride: body.teacherMarksOverride ?? result.teacherMarksOverride,
        teacherFeedback: body.teacherFeedback ?? result.teacherFeedback,
      },
    });

    res.json({ result: updated });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/tests/:id/results - Teacher reviews all submissions for a test
router.get("/:id/results", requireAuth, requireTeacher, async (req: AuthRequest, res) => {
  const results = await prisma.testResult.findMany({
    where: { testId: req.params.id },
    include: {
      student: { select: { id: true, name: true, usn: true, email: true } },
    },
    orderBy: { submittedAt: "desc" },
  });
  res.json({ results });
});

// GET /api/tests/:id/integrity-report - Teacher views aggregated integrity report with CSV data
router.get("/:id/integrity-report", requireAuth, requireTeacher, async (req: AuthRequest, res) => {
  try {
    const report = await getTestIntegrityReport(req.params.id);
    res.json(report);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
