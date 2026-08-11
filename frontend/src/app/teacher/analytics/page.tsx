"use client";

import { useEffect, useMemo, useState } from "react";
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
import { motion } from "framer-motion";
import {
  ShieldAlert,
  Users,
  FileText,
  GraduationCap,
  TrendingUp,
  BookOpen,
  ClipboardList,
} from "lucide-react";
import { api, errorMessage } from "@/lib/api";
import {
  Badge,
  Card,
  EmptyState,
  ErrorState,
  LoadingRows,
  PageTitle,
} from "@/components/ui";

const C = {
  navy: "#1c4a2f",
  navySoft: "#dfe9e0",
  brass: "#a67c2e",
  success: "#2f6b4f",
  error: "#a03a2e",
  warning: "#a05e1c",
  info: "#3e6d9c",
  inkMuted: "#6b6052",
  hairline: "#cbbf9f",
  grid: "#cbbf9f",
  paperDeep: "#e7dfcc",
};

const PALETTE = [C.navy, C.brass, C.success, C.warning, C.info, C.error];

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

function timeAgo(iso: string): string {
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return "";
  const mins = Math.max(0, Math.floor((Date.now() - then) / 60000));
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 7) return `${days}d ago`;
  return new Date(iso).toLocaleDateString();
}

const initials = (name: string) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");

const severityHex: Record<string, string> = {
  HIGH: C.error,
  MEDIUM: C.warning,
  LOW: C.info,
};

