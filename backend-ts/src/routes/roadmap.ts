import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { requireAuth, AuthRequest } from "../middleware/auth";

const prisma = new PrismaClient();
const router = Router();

// Roadmap: topics per subject with locked/unlocked state based on
// prerequisite mastery >= 0.7 (mirrors the server-side gate in learning-state).
router.get("/:subjectCode", requireAuth, async (req: AuthRequest, res) => {
  const topics = await prisma.topic.findMany({
    where: { subjectCode: req.params.subjectCode },
    include: {
      prerequisites: { select: { id: true, name: true } },
      learningStates: { where: { userId: req.user!.id } },
    },
    orderBy: [{ moduleNumber: "asc" }, { order: "asc" }],
  });

  const allPrereqIds = [...new Set(topics.flatMap((t) => t.prerequisites.map((p) => p.id)))];
  const prereqStates = await prisma.learningState.findMany({
    where: { userId: req.user!.id, topicId: { in: allPrereqIds } },
    select: { topicId: true, mastery: true },
  });
  const masteryOf = new Map(prereqStates.map((s) => [s.topicId, s.mastery]));

  const road = topics.map((t) => {
    const state = t.learningStates[0];
    const prereqInfo = t.prerequisites.map((p) => ({ id: p.id, name: p.name, mastery: masteryOf.get(p.id) ?? 0 }));
    const lockedPrereqs = prereqInfo.filter((p) => p.mastery < 0.7).map((p) => p.name);
    return {
      id: t.id,
      name: t.name,
      subjectCode: t.subjectCode,
      moduleNumber: t.moduleNumber,
      order: t.order,
      pyqImportance: t.pyqImportance,
      mastery: state?.mastery ?? 0,
      prerequisites: prereqInfo,
      locked: lockedPrereqs.length > 0,
      lockedBy: lockedPrereqs,
    };
  });

  res.json({ subjectCode: req.params.subjectCode, roadmap: road });
});

export default router;
