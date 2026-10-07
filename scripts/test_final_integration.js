/**
 * AdaptLearn Master Implementation — End-to-End Integration Test Suite
 * Covers Test Scenarios 1–10 from Master Prompt Sections 41–50:
 *   1. Addressing Modes (BCS302, 10 Marks, Grounded, No Filler)
 *   2. ARM Architecture (BCS402, 10 Marks, ARM Diagram, No 8051 mix)
 *   3. Normalization in DBMS (BCS403, 1NF/2NF/3NF/BCNF, Isolated)
 *   4. BFS Program & Complexity (BCS304, Code Pipeline, O(V+E))
 *   5. Out-of-Knowledge-Base (Honest Insufficient Context, Zero Hallucination)
 *   6. Cross-Subject Protection (Hardware vs OS/DBMS Isolation)
 *   7. 8051 Microcontroller Architecture & Diagram Consistency
 *   8. PYQ Retrieval from Real Exam Papers (No Hallucinated Years)
 *   9. Model Paper vs PYQ Distinction (Clean Segregation)
 *  10. Mark Depth Adaptation (2M, 5M, 10M, 15M Depth Scaling)
 */

const path = require("path");

const distBase = path.resolve(__dirname, "../backend/dist");
const { executeRAG, resolveSubjectCode, retrievePYQs } = require(path.join(distBase, "services/ragService"));
const { analyzeQuestion } = require(path.join(distBase, "services/questionAnalyzer"));
const { rerankCandidates, allocateDynamicContext } = require(path.join(distBase, "services/reranker"));
const { resolveDiagramDecision } = require(path.join(distBase, "services/diagramService"));
const { isCodeQuestion, resolveCodePipeline } = require(path.join(distBase, "services/codePipeline"));
const { sanitizeAndEnrichAnswer } = require(path.join(distBase, "services/answerSynthesizer"));
const { validateGrounding } = require(path.join(distBase, "services/groundingValidator"));

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
  const lower = (text || "").toLowerCase();
  return FORBIDDEN_FILLER.filter(f => lower.includes(f));
}

let passedCount = 0;
let failedCount = 0;
const testResults = [];

function recordTest(id, name, passed, details = "") {
  if (passed) {
    passedCount++;
    console.log(`  ✅ [PASS] ${id}: ${name}`);
    if (details) console.log(`     ${details}`);
  } else {
    failedCount++;
    console.error(`  ❌ [FAIL] ${id}: ${name}`);
    if (details) console.error(`     Error: ${details}`);
  }
  testResults.push({ id, name, passed, details });
}

console.log("==================================================================");
console.log("       ADAPTLEARN MASTER INTEGRATION TEST HARNESS (10 SCENARIOS)   ");
console.log("==================================================================\n");

// ── Test 1: Addressing Modes (BCS302, 10 Marks) ──────────────────────────────
console.log("--- Executing Test 1: Addressing Modes (Section 41) ---");
{
  const q = "Explain addressing modes with suitable examples for 10 marks";
  const analysis = analyzeQuestion(q, "BCS302");
  const rag = executeRAG(analysis.subject, q, analysis.module);
  const ranked = rerankCandidates(rag.detailedChunks, analysis);
  const dynamic = allocateDynamicContext(ranked, analysis);
  const candidate = sanitizeAndEnrichAnswer(
    { question: q, subject_code: analysis.subject, module: analysis.module, marks: 10, sections: [] },
    analysis.subject,
    q,
    dynamic.contextString,
    10
  );
  const validation = validateGrounding(candidate, dynamic.contextString, q, analysis.subject, candidate.topic);
  const filler = checkFiller(JSON.stringify(candidate));

  const ok = (
    analysis.subject === "BCS302" &&
    candidate.sections.length >= 4 &&
    filler.length === 0 &&
    validation.valid &&
    rag.hasContext
  );

  recordTest(
    "Test 1",
    "BCS302 Addressing Modes 10-Mark Answer",
    ok,
    `Subject=${analysis.subject}, Sections=${candidate.sections.length}, GroundingScore=${validation.groundingScore}, Filler=${filler.length}`
  );
}

// ── Test 2: ARM Architecture with Diagram (BCS402, 10 Marks) ─────────────────
console.log("\n--- Executing Test 2: ARM Architecture with Diagram (Section 42) ---");
{
  const q = "Explain ARM architecture with a neat diagram for 10 marks";
  const analysis = analyzeQuestion(q, "BCS402");
  const rag = executeRAG(analysis.subject, q, analysis.module);
  const diagramDecision = resolveDiagramDecision(
    analysis.subject,
    q,
    analysis.topic,
    analysis.questionType,
    analysis.module,
    analysis.keyPoints
  );

  const isArmSubject = analysis.subject === "BCS402";
  const diagramProvided = diagramDecision.requiresDiagram && (diagramDecision.useSourceDiagram || !!diagramDecision.generatedDiagram);
  const not8051 = !diagramDecision.sourceDiagram?.topic?.toLowerCase().includes("8051");

  recordTest(
    "Test 2",
    "BCS402 ARM Architecture & Diagram Isolation",
    isArmSubject && diagramProvided && not8051,
    `Subject=${analysis.subject}, DiagramNeeded=${diagramDecision.requiresDiagram}, IsNot8051=${not8051}`
  );
}

