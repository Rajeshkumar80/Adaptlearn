// Bayesian Knowledge Tracing (BKT)
// Standard 4-parameter BKT: pLearn, pGuess, pSlip, pKnown (mastery = pKnown).
// Thresholds: mastery >= 0.7 counts as "mastered" (used by dependency gating).

export const BKT = {
  pLearn: 0.1, // probability of learning after an opportunity
  pGuess: 0.25, // probability of guessing correctly without knowledge
  pSlip: 0.1, // probability of slipping (wrong despite knowledge)
  masteryThreshold: 0.7,
};

export interface BktState {
  mastery: number;
  correctCount: number;
  wrongCount: number;
  timesReviewed: number;
}

export function probabilityOfCorrect(mastery: number): number {
  return mastery * (1 - BKT.pSlip) + (1 - mastery) * BKT.pGuess;
}

export function updateBkt(state: BktState, correct: boolean): BktState {
  const p = probabilityOfCorrect(state.mastery);
  let pKnown: number;
  if (correct) {
    pKnown = (state.mastery * (1 - BKT.pSlip)) / p;
  } else {
    pKnown = (state.mastery * BKT.pSlip) / (1 - p);
  }
  // clamp to avoid floating point drift out of [0,1]
  pKnown = Math.min(1, Math.max(0, pKnown));
  // learning step after the observation
  pKnown = pKnown + (1 - pKnown) * BKT.pLearn;

  return {
    mastery: pKnown,
    correctCount: state.correctCount + (correct ? 1 : 0),
    wrongCount: state.wrongCount + (correct ? 0 : 1),
    timesReviewed: state.timesReviewed + 1,
  };
}
