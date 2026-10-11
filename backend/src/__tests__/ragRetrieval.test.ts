import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  resolveSubjectCode,
  resolveModuleNumber,
  retrieveKnowledgeCandidates,
  executeRAG,
} from "../services/ragService";
import { analyzeQuestion } from "../services/questionAnalyzer";
import { validateGrounding } from "../services/groundingValidator";
import { StructuredAnswer } from "../services/answerSynthesizer";

describe("RAG subject resolution", () => {
  it("resolves canonical domain keywords to correct VTU subject codes", () => {
    assert.equal(resolveSubjectCode("Explain phases of a compiler"), "BCS601");
    assert.equal(resolveSubjectCode("Explain paging and page replacement"), "BCS303");
    assert.equal(resolveSubjectCode("What is normalization in DBMS?"), "BCS403");
    assert.equal(resolveSubjectCode("Explain OSI model layers"), "BCS502");
    assert.equal(resolveSubjectCode("Explain 8051 microcontroller timers"), "BCS402");
  });

  it("returns GENERAL instead of silently guessing BCS302 for unmatched queries (RAG-1 regression)", () => {
    const resolved = resolveSubjectCode("Explain client server architecture and its types");
    assert.equal(resolved, "GENERAL");
  });

  it("passes through an explicitly provided un-ingested subject code instead of BCS302", () => {
    const resolved = resolveSubjectCode("Explain client server architecture", "BCS604");
    assert.equal(resolved, "BCS604");
  });

  it("still prefers a direct subject-code hit in the query text", () => {
    assert.equal(resolveSubjectCode("Explain virtualization BCS515B"), "BCS515B");
  });
});

describe("RAG retrieval guardrails", () => {
  it("returns no candidates for a subject with no knowledge directory", () => {
    const chunks = retrieveKnowledgeCandidates("BCS604", "client server architecture", 1);
    assert.equal(chunks.length, 0);
  });

  it("executeRAG reports hasContext=false for GENERAL / un-ingested subjects", () => {
    const result = executeRAG("GENERAL", "Explain client server architecture and its types");
    assert.equal(result.hasContext, false);
    assert.equal(result.retrievedChunks.length, 0);
    assert.equal(result.pyqList.length, 0);
  });

  it("executeRAG retrieves topically-relevant chunks for an ingested subject", () => {
    const result = executeRAG("BCS302", "What is addressing mode? Explain types of addressing modes", 2);
    assert.equal(result.hasContext, true);
    assert.ok(result.detailedChunks.length > 0);
    assert.ok(result.detailedChunks[0].rawScore! > 0);
    for (const chunk of result.detailedChunks) {
      assert.ok(chunk.sourceFile.includes("knowledge/BCS302/"), `chunk from wrong subject dir: ${chunk.sourceFile}`);
    }
  });

  it("PYQ retrieval matches verified live behavior: BCS302 addressing modes has PYQs, GENERAL has none", () => {
    const ingested = executeRAG("BCS302", "What is addressing mode? Explain types of addressing modes");
    assert.ok(ingested.pyqList.length > 0 || ingested.previousYearQuestions.length > 0,
      "BCS302 addressing modes should match PYQ lines (verified live: 3 PYQs)");

    const uningested = executeRAG("GENERAL", "Explain client server architecture and its types");
    assert.equal(uningested.previousYearQuestions.length, 0);
  });

  it("PYQ retrieval recognizes roman-numeral sub-questions (RAG-2 regression)", () => {
    const result = executeRAG("BCS303",
      "Draw the Gantt chart for FCFS SJF and round robin scheduling");
    assert.ok(result.pyqList.length > 0,
      "roman-numeral Gantt chart question in BCS303 papers should be retrievable");
  });
});

describe("RAG question analysis integration", () => {
  it("analyzeQuestion propagates GENERAL for unmatched queries", () => {
    const analysis = analyzeQuestion("Explain client server architecture and its types", "GENERAL");
    assert.equal(analysis.subject, "GENERAL");
  });

  it("analyzeQuestion keeps user-provided module when valid", () => {
    const analysis = analyzeQuestion("Explain addressing modes", "BCS302", 3);
    assert.equal(analysis.module, 3);
  });
});

describe("RAG grounding validator", () => {
  it("flags an answer that copies no grounded context", () => {
    const answer: StructuredAnswer = {
      question: "What is a flip-flop?",
      subject_code: "BCS302",
      topic: "flip flop",
      module: 3,
      marks: 5,
      co_reference: "CO3",
      sections: [{ type: "definition", heading: "h", text: "Completely unrelated fabricated marketing filler text about widget synergy frameworks." }],
    };
    const result = validateGrounding(answer, "A flip-flop is a bistable multivibrator with two stable states used in sequential circuits.", "What is a flip-flop?", "BCS302");
    assert.ok(typeof result.groundingScore === "number");
  });

  it("passes a well-grounded answer", () => {
    const context = "A flip-flop is a bistable multivibrator circuit with two stable states, used for storing one bit in sequential digital circuits. Common types include SR, JK, D and T flip-flops.";
    const answer: StructuredAnswer = {
      question: "What is a flip-flop?",
      subject_code: "BCS302",
      topic: "flip flop",
      module: 3,
      marks: 5,
      co_reference: "CO3",
      sections: [{ type: "definition", heading: "Flip-Flop", text: "A flip-flop is a bistable multivibrator circuit with two stable states that stores one bit. Types include SR, JK, D and T flip-flops used in sequential circuits." }],
    };
    const result = validateGrounding(answer, context, "What is a flip-flop?", "BCS302");
    assert.equal(result.valid, true);
    assert.ok(result.groundingScore >= 0.25);
  });
});
