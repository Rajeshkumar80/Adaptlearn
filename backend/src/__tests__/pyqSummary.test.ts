import { test } from "node:test";
import assert from "node:assert/strict";
import { retrievePYQs } from "../services/ragService";

const DEADLOCK_Q =
  "What is a deadlock? Explain the four necessary conditions for deadlock with suitable examples. Describe the Resource Allocation Graph. Differentiate between deadlock prevention and deadlock avoidance.";
const KMEANS_Q =
  "Apply the K-Means clustering algorithm for the first iteration. Points P1(2,10), P2(2,5), P3(8,4), P4(5,8), P5(7,5), P6(6,4). Initial centroids C1(2,10) and C2(8,4).";

test("PYQ summary counts distinct papers, not matched questions", () => {
  const result = retrievePYQs("", DEADLOCK_Q);
  const papers = new Set(result.previousYearQuestions.map(q => q.paper));
  assert.equal(papers.size, 1);
  assert.match(result.summary, /June July 2025 Makeup/);
  assert.doesNotMatch(result.summary, /2 past VTU question papers/);
});

test("does not claim a PYQ match from generic word overlap", () => {
  const result = retrievePYQs("", KMEANS_Q);
  assert.equal(result.previousYearQuestions.length, 0);
  assert.equal(result.summary, "");
});
