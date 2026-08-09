"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, CheckCircle2, Clock } from "lucide-react";
import { api, errorMessage, BACKEND_URL } from "@/lib/api";
import {
  Button,
  Card,
  EmptyState,
  ErrorState,
  LoadingRows,
  Textarea,
  Toast,
  Badge,
} from "@/components/ui";

interface Assignment {
  id: string;
  subjectCode: string;
  title: string;
  description: string | null;
  dueDate: string | null;
  createdAt: string;
  createdBy: { name: string };
  submissions: {
    id: string;
    fileUrl: string;
    submittedAt: string;
    marks: number | null;
    feedback: string | null;
    gradedAt: string | null;
  }[];
}

export default function AssignmentsPage() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [submittingId, setSubmittingId] = useState("");
  const [fileUrls, setFileUrls] = useState<Record<string, string>>({});
  const [toast, setToast] = useState("");
  const [toastKind, setToastKind] = useState<"success" | "error" | "info">("success");

  async function load() {
    setLoading(true);
    setError("");
    try {
      const res = await api.get<{ assignments: Assignment[] }>("/student/assignments");
      setAssignments(res.data.assignments);
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function submit(a: Assignment) {
    const url = fileUrls[a.id]?.trim();
    if (!url) {
      setToastKind("error");
      setToast("Paste a file URL first (e.g. a link to your uploaded PDF).");
      return;
    }
    setSubmittingId(a.id);
    try {
      await api.post(`/student/assignments/${a.id}/submit`, { fileUrl: url });
      setToastKind("success");
      setToast("Submitted — teacher has been notified.");
      await load();
    } catch (err) {
      setToastKind("error");
      setToast(errorMessage(err));
    } finally {
      setSubmittingId("");
    }
  }

  return (
    <div>
      <div className="mb-6 border-b border-hairline pb-4">
        <h1 className="font-display text-[26px] font-semibold text-ink">Assignments</h1>
        <p className="mt-1 text-[13px] text-ink-muted">
          Submit your work and track grading in real time.
        </p>
      </div>

      {loading ? (
        <LoadingRows rows={3} />
      ) : error ? (
        <ErrorState message={error} onRetry={load} />
      ) : assignments.length === 0 ? (
        <EmptyState
          title="No assignments yet"
          body="When your teacher posts an assignment for your class, it appears here."
        />
      ) : (
        <div className="space-y-4">
          {assignments.map((a) => {
            const sub = a.submissions[0];
            const overdue =
              a.dueDate && new Date(a.dueDate) < new Date() && !sub;
            return (
              <Card key={a.id}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[12px] text-ink-muted">{a.subjectCode}</p>
                    <h2 className="font-display text-[18px] font-semibold text-ink">
                      {a.title}
                    </h2>
                    {a.description && (
                      <p className="mt-1 max-w-xl text-[13px] text-ink-muted">
                        {a.description}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="flex items-center gap-1 text-[12px] text-ink-muted">
                      <Clock className="h-3.5 w-3.5" />
                      {a.dueDate
                        ? `Due ${new Date(a.dueDate).toLocaleDateString()}`
                        : "No due date"}
                    </p>
                    <p className="text-[11px] text-ink-muted">by {a.createdBy.name}</p>
                  </div>
                </div>

                <div className="mt-4 border-t border-hairline pt-4">
                  {sub ? (
                    <div
                      className={`rounded-[2px] border px-4 py-3 ${
                        sub.marks !== null
                          ? "border-success bg-success-soft"
                          : "border-hairline bg-paper-alt"
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="flex items-center gap-2 text-[13px] font-semibold text-ink">
                          <CheckCircle2
                            className={`h-4 w-4 ${
                              sub.marks !== null ? "text-success" : "text-warning"
                            }`}
                          />
                          Submitted{" "}
                          {new Date(sub.submittedAt).toLocaleString()}
                        </p>
                        {sub.marks !== null ? (
                          <p className="font-display text-[20px] font-semibold text-success">
                            {sub.marks}
                            <span className="text-[12px] text-ink-muted">/100</span>
                          </p>
                        ) : (
                          <Badge tone="warning">Awaiting grade</Badge>
                        )}
                      </div>
                      {sub.feedback && (
                        <p className="mt-2 text-[12px] text-ink-muted">
                          “{sub.feedback}”
                        </p>
                      )}
                    </div>
                  ) : (
                    <div>
                      {overdue && (
                        <p className="mb-2 text-[12px] font-semibold text-error">
                          Past due date — submit as soon as possible.
                        </p>
                      )}
                      <div className="flex gap-2">
                        <input
                          value={fileUrls[a.id] || ""}
                          onChange={(e) =>
                            setFileUrls((f) => ({ ...f, [a.id]: e.target.value }))
                          }
                          placeholder="https://… (link to your answer PDF)"
                          className="w-full rounded-[2px] border border-hairline bg-paper px-3 py-2 text-[13px] focus:border-navy focus:outline-none"
                        />
                        <Button
                          onClick={() => submit(a)}
                          disabled={submittingId === a.id}
                          className="shrink-0"
                        >
                          <Upload className="h-4 w-4" />
                          {submittingId === a.id ? "Submitting…" : "Submit"}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      )}

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.24 }}
          >
            <Toast kind={toastKind}>{toast}</Toast>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
