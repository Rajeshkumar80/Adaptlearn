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
} from "lucide-react";
import { api, errorMessage } from "@/lib/api";
import {
  Card,
  EmptyState,
  ErrorState,
  LoadingRows,
  PageTitle,
  StatCard,
} from "@/components/ui";
import { useAuth } from "@/lib/auth";

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
        <LoadingRows rows={4} />
      </div>
    );
  }
  if (error) return <ErrorState message={error} />;

  const c = data?.counts ?? { students: 0, tests: 0, submissions: 0, cheatFlags: 0, notes: 0, assignments: 0 };

  return (
    <div>
      <PageTitle
        title={`${user?.name?.split(" ")[0]}'s Dashboard`}
        subtitle={`${data?.classes.length ?? 0} classes · average score ${
          data?.avgScore != null ? `${Math.round(data.avgScore * 100) / 100}/100` : "—"
        }`}
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-6">
        <StatCard label="Students" value={c.students} tone="navy" />
        <StatCard label="Notes" value={c.notes} />
        <StatCard label="Assignments" value={c.assignments} />
        <StatCard label="Submissions" value={c.submissions} />
        <StatCard label="Tests" value={c.tests} />
        <StatCard
          label="Cheat flags"
          value={c.cheatFlags}
          tone={c.cheatFlags > 0 ? "error" : "success"}
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card>
          <h2 className="font-display mb-3 text-[17px] font-semibold text-ink">
            Quick actions
          </h2>
          <div className="grid gap-2">
            {[
              { href: "/teacher/notes", icon: BookOpen, label: "Upload module notes" },
              { href: "/teacher/assignments", icon: ClipboardList, label: "Post an assignment" },
              { href: "/teacher/tests", icon: FileText, label: "Create a test" },
              { href: "/teacher/classes", icon: Users, label: "Manage classes" },
              { href: "/teacher/classes", icon: Send, label: "Send class notification" },
              { href: "/teacher/analytics", icon: ShieldAlert, label: "Cheat report & analytics" },
            ].map((q) => (
              <Link
                key={q.label}
                href={q.href}
                className="flex items-center gap-3 rounded-[2px] border border-hairline bg-paper-alt px-4 py-2.5 text-[13px] font-semibold text-ink transition-colors hover:border-navy"
              >
                <q.icon className="h-4 w-4 text-navy" />
                {q.label}
              </Link>
            ))}
          </div>
        </Card>

        <Card className="lg:col-span-2">
          <h2 className="font-display mb-3 text-[17px] font-semibold text-ink">
            Recent results
          </h2>
          {(data?.recentResults ?? []).length === 0 ? (
            <EmptyState
              title="No results yet"
              body="When students submit tests, their scores appear here."
            />
          ) : (
            <div className="divide-y divide-hairline">
              {(data?.recentResults ?? []).map((r) => (
                <div key={r.id} className="flex items-center gap-4 py-2.5">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13px] font-semibold text-ink">
                      {r.student.name}
                      {r.student.usn ? ` (${r.student.usn})` : ""}
                    </p>
                    <p className="text-[11px] text-ink-muted">{r.test.title}</p>
                  </div>
                  <p className="font-display text-[18px] font-semibold text-navy">
                    {r.score}
                    <span className="text-[12px] text-ink-muted">/{r.totalMarks}</span>
                  </p>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
