"use client";

import { AlertTriangle, BookCheck } from "lucide-react";
import { Badge, Card } from "@/components/ui";

interface SubjectItem {
  subjectCode: string;
  subjectName: string;
  topicsTracked: number;
  topicsMastered: number;
  avgMastery: number;
  avgRetention: number;
  examReadiness: number;
  atRisk: boolean;
}

export function SubjectGrid({ subjects }: { subjects: SubjectItem[] }) {
  if (!subjects || subjects.length === 0) {
    return (
      <Card>
        <h3 className="font-display text-[15px] font-semibold text-[var(--text-primary)] mb-1">
          Subject Exam Readiness
        </h3>
        <p className="text-[12px] text-[var(--text-muted)]">
          No subjects tracked yet. Start learning to see readiness meters.
        </p>
      </Card>
    );
  }

  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="font-display text-[16px] font-semibold text-[var(--text-primary)]">
            Subject Exam Readiness
          </h3>
          <p className="text-[11px] text-[var(--text-muted)]">
            Weighted by VTU PYQ importance & student mastery
          </p>
        </div>
        <Badge tone="navy">{subjects.length} active</Badge>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {subjects.map((sub) => {
          const readiness = Math.max(0, Math.min(100, sub.examReadiness || 0));
          const colorTone =
            readiness >= 75
              ? "var(--status-running)"
              : readiness >= 45
              ? "var(--status-warning)"
              : "var(--status-error)";

          return (
            <div
              key={sub.subjectCode}
              className="rounded-md border p-3.5 transition-all hover:bg-[var(--bg-secondary)]"
              style={{ borderColor: "var(--border-default)", background: "var(--bg-card)" }}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-[13px] text-[var(--text-primary)] truncate">
                      {sub.subjectCode}
                    </span>
                    {sub.atRisk && (
                      <span className="inline-flex items-center gap-1 rounded bg-[var(--status-error-soft)] px-1.5 py-0.5 text-[10px] font-semibold text-[var(--status-error)]">
                        <AlertTriangle className="h-3 w-3" />
                        At Risk
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-[11px] text-[var(--text-muted)] truncate">
                    {sub.subjectName}
                  </p>
                </div>
                <span className="tnum font-display text-[18px] font-semibold leading-none shrink-0" style={{ color: colorTone }}>
                  {readiness}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="mt-3">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--bg-tertiary)]">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${readiness}%`, background: colorTone }}
                  />
                </div>
                <div className="mt-2 flex items-center justify-between text-[10px] text-[var(--text-muted)]">
                  <span>{sub.topicsMastered} / {sub.topicsTracked} mastered</span>
                  <span>{sub.avgRetention}% retention</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
