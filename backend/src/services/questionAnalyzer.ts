import { resolveSubjectCode, resolveModuleNumber } from "./ragService";

export type QuestionType =
  | "definition"
  | "explain"
  | "describe"
  | "list"
  | "compare"
  | "differentiate"
  | "derive"
  | "calculate"
  | "numerical"
  | "algorithm"
  | "program"
  | "architecture"
  | "diagram"
  | "advantages/disadvantages"
  | "short answer"
  | "long answer";

export type EstimatedDepth = "short" | "medium" | "deep";

export interface QuestionAnalysis {
  subject: string;
  module: number;
  topic: string;
  questionType: QuestionType;
  requiresExample: boolean;
  requiresDiagram: boolean;
  diagramHelpful: boolean;
  diagramNotNeeded: boolean;
  requiresCalculation: boolean;
  requiresCode: boolean;
  requiresDerivation: boolean;
  estimatedDepth: EstimatedDepth;
  detectedMarks: number;
  keyPoints: string[];
  isAmbiguous: boolean;
  ambiguityReason?: string;
  cleanQuery: string;
}

const STOP_WORDS = new Set([
  "what", "is", "a", "an", "the", "and", "or", "in", "on", "of", "to", "for",
  "with", "by", "at", "from", "as", "explain", "describe", "discuss", "neat",
  "diagram", "sketch", "suitable", "how", "why", "which", "different", "state",
  "list", "write", "note", "between", "define", "give", "types", "various",
  "example", "examples", "using", "use", "uses", "used", "their", "following",
  "terms", "show", "compare", "brief", "briefly", "also", "all", "please", "can",
  "you", "tell", "me", "about"
]);

// ── Question-Type Classifier (Task 3) ─────────────────────────────────────────
export function classifyQuestionType(question: string): QuestionType {
  const q = question.toLowerCase();

  if (/\b(write a\s+(\w+\s+)?program|c program|java program|python code|code for|implement|source code|bfs program|dfs program)\b/i.test(q)) {
    return "program";
  }
  if (/\b(algorithm|pseudo-code|pseudocode|steps to sort|procedure for)\b/i.test(q)) {
    return "algorithm";
  }
  if (/\b(calculate|compute|solve|numerical|find the value|evaluate the formula|page-fault rate)\b/i.test(q)) {
    return "numerical";
  }
  if (/\b(derive|derivation|prove that|mathematical proof)\b/i.test(q)) {
    return "derive";
  }
  if (/\b(differentiate|distinguish between|contrast|versus|vs\.?)\b/i.test(q)) {
    return "differentiate";
  }
  if (/\b(compare|comparison between)\b/i.test(q)) {
    return "compare";
  }
  if (/\b(advantages and disadvantages|pros and cons|merits and demerits|limitations)\b/i.test(q)) {
    return "advantages/disadvantages";
  }
  if (/\b(architecture|block diagram|internal structure|pin diagram|datapath)\b/i.test(q)) {
    return "architecture";
  }
  if (/\b(draw a neat diagram|sketch|diagram of|flowchart)\b/i.test(q) && !/\b(explain|what is)\b/i.test(q)) {
    return "diagram";
  }
  if (/\b(define|definition of|what is meant by|state the principle)\b/i.test(q)) {
    return "definition";
  }
  if (/\b(list|name the|enumerate|mention the)\b/i.test(q)) {
    return "list";
  }
  if (/\b(describe in detail|elaborate on)\b/i.test(q)) {
    return "describe";
  }
  if (/\b(short note|brief note|briefly explain)\b/i.test(q)) {
    return "short answer";
  }
  if (/\b(explain in detail|comprehensive explanation)\b/i.test(q)) {
    return "long answer";
  }
  return "explain";
}

// ── Key-Point & Entity Extraction (Task 5) ───────────────────────────────────
export function extractQuestionKeyPoints(question: string): string[] {
  const words = question
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(w => w.length > 2 && !STOP_WORDS.has(w));

  const keyPoints: string[] = [];
  const qLower = question.toLowerCase();

  // Domain entity mapping
  if (qLower.includes("addressing mode")) {
    keyPoints.push("addressing mode", "effective address", "immediate", "register", "direct", "indirect", "indexed", "operand");
  } else if (qLower.includes("k-map") || qLower.includes("karnaugh")) {
    keyPoints.push("karnaugh map", "boolean minimization", "sop", "pos", "gray code", "minterms", "grouping");
  } else if (qLower.includes("normalization")) {
    keyPoints.push("normalization", "functional dependency", "1nf", "2nf", "3nf", "bcnf", "candidate key");
  } else if (qLower.includes("scheduling") || qLower.includes("round robin") || qLower.includes("fcfs")) {
    keyPoints.push("cpu scheduling", "turnaround time", "waiting time", "gantt chart", "fcfs", "sjf", "round robin");
  } else if (qLower.includes("binary search tree") || qLower.includes("bst")) {
    keyPoints.push("binary search tree", "inorder", "preorder", "postorder", "insertion", "deletion", "traversal");
  } else if (qLower.includes("osi") || qLower.includes("7 layer")) {
    keyPoints.push("osi model", "7 layers", "physical", "data link", "network", "transport", "pdu", "encapsulation");
  } else if (qLower.includes("8051")) {
    keyPoints.push("8051", "microcontroller", "harvard architecture", "timers", "ports", "interrupts", "sfr");
  } else if (qLower.includes("arm")) {
    keyPoints.push("arm", "cortex", "registers", "cpsr", "barrel shifter", "load store", "pipeline");
  } else if (qLower.includes("machine learning") || qLower.includes("ml")) {
    keyPoints.push("machine learning", "supervised", "unsupervised", "reinforcement", "gradient descent");
  } else if (qLower.includes("cloud")) {
    keyPoints.push("cloud computing", "iaas", "paas", "saas", "public cloud", "private cloud", "virtualization");
  }

  for (const w of words) {
    if (!keyPoints.includes(w)) keyPoints.push(w);
  }

  return keyPoints.slice(0, 12);
}

