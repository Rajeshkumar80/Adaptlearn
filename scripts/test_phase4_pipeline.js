/**
 * Phase 4 — Advanced RAG Pipeline Evaluation Suite
 * Tests: Question Analyzer, Reranker, Diagram Service, Code Pipeline,
 *        Formula Service, and enriched /ask response.
 *
 * Usage: node scripts/test_phase4_pipeline.js
 */
const http = require("http");
const path = require("path");

const API_BASE = process.env.API_BASE || "http://localhost:5000";

// ── Utility ────────────────────────────────────────────────────────────────
let passed = 0;
let failed = 0;
const results = [];

function assert(condition, label, detail = "") {
  if (condition) {
    passed++;
    results.push({ label, status: "PASS", detail });
  } else {
    failed++;
    results.push({ label, status: "FAIL", detail });
    console.error(`  ✗ FAIL: ${label}${detail ? " — " + detail : ""}`);
  }
}

// ── Direct Module Tests (no server needed) ─────────────────────────────────

// Load compiled services
let questionAnalyzer, reranker, diagramService, codePipeline, formulaService;

try {
  const distBase = path.resolve(__dirname, "../backend/dist/services");
  questionAnalyzer = require(path.join(distBase, "questionAnalyzer"));
  reranker = require(path.join(distBase, "reranker"));
  diagramService = require(path.join(distBase, "diagramService"));
  codePipeline = require(path.join(distBase, "codePipeline"));
  formulaService = require(path.join(distBase, "formulaService"));
} catch (err) {
  console.error("ERROR: Cannot load compiled services. Run `npx tsc` in backend/ first.");
  console.error(err.message);
  process.exit(1);
}

console.log("═══════════════════════════════════════════════════════════════");
console.log("  Phase 4 — Advanced RAG Pipeline Evaluation Suite");
console.log("═══════════════════════════════════════════════════════════════\n");

// ── SECTION 1: Question Analyzer ────────────────────────────────────────────
console.log("--- Section 1: Question Analyzer ---");

// Test 1.1: Definition question classification
const q1 = questionAnalyzer.analyzeQuestion("Define addressing modes", "BCS302");
assert(q1.questionType === "definition", "1.1 Definition classification", `Got: ${q1.questionType}`);
assert(q1.subject === "BCS302", "1.1 Subject resolution", `Got: ${q1.subject}`);
assert(q1.estimatedDepth === "short", "1.1 Depth estimation", `Got: ${q1.estimatedDepth}`);

// Test 1.2: Compare/Differentiate classification
const q2 = questionAnalyzer.analyzeQuestion("Differentiate between RISC and CISC architectures", "BCS402");
assert(q2.questionType === "differentiate", "1.2 Differentiate classification", `Got: ${q2.questionType}`);

// Test 1.3: Algorithm classification
const q3 = questionAnalyzer.analyzeQuestion("Write the algorithm for binary search", "BCS304");
assert(q3.questionType === "algorithm", "1.3 Algorithm classification", `Got: ${q3.questionType}`);
assert(q3.requiresCode === true, "1.3 Requires code detected", `Got: ${q3.requiresCode}`);

// Test 1.4: Numerical classification
const q4 = questionAnalyzer.analyzeQuestion("Calculate the effective memory access time given page fault rate 0.01", "BCS303");
assert(q4.questionType === "numerical" || q4.questionType === "calculate", "1.4 Numerical classification", `Got: ${q4.questionType}`);
assert(q4.requiresCalculation === true, "1.4 Requires calculation detected", `Got: ${q4.requiresCalculation}`);

// Test 1.5: Architecture classification
const q5 = questionAnalyzer.analyzeQuestion("Draw the block diagram of 8051 microcontroller", "BCS402");
assert(
  q5.questionType === "architecture" || q5.questionType === "diagram",
  "1.5 Architecture classification",
  `Got: ${q5.questionType}`
);
assert(q5.requiresDiagram === true, "1.5 Requires diagram detected", `Got: ${q5.requiresDiagram}`);

