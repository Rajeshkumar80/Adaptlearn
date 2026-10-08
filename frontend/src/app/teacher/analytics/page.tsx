"use client";

import { useEffect, useState } from "react";
import { ShieldAlert } from "lucide-react";
import { api, errorMessage } from "@/lib/api";
import {
  Badge,
  ErrorState,
  LoadingRows,
  PageTitle,
} from "@/components/ui";
import { AnalyticsData, CheatFlag } from "./types";
import { TeacherMetricStrip } from "./TeacherMetricStrip";
import { ScorePerformanceSection } from "./ScorePerformanceSection";
import { ClassesBreakdownCard } from "./ClassesBreakdownCard";
import { IntegrityLedgerCard } from "./IntegrityLedgerCard";

export default function TeacherAnalytics() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [flags, setFlags] = useState<CheatFlag[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.get<AnalyticsData>("/teacher/analytics"),
      api.get<{ flags: CheatFlag[] }>("/teacher/cheat-flags"),
    ])
      .then(([a, f]) => {
        setData(a.data);
        setFlags(f.data.flags);
      })
      .catch((err) => setError(errorMessage(err)))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div>
        <PageTitle title="Analytics" subtitle="Loading metrics…" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="skeleton h-24" />
          ))}
        </div>
        <LoadingRows rows={3} />
      </div>
    );
  }

  if (error) return <ErrorState message={error} />;

  const counts = data?.counts ?? {
    students: 0,
    tests: 0,
    submissions: 0,
    cheatFlags: 0,
    notes: 0,
    assignments: 0,
  };
  const totalFlagged = flags.length;

  return (
    <div>
      <PageTitle
        title="Analytics"
        subtitle="Class performance and integrity at a glance."
        right={
          totalFlagged > 0 ? (
            <Badge tone="error">
              <ShieldAlert className="mr-1 h-3 w-3" />
              {totalFlagged} flagged events
            </Badge>
          ) : (
            <Badge tone="success">No integrity flags</Badge>
          )
        }
      />

      {/* KPI Strip */}
      <TeacherMetricStrip counts={counts} avgScore={data?.avgScore ?? null} />

      {/* Score Performance Charts */}
      <ScorePerformanceSection recentResults={data?.recentResults ?? []} />

      {/* Classes + Integrity Ledger */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <ClassesBreakdownCard classes={data?.classes ?? []} />
        <IntegrityLedgerCard flags={flags} />
      </div>
    </div>
  );
}
