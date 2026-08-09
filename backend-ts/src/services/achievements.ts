import { PrismaClient } from "@prisma/client";

// Simple rule-based achievement unlocks, evaluated on learning events.

export async function evaluateAchievements(
  prisma: PrismaClient,
  userId: string
): Promise<string[]> {
  const unlocked: string[] = [];
  const states = await prisma.learningState.findMany({
    where: { userId },
    include: { topic: true },
  });
  const masteredCount = states.filter((s) => s.mastery >= 0.7).length;
  const totalReviewed = states.reduce((sum, s) => sum + s.timesReviewed, 0);

  const candidates: Array<{ type: string; name: string }> = [];
  if (totalReviewed >= 1) candidates.push({ type: "FIRST_STEP", name: "First Step" });
  if (totalReviewed >= 10) candidates.push({ type: "REVIEWER_10", name: "10 Reviews" });
  if (totalReviewed >= 50) candidates.push({ type: "REVIEWER_50", name: "50 Reviews" });
  if (masteredCount >= 3) candidates.push({ type: "MASTER_3", name: "Mastered 3 Topics" });
  if (masteredCount >= 10) candidates.push({ type: "MASTER_10", name: "Mastered 10 Topics" });

  for (const c of candidates) {
    const exists = await prisma.achievement.findFirst({
      where: { userId, type: c.type },
    });
    if (!exists) {
      await prisma.achievement.create({
        data: { userId, type: c.type, name: c.name },
      });
      unlocked.push(c.name);
    }
  }
  return unlocked;
}
