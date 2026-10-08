import { prisma } from "../db";

export interface BehavioralMetrics {
  hasSufficientData: boolean;
  totalSessionsLogged: number;
  totalStudyMinutes: number;
  studyStreakDays: number;
  preferredStudyWindow: "MORNING" | "AFTERNOON" | "EVENING" | "NIGHT" | "INSUFFICIENT_DATA";
  averageSessionGapHours: number;
  averageResponseTimeSeconds: number;
  askFrequencyPerSession: number;
  learningVelocityPerHour: number; // mastery gain per 60 minutes
  learningSpeedCategory: "FAST" | "MODERATE" | "STEADY" | "INSUFFICIENT_DATA";
  dailyActivityDistribution: Record<string, number>; // date "YYYY-MM-DD" -> count
}

export interface ActivityEventInput {
  userId: string;
  eventType: string;
  subjectCode?: string;
  topicId?: string;
  durationSec?: number;
  metadata?: Record<string, any>;
  createdAt?: Date;
}

/**
 * Logs a real behavioral event into the persistent ActivityLog.
 */
export async function logActivityEvent(event: ActivityEventInput) {
  return prisma.activityLog.create({
    data: {
      userId: event.userId,
      eventType: event.eventType,
      subjectCode: event.subjectCode || null,
      topicId: event.topicId || null,
      durationSec: event.durationSec || 0,
      metadata: event.metadata || {},
      createdAt: event.createdAt || new Date(),
    },
  });
}

/**
 * Derives empirical behavioral learning metrics purely from real activity logs and study sessions.
 * Never fabricates data; returns explicit INSUFFICIENT_DATA states when logs are sparse.
 */
