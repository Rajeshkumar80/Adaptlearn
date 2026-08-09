import { Router } from "express";
import { PrismaClient, Prisma } from "@prisma/client";
import { z } from "zod";
import { requireAuth, AuthRequest } from "../middleware/auth";
import { validate } from "../middleware/validation";
import { allocateTime, SchedulerItemInput } from "../services/scheduler";

const prisma = new PrismaClient();
const router = Router();

const planSchema = z.object({
  availableHoursToday: z.number().min(0.25).max(16),
  subjectCode: z.string().optional(),
  topicIds: z.array(z.string()).optional(),
});

// §4.11 — planner accepts { availableHoursToday } and allocates time
// proportionally to priority across the student's active topics.
router.post("/", requireAuth, validate(planSchema), async (req: AuthRequest, res) => {
  const { availableHoursToday, subjectCode, topicIds } = req.body;

  const topics = await prisma.topic.findMany({
    where: {
      subjectCode: subjectCode || undefined,
      id: topicIds && topicIds.length > 0 ? { in: topicIds } : undefined,
    },
    include: {
      prerequisites: true,
      learningStates: { where: { userId: req.user!.id } },
    },
  });

  const items: SchedulerItemInput[] = topics.map((t) => {
    const state = t.learningStates[0];
    const unmasteredPrereqs = t.prerequisites.filter(
      (p) => !state || state.mastery < 0.7
    ).length;
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

  const schedule = allocateTime(items, availableHoursToday);

  await prisma.studyPlan.create({
    data: {
      userId: req.user!.id,
      date: new Date().toISOString().slice(0, 10),
      plan: schedule as unknown as Prisma.InputJsonValue,
    },
  });

  res.json({
    availableHoursToday,
    totalAllocatedMinutes: schedule.reduce((s, i) => s + i.allocatedMinutes, 0),
    schedule,
  });
});

export default router;
