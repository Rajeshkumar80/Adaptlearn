import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { requireAuth, AuthRequest } from "../middleware/auth";
import { validate } from "../middleware/validation";
import { allocateTime, SchedulerItemInput } from "../services/scheduler";

const prisma = new PrismaClient();
const router = Router();

const planSchema = z.object({
  subjectCode: z.string().min(1),
  moduleNumber: z.number().int().min(1).optional(),
  minutes: z.number().min(10).max(600),
  topicIds: z.array(z.string()).optional(),
});

// §4.11 — user-driven scheduler: pick subject (+ module) and minutes; the plan
// distributes the minutes across that scope's topics (priority-weighted),
// persists StudyTask rows, and each task can be marked done from the list.
router.post("/", requireAuth, validate(planSchema), async (req: AuthRequest, res) => {
  const { subjectCode, moduleNumber, minutes, topicIds } = req.body;

  const subject = await prisma.subject.findUnique({ where: { code: subjectCode } });
  if (!subject) {
    res.status(404).json({ error: "Subject not found" });
    return;
  }

  const topics = await prisma.topic.findMany({
    where: {
      subjectCode,
      moduleNumber: moduleNumber ?? undefined,
      id: topicIds && topicIds.length > 0 ? { in: topicIds } : undefined,
    },
    include: {
      prerequisites: true,
      learningStates: { where: { userId: req.user!.id } },
    },
  });

  if (topics.length === 0) {
    res.status(404).json({ error: "No topics in this scope — check the subject/module" });
    return;
  }

  const items: SchedulerItemInput[] = topics.map((t) => {
    const state = t.learningStates[0];
    const unmasteredPrereqs = t.prerequisites.filter((p) => !state || state.mastery < 0.7).length;
    return {
      topicId: t.id,
      topicName: t.name,
      subjectCode: t.subjectCode,
      moduleNumber: t.moduleNumber,
      mastery: state?.mastery ?? 0.2,
      pyqImportance: t.pyqImportance,
      dependencyCount: unmasteredPrereqs,
      lastReviewedAt: state?.lastReviewedAt?.getTime() ?? null,
      intervalDays: state ? Math.max(1, Math.round(state.stability * 5)) : 1,
      estimatedMinutes: 30,
    };
  });

  const schedule = allocateTime(items, minutes / 60, 5);

  const today = new Date().toISOString().slice(0, 10);
  let created = 0;
  for (let i = 0; i < schedule.length; i++) {
    const item = schedule[i];
    const existing = await prisma.studyTask.findFirst({
      where: { userId: req.user!.id, topicId: item.topicId, date: today },
    });
    if (existing) continue; // already planned today — keep list clean
    await prisma.studyTask.create({
      data: {
        userId: req.user!.id,
        subjectCode: item.subjectCode,
        subjectName: subject.name,
        moduleNumber: item.moduleNumber,
        topicId: item.topicId,
        topicName: item.topicName,
        minutes: item.allocatedMinutes,
        date: today,
        order: i,
      },
    });
    created++;
  }

  res.status(201).json({
    subjectCode,
    moduleNumber: moduleNumber ?? null,
    totalAllocatedMinutes: schedule.reduce((s, i) => s + i.allocatedMinutes, 0),
    created,
    schedule,
  });
});

// Full list of the student's scheduled tasks, newest first.
router.get("/", requireAuth, async (req: AuthRequest, res) => {
  const tasks = await prisma.studyTask.findMany({
    where: { userId: req.user!.id },
    orderBy: [{ date: "desc" }, { order: "asc" }],
    take: 200,
  });
  res.json({ tasks });
});

const doneSchema = z.object({ done: z.boolean() });

// Mark a task done / not done.
router.patch("/:id", requireAuth, validate(doneSchema), async (req: AuthRequest, res) => {
  const result = await prisma.studyTask.updateMany({
    where: { id: req.params.id, userId: req.user!.id },
    data: { done: req.body.done },
  });
  if (result.count === 0) {
    res.status(404).json({ error: "Task not found" });
    return;
  }
  res.json({ ok: true, done: req.body.done });
});

router.delete("/:id", requireAuth, async (req: AuthRequest, res) => {
  const result = await prisma.studyTask.deleteMany({
    where: { id: req.params.id, userId: req.user!.id },
  });
  res.json({ deleted: result.count });
});

export default router;
