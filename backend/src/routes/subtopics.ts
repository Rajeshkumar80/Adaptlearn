import { Router } from "express";
import { prisma } from "../db";
import { requireAuth, AuthRequest } from "../middleware/auth";
import { emitToUser } from "../websocket";

const router = Router();

router.get("/:topicId/subtopics", requireAuth, async (req: AuthRequest, res) => {
  const topic = await prisma.topic.findUnique({
    where: { id: req.params.topicId },
    include: {
      learningStates: { where: { userId: req.user!.id } },
      subTopics: { orderBy: { orderIndex: "asc" }, include: { progress: { where: { studentId: req.user!.id } } } },
    },
  });
  if (!topic) { res.status(404).json({ error: "Topic not found" }); return; }
  res.json({
    topic: { id: topic.id, name: topic.name, moduleNumber: topic.moduleNumber, order: topic.order, pyqImportance: topic.pyqImportance, mastery: topic.learningStates[0]?.mastery ?? 0 },
    subTopics: topic.subTopics.map(s => ({ id: s.id, title: s.title, orderIndex: s.orderIndex, completed: s.progress[0]?.completed ?? false, completedAt: s.progress[0]?.completedAt ?? null })),
  });
});

router.post("/:id/toggle", requireAuth, async (req: AuthRequest, res) => {
  const subTopic = await prisma.subTopic.findUnique({
    where: { id: req.params.id },
    include: { topic: { include: { prerequisites: true } } },
  });
  if (!subTopic) { res.status(404).json({ error: "Sub-topic not found" }); return; }

  const userId = req.user!.id;
  const topic  = subTopic.topic;

  const current = await prisma.subTopicProgress.findUnique({
    where: { studentId_subTopicId: { studentId: userId, subTopicId: subTopic.id } },
  });
  const nowCompleted = !(current?.completed ?? false);
  let topicMastered = false;

  await prisma.$transaction(async (tx) => {
    await tx.subTopicProgress.upsert({
      where:  { studentId_subTopicId: { studentId: userId, subTopicId: subTopic.id } },
      update: { completed: nowCompleted, completedAt: nowCompleted ? new Date() : null },
      create: { studentId: userId, subTopicId: subTopic.id, completed: nowCompleted, completedAt: nowCompleted ? new Date() : null },
    });

    if (nowCompleted) {
      const total = await tx.subTopic.count({ where: { topicId: topic.id } });
      const done  = await tx.subTopicProgress.count({ where: { studentId: userId, subTopic: { topicId: topic.id }, completed: true } });
      if (done === total && total > 0) {
        await tx.learningState.upsert({
          where:  { userId_topicId: { userId, topicId: topic.id } },
          update: { mastery: 1.0, correctCount: { increment: 1 }, timesReviewed: { increment: 1 }, lastReviewedAt: new Date() },
          create: { userId, topicId: topic.id, mastery: 1.0, correctCount: 1, timesReviewed: 1, lastReviewedAt: new Date() },
        });
        await tx.studySession.create({ data: { userId, topicId: topic.id, method: "subtopic-checklist", correct: true } });
        topicMastered = true;
      }
    }
  });

  // emit unlock events for dependents
  const unlocked: { id: string; name: string }[] = [];
  if (topicMastered) {
    const dependents = await prisma.topic.findMany({
      where: { prerequisites: { some: { id: topic.id } } },
      include: { prerequisites: true },
    });
    const prereqIds = [...new Set(dependents.flatMap(d => d.prerequisites.map(p => p.id)))];
    const states = await prisma.learningState.findMany({ where: { userId, topicId: { in: prereqIds } } });
    const masteryOf = new Map(states.map(s => [s.topicId, s.mastery]));
    masteryOf.set(topic.id, 1.0);

    for (const dep of dependents) {
      const allMet = dep.prerequisites.every(p => (masteryOf.get(p.id) ?? 0) >= 0.7);
      if (allMet) {
        unlocked.push({ id: dep.id, name: dep.name });
        emitToUser(userId, "topic-unlocked", { topicId: dep.id, name: dep.name });
      }
    }
  }

  res.json({ completed: nowCompleted, topicMastered, unlocked });
});

export default router;
