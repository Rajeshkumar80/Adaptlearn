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

  // 4. ER Diagrams & Attribute Types (BCS403 Module 1)
  if (/\b(er\s+diagram|er\s+model|entity\s+relationship|attribute\s+types?|company\s+er)\b/i.test(qLower)) {
    const isCompany = /\b(company|employee|department|project)\b/i.test(qLower);
    if (isCompany) {
      return {
        title: "Company Database Entity-Relationship (ER) Schema",
        diagramType: "flowchart",
        components: ["EMPLOYEE Entity", "WORKS_FOR Relationship", "DEPARTMENT Entity", "CONTROLS Relationship", "PROJECT Entity", "DEPENDENT Entity"],
        connections: [
          "EMPLOYEE --- WORKS_FOR",
          "WORKS_FOR --- DEPARTMENT",
          "DEPARTMENT --- CONTROLS",
          "CONTROLS --- PROJECT",
          "EMPLOYEE === DEPENDENTS_OF === DEPENDENT"
        ],
        mermaidCode: `flowchart TD\n  EMP["[Entity] EMPLOYEE (SSN, Name, Salary)"] --- WF{"<Relationship> WORKS_FOR (M:1)"}\n  WF --- DEPT["[Entity] DEPARTMENT (Dnumber, Dname)"]\n  DEPT --- CTRL{"<Relationship> CONTROLS (1:N)"}\n  CTRL --- PROJ["[Entity] PROJECT (Pnumber, Pname)"]\n  EMP === DEP_OF{{"<<Identifying Rel>> DEPENDENTS_OF"}} === DEP[["[[Weak Entity]] DEPENDENT (Name, Relationship)"]]`,
        drawingGuide: "Draw EMPLOYEE and DEPARTMENT entities in rectangles connected by WORKS_FOR diamond. Draw 1:N cardinality and link DEPENDENT weak entity with double lines."
      };
    }

    return {
      title: "Entity-Relationship (ER) Diagram & Attribute Representation",
      diagramType: "flowchart",
      components: [
        "Entity Set (Rectangle)",
        "Key Attribute (Underlined Oval)",
        "Simple/Atomic Attribute (Standard Oval)",
        "Composite Attribute (Divided Oval)",
        "Multivalued Attribute (Double Oval)",
        "Derived Attribute (Dashed Oval)",
        "Relationship (Diamond)"
      ],
      connections: [
        "Entity --- Key Attribute",
        "Entity --- Simple Attribute",
        "Entity --- Composite Attribute",
        "Entity --- Multivalued Attribute",
        "Entity --- Derived Attribute",
        "Entity --- Relationship"
      ],
      mermaidCode: `flowchart TD\n  E["[Entity Set: STUDENT]"] --- K(["Key: (USN)"]):::keyAttr\n  E --- S(["Simple: Gender"]):::stdAttr\n  E --- C(["Composite: Name"]):::compAttr\n  C --- F(["First_Name"])\n  C --- L(["Last_Name"])\n  E --- M((["Multivalued: {Phone_No}"]))\n  E --- D[/"Derived: Age (from DOB)"/]\n  E --- R{"Relationship: ENROLLED_IN"} --- C2["[Entity: COURSE]"]\n  classDef keyAttr stroke-width:3px;\n  classDef compAttr stroke-dasharray: 5 5;`,
      drawingGuide: "Draw the central Entity in a rectangle. Connect Key Attribute (underlined text in oval), Composite Attribute (branching ovals), Multivalued Attribute (double oval), and Derived Attribute (dashed oval)."
    };
  }

  // 5. OSI 7-Layer Reference Model (BCS502 Module 1)
  if (/\b(osi|osi\s+model|7\s+layer|iso[\s\-_]osi)\b/i.test(qLower)) {
    return {
      title: "ISO-OSI 7-Layer Reference Model Architecture",
      diagramType: "flowchart",
      components: [
        "Layer 7: Application Layer",
        "Layer 6: Presentation Layer",
        "Layer 5: Session Layer",
        "Layer 4: Transport Layer",
        "Layer 3: Network Layer",
        "Layer 2: Data Link Layer",
        "Layer 1: Physical Layer"
      ],
      connections: [
        "L7 --> L6 --> L5 --> L4 --> L3 --> L2 --> L1"
      ],
      mermaidCode: `flowchart TD\n  L7["Layer 7: Application (HTTP, DNS, SMTP) — User Interface"] --> L6["Layer 6: Presentation (SSL/TLS, ASCII) — Syntax & Encryption"]\n  L6 --> L5["Layer 5: Session (RPC, NetBIOS) — Dialog Control"]\n  L5 --> L4["Layer 4: Transport (TCP, UDP) — End-to-End Delivery & Ports"]\n  L4 --> L3["Layer 3: Network (IPv4, IPv6, Routers) — Logical Addressing & Routing"]\n  L3 --> L2["Layer 2: Data Link (Ethernet, Switches, MAC) — Framing & Error Control"]\n  L2 --> L1["Layer 1: Physical (Bits, Cables, Hubs) — Electrical & Physical Specs"]`,
      drawingGuide: "Draw 7 horizontal stacked rectangular layers labeled Layer 7 down to Layer 1, showing Data/Segment/Packet/Frame/Bit PDU progression."
    };
  }

  // 6. Process State Transition Model (BCS303 Module 2)
  if (/\b(process\s+state|process\s+transition|state\s+diagram\s+of\s+process)\b/i.test(qLower)) {
    return {
      title: "Operating System 5-State Process Model",
      diagramType: "state",
      components: ["New", "Ready", "Running", "Waiting (Blocked)", "Terminated"],
      connections: [
        "New --> Ready",
        "Ready --> Running",
        "Running --> Ready",
        "Running --> Waiting",
        "Waiting --> Ready",
        "Running --> Terminated"
      ],
      mermaidCode: `flowchart LR\n  NEW(["New"]) -->|Admitted| READY["Ready Queue"]\n  READY -->|Scheduler Dispatch| RUN["Running (CPU)"]\n  RUN -->|Interrupt / Time Slice Expired| READY\n  RUN -->|I/O or Event Wait| WAIT["Waiting / Blocked"]\n  WAIT -->|I/O Completion| READY\n  RUN -->|Exit| TERM(["Terminated"])`,
      drawingGuide: "Draw Ready and Running states in the center with bidirectional arrows for dispatch and interrupt. Draw Waiting below for I/O block, New on the left, and Terminated on the right."
    };
  }

  // 7. ARM Processor Architecture & Dataflow Model (BCS402 Module 5)
  if (/\b(arm\s+processor|arm\s+architecture|arm\s+core|arm\s+cortex|barrel\s+shifter)\b/i.test(qLower)) {
    return {
      title: "ARM Core Dataflow and Functional Architecture",
      diagramType: "flowchart",
      components: ["Instruction Decoder", "Register Bank (r0-r15)", "Barrel Shifter", "ALU", "Address Register", "Data Out / Data In"],
      connections: [
        "Instruction Decoder --> Register Bank",
        "Register Bank --> Barrel Shifter",
        "Barrel Shifter --> ALU",
        "ALU --> Address Register",
        "Address Register --> Memory Address Bus"
      ],
      mermaidCode: `flowchart TD\n  DEC["Instruction Decoder & Control Logic"] --> REGS["Register File (37 Registers: r0-r15, CPSR, SPSR)"]\n  REGS -->|Bus A| ALU["Arithmetic Logic Unit (ALU)"]\n  REGS -->|Bus B| BS["Barrel Shifter (32-bit Shift in Single Cycle)"]\n  BS --> ALU\n  ALU -->|Result Bus| REGS\n  ALU --> ADDR["Memory Address Register (MAR)"]\n  ADDR --> MAB["32-bit Memory Address Bus"]`,
      drawingGuide: "Draw the Register File feeding Bus A and Bus B. Bus B passes through the Barrel Shifter before joining Bus A at the ALU."
    };
  }

  // 8. 8051 Microcontroller Architecture Block Diagram (BCS402 Module 1)
  if (/\b(8051|8051\s+architecture|8051\s+block\s+diagram)\b/i.test(qLower)) {
    return {
      title: "8051 Microcontroller Internal Architecture Block Diagram",
      diagramType: "flowchart",
      components: ["CPU (ALU + Acc + B)", "128 Bytes On-Chip RAM", "4 KB On-Chip ROM", "Timers/Counters (Timer 0, Timer 1)", "4 Parallel I/O Ports (P0-P3)", "Full-Duplex UART", "Interrupt Controller"],
      connections: [
        "CPU <--> Internal Bus",
        "RAM <--> Internal Bus",
        "ROM <--> Internal Bus",
        "Timers <--> Internal Bus",
        "I/O Ports <--> Internal Bus",
        "UART <--> Internal Bus"
      ],
      mermaidCode: `flowchart TD\n  subgraph CORE ["8051 Processing Core"]\n    ALU["ALU + Accumulator (A) + Register B"]\n    PC["Program Counter (16-bit) + DPTR"]\n  end\n  BUS["8-bit Internal Data & Control Bus"]\n  RAM["128 Bytes Internal RAM + SFRs"]\n  ROM["4 KB On-Chip Flash/ROM"]\n  TIMERS["Timers / Counters (T0, T1)"]\n  PORTS["I/O Ports: Port 0, Port 1, Port 2, Port 3"]\n  SERIAL["Serial Data TXD/RXD (UART)"]\n  INT["Interrupt Controller (5 Sources, 2 Levels)"]\n  CORE <--> BUS\n  BUS <--> RAM\n  BUS <--> ROM\n  BUS <--> TIMERS\n  BUS <--> PORTS\n  BUS <--> SERIAL\n  BUS <--> INT`,
      drawingGuide: "Draw a central 8-bit internal bus. Connect the CPU core, 128B RAM, 4KB ROM, Timer 0/1, Interrupt control, and Ports P0-P3 as modular peripheral blocks attached to the bus."
    };
  }

  // 9. Deep Learning Convolutional Neural Network (BCS702 Module 3)
  if (/\b(cnn|convolutional\s+neural\s+network|convolutional\s+layer|pooling\s+layer)\b/i.test(qLower)) {
    return {
      title: "Convolutional Neural Network (CNN) Layer Architecture",
      diagramType: "flowchart",
      components: ["Input Image", "Conv2D Layer (Filters)", "ReLU Activation", "MaxPooling Layer", "Flatten Layer", "Fully Connected Dense", "Softmax Output"],
      connections: ["Input --> Conv2D --> ReLU --> MaxPool --> Conv2D_2 --> Flatten --> Dense --> Output"],
      mermaidCode: `flowchart LR\n  IN["Input Image (H x W x C)"] --> CONV1["Conv2D (Filters + Stride)"]\n  CONV1 --> RELU1["ReLU Activation: max(0, x)"]\n  RELU1 --> POOL1["Max Pooling (Spatial Subsampling 2x2)"]\n  POOL1 --> CONV2["Conv2D (Deep Feature Maps)"]\n  CONV2 --> FLAT["Flatten (1D Vector Transformation)"]\n  FLAT --> FC["Fully Connected Dense Layer"]\n  FC --> SOFT["Softmax Output (Class Probabilities)"]`,
      drawingGuide: "Draw an input image square transforming into smaller thicker rectangular feature map blocks after convolution, followed by 2x2 max-pooling subsampling, flattening to a 1D column vector, and class outputs."
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
