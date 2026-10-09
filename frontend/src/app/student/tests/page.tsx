"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, ChevronRight, Clock, FileText, Play } from "lucide-react";
import { api, errorMessage } from "@/lib/api";
import {
  Badge,
  Button,
  Card,
  EmptyState,
  ErrorState,
  LoadingRows,
  PageShell,
} from "@/components/ui";
import { TestTakingView } from "./TestTakingView";
import { TestResultView } from "./TestResultView";

interface AvailableTest {
  id: string;
  subjectCode: string;
  title: string;
  durationMin: number;
  moduleNumber: number | null;
  difficulty: string;
  attemptLimit: number;
  totalMarks: number;
  _count: { questions: number };
  results: Array<{
    id: string;
    attemptNumber: number;
    score: number;
    totalMarks: number;
    status: string;
    submittedAt: string;
    integrityWarnings: number;
  }>;
}

import { getCached, setCached } from "@/lib/cache";

const CACHE_TESTS = "student_tests_available";

export default function StudentTestsPage() {
  const cachedTests = getCached<AvailableTest[]>(CACHE_TESTS);
  const [tests, setTests] = useState<AvailableTest[]>(cachedTests || []);
  const [loading, setLoading] = useState(!cachedTests);
  const [error, setError] = useState("");

  // Active taking or result viewing states
  const [activeTest, setActiveTest] = useState<any | null>(null);
  const [currentAttemptNumber, setCurrentAttemptNumber] = useState(1);
  const [activeResult, setActiveResult] = useState<any | null>(null);
  const [activeResultMeta, setActiveResultMeta] = useState<{ title: string; subject: string } | null>(null);

  async function load(silent = false) {
    if (!silent && !cachedTests) setLoading(true);
    setError("");
    try {
      const res = await api.get<{ tests: AvailableTest[] }>("/tests/available");
      const fetched = res.data.tests || [];
      setTests(fetched);
      setCached(CACHE_TESTS, fetched);
    } catch (err) {
      if (!cachedTests) setError(errorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load(Boolean(cachedTests));
  }, []);

  async function startTest(testId: string) {
    try {
      const res = await api.get(`/tests/${testId}/take`);
      setActiveTest(res.data.test);
      setCurrentAttemptNumber(res.data.currentAttemptNumber || 1);
    } catch (err) {
      alert(errorMessage(err));
    }
  }

  // 1. In Active Test View
  if (activeTest) {
    return (
      <PageShell>
        <TestTakingView
          test={activeTest}
          attemptNumber={currentAttemptNumber}
          onCancel={() => setActiveTest(null)}
          onSubmitted={(result) => {
            setActiveResult(result);
            setActiveResultMeta({ title: activeTest.title, subject: activeTest.subjectCode });
            setActiveTest(null);
            load();
          }}
        />
      </PageShell>
    );
  }

  // 2. In Result View
  if (activeResult && activeResultMeta) {
    return (
      <PageShell>
        <TestResultView
          testTitle={activeResultMeta.title}
          subjectCode={activeResultMeta.subject}
          result={activeResult}
          onBack={() => {
            setActiveResult(null);
            setActiveResultMeta(null);
          }}
        />
      </PageShell>
    );
  }

  // 3. Tests List View
  return (
    <PageShell>
      <div className="mb-6 border-b border-[var(--border-default)] pb-4">
        <h1 className="font-display text-[26px] font-semibold text-[var(--text-primary)]">Assessments & Quizzes</h1>
        <p className="mt-1 text-[13px] text-[var(--text-muted)]">
          Complete syllabus assessments with instant AI feedback, rubric evaluations, and memory state updates.
        </p>
      </div>

      {loading ? (
        <LoadingRows rows={4} />
      ) : error ? (
        <ErrorState message={error} onRetry={load} />
      ) : tests.length === 0 ? (
        <EmptyState
          title="No assessments available"
          body="Your teachers have not published any assessments for your class yet."
        />
      ) : (
        <div className="space-y-3">
          {tests.map((t) => {
            const attemptsUsed = t.results?.length || 0;
            const maxAttempts = t.attemptLimit || 3;
            const hasAttemptsLeft = attemptsUsed < maxAttempts;
            const bestResult = t.results && t.results.length > 0
              ? [...t.results].sort((a, b) => b.score - a.score)[0]
              : null;

            return (
              <Card key={t.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-3.5">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] font-semibold text-[var(--text-primary)] truncate">{t.title}</span>
                    <Badge tone="navy">{t.subjectCode}</Badge>
                    {t.moduleNumber && <Badge tone="brass">Module {t.moduleNumber}</Badge>}
                    <Badge tone={t.difficulty === "HARD" ? "error" : t.difficulty === "MEDIUM" ? "warning" : "success"}>
                      {t.difficulty}
                    </Badge>
                  </div>

                  <p className="text-[11px] text-[var(--text-muted)] mt-1 flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {t.durationMin} mins
                    </span>
                    <span>·</span>
                    <span>{t._count.questions} questions</span>
                    <span>·</span>
                    <span>{t.totalMarks} marks</span>
                    <span>·</span>
                    <span className={attemptsUsed >= maxAttempts ? "text-amber-400 font-semibold" : "text-[var(--text-secondary)]"}>
                      Attempts: {attemptsUsed}/{maxAttempts}
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  {bestResult && (
                    <div className="text-right mr-2 hidden sm:block">
                      <p className="text-[10px] text-[var(--text-muted)] uppercase">Best Score</p>
                      <p className="text-xs font-bold text-[var(--accent-primary)]">
                        {bestResult.score} / {bestResult.totalMarks}
                      </p>
                    </div>
                  )}

                  <Button
                    onClick={() => startTest(t.id)}
                    disabled={!hasAttemptsLeft}
                    className="text-xs py-1.5 px-3"
                  >
                    <Play className="w-3.5 h-3.5 mr-1" />
                    {attemptsUsed === 0 ? "Start Test" : hasAttemptsLeft ? "Retake Test" : "Completed"}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </PageShell>
  );
}
