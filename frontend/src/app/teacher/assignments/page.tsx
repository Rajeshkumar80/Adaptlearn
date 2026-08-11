"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  ClipboardList,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  XCircle,
  ImageIcon,
  Clock,
} from "lucide-react";
import { api, errorMessage, BACKEND_URL } from "@/lib/api";
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

interface Assignment {
  id: string;
  subjectCode: string;
  title: string;
  description: string | null;
  dueDate: string | null;
  createdAt: string;
  _count: { submissions: number };
}

interface AiAnalysis {
  recommendedScore: number;
  summary: string;
  strengths: string[];
  improvements: string[];
}

interface SubmissionDetail {
  id: string;
  studentId: string;
  student: { name: string; usn: string | null };
  content: string | null;
  fileUrls: string[] | null;
  fileUrl: string | null;
  submittedAt: string;
  marks: number | null;
  feedback: string | null;
  gradedAt: string | null;
  aiAnalysis: AiAnalysis | null;
  aiEvaluatedAt: string | null;
}

interface AssignmentDetail {
  submitted: SubmissionDetail[];
  notSubmitted: { studentId: string; name: string; usn: string | null }[];
}

const initials = (name: string) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");

const scoreHex = (n: number) => (n >= 70 ? C.success : n >= 40 ? C.warning : C.error);

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

