"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Trophy,
  Bell,
  TrendingUp,
  CalendarClock,
  MessageSquareText,
  GraduationCap,
} from "lucide-react";
import { api, errorMessage } from "@/lib/api";
import {
  Badge,
  Card,
  EmptyState,
  ErrorState,
  LoadingRows,
  MasteryBar,
  PageTitle,
  StatCard,
} from "@/components/ui";
import { useAuth } from "@/lib/auth";

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
        <LoadingRows rows={4} />
      </div>
    );
  }
  if (error) return <ErrorState message={error} />;

  const states = profile?.learningStates ?? [];
  const avgMastery =
    states.length > 0
      ? states.reduce((a, s) => a + s.mastery, 0) / states.length
      : 0;
  const mastered = states.filter((s) => s.mastery >= 0.7).length;
  const unread = notifs.filter((n) => !n.read).length;

  return (
    <div>
      <PageTitle
        title={`Welcome, ${profile?.name?.split(" ")[0] ?? ""}`}
        subtitle={`${profile?.usn ?? ""} · ${
          profile?.class?.name ?? "No class yet"
        } · Sem ${profile?.semester ?? "—"}`}
        right={
          <Badge tone="brass">
            <GraduationCap className="mr-1 h-3 w-3" />
            {profile?.branch ?? "VTU"}
          </Badge>
        }
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard
          label="Avg mastery"
          value={`${Math.round(avgMastery * 100)}%`}
          tone="navy"
          footnote={`${states.length} topics tracked`}
        />
        <StatCard
          label="Topics mastered"
          value={mastered}
          tone="success"
          footnote="≥ 70% mastery"
        />
        <StatCard
          label="Achievements"
          value={profile?.achievements.length ?? 0}
          tone="brass"
          footnote="earned along the way"
        />
        <StatCard
          label="Unread notices"
          value={unread}
          tone={unread > 0 ? "error" : "ink"}
          footnote="from your teacher"
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-display text-[17px] font-semibold text-ink">
              Quick actions
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
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
            ].map((q) => (
              <Link
                key={q.href}
                href={q.href}
                className="group rounded-[2px] border border-hairline bg-paper-alt p-4 transition-colors hover:border-navy"
              >
                <q.icon className="mb-2 h-5 w-5 text-navy" />
                <p className="text-[13px] font-semibold text-ink group-hover:text-navy">
                  {q.label}
                </p>
                <p className="text-[11px] text-ink-muted">{q.note}</p>
              </Link>
            ))}
          </div>
        </Card>

        <Card>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-display text-[17px] font-semibold text-ink">
              Notices
            </h2>
            <Bell className="h-4 w-4 text-ink-muted" />
          </div>
          {notifs.length === 0 ? (
            <EmptyState
              title="Quiet so far"
              body="Class notifications from your teacher will land here."
            />
          ) : (
            <div className="divide-y divide-hairline">
              {notifs.map((n) => (
                <div key={n.id} className="py-2.5">
                  <div className="flex items-center gap-2">
                    <p className="text-[13px] font-semibold text-ink">{n.title}</p>
                    {!n.read && <Badge tone="brass">new</Badge>}
                  </div>
                  <p className="mt-0.5 text-[12px] text-ink-muted">{n.body}</p>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>

      <Card className="mt-6">
        <h2 className="font-display mb-3 text-[17px] font-semibold text-ink">
          Recent topics
        </h2>
        {states.length === 0 ? (
          <EmptyState
            title="No study history"
            body="Answer your first question or take a test to begin tracking mastery."
          />
        ) : (
          <div className="divide-y divide-hairline">
            {[...states]
              .sort((a, b) => b.mastery - a.mastery)
              .slice(0, 5)
              .map((s) => (
                <div key={s.id} className="flex items-center gap-4 py-2.5">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13px] font-semibold text-ink">
                      {s.topic.name}
                    </p>
                    <p className="text-[11px] text-ink-muted">
                      {s.topic.subjectCode} · {s.correctCount}✓ {s.wrongCount}✗
                    </p>
                  </div>
                  <MasteryBar value={s.mastery} />
                </div>
              ))}
          </div>
        )}
      </Card>
    </div>
  );
}
