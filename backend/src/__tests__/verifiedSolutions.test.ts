import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { applyVerifiedSolutions } from "../services/verifiedSolutions";

const Q1 = "Consider the relation STUDENT_COURSE(Student_ID, Student_Name, Course_ID, Course_Name, Instructor_ID, Instructor_Name, Grade). Given the functional dependencies: Student_ID -> Student_Name; Course_ID -> Course_Name, Instructor_ID; Instructor_ID -> Instructor_Name; (Student_ID, Course_ID) -> Grade. Explain the normalization process and normalize the relation up to 3NF.";

describe("verified solutions — deterministic textbook content", () => {
  it("computes the correct normalization answer", () => {
    const sections = applyVerifiedSolutions(Q1, []);
    const text = sections.map(s => `${s.heading}\n${s.text}`).join("\n");
    assert.match(text, /candidate key is \(Student_ID, Course_ID\)/i);
    assert.match(text, /Student_ID → Student_Name/);
    assert.match(text, /Course_ID → Course_Name, Instructor_ID/);
    assert.match(text, /Instructor_ID → Instructor_Name/);
    assert.match(text, /COURSE\(Course_ID, Course_Name, Instructor_ID/);
    assert.match(text, /INSTRUCTOR\(Instructor_ID, Instructor_Name\)/);
    const thirdNf = text.split(/Decomposition to 3NF/i)[1] || "";
    assert.match(thirdNf, /ENROLLMENT\(Student_ID, Course_ID, Grade\)/);
    assert.doesNotMatch(thirdNf, /REL_STUDENT_COURSE/);
  });

  it("replaces a wrong TCP termination section", () => {
    const sections = applyVerifiedSolutions(
      "Explain TCP three-way handshake and connection termination. Explain flow control, error control, and congestion control.",
      [{ type: "explanation", heading: "Connection Termination", text: "The client sends FIN-ACK and closes." }]
    );
    const text = sections.map(s => `${s.heading}\n${s.text}`).join("\n");
    assert.match(text, /TIME-WAIT/);
    assert.doesNotMatch(text, /FIN-ACK/);
    assert.match(text, /slow start/i);
    assert.match(text, /rwnd/);
    assert.match(text, /three duplicate ACKs/i);
  });

  it("adds the missing RAG explanation to a deadlock answer", () => {
    const sections = applyVerifiedSolutions(
      "Explain deadlock, its four conditions, and deadlock detection.",
      [{ type: "explanation", heading: "Conditions", text: "Mutual exclusion, hold and wait, no preemption, circular wait." }]
    );
    assert.ok(sections.some(s => /resource allocation graph/i.test(s.heading)));
    const text = sections.map(s => s.text).join(" ");
    assert.match(text, /single instance/i);
    assert.match(text, /multiple instances/i);
    assert.match(text, /Banker's algorithm/i);
    assert.match(text, /safe state/i);
    assert.ok(sections.some(s => /prevention vs deadlock avoidance/i.test(s.heading)));
    assert.match(text, /printer/i);
    assert.match(text, /scanner/i);
  });

  it("keeps a single prevention-vs-avoidance section", () => {
    const sections = applyVerifiedSolutions("Explain deadlock prevention and avoidance.", [
      { type: "differentiate", heading: "Deadlock Prevention vs Avoidance", text: "Short model comparison." },
    ]);
    const headings = sections.filter(s => /prevention.*avoidance|avoidance.*prevention/i.test(s.heading));
    assert.equal(headings.length, 1);
    assert.match(headings[0].text, /safe state/);
  });

  it("solves the first K-Means iteration deterministically", () => {
    const sections = applyVerifiedSolutions(
      "Apply K-Means for one iteration. Points P1(2,10), P2(2,5), P3(8,4), P4(5,8), P5(7,5), P6(6,4). Initial centroids C1(2,10) and C2(8,4).",
      [{ type: "explanation", heading: "K-Means", text: "Model text that may contain wrong arithmetic." }]
    );
    const text = sections.map(s => s.text).join("\n");
    assert.ok(sections.some(s => /step 2: assign/i.test(s.heading)));
    assert.match(text, /P1\(2, 10\).*assigned to C1/);
    assert.match(text, /P4\(5, 8\).*assigned to C1/);
    assert.match(text, /P5\(7, 5\).*assigned to C2/);
    assert.match(text, /Cluster 1: points \{P1, P2, P4\}/);
    assert.match(text, /\(3, 7\.67\)/);
    assert.match(text, /\(7, 4\.33\)/);
    assert.doesNotMatch(text, /Model text/);
  });
});
