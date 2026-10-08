"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BellRing,
  CalendarClock,
  MessageSquareText,
  GraduationCap,
  TrendingUp,
  Trophy,
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
import { KpiStrip } from "@/components/dashboard/KpiStrip";
import { RecommendationCard } from "@/components/dashboard/RecommendationCard";
import { SubjectGrid } from "@/components/dashboard/SubjectGrid";
import { FocusQueue } from "@/components/dashboard/FocusQueue";

interface StudentIntelligence {
  user: {
    id: string;
    name: string;
    usn: string | null;
    branch: string | null;
    semester: number | null;
    className: string | null;
  };
  overallLearningScore: number;
  averageMastery: number;
  retentionScore: number;
  forgettingRiskScore: number;
  questionAccuracy: number;
  studyStreakDays: number;
  totalStudyMinutes: number;
  learningVelocityPerHour: number;
  learningSpeedCategory: string;
  preferredStudyWindow: string;
  predictedReadinessDate: string;
  masteryDistribution: { mastered: number; learning: number; newTopics: number };
  subjectBreakdown: Array<{
    subjectCode: string;
    subjectName: string;
    topicsTracked: number;
    topicsMastered: number;
    avgMastery: number;
    avgRetention: number;
    examReadiness: number;
    atRisk: boolean;
  }>;
  focusQueue: Array<{
    topicId: string;
    topicName: string;
    subjectCode: string;
    moduleNumber: number;
    mastery: number;
    retention: number;
    forgettingRisk: number;
    pyqImportance: number;
    actionReason: string;
  }>;
  topRecommendation: {
    policy: string;
    topicId: string;
    action: string;
    rationale: string;
    confidenceScore: number;
  } | null;
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
  const [intel, setIntel] = useState<StudentIntelligence | null>(null);
  const [notifs, setNotifs] = useState<Notification[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.get<{ intelligence: StudentIntelligence }>("/student/intelligence"),
      api.get<{ notifications: Notification[] }>("/notifications/mine"),
    ])
      .then(([iRes, nRes]) => {
        setIntel(iRes.data.intelligence);
        setNotifs(nRes.data.notifications.slice(0, 5));
      })
      .catch((err) => setError(errorMessage(err)))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div>
        <PageTitle title="Student Intelligence Dashboard" subtitle="Loading academic learning ledger…" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 mb-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="skeleton h-24" />
          ))}
        </div>
        <LoadingRows rows={3} />
      </div>
    );
  }

  if (error) return <ErrorState message={error} />;

  const firstName = intel?.user?.name ? intel.user.name.split(" ")[0] : user?.name?.split(" ")[0] || "Student";
  const unreadCount = notifs.filter((n) => !n.read).length;

  const quickActions = [
    { href: "/student/progress", icon: TrendingUp, label: "How I Learn", note: "Personalized forgetting curve" },
    { href: "/student/scheduler", icon: CalendarClock, label: "Adaptive Scheduler", note: "3-2-1 & 80/20 plans" },
    { href: "/student/tutor", icon: MessageSquareText, label: "AI Tutor", note: "Grounded VTU answers" },
    { href: "/student/tests", icon: Trophy, label: "Assessments", note: "Auto & LLM evaluated" },
  ];

  return (
    <PageShell>
      <PageTitle
        title={`Welcome, ${firstName}`}
        subtitle={`${intel?.user?.usn ?? user?.usn ?? "VTU Student"} · ${intel?.user?.className ?? "CSE"} · Sem ${intel?.user?.semester ?? 7}`}
        right={
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="brass">
              <GraduationCap className="mr-1 h-3 w-3" />
              {intel?.user?.branch ?? "CSE"}
            </Badge>
            <Badge tone="navy">
              Study Window: {intel?.preferredStudyWindow || "FLEXIBLE"}
            </Badge>
          </div>
        }
      />

      {/* KPI Strip */}
      <KpiStrip
        overallScore={intel?.overallLearningScore ?? 0}
        avgMastery={intel?.averageMastery ?? 0}
        retentionScore={intel?.retentionScore ?? 100}
        forgettingRisk={intel?.forgettingRiskScore ?? 0}
        studyStreakDays={intel?.studyStreakDays ?? 0}
        questionAccuracy={intel?.questionAccuracy ?? 0}
        predictedReadinessDate={intel?.predictedReadinessDate ?? "Calculated dynamically"}
      />

      {/* AI Recommendation: What should I study now? */}
      <RecommendationCard
        decision={intel?.topRecommendation ?? null}
        targetTopicName={intel?.focusQueue?.[0]?.topicName}
        targetSubjectCode={intel?.focusQueue?.[0]?.subjectCode}
      />

      {/* Grid: Subject Readiness & Focus Queue */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
        <SubjectGrid subjects={intel?.subjectBreakdown ?? []} />
        <FocusQueue topics={intel?.focusQueue ?? []} />
      </div>

      {/* Quick Navigation & Teacher Notices */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-display text-[16px] font-semibold text-[var(--text-primary)]">
              Quick Actions
            </h3>
            <span className="text-[11px] text-[var(--text-muted)]">jump back in</span>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {quickActions.map((q) => (
              <Link
                key={q.href}
                href={q.href}
                className="group flex flex-col rounded-md border p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-sm"
                style={{ borderColor: "var(--border-default)", background: "var(--bg-secondary)" }}
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[var(--accent-soft)]">
                    <q.icon className="h-3.5 w-3.5 text-[var(--accent-primary)]" />
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--text-muted)]" />
                </div>
                <p className="text-[12px] font-semibold text-[var(--text-primary)]">{q.label}</p>
                <p className="text-[10px] text-[var(--text-muted)] mt-0.5">{q.note}</p>
              </Link>
            ))}
          </div>
        </Card>

        <Card>
          <div className="mb-3 flex items-center justify-between">
            <div>
              <h3 className="font-display text-[16px] font-semibold text-[var(--text-primary)]">
                Notices & Announcements
              </h3>
              <p className="text-[11px] text-[var(--text-muted)]">From your instructors</p>
            </div>
            {unreadCount > 0 && <Badge tone="brass">{unreadCount} new</Badge>}
          </div>

          {notifs.length === 0 ? (
            <EmptyState title="Quiet so far" body="Class announcements from your teachers will appear here." />
          ) : (
            <div className="divide-y divide-[var(--border-default)]">
              {notifs.map((n) => (
                <div key={n.id} className="py-2.5 flex items-start gap-2.5">
                  <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${n.read ? "bg-[var(--bg-tertiary)]" : "bg-[var(--accent-primary)]"}`} />
                  <div className="min-w-0 flex-1">
                    <p className="text-[12px] font-semibold text-[var(--text-primary)] truncate">{n.title}</p>
                    <p className="text-[11px] text-[var(--text-muted)] mt-0.5 leading-relaxed">{n.body}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </PageShell>
  );
}
