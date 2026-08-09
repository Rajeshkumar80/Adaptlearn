import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { requireAuth, AuthRequest } from "../middleware/auth";
import { validate } from "../middleware/validation";
import { aiLimiter } from "../middleware/rate-limit";
import { retrieve, RetrievedChunk } from "../services/retrieval";
import { geminiGenerate } from "../services/gemini";
import { updateBkt } from "../services/bkt";
import { evaluateAchievements } from "../services/achievements";

const prisma = new PrismaClient();
const router = Router();

const askSchema = z.object({
  question: z.string().min(3).max(2000),
  subjectCode: z.string().min(1),
  moduleNumber: z.number().int().min(1).optional(),
});

const VTU_SYSTEM_PROMPT = `You are AdaptLearn, an expert VTU (Visvesvaraya Technological University) tutor.
Answer the student's question based on the retrieved course content chunks provided.
Format your answer for a VTU semester exam:
- Answer in clear point-wise bullets (marks-oriented structure).
- Where a diagram/block diagram is relevant, describe the diagram in a [DIAGRAM: ...] block using ASCII art inside.
- If a Course Outcome (CO) reference is available in the chunk metadata, cite it as "CO: COn" at the start.
- Be concise: ~200-350 words. Do not invent facts not present in the chunks.
- If the question requires a numerical calculation, treat the question text itself as source data: use the values stated in the question, perform the calculation with standard formulas, and show each step with the final answer. Do this even if the chunk only contains the question statement.
If the chunks do not contain the answer (and no computation is possible), say so explicitly instead of guessing.`;

// §4.7 — RAG ask: embed question → pgvector retrieve → VTU-format prompt → Gemini
// §4.8 — also generates a follow-up MCQ (single Gemini call combined with answer)
router.post("/ask", requireAuth, aiLimiter, validate(askSchema), async (req: AuthRequest, res) => {
  try {
    const { question, subjectCode, moduleNumber } = req.body;

    const chunks = await retrieve(question, subjectCode, moduleNumber ?? null, 5);
    if (chunks.length === 0) {
      res.status(404).json({ error: "No content found for this subject/module — upload notes first" });
      return;
    }

    const context = chunks
      .map((c: RetrievedChunk, i: number) => {
        const coMatch = c.content.match(/CO\s?\d+/i);
        return `[Chunk ${i + 1}] (module ${c.moduleNumber ?? "?"}${coMatch ? ", " + coMatch[0] : ""}) ${c.content}`;
      })
      .join("\n\n");

    const answerPrompt = `${VTU_SYSTEM_PROMPT}\n\nSUBJECT: ${subjectCode}\nQUESTION: ${question}\n\nRETRIEVED CONTENT:\n${context}\n\nANSWER:`;

    const [answer, mcqJson] = await Promise.all([
      geminiGenerate(answerPrompt, req.user!.id),
      geminiGenerate(
        `Based on the retrieved content below, generate ONE multiple-choice question testing the core concept of: "${question}".
Return STRICT JSON only: {"question":"...","options":["a","b","c","d"],"correctIndex":0}
RETRIEVED CONTENT:\n${context}`,
        req.user!.id
      ),
    ]);

    let followUpMcq: { question: string; options: string[]; correctIndex: number; topicId: string | null } | null = null;
    try {
      const cleaned = mcqJson.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(cleaned);
      // Bind the MCQ to a topic in scope so the student's answer feeds BKT.
      const scopeModule = moduleNumber ?? chunks[0]?.moduleNumber ?? null;
      const topic = await prisma.topic.findFirst({
        where: { subjectCode, ...(scopeModule ? { moduleNumber: scopeModule } : {}) },
        orderBy: { order: "asc" },
      });
      followUpMcq = {
        question: parsed.question,
        options: parsed.options,
        correctIndex: parsed.correctIndex,
        topicId: topic?.id ?? null,
      };
    } catch {
      followUpMcq = null;
    }

    res.json({
      answer,
      retrievedChunks: chunks.map((c) => ({ id: c.id, title: c.title, similarity: c.similarity, moduleNumber: c.moduleNumber })),
      followUpMcq,
    });
  } catch (err) {
    res.status(500).json({ error: "AI request failed", detail: String(err) });
  }
});

const mcqResponseSchema = z.object({
  topicId: z.string().min(1),
  correct: z.boolean(),
});

// §4.8 — feed MCQ answer into BKT (lightweight quiz-based update)
router.post("/mcq-response", requireAuth, aiLimiter, validate(mcqResponseSchema), async (req: AuthRequest, res) => {
  const { topicId, correct } = req.body;

  const topic = await prisma.topic.findUnique({ where: { id: topicId } });
  if (!topic) {
    res.status(404).json({ error: "Topic not found" });
    return;
  }

  const state = await prisma.learningState.upsert({
    where: { userId_topicId: { userId: req.user!.id, topicId } },
    update: {},
    create: { userId: req.user!.id, topicId },
  });

  const bkt = updateBkt(
    {
      mastery: state.mastery,
      correctCount: state.correctCount,
      wrongCount: state.wrongCount,
      timesReviewed: state.timesReviewed,
    },
    correct
  );

  const updated = await prisma.learningState.update({
    where: { id: state.id },
    data: {
      mastery: bkt.mastery,
      correctCount: bkt.correctCount,
      wrongCount: bkt.wrongCount,
      timesReviewed: bkt.timesReviewed,
      lastReviewedAt: new Date(),
    },
  });

  await prisma.studySession.create({
    data: { userId: req.user!.id, topicId, method: "ai-mcq", correct },
  });

  const unlocked = await evaluateAchievements(prisma, req.user!.id);

  res.json({
    state: updated,
    topic: { id: topic.id, name: topic.name, subjectCode: topic.subjectCode },
    masteryBefore: state.mastery,
    masteryAfter: updated.mastery,
    delta: Math.round((updated.mastery - state.mastery) * 1000) / 1000,
    achievementsUnlocked: unlocked,
  });
});

export default router;