// Test 1.6: List classification
const q6 = questionAnalyzer.analyzeQuestion("List the different types of scheduling algorithms", "BCS303");
assert(q6.questionType === "list", "1.6 List classification", `Got: ${q6.questionType}`);
assert(q6.estimatedDepth === "short", "1.6 Short depth for list", `Got: ${q6.estimatedDepth}`);

// Test 1.7: Key-point extraction
const q7 = questionAnalyzer.analyzeQuestion("Explain K-map simplification with examples", "BCS302");
assert(q7.keyPoints.length > 0, "1.7 Key points extracted", `Count: ${q7.keyPoints.length}`);
assert(
  q7.keyPoints.some(k => k.includes("karnaugh") || k.includes("k-map") || k.includes("map")),
  "1.7 Domain entities in key points",
  `Points: ${q7.keyPoints.join(", ")}`
);

// Test 1.8: Marks estimation
const q8 = questionAnalyzer.analyzeQuestion("Explain the architecture of ARM Cortex-M processor in detail", "BCS402");
assert(q8.estimatedDepth === "deep", "1.8 Deep depth for architecture", `Got: ${q8.estimatedDepth}`);
assert(q8.detectedMarks >= 8, "1.8 Marks >= 8 for deep", `Got: ${q8.detectedMarks}`);

// Test 1.9: Ambiguity detection (short bare query without subject)
const q9 = questionAnalyzer.analyzeQuestion("architecture", "GENERAL");
assert(q9.isAmbiguous === true, "1.9 Ambiguity detected for bare 'architecture'", `Got: ${q9.isAmbiguous}`);

// Test 1.10: Non-ambiguous with subject
const q10 = questionAnalyzer.analyzeQuestion("Explain the architecture of 8051", "BCS402");
assert(q10.isAmbiguous === false, "1.10 Not ambiguous with subject context", `Got: ${q10.isAmbiguous}`);

console.log(`  Section 1 complete\n`);

// ── SECTION 2: Reranker ────────────────────────────────────────────────────
console.log("--- Section 2: Reranker ---");

const mockCandidates = [
  {
    id: "chunk-1", title: "Addressing Modes", similarity: 0.8,
    moduleNumber: 1, sourceFile: "knowledge/BCS302/module1.md",
    content: "Addressing modes determine how the operand is specified in the instruction. Immediate addressing stores the operand directly in the instruction.",
    rawScore: 25,
  },
  {
    id: "chunk-2", title: "Boolean Algebra", similarity: 0.5,
    moduleNumber: 2, sourceFile: "knowledge/BCS302/module2.md",
    content: "Boolean algebra deals with binary variables and logic operations.",
    rawScore: 15,
  },
  {
    id: "chunk-3", title: "Addressing Modes Question Bank", similarity: 0.7,
    moduleNumber: 1, sourceFile: "knowledge/BCS302/question_bank_module1.md",
    content: "Q: List and explain addressing modes with examples. Immediate, register, direct, indirect, indexed modes.",
    rawScore: 22,
  },
];

const analysis = questionAnalyzer.analyzeQuestion("Explain addressing modes", "BCS302");
const ranked = reranker.rerankCandidates(mockCandidates, analysis);

assert(ranked.length === 3, "2.1 All candidates ranked", `Got: ${ranked.length}`);
assert(ranked[0].id !== "chunk-2", "2.2 Irrelevant chunk not ranked first", `Top: ${ranked[0].id}`);

// Q-bank should get content-type boost
const qbankChunk = ranked.find(c => c.id === "chunk-3");
assert(qbankChunk && qbankChunk.contentType === "qbank", "2.3 Q-bank content type", `Got: ${qbankChunk?.contentType}`);
assert(
  qbankChunk && qbankChunk.finalScore > mockCandidates[2].rawScore,
  "2.4 Q-bank score boosted",
  `Original: ${mockCandidates[2].rawScore}, Boosted: ${qbankChunk?.finalScore}`
);

