"use client";

import { useState } from "react";
import { Grid, Sparkles, X, ChevronRight } from "lucide-react";
import { Badge, Button, Card } from "@/components/ui";
import { TopicRetentionState } from "@/lib/forgetting-curve";

interface KnowledgeHeatmapMatrixProps {
  states: TopicRetentionState[];
  onSelectTopic?: (topicId: string) => void;
}

export function KnowledgeHeatmapMatrix({ states, onSelectTopic }: KnowledgeHeatmapMatrixProps) {
  const [selectedTopic, setSelectedTopic] = useState<TopicRetentionState | null>(null);

  // Group by Subject Code
  const subjectsMap = new Map<string, TopicRetentionState[]>();
  for (const s of states) {
    if (!subjectsMap.has(s.subjectCode)) {
      subjectsMap.set(s.subjectCode, []);
    }
    subjectsMap.get(s.subjectCode)!.push(s);
  }

  const subjectList = Array.from(subjectsMap.entries());

  return (
    <Card className="p-4 space-y-4 border-[var(--border-default)]">
      <div className="flex items-center justify-between border-b border-[var(--border-default)] pb-3">
        <div className="flex items-center gap-2">
          <Grid className="w-4 h-4 text-[var(--accent-primary)]" />
          <h3 className="text-sm font-bold text-[var(--text-primary)]">
            Curriculum Knowledge Heatmap Matrix
          </h3>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-[var(--text-muted)]">
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-600 inline-block" /> Mastered (≥70%)
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-amber-600 inline-block" /> Learning (40-69%)
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-stone-700 inline-block" /> Initial (&lt;40%)
          </span>
        </div>
      </div>

      {subjectList.length === 0 ? (
        <p className="py-6 text-center text-xs text-[var(--text-muted)]">No topics currently tracked in learning state.</p>
      ) : (
        <div className="space-y-4">
          {subjectList.map(([subjectCode, topics]) => (
            <div key={subjectCode} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[var(--text-primary)]">{subjectCode}</span>
                <span className="text-[11px] text-[var(--text-muted)]">{topics.length} topics</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {topics.map((t) => {
                  const mastery = Number.isFinite(t.mastery) ? t.mastery : 0.2;
                  const bgClass =
                    mastery >= 0.7
                      ? "bg-emerald-800/60 hover:bg-emerald-700 text-emerald-200 border-emerald-700"
                      : mastery >= 0.4
                      ? "bg-amber-900/50 hover:bg-amber-800 text-amber-200 border-amber-700"
                      : "bg-stone-900 hover:bg-stone-800 text-stone-300 border-stone-800";

                  return (
                    <button
                      key={t.topicId}
                      onClick={() => {
                        setSelectedTopic(t);
                        if (onSelectTopic) onSelectTopic(t.topicId);
                      }}
                      className={`text-[11px] px-2.5 py-1 rounded border transition-colors truncate max-w-[200px] ${bgClass}`}
                      title={`${t.topicName} — Mastery: ${Math.round(mastery * 100)}%`}
                    >
                      {t.topicName}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Detail Drill-down Modal */}
      {selectedTopic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <Card className="w-full max-w-md p-5 border-[var(--border-default)] space-y-4">
            <div className="flex items-center justify-between border-b border-[var(--border-default)] pb-3">
              <div>
                <h4 className="text-sm font-bold text-[var(--text-primary)]">{selectedTopic.topicName}</h4>
                <p className="text-xs text-[var(--text-muted)]">{selectedTopic.subjectCode} · Module {selectedTopic.moduleNumber ?? 1}</p>
              </div>
              <button onClick={() => setSelectedTopic(null)} className="p-1 text-[var(--text-muted)] hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded bg-[var(--surface-muted)] border border-[var(--border-default)]">
                <span className="text-[10px] text-[var(--text-muted)] uppercase">BKT Mastery</span>
                <p className="text-base font-bold text-[var(--text-primary)]">{Math.round((selectedTopic.mastery || 0.2) * 100)}%</p>
              </div>
              <div className="p-2.5 rounded bg-[var(--surface-muted)] border border-[var(--border-default)]">
                <span className="text-[10px] text-[var(--text-muted)] uppercase">Retention</span>
                <p className="text-base font-bold text-[var(--accent-primary)]">{Math.round((selectedTopic.retention || 1.0) * 100)}%</p>
              </div>
              <div className="p-2.5 rounded bg-[var(--surface-muted)] border border-[var(--border-default)]">
                <span className="text-[10px] text-[var(--text-muted)] uppercase">Stability</span>
                <p className="text-base font-bold text-[var(--text-primary)]">{(selectedTopic.stability || 0.5).toFixed(1)} days</p>
              </div>
              <div className="p-2.5 rounded bg-[var(--surface-muted)] border border-[var(--border-default)]">
                <span className="text-[10px] text-[var(--text-muted)] uppercase">Reviews</span>
                <p className="text-base font-bold text-[var(--text-primary)]">{selectedTopic.timesReviewed || 0} times</p>
              </div>
            </div>

            <div className="p-3 rounded bg-[var(--surface-muted)] border border-[var(--border-default)] text-xs space-y-1">
              <span className="font-semibold text-[var(--accent-primary)]">Recommended Next Action:</span>
              <p className="text-[11px] text-[var(--text-secondary)]">
                {selectedTopic.mastery < 0.4
                  ? "Learn: Review fundamental concepts and study textbook examples."
                  : (selectedTopic.retention ?? 1) < 0.6
                  ? "Revise: Active memory recall test due to retention decay."
                  : "Practice: Solve VTU Previous Year Questions (PYQs)."}
              </p>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-[var(--border-default)]">
              <Button onClick={() => setSelectedTopic(null)} className="text-xs py-1.5 px-3">
                Done
              </Button>
            </div>
          </Card>
        </div>
      )}
    </Card>
  );
}
