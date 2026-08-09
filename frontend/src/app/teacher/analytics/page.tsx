"use client";

import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";
import { ShieldAlert } from "lucide-react";
import { api, errorMessage } from "@/lib/api";
import {
  Badge,
  Card,
  EmptyState,
  ErrorState,
  LoadingRows,
  PageTitle,
  StatCard,
} from "@/components/ui";

interface Analytics {
  classes: { id: string; name: string; branch: string; semester: number }[];
  counts: {
    students: number;
    tests: number;
    submissions: number;
    cheatFlags: number;
    notes: number;
    assignments: number;
  };
  avgScore: number | null;
  recentResults: {
    id: string;
    score: number;
    totalMarks: number;
    submittedAt: string;
    student: { name: string; usn: string | null };
    test: { title: string };
  }[];
}

interface CheatFlag {
  id: string;
  testId: string;
  type: string;
  severity: string;
  details: string;
  createdAt: string;
  student: { name: string; usn: string | null };
  test: { title: string };
}

export default function TeacherAnalytics() {
  const [data, setData] = useState<Analytics | null>(null);
  const [flags, setFlags] = useState<CheatFlag[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.get<Analytics>("/teacher/analytics"),
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
        <LoadingRows rows={3} />
      </div>
    );
  }
  if (error) return <ErrorState message={error} />;

  const c = data?.counts ?? { students: 0, tests: 0, submissions: 0, cheatFlags: 0, notes: 0, assignments: 0 };

  const classChart = (data?.classes ?? []).map((kl) => ({
    name: kl.name,
    students: 0,
  }));

  const resultBars = (data?.recentResults ?? []).slice(-10).map((r) => ({
    name: r.student.name.split(" ")[0],
    pct: r.totalMarks > 0 ? Math.round((r.score / r.totalMarks) * 100) : 0,
  }));

  return (
    <div>
      <PageTitle
        title="Analytics"
        subtitle="Class performance and integrity at a glance."
        right={
          flags.length > 0 ? (
            <Badge tone="error">
              <ShieldAlert className="mr-1 h-3 w-3" />
              {flags.length} flagged events
            </Badge>
          ) : (
            <Badge tone="success">No cheat flags</Badge>
          )
        }
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Students" value={c.students} tone="navy" />
        <StatCard label="Tests taken" value={c.submissions} />
        <StatCard
          label="Avg score"
          value={data?.avgScore != null ? Math.round(data.avgScore * 100) / 100 : "—"}
          tone="brass"
          footnote="marks"
        />
        <StatCard
          label="Cheat flags"
          value={c.cheatFlags}
          tone={c.cheatFlags > 0 ? "error" : "success"}
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <h2 className="font-display mb-1 text-[17px] font-semibold text-ink">
            Recent test scores
          </h2>
          <p className="mb-3 text-[12px] text-ink-muted">
            % score per submitted test (last 10).
          </p>
          {resultBars.length === 0 ? (
            <p className="py-14 text-center text-[13px] text-ink-muted">
              No test submissions yet.
            </p>
          ) : (
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={resultBars}>
                <CartesianGrid stroke="#D8CDB4" strokeDasharray="2 4" />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#6E6656" }} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: "#6E6656" }} />
                <Tooltip formatter={(v: number) => [`${v}%`, "Score"]} />
                <Bar dataKey="pct" radius={[2, 2, 0, 0]}>
                  {resultBars.map((r, i) => (
                    <Cell key={i} fill={r.pct >= 40 ? "#2F6B4F" : "#A03A2E"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          )}
        </Card>

        <Card>
          <h2 className="font-display mb-3 text-[17px] font-semibold text-ink">
            Integrity ledger
          </h2>
          {flags.length === 0 ? (
            <EmptyState
              title="Clean record"
              body="No tab-switch or window-blur flags recorded during tests."
            />
          ) : (
            <div className="divide-y divide-hairline">
              {flags.map((f) => (
                <div key={f.id} className="flex items-center gap-3 py-2.5">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13px] font-semibold text-ink">
                      {f.student.name} ({f.student.usn})
                    </p>
                    <p className="text-[11px] text-ink-muted">
                      {f.test.title} · {f.type} · {f.details || "no details"}
                    </p>
                  </div>
                  <Badge
                    tone={
                      f.severity === "HIGH"
                        ? "error"
                        : f.severity === "MEDIUM"
                          ? "warning"
                          : "info"
                    }
                  >
                    {f.severity}
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
