import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { requireAuth, AuthRequest } from "../middleware/auth";
import { validate } from "../middleware/validation";

const prisma = new PrismaClient();
const router = Router();

const planSchema = z.object({
  date: z.string().optional(),
  plan: z.any(),
});

router.get("/", requireAuth, async (req: AuthRequest, res) => {
  const plans = await prisma.studyPlan.findMany({
    where: { userId: req.user!.id },
    orderBy: { date: "desc" },
    take: 30,
  });
  res.json({ plans });
});

router.post("/", requireAuth, validate(planSchema), async (req: AuthRequest, res) => {
  const plan = await prisma.studyPlan.create({
    data: {
      userId: req.user!.id,
      date: req.body.date || new Date().toISOString().slice(0, 10),
      plan: req.body.plan,
    },
  });
  res.status(201).json({ plan });
});

export default router;
