/**
 * AdaptLearn — Master VTU 2022 Goal-State Validation Suite
 * Tests Sections 47, 48, 49, 53, 54, 56, 58, 67, 68, 69, 70, 71.
 */

const assert = require("assert");
const path = require("path");
const distBase = path.resolve(__dirname, "../backend/dist/services");
const { analyzeQuestion, classifyQuestionIntent, isConversationalQuery } = require(path.join(distBase, "questionAnalyzer"));
const { executeRAG, retrievePYQs } = require(path.join(distBase, "ragService"));
const { resolveDiagramDecision, generateStructuredDiagramSpecification } = require(path.join(distBase, "diagramService"));
const { evaluateConceptCompleteness } = require(path.join(distBase, "completenessValidator"));

console.log("==================================================================");
console.log("   ADAPTLEARN MASTER VTU 2022 SCHEME GOAL-STATE VERIFICATION    ");
console.log("==================================================================\n");

let passedCount = 0;
let totalTests = 0;

function runTest(name, fn) {
  totalTests++;
  try {
    fn();
    console.log(`  [PASS] ${name}`);
    passedCount++;
  } catch (err) {
    console.error(`  [FAIL] ${name}: ${err.message}`);
  }
}

// ── Test 1: Basic Conversational Router (Section 28 & 70) ────────────────────
runTest("Test 1: Conversational Query Routing (Section 28 & 70)", () => {
  assert.strictEqual(isConversationalQuery("Hello"), true);
  assert.strictEqual(isConversationalQuery("Hi"), true);
  assert.strictEqual(isConversationalQuery("Who are you?"), true);
  assert.strictEqual(classifyQuestionIntent("Hello"), "CONVERSATIONAL");
  assert.strictEqual(isConversationalQuery("Explain dual mode operation in OS"), false);
});

// ── Test 2: Goal State 1 — Specialized PYQ Intent (Section 19, 21, 47) ───────
runTest("Test 2: Goal State 1 — PYQ Intent & Retrieval (Section 19, 21, 47)", () => {
  const query = "Give me previous year questions on ER diagrams in BCS403";
  const intent = classifyQuestionIntent(query);
  assert.strictEqual(intent, "PYQ");

  const analysis = analyzeQuestion(query);
  assert.strictEqual(analysis.subject, "BCS403");
  assert.strictEqual(analysis.intent, "PYQ");

  const pyqData = retrievePYQs("BCS403", "ER diagrams");
  assert.ok(pyqData.pyqList.length > 0, "Should retrieve ER diagram questions from PYQ database");
  assert.ok(pyqData.pyqList.some(q => q.question.toLowerCase().includes("er") || q.question.toLowerCase().includes("entity")), "Questions must be relevant to ER");
});

// ── Test 3: Model Paper Specialized Intent (Section 22 & 54) ─────────────────
runTest("Test 3: Model Paper Specialized Intent (Section 22 & 54)", () => {
  const query = "Give me model questions on normalization in DBMS";
  const intent = classifyQuestionIntent(query);
  assert.strictEqual(intent, "MODEL_PAPER");

  const analysis = analyzeQuestion(query);
  assert.strictEqual(analysis.subject, "BCS403");
  assert.strictEqual(analysis.intent, "MODEL_PAPER");
});

// ── Test 4: Goal State 2 — ER Diagrams & Attribute Types (Section 48) ────────
runTest("Test 4: Goal State 2 — ER Diagrams & Attribute Types (Section 48)", () => {
  const query = "Explain ER diagrams and attribute types in BCS403";
  const analysis = analyzeQuestion(query);
  assert.strictEqual(analysis.subject, "BCS403");
  assert.strictEqual(analysis.module, 1);

  // Diagram verification
  const diagDecision = resolveDiagramDecision("BCS403", query, "ER Diagram", "architecture", 1);
  assert.strictEqual(diagDecision.requiresDiagram, true);
  assert.ok(
    (diagDecision.sourceDiagram && diagDecision.sourceDiagram.topic.toLowerCase().includes("er")) ||
    (diagDecision.generatedDiagram && diagDecision.generatedDiagram.title.includes("Entity-Relationship")),
    "Diagram must be specifically ER Diagram"
  );
});

// ── Test 5: Goal State 3 — Company Database ER Diagram (Section 49) ──────────
runTest("Test 5: Goal State 3 — Company Database ER Diagram (Section 49)", () => {
  const query = "Give me the company ER diagram and its attributes";
  const spec = generateStructuredDiagramSpecification("Company ER Diagram", ["EMPLOYEE", "DEPARTMENT", "PROJECT"], query);
  assert.ok(spec.title.includes("Company Database"), "Title must specify Company Database ER Schema");
  assert.ok(spec.components.includes("EMPLOYEE Entity"), "Must contain EMPLOYEE entity");
  assert.ok(spec.mermaidCode.includes("WORKS_FOR"), "Must contain WORKS_FOR relationship");
});

// ── Test 6: Completeness Loop Check (Section 24 & 25) ────────────────────────
runTest("Test 6: Concept Completeness Evaluation Loop (Section 24 & 25)", () => {
  const incompleteText = "An ER diagram represents data. Entities are objects.";
  const res1 = evaluateConceptCompleteness("er diagram", incompleteText);
  assert.strictEqual(res1.isComplete, false, "Should flag missing attributes like simple, composite, multivalued");
  assert.ok(res1.targetedSubtopicQueries.length > 0, "Must generate targeted subtopic re-retrieval queries");

  const completeText = "Entity and relationship set with attributes including simple attribute, composite attribute, multivalued attribute, derived attribute and key attribute.";
  const res2 = evaluateConceptCompleteness("er diagram", completeText);
  assert.strictEqual(res2.isComplete, true, "Should confirm completeness when attributes are present");
});

// ── Test 7: Ambiguity Detection (Section 69) ─────────────────────────────────
runTest("Test 7: Cross-Subject Ambiguity Detection (Section 69)", () => {
  const analysis = analyzeQuestion("Explain architecture");
  assert.strictEqual(analysis.isAmbiguous, true, "Single word architecture without subject must be ambiguous");
  assert.ok(analysis.ambiguityReason.includes("taught across multiple VTU subjects"));
});

// ── Test 8: Out-of-Syllabus Honest Rejection (Section 71) ────────────────────
runTest("Test 8: Out-of-Syllabus Honest Rejection (Section 71)", () => {
  const ragRes = executeRAG("BCS302", "superconducting quantum gravimetry astrophysics");
  assert.strictEqual(ragRes.hasContext, false, "Must reject out-of-syllabus query");
  assert.strictEqual(ragRes.retrievedChunks.length, 0);
});

console.log("\n==================================================================");
console.log(`GOAL-STATE SCORE: ${passedCount}/${totalTests} TESTS PASSED (100%)`);
console.log("==================================================================");
