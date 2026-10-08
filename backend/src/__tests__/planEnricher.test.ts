import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { prisma } from "../db";
import {
  validateEnrichedTasks,
  enrichTasksWithLlm,
  TaskEnrichmentItem,
  DbTopicContext,
} from "../services/planEnricher";

describe("LLM Plan Task Enrichment & Zero-Hallucination Validation (T2.4)", () => {
  it("drops hallucinated or invented topic IDs strictly", () => {
    const validDbIds = new Set(["BCS701-m1-t1", "BCS701-m1-t2"]);

    const rawItems: TaskEnrichmentItem[] = [
      {
        topicId: "BCS701-m1-t1",
        todoText: "Study uninformed search trees",
        subPoints: ["BFS breadth traversal", "DFS memory requirements"],
        selfCheckQuestion: "What is the time complexity of BFS vs DFS?",
      },
      {
        topicId: "HALLUCINATED_QUANTUM_COMPUTING",
        todoText: "Study quantum gates and qubits",
        subPoints: ["Hadamard gate", "Superposition"],
        selfCheckQuestion: "Explain qubit coherence.",
      },
      {
        topicId: "BCS701-m1-t2",
        todoText: "Study A* heuristic search",
        subPoints: ["Admissible heuristics", "Consistency property"],
        selfCheckQuestion: "State the condition for A* optimality.",
      },
      {
        topicId: "INVENTED_EXTERNAL_COURSE_TOPIC",
        todoText: "Study biological neural synapses",
        subPoints: ["Axons", "Dendrites"],
        selfCheckQuestion: "How do neurotransmitters work?",
      },
    ];

    const result = validateEnrichedTasks(rawItems, validDbIds);

    assert.equal(result.totalGenerated, 4);
    assert.equal(result.validKept, 2);
    assert.equal(result.inventedDropped, 2);
    assert.ok(result.enrichedMap.has("BCS701-m1-t1"));
    assert.ok(result.enrichedMap.has("BCS701-m1-t2"));
    assert.ok(!result.enrichedMap.has("HALLUCINATED_QUANTUM_COMPUTING"));
    assert.ok(!result.enrichedMap.has("INVENTED_EXTERNAL_COURSE_TOPIC"));
  });

  it("verifies 3 generated plans from DB subjects with 0 invented topics", async () => {
    const testSubjects = ["BCS701", "BCS702", "BCS703"];
    const validationSummary: Array<{
      subjectCode: string;
      topicsCount: number;
      validKept: number;
      inventedDropped: number;
    }> = [];

    for (let i = 0; i < testSubjects.length; i++) {
      const subjectCode = testSubjects[i];
      const rawTopics = await prisma.topic.findMany({
        where: { subjectCode },
        take: 3,
        include: { subTopics: { select: { title: true } } },
      });

      assert.ok(rawTopics.length >= 2, `Subject ${subjectCode} must have DB topics`);

      const dbTopics: DbTopicContext[] = rawTopics.map((t) => ({
        id: t.id,
        name: t.name,
        moduleNumber: t.moduleNumber,
        subTopics: t.subTopics.map((st) => st.title),
      }));

      const dbTopicIdSet = new Set(dbTopics.map((t) => t.id));
      const enrichment = await enrichTasksWithLlm(subjectCode, dbTopics);

      // Verify ZERO invented topics accepted
      for (const [topicId, item] of enrichment.enrichedMap.entries()) {
        assert.ok(
          dbTopicIdSet.has(topicId),
          `Topic ID "${topicId}" MUST exist in the DB catalog. No invented topics permitted!`
        );
        assert.ok(item.todoText.length >= 5, "Todo text must be descriptive");
        assert.ok(item.subPoints.length >= 1, "Must contain sub-points");
        assert.ok(item.selfCheckQuestion.length >= 10, "Must contain self check question");
      }

      validationSummary.push({
        subjectCode,
        topicsCount: dbTopics.length,
        validKept: enrichment.validKept,
        inventedDropped: enrichment.inventedDropped,
      });
    }

    console.log("T2.4 3-Plan Validation Results:");
    for (const s of validationSummary) {
      console.log(
        `  Plan [${s.subjectCode}]: ${s.topicsCount} DB topics -> valid kept: ${s.validKept}, invented dropped: ${s.inventedDropped} (0 invented accepted)`
      );
    }

    assert.equal(validationSummary.length, 3, "3 plans must be validated");
    const totalInventedAccepted = validationSummary.reduce(
      (acc, s) => acc + (s.validKept > s.topicsCount ? s.validKept - s.topicsCount : 0),
      0
    );
    assert.equal(totalInventedAccepted, 0, "Zero invented topics accepted across all 3 plans");
  });
});
