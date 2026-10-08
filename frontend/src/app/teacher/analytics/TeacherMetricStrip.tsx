"use client";

import { motion } from "framer-motion";
import {
  Users,
  FileText,
  TrendingUp,
  ShieldAlert,
  BookOpen,
  ClipboardList,
} from "lucide-react";
import { AnalyticsData, C } from "./types";

interface Props {
  counts: AnalyticsData["counts"];
  avgScore: number | null;
}

export function TeacherMetricStrip({ counts, avgScore }: Props) {
  const roundedAvg = avgScore != null ? Math.round(avgScore * 100) / 100 : null;
  const avgHex =
    roundedAvg != null
      ? roundedAvg >= 70
        ? C.success
        : roundedAvg >= 40
        ? C.warning
        : C.error
      : C.inkMuted;

  const kpis = [
    {
      icon: Users,
      label: "Students",
      value: counts.students,
      tone: C.navy,
      footnote: "across your classes",
    },
    {
      icon: FileText,
      label: "Tests taken",
      value: counts.submissions,
      tone: C.brass,
      footnote: "submitted",
    },
    {
      icon: TrendingUp,
      label: "Avg score",
      value: roundedAvg != null ? `${roundedAvg}%` : "—",
      tone: avgHex,
      footnote: "out of 100 marks",
    },
    {
      icon: ShieldAlert,
      label: "Integrity events",
      value: counts.cheatFlags,
      tone: counts.cheatFlags > 0 ? C.error : C.success,
      footnote: counts.cheatFlags > 0 ? "needs review" : "all clear",
    },
    {
      icon: BookOpen,
      label: "Notes",
      value: counts.notes,
      tone: C.navy,
      footnote: "uploaded PDFs",
    },
    {
      icon: ClipboardList,
      label: "Assignments",
      value: counts.assignments,
      tone: C.navy,
      footnote: "posted",
    },
  ];

  return (
    <div className="mb-5 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
      {kpis.map((k, i) => (
        <motion.div
          key={k.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, delay: i * 0.04 }}
          className="ledger-card p-4"
        >
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-[var(--text-muted)]">
              {k.label}
            </p>
            <k.icon className="h-4 w-4" style={{ color: k.tone }} />
          </div>
          <p
            className="tnum font-display mt-1.5 text-[30px] font-semibold leading-none"
            style={{ color: k.tone }}
          >
            {k.value}
          </p>
          <p className="mt-1.5 text-[11px] text-[var(--text-muted)]">
            {k.footnote}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
