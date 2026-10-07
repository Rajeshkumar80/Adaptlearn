#!/usr/bin/env node
/**
 * Test Suite: Compiler Design Subject Mapping & RAG Source Validation
 * Tests Tasks 1-7 for the Final Bug Fix.
 */

const path = require("path");
const fs = require("fs");

const distBase = path.join(__dirname, "../backend/dist");
const { executeRAG, resolveSubjectCode, retrievePYQs } = require(path.join(distBase, "services/ragService"));
const { analyzeQuestion } = require(path.join(distBase, "services/questionAnalyzer"));
const { rerankCandidates, allocateDynamicContext } = require(path.join(distBase, "services/reranker"));
const { resolveDiagramDecision } = require(path.join(distBase, "services/diagramService"));
const { validateSourceChunk } = require(path.join(distBase, "services/sourceValidator"));
const { sanitizeAndEnrichAnswer } = require(path.join(distBase, "services/answerSynthesizer"));
const { validateGrounding } = require(path.join(distBase, "services/groundingValidator"));

let passed = 0;
let total = 0;

function assert(condition, testName, details = "") {
  total++;
  if (condition) {
    passed++;
    console.log(`  ✅ [PASS] ${testName}`);
  } else {
    console.error(`  ❌ [FAIL] ${testName} ${details ? "— " + details : ""}`);
  }
}

console.log("==================================================================");
console.log("   COMPILER DESIGN MAPPING & RAG SOURCE VALIDATION SUITE          ");
console.log("==================================================================\n");

// ── TEST 1: Canonical Subject Mapping (Task 1 & Task 2) ────────────────────────
console.log("--- Test 1: Canonical Subject Mapping from knowledge/subjects.json ---");
const subjectsJsonPath = path.join(__dirname, "../knowledge/subjects.json");
const subjectsData = JSON.parse(fs.readFileSync(subjectsJsonPath, "utf-8")).subjects;

assert(subjectsData["BCS601"] !== undefined, "1.1 BCS601 exists in canonical subjects.json");
assert(subjectsData["BCS601"].name === "Compiler Design", "1.2 BCS601 canonical name is Compiler Design");
assert(subjectsData["BCS601"].semester === 6, "1.3 BCS601 semester is 6");
assert(subjectsData["BCS515B"].name.includes("Cloud"), "1.4 Cloud Computing is mapped to BCS515B");

// Test resolveSubjectCode by query and by provided name
assert(resolveSubjectCode("Compiler Design") === "BCS601", "1.5 resolveSubjectCode('Compiler Design') -> BCS601");
assert(resolveSubjectCode("What is a compiler?") === "BCS601", "1.6 resolveSubjectCode compiler query -> BCS601");
assert(resolveSubjectCode("Explain cloud computing models", "GENERAL") === "BCS515B", "1.7 Cloud query -> BCS515B");
assert(resolveSubjectCode("Tell me about this", "Compiler Design") === "BCS601", "1.8 Provided subject name 'Compiler Design' -> BCS601");

// ── TEST 2: Query Routing for Phases of a Compiler (Task 3) ───────────────────
console.log("\n--- Test 2: Query Routing for 'Explain the phases of a compiler with a neat diagram.' ---");
const query = "Explain the phases of a compiler with a neat diagram.";
const analysis = analyzeQuestion(query);

assert(analysis.subject === "BCS601", "2.1 Subject resolved to BCS601", `Got: ${analysis.subject}`);
assert(analysis.module === 1, "2.2 Module resolved to 1 (Introduction to Compilers)", `Got: ${analysis.module}`);
assert(analysis.requiresDiagram === true, "2.3 Diagram requirement detected as true");

// ── TEST 3: RAG Retrieval — Real Compiler Knowledge (Task 3 & 4) ───────────────
console.log("\n--- Test 3: RAG Retrieval for Compiler Phases ---");
const ragResult = executeRAG(analysis.subject, query, analysis.module);

