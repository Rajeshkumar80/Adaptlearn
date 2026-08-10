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
  ReferenceLine,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { motion } from "framer-motion";
import {
  Brain,
  TrendingUp,
  BookOpenCheck,
  Layers,
  Repeat,
  Activity,
} from "lucide-react";
import { api, errorMessage } from "@/lib/api";
import { Badge, Card, ErrorState, PageTitle, Select, Skeleton } from "@/components/ui";
import { useAuth } from "@/lib/auth";

const C = {
  navy: "#1e3a5f",
  navySoft: "#e9eef5",
  brass: "#a67c2e",
  success: "#2f6b4f",
  error: "#a03a2e",
  warning: "#a05e1c",
  inkMuted: "#6e6656",
  hairline: "#e2e2de",
  grid: "#d8cdb4",
};

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

const retentionAt = (topic: GraphState, day: number) =>
  Math.max(0, Math.round(topic.retention * Math.exp(-0.1 * day * (1 - topic.stability)) * 100) / 100);

function severityFor(mastery: number): "success" | "warning" | "error" {
  if (mastery >= 0.7) return "success";
  if (mastery >= 0.4) return "warning";
  return "error";
}

const severityHex: Record<string, string> = {
  success: C.success,
  warning: C.warning,
  error: C.error,
};