// ── Test 3: Normalization in DBMS (BCS403, Section 43) ─────────────────────────
console.log("\n--- Executing Test 3: Normalization in DBMS (Section 43) ---");
{
  const q = "Explain normalization in DBMS with examples";
  const analysis = analyzeQuestion(q, "BCS403");
  const rag = executeRAG(analysis.subject, q, analysis.module);
  const ranked = rerankCandidates(rag.detailedChunks, analysis);
  const dynamic = allocateDynamicContext(ranked, analysis);
  const candidate = sanitizeAndEnrichAnswer(
    { question: q, subject_code: analysis.subject, module: analysis.module, marks: 10, sections: [] },
    analysis.subject,
    q,
    dynamic.contextString,
    10
  );

  const contextLower = dynamic.contextString.toLowerCase();
  const hasNormTerms = contextLower.includes("normalization") || contextLower.includes("1nf") || contextLower.includes("2nf");
  const noHardwareContamination = !contextLower.includes("microcontroller") && !contextLower.includes("cpsr");

  recordTest(
    "Test 3",
    "BCS403 Normalization Domain Isolation",
    analysis.subject === "BCS403" && hasNormTerms && noHardwareContamination,
    `Subject=${analysis.subject}, HasNorm=${hasNormTerms}, NoHardwareContam=${noHardwareContamination}`
  );
}

// ── Test 4: BFS Program & Complexity (BCS304, Section 44) ────────────────────
console.log("\n--- Executing Test 4: BFS Program & Complexity (Section 44) ---");
{
  const q = "Write a BFS program and explain its complexity";
  const analysis = analyzeQuestion(q, "BCS304");
  const isCode = analysis.requiresCode && isCodeQuestion(q);
  const codeResp = isCode ? resolveCodePipeline(q) : null;

  const ok = (
    analysis.subject === "BCS304" &&
    isCode &&
    codeResp !== null &&
    codeResp.timeComplexity.includes("V + E") &&
    codeResp.sourceCode.length > 50
  );

  recordTest(
    "Test 4",
    "BCS304 BFS Program Pipeline & Complexity",
    ok,
    `CodeDetected=${isCode}, TimeComp=${codeResp?.timeComplexity}, CodeChars=${codeResp?.sourceCode?.length}`
  );
}

// ── Test 5: Out of Knowledge Base (Section 45) ─────────────────────────────────
console.log("\n--- Executing Test 5: Out of Knowledge Base Query (Section 45) ---");
{
  const q = "Explain quantum biological telepathy in underwater submarines";
  const analysis = analyzeQuestion(q, "BCS302");
  const rag = executeRAG(analysis.subject, q, analysis.module);
  const ranked = rerankCandidates(rag.detailedChunks, analysis);
  const dynamic = allocateDynamicContext(ranked, analysis);

  // Negative test passes if hasContext is false or confidence is NONE and no filler in context
  const ok = !rag.hasContext && dynamic.retrievalConfidence === "NONE" && checkFiller(dynamic.contextString).length === 0;

  recordTest(
    "Test 5",
    "Out-of-Syllabus Query Honest Reporting",
    ok,
    `HasContext=${rag.hasContext}, Confidence=${dynamic.retrievalConfidence}`
  );
}

// ── Test 6: Cross-Subject Protection (Section 46) ─────────────────────────────
console.log("\n--- Executing Test 6: Cross-Subject Protection (Section 46) ---");
{
  const q = "Explain addressing modes in DDCO";
  const analysis = analyzeQuestion(q, "BCS302");
  const rag = executeRAG(analysis.subject, q, analysis.module);

  let contaminated = false;
  for (const c of rag.detailedChunks) {
    if (c.sourceFile && (c.sourceFile.includes("BCS403") || c.sourceFile.includes("BCS502"))) {
      contaminated = true;
    }
  }

  recordTest(
    "Test 6",
    "Cross-Subject Barrier Verification",
    analysis.subject === "BCS302" && !contaminated && rag.hasContext,
    `Subject=${analysis.subject}, Contaminated=${contaminated}, Chunks=${rag.detailedChunks.length}`
  );
}

