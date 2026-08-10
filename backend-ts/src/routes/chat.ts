import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { requireAuth, AuthRequest } from "../middleware/auth";
import { validate } from "../middleware/validation";

const prisma = new PrismaClient();
const router = Router();

const createSchema = z.object({
  subjectCode: z.string().optional(),
  moduleNumber: z.number().int().min(1).optional(),
  title: z.string().max(120).optional(),
});

const messageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1).max(20000),
  chunks: z.any().optional(),
  diagrams: z.any().optional(),
  quiz: z.any().optional(),
});

// List the student's chat sessions, newest first.
router.get("/", requireAuth, async (req: AuthRequest, res) => {
  const sessions = await prisma.chatSession.findMany({
    where: { userId: req.user!.id },
    include: { _count: { select: { messages: true } } },
    orderBy: { updatedAt: "desc" },
    take: 100,
  });
  res.json({
    sessions: sessions.map((s) => ({
      id: s.id,
      title: s.title,
      subjectCode: s.subjectCode,
      moduleNumber: s.moduleNumber,
      messageCount: s._count.messages,
      updatedAt: s.updatedAt,
    })),
  });
});

// Create a new session.
router.post("/", requireAuth, validate(createSchema), async (req: AuthRequest, res) => {
  const session = await prisma.chatSession.create({
    data: {
      userId: req.user!.id,
      title: req.body.title || "New chat",
      subjectCode: req.body.subjectCode || null,
      moduleNumber: req.body.moduleNumber ?? null,
    },
  });
  res.status(201).json({ session });
});

// Full conversation for a session (resume).
router.get("/:id", requireAuth, async (req: AuthRequest, res) => {
  const session = await prisma.chatSession.findFirst({
    where: { id: req.params.id, userId: req.user!.id },
    include: { messages: { orderBy: { createdAt: "asc" } } },
  });
  if (!session) {
    res.status(404).json({ error: "Session not found" });
    return;
  }
  res.json({
    session: {
      id: session.id,
      title: session.title,
      subjectCode: session.subjectCode,
      moduleNumber: session.moduleNumber,
    },
    messages: session.messages.map((m) => ({
      id: m.id,
      role: m.role,
      content: m.content,
      chunks: m.chunks,
      diagrams: m.diagrams,
      quiz: m.quiz,
    })),
  });
});

// Rename a session.
router.patch("/:id", requireAuth, validate(z.object({ title: z.string().min(1).max(120) })), async (req: AuthRequest, res) => {
  const session = await prisma.chatSession.findFirst({
    where: { id: req.params.id, userId: req.user!.id },
  });
  if (!session) {
    res.status(404).json({ error: "Session not found" });
    return;
  }
  const updated = await prisma.chatSession.update({
    where: { id: session.id },
    data: { title: req.body.title },
  });
  res.json({ session: updated });
});

router.delete("/:id", requireAuth, async (req: AuthRequest, res) => {
  const result = await prisma.chatSession.deleteMany({
    where: { id: req.params.id, userId: req.user!.id },
  });
  res.json({ deleted: result.count });
});

// Append a message; auto-titles the session from the first user message.
router.post("/:id/messages", requireAuth, validate(messageSchema), async (req: AuthRequest, res) => {
  const session = await prisma.chatSession.findFirst({
    where: { id: req.params.id, userId: req.user!.id },
  });
  if (!session) {
    res.status(404).json({ error: "Session not found" });
    return;
  }
  const { role, content, chunks, diagrams, quiz } = req.body;

  const message = await prisma.chatMessage.create({
    data: {
      sessionId: session.id,
      role,
      content,
      chunks: chunks ?? undefined,
      diagrams: diagrams ?? undefined,
      quiz: quiz ?? undefined,
    },
  });

  let title = session.title;
  if (role === "user" && title === "New chat") {
    title = content.slice(0, 60);
    await prisma.chatSession.update({
      where: { id: session.id },
      data: { title: content.length > 60 ? `${title}…` : title },
    });
  }

  res.status(201).json({ message, title });
});

export default router;
