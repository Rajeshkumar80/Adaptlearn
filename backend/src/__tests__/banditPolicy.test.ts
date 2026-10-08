import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { prisma } from "../db";
import {
  selectBanditAction,
  updateBanditReward,
  getStudentBanditPriors,
  BanditAction,
} from "../services/banditPolicy";

describe("T1.4 Contextual Bandit Adaptive Policy (Thompson Sampling)", () => {
  it("shifts action selection toward higher-reward action in simulation", async () => {
    const simUserId = `sim-student-${Date.now()}`;
    const topicId = "BCS701-m1-t1";

    const context = {
      mastery: 0.5,
      retention: 0.5,
      studyStreakDays: 2,
    };

    // We will reward REVIEW with high reward (+0.8), others with low reward (-0.3)
    const trueRewardDist: Record<BanditAction, number> = {
      REVIEW: 0.8,
      NEW_TOPIC: -0.3,
      RECALL_QUIZ: -0.1,
      AI_EXPLAIN: -0.2,
    };

    const actionHistory: BanditAction[] = [];

    for (let round = 1; round <= 70; round++) {
      const decision = await selectBanditAction(simUserId, topicId, context);
      assert.equal(decision.policy, "bandit-based adaptive policy");
      actionHistory.push(decision.action);

      const observedReward = trueRewardDist[decision.action] + (Math.random() * 0.1 - 0.05);
      await updateBanditReward(simUserId, topicId, decision.action, observedReward);
    }

    const firstHalf = actionHistory.slice(0, 25);
    const secondHalf = actionHistory.slice(45);

    const reviewCountFirstHalf = firstHalf.filter((a) => a === "REVIEW").length;
    const reviewCountSecondHalf = secondHalf.filter((a) => a === "REVIEW").length;

    console.log("Bandit Simulation Results:");
    console.log(`  First 25 rounds REVIEW selections: ${reviewCountFirstHalf} / 25`);
    console.log(`  Last 25 rounds REVIEW selections:  ${reviewCountSecondHalf} / 25`);

    // In the second half, the optimal arm (REVIEW) should dominate
    assert.ok(
      reviewCountSecondHalf > reviewCountFirstHalf,
      "Policy should select REVIEW more frequently in second half than first half"
    );
    assert.ok(
      reviewCountSecondHalf >= 15,
      "Policy should converge toward high-reward action (>=15 out of 25)"
    );

    const finalPriors = getStudentBanditPriors(simUserId);
    assert.ok(finalPriors.REVIEW.alpha > finalPriors.NEW_TOPIC.alpha);
  });

  it("verifies persistent ActivityLog rows for bandit decisions and rewards", async () => {
    const student = await prisma.user.findUnique({
      where: { email: "demo.student@adaptlearn.dev" },
    });
    assert.ok(student);

    const topicId = "BCS701-m1-t1";
    const decision = await selectBanditAction(student.id, topicId, { mastery: 0.4, retention: 0.45 });
    await updateBanditReward(student.id, topicId, decision.action, 0.65);

    const logs = await prisma.activityLog.findMany({
      where: {
        userId: student.id,
        eventType: { in: ["BANDIT_DECISION", "BANDIT_REWARD"] },
      },
      orderBy: { createdAt: "desc" },
      take: 2,
    });

    assert.ok(logs.length >= 2, "Must find at least 2 logged bandit events");
    const decisionLog = logs.find((l) => l.eventType === "BANDIT_DECISION");
    assert.ok(decisionLog);
    assert.equal((decisionLog.metadata as any)?.policy, "bandit-based adaptive policy");
  });
});
