import { prisma } from "../db";

export type BanditAction = "REVIEW" | "NEW_TOPIC" | "RECALL_QUIZ" | "AI_EXPLAIN";

export const BANDIT_ACTIONS: BanditAction[] = ["REVIEW", "NEW_TOPIC", "RECALL_QUIZ", "AI_EXPLAIN"];

export interface StudentContextState {
  mastery: number; // 0.0 - 1.0
  retention: number; // 0.0 - 1.0
  studyStreakDays?: number;
  averageResponseTimeSeconds?: number;
  learningSpeedCategory?: string;
  topicDifficulty?: number;
}

export interface BanditArmParameters {
  alpha: number; // successes / pseudo-counts
  beta: number;  // failures / pseudo-counts
  selections: number;
  totalReward: number;
}

export interface BanditDecision {
  policy: "bandit-based adaptive policy";
  topicId: string;
  action: BanditAction;
  rationale: string;
  confidenceScore: number;
  sampledValues: Record<BanditAction, number>;
}

// In-memory policy cache with persistence to ActivityLog
const studentPolicyPriors = new Map<string, Record<BanditAction, BanditArmParameters>>();

function initDefaultPriors(): Record<BanditAction, BanditArmParameters> {
  return {
    REVIEW: { alpha: 2.0, beta: 2.0, selections: 0, totalReward: 0 },
    NEW_TOPIC: { alpha: 2.0, beta: 2.0, selections: 0, totalReward: 0 },
    RECALL_QUIZ: { alpha: 2.0, beta: 2.0, selections: 0, totalReward: 0 },
    AI_EXPLAIN: { alpha: 2.0, beta: 2.0, selections: 0, totalReward: 0 },
  };
}

/**
 * Standard Beta distribution random sampler for Thompson Sampling.
 */
function sampleBeta(alpha: number, beta: number): number {
  // Box-Muller / Gamma approximation for sampling Beta
  const gammaSample = (shape: number): number => {
    if (shape < 1) {
      return gammaSample(shape + 1) * Math.pow(Math.random(), 1 / shape);
    }
    const d = shape - 1 / 3;
    const c = 1 / Math.sqrt(9 * d);
    while (true) {
      let u1 = Math.random();
      let u2 = Math.random();
      let z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
      let v = 1 + c * z;
      if (v <= 0) continue;
      v = v * v * v;
      let u = Math.random();
      if (u < 1 - 0.0331 * z * z * z * z) return d * v;
      if (Math.log(u) < 0.5 * z * z + d * (1 - v + Math.log(v))) return d * v;
    }
  };

  const g1 = gammaSample(Math.max(0.1, alpha));
  const g2 = gammaSample(Math.max(0.1, beta));
  return g1 / (g1 + g2);
}

/**
 * Selects the optimal study action for a student and topic using Thompson Sampling
 * under a "bandit-based adaptive policy".
 */
export async function selectBanditAction(
  userId: string,
  topicId: string,
  context: StudentContextState
): Promise<BanditDecision> {
  let priors = studentPolicyPriors.get(userId);
  if (!priors) {
    priors = initDefaultPriors();
    studentPolicyPriors.set(userId, priors);
  }

  // Adjust sampling priors based on context heuristics
  const sampledValues: Record<BanditAction, number> = {} as any;
  let bestAction: BanditAction = "REVIEW";
  let highestSampled = -Infinity;

  for (const action of BANDIT_ACTIONS) {
    const arm = priors[action];
    let effectiveAlpha = arm.alpha;
    let effectiveBeta = arm.beta;

    // Contextual bias adjustments
    if (action === "REVIEW" && context.retention < 0.5) effectiveAlpha += 1.5;
    if (action === "AI_EXPLAIN" && context.mastery < 0.3) effectiveAlpha += 1.5;
    if (action === "RECALL_QUIZ" && context.retention >= 0.5 && context.retention < 0.7) effectiveAlpha += 1.0;
    if (action === "NEW_TOPIC" && context.mastery >= 0.8) effectiveAlpha += 1.5;

    const sample = sampleBeta(effectiveAlpha, effectiveBeta);
    sampledValues[action] = Math.round(sample * 1000) / 1000;

    if (sample > highestSampled) {
      highestSampled = sample;
      bestAction = action;
    }
  }

  priors[bestAction].selections++;

  const rationales: Record<BanditAction, string> = {
    REVIEW: `Retention is at ${Math.round(context.retention * 100)}% — a targeted review prevents forgetting.`,
    NEW_TOPIC: `Mastery on current prerequisites is strong (${Math.round(context.mastery * 100)}%) — ready for new content.`,
    RECALL_QUIZ: `Active recall quiz will test retention stability and reinforce memory.`,
    AI_EXPLAIN: `Conceptual mastery is low (${Math.round(context.mastery * 100)}%) — step-by-step breakdown recommended.`,
  };

  // Log decision to database
  try {
    await prisma.activityLog.create({
      data: {
        userId,
        eventType: "BANDIT_DECISION",
        topicId,
        metadata: {
          policy: "bandit-based adaptive policy",
          action: bestAction,
          context: context as any,
          sampledValues,
        },
      },
    });
  } catch {
    // Ignore DB log failures in unit-test/offline mode
  }

  return {
    policy: "bandit-based adaptive policy",
    topicId,
    action: bestAction,
    rationale: rationales[bestAction],
    confidenceScore: Math.round(highestSampled * 100) / 100,
    sampledValues,
  };
}

/**
 * Updates the bandit arm parameters based on observed reward (retention gain or quiz score).
 */
export async function updateBanditReward(
  userId: string,
  topicId: string,
  action: BanditAction,
  reward: number // e.g., retention gain (R_after - R_before), between -1.0 and 1.0
) {
  let priors = studentPolicyPriors.get(userId);
  if (!priors) {
    priors = initDefaultPriors();
    studentPolicyPriors.set(userId, priors);
  }

  const arm = priors[action];
  // Normalize reward from [-1, 1] to [0, 1]
  const normalizedReward = Math.max(0, Math.min(1, (reward + 1) / 2));

  arm.alpha += normalizedReward;
  arm.beta += 1 - normalizedReward;
  arm.totalReward += reward;

  try {
    await prisma.activityLog.create({
      data: {
        userId,
        eventType: "BANDIT_REWARD",
        topicId,
        metadata: {
          policy: "bandit-based adaptive policy",
          action,
          reward,
          normalizedReward,
          newAlpha: arm.alpha,
          newBeta: arm.beta,
        },
      },
    });
  } catch {
    // Ignore DB log failures in unit test mode
  }

  return {
    action,
    reward,
    updatedAlpha: arm.alpha,
    updatedBeta: arm.beta,
  };
}

export function getStudentBanditPriors(userId: string): Record<BanditAction, BanditArmParameters> {
  return studentPolicyPriors.get(userId) || initDefaultPriors();
}
