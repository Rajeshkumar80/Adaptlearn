"use client";

import { useMemo } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui";
import { AnalyticsData, C, PALETTE } from "./types";

interface Props {
  classes: AnalyticsData["classes"];
}

export function ClassesBreakdownCard({ classes }: Props) {
  const classesBySem = useMemo(() => {
    const map = new Map<number, number>();
    for (const kl of classes) {
      map.set(kl.semester, (map.get(kl.semester) ?? 0) + 1);
    }
    return Array.from(map.entries())
      .sort((a, b) => a[0] - b[0])
      .map(([sem, count], i) => ({
        name: `Sem ${sem}`,
        count,
        color: PALETTE[i % PALETTE.length],
      }));
  }, [classes]);

  const totalClasses = classesBySem.reduce((a, s) => a + s.count, 0);
  const tooltipStyle = {
    border: `1px solid ${C.hairline}`,
    borderRadius: 4,
    fontSize: 12,
    color: C.navy,
  };

  return (
    <Card>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div>
          <h2 className="font-display text-[17px] font-semibold text-[var(--text-primary)]">
            Classes by semester
          </h2>
          <p className="text-[12px] text-[var(--text-muted)]">
            how your roster is spread
          </p>
        </div>
        <GraduationCap className="h-4 w-4 text-[var(--text-muted)]" />
      </div>
      {classesBySem.length === 0 ? (
        <p className="py-14 text-center text-[13px] text-[var(--text-muted)]">
          No classes assigned yet.
        </p>
      ) : (
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
          <div className="relative h-[180px] w-[180px] shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={classesBySem}
                  dataKey="count"
                  nameKey="name"
                  innerRadius={54}
                  outerRadius={82}
                  paddingAngle={3}
                  strokeWidth={0}
                >
                  {classesBySem.map((s, i) => (
                    <Cell key={i} fill={s.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(v: any, name: any) => [
                    `${v} class${v === 1 ? "" : "es"}`,
                    name,
                  ]}
                  contentStyle={tooltipStyle}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <span className="tnum font-display text-[28px] font-semibold leading-none text-[var(--accent-primary)]">
                {totalClasses}
              </span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                classes
              </span>
            </div>
          </div>
          <div className="w-full max-w-[190px] space-y-2.5">
            {classesBySem.map((s) => (
              <div key={s.name} className="flex items-center gap-2.5">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ background: s.color }}
                />
                <span className="flex-1 text-[12px] font-medium text-[var(--text-primary)]">
                  {s.name}
                </span>
                <span className="tnum text-[12px] font-semibold text-[var(--accent-primary)]">
                  {s.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}
