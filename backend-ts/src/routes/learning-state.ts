import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { requireAuth, AuthRequest } from "../middleware/auth";
import { validate } from "../middleware/validation";
import { updateBkt } from "../services/bkt";
import { sm2Update, sm2Defaults } from "../services/sm2";
import { evaluateAchievements } from "../services/achievements";

const prisma = new PrismaClient();
const router = Router();

const updateSchema = z.object({
  topicId: z.string().min(1),
  quality: z.number().int().min(0).max(5).optional(), // SM2 quality
  correct: z.boolean().optional(), // BKT observation
  method: z.string().optional(),
});

// Record a study/quiz event for a topic.
// Server-side dependency gating: blocked with 403 if a prerequisite topic
// has mastery < 0.7 (master prompt §4.9).
router.post("/update", requireAuth, validate(updateSchema), async (req: AuthRequest, res) => {
  const { topicId, quality, correct, method } = req.body;

  const topic = await prisma.topic.findUnique({
    where: { id: topicId },
    include: { prerequisites: true },
  });
  if (!topic) {
    res.status(404).json({ error: "Topic not found" });
    return;
  }

  // Dependency gate
  const prereqIds = topic.prerequisites.map((p) => p.id);
  if (prereqIds.length > 0) {
    const states = await prisma.learningState.findMany({
      where: { userId: req.user!.id, topicId: { in: prereqIds } },
    });
    const blocked = prereqIds.filter(
      (pid) => !states.find((s) => s.topicId === pid) || (states.find((s) => s.topicId === pid)!.mastery < 0.7)
    );
    if (blocked.length > 0) {
      const blockedTopics = await prisma.topic.findMany({ where: { id: { in: blocked } } });
      res.status(403).json({
        error: "Prerequisite mastery not met",
        requiredMastery: 0.7,
        blockedPrerequisites: blockedTopics.map((t) => ({ id: t.id, name: t.name, mastery: states.find((s) => s.topicId === t.id)?.mastery ?? 0 })),
      });
      return;
    }
  }

  const state = await prisma.learningState.upsert({
    where: { userId_topicId: { userId: req.user!.id, topicId } },
    update: {},
    create: { userId: req.user!.id, topicId },
  });

  const obsCorrect = correct ?? (quality != null ? quality >= 3 : true);
  const bkt = updateBkt(
    { mastery: state.mastery, correctCount: state.correctCount, wrongCount: state.wrongCount, timesReviewed: state.timesReviewed },
    obsCorrect
  );
  const sm2 = sm2Update(
    {
      easiness: state.stability > 0 ? Math.min(2.5, Math.max(1.3, state.stability * 5)) : sm2Defaults.easiness,
      intervalDays: sm2Defaults.intervalDays,
      repetition: state.timesReviewed,
      lastReviewedAt: state.lastReviewedAt?.getTime() ?? null,
    },
    quality ?? (obsCorrect ? 4 : 1)
  );

  const updated = await prisma.learningState.update({
    where: { id: state.id },
    data: {
      mastery: bkt.mastery,
      stability: sm2.easiness / 2.5,
      correctCount: bkt.correctCount,
      wrongCount: bkt.wrongCount,
      timesReviewed: bkt.timesReviewed,
      lastReviewedAt: new Date(),
    },
  });

  await prisma.studySession.create({
    data: { userId: req.user!.id, topicId, method: method || "study", correct: obsCorrect },
  });

  const unlocked = await evaluateAchievements(prisma, req.user!.id);

  res.json({ state: updated, achievementsUnlocked: unlocked });
});

export default router;
