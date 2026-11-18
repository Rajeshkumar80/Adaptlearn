import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { extractQuestionRequirements } from "../services/questionAnalyzer";
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
});