// ── Ambiguity Detection (Task 24 & 25) ─────────────────────────────────────────
export function detectAmbiguity(question: string, subjectCode?: string): { isAmbiguous: boolean; reason?: string } {
  const clean = question.trim().toLowerCase().replace(/[^a-z0-9\s]/g, "");
  const words = clean.split(/\s+/).filter(Boolean);

  // Extremely brief queries without subject context
  const ambiguousKeywords = [
    "architecture", "scheduling", "pipeline", "addressing", "clustering",
    "tree", "stack", "queue", "cache", "interrupts", "memory"
  ];

  if ((!subjectCode || subjectCode === "GENERAL") && words.length <= 3) {
    for (const kw of ambiguousKeywords) {
      if (clean === kw || clean === `explain ${kw}` || clean === `what is ${kw}`) {
        return {
          isAmbiguous: true,
          reason: `The term "${kw}" is taught across multiple VTU subjects. Please specify the subject or full topic name.`,
        };
      }
    }
  }

  return { isAmbiguous: false };
}

// ── Main Question Analyzer (Task 2) ───────────────────────────────────────────
export function analyzeQuestion(
  question: string,
  userSubject?: string,
  userModule?: number,
  userMarks?: number
): QuestionAnalysis {
  const qType = classifyQuestionType(question);
  const qLower = question.toLowerCase();

  // 1. Resolve canonical subject and module
  const resolvedSubject = resolveSubjectCode(question, userSubject);
  const detectedModule = resolveModuleNumber(resolvedSubject, question, userModule);

  // 2. Requirements detection
  const requiresExample = /\b(example|examples|illustration|instance|sample)\b/i.test(qLower) ||
    ["explain", "compare", "differentiate", "numerical"].includes(qType);

  const requiresDiagram = /\b(diagram|sketch|draw|circuit|block diagram|pin diagram|neat diagram|figure)\b/i.test(qLower) ||
    ["architecture", "diagram"].includes(qType);

  const diagramHelpful = requiresDiagram ||
    /\b(osi|pipeline|lifecycle|process state|scheduling|tree|k-map|8051|arm|normalization)\b/i.test(qLower);

  const diagramNotNeeded = !requiresDiagram && !diagramHelpful &&
    ["definition", "list", "numerical"].includes(qType);

  const requiresCalculation = ["numerical", "calculate"].includes(qType) ||
    /\b(calculate|compute|solve|find the value|evaluate)\b/i.test(qLower);

  const requiresCode = ["program", "algorithm"].includes(qType) ||
    /\b(program|c code|pseudo-code|pseudocode)\b/i.test(qLower);

  const requiresDerivation = qType === "derive" ||
    /\b(derive|derivation|prove that)\b/i.test(qLower);

  // 3. Depth & marks estimation
  let estimatedDepth: EstimatedDepth = "medium";
  if (["definition", "short answer", "list"].includes(qType)) {
    estimatedDepth = "short";
  } else if (["long answer", "architecture", "derive"].includes(qType) || (userMarks && userMarks >= 8)) {
    estimatedDepth = "deep";
  }

  const detectedMarks = userMarks ?? (
    estimatedDepth === "short" ? 4 :
    estimatedDepth === "deep" ? 10 : 8
  );

  // 4. Topic extraction
  let cleanTopic = question
    .replace(/\b(define|what is|explain|describe|discuss|differentiate between|difference between|list|draw|with neat sketch|with diagram|with examples?)\b/gi, "")
    .replace(/[?,.:;!]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!cleanTopic || cleanTopic.length < 3) cleanTopic = question;

  // 5. Ambiguity check
  const ambiguity = detectAmbiguity(question, userSubject);

  return {
    subject: resolvedSubject,
    module: detectedModule,
    topic: cleanTopic.slice(0, 80),
    questionType: qType,
    requiresExample,
    requiresDiagram,
    diagramHelpful,
    diagramNotNeeded,
    requiresCalculation,
    requiresCode,
    requiresDerivation,
    estimatedDepth,
    detectedMarks,
    keyPoints: extractQuestionKeyPoints(question),
    isAmbiguous: ambiguity.isAmbiguous,
    ambiguityReason: ambiguity.reason,
    cleanQuery: cleanTopic,
  };
}
