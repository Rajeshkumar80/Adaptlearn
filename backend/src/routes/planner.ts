import { Router } from "express";
import { z } from "zod";
import { prisma } from "../db";
import { requireAuth, AuthRequest } from "../middleware/auth";

const router = Router();

router.post("/", requireAuth, async (req: AuthRequest, res) => {
  try {
    const { subjectCode, moduleNumber, minutes, topicIds } = z.object({
      subjectCode: z.string().min(1),
      moduleNumber: z.number().int().min(1).optional(),
      minutes: z.number().min(10).max(600),
      topicIds: z.array(z.string()).optional(),
    }).parse(req.body);

    const subject = await prisma.subject.findUnique({ where: { code: subjectCode } });
    if (!subject) { res.status(404).json({ error: "Subject not found" }); return; }

    const topics = await prisma.topic.findMany({
      where: {
        subjectCode,
        moduleNumber: moduleNumber ?? undefined,
        id: topicIds && topicIds.length > 0 ? { in: topicIds } : undefined,
      },
      include: { learningStates: { where: { userId: req.user!.id } } },
    });

    if (topics.length === 0) { res.status(404).json({ error: "No topics found" }); return; }

    // Simple priority: topics with lowest mastery first
    const sorted = topics
      .map(t => ({ ...t, mastery: t.learningStates[0]?.mastery ?? 0.2 }))
      .sort((a, b) => a.mastery - b.mastery);

    const perTopic = Math.max(5, Math.round(minutes / sorted.length));
    const today = new Date().toISOString().slice(0, 10);
    let created = 0;

    for (let i = 0; i < sorted.length; i++) {
      const t = sorted[i];
      const exists = await prisma.studyTask.findFirst({ where: { userId: req.user!.id, topicId: t.id, date: today } });
      if (exists) continue;
      await prisma.studyTask.create({
        data: { userId: req.user!.id, subjectCode, subjectName: subject.name, moduleNumber: t.moduleNumber, topicId: t.id, topicName: t.name, minutes: perTopic, date: today, order: i },
      });
      created++;
    }

    res.status(201).json({ subjectCode, totalAllocatedMinutes: created * perTopic, created });
  } catch (err: any) { res.status(400).json({ error: err.message }); }
});

router.get("/", requireAuth, async (req: AuthRequest, res) => {
  const tasks = await prisma.studyTask.findMany({
    where: { userId: req.user!.id },
    orderBy: [{ date: "desc" }, { order: "asc" }],
    take: 200,
  });
  res.json({ tasks });
});

router.patch("/:id", requireAuth, async (req: AuthRequest, res) => {
  try {
    const { done } = z.object({ done: z.boolean() }).parse(req.body);
    const r = await prisma.studyTask.updateMany({ where: { id: req.params.id, userId: req.user!.id }, data: { done } });
    if (r.count === 0) { res.status(404).json({ error: "Task not found" }); return; }
    res.json({ ok: true, done });
  } catch (err: any) { res.status(400).json({ error: err.message }); }
});

router.delete("/:id", requireAuth, async (req: AuthRequest, res) => {
  const r = await prisma.studyTask.deleteMany({ where: { id: req.params.id, userId: req.user!.id } });
  res.json({ deleted: r.count });
});

export default router;
