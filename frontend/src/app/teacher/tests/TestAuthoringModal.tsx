"use client";

import { useState } from "react";
import { Plus, Trash2, X } from "lucide-react";
import { Button, Card, Input, Select, Textarea } from "@/components/ui";

export interface DraftQuestion {
  text: string;
  questionType: "MCQ" | "DESCRIPTIVE";
  options: string[];
  correctIndex: number;
  marks: number;
  rubric: string;
  expectedKeywords: string;
  modelAnswer: string;
}

interface TestAuthoringModalProps {
  subjects: Array<{ code: string; name: string }>;
  classes: Array<{ id: string; name: string }>;
  onClose: () => void;
  onSubmit: (testData: any) => Promise<void>;
  loading: boolean;
}

export function TestAuthoringModal({
  subjects,
  classes,
  onClose,
  onSubmit,
  loading,
}: TestAuthoringModalProps) {
  const [title, setTitle] = useState("");
  const [subjectCode, setSubjectCode] = useState(subjects[0]?.code || "");
  const [moduleNumber, setModuleNumber] = useState("1");
  const [difficulty, setDifficulty] = useState<"EASY" | "MEDIUM" | "HARD">("MEDIUM");
  const [durationMin, setDurationMin] = useState("20");
  const [attemptLimit, setAttemptLimit] = useState("3");
  const [integrityThreshold, setIntegrityThreshold] = useState("4");
  const [classId, setClassId] = useState("");
  const [questions, setQuestions] = useState<DraftQuestion[]>([
    {
      text: "",
      questionType: "MCQ",
      options: ["", "", "", ""],
      correctIndex: 0,
      marks: 2,
      rubric: "",
      expectedKeywords: "",
      modelAnswer: "",
    },
  ]);

  function addQuestion(type: "MCQ" | "DESCRIPTIVE") {
    setQuestions((qs) => [
      ...qs,
      {
        text: "",
        questionType: type,
        options: type === "MCQ" ? ["", "", "", ""] : [],
        correctIndex: 0,
        marks: type === "MCQ" ? 2 : 5,
        rubric: "",
        expectedKeywords: "",
        modelAnswer: "",
      },
    ]);
  }

  function updateQuestion(i: number, patch: Partial<DraftQuestion>) {
    setQuestions((qs) => qs.map((q, qi) => (qi === i ? { ...q, ...patch } : q)));
  }

  function updateOption(qi: number, oi: number, val: string) {
    setQuestions((qs) =>
      qs.map((q, i) =>
        i === qi ? { ...q, options: q.options.map((o, idx) => (idx === oi ? val : o)) } : q
      )
    );
  }

  function removeQuestion(i: number) {
    setQuestions((qs) => qs.filter((_, idx) => idx !== i));
  }

  async function handleSave() {
    if (!title.trim()) return alert("Test title is required");
    if (questions.length === 0) return alert("Add at least one question");

    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      if (!q.text.trim()) return alert(`Question #${i + 1} text is required`);
      if (q.questionType === "MCQ") {
        if (q.options.some((o) => !o.trim())) {
          return alert(`Question #${i + 1} requires all 4 options filled`);
        }
      }
    }

    const payload = {
      title: title.trim(),
      subjectCode,
      moduleNumber: Number(moduleNumber),
      difficulty,
      durationMin: Number(durationMin),
      attemptLimit: Number(attemptLimit),
      integrityThreshold: Number(integrityThreshold),
      classId: classId || undefined,
      questions: questions.map((q) => ({
        text: q.text.trim(),
        questionType: q.questionType,
        options: q.questionType === "MCQ" ? q.options.map((o) => o.trim()) : [],
        correctIndex: q.correctIndex,
        marks: q.marks,
        rubric: q.rubric ? q.rubric.trim() : undefined,
        expectedKeywords: q.expectedKeywords
          ? q.expectedKeywords.split(",").map((k) => k.trim()).filter(Boolean)
          : [],
        modelAnswer: q.modelAnswer ? q.modelAnswer.trim() : undefined,
      })),
    };

    await onSubmit(payload);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
      <Card className="w-full max-w-3xl max-h-[90vh] flex flex-col p-5 border-[var(--border-default)]">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border-default)]">
          <div>
            <h2 className="text-base font-bold text-[var(--text-primary)]">Create Assessment</h2>
            <p className="text-xs text-[var(--text-muted)]">Configure VTU syllabus questions with auto & LLM grading</p>
          </div>
          <button onClick={onClose} className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-[11px] font-semibold uppercase text-[var(--text-muted)]">Title</label>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Module 1 AI Search Test" />
            </div>
            <div>
              <label className="mb-1 block text-[11px] font-semibold uppercase text-[var(--text-muted)]">Subject</label>
              <Select value={subjectCode} onChange={(e) => setSubjectCode(e.target.value)}>
                {subjects.map((s) => (
                  <option key={s.code} value={s.code}>{s.code} — {s.name}</option>
                ))}
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <label className="mb-1 block text-[11px] font-semibold uppercase text-[var(--text-muted)]">Module</label>
              <Select value={moduleNumber} onChange={(e) => setModuleNumber(e.target.value)}>
                {[1, 2, 3, 4, 5].map((m) => (
                  <option key={m} value={m}>Module {m}</option>
                ))}
              </Select>
            </div>
            <div>
              <label className="mb-1 block text-[11px] font-semibold uppercase text-[var(--text-muted)]">Difficulty</label>
              <Select value={difficulty} onChange={(e) => setDifficulty(e.target.value as any)}>
                <option value="EASY">Easy</option>
                <option value="MEDIUM">Medium</option>
                <option value="HARD">Hard</option>
              </Select>
            </div>
            <div>
              <label className="mb-1 block text-[11px] font-semibold uppercase text-[var(--text-muted)]">Duration (Min)</label>
              <Input type="number" value={durationMin} onChange={(e) => setDurationMin(e.target.value)} min={5} />
            </div>
            <div>
              <label className="mb-1 block text-[11px] font-semibold uppercase text-[var(--text-muted)]">Attempts Limit</label>
              <Select value={attemptLimit} onChange={(e) => setAttemptLimit(e.target.value)}>
                <option value="1">1 Attempt</option>
                <option value="2">2 Attempts</option>
                <option value="3">3 Attempts (Default)</option>
              </Select>
            </div>
          </div>

          <div className="border-t border-[var(--border-default)] pt-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">Questions ({questions.length})</h3>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => addQuestion("MCQ")} className="text-xs py-1 px-2.5">
                  <Plus className="w-3.5 h-3.5 mr-1" /> Add MCQ (2m)
                </Button>
                <Button variant="outline" onClick={() => addQuestion("DESCRIPTIVE")} className="text-xs py-1 px-2.5">
                  <Plus className="w-3.5 h-3.5 mr-1" /> Add Descriptive (5m)
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {questions.map((q, qi) => (
                <div key={qi} className="rounded border border-[var(--border-default)] p-3 bg-[var(--surface-muted)]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[var(--accent-primary)]">
                      Q{qi + 1} · {q.questionType} ({q.marks} marks)
                    </span>
                    <button onClick={() => removeQuestion(qi)} className="text-[var(--text-muted)] hover:text-red-400">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <Textarea
                    value={q.text}
                    onChange={(e) => updateQuestion(qi, { text: e.target.value })}
                    placeholder="Enter question text..."
                    rows={2}
                    className="mb-2 text-xs"
                  />

                  {q.questionType === "MCQ" ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                      {q.options.map((opt, oi) => (
                        <div key={oi} className="flex items-center gap-1.5">
                          <input
                            type="radio"
                            name={`correct-${qi}`}
                            checked={q.correctIndex === oi}
                            onChange={() => updateQuestion(qi, { correctIndex: oi })}
                            className="accent-[var(--accent-primary)]"
                          />
                          <Input
                            value={opt}
                            onChange={(e) => updateOption(qi, oi, e.target.value)}
                            placeholder={`Option ${String.fromCharCode(65 + oi)}`}
                            className="text-xs py-1"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-2 mt-2">
                      <Input
                        value={q.rubric}
                        onChange={(e) => updateQuestion(qi, { rubric: e.target.value })}
                        placeholder="Rubric criteria (e.g. Must explain condition h(n) <= h*(n))"
                        className="text-xs"
                      />
                      <Input
                        value={q.expectedKeywords}
                        onChange={(e) => updateQuestion(qi, { expectedKeywords: e.target.value })}
                        placeholder="Keywords comma-separated (e.g. heuristic, admissible, overestimate)"
                        className="text-xs"
                      />
                      <Textarea
                        value={q.modelAnswer}
                        onChange={(e) => updateQuestion(qi, { modelAnswer: e.target.value })}
                        placeholder="Model answer for LLM evaluation baseline..."
                        rows={2}
                        className="text-xs"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-3 border-t border-[var(--border-default)]">
          <Button variant="ghost" onClick={onClose} disabled={loading}>Cancel</Button>
          <Button onClick={handleSave} disabled={loading}>{loading ? "Saving…" : "Save & Publish Test"}</Button>
        </div>
      </Card>
    </div>
  );
}
