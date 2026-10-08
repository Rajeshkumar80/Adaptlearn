"use client";

import { useEffect, useState } from "react";
import { Plus, ShieldAlert, Trash2, Users, FileText } from "lucide-react";
import { api, errorMessage } from "@/lib/api";
import {
  Badge,
  Button,
  Card,
  EmptyState,
  ErrorState,
  LoadingRows,
} from "@/components/ui";
import { useSubjects } from "@/lib/subjects";
import { TestAuthoringModal } from "./TestAuthoringModal";
import { IntegrityReportModal } from "./IntegrityReportModal";
import { TestResultsModal } from "./TestResultsModal";

interface TeacherTest {
  id: string;
  subjectCode: string;
  title: string;
  durationMin: number;
  totalMarks: number;
  moduleNumber: number | null;
  difficulty: string;
  _count: { questions: number; results: number; cheatFlags: number };
}

export default function TeacherTestsPage() {
  const { subjects } = useSubjects();
  const [tests, setTests] = useState<TeacherTest[]>([]);
  const [classes, setClasses] = useState<{ id: string; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showAuthorModal, setShowAuthorModal] = useState(false);
  const [submittingTest, setSubmittingTest] = useState(false);

  // Active modals
  const [integrityModalTest, setIntegrityModalTest] = useState<{ id: string; title: string } | null>(null);
  const [resultsModalTest, setResultsModalTest] = useState<{ id: string; title: string } | null>(null);

  async function load() {
    setLoading(true);
    setError("");
    try {
      const [t, c] = await Promise.all([
        api.get<{ tests: TeacherTest[] }>("/tests"),
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

  async function handleCreateTest(payload: any) {
    setSubmittingTest(true);
    try {
      await api.post("/tests", payload);
      setShowAuthorModal(false);
      await load();
    } catch (err) {
      alert(errorMessage(err));
    } finally {
      setSubmittingTest(false);
    }
  }

  async function removeTest(id: string) {
    if (!confirm("Are you sure you want to delete this assessment?")) return;
    try {
      await api.delete(`/tests/${id}`);
      await load();
    } catch (err) {
      alert(errorMessage(err));
    }
  }

  return (
    <div>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[var(--border-default)] pb-4">
        <div>
          <h1 className="font-display text-[26px] font-semibold text-[var(--text-primary)]">Assessments & Tests</h1>
          <p className="mt-1 text-[13px] text-[var(--text-muted)]">
            Create syllabus assessments with auto-grading, LLM descriptive evaluation, and academic integrity logs.
          </p>
        </div>
        <Button onClick={() => setShowAuthorModal(true)}>
          <Plus className="h-4 w-4 mr-1.5" /> Create Assessment
        </Button>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-display text-[17px] font-semibold text-[var(--text-primary)]">
          Created Assessments ({tests.length})
        </h2>
      </div>

      {loading ? (
        <LoadingRows rows={4} />
      ) : error ? (
        <ErrorState message={error} onRetry={load} />
      ) : tests.length === 0 ? (
        <EmptyState
          title="No assessments yet"
          body="Click 'Create Assessment' above to author your first VTU test with MCQ and descriptive questions."
        />
      ) : (
        <div className="grid grid-cols-1 gap-3">
          {tests.map((t) => (
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
                <p className="text-[11px] text-[var(--text-muted)] mt-1">
                  {t.durationMin} mins · {t._count.questions} questions · Total {t.totalMarks} marks ·{" "}
                  {t._count.results} submissions · {t._count.cheatFlags} integrity events
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Button
                  variant="outline"
                  onClick={() => setResultsModalTest({ id: t.id, title: t.title })}
                  className="text-xs py-1 px-2.5"
                >
                  <Users className="w-3.5 h-3.5 mr-1" /> Submissions ({t._count.results})
                </Button>

                <Button
                  variant="outline"
                  onClick={() => setIntegrityModalTest({ id: t.id, title: t.title })}
                  className="text-xs py-1 px-2.5"
                >
                  <ShieldAlert className="w-3.5 h-3.5 mr-1 text-amber-400" /> Integrity ({t._count.cheatFlags})
                </Button>

                <button
                  onClick={() => removeTest(t.id)}
                  className="p-1.5 text-[var(--text-muted)] hover:text-red-400 rounded"
                  title="Delete Assessment"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {showAuthorModal && (
        <TestAuthoringModal
          subjects={subjects}
          classes={classes}
          onClose={() => setShowAuthorModal(false)}
          onSubmit={handleCreateTest}
          loading={submittingTest}
        />
      )}

      {integrityModalTest && (
        <IntegrityReportModal
          testId={integrityModalTest.id}
          testTitle={integrityModalTest.title}
          onClose={() => setIntegrityModalTest(null)}
        />
      )}

      {resultsModalTest && (
        <TestResultsModal
          testId={resultsModalTest.id}
          testTitle={resultsModalTest.title}
          onClose={() => setResultsModalTest(null)}
        />
      )}
    </div>
  );
}
