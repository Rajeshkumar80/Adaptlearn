import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  calculateRetention,
  updateStability,
  projectForgettingCurve,
  MIN_STABILITY_DAYS,
  MAX_STABILITY_DAYS,
} from "../services/forgettingModel";

describe("T1.1 Personalized Forgetting & Stability Engine", () => {
  it("calculates retention decaying exponentially with elapsed days", () => {
    const day0 = calculateRetention(0, 5);
    const day5 = calculateRetention(5, 5);
    const day10 = calculateRetention(10, 5);

    assert.equal(day0, 1.0);
    assert.ok(day5 < day0, "Day 5 retention should be lower than Day 0");
    assert.ok(Math.abs(day5 - Math.exp(-1)) < 0.05, "Day 5 retention should equal ~e^-1 (0.368)");
    assert.ok(day10 < day5, "Day 10 retention should be lower than Day 5");
  });

  it("handles edge case: brand new topic with no review history", () => {
    const resultSuccess = updateStability({
      currentStability: 1.0,
      lastReviewedAt: null,
      outcomeScore: 1.0,
    });

    assert.ok(resultSuccess.newStability > 1.0, "Successful first review should increase stability");
    assert.equal(resultSuccess.daysElapsed, 0);

    const resultFail = updateStability({
      currentStability: 1.0,
      lastReviewedAt: null,
      outcomeScore: 0.0,
    });

    assert.ok(resultFail.newStability < 1.0, "Failed first review should decrease stability");
  });

  it("handles edge case: very long gap without underflow or NaN", () => {
    const longAgo = new Date(Date.now() - 150 * 24 * 60 * 60 * 1000); // 150 days ago
    const result = updateStability({
      currentStability: 3.0,
      lastReviewedAt: longAgo,
      outcomeScore: 1.0, // remembered despite long gap!
    });

    assert.ok(Number.isFinite(result.newStability));
    assert.ok(!Number.isNaN(result.newStability));
    assert.ok(result.newStability > 3.0, "Successful recall after long interval should boost stability");
    assert.ok(result.predictedRetention < 0.05, "Predicted retention should be near 0 after 150 days");
  });

  it("demonstrates stability growth over a 5-step perfect review streak", () => {
    let stability = 1.0;
    let lastDate = new Date();

    for (let step = 1; step <= 5; step++) {
      // Review after interval approximately matching current stability
      const reviewDate = new Date(lastDate.getTime() + stability * 24 * 60 * 60 * 1000);
      const update = updateStability({
        currentStability: stability,
        lastReviewedAt: lastDate,
        outcomeScore: 1.0,
        reviewDate,
      });

      assert.ok(update.newStability > stability, `Step ${step}: stability should increase`);
      stability = update.newStability;
      lastDate = reviewDate;
    }

    assert.ok(stability > 5.0, "5 consecutive successful reviews should grow stability significantly");
    assert.ok(stability <= MAX_STABILITY_DAYS, "Stability should respect MAX_STABILITY_DAYS");
  });

  it("penalizes lapsed recall and clamps to minimum stability floor", () => {
    const lastDate = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000);
    const lapsed = updateStability({
      currentStability: 1.0,
      lastReviewedAt: lastDate,
      outcomeScore: 0.0,
    });

    assert.ok(lapsed.newStability <= 1.0, "Lapsed recall should drop stability");
    assert.ok(lapsed.newStability >= MIN_STABILITY_DAYS, "Should not drop below MIN_STABILITY_DAYS");
  });

  it("generates 8-day projection curve without NaN or out-of-bounds values", () => {
    const curve = projectForgettingCurve(4.5, 7);
    assert.equal(curve.length, 8);
    assert.equal(curve[0].day, "D+0");
    assert.equal(curve[0].retention, 1.0);
    assert.equal(curve[7].day, "D+7");

    curve.forEach((point) => {
      assert.ok(!Number.isNaN(point.retention));
      assert.ok(point.retention >= 0 && point.retention <= 1.0);
    });
  });
});
