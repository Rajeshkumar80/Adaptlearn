/**
 * AdaptLearn — Concept Completeness Check & Targeted Retrieval Loop
 * Fulfills Master Specification Sections 24, 25, 46, 50, 51.
 * Ensures the system does not miss required sub-concepts before LLM generation.
 */

export interface CompletenessResult {
  isComplete: boolean;
  coverageRatio: number;
  expectedConcepts: string[];
  matchedConcepts: string[];
  missingConcepts: string[];
  targetedSubtopicQueries: string[];
}

const EXPECTED_DOMAIN_CONCEPTS: Record<string, string[]> = {
  "er diagram": [
    "entity",
    "relationship",
    "attributes",
    "simple attribute",
    "composite attribute",
    "multivalued attribute",
    "derived attribute",
    "key attribute"
  ],
  "er model": [
    "entity set",
    "relationship set",
    "attributes",
    "cardinality",
    "participation",
    "weak entity"
  ],
  "addressing mode": [
    "immediate",
    "register",
    "direct",
    "indirect",
    "displacement",
    "effective address"
  ],
  "normalization": [
    "1nf",
    "2nf",
    "3nf",
    "bcnf",
    "functional dependency",
    "partial dependency",
    "transitive dependency"
  ],
  "compiler": [
    "lexical",
    "syntax",
    "semantic",
    "intermediate code",
    "optimization",
    "code generation",
    "symbol table"
  ],
  "phases of a compiler": [
    "lexical analyzer",
    "syntax analyzer",
    "semantic analyzer",
    "intermediate code",
    "code optimizer",
    "code generator",
    "symbol table"
  ],
  "osi": [
    "physical",
    "data link",
    "network",
    "transport",
    "session",
    "presentation",
    "application"
  ],
  "8051": [
    "alu",
    "accumulator",
    "registers",
    "program counter",
    "dptr",
    "parallel ports",
    "timers",
    "interrupts",
    "ram"
  ],
  "arm": [
    "cortex",
    "registers",
    "cpsr",
    "spsr",
    "barrel shifter",
    "alu",
    "pipeline"
  ],
  "cpu scheduling": [
    "fcfs",
    "sjf",
    "round robin",
    "priority",
    "waiting time",
    "turnaround time"
  ],
  "round robin": [
    "time quantum",
    "preemption",
    "ready queue",
    "context switch",
    "turnaround time"
  ],
  "binary search tree": [
    "root",
    "left subtree",
    "right subtree",
    "inorder traversal",
    "insertion",
    "search"
  ],
  "cnn": [
    "convolution",
    "filter",
    "kernel",
    "stride",
    "pooling",
    "feature map",
    "dense layer"
  ],
  "blockchain": [
    "distributed ledger",
    "hash function",
    "block header",
    "proof of work",
    "consensus",
    "smart contract"
  ],
  "dfa": [
    "transition function",
    "alphabet",
    "states",
    "start state",
    "accepting state",
    "language"
  ],
  "turing machine": [
    "tape",
    "read write head",
    "transition function",
    "halting state",
    "instantaneous description"
  ],
  "pushdown automata": [
    "stack",
    "push",
    "pop",
    "instantaneous description",
    "final state",
    "empty stack"
  ],
  "cryptography": [
    "plaintext",
    "ciphertext",
    "symmetric cipher",
    "public key",
    "encryption",
    "decryption",
    "digital signature"
  ],
  "rsa": [
    "public key",
    "private key",
    "prime numbers",
    "modulus",
    "totient",
    "encryption",
    "decryption"
  ],
  "cloud computing": [
    "iaas",
    "paas",
    "saas",
    "virtualization",
    "hypervisor",
    "scalability",
    "service model"
  ],
  "machine learning": [
    "supervised learning",
    "unsupervised learning",
    "training data",
    "features",
    "loss function",
    "classification",
    "regression"
  ],
  "parallel computing": [
    "speedup",
    "amdahl's law",
    "shared memory",
    "distributed memory",
    "threads",
    "mpi",
    "openmp"
  ]
};

export interface GoalState {
  subject: string;
  topic: string;
  intent: string;
  source_type: "NOTES" | "TEXTBOOK" | "PYQ" | "MODEL_PAPER" | "QUESTION_BANK" | "DIAGRAM" | "GENERAL";
  required_output: "questions" | "explanation" | "definition" | "comparison" | "diagram" | "chat";
  requires_diagram: boolean;
  requires_explanation: boolean;
  min_coverage_score: number;
}

