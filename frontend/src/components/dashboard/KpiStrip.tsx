"use client";

import { motion } from "framer-motion";
import { TrendingUp, Brain, Flame, Target, CalendarClock, ShieldAlert } from "lucide-react";

interface KpiStripProps {
  overallScore: number;
  avgMastery: number;
  retentionScore: number;
  forgettingRisk: number;
  studyStreakDays: number;
  questionAccuracy: number;
  predictedReadinessDate: string;
}

export function KpiStrip({
  overallScore,
  avgMastery,
  retentionScore,
  forgettingRisk,
  studyStreakDays,
  questionAccuracy,
  predictedReadinessDate,
}: KpiStripProps) {
  const kpis = [
    {
      label: "Overall Learning Score",
      value: `${overallScore}%`,
      footnote: "mastery + retention + quiz",
      icon: Target,
      tone: "var(--accent-primary)",
    },
    {
      label: "Average Mastery",
      value: `${avgMastery}%`,
      footnote: "BKT cognitive confidence",
      icon: TrendingUp,
      tone: avgMastery >= 70 ? "var(--status-running)" : "var(--status-warning)",
    },
    {
      label: "Memory Retention",
      value: `${retentionScore}%`,
      footnote: "Ebbinghaus memory stability",
      icon: Brain,
      tone: retentionScore >= 60 ? "var(--accent-primary)" : "var(--status-error)",
    },
    {
      label: "Study Streak",
      value: `${studyStreakDays}d`,
      footnote: "active consistency",
      icon: Flame,
      tone: "var(--accent-primary)",
    },
    {
      label: "Quiz Accuracy",
      value: `${questionAccuracy}%`,
      footnote: "MCQ & test accuracy",
      icon: TrendingUp,
      tone: questionAccuracy >= 70 ? "var(--status-running)" : "var(--status-warning)",
    },
    {
      label: "Exam Readiness",
      value: predictedReadinessDate || "In Progress",
      footnote: "estimated target date",
      icon: CalendarClock,
      tone: "var(--text-primary)",
    },
  ];

  return (
    <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {kpis.map((k, i) => (
        <motion.div
          key={k.label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: i * 0.04 }}
          className="ledger-card p-3.5"
        >
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              {k.label}
            </p>
            <k.icon className="h-3.5 w-3.5 shrink-0" style={{ color: k.tone }} />
          </div>
          <p
            className="tnum font-display mt-1.5 text-[24px] font-semibold leading-none truncate"
            style={{ color: k.tone }}
          >
            {k.value}
          </p>
          <p className="mt-1 text-[10px] text-[var(--text-muted)] truncate">{k.footnote}</p>
        </motion.div>
      ))}
    </div>
  );
}