const typeChip: Record<string, "error" | "warning" | "info" | "navy"> = {
  TAB_SWITCH: "error",
  WINDOW_BLUR: "warning",
  COPY_PASTE: "warning",
  FOCUS_OUT: "info",
};

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

  const resultBars = useMemo(
    () =>
      (data?.recentResults ?? [])
        .slice(-10)
        .map((r) => ({
          name: r.student.name.split(" ")[0],
          full: `${r.student.name}${r.student.usn ? ` (${r.student.usn})` : ""}`,
          test: r.test.title,
          pct: r.totalMarks > 0 ? Math.round((r.score / r.totalMarks) * 100) : 0,
          score: `${r.score}/${r.totalMarks}`,
        })),
    [data]
  );

  const avgPct = useMemo(() => {
    if (resultBars.length === 0) return 0;
    return Math.round(resultBars.reduce((a, r) => a + r.pct, 0) / resultBars.length);
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

  const classesBySem = useMemo(() => {
    const map = new Map<number, number>();
    for (const kl of data?.classes ?? []) {
      map.set(kl.semester, (map.get(kl.semester) ?? 0) + 1);
    }
    return Array.from(map.entries())
      .sort((a, b) => a[0] - b[0])
      .map(([sem, count], i) => ({
        name: `Sem ${sem}`,
        count,
        color: PALETTE[i % PALETTE.length],
      }));
  }, [data]);

  const severityBreakdown = useMemo(() => {
    const b = [
      { severity: "HIGH", count: 0, color: C.error },
      { severity: "MEDIUM", count: 0, color: C.warning },
      { severity: "LOW", count: 0, color: C.info },
    ];
    for (const f of flags) {
      const hit = b.find((x) => x.severity === f.severity);
      if (hit) hit.count++;
    }
    return b;
  }, [flags]);

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

  const c = data?.counts ?? { students: 0, tests: 0, submissions: 0, cheatFlags: 0, notes: 0, assignments: 0 };
  const avgScore = data?.avgScore != null ? Math.round(data.avgScore * 100) / 100 : null;
  const avgHex = avgScore != null ? (avgScore >= 70 ? C.success : avgScore >= 40 ? C.warning : C.error) : C.inkMuted;
  const totalFlagged = flags.length;

  const kpis = [
    { icon: Users, label: "Students", value: c.students, tone: C.navy, footnote: "across your classes" },
    { icon: FileText, label: "Tests taken", value: c.submissions, tone: C.brass, footnote: "submitted" },
    { icon: TrendingUp, label: "Avg score", value: avgScore != null ? avgScore : "—", tone: avgHex, footnote: "out of 100 marks" },
    { icon: ShieldAlert, label: "Cheat flags", value: c.cheatFlags, tone: c.cheatFlags > 0 ? C.error : C.success, footnote: c.cheatFlags > 0 ? "needs review" : "all clear" },
    { icon: BookOpen, label: "Notes", value: c.notes, tone: C.navy, footnote: "uploaded PDFs" },
    { icon: ClipboardList, label: "Assignments", value: c.assignments, tone: C.navy, footnote: "posted" },
  ];

  const tooltipStyle = { border: `1px solid ${C.hairline}`, borderRadius: 4, fontSize: 12, color: C.navy };

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
            <Badge tone="success">No cheat flags</Badge>
          )
        }
      />

      {/* KPI strip */}
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
                Recent test scores
              </h2>
              <p className="text-[12px] text-ink-muted">% score per submitted test (last 10)</p>
            </div>
            <span
              className="tnum rounded-full px-3 py-1 text-[11px] font-bold"
              style={{ background: C.navySoft, color: avgHex }}
            >
              avg {avgPct}%
            </span>
          </div>
          {resultBars.length === 0 ? (
            <p className="py-14 text-center text-[13px] text-ink-muted">
              No test submissions yet.
            </p>
          ) : (
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={resultBars} margin={{ top: 8, right: 8, left: -22, bottom: 0 }}>
                <CartesianGrid stroke={C.grid} strokeDasharray="2 4" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: C.inkMuted }} axisLine={{ stroke: C.hairline }} tickLine={false} />
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
                  label={{ value: `avg ${avgPct}%`, position: "insideTopLeft", fill: C.brass, fontSize: 10 }}
                />
                <Bar dataKey="pct" radius={[4, 4, 0, 0]} maxBarSize={44}>
                  {resultBars.map((r, i) => (
                    <Cell key={i} fill={r.pct >= 70 ? C.success : r.pct >= 40 ? C.warning : C.error} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          )}
        </Card>

        <Card>
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="font-display text-[17px] font-semibold text-ink">Score bands</h2>
              <p className="text-[12px] text-ink-muted">where submissions fall (last 10)</p>
            </div>
            <Badge tone="navy">{resultBars.length} submissions</Badge>
          </div>
          {resultBars.length === 0 ? (
            <p className="py-14 text-center text-[13px] text-ink-muted">
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
                      formatter={(v: any, name: any) => [`${v} submission${v === 1 ? "" : "s"}`, name]}
                      contentStyle={tooltipStyle}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                  <span className="tnum font-display text-[30px] font-semibold leading-none text-navy">
                    {resultBars.length}
                  </span>
                  <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-ink-muted">
                    results
                  </span>
                </div>
              </div>
              <div className="w-full max-w-[210px] space-y-2.5">
                {bands.map((b) => (
                  <div key={b.name} className="flex items-center gap-2.5">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: b.color }} />
                    <span className="flex-1 text-[12px] font-medium text-ink">{b.name}</span>
                    <span className="tnum text-[12px] font-semibold text-navy">{b.count}</span>
                    <span className="tnum w-9 text-right text-[11px] text-ink-muted">
                      {resultBars.length > 0 ? `${Math.round((b.count / resultBars.length) * 100)}%` : "—"}
                    </span>
                  </div>
                ))}
                <div className="flex items-center gap-2.5 border-t border-hairline pt-2.5">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: avgHex }} />
                  <span className="flex-1 text-[12px] font-medium text-ink">Average</span>
                  <span className="tnum text-[12px] font-semibold" style={{ color: avgHex }}>
                    {avgPct}%
                  </span>
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>

      {/* Classes + integrity */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="font-display text-[17px] font-semibold text-ink">Classes by semester</h2>
              <p className="text-[12px] text-ink-muted">how your roster is spread</p>
            </div>
            <GraduationCap className="h-4 w-4 text-ink-muted" />
          </div>
          {classesBySem.length === 0 ? (
            <p className="py-14 text-center text-[13px] text-ink-muted">No classes assigned yet.</p>
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
                      formatter={(v: any, name: any) => [`${v} class${v === 1 ? "" : "es"}`, name]}
                      contentStyle={tooltipStyle}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                  <span className="tnum font-display text-[28px] font-semibold leading-none text-navy">
                    {classesBySem.reduce((a, s) => a + s.count, 0)}
                  </span>
                  <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-ink-muted">
                    classes
                  </span>
                </div>
              </div>
              <div className="w-full max-w-[190px] space-y-2.5">
                {classesBySem.map((s) => (
                  <div key={s.name} className="flex items-center gap-2.5">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: s.color }} />
                    <span className="flex-1 text-[12px] font-medium text-ink">{s.name}</span>
                    <span className="tnum text-[12px] font-semibold text-navy">{s.count}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Card>

        <Card>
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="font-display text-[17px] font-semibold text-ink">Integrity log</h2>
              <p className="text-[12px] text-ink-muted">tab-switch & window-blur events</p>
            </div>
            <div className="flex items-center gap-1.5">
              {severityBreakdown.map((s) => (
                <span
                  key={s.severity}
                  className="tnum rounded-full px-2.5 py-1 text-[10px] font-bold"
                  style={{ background: `${s.color}1a`, color: s.color }}
                >
                  {s.severity} {s.count}
                </span>
              ))}
            </div>
          </div>
          {flags.length === 0 ? (
            <EmptyState
              title="Clean record"
              body="No tab-switch or window-blur flags recorded during tests."
            />
          ) : (
            <>
              <div className="mb-4 flex h-2 overflow-hidden rounded-full bg-paper-deep">
                {severityBreakdown.map((s) =>
                  s.count > 0 ? (
                    <motion.div
                      key={s.severity}
                      initial={{ width: 0 }}
                      animate={{ width: `${(s.count / flags.length) * 100}%` }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      style={{ background: s.color }}
                    />
                  ) : null
                )}
              </div>
              <div className="max-h-[300px] divide-y divide-hairline overflow-y-auto">
                {flags.map((f, i) => {
                  const sevHex = severityHex[f.severity] ?? C.info;
                  return (
                    <motion.div
                      key={f.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: i * 0.04 }}
                      className="flex items-center gap-3 py-2.5"
                    >
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
                        style={{ background: `${sevHex}1a`, color: sevHex }}
                      >
                        {initials(f.student.name)}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[13px] font-semibold text-ink">
                          {f.student.name}
                          {f.student.usn && (
                            <span className="ml-1.5 text-[11px] font-medium text-ink-muted">{f.student.usn}</span>
                          )}
                        </p>
                        <p className="truncate text-[11px] text-ink-muted">
                          {f.test.title}
                          <span className="mx-1">·</span>
                          <span className="font-semibold" style={{ color: typeChip[f.type] ? severityHex[f.severity] : C.inkMuted }}>
                            {f.type}
                          </span>
                          {f.details && <span> · {f.details}</span>}
                          <span className="mx-1">·</span>
                          {timeAgo(f.createdAt)}
                        </p>
                      </div>
                      <Badge tone={f.severity === "HIGH" ? "error" : f.severity === "MEDIUM" ? "warning" : "info"}>
                        {f.severity}
                      </Badge>
                    </motion.div>
                  );
                })}
              </div>
            </>
          )}
        </Card>
      </div>
    </div>
  );
}
