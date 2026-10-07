const { executeRAG, resolveSubjectCode } = require('../backend/dist/services/ragService.js');
const { sanitizeAndEnrichAnswer } = require('../backend/dist/services/answerSynthesizer.js');
const { validateGrounding } = require('../backend/dist/services/groundingValidator.js');
const { detectQuestionType } = require('../backend/dist/routes/ai.js');

const FORBIDDEN_FILLER = [
  "structural modularity",
  "deterministic control",
  "resource optimization",
  "initialization & ingestion",
  "algorithmic transformation",
  "integrity verification",
  "dispatch & persistence",
  "parcel sorting hub",
  "scalable distributed servers and cloud backends"
];

function checkFiller(text) {
  const lower = text.toLowerCase();
  const found = [];
  for (const f of FORBIDDEN_FILLER) {
    if (lower.includes(f)) found.push(f);
  }
  return found;
}

const testCases = [
  {
    id: "Test 1 (Task 18)",
    name: "BCS302 Addressing Modes (Primary Failure Case)",
    question: "Explain the addressing modes of 8086 with examples",
    subjectCode: "BCS302",
    moduleNumber: 3,
    expectedSubject: "BCS302",
    requiredKeywords: ["immediate", "register", "direct", "indirect"],
  },
  {
    id: "Test 2 (Task 19)",
    name: "BCS302 K-Map Minimization",
    question: "Explain Karnaugh Map K-map simplification and minimization with example",
    subjectCode: "BCS302",
    moduleNumber: 1,
    expectedSubject: "BCS302",
    requiredKeywords: ["karnaugh", "map"],
  },
  {
    id: "Test 3 (Task 19)",
    name: "BCS402 ARM Processor Architecture",
    question: "Explain ARM processor architecture, registers, and CPSR",
    subjectCode: "BCS402",
    moduleNumber: 5,
    expectedSubject: "BCS402",
    requiredKeywords: ["arm", "register"],
  },
  {
    id: "Test 4 (Task 19)",
    name: "BCS402 8051 Microcontroller",
    question: "Explain 8051 microcontroller architecture, timers and addressing modes",
    subjectCode: "BCS402",
    moduleNumber: 1,
    expectedSubject: "BCS402",
    requiredKeywords: ["8051", "timer"],
  },
  {
    id: "Test 5 (Task 19)",
    name: "BCS403 Database Normalization",
    question: "Explain database normalization 1NF, 2NF, 3NF and BCNF with examples",
    subjectCode: "BCS403",
    moduleNumber: 3,
    expectedSubject: "BCS403",
    requiredKeywords: ["normalization", "1nf", "2nf", "3nf"],
  },
  {
    id: "Test 6 (Task 19)",
    name: "BCS303 CPU Scheduling Algorithms",
    question: "Explain CPU scheduling algorithms FCFS, SJF, and Round Robin",
    subjectCode: "BCS303",
    moduleNumber: 2,
    expectedSubject: "BCS303",
    requiredKeywords: ["scheduling", "fcfs"],
  },
  {
    id: "Test 7 (Task 19)",
    name: "BCS304 Binary Search Tree",
    question: "Explain Binary Search Tree operations: insertion, deletion, and traversal",
    subjectCode: "BCS304",
    moduleNumber: 3,
    expectedSubject: "BCS304",
    requiredKeywords: ["binary search tree", "bst", "traversal"],
  },
  {
    id: "Test 8 (Task 19)",
    name: "BCS502 OSI 7-Layer Reference Model",
    question: "Explain OSI 7-layer reference model with functions of each layer",
    subjectCode: "BCS502",
    moduleNumber: 1,
    expectedSubject: "BCS502",
    requiredKeywords: ["osi", "layer"],
  },
  {
    id: "Test 9 (Task 20)",
    name: "Negative Test — Non-existent / Out-of-Syllabus Query",
    question: "Explain quantum biological telepathy in underwater submarines",
    subjectCode: "BCS302",
    moduleNumber: 1,
    expectedSubject: "BCS302",
    isNegative: true,
  },
  {
    id: "Test 10 (Task 21)",
    name: "Cross-Subject Contamination Test",
    question: "Explain addressing modes in DDCO",
    subjectCode: "BCS302",
    moduleNumber: 3,
    expectedSubject: "BCS302",
    disallowedSubjects: ["BCS402", "BCS403", "BCS502"],
  },
];

console.log("==================================================================");
console.log("       ADAPTLEARN PHASE 3: RUNTIME RAG INTEGRATION VERIFICATION   ");
console.log("==================================================================\n");

let passedCount = 0;
const results = [];

