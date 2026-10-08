"use client";

import Link from "next/link";
import { AlertTriangle, ArrowRight, Brain, Clock, HelpCircle, RefreshCw, ShieldAlert, Sparkles, Target } from "lucide-react";
import { Badge, Button, Card } from "@/components/ui";

interface IntelligenceActionQueuesProps {
  focusQueue: Array<{
    topicId: string;
    topicName: string;
    subjectCode: string;
    moduleNumber: number;
    mastery: number;
    retention: number;
    forgettingRisk: number;
    actionReason: string;
  }>;
  subjectRisks: Array<{
    subjectCode: string;
    subjectName: string;
    avgMastery: number;
    avgRetention: number;
    atRisk: boolean;
  }>;
  topRecommendation: {
    action: string;
    rationale: string;
    confidenceScore: number;
    topicName?: string;
    subjectCode?: string;
  } | null;
}

function formatPct(val: number): number {
  if (!Number.isFinite(val)) return 0;
  return val <= 1 ? Math.round(val * 100) : Math.round(val);
}

export function IntelligenceActionQueues({
  focusQueue,
  subjectRisks,
  topRecommendation,
}: IntelligenceActionQueuesProps) {
  const atRiskSubjects = subjectRisks.filter((s) => s.atRisk || formatPct(s.avgMastery) < 50);

  return (
    <div className="space-y-4">
      {/* 1. What Should I Study Now? + Explainable Rationale */}
      {topRecommendation && (
        <Card className="p-4 border-[var(--border-default)] space-y-3 bg-gradient-to-r from-[var(--surface-muted)] to-transparent">
          <div className="flex items-center justify-between border-b border-[var(--border-default)] pb-2.5">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[var(--accent-primary)]" />
              <h3 className="text-sm font-bold text-[var(--text-primary)]">What Should I Study Now?</h3>
            </div>
            <Badge tone="brass" className="text-xs">
              AI Decision Engine
            </Badge>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[var(--accent-primary)] uppercase">
                  Action: {topRecommendation.action}
                </span>
                {topRecommendation.topicName && (
                  <span className="text-xs font-semibold text-[var(--text-primary)]">
                    · {topRecommendation.topicName} ({topRecommendation.subjectCode})
                  </span>
                )}
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {topRecommendation.rationale}
              </p>
            </div>

            <Link href="/student/scheduler">
              <Button className="text-xs py-1.5 px-3 shrink-0">
                Open in Scheduler <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="pt-2 border-t border-[var(--border-default)] text-[11px] text-[var(--text-muted)] flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0" />
            <span>
              <strong>Why Am I Seeing This Recommendation?</strong> Recommendation synthesized from low mastery, upcoming revision decay threshold, and contextual bandit policy optimization.
            </span>
          </div>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* 2. Focus Queue */}
        <Card className="p-4 space-y-3 border-[var(--border-default)]">
          <div className="flex items-center justify-between border-b border-[var(--border-default)] pb-2.5">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-[var(--accent-primary)]" />
              <h3 className="text-sm font-bold text-[var(--text-primary)]">Focus Queue (High Priority)</h3>
            </div>
            <span className="text-[11px] text-[var(--text-muted)]">{focusQueue.length} topics</span>
          </div>

          {focusQueue.length === 0 ? (
            <p className="py-4 text-center text-xs text-[var(--text-muted)]">No urgent topic weaknesses detected.</p>
          ) : (
            <div className="space-y-2">
              {focusQueue.slice(0, 5).map((t, idx) => (
                <div key={idx} className="p-2.5 rounded bg-[var(--surface-muted)] border border-[var(--border-default)] flex items-center justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-[var(--text-primary)] truncate">{t.topicName}</p>
                    <p className="text-[10px] text-[var(--text-muted)] mt-0.5">
                      {t.subjectCode} · Module {t.moduleNumber} · {t.actionReason}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <Badge tone={formatPct(t.mastery) >= 50 ? "brass" : "warning"}>
                      Mastery {formatPct(t.mastery)}%
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* 3. Subject Risk Assessment */}
        <Card className="p-4 space-y-3 border-[var(--border-default)]">
          <div className="flex items-center justify-between border-b border-[var(--border-default)] pb-2.5">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <h3 className="text-sm font-bold text-[var(--text-primary)]">At-Risk Subjects Watchlist</h3>
            </div>
            <span className="text-[11px] text-[var(--text-muted)]">{atRiskSubjects.length} subjects</span>
          </div>

          {atRiskSubjects.length === 0 ? (
            <p className="py-4 text-center text-xs text-emerald-400">All subjects meet healthy mastery and retention targets.</p>
          ) : (
            <div className="space-y-2">
              {atRiskSubjects.map((s, idx) => (
                <div key={idx} className="p-2.5 rounded bg-[var(--surface-muted)] border border-[var(--border-default)] flex items-center justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-[var(--text-primary)]">{s.subjectCode} — {s.subjectName}</p>
                    <p className="text-[10px] text-[var(--text-muted)] mt-0.5">
                      Avg Retention: {formatPct(s.avgRetention)}%
                    </p>
                  </div>
                  <Badge tone="error">
                    Mastery: {formatPct(s.avgMastery)}%
                  </Badge>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
