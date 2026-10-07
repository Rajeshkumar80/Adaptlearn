import { Router } from "express";
import { z } from "zod";
import { prisma } from "../db";
import { requireAuth, requireTeacher, AuthRequest } from "../middleware/auth";
import { emitToClass } from "../websocket";

const router = Router();

router.get("/mine", requireAuth, async (req: AuthRequest, res) => {
  const notifications = await prisma.notification.findMany({
    where: { userId: req.user!.id },
    orderBy: { createdAt: "desc" },
    take: 50,
  });
  res.json({ notifications });
});

router.patch("/:id/read", requireAuth, async (req: AuthRequest, res) => {
  const r = await prisma.notification.updateMany({
    where: { id: req.params.id, userId: req.user!.id },
    data: { read: true },
  });
  res.json({ updated: r.count });
});

router.post("/send", requireAuth, requireTeacher, async (req: AuthRequest, res) => {
  try {
    const { classId, title, body } = z.object({
      classId: z.string().min(1),
      title: z.string().min(1),
      body: z.string().min(1),
    }).parse(req.body);

    const klass = await prisma.class.findFirst({ where: { id: classId, createdByTeacherId: req.user!.id } });
    if (!klass) { res.status(404).json({ error: "Class not found" }); return; }

    const students = await prisma.user.findMany({ where: { classId }, select: { id: true } });
    await prisma.notification.createMany({
      data: students.map(s => ({ userId: s.id, title, body, type: "class" })),
    });
    emitToClass(classId, "notification", { title, body, createdAt: new Date().toISOString() });
    res.status(201).json({ delivered: students.length });
  } catch (err: any) { res.status(400).json({ error: err.message }); }
});

export default router;
