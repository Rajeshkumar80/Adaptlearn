"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Trophy,
  BellRing,
  TrendingUp,
  CalendarClock,
  MessageSquareText,
  GraduationCap,
  BookOpenCheck,
  ArrowRight,
} from "lucide-react";
import { api, errorMessage } from "@/lib/api";
import {
  Badge,
  Card,
  EmptyState,
  ErrorState,
  LoadingRows,
  PageShell,
  PageTitle,
} from "@/components/ui";
import { useAuth } from "@/lib/auth";

const C = {
  navy: "var(--accent-primary)",
  navySoft: "var(--accent-soft)",
  brass: "var(--accent-primary)",
  success: "var(--status-running)",
  error: "var(--status-error)",
  warning: "var(--status-warning)",
  inkMuted: "var(--text-muted)",
  hairline: "var(--border-default)",
};

interface Profile {
  user: {
    id: string;
    name: string;
    usn: string | null;
    branch: string | null;
    semester: number | null;
    class: { id: string; name: string; branch: string; semester: number } | null;
    learningStates: {
      id: string;
      mastery: number;
      correctCount: number;
      wrongCount: number;
      topic: { id: string; name: string; subjectCode: string };
    }[];
    achievements: { id: string; type: string; name: string; earnedAt: string }[];
  };
}