export function deriveBehaviorMetricsFromEvents(
  events: {
    eventType: string;
    createdAt: Date;
    durationSec: number | null;
    metadata: any;
  }[],
  masteryGainedTotal: number = 0
): BehavioralMetrics {
  const totalEvents = events.length;

  if (totalEvents === 0) {
    return {
      hasSufficientData: false,
      totalSessionsLogged: 0,
      totalStudyMinutes: 0,
      studyStreakDays: 0,
      preferredStudyWindow: "INSUFFICIENT_DATA",
      averageSessionGapHours: 0,
      averageResponseTimeSeconds: 0,
      askFrequencyPerSession: 0,
      learningVelocityPerHour: 0,
      learningSpeedCategory: "INSUFFICIENT_DATA",
      dailyActivityDistribution: {},
    };
  }

  // 1. Group by calendar date (UTC/local ISO day)
  const dailyActivityDistribution: Record<string, number> = {};
  const hourBuckets = { MORNING: 0, AFTERNOON: 0, EVENING: 0, NIGHT: 0 };
  let totalStudySeconds = 0;
  let totalQuestionsAsked = 0;
  let totalResponseTimeSec = 0;
  let responseCount = 0;
  let sessionCount = 0;

  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );

  for (const ev of sortedEvents) {
    const d = new Date(ev.createdAt);
    const dayStr = d.toISOString().slice(0, 10);
    dailyActivityDistribution[dayStr] = (dailyActivityDistribution[dayStr] || 0) + 1;

    const hour = d.getUTCHours();
    if (hour >= 6 && hour < 12) hourBuckets.MORNING++;
    else if (hour >= 12 && hour < 17) hourBuckets.AFTERNOON++;
    else if (hour >= 17 && hour < 22) hourBuckets.EVENING++;
    else hourBuckets.NIGHT++;

    if (ev.durationSec) {
      totalStudySeconds += ev.durationSec;
    }

    if (ev.eventType === "SESSION_START") {
      sessionCount++;
    } else if (ev.eventType === "QUESTION_ASKED") {
      totalQuestionsAsked++;
    }

    if (ev.metadata?.responseTimeSec && typeof ev.metadata.responseTimeSec === "number") {
      totalResponseTimeSec += ev.metadata.responseTimeSec;
      responseCount++;
    }
  }

  // Fallback: if explicit SESSION_START not used, distinct active days or sessions >= 1
  const effectiveSessions = Math.max(sessionCount, Object.keys(dailyActivityDistribution).length);

  // 2. Study Streak Calculation (consecutive days ending on latest event day)
  const uniqueDays = Object.keys(dailyActivityDistribution).sort();
  let streak = 0;
  if (uniqueDays.length > 0) {
    streak = 1;
    for (let i = uniqueDays.length - 1; i > 0; i--) {
      const current = new Date(uniqueDays[i]).getTime();
      const previous = new Date(uniqueDays[i - 1]).getTime();
      const dayDiff = Math.round((current - previous) / (1000 * 60 * 60 * 24));
      if (dayDiff === 1) {
        streak++;
      } else {
        break;
      }
    }
  }

  // 3. Preferred Study Window
  let preferredWindow: "MORNING" | "AFTERNOON" | "EVENING" | "NIGHT" | "INSUFFICIENT_DATA" = "INSUFFICIENT_DATA";
  let maxHourCount = 0;
  for (const [windowName, count] of Object.entries(hourBuckets)) {
    if (count > maxHourCount) {
      maxHourCount = count;
      preferredWindow = windowName as any;
    }
  }

  // 4. Average Session Gap (hours)
  let totalGapHours = 0;
  let gapCount = 0;
  for (let i = 1; i < sortedEvents.length; i++) {
    const diffMs =
      new Date(sortedEvents[i].createdAt).getTime() - new Date(sortedEvents[i - 1].createdAt).getTime();
    const diffHours = diffMs / (1000 * 60 * 60);
    // Only count gaps larger than 30 mins as distinct session gaps
    if (diffHours >= 0.5) {
      totalGapHours += diffHours;
      gapCount++;
    }
  }
  const averageSessionGapHours = gapCount > 0 ? Math.round((totalGapHours / gapCount) * 10) / 10 : 0;

  // 5. Ask Frequency & Response Speed
  const askFrequencyPerSession =
    effectiveSessions > 0 ? Math.round((totalQuestionsAsked / effectiveSessions) * 10) / 10 : 0;
  const averageResponseTimeSeconds =
    responseCount > 0 ? Math.round((totalResponseTimeSec / responseCount) * 10) / 10 : 0;

  // 6. Learning Velocity (mastery gain per 60 study minutes)
  const studyHours = Math.max(0.1, totalStudySeconds / 3600);
  const velocityPerHour = Math.round((masteryGainedTotal / studyHours) * 1000) / 1000;

  let speedCategory: "FAST" | "MODERATE" | "STEADY" | "INSUFFICIENT_DATA" = "INSUFFICIENT_DATA";
  if (totalEvents >= 3) {
    if (velocityPerHour >= 0.15) speedCategory = "FAST";
    else if (velocityPerHour >= 0.05) speedCategory = "MODERATE";
    else speedCategory = "STEADY";
  }

  return {
    hasSufficientData: totalEvents >= 3,
    totalSessionsLogged: effectiveSessions,
    totalStudyMinutes: Math.round(totalStudySeconds / 60),
    studyStreakDays: streak,
    preferredStudyWindow: totalEvents >= 2 ? preferredWindow : "INSUFFICIENT_DATA",
    averageSessionGapHours,
    averageResponseTimeSeconds,
    askFrequencyPerSession,
    learningVelocityPerHour: velocityPerHour,
    learningSpeedCategory: speedCategory,
    dailyActivityDistribution,
  };
}

/**
 * Computes live behavioral metrics for a student from database rows.
 */
export async function getStudentBehaviorMetrics(userId: string): Promise<BehavioralMetrics> {
  const [logs, sessions, learningStates] = await Promise.all([
    prisma.activityLog.findMany({
      where: { userId },
      orderBy: { createdAt: "asc" },
      take: 500,
    }),
    prisma.studySession.findMany({
      where: { userId },
      orderBy: { createdAt: "asc" },
      take: 500,
    }),
    prisma.learningState.findMany({
      where: { userId },
      select: { mastery: true },
    }),
  ]);

  // Combine activity logs with study sessions
  const combinedEvents = [
    ...logs.map((l) => ({
      eventType: l.eventType,
      createdAt: l.createdAt,
      durationSec: l.durationSec,
      metadata: l.metadata,
    })),
    ...sessions.map((s) => ({
      eventType: "STUDY_SESSION",
      createdAt: s.createdAt,
      durationSec: s.durationMin * 60,
      metadata: { responseTimeSec: s.responseTimeSec, correct: s.correct },
    })),
  ];

  const totalMastery = learningStates.reduce((acc, s) => acc + s.mastery, 0);

  return deriveBehaviorMetricsFromEvents(combinedEvents, totalMastery);
}
