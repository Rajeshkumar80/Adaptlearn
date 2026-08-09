import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { requireAuth, requireTeacher, AuthRequest } from "../middleware/auth";
import { validate } from "../middleware/validation";

const prisma = new PrismaClient();
const router = Router();

const assignmentSchema = z.object({
  subjectCode: z.string().min(1),
  title: z.string().min(1),
  description: z.string().optional(),
  dueDate: z.string().optional(),
  classId: z.string().optional(),
});

// Teacher: create assignment
router.post("/", requireAuth, requireTeacher, validate(assignmentSchema), async (req: AuthRequest, res) => {
  const { subjectCode, title, description, dueDate, classId } = req.body;
  const assignment = await prisma.assignment.create({
    data: {
      subjectCode,
      title,
      description: description || "",
      dueDate: dueDate ? new Date(dueDate) : null,
      classId: classId || null,
      createdByTeacherId: req.user!.id,
    },
  });
  res.status(201).json({ assignment });
});

// Teacher: list own assignments
router.get("/", requireAuth, requireTeacher, async (req: AuthRequest, res) => {
  const assignments = await prisma.assignment.findMany({
    where: { createdByTeacherId: req.user!.id },
    include: { _count: { select: { submissions: true } } },
    orderBy: { createdAt: "desc" },
  });
  res.json({ assignments });
});

// Teacher: submissions for an assignment
router.get("/:id/submissions", requireAuth, requireTeacher, async (req: AuthRequest, res) => {
  const submissions = await prisma.assignmentSubmission.findMany({
    where: { assignmentId: req.params.id, assignment: { createdByTeacherId: req.user!.id } },
    include: { student: { select: { id: true, name: true, usn: true } } },
    orderBy: { submittedAt: "asc" },
  });
  res.json({ submissions });
});

const gradeSchema = z.object({
  marks: z.number().min(0).max(100),
  feedback: z.string().optional(),
});

// Teacher: grade a submission
router.patch("/:id/submissions/:studentId", requireAuth, requireTeacher, validate(gradeSchema), async (req: AuthRequest, res) => {
  const submission = await prisma.assignmentSubmission.findFirst({
    where: {
      assignmentId: req.params.id,
      studentId: req.params.studentId,
      assignment: { createdByTeacherId: req.user!.id },
    },
  });
  if (!submission) {
    res.status(404).json({ error: "Submission not found" });
    return;
  }
  const updated = await prisma.assignmentSubmission.update({
    where: { id: submission.id },
    data: { marks: req.body.marks, feedback: req.body.feedback || "", gradedAt: new Date() },
  });
  res.json({ submission: updated });
});

export default router;
