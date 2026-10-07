import { Router } from "express";
import { z } from "zod";
import { prisma } from "../db";
import { requireAuth, AuthRequest } from "../middleware/auth";

const router = Router();

router.get("/", requireAuth, async (req: AuthRequest, res) => {
  const entries = await prisma.journalEntry.findMany({
    where: { userId: req.user!.id },
    orderBy: { createdAt: "desc" },
  });
  res.json({ entries });
});

router.post("/", requireAuth, async (req: AuthRequest, res) => {
  try {
    const { content, mood } = z.object({ content: z.string().min(1), mood: z.string().optional() }).parse(req.body);
    const entry = await prisma.journalEntry.create({
      data: { userId: req.user!.id, content, mood: mood || null },
    });
    res.status(201).json({ entry });
  } catch (err: any) { res.status(400).json({ error: err.message }); }
});

router.delete("/:id", requireAuth, async (req: AuthRequest, res) => {
  const r = await prisma.journalEntry.deleteMany({ where: { id: req.params.id, userId: req.user!.id } });
  res.json({ deleted: r.count });
});

export default router;