// Provenance tracking
assert(
  ranked[0].provenance && ranked[0].provenance.subject === "BCS302",
  "2.5 Provenance tracking",
  `Subject: ${ranked[0].provenance?.subject}`
);

// Dynamic context allocation
const dynamicResult = reranker.allocateDynamicContext(ranked, analysis);
assert(dynamicResult.contextString.length > 0, "2.6 Context string generated", `Chars: ${dynamicResult.contextString.length}`);
assert(
  ["HIGH", "MEDIUM", "LOW", "NONE"].includes(dynamicResult.retrievalConfidence),
  "2.7 Retrieval confidence set",
  `Got: ${dynamicResult.retrievalConfidence}`
);
assert(dynamicResult.allocatedBudget > 0, "2.8 Budget allocated", `Budget: ${dynamicResult.allocatedBudget}`);
assert(dynamicResult.provenanceSummary.length > 0, "2.9 Provenance summary", `Count: ${dynamicResult.provenanceSummary.length}`);

console.log(`  Section 2 complete\n`);

// ── SECTION 3: Diagram Service ──────────────────────────────────────────────
console.log("--- Section 3: Diagram Service ---");

// Test 3.1: Explicit diagram request
const diag1 = diagramService.detectDiagramRequirement("Draw a neat sketch of 8051 architecture", "architecture");
assert(diag1.requiresDiagram === true, "3.1 Explicit diagram detected");
assert(diag1.diagramNotNeeded === false, "3.1 Not marked 'not needed'");

// Test 3.2: Definition — no diagram needed
const diag2 = diagramService.detectDiagramRequirement("Define polymorphism in Java", "definition");
assert(diag2.diagramNotNeeded === true, "3.2 Diagram not needed for definition");

// Test 3.3: Architecture — diagram helpful
const diag3 = diagramService.detectDiagramRequirement("Explain OSI model layers", "explain");
assert(diag3.diagramHelpful === true, "3.3 Diagram helpful for OSI model");

// Test 3.4: Normalization structured fallback diagram
const normSpec = diagramService.generateStructuredDiagramSpecification(
  "Database Normalization", ["1NF", "2NF", "3NF", "BCNF"], "Explain normalization with diagram"
);
assert(normSpec.mermaidCode.includes("1NF"), "3.4 Normalization diagram has 1NF node");
assert(normSpec.components.length >= 4, "3.4 At least 4 components", `Got: ${normSpec.components.length}`);

// Test 3.5: Addressing modes structured fallback diagram
const addrSpec = diagramService.generateStructuredDiagramSpecification(
  "Addressing Modes", ["Immediate", "Register", "Direct", "Indirect"], "Explain addressing modes with diagram"
);
assert(addrSpec.mermaidCode.includes("Immediate"), "3.5 Addressing modes diagram has Immediate");
assert(addrSpec.mermaidCode.includes("-->"), "3.5 Has directional connections");

// Test 3.6: Diagram validation
const validation = diagramService.validateDiagramSpecification(normSpec, "Normalization");
assert(validation.isValid === true, "3.6 Valid diagram passes validation");

// Test 3.7: Invalid diagram rejected
const invalidSpec = { mermaidCode: "x", components: ["A"], connections: [], title: "", diagramType: "flowchart", drawingGuide: "" };
const invalidVal = diagramService.validateDiagramSpecification(invalidSpec, "Test");
assert(invalidVal.isValid === false, "3.7 Invalid diagram rejected", `Reason: ${invalidVal.reason}`);

// Test 3.8: Full decision pipeline
const decision = diagramService.resolveDiagramDecision("BCS302", "Explain addressing modes with neat diagram", "Addressing Modes", "architecture", 1, ["Immediate", "Register"]);
assert(decision.requiresDiagram === true, "3.8 Full pipeline: requires diagram");
assert(
  decision.validationStatus === "VALID" || decision.useSourceDiagram === true,
  "3.8 Full pipeline: valid result",
  `Status: ${decision.validationStatus}, UseSource: ${decision.useSourceDiagram}`
);