export function defineGoalState(
  query: string,
  subjectCode: string,
  topic: string,
  intent: string
): GoalState {
  const qLower = query.toLowerCase();
  const requiresDiagram = intent === "DIAGRAM" || qLower.includes("diagram") || qLower.includes("sketch") || qLower.includes("architecture");
  
  let source_type: GoalState["source_type"] = "NOTES";
  let required_output: GoalState["required_output"] = "explanation";
  
  if (intent === "PYQ") {
    source_type = "PYQ";
    required_output = "questions";
  } else if (intent === "MODEL_PAPER") {
    source_type = "MODEL_PAPER";
    required_output = "questions";
  } else if (intent === "QUESTION_BANK") {
    source_type = "QUESTION_BANK";
    required_output = "questions";
  } else if (intent === "DEFINITION") {
    source_type = "NOTES";
    required_output = "definition";
  } else if (intent === "COMPARISON") {
    source_type = "NOTES";
    required_output = "comparison";
  } else if (intent === "DIAGRAM") {
    source_type = "DIAGRAM";
    required_output = "diagram";
  }
  
  return {
    subject: subjectCode,
    topic,
    intent,
    source_type,
    required_output,
    requires_diagram: requiresDiagram,
    requires_explanation: required_output === "explanation" || required_output === "definition" || required_output === "comparison",
    min_coverage_score: 0.5
  };
}

export function evaluateGoalState(
  goal: GoalState,
  completeness: CompletenessResult,
  hasDiagram: boolean,
  hasRetrievedEvidence: boolean
): { achieved: boolean; reason: string } {
  if (goal.source_type === "PYQ" || goal.source_type === "MODEL_PAPER" || goal.source_type === "QUESTION_BANK") {
    return {
      achieved: hasRetrievedEvidence,
      reason: hasRetrievedEvidence ? "Exam questions successfully retrieved and formatted." : "Missing exam question records for requested topic."
    };
  }
  
  if (goal.requires_diagram && !hasDiagram) {
    return {
      achieved: false,
      reason: "Question specifically requires a diagram but visual context was not found."
    };
  }
  
  if (!completeness.isComplete) {
    return {
      achieved: false,
      reason: `Concept coverage ratio (${Math.round(completeness.coverageRatio * 100)}%) below threshold. Missing: ${completeness.missingConcepts.join(", ")}`
    };
  }
  
  return {
    achieved: true,
    reason: "Goal state fully satisfied with verified grounding and complete concept coverage."
  };
}

export function evaluateConceptCompleteness(
  topic: string,
  retrievedCombinedText: string
): CompletenessResult {
  const tLower = topic.toLowerCase();
  const textLower = retrievedCombinedText.toLowerCase();

  // Find best matching domain entity
  let matchedDomainKey: string | null = null;
  for (const key of Object.keys(EXPECTED_DOMAIN_CONCEPTS)) {
    if (tLower.includes(key) || key.includes(tLower)) {
      matchedDomainKey = key;
      break;
    }
  }

  if (!matchedDomainKey) {
    return {
      isComplete: true,
      coverageRatio: 1.0,
      expectedConcepts: [],
      matchedConcepts: [],
      missingConcepts: [],
      targetedSubtopicQueries: [],
    };
  }

  const expected = EXPECTED_DOMAIN_CONCEPTS[matchedDomainKey];
  const matched: string[] = [];
  const missing: string[] = [];

  for (const concept of expected) {
    if (textLower.includes(concept.toLowerCase())) {
      matched.push(concept);
    } else {
      missing.push(concept);
    }
  }

  const coverageRatio = matched.length / expected.length;
  // Complete if at least 50% of expected concepts are represented in the combined context
  const isComplete = coverageRatio >= 0.5 || missing.length <= 1;

  const targetedSubtopicQueries = missing.slice(0, 3).map(m => `${topic} ${m}`);

  return {
    isComplete,
    coverageRatio,
    expectedConcepts: expected,
    matchedConcepts: matched,
    missingConcepts: missing,
    targetedSubtopicQueries,
  };
}
