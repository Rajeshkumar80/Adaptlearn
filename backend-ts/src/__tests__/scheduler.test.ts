import { computePriority, allocateTime, SchedulerItemInput } from "../services/scheduler";

function item(overrides: Partial<SchedulerItemInput>): SchedulerItemInput {
  return {
    topicId: "t1",
    topicName: "Topic 1",
    subjectCode: "BCS501",
    moduleNumber: 1,
    mastery: 0.5,
    pyqImportance: 50,
    dependencyCount: 0,
    lastReviewedAt: null,
    intervalDays: 1,
    estimatedMinutes: 30,
    ...overrides,
  };
}

describe("scheduler priority formula (§4.10)", () => {
  test("formula weights: low mastery dominates", () => {
    const lowMastery = computePriority(item({ mastery: 0.2, pyqImportance: 10, dependencyCount: 0 }));
    const highMastery = computePriority(item({ mastery: 0.9, pyqImportance: 10, dependencyCount: 0 }));
    expect(lowMastery).toBeGreaterThan(highMastery);
  });

  test("pyqImportance raises priority", () => {
    const low = computePriority(item({ mastery: 0.5, pyqImportance: 10 }));
    const high = computePriority(item({ mastery: 0.5, pyqImportance: 95 }));
    expect(high).toBeGreaterThan(low);
  });

  test("dependencies raise priority", () => {
    const none = computePriority(item({ dependencyCount: 0 }));
    const many = computePriority(item({ dependencyCount: 4 }));
    expect(many).toBeGreaterThan(none);
  });
});

describe("time allocation (§4.11)", () => {
  test("two different free-hour inputs produce proportionally different schedules", () => {
    const inputs = [item({ topicId: "a" }), item({ topicId: "b", mastery: 0.9 }), item({ topicId: "c", pyqImportance: 90 })];
    const plan2 = allocateTime(inputs, 2);
    const plan4 = allocateTime(inputs, 4);
    const total2 = plan2.reduce((s, i) => s + i.allocatedMinutes, 0);
    const total4 = plan4.reduce((s, i) => s + i.allocatedMinutes, 0);
    expect(total2).toBeGreaterThanOrEqual(110);
    expect(total2).toBeLessThanOrEqual(130);
    expect(total4).toBeGreaterThanOrEqual(230);
    expect(total4).toBeLessThanOrEqual(250);
  });

  test("highest priority item gets the most minutes", () => {
    const inputs = [item({ topicId: "a", mastery: 0.2, pyqImportance: 95 }), item({ topicId: "b", mastery: 0.95, pyqImportance: 5 })];
    const plan = allocateTime(inputs, 2);
    expect(plan[0].allocatedMinutes).toBeGreaterThanOrEqual(plan[1].allocatedMinutes);
  });
});
