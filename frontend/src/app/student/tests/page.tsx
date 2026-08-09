"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Flag } from "lucide-react";
import { api, errorMessage } from "@/lib/api";
import {
  Badge,
  Button,
  Card,
  EmptyState,
  ErrorState,
  LoadingRows,
  PageTitle,
  Toast,
} from "@/components/ui";

interface AvailableTest {
  id: string;
  subjectCode: string;
  title: string;
  durationMin: number;
  _count: { questions: number };
  results: { score: number; totalMarks: number; submittedAt: string }[];
}

interface TakeTest {
  id: string;
  subjectCode: string;
  title: string;
  durationMin: number;
  questions: { id: string; text: string; options: string[]; marks: number }[];
}

interface TestResult {
  score: number;
  totalMarks: number;
  submittedAt: string;
}

export default function TestsPage() {
  const [tests, setTests] = useState<AvailableTest[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState<TakeTest | null>(null);
  const [selections, setSelections] = useState<Record<string, number>>({});
  const [submitting, setSubmitting] = useState(false);
  const [lastResult, setLastResult] = useState<TestResult | null>(null);
  const [toast, setToast] = useState("");
  const [toastKind, setToastKind] = useState<"success" | "error" | "info">("success");

  async function load() {
    setLoading(true);
    setError("");
    try {
      const res = await api.get<{ tests: AvailableTest[] }>("/tests/available");
      setTests(res.data.tests);
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function start(t: AvailableTest) {
    setError("");
    setSelections({});
    setLastResult(null);
    try {
      const res = await api.get<{ test: TakeTest }>(`/tests/${t.id}/take`);
      setActive(res.data.test);
    } catch (err) {
      setError(errorMessage(err));
    }
  }

  async function submitTest() {
    if (!active) return;
    setSubmitting(true);
    setError("");
    try {
      const answers = active.questions.map((q) => ({
        questionId: q.id,
        selectedIndex: selections[q.id] ?? -1,
      }));
      const res = await api.post<{ result: TestResult }>(`/tests/${active.id}/submit`, {
        answers,
      });
      setLastResult(res.data.result);
      setActive(null);
      setToastKind("success");
      setToast(
        `Score: ${res.data.result.score}/${res.data.result.totalMarks} — mastery updated.`
      );
      await load();
    } catch (err) {
      setToastKind("error");
      setToast(errorMessage(err));
    } finally {
      setSubmitting(false);
    }
  }

  if (active) {
    return (
      <div>
        <PageTitle
          title={active.title}
          subtitle={`${active.subjectCode} · ${active.questions.length} questions · ${active.durationMin} min`}
        />
        <div className="space-y-4">
          {active.questions.map((q, qi) => (
            <Card key={q.id}>
              <p className="text-[14px] font-semibold text-ink">
                <span className="tnum mr-2 text-brass">{qi + 1}.</span>
                {q.text}
              </p>
              <div className="mt-3 grid gap-2">
                {q.options.map((opt, oi) => {
                  const selected = selections[q.id] === oi;
                  return (
                    <button
                      key={oi}
                      onClick={() =>
                        setSelections((s) => ({ ...s, [q.id]: oi }))
                      }
                      className={`rounded-[2px] border px-3 py-2 text-left text-[13px] transition-colors ${
                        selected
                          ? "border-navy bg-navy-soft font-semibold text-navy"
                          : "border-hairline bg-paper hover:border-navy"
                      }`}
                    >
                      {String.fromCharCode(65 + oi)}. {opt}
                    </button>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between">
          <Button variant="ghost" onClick={() => setActive(null)}>
            Cancel
          </Button>
          <Button onClick={submitTest} disabled={submitting}>
            <Trophy className="h-4 w-4" />
            {submitting ? "Grading…" : "Submit test"}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageTitle
        title="Tests"
        subtitle="Auto-graded quizzes set by your teacher — results feed your mastery model."
      />
      {error && <ErrorState message={error} onRetry={load} />}

      {loading ? (
        <LoadingRows rows={3} />
      ) : tests.length === 0 ? (
        <EmptyState
          title="No tests available"
          body="Your teacher hasn't published a test for your class yet."
        />
      ) : (
        <div className="space-y-4">
          {tests.map((t) => {
            const last = t.results[t.results.length - 1];
            return (
              <Card key={t.id} className="flex flex-wrap items-center gap-4">
                <div className="min-w-0 flex-1">
                  <p className="text-[12px] text-ink-muted">{t.subjectCode}</p>
                  <h2 className="font-display text-[18px] font-semibold text-ink">
                    {t.title}
                  </h2>
                  <p className="text-[12px] text-ink-muted">
                    {t._count.questions} questions · {t.durationMin} min
                  </p>
                </div>
                {last && (
                  <div className="text-right">
                    <p className="text-[11px] text-ink-muted">Last attempt</p>
                    <p className="font-display text-[20px] font-semibold text-success">
                      {last.score}
                      <span className="text-[12px] text-ink-muted">
                        /{last.totalMarks}
                      </span>
                    </p>
                    <p className="text-[10px] text-ink-muted">
                      {new Date(last.submittedAt).toLocaleDateString()}
                    </p>
                  </div>
                )}
                {last ? (
                  <Button variant="outline" disabled>
                    <Flag className="h-4 w-4" />
                    Attempted
                  </Button>
                ) : (
                  <Button onClick={() => start(t)} disabled={!t._count.questions}>
                    <Flag className="h-4 w-4" />
                    Start
                  </Button>
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
