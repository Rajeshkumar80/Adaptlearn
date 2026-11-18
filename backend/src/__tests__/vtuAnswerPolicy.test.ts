import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { analyzeQuestion, extractQuestionRequirements } from "../services/questionAnalyzer";
import { validateRequirementCoverage } from "../services/groundingValidator";
import { StructuredAnswer } from "../services/answerSynthesizer";

function answerWith(text: string): StructuredAnswer {
  return {
    question: "q",
    subject_code: "BCS502",
    topic: "t",
    module: 1,
    marks: 10,
    co_reference: "CO1",
    sections: [{ type: "explanation", heading: "Explanation", text }],
  };
}

describe("VTU answer policy — mandatory requirement decomposition", () => {
  it("splits the policy example into four mandatory requirements", () => {
    const reqs = extractQuestionRequirements(
      "Explain the working of a Decision Tree classifier. Discuss entropy, information gain and the selection of the best splitting attribute with an example."
    ).map(r => r.toLowerCase());

    assert.equal(reqs.length, 4);
    assert.match(reqs[0], /working of a decision tree classifier/);
    assert.match(reqs[1], /entropy/);
    assert.match(reqs[2], /information gain/);
    assert.match(reqs[3], /selection of the best splitting attribute with an example/);
  });

  it("keeps a comparison pair together instead of splitting it", () => {
    const reqs = extractQuestionRequirements("Differentiate between FCFS and SJF scheduling.");
    assert.equal(reqs.length, 1);
    assert.match(reqs[0], /FCFS and SJF/);
  });

  it("splits roman/alphabetic enumerators into separate requirements", () => {
    const reqs = extractQuestionRequirements("Explain the following terms: (i) entropy (ii) information gain");
    assert.deepEqual(reqs.map(r => r.toLowerCase()), ["entropy", "information gain"]);
  });

  it("caps requirements and never returns empty entries", () => {
    const reqs = extractQuestionRequirements(
      "Explain alpha, beta, gamma, delta, epsilon, zeta, eta, theta, iota, kappa and lambda."
    );
    assert.equal(reqs.length, 8);
    assert.ok(reqs.every(r => r.trim().length >= 3));
  });

  it("ignores setup data and commas inside tuples", () => {
    const reqs = extractQuestionRequirements(
      "Consider the relation STUDENT_COURSE(Student_ID, Student_Name, Course_ID, Grade). Given the functional dependencies: Student_ID -> Student_Name; (Student_ID, Course_ID) -> Grade. Explain normalization. Identify the candidate key, partial dependencies, and transitive dependencies."
    );
    assert.deepEqual(reqs.map(r => r.toLowerCase()), [
      "normalization",
      "the candidate key",
      "partial dependencies",
      "transitive dependencies",
    ]);
  });

  it("does not split coordinate pairs in a data-point list", () => {
    const reqs = extractQuestionRequirements(
      "Consider the data points P1(2,10), P2(2,5), P3(8,4), P4(5,8), P5(7,5), P6(6,4). Take initial centroids as C1(2,10) and C2(8,4). Perform the first iteration and calculate the new centroids."
    );
    assert.equal(reqs.length, 1);
    assert.match(reqs[0], /first iteration and calculate the new centroids/);
  });

  it("flags an answer that omits a requirement", () => {
    const answer = answerWith(
      "Entropy measures the impurity of a node. Information gain is the expected reduction in entropy after a split."
    );
    const result = validateRequirementCoverage(answer, ["entropy", "information gain", "gini index"]);
    assert.equal(result.coverageRatio, 0.67);
    assert.deepEqual(result.missingRequirements, ["gini index"]);
  });

  it("passes an answer that covers every requirement", () => {
    const answer = answerWith(
      "Entropy measures impurity. Information gain is the reduction in entropy. The gini index is an alternative impurity measure."
    );
    const result = validateRequirementCoverage(answer, ["entropy", "information gain", "gini index"]);
    assert.equal(result.coverageRatio, 1);
    assert.deepEqual(result.missingRequirements, []);
  });

  it("honours marks written in the question text", () => {
    assert.equal(analyzeQuestion("Explain normalization up to 3NF. (10 marks)").detectedMarks, 10);
    assert.equal(analyzeQuestion("Explain normalization up to 3NF.").detectedMarks, 8);
  });

  it("does not treat marks wording as a sub-question", () => {
    const reqs = extractQuestionRequirements(
      "Explain TCP. Describe the three-way handshake. (10 marks)"
    ).map(r => r.toLowerCase());
    assert.equal(reqs.length, 2);
    assert.ok(reqs.every(r => !/marks?/.test(r)));
  });
});
