import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { requireAuth } from "../middleware/auth";

const prisma = new PrismaClient();
const router = Router();

// Subject catalog + module/topic/CO data — powers subject selectors across the UI.
router.get("/subjects", requireAuth, async (_req, res) => {
  const subjects = await prisma.subject.findMany({
    include: {
      modules: { orderBy: { moduleNumber: "asc" } },
      courseOutcomes: { orderBy: { coNumber: "asc" } },
    },
    orderBy: [{ semester: "asc" }, { code: "asc" }],
  });
  res.json({ subjects });
});

router.get("/subjects/:code/topics", requireAuth, async (req, res) => {
  const topics = await prisma.topic.findMany({
    where: { subjectCode: req.params.code },
    orderBy: [{ moduleNumber: "asc" }, { order: "asc" }],
    include: { prerequisites: { select: { id: true, name: true } } },
  });
  res.json({ topics });
});

export default router;
