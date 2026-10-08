export interface TopicRetentionState {
  topicId: string;
  topicName: string;
  subjectCode: string;
  moduleNumber: number;
  mastery: number;
  stability: number;
  retention?: number;
  lastReviewedAt?: string | null;
  timesReviewed?: number;
  correctCount?: number;
  wrongCount?: number;
}

export interface RetentionPoint {
  day: string;
  retention: number;
  percentage: number;
}

/**
 * Calculates projected retention R(t) at day offset using Ebbinghaus forgetting model.
 * Guarantees a safe, bounded number between 0.0 and 1.0; never returns NaN.
 */
export function calculateRetentionAt(
  topic: Partial<TopicRetentionState> | null | undefined,
  dayOffset: number
): number {
  if (!topic) return 1.0;

  const validDay = Number.isFinite(dayOffset) && dayOffset >= 0 ? dayOffset : 0;
  
  // Safe base retention: if topic has explicit retention, use it, else default to mastery or 1.0
  let baseRetention = 1.0;
  if (typeof topic.retention === "number" && Number.isFinite(topic.retention)) {
    baseRetention = Math.max(0.1, Math.min(1.0, topic.retention));
  } else if (typeof topic.mastery === "number" && Number.isFinite(topic.mastery)) {
    baseRetention = Math.max(0.2, Math.min(1.0, topic.mastery));
  }

  // Safe stability factor: clamped between 0.1 and 1.0
  const stability = typeof topic.stability === "number" && Number.isFinite(topic.stability)
    ? Math.max(0.1, Math.min(1.0, topic.stability))
    : 0.5;

  // Higher stability = slower decay. Never divide by zero.
  const decayRate = Math.max(0.02, 0.15 * (1 - 0.85 * stability));
  const decayed = baseRetention * Math.exp(-decayRate * validDay);

  if (!Number.isFinite(decayed) || Number.isNaN(decayed)) {
    return 1.0;
  }

  return Math.max(0, Math.min(1, Math.round(decayed * 100) / 100));
}

/**
 * Generates an 8-day projection array (D+0 to D+7) for charting.
 */
export function generateProjectionPoints(
  topic: Partial<TopicRetentionState> | null | undefined
): RetentionPoint[] {
  return Array.from({ length: 8 }, (_, dayIndex) => {
    const retentionValue = calculateRetentionAt(topic, dayIndex);
    return {
      day: `D+${dayIndex}`,
      retention: retentionValue,
      percentage: Math.round(retentionValue * 100),
    };
  });
}
