import { Router } from "express";
import { prisma } from "../db";
import { requireAuth } from "../middleware/auth";

const router = Router();

router.get("/", requireAuth, async (_req, res) => {
  const documents = await prisma.document.findMany({
    include: { _count: { select: { chunks: true } } },
    orderBy: { createdAt: "desc" },
    take: 100,
  });
  res.json({ documents });
});

export default router;
