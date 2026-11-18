import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { generateStructuredDiagramSpecification, resolveDiagramDecision } from "../services/diagramService";

const cases = [
  ["DBMS normalization", "Explain normalization up to 3NF"],
  ["OS deadlock", "Explain deadlock and the resource allocation graph"],
  ["CN TCP", "Explain the TCP three-way handshake and connection termination"],
  ["ML K-Means", "Explain K-Means clustering with Euclidean distance and centroids"],
];

describe("VTU diagram specs — renderable multi-node Mermaid", () => {
  for (const [label, question] of cases) {
    it(`produces a real flowchart for ${label}`, () => {
      const spec = generateStructuredDiagramSpecification(label, [], question);
      const edges = (spec.mermaidCode.match(/-->/g) || []).length;
      assert.ok(edges >= 3, `expected >=3 edges, got ${edges}: ${spec.mermaidCode}`);
      assert.ok(spec.mermaidCode.startsWith("flowchart"), "must be a flowchart");
      assert.ok(spec.drawingGuide.length > 20, "needs a drawing guide");
    });
  }

  it("keeps a renderable diagram even when a source figure matches", () => {
    const decision = resolveDiagramDecision("BCS403", "Explain normalization up to 3NF", "Normalization", "explain", 3);
    assert.ok(decision.generatedDiagram, "generated diagram must always be available");
    assert.ok((decision.generatedDiagram!.mermaidCode.match(/-->/g) || []).length >= 3);
  });
});
