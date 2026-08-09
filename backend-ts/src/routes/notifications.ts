import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { requireAuth, requireTeacher, AuthRequest } from "../middleware/auth";
import { validate } from "../middleware/validation";
import { emitToClass } from "../websocket";

const prisma = new PrismaClient();
const router = Router();

// Student: my notifications
router.get("/mine", requireAuth, async (req: AuthRequest, res) => {
  const notifications = await prisma.notification.findMany({
    where: { userId: req.user!.id },
    orderBy: { createdAt: "desc" },
    take: 50,
  });
  res.json({ notifications });
});

router.patch("/:id/read", requireAuth, async (req: AuthRequest, res) => {
  const notification = await prisma.notification.updateMany({
    where: { id: req.params.id, userId: req.user!.id },
    data: { read: true },
  });
  res.json({ updated: notification.count });
});

const sendSchema = z.object({
  classId: z.string().min(1),
  title: z.string().min(1),
  body: z.string().min(1),
});

// Teacher → class room notification (live via socket, persisted for later)
router.post("/send", requireAuth, requireTeacher, validate(sendSchema), async (req: AuthRequest, res) => {
  const { classId, title, body } = req.body;
  const klass = await prisma.class.findFirst({
    where: { id: classId, createdByTeacherId: req.user!.id },
  });
  if (!klass) {
    res.status(404).json({ error: "Class not found or not yours" });
    return;
  }
  const students = await prisma.user.findMany({ where: { classId }, select: { id: true } });
  await prisma.notification.createMany({
    data: students.map((s) => ({ userId: s.id, title, body, type: "class" })),
  });
  emitToClass(classId, "notification", { title, body, createdAt: new Date().toISOString() });
  res.status(201).json({ delivered: students.length });
});

export default router;
