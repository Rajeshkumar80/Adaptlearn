"use client";

import Link from "next/link";
import { Sparkles, ArrowRight, BookOpen, RotateCcw, Brain, MessageSquare } from "lucide-react";
import { Badge, Button } from "@/components/ui";

interface RecommendationProps {
  decision: {
    policy: string;
    topicId: string;
    action: string;
    rationale: string;
    confidenceScore: number;
  } | null;
  targetTopicName?: string;
  targetSubjectCode?: string;
}

export function RecommendationCard({
  decision,
  targetTopicName,
  targetSubjectCode,
}: RecommendationProps) {
  if (!decision) {
    return (
      <div className="ledger-card p-5 mb-5 border-l-4" style={{ borderLeftColor: "var(--accent-primary)" }}>
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-[var(--accent-primary)]" />
          <h3 className="font-display text-[15px] font-semibold text-[var(--text-primary)]">
            What should I study now?
          </h3>
        </div>
        <p className="mt-2 text-[12px] text-[var(--text-muted)]">
          Complete a study session or take a quiz to activate your personalized bandit adaptive study recommendations.
        </p>
      </div>
    );
  }

  const actionIcons: Record<string, any> = {
    REVIEW: RotateCcw,
    NEW_TOPIC: BookOpen,
    RECALL_QUIZ: Brain,
    AI_EXPLAIN: MessageSquare,
  };

  const actionHrefs: Record<string, string> = {
    REVIEW: "/student/progress",
    NEW_TOPIC: "/student/roadmap",
    RECALL_QUIZ: "/student/progress",
    AI_EXPLAIN: "/student/tutor",
  };

  const actionLabels: Record<string, string> = {
    REVIEW: "Start Active Review",
    NEW_TOPIC: "Unlock New Topic",
    RECALL_QUIZ: "Take Recall Quiz",
    AI_EXPLAIN: "Ask AI Tutor",
  };

  const Icon = actionIcons[decision.action] || Sparkles;
  const href = actionHrefs[decision.action] || "/student/progress";
  const label = actionLabels[decision.action] || "Study Now";

  return (
    <div
      className="ledger-card p-5 mb-5 relative overflow-hidden border-l-4"
      style={{ borderLeftColor: "var(--accent-primary)", background: "var(--bg-elevated)" }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent-soft)]">
              <Icon className="h-3.5 w-3.5 text-[var(--accent-primary)]" />
            </span>
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                AI Recommendation · Bandit Adaptive Policy
              </span>
              <h3 className="font-display text-[15px] font-semibold text-[var(--text-primary)]">
                What should I study now?
              </h3>
            </div>
            {targetSubjectCode && <Badge tone="navy">{targetSubjectCode}</Badge>}
          </div>

          <p className="mt-2.5 text-[13px] font-medium text-[var(--text-primary)] leading-snug">
            {targetTopicName ? `Target: ${targetTopicName}` : "Recommended Focus"}
          </p>
          <p className="mt-1 text-[12px] text-[var(--text-muted)] leading-relaxed">
            {decision.rationale}
          </p>
        </div>

        <div className="shrink-0 pt-2 sm:pt-0">
          <Link href={href}>
            <Button variant="primary" className="w-full sm:w-auto text-[12px] py-1.5 px-3.5">
              <span>{label}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
