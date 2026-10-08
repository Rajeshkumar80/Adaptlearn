import { Router } from "express";
import { prisma } from "../db";
import { requireAuth, AuthRequest } from "../middleware/auth";
import { getStudentBehaviorMetrics, logActivityEvent } from "../services/behaviorEngine";
import { getTopicsDueForRecall, generateRecallQuiz } from "../services/recallQuizService";
import { updateStability } from "../services/forgettingModel";
import { selectBanditAction, updateBanditReward } from "../services/banditPolicy";

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

router.get("/recall/due", requireAuth, async (req: AuthRequest, res) => {
  try {
    const threshold = req.query.threshold ? Number(req.query.threshold) : 0.6;
    const due = await getTopicsDueForRecall(req.user!.id, threshold);
    res.json({ due });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/recall/:topicId/quiz", requireAuth, async (req: AuthRequest, res) => {
  try {
    const quiz = await generateRecallQuiz(req.params.topicId);
    res.json({ quiz });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/recall/submit", requireAuth, async (req: AuthRequest, res) => {
  try {
    const { topicId, correctAnswers, userAnswers, durationSec } = req.body;
    if (!topicId || !Array.isArray(correctAnswers) || !Array.isArray(userAnswers)) {
      res.status(400).json({ error: "topicId, correctAnswers array, userAnswers array required" });
      return;
    }

    let score = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
      if (userAnswers[i] === correctAnswers[i]) score++;
    }
    const outcomeScore = correctAnswers.length > 0 ? score / correctAnswers.length : 0;

    const topic = await prisma.topic.findUnique({ where: { id: topicId } });
    if (!topic) {
      res.status(404).json({ error: "Topic not found" });
      return;
    }

    const state = await prisma.learningState.upsert({
      where: { userId_topicId: { userId: req.user!.id, topicId } },
      update: {},
      create: { userId: req.user!.id, topicId },
    });

    const before = {
      mastery: state.mastery,
      stability: state.stability,
      retention: state.retention,
    };

    // BKT update
    const pLearn = 0.1, pGuess = 0.25, pSlip = 0.1;
    const isCorrect = outcomeScore >= 0.5;
    const p = state.mastery * (1 - pSlip) + (1 - state.mastery) * pGuess;
    let pKnown = isCorrect ? (state.mastery * (1 - pSlip)) / p : (state.mastery * pSlip) / (1 - p);
    pKnown = Math.min(1, Math.max(0, pKnown));
    const newMastery = pKnown + (1 - pKnown) * pLearn;

    // Stability update
    const stabilityCalc = updateStability({
      currentStability: state.stability,
      lastReviewedAt: state.lastReviewedAt,
      outcomeScore,
      difficulty: state.difficulty,
    });

    const updated = await prisma.learningState.update({
      where: { id: state.id },
      data: {
        mastery: newMastery,
        stability: stabilityCalc.newStability,
        retention: stabilityCalc.retentionAtRecall,
        forgettingRisk: Math.round((1 - stabilityCalc.retentionAtRecall) * 100) / 100,
        correctCount: state.correctCount + score,
        wrongCount: state.wrongCount + (correctAnswers.length - score),
        timesReviewed: state.timesReviewed + 1,
        timeSpentSec: state.timeSpentSec + (durationSec || 0),
        lastReviewedAt: new Date(),
      },
    });

    await prisma.studySession.create({
      data: {
        userId: req.user!.id,
        topicId,
        subjectCode: topic.subjectCode,
        moduleNumber: topic.moduleNumber,
        method: "recall_quiz",
        correct: isCorrect,
        durationMin: durationSec ? Math.round(durationSec / 60) : 1,
      },
    });

    await logActivityEvent({
      userId: req.user!.id,
      eventType: "QUIZ_ANSWERED",
      subjectCode: topic.subjectCode,
      topicId,
      durationSec,
      metadata: { score, total: correctAnswers.length, outcomeScore },
    });

    const after = {
      mastery: updated.mastery,
      stability: updated.stability,
      retention: updated.retention,
    };

    res.json({
      score,
      total: correctAnswers.length,
      outcomeScore,
      before,
      after,
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/recommendation/:topicId", requireAuth, async (req: AuthRequest, res) => {
  try {
    const state = await prisma.learningState.findUnique({
      where: { userId_topicId: { userId: req.user!.id, topicId: req.params.topicId } },
    });

    const context = {
      mastery: state?.mastery ?? 0.2,
      retention: state?.retention ?? 1.0,
      studyStreakDays: 1,
    };

    const decision = await selectBanditAction(req.user!.id, req.params.topicId, context);
    res.json({ decision });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/recommendation/reward", requireAuth, async (req: AuthRequest, res) => {
  try {
    const { topicId, action, reward } = req.body;
    if (!topicId || !action || typeof reward !== "number") {
      res.status(400).json({ error: "topicId, action, and numerical reward required" });
      return;
    }
    const result = await updateBanditReward(req.user!.id, topicId, action, reward);
    res.json({ result });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