export default function TeacherAssignmentsPage() {
  const { subjects } = useSubjects();
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [details, setDetails] = useState<Record<string, AssignmentDetail>>({});
  const [loadingDetail, setLoadingDetail] = useState<string | null>(null);
  const [evaluating, setEvaluating] = useState<Record<string, boolean>>({});
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
  const [marksDraft, setMarksDraft] = useState<Record<string, string>>({});
  const [feedbackDraft, setFeedbackDraft] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState<string | null>(null);

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

  async function openDetail(a: Assignment) {
    if (expanded === a.id) {
      setExpanded(null);
      return;
    }
    setExpanded(a.id);
    if (details[a.id]) return;
    setLoadingDetail(a.id);
    try {
      const res = await api.get<AssignmentDetail>(`/assignments/${a.id}/submissions`);
      setDetails((d) => ({ ...d, [a.id]: res.data }));
    } catch (err) {
      notify("error", errorMessage(err));
    } finally {
      setLoadingDetail(null);
    }
  }

  async function evaluate(a: Assignment, s: SubmissionDetail) {
    setEvaluating((e) => ({ ...e, [s.id]: true }));
    try {
      const res = await api.post<{ analysis: AiAnalysis; evaluatedAt: string }>(
        `/assignments/${a.id}/submissions/${s.studentId}/evaluate`
      );
      setDetails((d) => ({
        ...d,
        [a.id]: {
          ...d[a.id],
          submitted: d[a.id].submitted.map((x) =>
            x.id === s.id
              ? { ...x, aiAnalysis: res.data.analysis, aiEvaluatedAt: res.data.evaluatedAt }
              : x
          ),
        },
      }));
      setMarksDraft((m) => ({ ...m, [s.id]: String(res.data.analysis.recommendedScore) }));
      notify("success", `AI recommends ${res.data.analysis.recommendedScore}/100 — adjust and grade.`);
    } catch (err) {
      notify("error", errorMessage(err));
    } finally {
      setEvaluating((e) => ({ ...e, [s.id]: false }));
    }
  }

  async function grade(a: Assignment, s: SubmissionDetail) {
    const marks = Number(marksDraft[s.id]);
    if (Number.isNaN(marks) || marks < 0 || marks > 100) {
      notify("error", "Marks must be 0–100.");
      return;
    }
    setSaving(s.id);
    try {
      await api.patch(`/assignments/${a.id}/submissions/${s.studentId}`, {
        marks,
        feedback: feedbackDraft[s.id]?.trim() || undefined,
      });
      setDetails((d) => ({
        ...d,
        [a.id]: {
          ...d[a.id],
          submitted: d[a.id].submitted.map((x) =>
            x.id === s.id ? { ...x, marks, feedback: feedbackDraft[s.id]?.trim() ?? null, gradedAt: new Date().toISOString() } : x
          ),
        },
      }));
      setAssignments((as) =>
        as.map((x) => (x.id === a.id ? { ...x, _count: x._count } : x))
      );
      notify("success", "Grade recorded — the student sees it immediately.");
    } catch (err) {
      notify("error", errorMessage(err));
    } finally {
      setSaving(null);
    }
  }

  const attachments = (s: SubmissionDetail): string[] => {
    if (s.fileUrls && Array.isArray(s.fileUrls)) return s.fileUrls;
    if (s.fileUrl) return [s.fileUrl];
    return [];
  };

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
                Description / instructions
              </label>
              <Textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g. Describe the SDLC with a diagram — write it out or upload a photo of your handwritten answer."
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
              <Input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
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
            const detail = details[a.id];
            const submittedCount = detail?.submitted.length ?? a._count.submissions;
            const totalRoster = detail ? detail.submitted.length + detail.notSubmitted.length : null;
            const gradedCount = detail?.submitted.filter((s) => s.marks !== null).length ?? 0;
            const avgAi =
              detail && detail.submitted.length > 0
                ? Math.round(
                    detail.submitted.reduce((acc, s) => acc + (s.aiAnalysis?.recommendedScore ?? 0), 0) /
                      detail.submitted.filter((s) => s.aiAnalysis).length
                  )
                : null;

            return (
              <Card key={a.id} className="p-0">
                <button
                  onClick={() => openDetail(a)}
                  className="flex w-full flex-wrap items-center gap-4 px-5 py-4 text-left"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge tone="navy">{a.subjectCode}</Badge>
                      {a.dueDate && (
                        <span className="flex items-center gap-1 text-[11px] text-ink-muted">
                          <Clock className="h-3 w-3" /> Due {new Date(a.dueDate).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                    <h2 className="font-display mt-1 text-[18px] font-semibold text-ink">
                      {a.title}
                    </h2>
                    {a.description && (
                      <p className="mt-0.5 line-clamp-1 text-[13px] text-ink-muted">
                        {a.description}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    {avgAi != null && (
                      <span
                        className="tnum rounded-full px-3 py-1 text-[11px] font-bold"
                        style={{ background: `${scoreHex(avgAi)}1a`, color: scoreHex(avgAi) }}
                        title="average AI-recommended score"
                      >
                        AI avg {avgAi}
                      </span>
                    )}
                    <span
                      className={`tnum rounded-full px-3 py-1 text-[11px] font-bold ${
                        submittedCount > 0
                          ? "bg-success-soft text-success"
                          : "bg-navy-soft text-navy"
                      }`}
                    >
                      {submittedCount}
                      {totalRoster != null ? `/${totalRoster}` : ""} submitted
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-ink-muted transition-transform ${open ? "rotate-180" : ""}`}
                    />
                  </div>
                </button>

                {open && (
                  <div className="border-t border-hairline px-5 py-4">
                    {loadingDetail === a.id ? (
                      <p className="py-6 text-center text-[13px] text-ink-muted">
                        Loading roster and submissions…
                      </p>
                    ) : !detail ? (
                      <p className="py-6 text-center text-[13px] text-ink-muted">
                        Could not load submissions.
                      </p>
                    ) : (
                      <div>
                        {/* summary strip */}
                        <div className="mb-4 flex flex-wrap items-center gap-2">
                          <Badge tone="success">
                            <CheckCircle2 className="mr-1 h-3 w-3" /> {detail.submitted.length} submitted
                          </Badge>
                          <Badge tone="error">
                            <XCircle className="mr-1 h-3 w-3" /> {detail.notSubmitted.length} pending
                          </Badge>
                          {gradedCount > 0 && <Badge tone="navy">{gradedCount} graded</Badge>}
                        </div>

                        {detail.submitted.length === 0 ? (
                          <p className="py-6 text-center text-[13px] text-ink-muted">
                            No submissions yet — students can now write answers or upload
                            photos of handwritten work.
                          </p>
                        ) : (
                          <div className="space-y-4">
                            {detail.submitted.map((s) => {
                              const photos = attachments(s);
                              const analysis = s.aiAnalysis;
                              const aiTone = analysis ? scoreHex(analysis.recommendedScore) : C.inkMuted;
                              const graded = s.marks !== null;
                              return (
                                <motion.div
                                  key={s.id}
                                  initial={{ opacity: 0, y: 8 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="rounded-[2px] border border-hairline p-4"
                                >
                                  <div className="flex flex-wrap items-center gap-3">
                                    <span
                                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[12px] font-bold"
                                      style={{ background: C.navySoft, color: C.navy }}
                                    >
                                      {initials(s.student.name)}
                                    </span>
                                    <div className="min-w-0 flex-1">
                                      <p className="truncate text-[13px] font-semibold text-ink">
                                        {s.student.name}
                                        {s.student.usn && (
                                          <span className="ml-1.5 text-[11px] font-medium text-ink-muted">
                                            {s.student.usn}
                                          </span>
                                        )}
                                      </p>
                                      <p className="text-[11px] text-ink-muted">
                                        submitted {timeAgo(s.submittedAt)}
                                        {graded && ` · graded ${timeAgo(s.gradedAt ?? "")}`}
                                      </p>
                                    </div>
                                    {graded ? (
                                      <span
                                        className="tnum font-display text-[22px] font-semibold"
                                        style={{ color: scoreHex(s.marks ?? 0) }}
                                      >
                                        {s.marks}
                                        <span className="text-[12px] font-normal text-ink-muted">/100</span>
                                      </span>
                                    ) : analysis ? (
                                      <span
                                        className="tnum rounded-[2px] border px-2.5 py-1 text-[13px] font-bold"
                                        style={{ borderColor: aiTone, color: aiTone }}
                                      >
                                        AI {analysis.recommendedScore}/100
                                      </span>
                                    ) : null}
                                  </div>

                                  {/* answer text */}
                                  {s.content && (
                                    <div className="mt-3 rounded-[2px] bg-paper-alt p-3">
                                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-ink-muted">
                                        Answer
                                      </p>
                                      <p className="max-h-48 overflow-y-auto whitespace-pre-wrap text-[13px] leading-relaxed text-ink">
                                        {s.content}
                                      </p>
                                    </div>
                                  )}

                                  {/* photo uploads */}
                                  {photos.length > 0 && (
                                    <div className="mt-3">
                                      <p className="mb-1.5 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-widest text-ink-muted">
                                        <ImageIcon className="h-3 w-3" /> Attached work ({photos.length})
                                      </p>
                                      <div className="flex flex-wrap gap-2">
                                        {photos.map((u, i) =>
                                          u.toLowerCase().endsWith(".pdf") ? (
                                            <a
                                              key={`${u}-${i}`}
                                              href={`${BACKEND_URL}${u}`}
                                              target="_blank"
                                              rel="noreferrer"
                                              className="flex h-24 w-20 items-center justify-center rounded-[2px] border border-hairline bg-paper-alt text-[10px] font-semibold text-navy"
                                            >
                                              PDF
                                            </a>
                                          ) : (
                                            <a
                                              key={`${u}-${i}`}
                                              href={`${BACKEND_URL}${u}`}
                                              target="_blank"
                                              rel="noreferrer"
                                              className="block"
                                            >
                                              <img
                                                src={`${BACKEND_URL}${u}`}
                                                alt={`${s.student.name} attachment ${i + 1}`}
                                                className="h-24 w-20 rounded-[2px] border border-hairline object-cover transition-opacity hover:opacity-80"
                                              />
                                            </a>
                                          )
                                        )}
                                      </div>
                                    </div>
                                  )}

                                  {/* AI analysis */}
                                  <div
                                    className={`mt-3 rounded-[2px] border p-3 ${
                                      analysis ? "border-navy-soft bg-navy-soft" : "border-dashed border-hairline"
                                    }`}
                                  >
                                    {analysis ? (
                                      <>
                                        <div className="flex flex-wrap items-center justify-between gap-2">
                                          <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-navy">
                                            <Sparkles className="h-3.5 w-3.5 text-brass" />
                                            AI evaluation
                                            {s.aiEvaluatedAt && (
                                              <span className="font-normal normal-case tracking-normal text-ink-muted">
                                                · {timeAgo(s.aiEvaluatedAt)}
                                              </span>
                                            )}
                                          </p>
                                          <span
                                            className="tnum font-display text-[20px] font-bold"
                                            style={{ color: aiTone }}
                                          >
                                            {analysis.recommendedScore}/100
                                          </span>
                                        </div>
                                        <p className="mt-2 text-[12px] leading-relaxed text-ink">
                                          {analysis.summary}
                                        </p>
                                        {analysis.strengths.length > 0 && (
                                          <ul className="mt-2 space-y-1">
                                            {analysis.strengths.map((st, i) => (
                                              <li key={i} className="flex items-start gap-1.5 text-[12px] text-ink">
                                                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" />
                                                {st}
                                              </li>
                                            ))}
                                          </ul>
                                        )}
                                        {analysis.improvements.length > 0 && (
                                          <ul className="mt-1.5 space-y-1">
                                            {analysis.improvements.map((im, i) => (
                                              <li key={i} className="flex items-start gap-1.5 text-[12px] text-ink-muted">
                                                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />
                                                {im}
                                              </li>
                                            ))}
                                          </ul>
                                        )}
                                      </>
                                    ) : (
                                      <div className="flex flex-wrap items-center justify-between gap-2">
                                        <p className="text-[12px] text-ink-muted">
                                          No AI evaluation yet — analyse the answer and get a
                                          recommended score.
                                        </p>
                                        <Button
                                          variant="brass"
                                          className="h-8 px-3 py-1 text-[12px]"
                                          disabled={evaluating[s.id]}
                                          onClick={() => evaluate(a, s)}
                                        >
                                          <Sparkles className="h-3.5 w-3.5" />
                                          {evaluating[s.id] ? "Analysing…" : "Evaluate with AI"}
                                        </Button>
                                      </div>
                                    )}
                                  </div>

                                  {/* grading controls */}
                                  <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-hairline pt-3">
                                    <span className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
                                      Award marks
                                    </span>
                                    <Input
                                      type="number"
                                      min={0}
                                      max={100}
                                      placeholder="0–100"
                                      className="w-24"
                                      value={
                                        marksDraft[s.id] ??
                                        (s.marks != null ? String(s.marks) : analysis ? String(analysis.recommendedScore) : "")
                                      }
                                      onChange={(e) =>
                                        setMarksDraft((m) => ({ ...m, [s.id]: e.target.value }))
                                      }
                                    />
                                    <Input
                                      placeholder="Feedback for the student"
                                      className="min-w-[180px] flex-1"
                                      value={feedbackDraft[s.id] ?? s.feedback ?? ""}
                                      onChange={(e) =>
                                        setFeedbackDraft((f) => ({ ...f, [s.id]: e.target.value }))
                                      }
                                    />
                                    <Button
                                      onClick={() => grade(a, s)}
                                      disabled={saving === s.id || marksDraft[s.id] === "" && s.marks == null}
                                      className="shrink-0"
                                    >
                                      {saving === s.id
                                        ? "Saving…"
                                        : graded
                                          ? "Update grade"
                                          : "Grade"}
                                    </Button>
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>
                        )}

                        {/* not submitted */}
                        {detail.notSubmitted.length > 0 && (
                          <div className="mt-5">
                            <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-ink-muted">
                              Not submitted yet ({detail.notSubmitted.length})
                            </p>
                            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                              {detail.notSubmitted.map((st) => (
                                <div
                                  key={st.studentId}
                                  className="flex items-center gap-2.5 rounded-[2px] border border-dashed border-hairline px-3 py-2 opacity-70"
                                >
                                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-paper-deep text-[10px] font-bold text-ink-muted">
                                    {initials(st.name)}
                                  </span>
                                  <span className="min-w-0 flex-1 truncate text-[12px] font-medium text-ink">
                                    {st.name}
                                    {st.usn && (
                                      <span className="ml-1 text-[11px] text-ink-muted">{st.usn}</span>
                                    )}
                                  </span>
                                  <XCircle className="h-3.5 w-3.5 shrink-0 text-ink-muted" />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
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
