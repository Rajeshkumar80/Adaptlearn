import fs from "fs";
import path from "path";
import { resolveSubjectCode } from "./ragService";

const DATA_ROOT = path.resolve(__dirname, "../../../DATA");
const DIAGRAM_MAP_PATH = path.join(DATA_ROOT, "diagram_topic_map.json");

export interface DiagramDecision {
  requiresDiagram: boolean;
  diagramHelpful: boolean;
  diagramNotNeeded: boolean;
  useSourceDiagram: boolean;
  sourceDiagram?: VerifiedSourceDiagram;
  generatedDiagram?: GeneratedDiagramSpecification;
  validationStatus: "VALID" | "INVALID" | "NOT_APPLICABLE";
  validationReason?: string;
}

export interface VerifiedSourceDiagram {
  tag: string;
  url: string;
  topic: string;
  caption: string;
  page?: number;
  source: string;
  relevanceScore: number;
}

export interface GeneratedDiagramSpecification {
  title: string;
  diagramType: "flowchart" | "sequence" | "class" | "state";
  components: string[];
  connections: string[];
  mermaidCode: string;
  drawingGuide: string;
}

let cachedDiagramMap: Record<string, any[]> | null = null;
function getDiagramMap(): Record<string, any[]> {
  if (cachedDiagramMap) return cachedDiagramMap;
  try {
    if (fs.existsSync(DIAGRAM_MAP_PATH)) {
      cachedDiagramMap = JSON.parse(fs.readFileSync(DIAGRAM_MAP_PATH, "utf-8"));
    } else {
      cachedDiagramMap = {};
    }
  } catch {
    cachedDiagramMap = {};
  }
  return cachedDiagramMap || {};
}

// ── Diagram Requirement Detector (Task 13) ───────────────────────────────────
export function detectDiagramRequirement(question: string, qType?: string): {
  requiresDiagram: boolean;
  diagramHelpful: boolean;
  diagramNotNeeded: boolean;
} {
  const q = question.toLowerCase();

  const explicitlyRequested = /\b(diagram|sketch|draw|circuit|block diagram|pin diagram|neat sketch|figure|flowchart)\b/i.test(q);
  const isArchitectureOrModel = /\b(architecture|osi|pipeline|lifecycle|process state|8051|arm core|datapath|k-map|compiler|phases of a compiler)\b/i.test(q);

  const requiresDiagram = explicitlyRequested || qType === "architecture" || qType === "diagram";
  const diagramHelpful = requiresDiagram || isArchitectureOrModel || /\b(scheduling|normalization|binary search tree|tcp[\s/]*ip)\b/i.test(q);
  const diagramNotNeeded = !requiresDiagram && !diagramHelpful && ["definition", "list", "numerical"].includes(qType || "");

  return { requiresDiagram, diagramHelpful, diagramNotNeeded };
}

// ── Verified Source Diagram Retrieval (Task 14 & 15) ─────────────────────────
export function retrieveSourceDiagram(
  subjectCode: string,
  query: string,
  moduleNumber?: number
): VerifiedSourceDiagram | null {
  const map = getDiagramMap();
  const effectiveSubject = resolveSubjectCode(query, subjectCode);
  const entries: any[] = map[effectiveSubject] ?? [];
  if (!entries.length) return null;

  const qLower = query.toLowerCase();
  const qWords = qLower.replace(/[^a-z0-9]/g, " ").split(/\s+/).filter(w => w.length > 2);

  let bestMatch: any = null;
  let highestScore = 0;

  for (const item of entries) {
    let score = 0;
    const topic = String(item.topic || "").toLowerCase();
    const caption = String(item.caption || "").toLowerCase();
    const keywords: string[] = Array.isArray(item.keywords) ? item.keywords : [];

    for (const w of qWords) {
      if (topic.includes(w)) score += 12;
      if (caption.includes(w)) score += 6;
      if (keywords.some(k => k.toLowerCase().includes(w))) score += 8;
    }

    if (moduleNumber && item.module === moduleNumber) score += 6;

    // Exact topic boost
    if (qLower.includes("arm") && topic.includes("arm")) score += 20;
    if (qLower.includes("8051") && (topic.includes("8051") || caption.includes("8051"))) score += 20;
    if (qLower.includes("osi") && (topic.includes("osi") || caption.includes("osi"))) score += 20;

    if (score > highestScore && score >= 24) {
      highestScore = score;
      bestMatch = item;
    }
  }

  if (!bestMatch) return null;

  return {
    tag: String(bestMatch.tag || `${effectiveSubject}-diagram`),
    url: String(bestMatch.url || ""),
    topic: String(bestMatch.topic || ""),
    caption: String(bestMatch.caption || "").slice(0, 200),
    source: String(bestMatch.file || `${effectiveSubject} Notes`),
    relevanceScore: Math.min(1.0, highestScore / 50),
  };
}

