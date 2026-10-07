import { RetrievedChunk } from "./ragService";
import { QuestionAnalysis } from "./questionAnalyzer";

export interface SourceValidationResult {
  isValid: boolean;
  score: number;
  subjectMatch: boolean;
  moduleMatch: boolean;
  topicOverlap: boolean;
  isCrossDomainContaminated: boolean;
  reason?: string;
}

interface DomainSignature {
  name: string;
  expectedKeywords: RegExp;
  contradictoryTerms: RegExp[];
}

const DOMAIN_SIGNATURES: Record<string, DomainSignature> = {
  BCS601: {
    name: "Compiler Design",
    expectedKeywords: /\b(compiler|compilers|lexical\s+analysis|syntax\s+analysis|semantic\s+analysis|intermediate\s+code|code\s+optimization|code\s+generation|symbol\s+table|error\s+handl|front\s+end|back\s+end|tokens?|lexemes?|parse|parsing|parser|ll\(1\)|lr\(1\)|slr|lalr|cfg|three-address|tac|quadruple|triple|flex|bison|yacc|basic\s+block|flow\s+graph)\b/i,
    contradictoryTerms: [
      /\bvirtual\s+machines?\b/i,
      /\bvirtualization\b/i,
      /\bvmm\b/i,
      /\bhypervisor\b/i,
      /\bdata\s+centers?\b/i,
      /\bcluster\s+virtualization\b/i,
      /\bcloud\s+computing\b/i,
      /\biaas\b/i,
      /\bpaas\b/i,
      /\bsaas\b/i,
      /\bopenstack\b/i,
    ],
  },
  BCS302: {
    name: "Digital Design & Computer Organization",
    expectedKeywords: /\b(addressing\s+modes?|k[\s\-_]*map|karnaugh|boolean\s+algebra|logic\s+gate|flip[\s\-_]*flop|multiplexer|decoder|register|alu|bus\s+structure|cache\s+memory|instruction\s+cycle)\b/i,
    contradictoryTerms: [
      /\bcloud\s+scalability\b/i,
      /\bmicroservice\b/i,
      /\bkubernetes\b/i,
      /\bvirtual\s+machine\b/i,
      /\bdistributed\s+systems\b/i,
      /\bnormalization\b/i,
      /\brelational\s+database\b/i,
    ],
  },
  BCS402: {
    name: "Microcontrollers & Embedded Systems",
    expectedKeywords: /\b(8051|microcontroller|arm\s+processor|arm\s+architecture|cpsr|spsr|tmod|tcon|scon|barrel\s+shifter|pin\s+diagram|embedded\s+system)\b/i,
    contradictoryTerms: [
      /\bcloud\s+computing\b/i,
      /\bvirtual\s+machine\b/i,
      /\bnormalization\b/i,
      /\b1nf\b/i,
      /\bosi\s+model\b/i,
      /\bcompiler\s+phases\b/i,
    ],
  },
  BCS403: {
    name: "Database Management Systems",
    expectedKeywords: /\b(database|dbms|sql|normalization|1nf|2nf|3nf|bcnf|functional\s+dependency|acid|transaction|er\s+diagram|relational|primary\s+key|foreign\s+key|b[\s\-_]*tree)\b/i,
    contradictoryTerms: [
      /\barm\s+processor\b/i,
      /\b8051\s+microcontroller\b/i,
      /\bk[\s\-_]*map\b/i,
      /\baddressing\s+mode\b/i,
      /\bosi\s+model\b/i,
      /\bcompiler\b/i,
    ],
  },
  BCS502: {
    name: "Computer Networks",
    expectedKeywords: /\b(osi|osi\s+model|tcp|udp|ip\s+address|ipv4|ipv6|routing|packet|frame|transport\s+layer|network\s+layer|data\s+link|physical\s+layer|subnet|csma|ethernet|socket)\b/i,
    contradictoryTerms: [
      /\bnormalization\b/i,
      /\b1nf\b/i,
      /\bk[\s\-_]*map\b/i,
      /\b8051\b/i,
      /\bthree-address\s+code\b/i,
    ],
  },
};

