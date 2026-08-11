"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, CheckCircle2, Clock, Camera, X } from "lucide-react";
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

interface Submission {
  id: string;
  content: string | null;
  fileUrls: string[] | null;
  fileUrl: string | null;
  submittedAt: string;
  marks: number | null;
  feedback: string | null;
  gradedAt: string | null;
}

interface Assignment {
  id: string;
  subjectCode: string;
  title: string;
  description: string | null;
  dueDate: string | null;
  createdAt: string;
  createdBy: { name: string };
  submissions: Submission[];
}

export default function AssignmentsPage() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [submittingId, setSubmittingId] = useState("");
  const [uploadingId, setUploadingId] = useState("");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [photos, setPhotos] = useState<Record<string, string[]>>({});
  const [toast, setToast] = useState("");
  const [toastKind, setToastKind] = useState<"success" | "error" | "info">("success");
  const fileRefs = useRef<Record<string, HTMLInputElement | null>>({});

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

  function notify(kind: "success" | "error" | "info", msg: string) {
    setToastKind(kind);
    setToast(msg);
    setTimeout(() => setToast(""), 5000);
  }

  async function uploadPhotos(a: Assignment, files: FileList | null) {
    if (!files || files.length === 0) return;
    setUploadingId(a.id);
    try {
      const form = new FormData();
      Array.from(files).forEach((f) => form.append("photos", f));
      const res = await api.post<{ urls: string[] }>("/student/assignments/upload-photo", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setPhotos((p) => ({ ...p, [a.id]: [...(p[a.id] ?? []), ...res.data.urls] }));
    } catch (err) {
      notify("error", errorMessage(err));
    } finally {
      setUploadingId("");
      if (fileRefs.current[a.id]) fileRefs.current[a.id]!.value = "";
    }
  }

  async function submit(a: Assignment) {
    const content = answers[a.id]?.trim();
    const files = photos[a.id] ?? [];
    if (!content && files.length === 0) {
      notify("error", "Write an answer or upload a photo of your written work first.");
      return;
    }
    setSubmittingId(a.id);
    try {
      await api.post(`/student/assignments/${a.id}/submit`, {
        content: content || undefined,
        fileUrls: files.length > 0 ? files : undefined,
      });
      notify("success", "Submitted — your teacher can now review and grade it.");
      await load();
    } catch (err) {
      notify("error", errorMessage(err));
    } finally {
      setSubmittingId("");
    }
  }

  const attachmentUrls = (s: Submission): string[] => {
    if (s.fileUrls && Array.isArray(s.fileUrls)) return s.fileUrls;
    if (s.fileUrl) return [s.fileUrl];
    return [];
  };

  return (
    <div>
      <div className="mb-6 border-b border-hairline pb-4">
        <h1 className="font-display text-[26px] font-semibold text-ink">Assignments</h1>
        <p className="mt-1 text-[13px] text-ink-muted">
          Write your answer or snap a photo of your written work — your teacher
          reviews it and grades it here.
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
            const overdue = a.dueDate && new Date(a.dueDate) < new Date() && !sub;
            return (
              <Card key={a.id}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge tone="navy">{a.subjectCode}</Badge>
                      {sub && sub.marks !== null && <Badge tone="success">Graded</Badge>}
                      {sub && sub.marks === null && <Badge tone="warning">Awaiting grade</Badge>}
                    </div>
                    <h2 className="font-display mt-1.5 text-[18px] font-semibold text-ink">
                      {a.title}
                    </h2>
                    {a.description && (
                      <p className="mt-1 max-w-xl text-[13px] leading-relaxed text-ink-muted">
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
                            className={`h-4 w-4 ${sub.marks !== null ? "text-success" : "text-warning"}`}
                          />
                          Submitted {new Date(sub.submittedAt).toLocaleString()}
                        </p>
                        {sub.marks !== null ? (
                          <div className="text-right">
                            <p className="font-display text-[22px] font-semibold text-success">
                              {sub.marks}
                              <span className="text-[12px] font-normal text-ink-muted">/100</span>
                            </p>
                          </div>
                        ) : (
                          <Badge tone="warning">Awaiting grade</Badge>
                        )}
                      </div>

                      {sub.content && (
                        <div className="mt-3 rounded-[2px] bg-paper p-3">
                          <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-ink-muted">
                            Your answer
                          </p>
                          <p className="max-h-40 overflow-y-auto whitespace-pre-wrap text-[13px] leading-relaxed text-ink">
                            {sub.content}
                          </p>
                        </div>
                      )}

                      {attachmentUrls(sub).length > 0 && (
                        <div className="mt-3">
                          <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-ink-muted">
                            Your attached work ({attachmentUrls(sub).length})
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {attachmentUrls(sub).map((u, i) => (
                              <a
                                key={`${u}-${i}`}
                                href={`${BACKEND_URL}${u}`}
                                target="_blank"
                                rel="noreferrer"
                                className="block"
                              >
                                {u.toLowerCase().endsWith(".pdf") ? (
                                  <span className="flex h-20 w-16 items-center justify-center rounded-[2px] border border-hairline bg-paper-alt text-[10px] font-semibold text-navy">
                                    PDF
                                  </span>
                                ) : (
                                  <img
                                    src={`${BACKEND_URL}${u}`}
                                    alt={`submission attachment ${i + 1}`}
                                    className="h-20 w-16 rounded-[2px] border border-hairline object-cover"
                                  />
                                )}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                      {sub.feedback && (
                        <p className="mt-3 rounded-[2px] border border-hairline bg-paper px-3 py-2 text-[12px] text-ink">
                          <span className="font-semibold text-navy">Teacher: </span>
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
                      <div className="space-y-3">
                        <div>
                          <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
                            Write your answer
                          </label>
                          <Textarea
                            value={answers[a.id] ?? ""}
                            onChange={(e) => setAnswers((m) => ({ ...m, [a.id]: e.target.value }))}
                            placeholder="Type your answer here…"
                            rows={5}
                            className="w-full resize-y"
                          />
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                          <label className="flex items-center gap-2 text-[12px] font-semibold text-navy">
                            <Camera className="h-4 w-4" />
                            Or upload photos of handwritten work
                          </label>
                          <input
                            ref={(el) => {
                              fileRefs.current[a.id] = el;
                            }}
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={(e) => uploadPhotos(a, e.target.files)}
                            className="hidden"
                            id={`photos-${a.id}`}
                          />
                          <Button
                            variant="outline"
                            onClick={() => fileRefs.current[a.id]?.click()}
                            disabled={uploadingId === a.id}
                            className="shrink-0"
                          >
                            <Upload className="h-4 w-4" />
                            {uploadingId === a.id ? "Uploading…" : "Add photos"}
                          </Button>
                          {(photos[a.id] ?? []).length > 0 && (
                            <span className="text-[11px] text-ink-muted">
                              {(photos[a.id] ?? []).length} photo
                              {(photos[a.id] ?? []).length > 1 ? "s" : ""} added
                            </span>
                          )}
                        </div>

                        {(photos[a.id] ?? []).length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {(photos[a.id] ?? []).map((u, i) => (
                              <div key={`${u}-${i}`} className="group relative">
                                <img
                                  src={`${BACKEND_URL}${u}`}
                                  alt={`upload ${i + 1}`}
                                  className="h-24 w-20 rounded-[2px] border border-hairline object-cover"
                                />
                                <button
                                  onClick={() =>
                                    setPhotos((p) => ({
                                      ...p,
                                      [a.id]: (p[a.id] ?? []).filter((x) => x !== u),
                                    }))
                                  }
                                  className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-error text-paper opacity-0 transition-opacity group-hover:opacity-100"
                                  title="Remove photo"
                                >
                                  <X className="h-3 w-3" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="flex justify-end">
                          <Button
                            onClick={() => submit(a)}
                            disabled={submittingId === a.id}
                            className="shrink-0"
                          >
                            <CheckCircle2 className="h-4 w-4" />
                            {submittingId === a.id ? "Submitting…" : "Submit assignment"}
                          </Button>
                        </div>
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
