import { sm2Update, sm2Defaults, forgettingUrgency, forgettingCurve } from "../services/sm2";

describe("SM-2", () => {
  test("interval grows across successful repetitions", () => {
    let s = sm2Defaults;
    const intervals: number[] = [];
    for (let i = 0; i < 4; i++) {
      s = sm2Update(s, 4);
      intervals.push(s.intervalDays);
    }
    expect(intervals[0]).toBe(1);
    expect(intervals[1]).toBe(6);
    expect(intervals[2]).toBeGreaterThan(intervals[1]);
    expect(intervals[3]).toBeGreaterThan(intervals[2]);
  });

  test("quality < 3 resets repetition", () => {
    let s = sm2Update(sm2Defaults, 5);
    s = sm2Update(s, 2);
    expect(s.repetition).toBe(0);
    expect(s.intervalDays).toBe(0);
  });

  test("easiness factor never drops below 1.3", () => {
    let s = sm2Defaults;
    for (let i = 0; i < 10; i++) s = sm2Update(s, 1);
    expect(s.easiness).toBeGreaterThanOrEqual(1.3);
  });

  test("never-reviewed topic has high urgency; recently reviewed has low", () => {
    expect(forgettingUrgency(sm2Defaults)).toBeGreaterThan(0.8);
    const reviewed = sm2Update(sm2Defaults, 5);
    expect(forgettingUrgency(reviewed)).toBeLessThan(0.2);
  });

  test("forgetting curve decays with elapsed days", () => {
    expect(forgettingCurve(10, 0)).toBe(1);
    expect(forgettingCurve(10, 30)).toBeLessThan(forgettingCurve(10, 5));
  });
});
