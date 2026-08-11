"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  School,
  BookOpen,
  FileText,
  ClipboardList,
  Database,
  ShieldAlert,
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
  brass: "#a67c2e",
  success: "#2f6b4f",
  error: "#a03a2e",
  warning: "#a05e1c",
  inkMuted: "#6b6052",
  hairline: "#cbbf9f",
};

interface AdminCounts {
  users: number;
  students: number;
  teachers: number;
  classes: number;
  tests: number;
  chunks: number;
  notes: number;
  assignments: number;
  cheatFlags: number;
  submissions: number;
}

export default function AdminDashboard() {
  const { user } = useAuth();
  const [counts, setCounts] = useState<AdminCounts | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get<{ counts: AdminCounts }>("/admin/dashboard")
      .then((res) => setCounts(res.data.counts))
      .catch((err) => setError(errorMessage(err)))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div>
        <PageTitle title="Platform Overview" subtitle="Loading the notice board…" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="skeleton h-24" />
          ))}
        </div>
        <LoadingRows rows={3} />
      </div>
    );
  }
  if (error) return <ErrorState message={error} />;

  const c = counts ?? {
    users: 0,
    students: 0,
    teachers: 0,
    classes: 0,
    tests: 0,
    chunks: 0,
    notes: 0,
    assignments: 0,
    cheatFlags: 0,
    submissions: 0,
  };

  const kpis = [
    { icon: Users, label: "Users", value: c.users, tone: C.navy, footnote: "all roles" },
    { icon: GraduationCap, label: "Students", value: c.students, tone: C.navy, footnote: "across all classes" },
    { icon: School, label: "Teachers", value: c.teachers, tone: C.brass, footnote: "active faculty" },
    { icon: BookOpen, label: "Classes", value: c.classes, tone: C.brass, footnote: "rosters" },
    { icon: FileText, label: "Tests", value: c.tests, tone: C.navy, footnote: "created" },
    { icon: ClipboardList, label: "Assignments", value: c.assignments, tone: C.success, footnote: `with ${c.submissions} submissions` },
    { icon: Database, label: "RAG chunks", value: c.chunks, tone: C.navy, footnote: "knowledge base pieces" },
    {
      icon: ShieldAlert,
      label: "Cheat flags",
      value: c.cheatFlags,
      tone: c.cheatFlags > 0 ? C.error : C.success,
      footnote: c.cheatFlags > 0 ? "needs review" : "all clear",
    },
  ];

  return (
    <div>
      <PageTitle
        title="Platform Overview"
        subtitle="System-wide view of the AdaptLearn notice board"
        right={
          <Badge tone="navy">
            <Database className="mr-1 h-3 w-3" />
            {c.chunks} chunks · {c.users} users
          </Badge>
        }
      />

      {/* KPI strip */}
      <div className="mb-5 grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-8">
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
        {/* Knowledge base */}
        <Card>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-display text-[17px] font-semibold text-ink">
              Knowledge base
            </h2>
            <span className="text-[11px] text-ink-muted">RAG status</span>
          </div>
          <div className="space-y-3">
            <div className="rounded-[2px] border border-hairline bg-paper-alt p-3">
              <div className="flex items-center justify-between">
                <p className="text-[12px] font-semibold text-ink">Semantic chunks</p>
                <span className="tnum font-display text-[18px] font-semibold text-navy">
                  {c.chunks}
                </span>
              </div>
              <p className="mt-0.5 text-[11px] text-ink-muted">
                Indexed pieces of module notes, retrieved by vector similarity
              </p>
            </div>
            <div className="rounded-[2px] border border-hairline bg-paper-alt p-3">
              <div className="flex items-center justify-between">
                <p className="text-[12px] font-semibold text-ink">Source notes</p>
                <span className="tnum font-display text-[18px] font-semibold text-brass">
                  {c.notes}
                </span>
              </div>
              <p className="mt-0.5 text-[11px] text-ink-muted">
                Teacher-uploaded PDFs embedded into the tutor's context
              </p>
            </div>
            <div className="rounded-[2px] border border-hairline bg-paper-alt p-3">
              <div className="flex items-center justify-between">
                <p className="text-[12px] font-semibold text-ink">Work assigned</p>
                <span className="tnum font-display text-[18px] font-semibold text-success">
                  {c.assignments + c.tests}
                </span>
              </div>
              <p className="mt-0.5 text-[11px] text-ink-muted">
                {c.assignments} assignments · {c.tests} tests · {c.submissions} submissions
              </p>
            </div>
          </div>
        </Card>

        {/* Integrity */}
        <Card className="lg:col-span-2">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <h2 className="font-display text-[17px] font-semibold text-ink">
                Academic integrity
              </h2>
              <p className="text-[12px] text-ink-muted">
                anti-cheat flags raised by the monitoring pipeline
              </p>
            </div>
            <Badge tone={c.cheatFlags > 0 ? "error" : "success"}>
              {c.cheatFlags > 0 ? `${c.cheatFlags} flagged` : "all clear"}
            </Badge>
          </div>
          {c.cheatFlags === 0 ? (
            <EmptyState
              title="No flags raised"
              body="Every monitored submission was clean. Teachers review flags as they appear."
            />
          ) : (
            <div className="rounded-[2px] border border-hairline bg-paper-alt p-3">
              <p className="text-[12px] text-ink">
                <span className="tnum font-display text-[22px] font-semibold" style={{ color: C.error }}>
                  {c.cheatFlags}
                </span>{" "}
                submission{c.cheatFlags === 1 ? "" : "s"} flagged for manual review
              </p>
              <p className="mt-1 text-[11px] text-ink-muted">
                Flags surface in the teacher's integrity log with severity breakdown.
              </p>
            </div>
          )}
          <div className="mt-4 space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
              Platform snapshot
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge tone="navy">{c.users} users</Badge>
              <Badge tone="navy">{c.students} students</Badge>
              <Badge tone="brass">{c.teachers} teachers</Badge>
              <Badge tone="navy">{c.classes} classes</Badge>
              <Badge tone="success">{c.submissions} submissions</Badge>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
