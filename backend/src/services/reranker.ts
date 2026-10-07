import { RetrievedChunk } from "./ragService";
import { QuestionAnalysis } from "./questionAnalyzer";
import { validateSourceChunk } from "./sourceValidator";

export interface RankedCandidate extends RetrievedChunk {
  finalScore: number;
  contentType: "qbank" | "primary_module" | "textbook" | "notes";
  provenance: {
    subject: string;
    module: number | null;
    sourceFile: string;
    contentType: string;
    topic?: string;
  };
}

export interface HybridRetrievalResult {
  topCandidates: RankedCandidate[];
  contextString: string;
  retrievalConfidence: "HIGH" | "MEDIUM" | "LOW" | "NONE";
  allocatedBudget: number;
  provenanceSummary: string[];
}

// ── Content Type Classification ──────────────────────────────────────────────
export function inferContentType(sourceFile: string): "qbank" | "primary_module" | "textbook" | "notes" {
  const f = sourceFile.toLowerCase();
  if (f.includes("question_bank") || f.includes("important_questions")) return "qbank";
  if (f.includes("module") && !f.includes("textbook")) return "primary_module";
  if (f.includes("textbook")) return "textbook";
  return "notes";
}

// ── Reranking Logic (Task 10) ────────────────────────────────────────────────
export function rerankCandidates(
  candidates: RetrievedChunk[],
  analysis: QuestionAnalysis
): RankedCandidate[] {
  const ranked: RankedCandidate[] = [];

  for (const c of candidates) {
    const validation = validateSourceChunk(c, analysis);
    const cType = inferContentType(c.sourceFile);
    let score = c.rawScore ?? (c.similarity * 30);

    if (!validation.isValid) {
      score = validation.isCrossDomainContaminated ? -100 : Math.min(score * 0.2, 5);
    } else {
      score += validation.score * 0.5;

      // 1. Content-Type Weight (Task 10 Priority)
      // Exact relevant solution > Relevant module section > Textbook section
      if (cType === "qbank") score *= 1.25;
      else if (cType === "primary_module") score *= 1.15;
      else if (cType === "textbook") score *= 1.0;

      // 2. Module Match Bonus
      if (analysis.module && c.moduleNumber === analysis.module) {
        score += 8;
      }

      // 3. Key-Point Overlap Bonus (Task 5 & 6)
      const contentLower = c.content.toLowerCase();
      let kpMatches = 0;
      for (const kp of analysis.keyPoints) {
        if (contentLower.includes(kp.toLowerCase())) kpMatches++;
      }
      score += kpMatches * 3;

      // 4. Topic Title Alignment
      if (analysis.topic && c.title.toLowerCase().includes(analysis.topic.toLowerCase())) {
        score += 10;
      }
    }

    ranked.push({
      ...c,
      finalScore: score,
      contentType: cType,
      provenance: {
        subject: analysis.subject,
        module: c.moduleNumber,
        sourceFile: c.sourceFile,
        contentType: cType,
        topic: c.title,
      },
    });
  }

  // Sort candidates by finalScore descending
  ranked.sort((a, b) => b.finalScore - a.finalScore);
  return ranked;
}

// ── Dynamic Context Budget Allocation (Task 11 & 12) ─────────────────────────
export function allocateDynamicContext(
  candidates: RankedCandidate[],
  analysis: QuestionAnalysis
): HybridRetrievalResult {
  // Determine character budget based on question depth & type
  let maxBudget = 2500;
  if (analysis.estimatedDepth === "short") {
    maxBudget = 1500;
  } else if (analysis.estimatedDepth === "deep" || analysis.questionType === "architecture") {
    maxBudget = 4500;
  } else {
    maxBudget = 3200;
  }

  // Determine Retrieval Confidence (Task 26)
  let confidence: "HIGH" | "MEDIUM" | "LOW" | "NONE" = "NONE";
  if (candidates.length === 0 || (candidates[0] && candidates[0].finalScore < 10)) {
    confidence = "NONE";
  } else if (candidates[0].finalScore >= 35) {
    confidence = "HIGH";
  } else if (candidates[0].finalScore >= 20) {
    confidence = "MEDIUM";
  } else {
    confidence = "LOW";
  }

  const selectedCandidates = candidates.filter(c => c.finalScore > 5).slice(0, 5);
  const contextBlocks: string[] = [];
  const provenanceSummary: string[] = [];
  let currentChars = 0;

  for (const c of selectedCandidates) {
    if (currentChars >= maxBudget) break;

    const remaining = maxBudget - currentChars;
    const chunkText = c.content.slice(0, Math.min(c.content.length, Math.max(400, remaining)));

    contextBlocks.push(
      `[SOURCE: ${c.sourceFile} | Module ${c.moduleNumber ?? 1} | Type: ${c.contentType.toUpperCase()}]\n${chunkText}`
    );

    const provLabel = `${analysis.subject} Module ${c.moduleNumber ?? 1} (${c.sourceFile.split("/").pop()})`;
    if (!provenanceSummary.includes(provLabel)) {
      provenanceSummary.push(provLabel);
    }

    currentChars += chunkText.length;
  }

  return {
    topCandidates: selectedCandidates,
    contextString: contextBlocks.join("\n\n"),
    retrievalConfidence: confidence,
    allocatedBudget: maxBudget,
    provenanceSummary,
  };
}
