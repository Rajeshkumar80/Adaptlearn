import { describe, it, expect } from "vitest";
import {
  calculateRetentionAt,
  generateProjectionPoints,
  TopicRetentionState,
} from "@/lib/forgetting-curve";

describe("Forgetting Curve & Retention Calculations", () => {
  it("handles never-reviewed topics with null lastReviewedAt without returning NaN", () => {
    const freshTopic: TopicRetentionState = {
      topicId: "topic-1",
      topicName: "Linear Algebra",
      subjectCode: "BCS301",
      moduleNumber: 1,
      mastery: 0.2,
      stability: 0.5,
      lastReviewedAt: null,
      timesReviewed: 0,
      retention: undefined,
    };

    const retentionDay0 = calculateRetentionAt(freshTopic, 0);
    const retentionDay3 = calculateRetentionAt(freshTopic, 3);
    const retentionDay7 = calculateRetentionAt(freshTopic, 7);

    expect(Number.isNaN(retentionDay0)).toBe(false);
    expect(Number.isNaN(retentionDay3)).toBe(false);
    expect(Number.isNaN(retentionDay7)).toBe(false);

    expect(retentionDay0).toBeGreaterThan(0);
    expect(retentionDay0).toBeLessThanOrEqual(1);
    expect(retentionDay7).toBeLessThanOrEqual(retentionDay0);
  });

  it("handles topics with missing or undefined fields safely", () => {
    const minimalTopic = {
      topicId: "topic-empty",
    };

    const points = generateProjectionPoints(minimalTopic as any);
    expect(points).toHaveLength(8);

    points.forEach((point) => {
      expect(Number.isNaN(point.retention)).toBe(false);
      expect(Number.isNaN(point.percentage)).toBe(false);
      expect(point.retention).toBeGreaterThanOrEqual(0);
      expect(point.retention).toBeLessThanOrEqual(1);
    });
  });

  it("handles zero or negative stability without division by zero", () => {
    const zeroStabilityTopic = {
      topicId: "topic-zero",
      stability: 0,
      retention: 0.8,
    };

    const retentionDay1 = calculateRetentionAt(zeroStabilityTopic as any, 1);
    expect(Number.isNaN(retentionDay1)).toBe(false);
    expect(Number.isFinite(retentionDay1)).toBe(true);
    expect(retentionDay1).toBeGreaterThanOrEqual(0);
  });

  it("handles long gap without underflow or NaN", () => {
    const oldTopic = {
      topicId: "topic-old",
      stability: 0.3,
      retention: 0.5,
    };

    const retentionDay100 = calculateRetentionAt(oldTopic as any, 100);
    expect(Number.isNaN(retentionDay100)).toBe(false);
    expect(retentionDay100).toBeGreaterThanOrEqual(0);
  });

  it("ensures higher stability yields slower forgetting", () => {
    const lowStabilityTopic = { stability: 0.2, retention: 1.0 };
    const highStabilityTopic = { stability: 0.9, retention: 1.0 };

    const lowAfter3Days = calculateRetentionAt(lowStabilityTopic as any, 3);
    const highAfter3Days = calculateRetentionAt(highStabilityTopic as any, 3);

    expect(highAfter3Days).toBeGreaterThan(lowAfter3Days);
  });
});
