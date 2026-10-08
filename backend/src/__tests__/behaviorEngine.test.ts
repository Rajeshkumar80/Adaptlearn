import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { deriveBehaviorMetricsFromEvents } from "../services/behaviorEngine";

describe("T1.2 Behavioral Learning Curve & Metric Derivation", () => {
  it("derives exact hand-calculated metrics from synthetic event log", () => {
    const events = [
      {
        eventType: "SESSION_START",
        createdAt: new Date("2026-10-01T09:00:00.000Z"),
        durationSec: 1800, // 30 min
        metadata: { responseTimeSec: 10 },
      },
      {
        eventType: "QUESTION_ASKED",
        createdAt: new Date("2026-10-01T09:15:00.000Z"),
        durationSec: 0,
        metadata: { responseTimeSec: 14 },
      },
      {
        eventType: "SESSION_START",
        createdAt: new Date("2026-10-02T10:00:00.000Z"),
        durationSec: 2400, // 40 min
        metadata: { responseTimeSec: 12 },
      },
      {
        eventType: "QUESTION_ASKED",
        createdAt: new Date("2026-10-02T10:20:00.000Z"),
        durationSec: 0,
        metadata: {},
      },
      {
        eventType: "SESSION_START",
        createdAt: new Date("2026-10-03T11:00:00.000Z"),
        durationSec: 3000, // 50 min
        metadata: { responseTimeSec: 16 },
      },
    ];

    const masteryGainedTotal = 0.40;
    const metrics = deriveBehaviorMetricsFromEvents(events, masteryGainedTotal);

    // Hand-calculated assertions:
    assert.equal(metrics.hasSufficientData, true);
    assert.equal(metrics.totalStudyMinutes, 120); // (1800 + 2400 + 3000) / 60
    assert.equal(metrics.studyStreakDays, 3); // 3 consecutive days
    assert.equal(metrics.preferredStudyWindow, "MORNING");
    assert.equal(metrics.averageResponseTimeSeconds, 13.0); // (10 + 14 + 12 + 16) / 4
    assert.equal(metrics.totalSessionsLogged, 3);
    assert.equal(metrics.askFrequencyPerSession, 0.7); // 2 questions / 3 sessions = 0.666 -> 0.7
    assert.equal(metrics.learningVelocityPerHour, 0.20); // 0.40 / 2 hours = 0.20
    assert.equal(metrics.learningSpeedCategory, "FAST");
  });

  it("returns explicit INSUFFICIENT_DATA status on empty or minimal logs without fabricating numbers", () => {
    const emptyMetrics = deriveBehaviorMetricsFromEvents([]);
    assert.equal(emptyMetrics.hasSufficientData, false);
    assert.equal(emptyMetrics.preferredStudyWindow, "INSUFFICIENT_DATA");
    assert.equal(emptyMetrics.learningSpeedCategory, "INSUFFICIENT_DATA");
    assert.equal(emptyMetrics.studyStreakDays, 0);
    assert.equal(emptyMetrics.totalStudyMinutes, 0);

    const singleEvent = deriveBehaviorMetricsFromEvents([
      {
        eventType: "SESSION_START",
        createdAt: new Date(),
        durationSec: 300,
        metadata: {},
      },
    ]);
    assert.equal(singleEvent.hasSufficientData, false);
    assert.equal(singleEvent.preferredStudyWindow, "INSUFFICIENT_DATA");
  });
});
