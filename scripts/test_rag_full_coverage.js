const { executeRAG, resolveSubjectCode } = require('../backend/dist/services/ragService.js');
const { sanitizeAndEnrichAnswer } = require('../backend/dist/services/answerSynthesizer.js');
const { validateGrounding } = require('../backend/dist/services/groundingValidator.js');

const comprehensiveRagTests = [
  {
    name: "Sem 3: BCS301 Linear Algebra & Eigenvalues",
    subject: "BCS301",
    query: "Explain eigenvalues and eigenvectors of a matrix with mathematical steps",
    module: 1,
    requiredKeywords: ["eigenvalue", "matrix"],
  },
  {
    name: "Sem 3: BCS302 8086 Addressing Modes",
    subject: "BCS302",
    query: "Explain the addressing modes of 8086 microprocessor with examples",
    module: 3,
    requiredKeywords: ["immediate", "register"],
  },
  {
    name: "Sem 3: BCS303 CPU Scheduling Algorithms",
    subject: "BCS303",
    query: "Explain FCFS, SJF and Round Robin CPU scheduling with Gantt chart",
    module: 2,
    requiredKeywords: ["scheduling", "fcfs"],
  },
  {
    name: "Sem 3: BCS304 Binary Search Trees",
    subject: "BCS304",
    query: "Explain Binary Search Tree operations: insertion, deletion, and tree traversals",
    module: 4,
    requiredKeywords: ["binary search tree", "traversal"],
  },
  {
    name: "Sem 4: BCS401 Dynamic Programming Knapsack",
    subject: "BCS401",
    query: "Explain 0/1 Knapsack problem using dynamic programming with recurrence relation",
    module: 3,
    requiredKeywords: ["knapsack", "dynamic programming"],
  },
  {
    name: "Sem 4: BCS402 ARM Processor Architecture",
    subject: "BCS402",
    query: "Explain ARM processor architecture, register organization, and CPSR",
    module: 5,
    requiredKeywords: ["arm", "register"],
  },
  {
    name: "Sem 4: BCS403 Database Normalization 1NF to BCNF",
    subject: "BCS403",
    query: "Explain database normalization 1NF, 2NF, 3NF and BCNF with functional dependencies",
    module: 3,
    requiredKeywords: ["normalization", "1nf"],
  },
  {
    name: "Sem 5: BCS501 Software Engineering Agile Scrum",
    subject: "BCS501",
    query: "Explain Agile software development methodology and Scrum framework lifecycle",
    module: 1,
    requiredKeywords: ["agile", "scrum"],
  },
  {
    name: "Sem 5: BCS502 OSI 7-Layer Reference Model",
    subject: "BCS502",
    query: "Explain OSI 7-layer reference model with functions of each layer",
    module: 1,
    requiredKeywords: ["osi", "layer"],
  },
  {
    name: "Sem 5: BCS503 DFA and Regular Expressions",
    subject: "BCS503",
    query: "Explain Deterministic Finite Automata (DFA) transition function and state diagrams",
    module: 1,
    requiredKeywords: ["dfa", "automata"],
  },
  {
    name: "Sem 6: BCS601 Compiler Lexical Analysis",
    subject: "BCS601",
    query: "Explain the role of lexical analyzer and tokens in compiler design",
    module: 1,
    requiredKeywords: ["lexical", "token"],
  },
  {
    name: "Sem 6: BCS602 Machine Learning Supervised Learning",
    subject: "BCS602",
    query: "Explain supervised machine learning classification versus regression with examples",
    module: 1,
    requiredKeywords: ["supervised", "regression"],
  },
  {
    name: "Sem 7: BCS701 IoT Architecture & Edge Sensing",
    subject: "BCS701",
    query: "Explain IoT architecture layers and sensors with edge gateways",
    module: 1,
    requiredKeywords: ["iot", "sensor"],
  },
  {
    name: "Sem 7: BCS703 RSA Cryptography & Public Keys",
    subject: "BCS703",
    query: "Explain RSA public key encryption algorithm with key generation steps",
    module: 3,
    requiredKeywords: ["rsa", "key"],
  },
];

console.log("==================================================================");
console.log("       ADAPTLEARN: MULTI-SEMESTER RAG RETRIEVAL VERIFICATION       ");
console.log("==================================================================\n");

let passedCount = 0;
for (let i = 0; i < comprehensiveRagTests.length; i++) {
  const t = comprehensiveRagTests[i];
  const startTime = Date.now();

  const resolved = resolveSubjectCode(t.query, t.subject);
  const rag = executeRAG(resolved, t.query, t.module);
  const durationMs = Date.now() - startTime;

  const context = rag.structuredContext || rag.textbookExcerpt;
  const contextLower = context.toLowerCase();
  const missing = t.requiredKeywords.filter(kw => !contextLower.includes(kw.toLowerCase()));

  const passed = rag.hasContext && missing.length === 0 && rag.retrievedChunks.length > 0;
  if (passed) passedCount++;

  console.log(`[${i + 1}/${comprehensiveRagTests.length}] ${t.name}`);
  console.log(`    Subject: ${resolved} | Module: ${rag.moduleNumber} ("${rag.moduleTitle}")`);
  console.log(`    Chunks: ${rag.retrievedChunks.length} | Context Length: ${context.length} chars | Latency: ${durationMs}ms`);
  console.log(`    Keywords: ${t.requiredKeywords.length - missing.length}/${t.requiredKeywords.length} | Status: ${passed ? "PASS" : "FAIL"}`);
  console.log("");
}

console.log("==================================================================");
console.log(`RESULT: ${passedCount}/${comprehensiveRagTests.length} TESTS PASSED (${Math.round((passedCount / comprehensiveRagTests.length) * 100)}%)`);
console.log("==================================================================");

if (passedCount === comprehensiveRagTests.length) {
  process.exit(0);
} else {
  process.exit(1);
}
