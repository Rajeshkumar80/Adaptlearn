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
      description: z.string().optional(),
      dueDate: z.string().optional(),
      classId: z.string().optional(),
    }).parse(req.body);
    const assignment = await prisma.assignment.create({
      data: {
        subjectCode: body.subjectCode,
        title: body.title,
        description: body.description || "",
        dueDate: body.dueDate ? new Date(body.dueDate) : null,
        classId: body.classId || null,
        createdByTeacherId: req.user!.id,
      },
    });
    res.status(201).json({ assignment });
  } catch (err: any) { res.status(400).json({ error: err.message }); }
});

router.get("/", requireAuth, requireTeacher, async (req: AuthRequest, res) => {
  const assignments = await prisma.assignment.findMany({
    where: { createdByTeacherId: req.user!.id },
    include: { _count: { select: { submissions: true } } },
    orderBy: { createdAt: "desc" },
  });
  res.json({ assignments });
});

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
  if (!assignment) { res.status(404).json({ error: "Assignment not found" }); return; }

  const students = assignment.classId
    ? await prisma.user.findMany({ where: { classId: assignment.classId, role: "STUDENT" }, select: { id: true, name: true, usn: true } })
    : [];

  const byStudent = new Map(assignment.submissions.map(s => [s.studentId, s]));
  res.json({
    assignment: { id: assignment.id, title: assignment.title },
    submitted: assignment.submissions,
    notSubmitted: students.filter(st => !byStudent.has(st.id)).map(st => ({ studentId: st.id, name: st.name, usn: st.usn })),
  });
});

router.patch("/:id/submissions/:studentId", requireAuth, requireTeacher, async (req: AuthRequest, res) => {
  try {
    const { marks, feedback } = z.object({ marks: z.number().min(0).max(100), feedback: z.string().optional() }).parse(req.body);
    const sub = await prisma.assignmentSubmission.findFirst({
      where: { assignmentId: req.params.id, studentId: req.params.studentId, assignment: { createdByTeacherId: req.user!.id } },
    });
    if (!sub) { res.status(404).json({ error: "Submission not found" }); return; }
    const updated = await prisma.assignmentSubmission.update({
      where: { id: sub.id },
      data: { marks, feedback: feedback || "", gradedAt: new Date() },
    });
    res.json({ submission: updated });
  } catch (err: any) { res.status(400).json({ error: err.message }); }
});

export default router;