assert(ragResult.retrievedChunks.length > 0, "3.1 Chunks retrieved for Compiler Design", `Count: ${ragResult.retrievedChunks.length}`);

// Verify chunks are from BCS601 and NOT contaminated with Cloud / Virtualization
let hasCloudTerms = false;
let hasCompilerTerms = false;
const fullContext = ragResult.detailedChunks.map(c => c.content).join("\n").toLowerCase();

const cloudTerms = ["virtual machine", "virtualization", "vmm", "hypervisor", "cluster virtualization", "kai hwang", "data center"];
for (const term of cloudTerms) {
  if (fullContext.includes(term)) {
    hasCloudTerms = true;
    console.error(`  Found forbidden cloud term in retrieved context: "${term}"`);
  }
}

const compilerTerms = ["lexical", "syntax", "intermediate code", "optimization", "code generation", "symbol table"];
let matchedCompilerTerms = 0;
for (const term of compilerTerms) {
  if (fullContext.includes(term)) matchedCompilerTerms++;
}
hasCompilerTerms = matchedCompilerTerms >= 3;

assert(!hasCloudTerms, "3.2 Retrieved context contains ZERO Cloud/Virtualization content");
assert(hasCompilerTerms, "3.3 Retrieved context contains Compiler phases terms", `Matched: ${matchedCompilerTerms}/6`);

// ── TEST 4: Cross-Domain Guard (Task 5) ────────────────────────────────────────
console.log("\n--- Test 4: Cross-Domain Retrieval Guard ---");
const fakeCloudChunk = {
  id: "BCS601-fake-cloud",
  title: "Virtual Machines and Virtualization of Clusters and Data Centers",
  similarity: 0.82,
  moduleNumber: 1,
  sourceFile: "knowledge/BCS601/textbook_notes.md",
  content: "Virtual Machines and Virtualization of Clusters and Data Centers. High throughput computing with virtual machines, hypervisors, and distributed cloud computing data centers.",
  isQBank: false,
};

const validation = validateSourceChunk(fakeCloudChunk, analysis);
assert(validation.isValid === false, "4.1 Synthetic Cloud chunk correctly rejected for Compiler query");
assert(validation.isCrossDomainContaminated === true, "4.2 Marked as cross-domain contaminated");

// Reranker rejects contaminated chunks
const ranked = rerankCandidates([fakeCloudChunk, ...ragResult.detailedChunks], analysis);
const topRanked = ranked[0];
assert(topRanked.id !== "BCS601-fake-cloud", "4.3 Contaminated chunk is never ranked top");
assert(ranked.find(r => r.id === "BCS601-fake-cloud").finalScore <= 0, "4.4 Contaminated chunk given non-positive score");

// Dynamic context excludes score <= 0
const dynamic = allocateDynamicContext(ranked, analysis);
assert(!dynamic.contextString.toLowerCase().includes("virtualization of clusters"), "4.5 Dynamic context completely excludes contaminated chunk");

// ── TEST 5: Diagram Validation (Task 6) ────────────────────────────────────────
console.log("\n--- Test 5: Diagram Validation for Compiler Phases ---");
const diagramDecision = resolveDiagramDecision(analysis.subject, query, analysis.topic, analysis.questionType);

assert(diagramDecision.requiresDiagram === true, "5.1 Diagram requirement is true");
const diagramTitle = (diagramDecision.sourceDiagram?.caption || diagramDecision.generatedDiagram?.title || "").toLowerCase();
const diagramMermaid = (diagramDecision.generatedDiagram?.mermaidCode || diagramDecision.sourceDiagram?.caption || "").toLowerCase();

assert(diagramTitle.includes("compiler") || diagramTitle.includes("phase"), "5.2 Diagram title is compiler-related", `Title: ${diagramTitle}`);
assert(!diagramTitle.includes("arm") && !diagramTitle.includes("osi") && !diagramTitle.includes("8051"), "5.3 Diagram is NOT ARM/OSI/8051");

