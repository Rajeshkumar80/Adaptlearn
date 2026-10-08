import { prisma } from "../db";
import { getStudentBehaviorMetrics } from "./behaviorEngine";
import { selectBanditAction, BanditDecision } from "./banditPolicy";
import { calculateRetention } from "./forgettingModel";

export interface SubjectIntelligence {
  subjectCode: string;
  subjectName: string;
  topicsTracked: number;
  topicsMastered: number;
  avgMastery: number; // 0 - 100
  avgRetention: number; // 0 - 100
  examReadiness: number; // 0 - 100
  atRisk: boolean;
}

export interface StudentIntelligenceData {
  user: {
    id: string;
    name: string;
    usn: string | null;
    branch: string | null;
    semester: number | null;
    className: string | null;
  };
  overallLearningScore: number; // 0 - 100
  averageMastery: number; // 0 - 100
  retentionScore: number; // 0 - 100
  forgettingRiskScore: number; // 0 - 100
  questionAccuracy: number; // 0 - 100
  totalQuestionsAnswered: number;
  studyStreakDays: number;
  totalStudyMinutes: number;
  learningVelocityPerHour: number;
  learningSpeedCategory: string;
  preferredStudyWindow: string;
  predictedReadinessDate: string;
  masteryDistribution: {
    mastered: number;
    learning: number;
    newTopics: number;
  };
  subjectBreakdown: SubjectIntelligence[];
  focusQueue: Array<{
    topicId: string;
    topicName: string;
    subjectCode: string;
    moduleNumber: number;
    mastery: number;
    retention: number;
    forgettingRisk: number;
    pyqImportance: number;
    actionReason: string;
  }>;
  topRecommendation: BanditDecision | null;
  recentActivityDistribution: Record<string, number>;
}

