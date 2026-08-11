"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  FileText,
  ClipboardList,
  ShieldAlert,
  BookOpen,
  Send,
  GraduationCap,
  ArrowRight,
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
import { useAuth } from "@/lib/auth";

const C = {
  navy: "#1c4a2f",
  navySoft: "#dfe9e0",
  brass: "#a67c2e",
  success: "#2f6b4f",
  error: "#a03a2e",
  warning: "#a05e1c",
  inkMuted: "#6b6052",
  hairline: "#cbbf9f",
};

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

function pctTone(pct: number): { hex: string; label: "success" | "warning" | "error" } {
  if (pct >= 70) return { hex: C.success, label: "success" };
  if (pct >= 40) return { hex: C.warning, label: "warning" };
  return { hex: C.error, label: "error" };
}

const initials = (name: string) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");

export default function TeacherDashboard() {
  const { user } = useAuth();
  const [data, setData] = useState<Analytics | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get<Analytics>("/teacher/analytics")
      .then((res) => setData(res.data))
      .catch((err) => setError(errorMessage(err)))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div>
        <PageTitle title="Dashboard" subtitle="Loading your classes…" />
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
  const avgTone = avgScore != null ? pctTone(avgScore).hex : C.inkMuted;

  const kpis = [
    { icon: Users, label: "Students", value: c.students, tone: C.navy, footnote: "across your classes" },
    { icon: BookOpen, label: "Notes", value: c.notes, tone: C.brass, footnote: "uploaded PDFs" },
    { icon: ClipboardList, label: "Assignments", value: c.assignments, tone: C.navy, footnote: "posted to classes" },
    { icon: Send, label: "Submissions", value: c.submissions, tone: C.success, footnote: "received" },
    { icon: FileText, label: "Tests", value: c.tests, tone: C.navy, footnote: "created" },
    {
      icon: ShieldAlert,
      label: "Cheat flags",
      value: c.cheatFlags,
      tone: c.cheatFlags > 0 ? C.error : C.success,
      footnote: c.cheatFlags > 0 ? "needs review" : "all clear",
    },
  ];

  const quickActions = [
    { href: "/teacher/notes", icon: BookOpen, label: "Upload module notes", note: "PDF, auto-embedded" },
    { href: "/teacher/assignments", icon: ClipboardList, label: "Post an assignment", note: "with deadlines" },
    { href: "/teacher/tests", icon: FileText, label: "Create a test", note: "auto-graded" },
    { href: "/teacher/classes", icon: Users, label: "Manage classes", note: "students & rosters" },
    { href: "/teacher/classes", icon: Send, label: "Send class notification", note: "to every student" },
    { href: "/teacher/analytics", icon: ShieldAlert, label: "Cheat report & analytics", note: "integrity insights" },
  ];

  const results = data?.recentResults ?? [];

  return (
    <div>
      <PageTitle
        title={`${user?.name?.split(" ")[0]}'s Dashboard`}
        subtitle={`${data?.classes.length ?? 0} classes · average score ${avgScore != null ? `${avgScore}/100` : "—"}`}
        right={
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="navy">
              <GraduationCap className="mr-1 h-3 w-3" />
              {data?.classes.length ?? 0} classes
            </Badge>
            <Badge tone={avgScore != null ? (avgScore >= 70 ? "success" : avgScore >= 40 ? "warning" : "error") : "navy"}>
              avg {avgScore != null ? `${avgScore}/100` : "—"}
            </Badge>
          </div>
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
            <p
              className="tnum font-display mt-1.5 text-[30px] font-semibold leading-none"
              style={{ color: k.tone }}
            >
              {k.value}
            </p>
            <p className="mt-1.5 text-[11px] text-ink-muted">{k.footnote}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Quick actions */}
        <Card>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-display text-[17px] font-semibold text-ink">
              Quick actions
            </h2>
            <span className="text-[11px] text-ink-muted">teaching tools</span>
          </div>
          <div className="grid gap-2">
            {quickActions.map((q, i) => (
              <motion.div
                key={q.label}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.1 + i * 0.04 }}
              >
                <Link
                  href={q.href}
                  className="group flex items-center gap-3 rounded-[2px] border border-hairline bg-paper-alt px-3 py-2.5 transition-all hover:-translate-y-0.5 hover:border-navy hover:shadow-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[2px] bg-navy-soft transition-colors group-hover:bg-navy">
                    <q.icon className="h-4 w-4 text-navy transition-colors group-hover:text-paper" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[13px] font-semibold text-ink group-hover:text-navy">
                      {q.label}
                    </span>
                    <span className="block truncate text-[11px] text-ink-muted">{q.note}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-ink-muted opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                </Link>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Recent results */}
        <Card className="lg:col-span-2">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <h2 className="font-display text-[17px] font-semibold text-ink">
                Recent results
              </h2>
              <p className="text-[12px] text-ink-muted">latest student submissions</p>
            </div>
            <Badge tone="navy">{results.length} shown</Badge>
          </div>
          {results.length === 0 ? (
            <EmptyState
              title="No results yet"
              body="When students submit tests, their scores appear here."
            />
          ) : (
            <div className="divide-y divide-hairline">
              {results.map((r, i) => {
                const pct = r.totalMarks > 0 ? (r.score / r.totalMarks) * 100 : 0;
                const tone = pctTone(pct);
                return (
                  <motion.div
                    key={r.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 + i * 0.04 }}
                    className="flex items-center gap-3 py-3"
                  >
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[12px] font-bold"
                      style={{ background: C.navySoft, color: C.navy }}
                    >
                      {initials(r.student.name)}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[13px] font-semibold text-ink">
                        {r.student.name}
                        {r.student.usn && (
                          <span className="ml-1.5 text-[11px] font-medium text-ink-muted">
                            {r.student.usn}
                          </span>
                        )}
                      </p>
                      <p className="truncate text-[11px] text-ink-muted">
                        {r.test.title}
                        <span className="mx-1 text-hairline">·</span>
                        <span className="text-hairline" style={{ color: C.inkMuted }}>
                          {timeAgo(r.submittedAt)}
                        </span>
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <div className="hidden h-2 w-[80px] overflow-hidden rounded-full bg-paper-deep sm:block">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${Math.min(100, pct)}%`, background: tone.hex }}
                        />
                      </div>
                      <span
                        className="tnum rounded-[2px] border px-2.5 py-1 text-[13px] font-bold"
                        style={{ borderColor: tone.hex, color: tone.hex, background: "transparent" }}
                      >
                        {r.score}/{r.totalMarks}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
