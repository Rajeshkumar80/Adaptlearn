import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { requireAuth, requireTeacher, AuthRequest } from "../middleware/auth";
import { validate } from "../middleware/validation";

const prisma = new PrismaClient();
const router = Router();

const classSchema = z.object({
  name: z.string().min(1),
  branch: z.string().min(1),
  semester: z.number().int().min(1).max(8),
});

// Teacher: create a class
router.post("/", requireAuth, requireTeacher, validate(classSchema), async (req: AuthRequest, res) => {
  const klass = await prisma.class.create({
    data: { ...req.body, createdByTeacherId: req.user!.id },
  });
  res.status(201).json({ class: klass });
});

// Teacher: list own classes
router.get("/", requireAuth, requireTeacher, async (req: AuthRequest, res) => {
  const classes = await prisma.class.findMany({
    where: { createdByTeacherId: req.user!.id },
    include: { _count: { select: { students: true, notes: true, assignments: true, tests: true } } },
  });
  res.json({ classes });
});

const addStudentSchema = z.object({
  studentId: z.string().min(1),
});

// Teacher: add student to class (assigns student.classId)
router.post("/:id/students", requireAuth, requireTeacher, validate(addStudentSchema), async (req: AuthRequest, res) => {
  const klass = await prisma.class.findFirst({ where: { id: req.params.id, createdByTeacherId: req.user!.id } });
  if (!klass) {
    res.status(404).json({ error: "Class not found or not yours" });
    return;
  }
  const student = await prisma.user.findUnique({ where: { id: req.body.studentId } });
  if (!student || student.role !== "STUDENT") {
    res.status(400).json({ error: "studentId must reference a STUDENT user" });
    return;
  }
  const updated = await prisma.user.update({
    where: { id: student.id },
    data: { classId: klass.id },
    select: { id: true, name: true, usn: true, classId: true },
  });
  res.json({ student: updated });
});

// Teacher: remove student from class
router.delete("/:id/students/:studentId", requireAuth, requireTeacher, async (req: AuthRequest, res) => {
  const klass = await prisma.class.findFirst({ where: { id: req.params.id, createdByTeacherId: req.user!.id } });
  if (!klass) {
    res.status(404).json({ error: "Class not found or not yours" });
    return;
  }
  const updated = await prisma.user.updateMany({
    where: { id: req.params.studentId, classId: klass.id },
    data: { classId: null },
  });
  res.json({ removed: updated.count });
});

export default router;
