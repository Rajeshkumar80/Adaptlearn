"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ShieldAlert, Trash2, X } from "lucide-react";
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

interface Test {
  id: string;
  subjectCode: string;
  title: string;
  durationMin: number;
  isActive: boolean;
  _count: { questions: number; results: number; cheatFlags: number };
}

interface CheatFlag {
  id: string;
  type: string;
  severity: string;
  details: string;
  createdAt: string;
  student: { name: string; usn: string | null };
}

interface DraftQuestion {
  text: string;
  options: string[];
  correctIndex: number;
  marks: number;
}

export default function TeacherTestsPage() {
  const { subjects } = useSubjects();
  const [tests, setTests] = useState<Test[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState("");
  const [toastKind, setToastKind] = useState<"success" | "error" | "info">("success");
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [durationMin, setDurationMin] = useState("30");
  const [classId, setClassId] = useState("");
  const [classes, setClasses] = useState<{ id: string; name: string }[]>([]);
  const [questions, setQuestions] = useState<DraftQuestion[]>([]);
  const [cheatFor, setCheatFor] = useState<string | null>(null);
  const [flags, setFlags] = useState<CheatFlag[]>([]);
  const [loadingFlags, setLoadingFlags] = useState(false);

  useEffect(() => {
    if (subjects.length > 0 && !subjectCode) setSubjectCode(subjects[0].code);
  }, [subjects, subjectCode]);

  async function load() {
    setLoading(true);
    setError("");
    try {
      const [t, c] = await Promise.all([
        api.get<{ tests: Test[] }>("/tests"),
        api.get<{ classes: { id: string; name: string }[] }>("/classes"),
      ]);
      setTests(t.data.tests);
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

  function addQuestion() {
    setQuestions((qs) => [
      ...qs,
      { text: "", options: ["", "", "", ""], correctIndex: 0, marks: 2 },
    ]);
  }

  function updateQuestion(i: number, patch: Partial<DraftQuestion>) {
    setQuestions((qs) => qs.map((q, qi) => (qi === i ? { ...q, ...patch } : q)));
  }

  function updateOption(i: number, oi: number, value: string) {
    setQuestions((qs) =>
      qs.map((q, qi) =>
        qi === i
          ? { ...q, options: q.options.map((o, x) => (x === oi ? value : o)) }
          : q
      )
    );
  }

  async function create() {
    if (!title.trim()) {
      notify("error", "Test needs a title.");
      return;
    }
    const valid = questions.filter((q) => q.text.trim() && q.options.every((o) => o.trim()));
    if (valid.length !== questions.length || questions.length === 0) {
      notify("error", "Every question needs text and 4 filled options.");
      return;
    }
    try {
      const res = await api.post<{ test: { id: string } }>("/tests", {
        subjectCode,
        title: title.trim(),
        durationMin: Number(durationMin),
        classId: classId || undefined,
        questions: valid.map((q) => ({
          text: q.text,
          options: q.options,
          correctIndex: q.correctIndex,
          marks: q.marks,
        })),
      });
      notify("success", `Test created with ${valid.length} questions.`);
      setTitle("");
      setQuestions([]);
      setShowForm(false);
      await load();
    } catch (err) {
      notify("error", errorMessage(err));
    }
  }

  async function removeTest(id: string) {
    try {
      await api.delete(`/tests/${id}`);
      notify("success", "Test deleted.");
      await load();
    } catch (err) {
      notify("error", errorMessage(err));
    }
  }

  async function openCheatReport(testId: string) {
    setCheatFor(testId);
    setLoadingFlags(true);
    setFlags([]);
    try {
      const res = await api.get<{ flags: CheatFlag[] }>(`/teacher/tests/${testId}/cheat-report`);
      setFlags(res.data.flags);
    } catch (err) {
      notify("error", errorMessage(err));
    } finally {
      setLoadingFlags(false);
    }
  }

  return (
    <div>
      <PageTitle
        title="Tests"
        subtitle="Create auto-graded tests; review the integrity ledger per test."
        right={
          <Button onClick={() => setShowForm((s) => !s)}>
            <Plus className="h-4 w-4" />
            New test
          </Button>
        }
      />

      {showForm && (
        <Card className="mb-6">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-display text-[17px] font-semibold text-ink">
              Create a test
            </h2>
            <button onClick={() => setShowForm(false)} className="text-ink-muted hover:text-error">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="sm:col-span-2">
              <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
                Title
              </label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. BCS501 Module 3 Quiz"
              />
            </div>
            <div>
              <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
                Duration (min)
              </label>
              <Input
                type="number"
                min={5}
                value={durationMin}
                onChange={(e) => setDurationMin(e.target.value)}
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
          </div>

          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-[12px] font-semibold uppercase tracking-wide text-ink-muted">
                Questions ({questions.length})
              </p>
              <Button variant="ghost" onClick={addQuestion}>
                <Plus className="h-3.5 w-3.5" /> Add question
              </Button>
            </div>
            {questions.length === 0 && (
              <p className="rounded-[2px] border border-dashed border-hairline px-4 py-6 text-center text-[12px] text-ink-muted">
                No questions yet — add at least one.
              </p>
            )}
            <div className="space-y-4">
              {questions.map((q, i) => (
                <div key={i} className="rounded-[2px] border border-hairline bg-paper-alt p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="tnum text-[12px] font-semibold text-brass">Q{i + 1}</span>
                    <Input
                      value={q.text}
                      onChange={(e) => updateQuestion(i, { text: e.target.value })}
                      placeholder="Question text"
                      className="flex-1"
                    />
                    <Input
                      type="number"
                      min={1}
                      value={q.marks}
                      onChange={(e) => updateQuestion(i, { marks: Number(e.target.value) })}
                      className="w-20"
                      title="Marks"
                    />
                    <button
                      onClick={() =>
                        setQuestions((qs) => qs.filter((_, x) => x !== i))
                      }
                      className="text-ink-muted hover:text-error"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {q.options.map((opt, oi) => (
                      <div key={oi} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name={`correct-${i}`}
                          checked={q.correctIndex === oi}
                          onChange={() => updateQuestion(i, { correctIndex: oi })}
                          className="h-4 w-4 accent-navy"
                          title="Correct answer"
                        />
                        <Input
                          value={opt}
                          onChange={(e) => updateOption(i, oi, e.target.value)}
                          placeholder={`Option ${String.fromCharCode(65 + oi)}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {questions.length > 0 && (
              <Button onClick={create} className="mt-4">
                <Plus className="h-4 w-4" />
                Create test
              </Button>
            )}
          </div>
        </Card>
      )}

      {loading ? (
        <LoadingRows rows={3} />
      ) : error ? (
        <ErrorState message={error} onRetry={load} />
      ) : tests.length === 0 ? (
        <EmptyState
          title="No tests yet"
          body="Create your first quiz — results auto-feed each student's mastery model."
          action={
            <Button onClick={() => setShowForm(true)}>
              <Plus className="h-4 w-4" /> New test
            </Button>
          }
        />
      ) : (
        <div className="space-y-4">
          {tests.map((t) => (
            <Card key={t.id} className="flex flex-wrap items-center gap-4">
              <div className="min-w-0 flex-1">
                <p className="text-[12px] text-ink-muted">{t.subjectCode}</p>
                <h2 className="font-display text-[18px] font-semibold text-ink">
                  {t.title}
                </h2>
                <p className="text-[12px] text-ink-muted">
                  {t._count.questions} questions · {t.durationMin} min ·{" "}
                  {t._count.results} attempts
                </p>
              </div>
              <Badge tone={t._count.cheatFlags > 0 ? "error" : "success"}>
                {t._count.cheatFlags} flags
              </Badge>
              <Button variant="ghost" onClick={() => openCheatReport(t.id)}>
                <ShieldAlert className="h-4 w-4" />
                Cheat report
              </Button>
              <button onClick={() => removeTest(t.id)} className="text-ink-muted hover:text-error">
                <Trash2 className="h-4 w-4" />
              </button>
            </Card>
          ))}
        </div>
      )}

      <AnimatePresence>
        {cheatFor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-navy-deep/50 p-4"
            onClick={() => setCheatFor(null)}
          >
            <motion.div
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="ledger-card max-h-[80vh] w-full max-w-lg overflow-y-auto bg-paper p-5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-[19px] font-semibold text-ink">
                  Cheat report
                </h3>
                <button onClick={() => setCheatFor(null)} className="text-ink-muted hover:text-error">
                  <X className="h-4 w-4" />
                </button>
              </div>
              {loadingFlags ? (
                <LoadingRows rows={3} />
              ) : flags.length === 0 ? (
                <EmptyState
                  title="No flags"
                  body="No tab-switches or window-blur events were recorded for this test."
                />
              ) : (
                <div className="divide-y divide-hairline">
                  {flags.map((f) => (
                    <div key={f.id} className="flex items-center gap-3 py-2.5">
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[13px] font-semibold text-ink">
                          {f.student.name} ({f.student.usn})
                        </p>
                        <p className="text-[11px] text-ink-muted">
                          {f.type} · {f.details || "no details"} ·{" "}
                          {new Date(f.createdAt).toLocaleString()}
                        </p>
                      </div>
                      <Badge
                        tone={
                          f.severity === "HIGH"
                            ? "error"
                            : f.severity === "MEDIUM"
                              ? "warning"
                              : "info"
                        }
                      >
                        {f.severity}
                      </Badge>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