export default function ProgressPage() {
  const { user } = useAuth();
  const [states, setStates] = useState<GraphState[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [curveTopicId, setCurveTopicId] = useState<string>("");

  useEffect(() => {
    api
      .get<{ states: GraphState[] }>("/learning/mastery/graph")
      .then((res) => setStates(res.data.states))
      .catch((err) => setError(errorMessage(err)))
      .finally(() => setLoading(false));
  }, []);

  const avgMastery = useMemo(() => {
    if (states.length === 0) return 0;
    return states.reduce((a, s) => a + s.mastery, 0) / states.length;
  }, [states]);

  const distribution = useMemo(() => {
    const buckets = [
      { bucket: "Mastered", key: "mastered", count: 0, color: C.success },
      { bucket: "Learning", key: "learning", count: 0, color: C.brass },
      { bucket: "New", key: "new", count: 0, color: C.hairline },
    ];
    for (const s of states) {
      if (s.mastery >= 0.7) buckets[0].count++;
      else if (s.mastery >= 0.4) buckets[1].count++;
      else buckets[2].count++;
    }
    return buckets;
  }, [states]);

  const weakest = useMemo(
    () => [...states].sort((a, b) => a.mastery - b.mastery).slice(0, 5),
    [states]
  );

  const totalReviews = useMemo(
    () => states.reduce((a, s) => a + s.timesReviewed, 0),
    [states]
  );

  const curve = useMemo(() => {
    const topic =
      states.find((s) => s.topicId === curveTopicId) ?? weakest[0] ?? null;
    if (!topic || !topic.lastReviewedAt) return null;
    const days = Array.from({ length: 8 }, (_, d) => ({
      day: `D+${d}`,
      retention: retentionAt(topic, d),
    }));
    return { topic, days };
  }, [states, curveTopicId, weakest]);

  useEffect(() => {
    if (!curveTopicId && weakest.length > 0) {
      setCurveTopicId(weakest[0].topicId);
    }
  }, [weakest, curveTopicId]);

  const insight = useMemo(() => {
    if (weakest.length === 0) return null;
    const t = weakest[0];
    const day3 = retentionAt(t, 3);
    const pct = Math.round(t.mastery * 100);
    return {
      topic: t,
      text:
        day3 < 0.6
          ? `${t.topicName} is due for review — projected retention falls to ${Math.round(day3 * 100)}% in 3 days. A quick review now locks it in.`
          : `${t.topicName} is your lowest-mastery topic at ${pct}%. Twenty focused minutes would start it climbing.`,
      tone: day3 < 0.6 ? C.error : C.warning,
    };
  }, [weakest]);

  if (loading) {
    return (
      <div>
        <PageTitle title="How I Learn" subtitle="Your forgetting curve and mastery ledger" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-24" />
          ))}
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Skeleton className="h-72" />
          <Skeleton className="h-72" />
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
            SM-2 spacing + BKT mastery model
          </Badge>
        }
      />

      {/* KPI strip */}
      <div className="mb-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          {
            icon: TrendingUp,
            label: "Average mastery",
            value: `${Math.round(avgMastery * 100)}%`,
            tone: C.brass,
            footnote: `across ${states.length} topics`,
          },
          {
            icon: BookOpenCheck,
            label: "Mastered",
            value: distribution[0].count,
            tone: C.success,
            footnote: "≥ 70% confidence",
          },
          {
            icon: Layers,
            label: "Still learning",
            value: distribution[1].count + distribution[2].count,
            tone: C.navy,
            footnote: "40–69% climbing · <40% new",
          },
          {
            icon: Repeat,
            label: "Reviews logged",
            value: totalReviews,
            tone: C.inkMuted,
            footnote: "spaced-repetition reviews",
          },
        ].map((k, i) => (
          <motion.div
            key={k.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay: i * 0.05 }}
            className="ledger-card p-4"
          >
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
                {k.label}
              </p>
              <k.icon className="h-4 w-4" style={{ color: k.tone }} />
            </div>
            <p className="tnum font-display mt-1.5 text-[30px] font-semibold leading-none" style={{ color: k.tone }}>
              {k.value}
            </p>
            <p className="mt-1.5 text-[11px] text-ink-muted">{k.footnote}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="font-display text-[17px] font-semibold text-ink">
                Forgetting curve
              </h2>
              <p className="text-[12px] text-ink-muted">
                {curve
                  ? `Projected retention for "${curve.topic.topicName}" — now ${Math.round(curve.topic.retention * 100)}%`
                  : "Review a topic to unlock your forgetting curve."}
              </p>
            </div>
            {states.length > 0 && (
              <Select
                value={curveTopicId}
                onChange={(e) => setCurveTopicId(e.target.value)}
                className="w-auto min-w-[180px]"
              >
                {[...states]
                  .sort((a, b) => a.mastery - b.mastery)
                  .map((s) => (
                    <option key={s.topicId} value={s.topicId}>
                      {s.topicName} ({Math.round(s.mastery * 100)}%)
                    </option>
                  ))}
              </Select>
            )}
          </div>
          {curve ? (
            <div className="relative">
              <ResponsiveContainer width="100%" height={240}>
                <AreaChart data={curve.days} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
                  <defs>
                    <linearGradient id="retention" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={C.brass} stopOpacity={0.35} />
                      <stop offset="100%" stopColor={C.brass} stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke={C.grid} strokeDasharray="2 4" vertical={false} />
                  <XAxis dataKey="day" tick={{ fontSize: 11, fill: C.inkMuted }} axisLine={{ stroke: C.hairline }} tickLine={false} />
                  <YAxis
                    domain={[0, 1]}
                    ticks={[0, 0.25, 0.5, 0.75, 1]}
                    tick={{ fontSize: 11, fill: C.inkMuted }}
                    tickFormatter={(v: number) => `${Math.round(v * 100)}%`}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    formatter={(v: any) => [`${Math.round((v as number) * 100)}%`, "Retention"]}
                    labelFormatter={(l: string) => `Day ${l.replace("D+", "")}`}
                    contentStyle={{
                      border: `1px solid ${C.hairline}`,
                      borderRadius: 4,
                      fontSize: 12,
                      color: C.navy,
                    }}
                  />
                  <ReferenceLine
                    y={0.6}
                    stroke={C.error}
                    strokeDasharray="4 4"
                    strokeOpacity={0.55}
                    label={{
                      value: "review threshold",
                      position: "insideTopRight",
                      fill: C.error,
                      fontSize: 10,
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="retention"
                    stroke={C.brass}
                    strokeWidth={2.5}
                    fill="url(#retention)"
                    dot={{ r: 2.5, fill: C.brass, strokeWidth: 0 }}
                    activeDot={{ r: 5, fill: C.navy, stroke: "#fff", strokeWidth: 2 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
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
            Topics bucketed by confidence — mastered (≥70%), learning, or new.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
            <div className="relative h-[220px] w-[220px] shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={distribution}
                    dataKey="count"
                    nameKey="bucket"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={3}
                    strokeWidth={0}
                    startAngle={90}
                    endAngle={-270}
                  >
                    {distribution.map((b, i) => (
                      <Cell key={i} fill={b.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(v: any, name: any) => [`${v} topic${v === 1 ? "" : "s"}`, name]}
                    contentStyle={{ border: `1px solid ${C.hairline}`, borderRadius: 4, fontSize: 12 }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                <span className="tnum font-display text-[34px] font-semibold leading-none text-navy">
                  {states.length}
                </span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-ink-muted">
                  topics
                </span>
              </div>
            </div>
            <div className="w-full max-w-[220px] space-y-2.5">
              {distribution.map((b) => (
                <div key={b.key} className="flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: b.color }} />
                  <span className="flex-1 text-[12px] font-medium text-ink">{b.bucket}</span>
                  <span className="tnum text-[12px] font-semibold text-navy">{b.count}</span>
                  <span className="tnum w-9 text-right text-[11px] text-ink-muted">
                    {states.length > 0 ? `${Math.round((b.count / states.length) * 100)}%` : "—"}
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-2.5 border-t border-hairline pt-2.5">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-brass to-success" />
                <span className="flex-1 text-[12px] font-medium text-ink">Avg mastery</span>
                <span className="tnum text-[12px] font-semibold text-brass">
                  {Math.round(avgMastery * 100)}%
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Focus queue */}
      <div className="mt-6">
        <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
          <div>
            <h2 className="font-display text-[17px] font-semibold text-ink">Focus queue</h2>
            <p className="text-[12px] text-ink-muted">
              Lowest-mastery topics first — these move your average fastest.
            </p>
          </div>
          <Badge tone="navy">ranked by mastery</Badge>
        </div>

        {insight && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="mb-4 flex items-start gap-3 rounded-[2px] border px-4 py-3"
            style={{ borderColor: C.navySoft, background: C.navySoft }}
          >
            <Activity className="mt-0.5 h-4 w-4 shrink-0" style={{ color: insight.tone }} />
            <p className="text-[13px] text-ink" style={{ color: C.navy }}>
              {insight.text}
            </p>
          </motion.div>
        )}

        <div className="ledger-card divide-y divide-hairline">
          {weakest.length === 0 && (
            <p className="px-4 py-8 text-center text-[13px] text-ink-muted">
              No learning states yet — study a topic to start the ledger.
            </p>
          )}
          {weakest.map((s, i) => {
            const tone = severityFor(s.mastery);
            const pct = Math.round(s.mastery * 100);
            return (
              <motion.div
                key={s.topicId}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                className="group relative flex items-center gap-4 px-4 py-3.5 transition-colors hover:bg-paper-alt"
              >
                <span
                  className="absolute left-0 top-0 h-full w-[3px]"
                  style={{ background: severityHex[tone] }}
                />
                <span className="tnum w-8 shrink-0 text-[15px] font-semibold text-ink-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-semibold text-ink">{s.topicName}</p>
                  <div className="mt-1 flex flex-wrap items-center gap-1.5">
                    <Badge tone="navy">
                      {s.subjectCode} · M{s.moduleNumber}
                    </Badge>
                    <span className="tnum text-[11px] text-ink-muted">
                      {s.correctCount}✓ {s.wrongCount}✗
                    </span>
                    <span className="text-[11px] text-ink-muted">·</span>
                    <span className="text-[11px] text-ink-muted">reviewed {s.timesReviewed}×</span>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <div className="hidden h-2 w-[130px] overflow-hidden rounded-full bg-paper-deep sm:block">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${pct}%`,
                        background: severityHex[tone],
                      }}
                    />
                  </div>
                  <span
                    className="tnum font-display w-14 text-right text-[20px] font-semibold"
                    style={{ color: severityHex[tone] }}
                  >
                    {pct}%
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