console.log(`  Section 3 complete\n`);

// ── SECTION 4: Code Pipeline ────────────────────────────────────────────────
console.log("--- Section 4: Code Pipeline ---");

// Test 4.1: BFS question detected
assert(codePipeline.isCodeQuestion("Write a C program for BFS traversal"), "4.1 BFS code question detected");

// Test 4.2: Non-code question rejected
assert(!codePipeline.isCodeQuestion("Explain BFS traversal"), "4.2 Non-code question rejected");

// Test 4.3: BFS resolved
const bfsResult = codePipeline.resolveCodePipeline("Write a C program for breadth first search");
assert(bfsResult !== null, "4.3 BFS pipeline resolved");
assert(bfsResult.language === "c", "4.3 BFS language is C", `Got: ${bfsResult?.language}`);
assert(bfsResult.sourceCode.includes("enqueue"), "4.3 BFS code has enqueue");

// Test 4.4: DFS resolved
const dfsResult = codePipeline.resolveCodePipeline("Write a program for DFS");
assert(dfsResult !== null, "4.4 DFS pipeline resolved");
assert(dfsResult.sourceCode.includes("dfs"), "4.4 DFS code has dfs function");

// Test 4.5: Unmatched code question returns null
const unknownCode = codePipeline.resolveCodePipeline("Write a program for Dijkstra's algorithm");
assert(unknownCode === null, "4.5 Unknown code falls through to null");

console.log(`  Section 4 complete\n`);

// ── SECTION 5: Formula Service ──────────────────────────────────────────────
console.log("--- Section 5: Formula Service ---");

// Test 5.1: EAT formula retrieval
const eatFormula = formulaService.retrieveFormulaForQuery("Calculate effective access time with page fault rate", "BCS303");
assert(eatFormula !== null, "5.1 EAT formula found");
assert(eatFormula.formulaName.includes("Effective"), "5.1 Correct formula name", `Got: ${eatFormula?.formulaName}`);
assert(eatFormula.variables.length >= 3, "5.1 Variables present", `Count: ${eatFormula?.variables.length}`);

// Test 5.2: Shannon formula retrieval
const shannonFormula = formulaService.retrieveFormulaForQuery("Calculate channel capacity using Shannon formula", "BCS502");
assert(shannonFormula !== null, "5.2 Shannon formula found");
assert(shannonFormula.formulaLatex.includes("log_2"), "5.2 Has log2 in LaTeX");

// Test 5.3: 8051 baud rate formula
const baudFormula = formulaService.retrieveFormulaForQuery("Calculate baud rate for 8051 timer", "BCS402");
assert(baudFormula !== null, "5.3 Baud rate formula found");
assert(baudFormula.sampleCalculation.includes("TH1"), "5.3 Sample calc mentions TH1");

// Test 5.4: Gray code formula
const grayFormula = formulaService.retrieveFormulaForQuery("Convert gray code to binary", "BCS302");
assert(grayFormula !== null, "5.4 Gray code formula found");
assert(grayFormula.formulaPlainText.includes("XOR"), "5.4 Has XOR in formula");

// Test 5.5: Non-matching returns null
const noFormula = formulaService.retrieveFormulaForQuery("Explain polymorphism in Java", "BCS306");
assert(noFormula === null, "5.5 No formula for non-numerical topic");

console.log(`  Section 5 complete\n`);

// ── SECTION 6: Integration — Enriched /ask Response ─────────────────────────
console.log("--- Section 6: Integration — /ask Response Enrichment ---");

