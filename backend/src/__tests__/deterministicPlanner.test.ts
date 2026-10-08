import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { prisma } from "../db";
import {
  allocateStudyTasks,
  calculateDaysUntilReviewNeeded,
  PlanTopicInput,
} from "../services/schedulerEngine";

describe("Deterministic Planner Engine (T2.3)", () => {
  it("calculates exact days until review needed based on stability and retention threshold", () => {
    // R = exp(-t/S) = 0.60 => t = -S * ln(0.60) = S * 0.5108256
    // For S = 2.0: t ≈ 1.02 => 1 day
    // For S = 4.0: t ≈ 2.04 => 2 days
    // For S = 6.0: t ≈ 3.06 => 3 days
    assert.equal(calculateDaysUntilReviewNeeded(2.0, 0.60), 1);
    assert.equal(calculateDaysUntilReviewNeeded(4.0, 0.60), 2);
    assert.equal(calculateDaysUntilReviewNeeded(6.0, 0.60), 3);
  });

  it("inserts revision blocks on the computed dates when predicted retention decays below 0.60", () => {
    const topics: PlanTopicInput[] = [
      {
        id: "topic-p1",
        subjectCode: "BCS701",
        moduleNumber: 1,
        name: "Supervised Learning Basics",
        order: 0,
        pyqImportance: 80,
        mastery: 0.3,
        stability: 2.0, // Decay to 0.6 in 1 day
        retention: 0.9,
        prerequisiteIds: []
      },
      {
        id: "topic-p2",
        subjectCode: "BCS701",
        moduleNumber: 1,
        name: "Decision Trees & Ensembles",
        order: 1,
        pyqImportance: 85,
        mastery: 0.2,
        stability: 4.0, // Decay to 0.6 in 2 days
        retention: 0.9,
        prerequisiteIds: ["topic-p1"]
      }
    ];

    const result = allocateStudyTasks({
      topics,
      startDate: "2026-10-10",
      targetDate: "2026-10-14",
      hoursPerDay: 2.0,
      mode: "3-2-1",
      preferredSlot: "MORNING"
    });

    // Check revision summary
    assert.ok(result.revisionDatesSummary.length >= 2, "Should summarize revision dates for both topics");
    const revSummaryP1 = result.revisionDatesSummary.find(r => r.topicId === "topic-p1")!;
    assert.ok(revSummaryP1, "Revision summary for topic-p1 must exist");
    // Topic-p1 learned on 2026-10-10, S = 2.0 => revision scheduled on 2026-10-11
    assert.equal(revSummaryP1.computedRevisionDate, "2026-10-11");

    // Verify task actually scheduled on that date
    const revTask = result.tasks.find(
      t => t.topicId === "topic-p1" && t.type === "revise" && t.scheduledDate === "2026-10-11"
    );
    assert.ok(revTask, "Revision task for topic-p1 must be scheduled on computed date 2026-10-11");
  });

  it("places heavy learning tasks into the student's best hours slot (MORNING)", () => {
    const topics: PlanTopicInput[] = [
      {
        id: "topic-heavy",
        subjectCode: "BCS701",
        moduleNumber: 1,
        name: "Deep Neural Network Backpropagation",
        order: 0,
        pyqImportance: 90,
        mastery: 0.1,
        retention: 1.0,
        prerequisiteIds: []
      }
    ];

    const result = allocateStudyTasks({
      topics,
      startDate: "2026-10-10",
      targetDate: "2026-10-12",
      hoursPerDay: 1.0,
      mode: "3-2-1",
      preferredSlot: "MORNING"
    });

    const learnTask = result.tasks.find(t => t.type === "learn" && t.topicId === "topic-heavy");
    assert.ok(learnTask, "Learn task must exist");
    assert.equal(learnTask.scheduledSlot, "MORNING", "Learn task must be scheduled in student's preferred MORNING slot");
  });

  it("generates and verifies plan for seeded student with real DB topics and revision dates", async () => {
    const student = await prisma.user.findUnique({
      where: { email: "demo.student@adaptlearn.dev" }
    });
    assert.ok(student, "Demo student must exist in database");

    const dbTopics = await prisma.topic.findMany({
      where: { subjectCode: "BCS701" },
      take: 4,
      orderBy: { order: "asc" },
      include: { prerequisites: { select: { id: true } } }
    });
    assert.ok(dbTopics.length >= 2, "DB topics must exist for BCS701");

    const planTopics: PlanTopicInput[] = dbTopics.map(t => ({
      id: t.id,
      subjectCode: t.subjectCode,
      moduleNumber: t.moduleNumber,
      name: t.name,
      order: t.order,
      pyqImportance: t.pyqImportance,
      mastery: 0.25,
      stability: 3.0,
      retention: 0.8,
      prerequisiteIds: t.prerequisites.map(p => p.id)
    }));

    const result = allocateStudyTasks({
      topics: planTopics,
      startDate: "2026-10-10",
      targetDate: "2026-10-16",
      isExamDate: true,
      hoursPerDay: 2.0,
      mode: "3-2-1",
      preferredSlot: "EVENING"
    });

    // Verify buffer day before exam: targetDate is 2026-10-16, exam buffer day must have 0 tasks
    const examDayTasks = result.tasks.filter(t => t.scheduledDate === "2026-10-16");
    assert.equal(examDayTasks.length, 0, "No tasks on exam day");

    // Verify revision blocks exist
    const reviseTasks = result.tasks.filter(t => t.type === "revise");
    assert.ok(reviseTasks.length > 0, "Revision blocks must exist");

    // Verify computed revision date for first topic (learned day 0: 2026-10-10, S=3.0 => 2 days => 2026-10-12)
    const firstTopicRevDate = result.revisionDatesSummary[0]?.computedRevisionDate;
    assert.equal(firstTopicRevDate, "2026-10-12");
  });
});
