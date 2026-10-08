"use client";

import { Activity, Clock, Flame, Gauge, Repeat, TrendingUp, CheckCircle, HelpCircle } from "lucide-react";
import { Badge, Card } from "@/components/ui";

interface BehavioralCurveSectionProps {
  metrics: {
    consistencyScore: number;
    learningVelocity: number;
    studyStreakDays: number;
    totalSessions: number;
    totalMinutes: number;
    preferredStudyWindow: string;
    completionRate: number;
    avgSessionDurationMin: number;
    recentAccuracy: number;
  };
}

export function BehavioralCurveSection({ metrics }: BehavioralCurveSectionProps) {
  const consistencyPct = Math.round(metrics.consistencyScore * 100);
  const completionPct = Math.round(metrics.completionRate * 100);
  const accuracyPct = Math.round(metrics.recentAccuracy * 100);

  const signals = [
    {
      label: "Study Consistency",
      value: `${consistencyPct}%`,
      icon: Flame,
      badge: consistencyPct >= 70 ? "HIGH ADHERENCE" : "IRREGULAR",
      tone: consistencyPct >= 70 ? "success" : "warning",
      desc: "Regularity of daily return across study sessions",
    },
    {
      label: "Task Completion",
      value: `${completionPct}%`,
      icon: CheckCircle,
      badge: completionPct >= 80 ? "STRONG FINISHER" : "IN PROGRESS",
      tone: completionPct >= 80 ? "success" : "brass",
      desc: "Scheduled vs completed curriculum blocks",
    },
    {
      label: "Response Accuracy",
      value: `${accuracyPct}%`,
      icon: Gauge,
      badge: accuracyPct >= 75 ? "ACCURATE" : "PRACTICING",
      tone: accuracyPct >= 75 ? "success" : "info",
      desc: "First-attempt correctness in quizzes & tests",
    },
    {
      label: "Study Capacity",
      value: `${metrics.avgSessionDurationMin || 30}m/session`,
      icon: Clock,
      badge: "OPTIMAL",
      tone: "navy",
      desc: "Empirical uninterrupted study session duration",
    },
  ];

  return (
    <Card className="p-4 space-y-4 border-[var(--border-default)]">
      <div className="flex items-center justify-between border-b border-[var(--border-default)] pb-3">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-[var(--accent-primary)]" />
          <h3 className="text-sm font-bold text-[var(--text-primary)]">
            Empirical Behavioural Learning Dynamics
          </h3>
        </div>
        <Badge tone="navy" className="text-xs">
          Interaction-Derived Signals
        </Badge>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {signals.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div key={idx} className="p-3 rounded bg-[var(--surface-muted)] border border-[var(--border-default)] space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[var(--text-muted)] uppercase">{s.label}</span>
                <Icon className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-lg font-bold text-[var(--text-primary)]">{s.value}</span>
                <Badge tone={s.tone as any} className="text-[9px] px-1.5">
                  {s.badge}
                </Badge>
              </div>
              <p className="text-[10px] text-[var(--text-muted)] leading-tight">{s.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Recovery & Engagement Insight */}
      <div className="p-3 rounded bg-[var(--surface-muted)] border border-[var(--border-default)] text-xs space-y-2">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-[var(--text-primary)]">Curriculum Recovery Pattern:</span>
          <Badge tone={metrics.studyStreakDays >= 2 ? "success" : "info"}>
            {metrics.studyStreakDays >= 2 ? "Self-Healing Schedule Active" : "Fresh Schedule Initiated"}
          </Badge>
        </div>
        <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
          The adaptive scheduler automatically redistributes unfinished tasks across future available slots without creating overload spikes. Peak cognitive window identified: <strong className="text-[var(--text-secondary)]">{metrics.preferredStudyWindow}</strong>.
        </p>
      </div>
    </Card>
  );
}