// ── Structured Fallback Diagram Generator (Task 16 & 17) ─────────────────────
export function generateStructuredDiagramSpecification(
  topic: string,
  verifiedConcepts: string[],
  question: string
): GeneratedDiagramSpecification {
  const qLower = question.toLowerCase();

  // 1. Database Normalization
  if (/\b(normalization|1nf|2nf|3nf|bcnf)\b/i.test(qLower)) {
    return {
      title: "Database Normalization Decomposition Hierarchy",
      diagramType: "flowchart",
      components: ["Unnormalized Form (UNF)", "1st Normal Form (1NF)", "2nd Normal Form (2NF)", "3rd Normal Form (3NF)", "BCNF"],
      connections: [
        "UNF -->|Atomic Values| 1NF",
        "1NF -->|Remove Partial Dependencies| 2NF",
        "2NF -->|Remove Transitive Dependencies| 3NF",
        "3NF -->|Determinant is Superkey| BCNF"
      ],
      mermaidCode: `flowchart TD\n  UNF["Unnormalized Form (UNF)"] -->|Atomic Values| N1["1NF: Eliminate Repeating Groups"]\n  N1 -->|Remove Partial Dependencies| N2["2NF: Full Functional Dependency"]\n  N2 -->|Remove Transitive Dependencies| N3["3NF: Non-key Independent"]\n  N3 -->|Superkey Determinant| BCNF["Boyce-Codd Normal Form (BCNF)"]`,
      drawingGuide: "Draw 5 vertical sequential boxes from UNF down to BCNF, clearly labeling the functional dependency rule on each arrow."
    };
  }

  // 2. Addressing Modes
  if (/\b(addressing\s+modes?|addressing\s+mode)\b/i.test(qLower)) {
    return {
      title: "Effective Address (EA) Generation Model",
      diagramType: "flowchart",
      components: ["Instruction Register", "Immediate Mode", "Register Mode", "Direct Mode", "Indirect Mode", "Main Memory"],
      connections: [
        "IR --> Immediate",
        "IR --> Register",
        "IR --> Direct",
        "IR --> Indirect",
        "Direct --> Main Memory",
        "Indirect --> Main Memory"
      ],
      mermaidCode: `flowchart TD\n  IR["Instruction Register (Opcode + Mode + Addr)"] --> IMM["Immediate: Operand inside Instruction"]\n  IR --> REG["Register: Operand inside CPU Register R"]\n  IR --> DIR["Direct: EA = Address Field A"]\n  IR --> IND["Indirect: EA = Contents of Register (R)"]\n  DIR --> MEM["Main Memory Access"]\n  IND --> MEM`,
      drawingGuide: "Draw the instruction register at the top branching into 4 addressing modes, with Direct and Indirect pointing to memory."
    };
  }

  // 3. Phases of a Compiler / Compiler Architecture
  if (/\b(compiler|phases of a compiler|compiler phases|lexical analysis)\b/i.test(qLower)) {
    return {
      title: "Phases of a Compiler Architecture",
      diagramType: "flowchart",
      components: [
        "Source Program",
        "Lexical Analysis (Scanner)",
        "Syntax Analysis (Parser)",
        "Semantic Analysis",
        "Intermediate Code Generation",
        "Code Optimization",
        "Code Generation",
        "Target Machine Code",
        "Symbol Table Management",
        "Error Handler"
      ],
      connections: [
        "Source --> Lexical Analysis",
        "Lexical Analysis --> Syntax Analysis",
        "Syntax Analysis --> Semantic Analysis",
        "Semantic Analysis --> Intermediate Code Generation",
        "Intermediate Code Generation --> Code Optimization",
        "Code Optimization --> Code Generation",
        "Code Generation --> Target Machine Code",
        "Phases <--> Symbol Table",
        "Phases -.-> Error Handler"
      ],
      mermaidCode: `flowchart TD\n  SRC["Source Program"] --> LA["1. Lexical Analysis (Scanner)"]\n  LA -->|Token Stream| SA["2. Syntax Analysis (Parser)"]\n  SA -->|Syntax Tree| SEM["3. Semantic Analysis"]\n  SEM -->|Decorated AST| ICG["4. Intermediate Code Generation"]\n  ICG -->|Three-Address Code| CO["5. Code Optimization"]\n  CO -->|Optimized IR| CG["6. Code Generation"]\n  CG --> TGT["Target Machine Code"]\n  subgraph Support ["Cross-Phase Support"]\n    ST["Symbol Table Management"]\n    EH["Error Handler"]\n  end\n  LA <--> ST\n  SA <--> ST\n  SEM <--> ST\n  ICG <--> ST\n  CO <--> ST\n  CG <--> ST\n  LA -.-> EH\n  SA -.-> EH\n  SEM -.-> EH\n  ICG -.-> EH\n  CO -.-> EH\n  CG -.-> EH`,
      drawingGuide: "Draw 6 sequential rectangular boxes vertically from Lexical Analysis down to Code Generation. On the side, draw Symbol Table Management and Error Handler boxes connected to every phase."
    };
  }

  // Default dynamic pipeline
  const comps = verifiedConcepts.slice(0, 4);
  const nodes = comps.length >= 2 ? comps : ["Input Parameter Ingestion", "Processing & Protocol State", "Output Dispatch"];
  const mermaidLines = nodes.map((c, i) => `  N${i + 1}["${i + 1}. ${c.replace(/["\n]/g, "")}"]`);
  const connLines: string[] = [];
  for (let i = 0; i < nodes.length - 1; i++) {
    connLines.push(`N${i + 1} --> N${i + 2}`);
  }

  return {
    title: `${topic} Architectural & Operational Flow`,
    diagramType: "flowchart",
    components: nodes,
    connections: connLines,
    mermaidCode: `flowchart TD\n${mermaidLines.join("\n")}\n  ${connLines.join(" --> ")}`,
    drawingGuide: `Draw ${nodes.length} rectangular boxes connected sequentially by directional arrows from step 1 to step ${nodes.length}.`
  };
}

