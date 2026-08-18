import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { requireAuth, AuthRequest } from "../middleware/auth";

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
        include: {
          progress: { where: { studentId: req.user!.id } },
        },
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

export default router;