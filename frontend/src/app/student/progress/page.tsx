"use client";

import { useEffect, useState } from "react";
import { api, errorMessage } from "@/lib/api";
import { ErrorState, LoadingRows, PageShell } from "@/components/ui";
import { IntelligenceMetricCards } from "./IntelligenceMetricCards";
import { ForgettingCurveChart } from "./ForgettingCurveChart";
import { BehavioralCurveSection } from "./BehavioralCurveSection";
import { KnowledgeHeatmapMatrix } from "./KnowledgeHeatmapMatrix";
import { IntelligenceActionQueues } from "./IntelligenceActionQueues";
import { TopicRetentionState } from "@/lib/forgetting-curve";

export default function LearningIntelligencePage() {
  const [intel, setIntel] = useState<any | null>(null);
  const [states, setStates] = useState<TopicRetentionState[]>([]);
  const [behavior, setBehavior] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    Promise.all([
      api.get("/student/intelligence"),
      api.get("/learning/mastery/graph"),
      api.get("/learning/behavior"),
    ])
      .then(([intelRes, graphRes, behavRes]) => {
        setIntel(intelRes.data.intelligence);
        setStates(graphRes.data.states || []);
        setBehavior(behavRes.data.metrics);
      })
      .catch((err) => setError(errorMessage(err)))
      .finally(() => setLoading(false));
  }, []);

  return (
    <PageShell>
      <div className="mb-6 border-b border-[var(--border-default)] pb-4">
        <h1 className="font-display text-[26px] font-semibold text-[var(--text-primary)]">
          Learning Intelligence
        </h1>
        <p className="mt-1 text-[13px] text-[var(--text-muted)]">
          Continuous cognitive tracking, Ebbinghaus forgetting model, behavioural dynamics, and explainable recommendations.
        </p>
      </div>

      {loading ? (
        <LoadingRows rows={5} />
      ) : error ? (
        <ErrorState message={error} />
      ) : (
        <div className="space-y-5">
          {/* 1. Top 8 KPI Metric Cards */}
          <IntelligenceMetricCards
            overallLearningScore={intel?.overallLearningScore ?? 50}
            averageMastery={intel?.averageMastery ?? 0.2}
            retentionScore={intel?.retentionScore ?? 1.0}
            forgettingRiskScore={intel?.forgettingRiskScore ?? 0.0}
            examReadiness={intel?.averageMastery ?? 0.3}
            learningVelocity={intel?.learningVelocityPerHour ?? 0}
            studyStreakDays={intel?.studyStreakDays ?? 1}
            preferredStudyWindow={intel?.preferredStudyWindow || "Morning"}
          />

          {/* 2. Explainable Next Action & Queues */}
          <IntelligenceActionQueues
            focusQueue={intel?.focusQueue || []}
            subjectRisks={intel?.subjectBreakdown || []}
            topRecommendation={intel?.topRecommendation || null}
          />

          {/* 3. Forgetting Curve Section */}
          <ForgettingCurveChart states={states} />

          {/* 4. Behavioural Learning Curve Dynamics */}
          <BehavioralCurveSection
            metrics={{
              consistencyScore: behavior?.consistencyScore ?? 0.6,
              learningVelocity: intel?.learningVelocityPerHour ?? 1.5,
              studyStreakDays: intel?.studyStreakDays ?? 1,
              totalSessions: behavior?.totalSessions ?? 5,
              totalMinutes: intel?.totalStudyMinutes ?? 120,
              preferredStudyWindow: intel?.preferredStudyWindow || "Morning",
              completionRate: behavior?.completionRate ?? 0.8,
              avgSessionDurationMin: behavior?.avgSessionDurationMin ?? 30,
              recentAccuracy: intel?.questionAccuracy ?? 0.75,
            }}
          />

          {/* 5. Knowledge Heatmap Matrix */}
          <KnowledgeHeatmapMatrix states={states} />
        </div>
      )}
    </PageShell>
  );
}