// ── Diagram Validator (Task 18) ──────────────────────────────────────────────
export function validateDiagramSpecification(
  spec: GeneratedDiagramSpecification,
  topic: string
): { isValid: boolean; reason?: string } {
  if (!spec.mermaidCode || spec.mermaidCode.length < 20) {
    return { isValid: false, reason: "Mermaid code is empty or too short." };
  }
  if (!spec.components || spec.components.length < 2) {
    return { isValid: false, reason: "Diagram specification contains fewer than 2 valid components." };
  }
  if (!spec.mermaidCode.includes("-->")) {
    return { isValid: false, reason: "Diagram lacks directional connections between nodes." };
  }
  if (/\b(compiler|phases of a compiler)\b/i.test(topic)) {
    const hasCompilerComponent = spec.components.some(c =>
      /\b(lexical|syntax|semantic|intermediate|code gen|optimizer|symbol table|compiler)\b/i.test(c)
    );
    if (!hasCompilerComponent) {
      return { isValid: false, reason: "Diagram lacks compiler phase components." };
    }
    const hasUnrelatedTerm = spec.components.some(c =>
      /\b(virtual machine|arm|osi|8051|http|normalization)\b/i.test(c)
    );
    if (hasUnrelatedTerm) {
      return { isValid: false, reason: "Diagram contains unrelated non-compiler components." };
    }
  }
  return { isValid: true };
}

// ── Complete Diagram Decision Pipeline (Tasks 13–18) ──────────────────────────
export function resolveDiagramDecision(
  subjectCode: string,
  question: string,
  topic: string,
  qType: string,
  moduleNumber?: number,
  verifiedConcepts: string[] = []
): DiagramDecision {
  const req = detectDiagramRequirement(question, qType);

  if (req.diagramNotNeeded) {
    return {
      ...req,
      useSourceDiagram: false,
      validationStatus: "NOT_APPLICABLE",
    };
  }

  // 1. Check verified VTU source diagram first (Task 15 Priority)
  const sourceDiagram = retrieveSourceDiagram(subjectCode, question, moduleNumber);
  if (sourceDiagram && sourceDiagram.relevanceScore >= 0.5) {
    return {
      ...req,
      useSourceDiagram: true,
      sourceDiagram,
      validationStatus: "VALID",
    };
  }

  // 2. Fallback to verified deterministic generated diagram specification (Task 16–18)
  const generatedDiagram = generateStructuredDiagramSpecification(topic, verifiedConcepts, question);
  const val = validateDiagramSpecification(generatedDiagram, topic);

  return {
    ...req,
    useSourceDiagram: false,
    generatedDiagram,
    validationStatus: val.isValid ? "VALID" : "INVALID",
    validationReason: val.reason,
  };
}
