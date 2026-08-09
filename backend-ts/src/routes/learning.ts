import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { requireAuth, AuthRequest } from "../middleware/auth";
import { forgettingCurve } from "../services/sm2";

const prisma = new PrismaClient();
const router = Router();

// Mastery graph: per-topic learning state with forgetting curve values
router.get("/mastery/graph", requireAuth, async (req: AuthRequest, res) => {
  const states = await prisma.learningState.findMany({
    where: { userId: req.user!.id },
    include: { topic: true },
  });
  const curve = states.map((s) => ({
    topicId: s.topicId,
    topicName: s.topic.name,
    subjectCode: s.topic.subjectCode,
    moduleNumber: s.topic.moduleNumber,
    mastery: s.mastery,
    stability: s.stability,
    lastReviewedAt: s.lastReviewedAt,
    retention: s.lastReviewedAt
      ? forgettingCurve(Math.max(1, s.stability), (Date.now() - s.lastReviewedAt.getTime()) / 86_400_000)
      : 0.5,
    correctCount: s.correctCount,
    wrongCount: s.wrongCount,
    timesReviewed: s.timesReviewed,
  }));
  res.json({ states: curve });
});

// Leaderboard by average mastery
router.get("/leaderboard", requireAuth, async (_req: AuthRequest, res) => {
  const users = await prisma.user.findMany({
    where: { role: "STUDENT" },
    include: { learningStates: true },
  });
  const board = users
    .map((u) => ({
      id: u.id,
      name: u.name,
      usn: u.usn,
      avgMastery:
        u.learningStates.length > 0
          ? Math.round((u.learningStates.reduce((s, ls) => s + ls.mastery, 0) / u.learningStates.length) * 1000) / 1000
          : 0,
      topicsMastered: u.learningStates.filter((ls) => ls.mastery >= 0.7).length,
    }))
    .sort((a, b) => b.avgMastery - a.avgMastery)
    .slice(0, 50);
  res.json({ leaderboard: board });
});

export default router;
