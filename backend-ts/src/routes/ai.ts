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

export interface QuizQuestion {
  kind: "mcq" | "short";
  question: string;
  options?: string[];
  correctIndex?: number;
  modelAnswer?: string;
}

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

    const [answer, quizJson] = await Promise.all([
      geminiGenerate(answerPrompt, req.user!.id),
      geminiGenerate(
        `Based on the retrieved content below, generate a "state tracing" quiz with EXACTLY 5 questions that traces understanding step by step, from recall to application (easy -> harder).
Mix both kinds: at least 2 MCQs and at least 2 short-answer questions.
MCQ: 4 options, one correct. Short: no options, include a concise model answer (1-2 lines) for grading.
Return STRICT JSON only, no markdown:
{"questions":[{"kind":"mcq","question":"...","options":["a","b","c","d"],"correctIndex":0},{"kind":"short","question":"...","modelAnswer":"..."}]}
RETRIEVED CONTENT:\n${context}`,
        req.user!.id
      ),
    ]);

    let followUpQuiz: { topicId: string | null; questions: QuizQuestion[] } = {
      topicId: null,
      questions: [],
    };
    try {
      const cleaned = quizJson.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(cleaned);
      const raw = Array.isArray(parsed.questions) ? parsed.questions : [];
      const questions: QuizQuestion[] = raw
        .filter(
          (q: any) =>
            q && q.question &&
            (q.kind === "short" || (q.kind === "mcq" && Array.isArray(q.options) && q.options.length >= 2))
        )
        .slice(0, 5)
        .map((q: any) => ({
          kind: q.kind === "short" ? "short" : "mcq",
          question: String(q.question),
          options: q.kind === "mcq" ? q.options.map(String) : undefined,
          correctIndex: q.kind === "mcq" ? Number(q.correctIndex) : undefined,
          modelAnswer: q.kind === "short" ? String(q.modelAnswer ?? "") : undefined,
        }));
      // Bind the quiz to a topic in scope so answers feed BKT.
      const scopeModule = moduleNumber ?? chunks[0]?.moduleNumber ?? null;
      const topic = await prisma.topic.findFirst({
        where: { subjectCode, ...(scopeModule ? { moduleNumber: scopeModule } : {}) },
        orderBy: { order: "asc" },
      });
      followUpQuiz = { topicId: topic?.id ?? null, questions };
    } catch {
      followUpQuiz = { topicId: null, questions: [] };
    }

    const diagrams = Array.from(
      new Map(
        chunks
          .filter((c) => c.pageImage)
          .map((c) => [c.pageImage!.fileUrl, { ...c.pageImage!, title: c.title }])
      ).values()
    );

    res.json({
      answer,
      retrievedChunks: chunks.map((c) => ({
        id: c.id,
        title: c.title,
        similarity: c.similarity,
        moduleNumber: c.moduleNumber,
        pageImage: c.pageImage,
      })),
      diagrams,
      followUpQuiz,
    });
  } catch (err) {
    res.status(500).json({ error: "AI request failed", detail: String(err) });
  }
});

const mcqResponseSchema = z.object({
  topicId: z.string().min(1),
  correct: z.boolean(),
});

async function applyQuizFeedback(userId: string, topicId: string, correct: boolean) {
  const topic = await prisma.topic.findUnique({ where: { id: topicId } });
  if (!topic) {
    const err = new Error("Topic not found") as Error & { status?: number };
    err.status = 404;
    throw err;
  }

  const state = await prisma.learningState.upsert({
    where: { userId_topicId: { userId, topicId } },
    update: {},
    create: { userId, topicId },
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
    data: { userId, topicId, method: "state-trace", correct },
  });

  const achievementsUnlocked = await evaluateAchievements(prisma, userId);

  return {
    state: updated,
    topic: { id: topic.id, name: topic.name, subjectCode: topic.subjectCode },
    masteryBefore: state.mastery,
    masteryAfter: updated.mastery,
    delta: Math.round((updated.mastery - state.mastery) * 1000) / 1000,
    achievementsUnlocked,
  };
}

// §4.8 — feed MCQ quiz answer into BKT (lightweight quiz-based update)
router.post("/mcq-response", requireAuth, aiLimiter, validate(mcqResponseSchema), async (req: AuthRequest, res) => {
  const { topicId, correct } = req.body;

  try {
    const result = await applyQuizFeedback(req.user!.id, topicId, correct);
    res.json(result);
  } catch (err: any) {
    res.status(err.status ?? 500).json({ error: err.status ? err.message : "AI request failed", detail: String(err) });
  }
});

const quizGradeSchema = z.object({
  topicId: z.string().min(1),
  question: z.string().min(1).max(1000),
  studentAnswer: z.string().min(1).max(2000),
  modelAnswer: z.string().min(1).max(2000),
});

// §4.8 — grade a short-answer state-tracing response with Gemini, then feed BKT.
router.post("/quiz-grade", requireAuth, aiLimiter, validate(quizGradeSchema), async (req: AuthRequest, res) => {
  const { topicId, question, studentAnswer, modelAnswer } = req.body;
  try {
    const gradeJson = await geminiGenerate(
      `Grade this student's short answer to a VTU exam question. Be fair and strict: award correct=true only if the answer covers the core concept in the model answer.
QUESTION: ${question}
MODEL ANSWER: ${modelAnswer}
STUDENT ANSWER: ${studentAnswer}
Return STRICT JSON only: {"correct":true|false,"feedback":"1-2 sentences explaining what was right/missing"}`,
      req.user!.id
    );
    let correct = false;
    let feedback = "Could not grade — review the model answer.";
    try {
      const cleaned = gradeJson.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(cleaned);
      correct = Boolean(parsed.correct);
      feedback = String(parsed.feedback ?? feedback);
    } catch {
      /* keep fallback */
    }

    const result = await applyQuizFeedback(req.user!.id, topicId, correct);
    res.json({ correct, feedback, ...result });
  } catch (err: any) {
    res.status(err.status ?? 500).json({ error: err.status ? err.message : "AI request failed", detail: String(err) });
  }
});

export default router;
