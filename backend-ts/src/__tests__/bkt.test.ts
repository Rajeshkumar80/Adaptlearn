import { updateBkt, probabilityOfCorrect, BKT } from "../services/bkt";

describe("BKT update", () => {
  test("wrong answer then right answer moves mastery up over baseline", () => {
    const initial = { mastery: 0.5, correctCount: 0, wrongCount: 0, timesReviewed: 0 };
    const afterWrong = updateBkt(initial, false);
    const afterRight = updateBkt(afterWrong, true);
    expect(afterWrong.mastery).toBeLessThan(initial.mastery);
    expect(afterRight.mastery).toBeGreaterThan(afterWrong.mastery);
    expect(afterRight.correctCount).toBe(1);
    expect(afterRight.wrongCount).toBe(1);
    expect(afterRight.timesReviewed).toBe(2);
  });

  test("repeated correct answers approach mastery threshold", () => {
    let state = { mastery: 0.2, correctCount: 0, wrongCount: 0, timesReviewed: 0 };
    for (let i = 0; i < 30; i++) state = updateBkt(state, true);
    expect(state.mastery).toBeGreaterThan(BKT.masteryThreshold);
  });

  test("mastery stays within [0,1]", () => {
    let state = { mastery: 0.999, correctCount: 0, wrongCount: 0, timesReviewed: 0 };
    for (let i = 0; i < 5; i++) state = updateBkt(state, true);
    expect(state.mastery).toBeLessThanOrEqual(1);
    state = { mastery: 0.001, correctCount: 0, wrongCount: 0, timesReviewed: 0 };
    for (let i = 0; i < 5; i++) state = updateBkt(state, false);
    expect(state.mastery).toBeGreaterThanOrEqual(0);
  });

  test("probability of correct is between guess and (1-slip)", () => {
    expect(probabilityOfCorrect(0)).toBe(BKT.pGuess);
    expect(probabilityOfCorrect(1)).toBe(1 - BKT.pSlip);
  });
});
