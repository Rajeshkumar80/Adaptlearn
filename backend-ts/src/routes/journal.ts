import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { requireAuth, AuthRequest } from "../middleware/auth";
import { validate } from "../middleware/validation";

const prisma = new PrismaClient();
const router = Router();

const entrySchema = z.object({
  content: z.string().min(1),
  mood: z.string().optional(),
});

router.get("/", requireAuth, async (req: AuthRequest, res) => {
  const entries = await prisma.journalEntry.findMany({
    where: { userId: req.user!.id },
    orderBy: { createdAt: "desc" },
  });
  res.json({ entries });
});

router.post("/", requireAuth, validate(entrySchema), async (req: AuthRequest, res) => {
  const entry = await prisma.journalEntry.create({
    data: { userId: req.user!.id, content: req.body.content, mood: req.body.mood || null },
  });
  res.status(201).json({ entry });
});

router.delete("/:id", requireAuth, async (req: AuthRequest, res) => {
  const result = await prisma.journalEntry.deleteMany({
    where: { id: req.params.id, userId: req.user!.id },
  });
  res.json({ deleted: result.count });
});

export default router;
