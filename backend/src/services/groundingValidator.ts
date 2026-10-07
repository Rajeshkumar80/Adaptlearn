import { StructuredAnswer } from "./answerSynthesizer";

export interface GroundingValidationResult {
  valid: boolean;
  groundingScore: number;
  topicMatch: boolean;
  subjectMatch: boolean;
  unsupportedClaims: string[];
  insufficientContext: boolean;
  reason?: string;
}

const FORBIDDEN_FILLER_PATTERNS = [
  /structural modularity/i,
  /deterministic control/i,
  /resource optimization/i,
  /initialization\s*&\s*ingestion/i,
  /algorithmic transformation/i,
  /integrity verification/i,
  /dispatch\s*&\s*persistence/i,
  /parcel sorting hub/i,
  /scalable distributed servers and cloud backends/i,
];

const HARDWARE_SUBJECTS = new Set(["BCS302", "BCS402"]);
const CROSS_DOMAIN_PATTERNS = [
  /distributed systems/i,
  /cloud scalability/i,
  /microservice architecture/i,
  /kubernetes cluster/i,
];

const COMPILER_CROSS_DOMAIN_PATTERNS = [
  /virtual machines?/i,
  /virtualization/i,
  /hypervisor/i,
  /cluster virtualization/i,
  /cloud computing/i,
  /data centers?/i,
];

const STOP_WORDS = new Set([
  "what", "is", "a", "an", "the", "and", "or", "in", "on", "of", "to", "for",
  "with", "by", "at", "from", "as", "explain", "describe", "discuss", "neat",
  "diagram", "sketch", "suitable", "how", "why", "which", "different", "state",
  "list", "write", "note", "between", "define", "give", "types", "various",
  "example", "examples", "using", "use", "uses", "used", "their", "following"
]);

function stemWord(word: string): string {
  const w = word.toLowerCase();
  const suffixes = ["ation", "tions", "tion", "ing", "ies", "es", "ed", "s"];
  for (const s of suffixes) {
    if (w.endsWith(s) && w.length > s.length + 2) {
      return w.slice(0, -s.length);
    }
  }
  return w;
}

function extractTechnicalTokens(text: string): Set<string> {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9]/g, " ")
    .split(/\s+/)
    .filter(w => w.length > 2 && !STOP_WORDS.has(w))
    .map(stemWord);
  return new Set(words);
}

export function validateGrounding(
  answer: StructuredAnswer,
  retrievedContext: string,
  question: string,
  subjectCode: string,
  topic?: string
): GroundingValidationResult {
  const allAnswerText = (answer.sections || []).map(s => `${s.heading || ""} ${s.text || ""}`).join("\n");
  const unsupportedClaims: string[] = [];

  // 1. Check for fabricated generic filler phrases
  for (const pattern of FORBIDDEN_FILLER_PATTERNS) {
    if (pattern.test(allAnswerText)) {
      unsupportedClaims.push(`Generic filler detected: ${pattern.source}`);
    }
  }

  // 2. Check for cross-domain contamination on hardware subjects
  if (HARDWARE_SUBJECTS.has(subjectCode)) {
    for (const pattern of CROSS_DOMAIN_PATTERNS) {
      if (pattern.test(allAnswerText) && !retrievedContext.toLowerCase().includes(pattern.source.toLowerCase())) {
        unsupportedClaims.push(`Cross-domain hardware mismatch: ${pattern.source}`);
      }
    }
  }

  // 2b. Check for cross-domain contamination on Compiler Design
  if (subjectCode === "BCS601") {
    for (const pattern of COMPILER_CROSS_DOMAIN_PATTERNS) {
      if (pattern.test(allAnswerText) && !question.toLowerCase().includes(pattern.source.toLowerCase())) {
        unsupportedClaims.push(`Cross-domain compiler mismatch: ${pattern.source}`);
      }
    }
  }

  // 3. Check for insufficient context
  const cleanContext = (retrievedContext || "").trim();
  const insufficientContext = cleanContext.length < 50;

  // 4. Topic matching
  const qTokens = extractTechnicalTokens(question);
  const aTokens = extractTechnicalTokens(allAnswerText);
  let qOverlap = 0;
  for (const t of qTokens) {
    if (aTokens.has(t)) qOverlap++;
  }
  const topicMatch = qTokens.size === 0 || qOverlap >= 1;

  // 5. Subject matching
  const subjectMatch = !answer.subject_code || answer.subject_code === subjectCode;

  // 6. Grounding score calculation
  let groundingScore = 0.0;
  if (!insufficientContext) {
    const cTokens = extractTechnicalTokens(cleanContext);
    let groundedWords = 0;
    for (const t of aTokens) {
      if (cTokens.has(t) || qTokens.has(t)) {
        groundedWords++;
      }
    }
    groundingScore = aTokens.size > 0 ? Math.min(1.0, groundedWords / Math.max(1, aTokens.size)) : 0.0;
  }

  const valid = (
    !insufficientContext &&
    unsupportedClaims.length === 0 &&
    topicMatch &&
    subjectMatch &&
    groundingScore >= 0.25
  );

  let reason = undefined;
  if (insufficientContext) {
    reason = "Retrieved context was insufficient or empty.";
  } else if (unsupportedClaims.length > 0) {
    reason = `Answer contained unsupported claims or generic filler: ${unsupportedClaims.join(", ")}`;
  } else if (!topicMatch) {
    reason = "Answer did not sufficiently address the question's core technical terms.";
  } else if (groundingScore < 0.25) {
    reason = `Grounding score too low (${groundingScore.toFixed(2)} < 0.25).`;
  }

  return {
    valid,
    groundingScore: Number(groundingScore.toFixed(2)),
    topicMatch,
    subjectMatch,
    unsupportedClaims,
    insufficientContext,
    reason,
  };
}
