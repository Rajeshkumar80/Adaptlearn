/**
 * AdaptLearn Personalised Forgetting & Stability Engine (SM-2 / DSR variant)
 * Tracks per-student, per-topic memory stability S and calculates retention R = exp(-t / S).
 */

export interface StabilityInput {
  currentStability: number;
  lastReviewedAt: Date | string | null;
  outcomeScore: number; // 0.0 to 1.0 (1 = correct, 0 = wrong)
  reviewDate?: Date;
  difficulty?: number;
}

export interface StabilityResult {
  newStability: number; // in days
  retentionAtRecall: number; // 0.0 to 1.0
  predictedRetention: number; // 0.0 to 1.0
  daysElapsed: number;
}

export const MIN_STABILITY_DAYS = 0.5;
export const MAX_STABILITY_DAYS = 365.0;
export const DEFAULT_INITIAL_STABILITY = 1.0;

/**
 * Calculates current predicted retention given elapsed days and stability.
 */
export function calculateRetention(daysElapsed: number, stability: number): number {
  const safeDays = Math.max(0, Number.isFinite(daysElapsed) ? daysElapsed : 0);
  const safeStability = Math.max(MIN_STABILITY_DAYS, Number.isFinite(stability) ? stability : DEFAULT_INITIAL_STABILITY);
  const retention = Math.exp(-safeDays / safeStability);
  return Math.max(0, Math.min(1, Math.round(retention * 1000) / 1000));
}

/**
 * Updates topic stability based on observed recall outcome vs predicted retention.
 */
export function updateStability(input: StabilityInput): StabilityResult {
  const now = input.reviewDate || new Date();
  let daysElapsed = 0;

  if (input.lastReviewedAt) {
    const lastDate = new Date(input.lastReviewedAt).getTime();
    if (!Number.isNaN(lastDate)) {
      daysElapsed = Math.max(0, (now.getTime() - lastDate) / (1000 * 60 * 60 * 24));
    }
  }

  const currentStability = Number.isFinite(input.currentStability) && input.currentStability > 0
    ? input.currentStability
    : DEFAULT_INITIAL_STABILITY;

  const predictedRetention = calculateRetention(daysElapsed, currentStability);
  const outcome = Math.max(0, Math.min(1, Number.isFinite(input.outcomeScore) ? input.outcomeScore : 0));

  let newStability: number;

  if (!input.lastReviewedAt || daysElapsed < 0.01) {
    // Brand new topic or immediate repetition within minutes
    if (outcome >= 0.7) {
      newStability = Math.min(MAX_STABILITY_DAYS, currentStability * 1.25);
    } else {
      newStability = Math.max(MIN_STABILITY_DAYS, currentStability * 0.75);
    }
  } else if (outcome >= 0.5) {
    // Successful recall: reward more if recall occurred near or below predicted threshold
    const surpriseFactor = Math.max(0.1, 1 - predictedRetention);
    const difficultyFactor = input.difficulty ? Math.max(0.5, 1 - input.difficulty * 0.3) : 1.0;
    const growthMultiplier = 1 + (0.4 + 0.3 * surpriseFactor) * difficultyFactor;
    newStability = Math.min(MAX_STABILITY_DAYS, currentStability * growthMultiplier);
  } else {
    // Recall lapse (forgotten): decay stability proportionally to failure severity
    const lapsePenalty = 0.4 + 0.2 * outcome;
    newStability = Math.max(MIN_STABILITY_DAYS, currentStability * lapsePenalty);
  }

  const clampedStability = Math.round(Math.max(MIN_STABILITY_DAYS, Math.min(MAX_STABILITY_DAYS, newStability)) * 100) / 100;
  const retentionAtRecall = calculateRetention(0, clampedStability);

  return {
    newStability: clampedStability,
    retentionAtRecall,
    predictedRetention,
    daysElapsed: Math.round(daysElapsed * 100) / 100,
  };
}

/**
 * Projects retention across future day intervals (D+0 to D+N).
 */
export function projectForgettingCurve(stability: number, daysToProject: number = 7): { day: string; retention: number }[] {
  const safeStability = Math.max(MIN_STABILITY_DAYS, stability || DEFAULT_INITIAL_STABILITY);
  return Array.from({ length: daysToProject + 1 }, (_, index) => ({
    day: `D+${index}`,
    retention: calculateRetention(index, safeStability),
  }));
}
