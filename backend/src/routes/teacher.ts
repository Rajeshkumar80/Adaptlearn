import { Router } from "express";
import { prisma } from "../db";
import { requireAuth, requireTeacher, AuthRequest } from "../middleware/auth";

const router = Router();

router.get("/analytics", requireAuth, requireTeacher, async (req: AuthRequest, res) => {
  const classes = await prisma.class.findMany({ where: { createdByTeacherId: req.user!.id } });
  const classIds = classes.map(c => c.id);

  const [students, tests, submissions, testResults, cheatFlags, notes, assignments] = await Promise.all([
    prisma.user.count({ where: { role: "STUDENT", classId: { in: classIds } } }),
    prisma.test.count({ where: { createdByTeacherId: req.user!.id } }),
    prisma.assignmentSubmission.count({ where: { assignment: { classId: { in: classIds } } } }),
    prisma.testResult.findMany({ where: { test: { createdByTeacherId: req.user!.id } }, include: { student: { select: { name: true, usn: true } }, test: { select: { title: true } } } }),
    prisma.cheatFlag.count({ where: { test: { createdByTeacherId: req.user!.id } } }),
    prisma.notes.count({ where: { uploadedByTeacherId: req.user!.id } }),
    prisma.assignment.count({ where: { createdByTeacherId: req.user!.id } }),
  ]);

  const avgScore = testResults.length > 0
    ? Math.round(testResults.reduce((s, r) => s + r.score, 0) / testResults.length * 100) / 100
    : 0;

  res.json({
    classes: classes.map(c => ({ id: c.id, name: c.name, branch: c.branch, semester: c.semester })),
    counts: { students, tests, submissions, cheatFlags, notes, assignments },
    avgScore,
    recentResults: testResults.slice(-10).reverse(),
  });
});

router.get("/cheat-flags", requireAuth, requireTeacher, async (req: AuthRequest, res) => {
  const flags = await prisma.cheatFlag.findMany({
    where: { test: { createdByTeacherId: req.user!.id } },
    include: { student: { select: { name: true, usn: true } }, test: { select: { title: true } } },
    orderBy: { createdAt: "desc" },
  });
  res.json({ flags });
});

export default router;
