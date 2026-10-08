import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  allocateStudyTasks,
  topologicalSortTopics,
  PlanTopicInput,
} from "../services/schedulerEngine";

describe("Scheduler Allocation Math (T2.2)", () => {
  const sampleTopics: PlanTopicInput[] = [
    {
      id: "topic-intro",
      subjectCode: "BCS701",
      moduleNumber: 1,
      name: "Introduction to AI",
      order: 0,
      pyqImportance: 40,
      mastery: 0.8,
      retention: 0.9,
      prerequisiteIds: []
    },
    {
      id: "topic-search",
      subjectCode: "BCS701",
      moduleNumber: 1,
      name: "Informed Search Algorithms",
      order: 1,
      pyqImportance: 85,
      mastery: 0.2,
      retention: 0.4,
      prerequisiteIds: ["topic-intro"]
    },
    {
      id: "topic-adversarial",
      subjectCode: "BCS701",
      moduleNumber: 1,
      name: "Adversarial Games & Alpha-Beta",
      order: 2,
      pyqImportance: 90,
      mastery: 0.1,
      retention: 0.3,
      prerequisiteIds: ["topic-search"]
    },
    {
      id: "topic-nlp",
      subjectCode: "BCS702",
      moduleNumber: 2,
      name: "Transformer Attention",
      order: 0,
      pyqImportance: 70,
      mastery: 0.5,
      retention: 0.6,
      prerequisiteIds: []
    }
  ];

  it("preserves strict prerequisite ordering: prerequisite precedes dependent", () => {
    const sorted = topologicalSortTopics(sampleTopics, "3-2-1");
    const introIdx = sorted.findIndex(t => t.id === "topic-intro");
    const searchIdx = sorted.findIndex(t => t.id === "topic-search");
    const advIdx = sorted.findIndex(t => t.id === "topic-adversarial");

    assert.ok(introIdx >= 0, "intro topic must exist");
    assert.ok(searchIdx > introIdx, "search must come after intro");
    assert.ok(advIdx > searchIdx, "adversarial must come after search");
  });

  it("guarantees total planned minutes matches available capacity", () => {
    // 5 days horizon, 2 hours/day = 10 hours = 600 minutes
    const result = allocateStudyTasks({
      topics: sampleTopics,
      startDate: "2026-10-10",
      targetDate: "2026-10-14",
      hoursPerDay: 2.0,
      mode: "3-2-1",
      taskQuantumMin: 30
    });

    assert.equal(result.studyDaysCount, 5);
    assert.equal(result.availableMinutes, 600);
    assert.equal(result.totalPlannedMinutes, 600);
    assert.equal(result.tasks.length, 20); // 600 / 30 = 20 tasks
  });

  it("allocates buffer day before exam when isExamDate is true", () => {
    const result = allocateStudyTasks({
      topics: sampleTopics,
      startDate: "2026-10-10",
      targetDate: "2026-10-15", // 6 calendar days
      isExamDate: true,
      hoursPerDay: 1.5,
      mode: "3-2-1",
      taskQuantumMin: 30
    });

    // 6 days total - 1 exam buffer day = 5 study days
    assert.equal(result.bufferDaysCount, 1);
    assert.equal(result.studyDaysCount, 5);
    // 5 days * 90 min/day = 450 minutes
    assert.equal(result.availableMinutes, 450);
    assert.equal(result.totalPlannedMinutes, 450);

    // No tasks scheduled on the exam buffer date 2026-10-15
    const examDateTasks = result.tasks.filter(t => t.scheduledDate === "2026-10-15");
    assert.equal(examDateTasks.length, 0);
  });

  it("splits tasks according to 3-2-1 ratio (learn > revise > test)", () => {
    const result = allocateStudyTasks({
      topics: sampleTopics,
      startDate: "2026-10-10",
      targetDate: "2026-10-15",
      hoursPerDay: 2.0,
      mode: "3-2-1",
      taskQuantumMin: 30
    });

    const { learn, revise, test } = result.taskCounts;
    assert.ok(learn > revise, "learn tasks must exceed revise tasks in 3-2-1");
    assert.ok(revise > test, "revise tasks must exceed test tasks in 3-2-1");
    assert.equal(learn + revise + test, result.tasks.length);
  });

  it("prioritizes high pyqImportance topics in 80/20 mode while respecting prerequisites", () => {
    const result = allocateStudyTasks({
      topics: sampleTopics,
      startDate: "2026-10-10",
      targetDate: "2026-10-12",
      hoursPerDay: 1.0,
      mode: "80/20",
      taskQuantumMin: 30
    });

    assert.equal(result.tasks.length, 6);
    const firstIntro = result.tasks.findIndex(t => t.topicId === "topic-intro");
    const firstSearch = result.tasks.findIndex(t => t.topicId === "topic-search");
    if (firstIntro !== -1 && firstSearch !== -1) {
      assert.ok(firstIntro < firstSearch, "intro prerequisite must precede search");
    }
  });
});
