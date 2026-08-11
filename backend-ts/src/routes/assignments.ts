import { Router } from "express";
import { Prisma, PrismaClient } from "@prisma/client";
import { z } from "zod";
import { requireAuth, requireTeacher, AuthRequest } from "../middleware/auth";
import { validate } from "../middleware/validation";
import { evaluateAssignment } from "../services/assignment-eval";

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

// Teacher: full view for one assignment — the class roster split into
// submitted / not-submitted, each submission with its AI analysis + marks.
router.get("/:id/submissions", requireAuth, requireTeacher, async (req: AuthRequest, res) => {
  const assignment = await prisma.assignment.findFirst({
    where: { id: req.params.id, createdByTeacherId: req.user!.id },
    include: {
      submissions: {
        include: { student: { select: { id: true, name: true, usn: true } } },
        orderBy: { submittedAt: "asc" },
      },
    },
  });
  if (!assignment) {
    res.status(404).json({ error: "Assignment not found" });
    return;
  }

  const students = assignment.classId
    ? await prisma.user.findMany({
        where: { classId: assignment.classId, role: "STUDENT" },
        select: { id: true, name: true, usn: true },
        orderBy: { name: "asc" },
      })
    : await prisma.user.findMany({
        where: { role: "STUDENT" },
        select: { id: true, name: true, usn: true },
        orderBy: { name: "asc" },
        take: 500,
      });

  const byStudent = new Map(assignment.submissions.map((s) => [s.studentId, s]));
  const submitted = assignment.submissions.map((s) => ({
    id: s.id,
    studentId: s.studentId,
    student: s.student,
    content: s.content,
    fileUrls: s.fileUrls,
    submittedAt: s.submittedAt,
    marks: s.marks,
    feedback: s.feedback,
    gradedAt: s.gradedAt,
    aiAnalysis: s.aiAnalysis,
    aiEvaluatedAt: s.aiEvaluatedAt,
  }));
  const notSubmitted = students.filter((st) => !byStudent.has(st.id)).map((st) => ({
    studentId: st.id,
    name: st.name,
    usn: st.usn,
  }));

  res.json({ assignment: { id: assignment.id, title: assignment.title }, submitted, notSubmitted });
});

// Teacher: run (or re-run) the AI evaluation on one submission
router.post("/:id/submissions/:studentId/evaluate", requireAuth, requireTeacher, async (req: AuthRequest, res) => {
  const submission = await prisma.assignmentSubmission.findFirst({
    where: {
      assignmentId: req.params.id,
      studentId: req.params.studentId,
      assignment: { createdByTeacherId: req.user!.id },
    },
    include: { assignment: true },
  });
  if (!submission) {
    res.status(404).json({ error: "Submission not found" });
    return;
  }
  const photos = (submission.fileUrls as unknown as string[]) ?? [];
  const analysis = await evaluateAssignment({
    assignmentTitle: submission.assignment.title,
    description: submission.assignment.description,
    answerText: submission.content,
    photoCount: photos.length,
  });
  const updated = await prisma.assignmentSubmission.update({
    where: { id: submission.id },
    data: { aiAnalysis: analysis as unknown as Prisma.InputJsonValue, aiEvaluatedAt: new Date() },
  });
  res.json({ analysis, evaluatedAt: updated.aiEvaluatedAt });
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
