import { Router } from "express";
import { prisma } from "../db";
import { requireAuth, AuthRequest } from "../middleware/auth";
import { getStudentBehaviorMetrics, logActivityEvent } from "../services/behaviorEngine";

const router = Router();

router.get("/mastery/graph", requireAuth, async (req: AuthRequest, res) => {
  const states = await prisma.learningState.findMany({
    where: { userId: req.user!.id },
    include: { topic: true },
  });
  res.json({
    states: states.map(s => {
      let retention = s.retention ?? 1.0;
      if (s.lastReviewedAt) {
        const daysSince = Math.max(0, (Date.now() - new Date(s.lastReviewedAt).getTime()) / (1000 * 3600 * 24));
        const stab = Math.max(0.1, s.stability || 0.5);
        retention = Math.max(0.05, Math.min(1.0, Math.exp(-daysSince / (stab * 10))));
      }
      return {
        topicId: s.topicId,
        topicName: s.topic.name,
        subjectCode: s.topic.subjectCode,
        moduleNumber: s.topic.moduleNumber,
        mastery: Number.isFinite(s.mastery) ? s.mastery : 0.2,
        stability: Number.isFinite(s.stability) ? s.stability : 0.5,
        retention: Math.round(retention * 100) / 100,
        forgettingRisk: Math.round((1 - retention) * 100) / 100,
        lastReviewedAt: s.lastReviewedAt,
        correctCount: s.correctCount,
        wrongCount: s.wrongCount,
        timesReviewed: s.timesReviewed,
      };
    }),
  });
});

router.get("/leaderboard", requireAuth, async (_req, res) => {
  const users = await prisma.user.findMany({
    where: { role: "STUDENT" },
    include: { learningStates: true },
  });
  const board = users
    .map(u => ({
      id: u.id, name: u.name, usn: u.usn,
      avgMastery: u.learningStates.length > 0
        ? Math.round(u.learningStates.reduce((s, ls) => s + ls.mastery, 0) / u.learningStates.length * 1000) / 1000
        : 0,
      topicsMastered: u.learningStates.filter(ls => ls.mastery >= 0.7).length,
    }))
    .sort((a, b) => b.avgMastery - a.avgMastery)
    .slice(0, 50);
  res.json({ leaderboard: board });
});

router.get("/behavior", requireAuth, async (req: AuthRequest, res) => {
  try {
    const metrics = await getStudentBehaviorMetrics(req.user!.id);
    res.json({ metrics });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/activity", requireAuth, async (req: AuthRequest, res) => {
  try {
    const { eventType, subjectCode, topicId, durationSec, metadata } = req.body;
    if (!eventType || typeof eventType !== "string") {
      res.status(400).json({ error: "eventType string required" });
      return;
    }
    const logged = await logActivityEvent({
      userId: req.user!.id,
      eventType,
      subjectCode,
      topicId,
      durationSec,
      metadata,
    });
    res.status(201).json({ activity: logged });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
