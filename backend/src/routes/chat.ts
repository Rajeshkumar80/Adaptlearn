import { Router } from "express";
import { z } from "zod";
import { prisma } from "../db";
import { requireAuth, AuthRequest } from "../middleware/auth";

const router = Router();

router.get("/", requireAuth, async (req: AuthRequest, res) => {
  const sessions = await prisma.chatSession.findMany({
    where: { userId: req.user!.id },
    include: { _count: { select: { messages: true } } },
    orderBy: { updatedAt: "desc" },
    take: 100,
  });
  res.json({
    sessions: sessions.map(s => ({
      id: s.id, title: s.title, subjectCode: s.subjectCode,
      moduleNumber: s.moduleNumber, messageCount: s._count.messages, updatedAt: s.updatedAt,
    })),
  });
});

router.post("/", requireAuth, async (req: AuthRequest, res) => {
  try {
    const body = z.object({
      subjectCode: z.string().optional(),
      moduleNumber: z.number().int().min(1).optional(),
      title: z.string().max(120).optional(),
    }).parse(req.body);
    const session = await prisma.chatSession.create({
      data: { userId: req.user!.id, title: body.title || "New chat", subjectCode: body.subjectCode || null, moduleNumber: body.moduleNumber ?? null },
    });
    res.status(201).json({ session });
  } catch (err: any) { res.status(400).json({ error: err.message }); }
});

router.get("/:id", requireAuth, async (req: AuthRequest, res) => {
  const session = await prisma.chatSession.findFirst({
    where: { id: req.params.id, userId: req.user!.id },
    include: { messages: { orderBy: { createdAt: "asc" } } },
  });
  if (!session) { res.status(404).json({ error: "Session not found" }); return; }
  res.json({
    session: { id: session.id, title: session.title, subjectCode: session.subjectCode, moduleNumber: session.moduleNumber },
    messages: session.messages.map(m => ({ id: m.id, role: m.role, content: m.content, chunks: m.chunks, diagrams: m.diagrams, quiz: m.quiz })),
  });
});

router.patch("/:id", requireAuth, async (req: AuthRequest, res) => {
  try {
    const { title } = z.object({ title: z.string().min(1).max(120) }).parse(req.body);
    const s = await prisma.chatSession.findFirst({ where: { id: req.params.id, userId: req.user!.id } });
    if (!s) { res.status(404).json({ error: "Session not found" }); return; }
    const updated = await prisma.chatSession.update({ where: { id: s.id }, data: { title } });
    res.json({ session: updated });
  } catch (err: any) { res.status(400).json({ error: err.message }); }
});

router.delete("/:id", requireAuth, async (req: AuthRequest, res) => {
  const r = await prisma.chatSession.deleteMany({ where: { id: req.params.id, userId: req.user!.id } });
  res.json({ deleted: r.count });
});

router.post("/:id/messages", requireAuth, async (req: AuthRequest, res) => {
  try {
    const { role, content, chunks, diagrams, quiz } = z.object({
      role: z.enum(["user", "assistant"]),
      content: z.string().min(1).max(20000),
      chunks: z.any().optional(),
      diagrams: z.any().optional(),
      quiz: z.any().optional(),
    }).parse(req.body);

    const session = await prisma.chatSession.findFirst({ where: { id: req.params.id, userId: req.user!.id } });
    if (!session) { res.status(404).json({ error: "Session not found" }); return; }

    const message = await prisma.chatMessage.create({
      data: { sessionId: session.id, role, content, chunks: chunks ?? undefined, diagrams: diagrams ?? undefined, quiz: quiz ?? undefined },
    });

    let title = session.title;
    if (role === "user" && title === "New chat") {
      title = content.slice(0, 60) + (content.length > 60 ? "…" : "");
      await prisma.chatSession.update({ where: { id: session.id }, data: { title } });
    }

    res.status(201).json({ message, title });
  } catch (err: any) { res.status(400).json({ error: err.message }); }
});

export default router;