for (const t of testCases) {
  console.log(`--- Running: [${t.id}] ${t.name} ---`);

  // 1. Subject Resolution
  const resolvedSubject = resolveSubjectCode(t.question, t.subjectCode);
  const subjectOk = resolvedSubject === t.expectedSubject;

  // 2. Question-Type
  const qType = detectQuestionType(t.question);

  // 3. RAG Execution
  const ragResult = executeRAG(resolvedSubject, t.question, t.moduleNumber);

  // Negative test verification
  if (t.isNegative) {
    const hasContext = ragResult.hasContext && ragResult.retrievedChunks.length > 0;
    // For negative queries, context should be empty or extremely weak
    let negativePassed = !hasContext;
    if (hasContext) {
      // If some chunk matched purely by chance, check similarity score
      const topSim = ragResult.retrievedChunks[0]?.similarity || 0;
      negativePassed = topSim < 0.15;
    }

    const fillerFound = checkFiller(ragResult.structuredContext);
    const passed = negativePassed && fillerFound.length === 0;

    console.log(`  Subject Resolved: ${resolvedSubject} (${subjectOk ? "PASS" : "FAIL"})`);
    console.log(`  Context Chunks Found: ${ragResult.retrievedChunks.length} (HasContext: ${ragResult.hasContext})`);
    console.log(`  Negative Query Handled Properly: ${negativePassed ? "PASS" : "FAIL"}`);
    console.log(`  Generic Filler Found in Context: ${fillerFound.length === 0 ? "NONE (PASS)" : fillerFound.join(", ") + " (FAIL)"}`);
    console.log(`  Result: ${passed ? "PASSED" : "FAILED"}\n`);

    if (passed) passedCount++;
    results.push({ id: t.id, name: t.name, passed, details: { negativePassed, chunks: ragResult.retrievedChunks.length } });
    continue;
  }

  // Cross-Subject contamination verification
  if (t.disallowedSubjects) {
    let contaminated = false;
    for (const chunk of ragResult.detailedChunks || []) {
      for (const badSub of t.disallowedSubjects) {
        if (chunk.sourceFile && chunk.sourceFile.includes(badSub)) contaminated = true;
      }
    }
    const fillerFound = checkFiller(ragResult.structuredContext);
    const passed = subjectOk && !contaminated && fillerFound.length === 0 && ragResult.hasContext;

    console.log(`  Subject Resolved: ${resolvedSubject} (${subjectOk ? "PASS" : "FAIL"})`);
    console.log(`  Contamination Detected: ${contaminated ? "YES (FAIL)" : "NO (PASS)"}`);
    console.log(`  Generic Filler in Context: ${fillerFound.length === 0 ? "NONE (PASS)" : fillerFound.join(", ") + " (FAIL)"}`);
    console.log(`  Result: ${passed ? "PASSED" : "FAILED"}\n`);

    if (passed) passedCount++;
    results.push({ id: t.id, name: t.name, passed, details: { subjectOk, contaminated, hasContext: ragResult.hasContext } });
    continue;
  }

  // Positive test verification
  const contextSnippet = ragResult.structuredContext || ragResult.textbookExcerpt;
  const fillerInContext = checkFiller(contextSnippet);

  // Synthesize answer candidate
  const syntheticCandidate = {
    question: t.question,
    subject_code: resolvedSubject,
    module: ragResult.moduleNumber,
    marks: 10,
    sections: [],
  };

  const answer = sanitizeAndEnrichAnswer(
    syntheticCandidate,
    resolvedSubject,
    t.question,
    contextSnippet
  );

  const allAnswerText = (answer.sections || []).map(s => `${s.heading} ${s.text}`).join("\n");
  const fillerInAnswer = checkFiller(allAnswerText);

  // Check required technical keywords
  const textLower = (allAnswerText + " " + contextSnippet).toLowerCase();
  const missingKeywords = (t.requiredKeywords || []).filter(kw => !textLower.includes(kw.toLowerCase()));

  // Run grounding validation
  const validation = validateGrounding(
    answer,
    contextSnippet,
    t.question,
    resolvedSubject,
    answer.topic
  );

  const passed = (
    subjectOk &&
    ragResult.hasContext &&
    fillerInContext.length === 0 &&
    fillerInAnswer.length === 0 &&
    missingKeywords.length === 0
  );

  console.log(`  Subject Resolved: ${resolvedSubject} (${subjectOk ? "PASS" : "FAIL"})`);
  console.log(`  Detected Module: ${ragResult.moduleNumber} ("${ragResult.moduleTitle}")`);
  console.log(`  Context Available: ${ragResult.hasContext ? "YES" : "NO"} (${ragResult.retrievedChunks.length} chunks, ${contextSnippet.length} chars)`);
  console.log(`  Keywords Found: ${t.requiredKeywords.length - missingKeywords.length}/${t.requiredKeywords.length} (Missing: ${missingKeywords.length ? missingKeywords.join(", ") : "None"})`);
  console.log(`  Generic Filler in Context: ${fillerInContext.length === 0 ? "NONE (PASS)" : fillerInContext.join(", ") + " (FAIL)"}`);
  console.log(`  Generic Filler in Answer: ${fillerInAnswer.length === 0 ? "NONE (PASS)" : fillerInAnswer.join(", ") + " (FAIL)"}`);
  console.log(`  Sections Produced: ${answer.sections.length} (${answer.sections.map(s => s.type).join(", ")})`);
  console.log(`  Grounding Valid: ${validation.valid ? "YES" : "NO"} (Score: ${validation.groundingScore})`);
  console.log(`  Result: ${passed ? "PASSED" : "FAILED"}\n`);

  if (passed) passedCount++;
  results.push({
    id: t.id,
    name: t.name,
    passed,
    details: {
      subjectOk,
      hasContext: ragResult.hasContext,
      fillerCount: fillerInAnswer.length + fillerInContext.length,
      missingKeywords,
      groundingScore: validation.groundingScore,
      sectionsCount: answer.sections.length,
    }
  });
}

console.log("==================================================================");
console.log(`FINAL SCORE: ${passedCount}/${testCases.length} TESTS PASSED (${Math.round((passedCount / testCases.length) * 100)}%)`);
console.log("==================================================================");

if (passedCount === testCases.length) {
  process.exit(0);
} else {
  process.exit(1);
}