const STOP_WORDS = new Set([
  "what", "is", "a", "an", "the", "and", "or", "in", "on", "of", "to", "for",
  "with", "by", "at", "from", "as", "explain", "describe", "discuss", "neat",
  "diagram", "sketch", "suitable", "how", "why", "which", "different", "state",
  "list", "write", "note", "between", "define", "give", "types", "various",
  "example", "examples", "using", "use", "uses", "used", "their", "following",
  "terms", "show", "compare", "brief", "briefly", "also", "all"
]);

function extractKeywords(text: string): Set<string> {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9]/g, " ")
    .split(/\s+/)
    .filter(w => w.length > 2 && !STOP_WORDS.has(w));
  return new Set(words);
}

// ── Generic Source Validator & Cross-Domain Guard (Tasks 4 & 5) ──────────────
export function validateSourceChunk(
  chunk: RetrievedChunk,
  analysis: QuestionAnalysis
): SourceValidationResult {
  const subjectExpected = analysis.subject;
  const chunkSource = chunk.sourceFile.replace(/\\/g, "/");
  const content = chunk.content;
  const contentLower = content.toLowerCase();

  // 1. Subject Path Match
  // Chunks must come from the knowledge/<expectedSubject>/ folder
  const subjectPathSegment = `knowledge/${subjectExpected}/`;
  const subjectMatch = chunkSource.includes(subjectPathSegment);
  if (!subjectMatch) {
    return {
      isValid: false,
      score: 0,
      subjectMatch: false,
      moduleMatch: false,
      topicOverlap: false,
      isCrossDomainContaminated: true,
      reason: `Subject path mismatch: Chunk from "${chunk.sourceFile}" does not belong to expected "${subjectExpected}".`,
    };
  }

  // 2. Module Match where available
  const moduleMatch = !analysis.module || !chunk.moduleNumber || chunk.moduleNumber === analysis.module;

  // 3. Technical Keyword Overlap
  const queryTokens = extractKeywords(analysis.cleanQuery || analysis.topic);
  let overlapCount = 0;
  for (const t of queryTokens) {
    if (contentLower.includes(t)) {
      overlapCount++;
    }
  }

  // Check key points overlap from analysis
  let kpOverlap = 0;
  for (const kp of analysis.keyPoints || []) {
    if (contentLower.includes(kp.toLowerCase())) {
      kpOverlap++;
    }
  }

  const topicOverlap = overlapCount > 0 || kpOverlap > 0;

  // 4. Cross-Domain Guard (Task 5 Generic Antagonism Protection)
  const signature = DOMAIN_SIGNATURES[subjectExpected];
  let isCrossDomainContaminated = false;
  let contaminationReason = "";

  if (signature) {
    // Check if chunk contains forbidden contradictory terms
    let contradictoryMatches = 0;
    let matchedContradictoryTerm = "";
    for (const termRx of signature.contradictoryTerms) {
      if (termRx.test(contentLower)) {
        contradictoryMatches++;
        matchedContradictoryTerm = termRx.source;
      }
    }

    if (contradictoryMatches > 0) {
      // Check if chunk has strong expected primary keywords for this subject
      const hasExpectedDomainKeywords = signature.expectedKeywords.test(contentLower);

      if (!hasExpectedDomainKeywords || (contradictoryMatches >= 2 && overlapCount === 0)) {
        isCrossDomainContaminated = true;
        contaminationReason = `Cross-domain contamination detected: Query for ${signature.name} (${subjectExpected}) retrieved contradictory terms (${matchedContradictoryTerm}) without primary domain grounding.`;
      }
    }
  }

  if (isCrossDomainContaminated) {
    return {
      isValid: false,
      score: 0,
      subjectMatch: true,
      moduleMatch,
      topicOverlap: false,
      isCrossDomainContaminated: true,
      reason: contaminationReason,
    };
  }

  // Reject completely unrelated chunks with zero keyword overlap and zero keypoint matches
  if (!topicOverlap && queryTokens.size >= 2) {
    return {
      isValid: false,
      score: 0,
      subjectMatch: true,
      moduleMatch,
      topicOverlap: false,
      isCrossDomainContaminated: false,
      reason: `Zero topical keyword overlap between query ("${analysis.topic}") and retrieved chunk.`,
    };
  }

  const score = overlapCount * 5 + kpOverlap * 8 + (moduleMatch ? 5 : 0);
  return {
    isValid: true,
    score,
    subjectMatch: true,
    moduleMatch,
    topicOverlap: true,
    isCrossDomainContaminated: false,
  };
}