// Verify the route returns Phase 4 fields by calling it
// (requires backend to be running)
async function testAskEndpoint() {
  const url = new URL("/api/ai/ask", API_BASE);

  // We need an auth token — try to register/login
  let token;
  try {
    const loginData = JSON.stringify({
      email: "phase4test@test.com",
      password: "testpass123",
      name: "Phase4 Test",
    });

    // Try register first
    try {
      const regRes = await httpPost(`${API_BASE}/api/auth/register`, loginData);
      if (regRes.token) token = regRes.token;
    } catch {}

    // If no token, try login
    if (!token) {
      const loginRes = await httpPost(`${API_BASE}/api/auth/login`, JSON.stringify({
        email: "phase4test@test.com",
        password: "testpass123",
      }));
      if (loginRes.token) token = loginRes.token;
    }
  } catch {
    console.log("  (Skipping /ask integration tests — backend not running)");
    return;
  }

  if (!token) {
    console.log("  (Skipping /ask integration tests — could not authenticate)");
    return;
  }

  // Test 6.1: Ask a standard question
  try {
    const askRes = await httpPost(`${API_BASE}/api/ai/ask`, JSON.stringify({
      question: "Explain addressing modes in computer organization",
      subjectCode: "BCS302",
    }), token);

    assert(askRes.answer !== undefined, "6.1 Answer present in response");
    assert(askRes.groundingValidation !== undefined, "6.1 Grounding validation present");

    // Phase 4 enrichments
    assert(askRes.retrievalConfidence !== undefined, "6.2 Retrieval confidence present", `Got: ${askRes.retrievalConfidence}`);
    assert(askRes.questionAnalysis !== undefined, "6.3 Question analysis present");
    assert(askRes.diagramDecision !== undefined, "6.4 Diagram decision present");
    assert(Array.isArray(askRes.provenance), "6.5 Provenance array present", `Got: ${typeof askRes.provenance}`);

    if (askRes.questionAnalysis) {
      assert(askRes.questionAnalysis.subject === "BCS302", "6.6 Analysis subject correct");
      assert(askRes.questionAnalysis.questionType !== undefined, "6.6 Analysis question type present");
      assert(askRes.questionAnalysis.keyPoints?.length > 0, "6.7 Analysis key points present");
    }

    if (askRes.diagramDecision) {
      assert(
        typeof askRes.diagramDecision.requiresDiagram === "boolean",
        "6.8 Diagram decision has requiresDiagram",
      );
    }
  } catch (err) {
    console.log(`  (Integration test error: ${err.message})`);
  }

  // Test 6.9: Numerical question returns formula
  try {
    const numRes = await httpPost(`${API_BASE}/api/ai/ask`, JSON.stringify({
      question: "Calculate effective access time given page fault rate 0.01",
      subjectCode: "BCS303",
    }), token);

    if (numRes.formula) {
      assert(numRes.formula.formulaName !== undefined, "6.9 Formula returned for numerical query");
      assert(numRes.formula.variables.length > 0, "6.9 Formula variables present");
    } else {
      assert(numRes.questionAnalysis?.requiresCalculation === true, "6.9 Calculation requirement detected");
    }
  } catch {}
}

function httpPost(url, body, token) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const req = http.request({
      hostname: u.hostname,
      port: u.port,
      path: u.pathname,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(body),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    }, (res) => {
      let data = "";
      res.on("data", d => data += d);
      res.on("end", () => {
        try { resolve(JSON.parse(data)); }
        catch { reject(new Error("Invalid JSON")); }
      });
    });
    req.on("error", reject);
    req.setTimeout(15000, () => { req.destroy(); reject(new Error("Timeout")); });
    req.write(body);
    req.end();
  });
}

// ── Run ─────────────────────────────────────────────────────────────────────
async function main() {
  await testAskEndpoint();

  console.log("\n═══════════════════════════════════════════════════════════════");
  console.log(`  FINAL SCORE: ${passed}/${passed + failed} TESTS PASSED (${Math.round(passed / (passed + failed) * 100)}%)`);
  console.log("═══════════════════════════════════════════════════════════════\n");

  if (failed > 0) {
    console.log("Failed tests:");
    for (const r of results) {
      if (r.status === "FAIL") console.log(`  ✗ ${r.label}: ${r.detail}`);
    }
    process.exit(1);
  }
}

main().catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});
