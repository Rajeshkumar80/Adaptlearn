import { geminiGenerate } from "./gemini";

// §4.13 — AI assignment evaluation: reads the student's answer (typed text or
// a note that it is a photo of handwritten work) against the assignment brief
// and returns an analysis + a recommended 0-100 score the teacher can accept
// or override. The result is cached on the submission row.

export interface AssignmentAnalysis {
  recommendedScore: number;
  summary: string;
  strengths: string[];
  improvements: string[];
}

export function parseAnalysis(raw: string): AssignmentAnalysis | null {
  const text = raw.trim().replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();
  try {
    const parsed = JSON.parse(text);
    const score = Number(parsed.recommendedScore ?? parsed.score);
    if (Number.isNaN(score)) return null;
    return {
      recommendedScore: Math.max(0, Math.min(100, Math.round(score))),
      summary: String(parsed.summary ?? parsed.analysis ?? ""),
      strengths: Array.isArray(parsed.strengths) ? parsed.strengths.map(String) : [],
      improvements: Array.isArray(parsed.improvements) ? parsed.improvements.map(String) : [],
    };
  } catch {
    return null;
  }
}

export async function evaluateAssignment(opts: {
  assignmentTitle: string;
  description: string;
  answerText: string | null;
  photoCount: number;
}): Promise<AssignmentAnalysis> {
  const prompt = `You are a VTU engineering professor grading an assignment submission.

ASSIGNMENT TITLE: ${opts.assignmentTitle}
ASSIGNMENT BRIEF: ${opts.description || "(no brief given)"}

STUDENT SUBMISSION:
${opts.answerText ? `(typed answer)\n${opts.answerText.slice(0, 6000)}` : ""}
${opts.photoCount > 0 ? `\n(plus ${opts.photoCount} uploaded photo(s) of handwritten work — evaluate based on the typed description above and note that handwriting quality/photos should be inspected by the teacher)` : ""}

Evaluate strictly against the brief. Reply with ONLY valid JSON (no markdown fences) in this exact shape:
{
  "recommendedScore": <integer 0-100>,
  "summary": "<2-3 sentence assessment of the answer's coverage, correctness and depth>",
  "strengths": ["<what the student did well, 1-4 items>"],
  "improvements": ["<specific gaps to fix to score higher, 1-4 items>"]
}
Be fair and specific. If the submission is empty, recommendedScore should be low (0-15).`;

  const raw = await geminiGenerate(prompt);
  const parsed = parseAnalysis(raw);
  if (parsed) return parsed;
  return {
    recommendedScore: 50,
    summary: "AI could not produce a structured analysis for this submission.",
    strengths: [],
    improvements: ["Re-run the evaluation for a detailed analysis."],
  };
}
