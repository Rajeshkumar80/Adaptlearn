"use client";

import { Award, CheckCircle2, ChevronRight, XCircle } from "lucide-react";
import { Badge, Button, Card } from "@/components/ui";

interface TestResultViewProps {
  testTitle: string;
  subjectCode: string;
  result: any;
  onBack: () => void;
}

export function TestResultView({
  testTitle,
  subjectCode,
  result,
  onBack,
}: TestResultViewProps) {
  const score = result?.score ?? 0;
  const total = result?.totalMarks ?? 0;
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  const items: any[] = Array.isArray(result?.answers) ? result.answers : [];

  return (
    <div className="max-w-3xl mx-auto space-y-5">
      {/* Score Summary Header */}
      <Card className="p-6 text-center border-[var(--border-default)]">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent-soft)] mb-3">
          <Award className="h-7 w-7 text-[var(--accent-primary)]" />
        </div>
        <h2 className="text-xl font-bold text-[var(--text-primary)]">{testTitle}</h2>
        <p className="text-xs text-[var(--text-muted)] mt-0.5">{subjectCode} · Attempt #{result?.attemptNumber ?? 1}</p>

        <div className="mt-4 flex items-baseline justify-center gap-2">
          <span className="text-4xl font-extrabold text-[var(--accent-primary)]">{score}</span>
          <span className="text-lg text-[var(--text-muted)]">/ {total}</span>
          <Badge tone={percentage >= 70 ? "success" : percentage >= 40 ? "warning" : "error"} className="ml-2">
            {percentage}%
          </Badge>
        </div>

        {result?.teacherMarksOverride !== null && result?.teacherMarksOverride !== undefined && (
          <p className="text-xs text-amber-400 mt-2 font-medium">
            Teacher Final Marks Applied: {result.score} / {total}
          </p>
        )}

        {result?.teacherFeedback && (
          <div className="mt-3 p-3 rounded bg-[var(--surface-muted)] text-xs text-left border border-[var(--border-default)] italic text-[var(--text-secondary)]">
            <span className="font-semibold not-italic text-[var(--text-primary)]">Teacher Feedback: </span>
            "{result.teacherFeedback}"
          </div>
        )}
      </Card>

      {/* Academic Disclosure Note */}
      <div className="p-3 rounded bg-[var(--surface-muted)] border border-[var(--border-default)] text-[11px] text-[var(--text-muted)] leading-relaxed">
        <span className="font-semibold text-[var(--text-primary)]">Integrity Monitoring Disclosure: </span>
        Integrity events reflect client browser focus, tab visibility, and clipboard activity indicators. They are designed to monitor assessment environment adherence and do not constitute definitive forensic proof of academic dishonesty.
      </div>

      {/* Question Feedback Breakdown */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-[var(--text-primary)]">Question-by-Question Evaluation</h3>
        {items.map((item, idx) => {
          const isCorrect = item.awardedMarks === item.maxMarks;
          return (
            <Card key={idx} className="p-4 space-y-2.5 border-[var(--border-default)]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[var(--text-primary)]">
                  Q{idx + 1} · {item.questionType}
                </span>
                <span className="text-xs font-semibold text-[var(--accent-primary)]">
                  {item.awardedMarks} / {item.maxMarks} marks
                </span>
              </div>

              <div className="text-xs text-[var(--text-secondary)]">{item.feedback}</div>

              {item.keyConceptsIdentified?.length > 0 && (
                <div className="flex items-start gap-1.5 text-xs text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span>Concepts Identified: {item.keyConceptsIdentified.join(", ")}</span>
                </div>
              )}

              {item.missingPoints?.length > 0 && (
                <div className="flex items-start gap-1.5 text-xs text-amber-400">
                  <XCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span>Missing Points: {item.missingPoints.join(", ")}</span>
                </div>
              )}
            </Card>
          );
        })}
      </div>

      <div className="flex justify-center pt-2">
        <Button onClick={onBack} className="text-xs py-2 px-4">
          Return to Assessments <ChevronRight className="w-3.5 h-3.5 ml-1" />
        </Button>
      </div>
    </div>
  );
}
