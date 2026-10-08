"use client";

import { useEffect, useState } from "react";
import { Check, Edit3, X } from "lucide-react";
import { api, errorMessage } from "@/lib/api";
import { Badge, Button, Card, Input, LoadingRows } from "@/components/ui";

interface TestResultsModalProps {
  testId: string;
  testTitle: string;
  onClose: () => void;
}

export function TestResultsModal({ testId, testTitle, onClose }: TestResultsModalProps) {
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingResultId, setEditingResultId] = useState<string | null>(null);
  const [overrideScore, setOverrideScore] = useState("");
  const [teacherFeedback, setTeacherFeedback] = useState("");
  const [saving, setSaving] = useState(false);

  function loadResults() {
    setLoading(true);
    api
      .get(`/tests/${testId}/results`)
      .then((res) => setResults(res.data.results || []))
      .catch((err) => setError(errorMessage(err)))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    loadResults();
  }, [testId]);

  async function handleSaveOverride(resultId: string) {
    setSaving(true);
    try {
      await api.patch(`/tests/results/${resultId}/grade`, {
        overrideScore: overrideScore !== "" ? Number(overrideScore) : undefined,
        teacherFeedback: teacherFeedback.trim() || undefined,
      });
      setEditingResultId(null);
      setOverrideScore("");
      setTeacherFeedback("");
      loadResults();
    } catch (err) {
      alert(errorMessage(err));
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <Card className="w-full max-w-4xl max-h-[85vh] flex flex-col p-5 border-[var(--border-default)]">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border-default)]">
          <div>
            <h2 className="text-base font-bold text-[var(--text-primary)]">Student Submissions</h2>
            <p className="text-xs text-[var(--text-muted)]">{testTitle} · {results.length} total attempts</p>
          </div>
          <button onClick={onClose} className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 space-y-3">
          {loading ? (
            <LoadingRows rows={4} />
          ) : error ? (
            <div className="p-3 text-xs text-red-400 bg-red-950/20 border border-red-800 rounded">{error}</div>
          ) : results.length === 0 ? (
            <p className="py-8 text-center text-xs text-[var(--text-muted)]">No student has submitted this test yet.</p>
          ) : (
            results.map((r) => {
              const isEditing = editingResultId === r.id;
              return (
                <div key={r.id} className="p-3.5 rounded border border-[var(--border-default)] bg-[var(--surface-muted)] space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-semibold text-[var(--text-primary)]">{r.student?.name}</span>
                      <span className="text-xs text-[var(--text-muted)] ml-2">USN: {r.student?.usn || "N/A"} · Attempt #{r.attemptNumber}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[var(--accent-primary)]">
                        Score: {r.score} / {r.totalMarks}
                      </span>
                      {r.teacherMarksOverride !== null && (
                        <Badge tone="brass">Teacher Overridden</Badge>
                      )}
                      <Button
                        variant="outline"
                        onClick={() => {
                          if (isEditing) {
                            setEditingResultId(null);
                          } else {
                            setEditingResultId(r.id);
                            setOverrideScore(String(r.score));
                            setTeacherFeedback(r.teacherFeedback || "");
                          }
                        }}
                        className="text-xs py-0.5 px-2"
                      >
                        <Edit3 className="w-3 h-3 mr-1" /> {isEditing ? "Cancel" : "Override"}
                      </Button>
                    </div>
                  </div>

                  {r.teacherFeedback && (
                    <div className="text-xs text-[var(--text-secondary)] italic bg-black/20 p-2 rounded border border-[var(--border-default)]">
                      Teacher Remark: "{r.teacherFeedback}"
                    </div>
                  )}

                  {isEditing && (
                    <div className="pt-2 border-t border-[var(--border-default)] space-y-2">
                      <div className="flex items-center gap-2">
                        <label className="text-xs text-[var(--text-muted)]">Override Score:</label>
                        <Input
                          type="number"
                          value={overrideScore}
                          onChange={(e) => setOverrideScore(e.target.value)}
                          className="w-24 text-xs"
                          min={0}
                          max={r.totalMarks}
                        />
                      </div>
                      <Input
                        value={teacherFeedback}
                        onChange={(e) => setTeacherFeedback(e.target.value)}
                        placeholder="Teacher feedback or grading justification..."
                        className="text-xs"
                      />
                      <Button onClick={() => handleSaveOverride(r.id)} disabled={saving} className="text-xs py-1 px-3">
                        <Check className="w-3.5 h-3.5 mr-1" /> {saving ? "Saving…" : "Save Final Marks"}
                      </Button>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </Card>
    </div>
  );
}
