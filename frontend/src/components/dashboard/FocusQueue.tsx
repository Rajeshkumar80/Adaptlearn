"use client";

import Link from "next/link";
import { ArrowUpRight, Flame, ShieldAlert } from "lucide-react";
import { Badge, Card } from "@/components/ui";

interface FocusItem {
  topicId: string;
  topicName: string;
  subjectCode: string;
  moduleNumber: number;
  mastery: number;
  retention: number;
  forgettingRisk: number;
  pyqImportance: number;
  actionReason: string;
}

export function FocusQueue({ topics }: { topics: FocusItem[] }) {
  if (!topics || topics.length === 0) {
    return (
      <Card>
        <h3 className="font-display text-[16px] font-semibold text-[var(--text-primary)] mb-1">
          Priority Focus Queue
        </h3>
        <p className="text-[12px] text-[var(--text-muted)]">
          All caught up! No urgent topics requiring immediate review right now.
        </p>
      </Card>
    );
  }

  return (
    <Card>
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h3 className="font-display text-[16px] font-semibold text-[var(--text-primary)]">
            Priority Focus Queue
          </h3>
          <p className="text-[11px] text-[var(--text-muted)]">
            Ranked by cognitive weakness, forgetting risk & VTU weightage
          </p>
        </div>
        <Badge tone="brass">{topics.length} prioritized</Badge>
      </div>

      <div className="divide-y divide-[var(--border-default)]">
        {topics.map((t, idx) => {
          const isHighRisk = t.forgettingRisk >= 50;
          return (
            <div key={t.topicId} className="flex items-center justify-between py-2.5 gap-3 group">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="tnum font-display text-[13px] font-semibold text-[var(--text-muted)] w-4 shrink-0">
                  {idx + 1}
                </span>
                <div className="min-w-0">
                  <p className="text-[13px] font-semibold text-[var(--text-primary)] truncate">
                    {t.topicName}
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 mt-0.5">
                    <span className="text-[10px] font-medium text-[var(--text-muted)]">
                      {t.subjectCode} · M{t.moduleNumber}
                    </span>
                    <span className="text-[10px] text-[var(--text-muted)]">·</span>
                    <span
                      className={`text-[10px] font-semibold ${
                        isHighRisk ? "text-[var(--status-error)]" : "text-[var(--status-warning)]"
                      }`}
                    >
                      {t.actionReason}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <div className="text-right">
                  <p className="tnum text-[12px] font-semibold text-[var(--text-primary)]">
                    {t.mastery}%
                  </p>
                  <p className="text-[9px] text-[var(--text-muted)]">mastery</p>
                </div>
                <Link
                  href={`/student/progress`}
                  className="rounded border p-1 text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)]"
                  style={{ borderColor: "var(--border-default)" }}
                  title="Review topic in How I Learn"
                >
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