if (diagramDecision.generatedDiagram) {
  const comps = diagramDecision.generatedDiagram.components.map(c => c.toLowerCase());
  const hasLexical = comps.some(c => c.includes("lexical"));
  const hasSyntax = comps.some(c => c.includes("syntax"));
  const hasSymbolTable = comps.some(c => c.includes("symbol table"));
  assert(hasLexical && hasSyntax && hasSymbolTable, "5.4 Generated diagram contains core compiler phases");
}

// ── TEST 6: Complete VTU Answer Synthesis & Grounding Validation ───────────────
console.log("\n--- Test 6: Answer Synthesis & Grounding for Compiler Phases ---");
const answer = sanitizeAndEnrichAnswer(
  {
    question: query,
    subject_code: "BCS601",
    topic: "Phases of a Compiler",
    module: 1,
    marks: 10,
    sections: []
  },
  "BCS601",
  query,
  dynamic.contextString,
  10
);

assert(answer.sections.length >= 4, "6.1 Full 10-mark answer produced with at least 4 sections", `Sections: ${answer.sections.length}`);
const answerText = answer.sections.map(s => s.text).join(" ").toLowerCase();
assert(answerText.includes("lexical") && answerText.includes("syntax") && answerText.includes("semantic"), "6.2 Answer contains Lexical, Syntax, Semantic analysis");
assert(!answerText.includes("virtual machine") && !answerText.includes("virtualization of clusters"), "6.3 Answer contains NO virtualization contamination");

const grounding = validateGrounding(answer, dynamic.contextString, query, "BCS601", "Phases of a Compiler");
assert(grounding.valid === true, "6.4 Grounding validation passes with zero cross-domain errors");
assert(grounding.unsupportedClaims.length === 0, "6.5 Zero unsupported cross-domain claims", `Claims: ${grounding.unsupportedClaims.join("; ")}`);

// ── TEST 7: Multi-Subject Representation Regression (Task 7) ───────────────────
console.log("\n--- Test 7: Multi-Semester Representative Subject Verification ---");

const multiSubjectQueries = [
  { sem: "3rd", code: "BCS302", q: "Explain the addressing modes of basic computers with examples.", expect: "addressing mode" },
  { sem: "3rd", code: "BCS304", q: "Explain binary search tree operations and tree traversals.", expect: "tree" },
  { sem: "4th", code: "BCS402", q: "Explain ARM processor architecture and register organization.", expect: "arm" },
  { sem: "4th", code: "BCS403", q: "Explain database normalization up to BCNF with functional dependencies.", expect: "normalization" },
  { sem: "5th", code: "BCS502", q: "Explain the layers of the OSI reference model.", expect: "osi" },
  { sem: "6th", code: "BCS601", q: "Explain the phases of a compiler with a neat diagram.", expect: "compiler" },
  { sem: "7th", code: "BCS701", q: "Explain IoT architecture and protocol stack.", expect: "iot" },
];

for (const item of multiSubjectQueries) {
  const resolved = resolveSubjectCode(item.q);
  const rag = executeRAG(resolved, item.q);
  const context = (rag.structuredContext + " " + rag.textbookExcerpt).toLowerCase();
  const matchesKeyword = context.includes(item.expect);

  assert(resolved === item.code, `7.${item.code} [${item.sem} Sem] routes to ${item.code}`, `Got: ${resolved}`);
  assert(rag.hasContext && matchesKeyword, `7.${item.code} retrieves authentic ${item.code} knowledge for "${item.expect}"`);
}

// ── SUMMARY ───────────────────────────────────────────────────────────────────
console.log("\n==================================================================");
console.log(`FINAL RESULT: ${passed}/${total} TESTS PASSED (${Math.round((passed / total) * 100)}%)`);
console.log("==================================================================");

if (passed === total) {
  console.log("🎉 ALL COMPILER DESIGN & RAG VALIDATION TESTS PASSED PERFECTLY!");
  process.exit(0);
} else {
  console.error("❌ SOME TESTS FAILED.");
  process.exit(1);
}
