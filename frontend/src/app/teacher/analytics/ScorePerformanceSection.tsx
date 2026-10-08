"use client";

import { useMemo } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ReferenceLine,
  PieChart,
  Pie,
} from "recharts";
import { Badge, Card } from "@/components/ui";
import { AnalyticsData, C } from "./types";

interface Props {
  recentResults: AnalyticsData["recentResults"];
}

export function ScorePerformanceSection({ recentResults }: Props) {
  const resultBars = useMemo(
    () =>
      recentResults.slice(-10).map((r) => ({
        name: r.student.name.split(" ")[0],
        full: `${r.student.name}${r.student.usn ? ` (${r.student.usn})` : ""}`,
        test: r.test.title,
        pct: r.totalMarks > 0 ? Math.round((r.score / r.totalMarks) * 100) : 0,
        score: `${r.score}/${r.totalMarks}`,
      })),
    [recentResults]
  );

  const avgPct = useMemo(() => {
    if (resultBars.length === 0) return 0;
    return Math.round(
      resultBars.reduce((a, r) => a + r.pct, 0) / resultBars.length
    );
  }, [resultBars]);

  const bands = useMemo(() => {
    const b = [
      { name: "Strong ≥70%", count: 0, color: C.success },
      { name: "Developing 40–69%", count: 0, color: C.warning },
      { name: "At risk <40%", count: 0, color: C.error },
    ];
    for (const r of resultBars) {
      if (r.pct >= 70) b[0].count++;
      else if (r.pct >= 40) b[1].count++;
      else b[2].count++;
    }
    return b;
  }, [resultBars]);

  const avgHex =
    avgPct >= 70 ? C.success : avgPct >= 40 ? C.warning : C.error;
  const tooltipStyle = {
    border: `1px solid ${C.hairline}`,
    borderRadius: 4,
    fontSize: 12,
    color: C.navy,
  };

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <Card>
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="font-display text-[17px] font-semibold text-[var(--text-primary)]">
              Recent test scores
            </h2>
            <p className="text-[12px] text-[var(--text-muted)]">
              % score per submitted test (last 10)
            </p>
          </div>
          <span
            className="tnum rounded-full px-3 py-1 text-[11px] font-bold"
            style={{ background: C.navySoft, color: avgHex }}
          >
            avg {avgPct}%
          </span>
        </div>
        {resultBars.length === 0 ? (
          <p className="py-14 text-center text-[13px] text-[var(--text-muted)]">
            No test submissions yet.
          </p>
        ) : (
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={resultBars}
              margin={{ top: 8, right: 8, left: -22, bottom: 0 }}
            >
              <CartesianGrid stroke={C.grid} strokeDasharray="2 4" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 11, fill: C.inkMuted }}
                axisLine={{ stroke: C.hairline }}
                tickLine={false}
              />
              <YAxis
                domain={[0, 100]}
                ticks={[0, 25, 50, 75, 100]}
                tick={{ fontSize: 11, fill: C.inkMuted }}
                tickFormatter={(v: number) => `${v}%`}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                formatter={(v: any) => [`${v}%`, "Score"]}
                labelFormatter={(_, payload) =>
                  payload && payload.length > 0
                    ? `${(payload[0].payload as any).full} — ${(payload[0].payload as any).test} (${(payload[0].payload as any).score})`
                    : ""
                }
                contentStyle={tooltipStyle}
              />
              <ReferenceLine
                y={avgPct}
                stroke={C.brass}
                strokeDasharray="4 4"
                strokeOpacity={0.6}
                label={{
                  value: `avg ${avgPct}%`,
                  position: "insideTopLeft",
                  fill: C.brass,
                  fontSize: 10,
                }}
              />
              <Bar dataKey="pct" radius={[4, 4, 0, 0]} maxBarSize={44}>
                {resultBars.map((r, i) => (
                  <Cell
                    key={i}
                    fill={
                      r.pct >= 70
                        ? C.success
                        : r.pct >= 40
                        ? C.warning
                        : C.error
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}
      </Card>

      <Card>
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="font-display text-[17px] font-semibold text-[var(--text-primary)]">
              Score bands
            </h2>
            <p className="text-[12px] text-[var(--text-muted)]">
              where submissions fall (last 10)
            </p>
          </div>
          <Badge tone="navy">{resultBars.length} submissions</Badge>
        </div>
        {resultBars.length === 0 ? (
          <p className="py-14 text-center text-[13px] text-[var(--text-muted)]">
            No test submissions yet.
          </p>
        ) : (
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
            <div className="relative h-[210px] w-[210px] shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={bands}
                    dataKey="count"
                    nameKey="name"
                    innerRadius={64}
                    outerRadius={96}
                    paddingAngle={3}
                    strokeWidth={0}
                    startAngle={90}
                    endAngle={-270}
                  >
                    {bands.map((b, i) => (
                      <Cell key={i} fill={b.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(v: any, name: any) => [
                      `${v} submission${v === 1 ? "" : "s"}`,
                      name,
                    ]}
                    contentStyle={tooltipStyle}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                <span className="tnum font-display text-[30px] font-semibold leading-none text-[var(--accent-primary)]">
                  {resultBars.length}
                </span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                  results
                </span>
              </div>
            </div>
            <div className="w-full max-w-[210px] space-y-2.5">
              {bands.map((b) => (
                <div key={b.name} className="flex items-center gap-2.5">
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ background: b.color }}
                  />
                  <span className="flex-1 text-[12px] font-medium text-[var(--text-primary)]">
                    {b.name}
                  </span>
                  <span className="tnum text-[12px] font-semibold text-[var(--accent-primary)]">
                    {b.count}
                  </span>
                  <span className="tnum w-9 text-right text-[11px] text-[var(--text-muted)]">
                    {resultBars.length > 0
                      ? `${Math.round((b.count / resultBars.length) * 100)}%`
                      : "—"}
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-2.5 border-t border-[var(--border-default)] pt-2.5">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ background: avgHex }}
                />
                <span className="flex-1 text-[12px] font-medium text-[var(--text-primary)]">
                  Average
                </span>
                <span
                  className="tnum text-[12px] font-semibold"
                  style={{ color: avgHex }}
                >
                  {avgPct}%
                </span>
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
