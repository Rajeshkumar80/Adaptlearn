"use client";

import { Award, Brain, Clock, Flame, ShieldAlert, Target, TrendingUp, Zap } from "lucide-react";
import { Badge, Card } from "@/components/ui";

interface IntelligenceMetricCardsProps {
  overallLearningScore: number;
  averageMastery: number;
  retentionScore: number;
  forgettingRiskScore: number;
  examReadiness: number;
  learningVelocity: number;
  studyStreakDays: number;
  preferredStudyWindow: string;
}

export function IntelligenceMetricCards({
  overallLearningScore,
  averageMastery,
  retentionScore,
  forgettingRiskScore,
  examReadiness,
  learningVelocity,
  studyStreakDays,
  preferredStudyWindow,
}: IntelligenceMetricCardsProps) {
  const normMastery = averageMastery <= 1 ? Math.round(averageMastery * 100) : Math.round(averageMastery);
  const normRetention = retentionScore <= 1 ? Math.round(retentionScore * 100) : Math.round(retentionScore);
  const normRisk = forgettingRiskScore <= 1 ? Math.round(forgettingRiskScore * 100) : Math.round(forgettingRiskScore);
  const normReadiness = examReadiness <= 1 ? Math.round(examReadiness * 100) : Math.round(examReadiness);

  const cards = [
    {
      label: "Learning Score",
      value: `${Math.round(overallLearningScore)}/100`,
      icon: Award,
      badge: overallLearningScore >= 70 ? "OPTIMAL" : overallLearningScore >= 40 ? "STEADY" : "NEEDS WORK",
      tone: overallLearningScore >= 70 ? "success" : overallLearningScore >= 40 ? "brass" : "warning",
      detail: "Weighted cognitive index",
    },
    {
      label: "Overall Mastery",
      value: `${normMastery}%`,
      icon: Brain,
      badge: normMastery >= 70 ? "HIGH" : normMastery >= 40 ? "MODERATE" : "INITIAL",
      tone: normMastery >= 70 ? "success" : normMastery >= 40 ? "brass" : "info",
      detail: "BKT probabilistic knowledge",
    },
    {
      label: "Retention Score",
      value: `${normRetention}%`,
      icon: Target,
      badge: normRetention >= 70 ? "RETAINED" : "DECAYING",
      tone: normRetention >= 70 ? "success" : "warning",
      detail: "SM-2 memory trace integrity",
    },
    {
      label: "Forgetting Risk",
      value: `${normRisk}%`,
      icon: ShieldAlert,
      badge: normRisk > 40 ? "ELEVATED" : "CONTROLLED",
      tone: normRisk > 40 ? "error" : "success",
      detail: "Active recall needed",
    },
    {
      label: "Exam Readiness",
      value: `${normReadiness}%`,
      icon: Zap,
      badge: normReadiness >= 70 ? "READY" : "PREPARING",
      tone: normReadiness >= 70 ? "success" : "brass",
      detail: "Curriculum target coverage",
    },
    {
      label: "Learning Velocity",
      value: `${learningVelocity.toFixed(1)}/hr`,
      icon: TrendingUp,
      badge: learningVelocity > 2 ? "FAST" : "STEADY",
      tone: "info",
      detail: "Concepts mastered/hour",
    },
    {
      label: "Study Consistency",
      value: `${studyStreakDays} days`,
      icon: Flame,
      badge: studyStreakDays >= 3 ? "STREAK" : "ACTIVE",
      tone: studyStreakDays >= 3 ? "brass" : "navy",
      detail: "Daily adherence streak",
    },
    {
      label: "Optimal Window",
      value: preferredStudyWindow || "Morning",
      icon: Clock,
      badge: "SLOT",
      tone: "navy",
      detail: "Peak cognitive retention",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {cards.map((c, i) => {
        const Icon = c.icon;
        return (
          <Card key={i} className="p-3.5 space-y-2 border-[var(--border-default)]">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-[var(--text-muted)] uppercase tracking-wide">
                {c.label}
              </span>
              <Icon className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-xl font-bold text-[var(--text-primary)]">{c.value}</span>
              <Badge tone={c.tone as any} className="text-[9px] px-1.5 py-0.2">
                {c.badge}
              </Badge>
            </div>
            <p className="text-[10px] text-[var(--text-muted)] truncate">{c.detail}</p>
          </Card>
        );
      })}
    </div>
  );
}
