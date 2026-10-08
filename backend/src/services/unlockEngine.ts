import { prisma } from "../db";
import { emitToUser } from "../websocket";

export interface UnlockEventPayload {
  topicId: string;
  name: string;
}

/**
 * Marks sub-topic progress, increments mastery, and emits Socket.IO unlock events for dependents.
 */
export async function markTaskCompleteAndCheckUnlocks(
  userId: string,
  topicId: string
): Promise<UnlockEventPayload[]> {
  // 1. Mark next incomplete sub-topic as completed
  const subTopics = await prisma.subTopic.findMany({
    where: { topicId },
    orderBy: { orderIndex: "asc" },
  });

  if (subTopics.length > 0) {
    const completedProgress = await prisma.subTopicProgress.findMany({
      where: { studentId: userId, subTopicId: { in: subTopics.map((s) => s.id) }, completed: true },
      select: { subTopicId: true },
    });
    const completedSet = new Set(completedProgress.map((c) => c.subTopicId));
    const nextSub = subTopics.find((s) => !completedSet.has(s.id));

    if (nextSub) {
      await prisma.subTopicProgress.upsert({
        where: { studentId_subTopicId: { studentId: userId, subTopicId: nextSub.id } },
        update: { completed: true, completedAt: new Date() },
        create: { studentId: userId, subTopicId: nextSub.id, completed: true, completedAt: new Date() },
      });
    }
  }

  // 2. Update learning state mastery
  const state = await prisma.learningState.upsert({
    where: { userId_topicId: { userId, topicId } },
    update: {
      timesReviewed: { increment: 1 },
      lastReviewedAt: new Date(),
      mastery: { increment: 0.15 },
    },
    create: {
      userId,
      topicId,
      mastery: 0.50,
      stability: 1.5,
      timesReviewed: 1,
      lastReviewedAt: new Date(),
    },
  });

  // Clamp mastery to 1.0 if exceeded
  if (state.mastery > 1.0) {
    await prisma.learningState.update({
      where: { id: state.id },
      data: { mastery: 1.0 },
    });
  }

  // 3. Find dependent topics and check if all their prerequisites are now unlocked (mastery >= 0.70)
  const dependents = await prisma.topic.findMany({
    where: { prerequisites: { some: { id: topicId } } },
    include: { prerequisites: { select: { id: true } } },
  });

  const unlockedList: UnlockEventPayload[] = [];

  if (dependents.length > 0) {
    const allPrereqIds = [...new Set(dependents.flatMap((d) => d.prerequisites.map((p) => p.id)))];
    const prereqStates = await prisma.learningState.findMany({
      where: { userId, topicId: { in: allPrereqIds } },
    });
    const masteryMap = new Map(prereqStates.map((s) => [s.topicId, s.mastery]));
    masteryMap.set(topicId, Math.min(1.0, state.mastery));

    for (const dep of dependents) {
      const allPrereqsMet = dep.prerequisites.every((p) => (masteryMap.get(p.id) ?? 0.2) >= 0.70);
      if (allPrereqsMet) {
        unlockedList.push({ topicId: dep.id, name: dep.name });
        emitToUser(userId, "topic-unlocked", { topicId: dep.id, name: dep.name });
      }
    }
  }

  return unlockedList;
}
