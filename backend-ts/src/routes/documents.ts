import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { requireAuth, AuthRequest } from "../middleware/auth";

const prisma = new PrismaClient();
const router = Router();

// List ingested source documents (student-visible, so they know what content exists)
router.get("/", requireAuth, async (_req: AuthRequest, res) => {
  const documents = await prisma.document.findMany({
    include: { _count: { select: { chunks: true } } },
    orderBy: { createdAt: "desc" },
    take: 100,
  });
  res.json({ documents });
});

export default router;
