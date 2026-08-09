// SuperMemo-2 (SM-2) — spaced repetition intervals + easiness factor.
// Used to derive "forgetting urgency" for the scheduler and the forgetting curve.

export interface Sm2State {
  easiness: number; // EF, starts at 2.5
  intervalDays: number; // current interval
  repetition: number; // n
  lastReviewedAt: number | null; // epoch ms
}

export const sm2Defaults: Sm2State = {
  easiness: 2.5,
  intervalDays: 0,
  repetition: 0,
  lastReviewedAt: null,
};

// quality: 0-5 (5 = perfect recall)
export function sm2Update(state: Sm2State, quality: number): Sm2State {
  if (quality < 3) {
    return {
      ...state,
      repetition: 0,
      intervalDays: 0,
      lastReviewedAt: Date.now(),
    };
  }
  let ef = state.easiness + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (ef < 1.3) ef = 1.3;
  const repetition = state.repetition + 1;
  let intervalDays: number;
  if (repetition === 1) intervalDays = 1;
  else if (repetition === 2) intervalDays = 6;
  else intervalDays = Math.round(state.intervalDays * ef);
  return {
    easiness: ef,
    intervalDays,
    repetition,
    lastReviewedAt: Date.now(),
  };
}

// 0..1 urgency — how "due" a topic is based on elapsed time vs scheduled interval
export function forgettingUrgency(state: Sm2State): number {
  if (!state.lastReviewedAt) return 0.9; // never reviewed → high urgency
  const elapsedDays = (Date.now() - state.lastReviewedAt) / 86_400_000;
  const due = state.intervalDays <= 0 ? 1 : elapsedDays / state.intervalDays;
  return Math.min(1, Math.max(0, due));
}

// Forgetting-curve value (exponential decay) at t days after review
export function forgettingCurve(stabilityDays: number, elapsedDays: number): number {
  if (stabilityDays <= 0) return 0.5;
  return Math.exp(-elapsedDays / stabilityDays);
}