// ── Test 7: 8051 Microcontroller Architecture & Diagram (Section 47) ─────────
console.log("\n--- Executing Test 7: 8051 Architecture & Diagram (Section 47) ---");
{
  const q = "Explain 8051 architecture with labelled diagram";
  const analysis = analyzeQuestion(q, "BCS402");
  const diagramDecision = resolveDiagramDecision(
    analysis.subject,
    q,
    analysis.topic,
    analysis.questionType,
    analysis.module,
    analysis.keyPoints
  );

  const is8051 = (
    analysis.subject === "BCS402" &&
    diagramDecision.requiresDiagram &&
    (diagramDecision.sourceDiagram?.topic?.toLowerCase().includes("8051") ||
     diagramDecision.generatedDiagram?.title?.toLowerCase().includes("8051"))
  );

  recordTest(
    "Test 7",
    "8051 Microcontroller Architecture & Diagram Consistency",
    is8051,
    `Subject=${analysis.subject}, RequiresDiagram=${diagramDecision.requiresDiagram}, Title=${diagramDecision.sourceDiagram?.topic || diagramDecision.generatedDiagram?.title}`
  );
}

// ── Test 8: PYQ Retrieval Verification (Section 48) ───────────────────────────
console.log("\n--- Executing Test 8: PYQ Retrieval Verification (Section 48) ---");
{
  const q = "Explain addressing modes with examples";
  const pyqData = retrievePYQs("BCS302", q);

  const foundPyqs = pyqData.previousYearQuestions.length > 0;
  const hasRealPaperName = foundPyqs && pyqData.previousYearQuestions[0].paper.length > 5;

  // Negative PYQ search for fantasy topic
  const negPyq = retrievePYQs("BCS302", "superluminal warp core plasma injection");
  const negClean = negPyq.previousYearQuestions.length === 0;

  recordTest(
    "Test 8",
    "PYQ Retrieval from Real Exam Papers",
    foundPyqs && hasRealPaperName && negClean,
    `PYQsFound=${pyqData.previousYearQuestions.length}, TopPaper="${pyqData.previousYearQuestions[0]?.paper}", NegativeFound=${negPyq.previousYearQuestions.length}`
  );
}

// ── Test 9: Model Paper vs PYQ Distinction (Section 49) ───────────────────────
console.log("\n--- Executing Test 9: Model Paper vs PYQ Distinction (Section 49) ---");
{
  const q = "Explain addressing modes with examples";
  const pyqData = retrievePYQs("BCS302", q);

  const hasDistinctBadges = pyqData.pyqList.every(item => {
    if (item.isModelPaper) {
      return item.badge.includes("Model");
    } else {
      return item.badge.includes("Previous Year") || item.badge.includes("Important");
    }
  });

  const modelCount = pyqData.modelPaperQuestions.length;
  const pyqCount = pyqData.previousYearQuestions.length;

  recordTest(
    "Test 9",
    "Model Paper vs Previous Year Question Segregation",
    hasDistinctBadges && (modelCount > 0 || pyqCount > 0),
    `DistinctBadges=${hasDistinctBadges}, ModelCount=${modelCount}, PYQCount=${pyqCount}`
  );
}

// ── Test 10: Mark Depth Adaptation (Section 50) ───────────────────────────────
console.log("\n--- Executing Test 10: Mark Depth Adaptation (Section 50) ---");
{
  const q = "Explain machine learning types";
  const ans2M = sanitizeAndEnrichAnswer(
    { question: q, subject_code: "BCS501", module: 1, marks: 2, sections: [] },
    "BCS501",
    q,
    "",
    2
  );
  const ans5M = sanitizeAndEnrichAnswer(
    { question: q, subject_code: "BCS501", module: 1, marks: 5, sections: [] },
    "BCS501",
    q,
    "",
    5
  );
  const ans10M = sanitizeAndEnrichAnswer(
    { question: q, subject_code: "BCS501", module: 1, marks: 10, sections: [] },
    "BCS501",
    q,
    "",
    10
  );
  const ans15M = sanitizeAndEnrichAnswer(
    { question: q, subject_code: "BCS501", module: 1, marks: 15, sections: [] },
    "BCS501",
    q,
    "",
    15
  );

  const depthProgression = (
    ans2M.sections.length === 2 &&
    ans5M.sections.length === 3 &&
    ans10M.sections.length === 4 &&
    ans15M.sections.length === 6
  );

  recordTest(
    "Test 10",
    "Mark-Based Section Depth Adaptation (2M, 5M, 10M, 15M)",
    depthProgression,
    `2M=${ans2M.sections.length} sections, 5M=${ans5M.sections.length} sections, 10M=${ans10M.sections.length} sections, 15M=${ans15M.sections.length} sections`
  );
}

console.log("\n==================================================================");
console.log(`  FINAL SCORE: ${passedCount}/${passedCount + failedCount} TESTS PASSED (${Math.round((passedCount / (passedCount + failedCount)) * 100)}%)`);
console.log("==================================================================");

if (failedCount > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
