import { Router } from "express";
import { z } from "zod";
import { prisma } from "../db";
import { requireAuth, requireTeacher, AuthRequest } from "../middleware/auth";

const router = Router();

router.post("/", requireAuth, requireTeacher, async (req: AuthRequest, res) => {
  try {
    const body = z.object({ name: z.string().min(1), branch: z.string().min(1), semester: z.coerce.number().int().min(1).max(8) }).parse(req.body);
    const klass = await prisma.class.create({ data: { ...body, createdByTeacherId: req.user!.id } });
    res.status(201).json({ class: klass });
  } catch (err: any) { res.status(400).json({ error: err.message }); }
});

router.get("/", requireAuth, requireTeacher, async (req: AuthRequest, res) => {
  const classes = await prisma.class.findMany({
    where: { createdByTeacherId: req.user!.id },
    include: { _count: { select: { students: true, notes: true, assignments: true, tests: true } } },
  });
  res.json({ classes });
});

router.get("/students", requireAuth, requireTeacher, async (_req, res) => {
  const students = await prisma.user.findMany({
    where: { role: "STUDENT" },
    select: { id: true, name: true, usn: true, email: true, classId: true },
    orderBy: { name: "asc" },
  });
  res.json({ students });
});

router.get("/:id/students", requireAuth, requireTeacher, async (req: AuthRequest, res) => {
  const klass = await prisma.class.findFirst({ where: { id: req.params.id, createdByTeacherId: req.user!.id } });
  if (!klass) { res.status(404).json({ error: "Class not found" }); return; }
  const students = await prisma.user.findMany({
    where: { classId: klass.id, role: "STUDENT" },
    select: { id: true, name: true, usn: true, email: true },
    orderBy: { name: "asc" },
  });
  res.json({ students });
});

router.post("/:id/students", requireAuth, requireTeacher, async (req: AuthRequest, res) => {
  try {
    const { studentId } = z.object({ studentId: z.string().min(1) }).parse(req.body);
    const klass = await prisma.class.findFirst({ where: { id: req.params.id, createdByTeacherId: req.user!.id } });
    if (!klass) { res.status(404).json({ error: "Class not found" }); return; }
    const student = await prisma.user.findUnique({ where: { id: studentId } });
    if (!student || student.role !== "STUDENT") { res.status(400).json({ error: "Invalid student" }); return; }
    const updated = await prisma.user.update({ where: { id: studentId }, data: { classId: klass.id }, select: { id: true, name: true, usn: true, classId: true } });
    res.json({ student: updated });
  } catch (err: any) { res.status(400).json({ error: err.message }); }
});

router.delete("/:id/students/:studentId", requireAuth, requireTeacher, async (req: AuthRequest, res) => {
  const klass = await prisma.class.findFirst({ where: { id: req.params.id, createdByTeacherId: req.user!.id } });
  if (!klass) { res.status(404).json({ error: "Class not found" }); return; }
  const r = await prisma.user.updateMany({ where: { id: req.params.studentId, classId: klass.id }, data: { classId: null } });
  res.json({ removed: r.count });
});

export default router;
