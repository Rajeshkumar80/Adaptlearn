import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { requireAuth, AuthRequest } from "../middleware/auth";
import { emitToUser } from "../websocket";

const prisma = new PrismaClient();
const router = Router();

// Checklist for one topic: its syllabus-sourced sub-topics plus the student's
// own progress on each. Data-driven — no subject/topic names referenced.
router.get("/:topicId/subtopics", requireAuth, async (req: AuthRequest, res) => {
  const topic = await prisma.topic.findUnique({
    where: { id: req.params.topicId },
    include: {
      learningStates: { where: { userId: req.user!.id } },
      subTopics: {
        orderBy: { orderIndex: "asc" },
        include: { progress: { where: { studentId: req.user!.id } } },
      },
    },
  });
  if (!topic) return res.status(404).json({ error: "Topic not found" });

  res.json({
    topic: {
      id: topic.id,
      name: topic.name,
      moduleNumber: topic.moduleNumber,
      order: topic.order,
      pyqImportance: topic.pyqImportance,
      mastery: topic.learningStates[0]?.mastery ?? 0,
    },
    subTopics: topic.subTopics.map((s) => ({
      id: s.id,
      title: s.title,
      orderIndex: s.orderIndex,
      completed: s.progress[0]?.completed ?? false,
      completedAt: s.progress[0]?.completedAt ?? null,
    })),
  });
});

// Toggle one sub-topic's completion for the student.
// When the last sub-topic of a topic is completed, the parent topic is
// auto-completed: mastery is set to 1.0 on the student's existing
// LearningState row (the same mechanism that drives the 0.7 prerequisite
// gate) and dependents whose prerequisites are now all met unlock, with a
// live "topic-unlocked" socket event for that student.
//
// DESIGN DECISION (explicit): un-toggling a sub-topic does NOT auto-revert
// the parent's mastery — forgetting is governed by BKT/SM-2 decay through
// the normal learning-state flow, not by checklist toggles.
router.post("/:id/toggle", requireAuth, async (req: AuthRequest, res) => {
  const subTopic = await prisma.subTopic.findUnique({
    where: { id: req.params.id },
    include: { topic: { include: { prerequisites: true } } },
  });
  if (!subTopic) return res.status(404).json({ error: "Sub-topic not found" });

  const userId = req.user!.id;
  const topic = subTopic.topic;

  // Same prerequisite gate as POST /learning-state/update (mastery >= 0.7)
  const prereqIds = topic.prerequisites.map((p) => p.id);
  if (prereqIds.length > 0) {
    const states = await prisma.learningState.findMany({
      where: { userId, topicId: { in: prereqIds } },
    });
    const blocked = prereqIds.filter(
      (pid) => !states.find((s) => s.topicId === pid) || states.find((s) => s.topicId === pid)!.mastery < 0.7
    );
    if (blocked.length > 0) {
      const blockedTopics = await prisma.topic.findMany({ where: { id: { in: blocked } } });
      return res.status(403).json({
        error: "Prerequisite mastery not met",
        requiredMastery: 0.7,
        blockedPrerequisites: blockedTopics.map((t) => ({
          id: t.id,
          name: t.name,
          mastery: states.find((s) => s.topicId === t.id)?.mastery ?? 0,
        })),
      });
    }
  }

  const current = await prisma.subTopicProgress.findUnique({
    where: { studentId_subTopicId: { studentId: userId, subTopicId: subTopic.id } },
  });
  const nowCompleted = !(current?.completed ?? false);

  // Snapshot of prereq mastery for dependents before the mutation, so we can
  // tell which dependent topics actually transition locked -> unlocked.
  const dependents = await prisma.topic.findMany({
    where: { prerequisites: { some: { id: topic.id } } },
    include: { prerequisites: true },
  });
  const allPrereqIds = [...new Set(dependents.flatMap((d) => d.prerequisites.map((p) => p.id)))];
  const prereqStates = await prisma.learningState.findMany({ where: { userId, topicId: { in: allPrereqIds } } });
  const masteryOf = new Map(prereqStates.map((s) => [s.topicId, s.mastery]));
  const wasLocked = (d: (typeof dependents)[number]) =>
    d.prerequisites.some((p) => (masteryOf.get(p.id) ?? 0) < 0.7);

  let topicMastered = false;

  await prisma.$transaction(async (tx) => {
    await tx.subTopicProgress.upsert({
      where: { studentId_subTopicId: { studentId: userId, subTopicId: subTopic.id } },
      update: { completed: nowCompleted, completedAt: nowCompleted ? new Date() : null },
      create: { studentId: userId, subTopicId: subTopic.id, completed: nowCompleted, completedAt: nowCompleted ? new Date() : null },
    });

    if (nowCompleted) {
      const total = await tx.subTopic.count({ where: { topicId: topic.id } });
      const done = await tx.subTopicProgress.count({
        where: { studentId: userId, subTopic: { topicId: topic.id }, completed: true },
      });
      if (done === total && total > 0) {
        // Auto-complete the parent: mastery -> 1.0 on the existing
        // LearningState row (keeps the 0.7 gate mechanism intact).
        await tx.learningState.upsert({
          where: { userId_topicId: { userId, topicId: topic.id } },
          update: {
            mastery: 1.0,
            correctCount: { increment: 1 },
            timesReviewed: { increment: 1 },
            lastReviewedAt: new Date(),
          },
          create: { userId, topicId: topic.id, mastery: 1.0, correctCount: 1, timesReviewed: 1, lastReviewedAt: new Date() },
        });
        await tx.studySession.create({
          data: { userId, topicId: topic.id, method: "subtopic-checklist", correct: true },
        });
        topicMastered = true;
      }
    }
  });

  const unlocked = topicMastered
    ? dependents.filter((d) => {
        // mastery map + the topic we just mastered (set to 1.0 in the tx)
        const eff = new Map(masteryOf);
        eff.set(topic.id, 1.0);
        return wasLocked(d) && d.prerequisites.every((pr) => (eff.get(pr.id) ?? 0) >= 0.7);
      })
    : [];
  for (const d of unlocked) {
    emitToUser(userId, "topic-unlocked", { topicId: d.id, name: d.name });
  }

  res.json({
    completed: nowCompleted,
    topicMastered,
    unlocked: unlocked.map((d) => ({ id: d.id, name: d.name })),
  });
});

export default router;