export async function computeStudentIntelligence(userId: string): Promise<StudentIntelligenceData> {
  const [user, learningStates, testResults, behaviorMetrics, allSubjects] = await Promise.all([
    prisma.user.findUnique({
      where: { id: userId },
      include: { class: true },
    }),
    prisma.learningState.findMany({
      where: { userId },
      include: { topic: true },
    }),
    prisma.testResult.findMany({
      where: { studentId: userId },
      select: { score: true, totalMarks: true },
    }),
    getStudentBehaviorMetrics(userId),
    prisma.subject.findMany({ select: { code: true, name: true } }),
  ]);

  if (!user) throw new Error("Student not found");

  const subjectNameMap = new Map(allSubjects.map((s) => [s.code, s.name]));

  // 1. Mastery & Retention calculations
  let totalMastery = 0;
  let totalRetention = 0;
  let masteredCount = 0;
  let learningCount = 0;
  let newCount = 0;
  let totalCorrect = 0;
  let totalWrong = 0;

  const now = Date.now();
  const processedTopics = learningStates.map((s) => {
    const elapsedDays = s.lastReviewedAt
      ? Math.max(0, (now - new Date(s.lastReviewedAt).getTime()) / (1000 * 60 * 60 * 24))
      : 0;
    const retention = Number.isFinite(s.retention) ? s.retention : calculateRetention(elapsedDays, s.stability);
    const forgettingRisk = Math.max(0, Math.min(1, Math.round((1 - retention) * 100) / 100));

    totalMastery += s.mastery;
    totalRetention += retention;
    totalCorrect += s.correctCount;
    totalWrong += s.wrongCount;

    if (s.mastery >= 0.7) masteredCount++;
    else if (s.mastery >= 0.4) learningCount++;
    else newCount++;

    return {
      topicId: s.topicId,
      topicName: s.topic.name,
      subjectCode: s.topic.subjectCode,
      moduleNumber: s.topic.moduleNumber,
      mastery: Math.round(s.mastery * 100),
      retention: Math.round(retention * 100),
      forgettingRisk: Math.round(forgettingRisk * 100),
      pyqImportance: Math.round(s.topic.pyqImportance),
      stability: s.stability,
      lastReviewedAt: s.lastReviewedAt,
    };
  });

  const topicsCount = Math.max(1, learningStates.length);
  const avgMastery = learningStates.length > 0 ? Math.round((totalMastery / topicsCount) * 100) : 0;
  const avgRetention = learningStates.length > 0 ? Math.round((totalRetention / topicsCount) * 100) : 100;
  const forgettingRiskScore = Math.max(0, 100 - avgRetention);

  // 2. Question Accuracy
  const totalQuestions = totalCorrect + totalWrong;
  const questionAccuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  // 3. Subject-wise Breakdown & Exam Readiness
  const subjectGroups = new Map<string, typeof processedTopics>();
  for (const t of processedTopics) {
    if (!subjectGroups.has(t.subjectCode)) subjectGroups.set(t.subjectCode, []);
    subjectGroups.get(t.subjectCode)!.push(t);
  }

  const subjectBreakdown: SubjectIntelligence[] = [];
  for (const [code, topics] of subjectGroups.entries()) {
    const subMasterySum = topics.reduce((acc, t) => acc + t.mastery, 0);
    const subRetentionSum = topics.reduce((acc, t) => acc + t.retention, 0);

    // Weighted readiness: (mastery * pyqImportance)
    const weightSum = topics.reduce((acc, t) => acc + Math.max(10, t.pyqImportance), 0);
    const weightedMastery = topics.reduce((acc, t) => acc + t.mastery * Math.max(10, t.pyqImportance), 0);
    const examReadiness = weightSum > 0 ? Math.round(weightedMastery / weightSum) : 0;

    const subAvgMastery = Math.round(subMasterySum / topics.length);
    const subAvgRetention = Math.round(subRetentionSum / topics.length);

    subjectBreakdown.push({
      subjectCode: code,
      subjectName: subjectNameMap.get(code) || code,
      topicsTracked: topics.length,
      topicsMastered: topics.filter((t) => t.mastery >= 70).length,
      avgMastery: subAvgMastery,
      avgRetention: subAvgRetention,
      examReadiness,
      atRisk: subAvgMastery < 50 || subAvgRetention < 50,
    });
  }

  // 4. Overall Learning Score (40% Mastery + 35% Retention + 25% Quiz Accuracy)
  const overallLearningScore =
    learningStates.length > 0
      ? Math.round(avgMastery * 0.4 + avgRetention * 0.35 + (questionAccuracy || avgMastery) * 0.25)
      : 0;

  // 5. Predicted Readiness Date
  const targetReadiness = 85;
  const readinessGap = Math.max(0, targetReadiness - avgMastery);
  const velocityPerDay = Math.max(0.5, (behaviorMetrics.learningVelocityPerHour * (behaviorMetrics.totalStudyMinutes / 60)) / 7);
  const daysToReadiness = Math.round(readinessGap / velocityPerDay);
  const targetDate = new Date(Date.now() + daysToReadiness * 24 * 60 * 60 * 1000);
  const predictedReadinessDate = targetDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // 6. Focus Queue: topics with lowest mastery and highest forgetting risk
  const focusQueue = [...processedTopics]
    .sort((a, b) => {
      // Sort by combined score: low mastery and high forgetting risk
      const scoreA = (100 - a.mastery) * 0.6 + a.forgettingRisk * 0.4;
      const scoreB = (100 - b.mastery) * 0.6 + b.forgettingRisk * 0.4;
      return scoreB - scoreA;
    })
    .slice(0, 6)
    .map((t) => ({
      topicId: t.topicId,
      topicName: t.topicName,
      subjectCode: t.subjectCode,
      moduleNumber: t.moduleNumber,
      mastery: t.mastery,
      retention: t.retention,
      forgettingRisk: t.forgettingRisk,
      pyqImportance: t.pyqImportance,
      actionReason:
        t.forgettingRisk > 50
          ? `Retention decaying (${t.retention}%) — high forgetting risk`
          : `Mastery at ${t.mastery}% — high exam weightage (${t.pyqImportance}%)`,
    }));

  // 7. Bandit adaptive decision for top focus topic
  let topRecommendation: BanditDecision | null = null;
  if (focusQueue.length > 0) {
    const target = focusQueue[0];
    topRecommendation = await selectBanditAction(userId, target.topicId, {
      mastery: target.mastery / 100,
      retention: target.retention / 100,
      studyStreakDays: behaviorMetrics.studyStreakDays,
      averageResponseTimeSeconds: behaviorMetrics.averageResponseTimeSeconds,
      learningSpeedCategory: behaviorMetrics.learningSpeedCategory,
      topicDifficulty: 0.5,
    });
  }

  return {
    user: {
      id: user.id,
      name: user.name,
      usn: user.usn,
      branch: user.branch,
      semester: user.semester,
      className: user.class?.name || null,
    },
    overallLearningScore,
    averageMastery: avgMastery,
    retentionScore: avgRetention,
    forgettingRiskScore,
    questionAccuracy,
    totalQuestionsAnswered: totalQuestions,
    studyStreakDays: behaviorMetrics.studyStreakDays,
    totalStudyMinutes: behaviorMetrics.totalStudyMinutes,
    learningVelocityPerHour: behaviorMetrics.learningVelocityPerHour,
    learningSpeedCategory: behaviorMetrics.learningSpeedCategory,
    preferredStudyWindow: behaviorMetrics.preferredStudyWindow,
    predictedReadinessDate,
    masteryDistribution: {
      mastered: masteredCount,
      learning: learningCount,
      newTopics: newCount,
    },
    subjectBreakdown,
    focusQueue,
    topRecommendation,
    recentActivityDistribution: behaviorMetrics.dailyActivityDistribution,
  };
}
