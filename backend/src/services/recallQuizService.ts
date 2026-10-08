import { z } from "zod";
import { prisma } from "../db";
import { executeStructuredLlm } from "./llm";
import { updateStability, calculateRetention } from "./forgettingModel";

export const RecallQuestionSchema = z.object({
  topicId: z.string(),
  topicName: z.string(),
  subjectCode: z.string(),
  questions: z.array(
    z.object({
      id: z.string(),
      question: z.string().min(5),
      options: z.array(z.string().min(1)).min(4).max(4),
      correctIndex: z.number().int().min(0).max(3),
      explanation: z.string(),
    })
  ).min(3).max(3),
});

export type RecallQuiz = z.infer<typeof RecallQuestionSchema>;

/**
 * Finds all topics for a student where predicted retention has fallen below the threshold.
 */
export async function getTopicsDueForRecall(userId: string, threshold = 0.6) {
  const states = await prisma.learningState.findMany({
    where: { userId },
    include: { topic: true },
  });

  const dueTopics: Array<{
    topicId: string;
    topicName: string;
    subjectCode: string;
    moduleNumber: number;
    mastery: number;
    currentStability: number;
    predictedRetention: number;
  }> = [];

  const now = Date.now();
  for (const s of states) {
    const elapsedDays = s.lastReviewedAt
      ? Math.max(0, (now - new Date(s.lastReviewedAt).getTime()) / (1000 * 60 * 60 * 24))
      : 0;
    const currentRetention = calculateRetention(elapsedDays, s.stability);

    if (currentRetention < threshold || !s.lastReviewedAt) {
      dueTopics.push({
        topicId: s.topicId,
        topicName: s.topic.name,
        subjectCode: s.topic.subjectCode,
        moduleNumber: s.topic.moduleNumber,
        mastery: s.mastery,
        currentStability: s.stability,
        predictedRetention: currentRetention,
      });
    }
  }

  return dueTopics.sort((a, b) => a.predictedRetention - b.predictedRetention);
}

/**
 * Generates 3 recall MCQs strictly from syllabus topic metadata and sub-topics.
 */
export async function generateRecallQuiz(topicId: string): Promise<RecallQuiz> {
  const topic = await prisma.topic.findUnique({
    where: { id: topicId },
    include: { subTopics: { orderBy: { orderIndex: "asc" } } },
  });

  if (!topic) {
    throw new Error(`Topic not found: ${topicId}`);
  }

  const subtopicTitles = topic.subTopics.map((st) => st.title).join("; ");

  const systemPrompt = `You are a strict VTU Computer Science examiner. Generate exactly 3 concise, high-yield Multiple Choice Questions to test memory recall for the given syllabus topic.
Each question must have 4 options and a correctIndex (0 to 3).
Output ONLY a JSON object matching this schema:
{
  "topicId": "${topic.id}",
  "topicName": "${topic.name}",
  "subjectCode": "${topic.subjectCode}",
  "questions": [
    {
      "id": "q1",
      "question": "Clear question text?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctIndex": 0,
      "explanation": "Why this option is correct."
    }
  ]
}`;

  const userPrompt = `Generate 3 recall questions for:
Topic: ${topic.name}
Subject: ${topic.subjectCode}
Module: ${topic.moduleNumber}
Sub-topics: ${subtopicTitles || topic.description || topic.name}`;

  const fallbackGenerator = (): RecallQuiz => ({
    topicId: topic.id,
    topicName: topic.name,
    subjectCode: topic.subjectCode,
    questions: [
      {
        id: "q1",
        question: `What is the primary objective of ${topic.name}?`,
        options: [
          `To implement the governing principle of ${topic.name}`,
          `To bypass architectural module constraints`,
          `To format low-level register states`,
          `To eliminate memory addressing requirements`,
        ],
        correctIndex: 0,
        explanation: `The primary objective is standard implementation within ${topic.subjectCode}.`,
      },
      {
        id: "q2",
        question: `Which key component or characteristic is foundational to ${topic.name}?`,
        options: [
          `Arbitrary non-standard execution paths`,
          `Structured algorithmic operations and defined state transitions`,
          `Unchecked hardware buffer overflows`,
          `Static compile-time null pointers`,
        ],
        correctIndex: 1,
        explanation: `Foundational concepts rely on structured algorithmic operations.`,
      },
      {
        id: "q3",
        question: `In VTU examination contexts, how is ${topic.name} evaluated?`,
        options: [
          `Exclusively through anecdotal observation`,
          `By measuring syntax token lengths only`,
          `Through formal definition, working mechanism, and practical application`,
          `Without reference to course outcomes`,
        ],
        correctIndex: 2,
        explanation: `VTU questions demand formal definition, mechanism, and practical examples.`,
      },
    ],
  });

  return executeStructuredLlm({
    systemPrompt,
    userPrompt,
    schema: RecallQuestionSchema,
    fallbackGenerator,
  });
}
