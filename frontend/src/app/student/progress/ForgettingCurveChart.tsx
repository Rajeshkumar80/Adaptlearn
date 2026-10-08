"use client";

import { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts";
import { Activity, AlertCircle, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Badge, Card, Select } from "@/components/ui";
import { generateProjectionPoints, TopicRetentionState } from "@/lib/forgetting-curve";

interface ForgettingCurveChartProps {
  states: TopicRetentionState[];
}

export function ForgettingCurveChart({ states }: ForgettingCurveChartProps) {
  const [selectedTopicId, setSelectedTopicId] = useState<string>("");

  const activeTopic = useMemo(() => {
    if (states.length === 0) return null;
    return states.find((s) => s.topicId === selectedTopicId) || states[0];
  }, [states, selectedTopicId]);

  const curveData = useMemo(() => {
    if (!activeTopic) return [];
    return generateProjectionPoints(activeTopic);
  }, [activeTopic]);

  const currentRetention =
    activeTopic && typeof activeTopic.retention === "number" && Number.isFinite(activeTopic.retention)
      ? Math.round(activeTopic.retention * 100)
      : null;

  const stabilityDays =
    activeTopic && typeof activeTopic.stability === "number" && Number.isFinite(activeTopic.stability)
      ? Math.round(activeTopic.stability * 10) / 10
      : null;

  const daysSinceReview = useMemo(() => {
    if (!activeTopic?.lastReviewedAt) return null;
    const ms = Date.now() - new Date(activeTopic.lastReviewedAt).getTime();
    if (Number.isNaN(ms)) return null;
    return Math.round((ms / (1000 * 60 * 60 * 24)) * 10) / 10;
  }, [activeTopic]);

  const isDue = (currentRetention ?? 100) < 60;

  return (
    <Card className="p-4 space-y-4 border-[var(--border-default)]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-default)] pb-3">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-[var(--accent-primary)]" />
          <h3 className="text-sm font-bold text-[var(--text-primary)]">
            Ebbinghaus Forgetting Curve & Memory Stability
          </h3>
        </div>
        <div className="w-full sm:w-72">
          <Select
            value={selectedTopicId || (activeTopic?.topicId ?? "")}
            onChange={(e) => setSelectedTopicId(e.target.value)}
          >
            {states.map((s) => (
              <option key={s.topicId} value={s.topicId}>
                {s.subjectCode} · {s.topicName}
              </option>
            ))}
          </Select>
        </div>
      </div>

      {/* Metrics Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <div className="p-2.5 rounded bg-[var(--surface-muted)] border border-[var(--border-default)]">
          <span className="text-[10px] text-[var(--text-muted)] uppercase">Current Retention</span>
          <p className="text-base font-bold text-[var(--text-primary)]">
            {currentRetention !== null ? `${currentRetention}%` : "Insufficient data"}
          </p>
        </div>
        <div className="p-2.5 rounded bg-[var(--surface-muted)] border border-[var(--border-default)]">
          <span className="text-[10px] text-[var(--text-muted)] uppercase">Memory Stability</span>
          <p className="text-base font-bold text-[var(--accent-primary)]">
            {stabilityDays !== null ? `${stabilityDays} days` : "Insufficient data"}
          </p>
        </div>
        <div className="p-2.5 rounded bg-[var(--surface-muted)] border border-[var(--border-default)]">
          <span className="text-[10px] text-[var(--text-muted)] uppercase">Days Since Review</span>
          <p className="text-base font-bold text-[var(--text-secondary)]">
            {daysSinceReview !== null ? `${daysSinceReview}d ago` : "Not reviewed yet"}
          </p>
        </div>
        <div className="p-2.5 rounded bg-[var(--surface-muted)] border border-[var(--border-default)]">
          <span className="text-[10px] text-[var(--text-muted)] uppercase">Review Threshold</span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <Badge tone={isDue ? "error" : "success"}>
              {isDue ? "Recall Due (<60%)" : "Stable (>60%)"}
            </Badge>
          </div>
        </div>
      </div>

      {/* Recharts Area Chart */}
      <div className="h-60 w-full">
        {curveData.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={curveData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="retentionGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#e07a2c" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#e07a2c" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#2c2724" strokeDasharray="3 3" />
              <XAxis dataKey="day" stroke="#8a8279" tick={{ fontSize: 11 }} />
              <YAxis domain={[0, 100]} stroke="#8a8279" tick={{ fontSize: 11 }} unit="%" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#161413",
                  borderColor: "#3a3430",
                  borderRadius: 4,
                  fontSize: 12,
                }}
                formatter={(val: any) => [`${val}%`, "Predicted Retention"]}
              />
              <ReferenceLine
                y={60}
                stroke="#d9534f"
                strokeDasharray="4 4"
                label={{ value: "Review Due (60%)", fill: "#d9534f", fontSize: 10, position: "top" }}
              />
              <Area
                type="monotone"
                dataKey="retentionPct"
                stroke="#e07a2c"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#retentionGrad)"
              />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-full flex items-center justify-center text-xs text-[var(--text-muted)]">
            Select a topic above to display the forgetting curve.
          </div>
        )}
      </div>

      <div className="flex items-center justify-between text-[11px] text-[var(--text-muted)] pt-2 border-t border-[var(--border-default)]">
        <span>Model: DSR / SM-2 continuous exponential decay: R = exp(-t / S)</span>
        <span className="text-[var(--accent-primary)] flex items-center gap-1">
          <ArrowUpRight className="w-3 h-3" /> Successful recall increases stability by ~1.4x - 1.8x
        </span>
      </div>
    </Card>
  );
}
