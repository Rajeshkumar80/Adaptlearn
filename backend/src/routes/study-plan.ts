import { Router } from "express";
import { z } from "zod";
import { prisma } from "../db";
import { requireAuth, AuthRequest } from "../middleware/auth";

const router = Router();

router.get("/", requireAuth, async (req: AuthRequest, res) => {
  const plans = await prisma.studyPlan.findMany({
    where: { userId: req.user!.id },
    orderBy: { date: "desc" },
    take: 30,
  });
  res.json({ plans });
});

router.post("/", requireAuth, async (req: AuthRequest, res) => {
  try {
    const { date, plan } = z.object({ date: z.string().optional(), plan: z.any() }).parse(req.body);
    const entry = await prisma.studyPlan.create({
      data: { userId: req.user!.id, date: date || new Date().toISOString().slice(0, 10), plan },
    });
    res.status(201).json({ plan: entry });
  } catch (err: any) { res.status(400).json({ error: err.message }); }
});

export default router;
