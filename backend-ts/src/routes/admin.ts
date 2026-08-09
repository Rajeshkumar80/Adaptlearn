import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { requireAuth, requireAdmin, AuthRequest } from "../middleware/auth";

const prisma = new PrismaClient();
const router = Router();

router.get("/dashboard", requireAuth, requireAdmin, async (_req: AuthRequest, res) => {
  const [users, students, teachers, classes, tests, chunks, notes, assignments, cheatFlags, submissions] =
    await Promise.all([
      prisma.user.count(),
      prisma.user.count({ where: { role: "STUDENT" } }),
      prisma.user.count({ where: { role: "TEACHER" } }),
      prisma.class.count(),
      prisma.test.count(),
      prisma.documentChunk.count(),
      prisma.notes.count(),
      prisma.assignment.count(),
      prisma.cheatFlag.count(),
      prisma.assignmentSubmission.count(),
    ]);
  res.json({ counts: { users, students, teachers, classes, tests, chunks, notes, assignments, cheatFlags, submissions } });
});

export default router;
