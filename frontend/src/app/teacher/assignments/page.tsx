"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ClipboardList } from "lucide-react";
import { api, errorMessage } from "@/lib/api";
import {
  Badge,
  Button,
  Card,
  EmptyState,
  ErrorState,
  Input,
  LoadingRows,
  PageTitle,
  Select,
  Textarea,
  Toast,
} from "@/components/ui";
import { useSubjects } from "@/lib/subjects";

  interface Assignment {
    id: string;
    subjectCode: string;
    title: string;
    description: string | null;
    dueDate: string | null;
    createdAt: string;
    _count: { submissions: number };
    submissions?: {
      id: string;
      studentId: string;
      fileUrl: string;
      submittedAt: string;
      marks: number | null;
      feedback: string | null;
      student: { name: string; usn: string | null };
    }[];
  }

  export default function TeacherAssignmentsPage() {
    const { subjects } = useSubjects();
    const [assignments, setAssignments] = useState<Assignment[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [toast, setToast] = useState("");
    const [toastKind, setToastKind] = useState<"success" | "error" | "info">("success");
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [subjectCode, setSubjectCode] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [classId, setClassId] = useState("");
    const [classes, setClasses] = useState<{ id: string; name: string }[]>([]);
    const [expanded, setExpanded] = useState<string | null>(null);
    const [grades, setGrades] = useState<Record<string, string>>({});
    const [feedback, setFeedback] = useState<Record<string, string>>({});

  useEffect(() => {
    if (subjects.length > 0 && !subjectCode) setSubjectCode(subjects[0].code);
  }, [subjects, subjectCode]);

  async function load() {
    setLoading(true);
    setError("");
    try {
      const [a, c] = await Promise.all([
        api.get<{ assignments: Assignment[] }>("/assignments"),
        api.get<{ classes: { id: string; name: string }[] }>("/classes"),
      ]);
      setAssignments(a.data.assignments);
      setClasses(c.data.classes);
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  function notify(kind: "success" | "error" | "info", msg: string) {
    setToastKind(kind);
    setToast(msg);
    setTimeout(() => setToast(""), 5000);
  }

  async function create() {
    if (!title.trim()) {
      notify("error", "Assignment needs a title.");
      return;
    }
    try {
      await api.post("/assignments", {
        subjectCode,
        title: title.trim(),
        description: description.trim() || undefined,
        dueDate: dueDate ? new Date(dueDate).toISOString() : undefined,
        classId: classId || undefined,
      });
      notify("success", "Assignment posted to the class.");
      setTitle("");
      setDescription("");
      setDueDate("");
      setShowForm(false);
      await load();
    } catch (err) {
      notify("error", errorMessage(err));
    }
  }

  async function grade(a: Assignment, studentId: string) {
    const marks = Number(grades[`${a.id}:${studentId}`]);
    if (Number.isNaN(marks) || marks < 0 || marks > 100) {
      notify("error", "Marks must be 0–100.");
      return;
    }
    try {
      await api.patch(`/assignments/${a.id}/submissions/${studentId}`, {
        marks,
        feedback: feedback[`${a.id}:${studentId}`]?.trim() || undefined,
      });
      notify("success", "Grade recorded — student sees it immediately.");
      await load();
    } catch (err) {
      notify("error", errorMessage(err));
    }
  }

  return (
    <div>
      <PageTitle
        title="Assignments"
        subtitle="Post work, collect submissions, grade in one place."
        right={
          <Button onClick={() => setShowForm((s) => !s)}>
            <Plus className="h-4 w-4" />
            New assignment
          </Button>
        }
      />

      {showForm && (
        <Card className="mb-6">
          <h2 className="font-display mb-3 text-[17px] font-semibold text-ink">
            Post an assignment
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
                Title
              </label>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
                Description
              </label>
              <Textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
                Subject
              </label>
              <Select value={subjectCode} onChange={(e) => setSubjectCode(e.target.value)}>
                {subjects.map((s) => (
                  <option key={s.code} value={s.code}>
                    {s.code} — {s.name}
                  </option>
                ))}
              </Select>
            </div>
            <div>
              <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
                Class
              </label>
              <Select value={classId} onChange={(e) => setClassId(e.target.value)}>
                <option value="">All classes</option>
                {classes.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </Select>
            </div>
            <div>
              <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
                Due date
              </label>
              <Input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
            <div className="flex items-end">
              <Button onClick={create} className="w-full">
                <ClipboardList className="h-4 w-4" />
                Post
              </Button>
            </div>
          </div>
        </Card>
      )}

      {loading ? (
        <LoadingRows rows={3} />
      ) : error ? (
        <ErrorState message={error} onRetry={load} />
      ) : assignments.length === 0 ? (
        <EmptyState
          title="No assignments yet"
          body="Post your first assignment to see submissions roll in."
          action={
            <Button onClick={() => setShowForm(true)}>
              <Plus className="h-4 w-4" /> New assignment
            </Button>
          }
        />
      ) : (
        <div className="space-y-4">
          {assignments.map((a) => {
            const open = expanded === a.id;
            return (
              <Card key={a.id}>
                <button
                  onClick={async () => {
                    if (open) {
                      setExpanded(null);
                      return;
                    }
                    setExpanded(a.id);
                    if (!a.submissions) {
                      try {
                        const res = await api.get<{ submissions: Assignment["submissions"] }>(
                          `/assignments/${a.id}/submissions`
                        );
                        setAssignments((as) =>
                          as.map((x) =>
                            x.id === a.id ? { ...x, submissions: res.data.submissions } : x
                          )
                        );
                      } catch (err) {
                        notify("error", errorMessage(err));
                      }
                    }
                  }}
                  className="flex w-full flex-wrap items-center gap-4 text-left"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-[12px] text-ink-muted">{a.subjectCode}</p>
                    <h2 className="font-display text-[18px] font-semibold text-ink">
                      {a.title}
                    </h2>
                    {a.description && (
                      <p className="mt-1 text-[13px] text-ink-muted">{a.description}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <Badge tone={a._count.submissions > 0 ? "success" : "info"}>
                      {a._count.submissions} submitted
                    </Badge>
                    <p className="mt-1 text-[11px] text-ink-muted">
                      {a.dueDate ? `Due ${new Date(a.dueDate).toLocaleDateString()}` : "No due date"}
                    </p>
                  </div>
                </button>

                {open && (
                  <div className="mt-4 border-t border-hairline pt-4">
                    {!a.submissions ? (
                      <p className="py-4 text-center text-[13px] text-ink-muted">
                        Loading submissions…
                      </p>
                    ) : a.submissions.length === 0 ? (
                      <p className="py-4 text-center text-[13px] text-ink-muted">
                        No submissions yet — students will see this in their
                        assignments tab.
                      </p>
                    ) : (
                      <div className="divide-y divide-hairline">
                        {a.submissions.map((s) => (
                          <div key={s.id} className="py-3">
                            <div className="flex flex-wrap items-center gap-3">
                              <div className="min-w-0 flex-1">
                                <p className="text-[13px] font-semibold text-ink">
                                  {s.student.name} ({s.student.usn})
                                </p>
                                <p className="text-[11px] text-ink-muted">
                                  {new Date(s.submittedAt).toLocaleString()} ·{" "}
                                  {s.fileUrl}
                                </p>
                              </div>
                              {s.marks !== null && (
                                <Badge tone="success">{s.marks}/100 graded</Badge>
                              )}
                            </div>
                            <div className="mt-2 flex flex-wrap gap-2">
                              <Input
                                type="number"
                                min={0}
                                max={100}
                                placeholder="Marks"
                                className="w-24"
                                value={grades[`${a.id}:${s.studentId}`] ?? s.marks ?? ""}
                                onChange={(e) =>
                                  setGrades((g) => ({
                                    ...g,
                                    [`${a.id}:${s.studentId}`]: e.target.value,
                                  }))
                                }
                              />
                              <Input
                                placeholder="Feedback"
                                className="flex-1 min-w-[180px]"
                                value={
                                  feedback[`${a.id}:${s.studentId}`] ?? s.feedback ?? ""
                                }
                                onChange={(e) =>
                                  setFeedback((f) => ({
                                    ...f,
                                    [`${a.id}:${s.studentId}`]: e.target.value,
                                  }))
                                }
                              />
                              <Button onClick={() => grade(a, s.studentId)}>
                                Grade
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
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
