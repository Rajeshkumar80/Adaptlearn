"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import { TrendingUp, Brain } from "lucide-react";
import { api, errorMessage } from "@/lib/api";
import { Badge, Card, ErrorState, MasteryBar, PageTitle } from "@/components/ui";
import { useAuth } from "@/lib/auth";

interface GraphState {
  topicId: string;
  topicName: string;
  subjectCode: string;
  moduleNumber: number;
  mastery: number;
  stability: number;
  lastReviewedAt: string | null;
  retention: number;
  correctCount: number;
  wrongCount: number;
  timesReviewed: number;
}

export default function ProgressPage() {
  const { user } = useAuth();
  const [states, setStates] = useState<GraphState[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get<{ states: GraphState[] }>("/learning/mastery/graph")
      .then((res) => setStates(res.data.states))
      .catch((err) => setError(errorMessage(err)))
      .finally(() => setLoading(false));
  }, []);

  const forgetCurve = useMemo(() => {
    const topic = states.length > 0 ? states[0] : null;
    if (!topic || !topic.lastReviewedAt) return null;
    const days = Array.from({ length: 8 }, (_, d) => {
      const retention =
        topic.retention * Math.exp(-0.1 * d * (1 - topic.stability));
      return {
        day: `D+${d}`,
        retention: Math.max(0, Math.round(retention * 100) / 100),
      };
    });
    return { topic, days };
  }, [states]);

  const masteryDist = useMemo(() => {
    const buckets = [
      { bucket: "Mastered", count: 0 },
      { bucket: "Learning", count: 0 },
      { bucket: "New", count: 0 },
    ];
    for (const s of states) {
      if (s.mastery >= 0.7) buckets[0].count++;
      else if (s.mastery >= 0.4) buckets[1].count++;
      else buckets[2].count++;
    }
    return buckets;
  }, [states]);

  const avgMastery = useMemo(() => {
    if (states.length === 0) return 0;
    return states.reduce((a, s) => a + s.mastery, 0) / states.length;
  }, [states]);

  const weakest = useMemo(
    () => [...states].sort((a, b) => a.mastery - b.mastery).slice(0, 5),
    [states]
  );

  if (loading) {
    return (
      <div>
        <PageTitle title="How I Learn" subtitle="Your forgetting curve and mastery ledger" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="skeleton h-64" />
          <div className="skeleton h-64" />
        </div>
      </div>
    );
  }

  if (error) return <ErrorState message={error} />;

  return (
    <div>
      <PageTitle
        title="How I Learn"
        subtitle={`${user?.name} — ${states.length} topics tracked, avg mastery ${Math.round(avgMastery * 100)}%`}
        right={
          <Badge tone="brass">
            <Brain className="mr-1 h-3 w-3" />
            SM-2 + BKT model
          </Badge>
        }
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <h2 className="font-display mb-1 text-[17px] font-semibold text-ink">
            Forgetting curve
          </h2>
          <p className="mb-3 text-[12px] text-ink-muted">
            {forgetCurve
              ? `Projected retention for "${forgetCurve.topic.topicName}" — current retention ${Math.round(forgetCurve.topic.retention * 100)}%`
              : "Review a topic to unlock your forgetting curve."}
          </p>
          {forgetCurve ? (
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={forgetCurve.days}>
                <defs>
                  <linearGradient id="retention" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#A67C2E" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#A67C2E" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#D8CDB4" strokeDasharray="2 4" />
                <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#6E6656" }} />
                <YAxis
                  domain={[0, 1]}
                  tick={{ fontSize: 11, fill: "#6E6656" }}
                  tickFormatter={(v) => `${Math.round(v * 100)}%`}
                />
                <Tooltip
                  formatter={(v: number) => [`${Math.round(v * 100)}%`, "Retention"]}
                />
                <Area
                  type="monotone"
                  dataKey="retention"
                  stroke="#A67C2E"
                  strokeWidth={2}
                  fill="url(#retention)"
                />
              </AreaChart>
            </ResponsiveContainer>
          ) : (
            <p className="py-16 text-center text-[13px] text-ink-muted">
              No reviews yet — your curve appears after your first study session.
            </p>
          )}
        </Card>

        <Card>
          <h2 className="font-display mb-1 text-[17px] font-semibold text-ink">
            Mastery distribution
          </h2>
          <p className="mb-3 text-[12px] text-ink-muted">
            How many topics are new, learning, or mastered (≥70%).
          </p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={masteryDist}>
              <CartesianGrid stroke="#D8CDB4" strokeDasharray="2 4" />
              <XAxis dataKey="bucket" tick={{ fontSize: 11, fill: "#6E6656" }} />
              <YAxis allowDecimals={false} tick={{ fontSize: 11, fill: "#6E6656" }} />
              <Tooltip />
              <Bar dataKey="count" radius={[2, 2, 0, 0]}>
                {masteryDist.map((b, i) => (
                  <Cell
                    key={i}
                    fill={["#2F6B4F", "#A67C2E", "#D8CDB4"][i]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <div className="mt-6">
        <h2 className="font-display mb-3 text-[17px] font-semibold text-ink">
          Weakest topics
        </h2>
        <div className="ledger-card divide-y divide-hairline">
          {weakest.map((s) => (
            <div key={s.topicId} className="flex items-center gap-4 px-4 py-3">
              <TrendingUp className="h-4 w-4 shrink-0 text-error" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-semibold text-ink">
                  {s.topicName}
                </p>
                <p className="text-[11px] text-ink-muted">
                  {s.subjectCode} · Module {s.moduleNumber} · {s.correctCount}✓{" "}
                  {s.wrongCount}✗ · reviewed {s.timesReviewed}x
                </p>
              </div>
              <MasteryBar value={s.mastery} />
            </div>
          ))}
          {weakest.length === 0 && (
            <p className="px-4 py-8 text-center text-[13px] text-ink-muted">
              No learning states yet — study a topic to start the ledger.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
