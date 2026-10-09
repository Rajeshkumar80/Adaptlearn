import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { allocateStudyTasks, generateDates, PlanMode } from "../services/schedulerEngine";

describe("Scheduler Plan Generation Robustness & Edge Cases", () => {
  const topics = [
    {
      id: "t1",
      subjectCode: "BCS301",
      moduleNumber: 1,
      name: "Matrix Calculus",
      order: 1,
      pyqImportance: 0.9,
      mastery: 0.2,
      retention: 0.8,
      prerequisiteIds: [],
    },
    {
      id: "t2",
      subjectCode: "BCS301",
      moduleNumber: 1,
      name: "Eigenvalues & Eigenvectors",
      order: 2,
      pyqImportance: 0.95,
      mastery: 0.3,
      retention: 0.7,
      prerequisiteIds: ["t1"],
    },
  ];

  it("handles same-day exam target gracefully without crashing", () => {
    const today = new Date().toISOString().slice(0, 10);
    const alloc = allocateStudyTasks({
      topics,
      startDate: today,
      targetDate: today,
      isExamDate: true,
      hoursPerDay: 2,
      mode: "3-2-1" as PlanMode,
      preferredSlot: "EVENING",
    });

    assert.ok(alloc.tasks.length > 0, "Should generate tasks for single day");
    assert.equal(alloc.studyDaysCount, 1);
    assert.equal(alloc.tasks[0].scheduledDate, today);
  });

  it("handles past target dates gracefully by defaulting to single study day", () => {
    const today = new Date().toISOString().slice(0, 10);
    const alloc = allocateStudyTasks({
      topics,
      startDate: today,
      targetDate: "2020-01-01",
      isExamDate: false,
      hoursPerDay: 1,
      mode: "crunch" as PlanMode,
    });

    assert.ok(alloc.tasks.length > 0);
    assert.equal(alloc.tasks[0].scheduledDate, today);
  });

  it("produces correct task count and slot cycling across multiple days", () => {
    const today = new Date();
    const startDate = today.toISOString().slice(0, 10);
    const target = new Date(today);
    target.setDate(target.getDate() + 5);
    const targetDate = target.toISOString().slice(0, 10);

    const alloc = allocateStudyTasks({
      topics,
      startDate,
      targetDate,
      isExamDate: false,
      hoursPerDay: 2,
      mode: "balanced" as PlanMode,
      preferredSlot: "MORNING",
    });

    assert.equal(alloc.studyDaysCount, 6);
    assert.ok(alloc.tasks.length >= 6);
    assert.equal(alloc.tasks[0].scheduledSlot, "MORNING");
  });

  it("generateDates accurately spans start to end inclusively", () => {
    const dates = generateDates("2026-10-01", "2026-10-05");
    assert.deepEqual(dates, [
      "2026-10-01",
      "2026-10-02",
      "2026-10-03",
      "2026-10-04",
      "2026-10-05",
    ]);
  });
});
