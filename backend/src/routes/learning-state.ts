import { Router } from "express";
import { z } from "zod";
import { prisma } from "../db";
import { requireAuth, AuthRequest } from "../middleware/auth";

const router = Router();

// BKT update helper
function updateBkt(mastery: number, correct: boolean): number {
  const pLearn = 0.1, pGuess = 0.25, pSlip = 0.1;
  const p = mastery * (1 - pSlip) + (1 - mastery) * pGuess;
  let pKnown = correct
    ? (mastery * (1 - pSlip)) / p
    : (mastery * pSlip) / (1 - p);
  pKnown = Math.min(1, Math.max(0, pKnown));
  return pKnown + (1 - pKnown) * pLearn;
}

router.post("/update", requireAuth, async (req: AuthRequest, res) => {
  try {
    const { topicId, correct, method } = z.object({
      topicId: z.string().min(1),
      correct: z.boolean().optional(),
      quality: z.number().int().min(0).max(5).optional(),
      method: z.string().optional(),
    }).parse(req.body);

    const topic = await prisma.topic.findUnique({ where: { id: topicId }, include: { prerequisites: true } });
    if (!topic) { res.status(404).json({ error: "Topic not found" }); return; }

    const obsCorrect = correct ?? true;

    const state = await prisma.learningState.upsert({
      where: { userId_topicId: { userId: req.user!.id, topicId } },
      update: {},
      create: { userId: req.user!.id, topicId },
    });

    const newMastery = updateBkt(state.mastery, obsCorrect);
    const updated = await prisma.learningState.update({
      where: { id: state.id },
      data: {
        mastery: newMastery,
        correctCount: state.correctCount + (obsCorrect ? 1 : 0),
        wrongCount: state.wrongCount + (obsCorrect ? 0 : 1),
        timesReviewed: state.timesReviewed + 1,
        lastReviewedAt: new Date(),
      },
    });

    await prisma.studySession.create({
      data: { userId: req.user!.id, topicId, method: method || "study", correct: obsCorrect },
    });

    res.json({ state: updated, achievementsUnlocked: [] });
  } catch (err: any) { res.status(400).json({ error: err.message }); }
});

export default router;
