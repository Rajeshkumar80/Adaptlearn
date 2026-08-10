import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { requireAuth, AuthRequest } from "../middleware/auth";

const prisma = new PrismaClient();
const router = Router();

// Student profile + overview dashboard data
router.get("/profile", requireAuth, async (req: AuthRequest, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user!.id },
    include: {
      class: true,
      learningStates: { include: { topic: true } },
      studySessions: true,
      achievements: true,
    },
  });
  res.json({ user });
});

// Notes scoped to student's class (master prompt §4.12 / phase-2.4)
router.get("/notes", requireAuth, async (req: AuthRequest, res) => {
  const { subject, module } = req.query as { subject?: string; module?: string };
  const user = await prisma.user.findUnique({ where: { id: req.user!.id }, select: { classId: true } });
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }
  const notes = await prisma.notes.findMany({
    where: {
      // Notes with no classId are public (shared to all students);
      // class-scoped notes are visible only to that class.
      OR: [{ classId: null }, { classId: user.classId ?? "__none__" }],
      subjectCode: subject || undefined,
      moduleNumber: module ? Number(module) : undefined,
    },
    orderBy: { createdAt: "desc" },
  });
  res.json({ notes });
});

// Assignments visible to student (own class), with own submission status
router.get("/assignments", requireAuth, async (req: AuthRequest, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user!.id },
    select: { classId: true, submissions: true },
  });
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }
  const assignments = await prisma.assignment.findMany({
    where: { classId: user.classId ?? undefined },
    include: {
      submissions: { where: { studentId: req.user!.id } },
      createdBy: { select: { name: true } },
    },
    orderBy: { createdAt: "desc" },
  });
  res.json({ assignments });
});

// Assignment submit
router.post("/assignments/:id/submit", requireAuth, async (req: AuthRequest, res) => {
  const { fileUrl } = req.body;
  if (!fileUrl) {
    res.status(400).json({ error: "fileUrl required" });
    return;
  }
  const assignment = await prisma.assignment.findUnique({ where: { id: req.params.id } });
  if (!assignment) {
    res.status(404).json({ error: "Assignment not found" });
    return;
  }
  const submission = await prisma.assignmentSubmission.upsert({
    where: { assignmentId_studentId: { assignmentId: assignment.id, studentId: req.user!.id } },
    update: { fileUrl, submittedAt: new Date(), marks: null, feedback: null, gradedAt: null },
    create: { assignmentId: assignment.id, studentId: req.user!.id, fileUrl },
  });
  res.status(201).json({ submission });
});

export default router;
