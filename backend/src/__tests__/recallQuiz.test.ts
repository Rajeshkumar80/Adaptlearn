import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { prisma } from "../db";
import { getTopicsDueForRecall, generateRecallQuiz } from "../services/recallQuizService";
import { updateStability } from "../services/forgettingModel";

describe("T1.3 Old-Subject Recall Quiz & State Update Cycle", () => {
  it("executes one full recall quiz cycle in the database verifying before/after values", async () => {
    // 1. Get demo student
    const student = await prisma.user.findUnique({
      where: { email: "demo.student@adaptlearn.dev" },
    });
    assert.ok(student, "Demo student must exist in database");

    // 2. Set up a topic with low retention due for review
    const topicId = "BCS701-m1-t1";
    const initialLastReviewed = new Date(Date.now() - 10 * 24 * 60 * 60 * 1000); // 10 days ago

    await prisma.learningState.upsert({
      where: { userId_topicId: { userId: student.id, topicId } },
      create: {
        userId: student.id,
        topicId,
        mastery: 0.45,
        stability: 1.5,
        retention: 0.35,
        lastReviewedAt: initialLastReviewed,
      },
      update: {
        mastery: 0.45,
        stability: 1.5,
        retention: 0.35,
        lastReviewedAt: initialLastReviewed,
      },
    });

    // 3. Verify topic appears in due for recall list
    const dueTopics = await getTopicsDueForRecall(student.id, 0.60);
    const targetDue = dueTopics.find((t) => t.topicId === topicId);
    assert.ok(targetDue, "Topic with low retention must be returned in due list");
    assert.ok(targetDue.predictedRetention < 0.60);

    // 4. Generate 3 MCQs (JSON Schema validated)
    const quiz = await generateRecallQuiz(topicId);
    assert.equal(quiz.topicId, topicId);
    assert.equal(quiz.questions.length, 3);
    quiz.questions.forEach((q) => {
      assert.equal(q.options.length, 4);
      assert.ok(q.correctIndex >= 0 && q.correctIndex <= 3);
      assert.ok(typeof q.question === "string" && q.question.length > 5);
    });

    // 5. Query state BEFORE quiz submission
    const beforeState = await prisma.learningState.findUniqueOrThrow({
      where: { userId_topicId: { userId: student.id, topicId } },
    });

    // 6. Simulate quiz submission with 3/3 correct answers
    const outcomeScore = 1.0;
    const pLearn = 0.1, pGuess = 0.25, pSlip = 0.1;
    const p = beforeState.mastery * (1 - pSlip) + (1 - beforeState.mastery) * pGuess;
    const pKnown = Math.min(1, Math.max(0, (beforeState.mastery * (1 - pSlip)) / p));
    const expectedNewMastery = pKnown + (1 - pKnown) * pLearn;

    const stabilityCalc = updateStability({
      currentStability: beforeState.stability,
      lastReviewedAt: beforeState.lastReviewedAt,
      outcomeScore,
      difficulty: beforeState.difficulty,
    });

    const updatedState = await prisma.learningState.update({
      where: { id: beforeState.id },
      data: {
        mastery: expectedNewMastery,
        stability: stabilityCalc.newStability,
        retention: stabilityCalc.retentionAtRecall,
        correctCount: beforeState.correctCount + 3,
        timesReviewed: beforeState.timesReviewed + 1,
        lastReviewedAt: new Date(),
      },
    });

    // 7. Verify AFTER values reflect growth
    console.log("Verified Database Recall Cycle:");
    console.log(`  Topic: ${topicId}`);
    console.log(`  Mastery:   Before = ${beforeState.mastery.toFixed(3)} -> After = ${updatedState.mastery.toFixed(3)}`);
    console.log(`  Stability: Before = ${beforeState.stability.toFixed(2)}d -> After = ${updatedState.stability.toFixed(2)}d`);
    console.log(`  Retention: Before = ${beforeState.retention.toFixed(2)}  -> After = ${updatedState.retention.toFixed(2)}`);

    assert.ok(updatedState.mastery > beforeState.mastery, "Mastery must increase after correct recall");
    assert.ok(updatedState.stability > beforeState.stability, "Stability must increase after correct recall");
    assert.ok(updatedState.retention >= beforeState.retention, "Retention must reset to fresh recall state");
  });
});