interface Notification {
  id: string;
  title: string;
  body: string;
  type: string;
  read: boolean;
  createdAt: string;
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

function severityFor(mastery: number): "success" | "warning" | "error" {
  if (mastery >= 0.7) return "success";
  if (mastery >= 0.4) return "warning";
  return "error";
}

const severityHex: Record<string, string> = {
  success: "var(--status-running)",
  warning: "var(--status-warning)",
  error: "var(--status-error)",
};

export default function StudentDashboard() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile["user"] | null>(null);
  const [notifs, setNotifs] = useState<Notification[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.get<Profile>("/student/profile"),
      api.get<{ notifications: Notification[] }>("/notifications/mine"),
    ])
      .then(([p, n]) => {
        setProfile(p.data.user);
        setNotifs(n.data.notifications.slice(0, 5));
      })
      .catch((err) => setError(errorMessage(err)))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div>
        <PageTitle title="Dashboard" subtitle="Opening your study ledger…" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="skeleton h-24" />
          ))}
        </div>
        <LoadingRows rows={3} />
      </div>
    );
  }
  if (error) return <ErrorState message={error} />;

  const states = profile?.learningStates ?? [];
  const avgMastery =
    states.length > 0 ? states.reduce((a, s) => a + s.mastery, 0) / states.length : 0;
  const mastered = states.filter((s) => s.mastery >= 0.7).length;
  const unread = notifs.filter((n) => !n.read).length;
  const firstName = profile?.name?.split(" ")[0] ?? "";
  const cls = profile?.class;

  const kpis = [
    {
      icon: TrendingUp,
      label: "Avg mastery",
      value: `${Math.round(avgMastery * 100)}%`,
      tone: C.brass,
      footnote: `${states.length} topics tracked`,
    },
    {
      icon: BookOpenCheck,
      label: "Topics mastered",
      value: mastered,
      tone: C.success,
      footnote: "≥ 70% mastery",
    },
    {
      icon: Trophy,
      label: "Achievements",
      value: profile?.achievements.length ?? 0,
      tone: C.navy,
      footnote: "earned along the way",
    },
    {
      icon: BellRing,
      label: "Unread notices",
      value: unread,
      tone: unread > 0 ? C.error : C.inkMuted,
      footnote: "from your teacher",
    },
  ];

  const quickActions = [
    {
      href: "/student/tutor",
      icon: MessageSquareText,
      label: "Ask the AI Tutor",
      note: "RAG + citations",
    },
    {
      href: "/student/scheduler",
      icon: CalendarClock,
      label: "Plan today",
      note: "Free-hours planner",
    },
    {
      href: "/student/progress",
      icon: TrendingUp,
      label: "See how I learn",
      note: "Forgetting curve",
    },
    {
      href: "/student/tests",
      icon: Trophy,
      label: "Take a test",
      note: "Auto-graded",
    },
  ];

  const topTopics = [...states].sort((a, b) => b.mastery - a.mastery).slice(0, 5);

  return (
    <PageShell>
      <PageTitle
        title={`Welcome, ${firstName}`}
        subtitle={`${profile?.usn ?? ""} · ${cls?.name ?? "No class yet"} · Sem ${profile?.semester ?? "—"}`}
        right={
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="brass">
              <GraduationCap className="mr-1 h-3 w-3" />
              {profile?.branch ?? cls?.branch ?? "VTU"}
            </Badge>
            {cls && <Badge tone="navy">Sem {cls.semester}</Badge>}
          </div>
        }
      />

      {/* KPI strip — matches How I Learn */}
      <div className="mb-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {kpis.map((k, i) => (
          <motion.div
            key={k.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay: i * 0.05 }}
            className="ledger-card p-4"
          >
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>
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
            <p className="mt-1.5 text-[11px]" style={{ color: "var(--text-muted)" }}>{k.footnote}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Quick actions */}
        <Card>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-display text-[17px] font-semibold text-[var(--text-primary)]">
              Quick actions
            </h2>
            <span className="text-[11px] text-[var(--text-muted)]">jump back in</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((q, i) => (
              <motion.div
                key={q.href}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.1 + i * 0.05 }}
              >
                <Link
                  href={q.href}
                  className="group flex h-full flex-col rounded-md border p-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
                  style={{ borderColor: "var(--border-default)", background: "var(--bg-secondary)" }}
                >
                  <div className="mb-3 flex items-start justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md transition-colors" style={{ background: "var(--accent-soft)" }}>
                      <q.icon className="h-[18px] w-[18px] transition-colors" style={{ color: "var(--accent-primary)" }} />
                    </span>
                    <ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" style={{ color: "var(--text-muted)" }} />
                  </div>
                  <p className="text-[13px] font-semibold" style={{ color: "var(--text-primary)" }}>
                    {q.label}
                  </p>
                  <p className="mt-0.5 text-[11px]" style={{ color: "var(--text-muted)" }}>{q.note}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Notices */}
        <Card>
          <div className="mb-3 flex items-center justify-between">
            <div>
              <h2 className="font-display text-[17px] font-semibold text-[var(--text-primary)]">Notices</h2>
              <p className="text-[12px] text-[var(--text-muted)]">from your teacher</p>
            </div>
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                unread > 0 ? "bg-[var(--status-error-soft)]" : "bg-[var(--bg-secondary)]"
              }`}
            >
              <BellRing
                className={`h-4 w-4 ${unread > 0 ? "text-[var(--status-error)]" : "text-[var(--text-muted)]"}`}
              />
            </span>
          </div>
          {notifs.length === 0 ? (
            <EmptyState
              title="Quiet so far"
              body="Class notifications from your teacher will land here."
            />
          ) : (
            <div className="divide-y divide-[var(--border-default)]">
              {notifs.map((n) => (
                <div key={n.id} className="flex items-start gap-2.5 py-2.5">
                  <span
                    className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                      n.read ? "bg-[var(--bg-tertiary)]" : "bg-[var(--accent-primary)]"
                    }`}
                    title={n.read ? "read" : "unread"}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="truncate text-[13px] font-semibold text-[var(--text-primary)]">
                        {n.title}
                      </p>
                      {!n.read && <Badge tone="brass">new</Badge>}
                      <span className="ml-auto shrink-0 text-[10px] text-[var(--text-muted)]">
                        {timeAgo(n.createdAt)}
                      </span>
                    </div>
                    <p className="mt-0.5 text-[12px] leading-relaxed text-[var(--text-muted)]">
                      {n.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>

      {/* Recent topics */}
      <Card className="mt-6">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="font-display text-[17px] font-semibold text-[var(--text-primary)]">
              Recent topics
            </h2>
            <p className="text-[12px] text-[var(--text-muted)]">
              Where your mastery stands right now
            </p>
          </div>
          <Badge tone="navy">{states.length} tracked</Badge>
        </div>
        {states.length === 0 ? (
          <EmptyState
            title="No study history"
            body="Answer your first question or take a test to begin tracking mastery."
          />
        ) : (
          <div className="divide-y divide-[var(--border-default)]">
            {topTopics.map((s, i) => {
              const tone = severityFor(s.mastery);
              const pct = Math.round(s.mastery * 100);
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 + i * 0.05 }}
                  className="flex items-center gap-4 py-2.5"
                >
                  <span className="tnum w-6 shrink-0 text-[12px] font-semibold text-[var(--text-muted)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13px] font-semibold text-[var(--text-primary)]">
                      {s.topic.name}
                    </p>
                    <p className="mt-0.5 text-[11px] text-[var(--text-muted)]">
                      {s.topic.subjectCode} · {s.correctCount}✓ {s.wrongCount}✗
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <div className="hidden h-2 w-[110px] overflow-hidden rounded-full bg-[var(--bg-tertiary)] md:block">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${pct}%`, background: severityHex[tone] }}
                      />
                    </div>
                    <span
                      className="tnum w-11 text-right text-[15px] font-semibold"
                      style={{ color: severityHex[tone] }}
                    >
                      {pct}%
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </Card>
    </PageShell>
  );
}
