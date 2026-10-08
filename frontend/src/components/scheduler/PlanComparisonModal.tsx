"use client";

import React from "react";
import { Card, Button } from "@/components/ui";
import { X, CheckCircle2, Zap, Brain, Scale, Flame } from "lucide-react";

interface PlanComparisonModalProps {
  currentMode: string;
  onSelectMode: (mode: string) => void;
  onClose: () => void;
}

export function PlanComparisonModal({
  currentMode,
  onSelectMode,
  onClose,
}: PlanComparisonModalProps) {
  const styles = [
    {
      id: "3-2-1",
      name: "3-2-1 Spaced Method",
      icon: Brain,
      ratios: "50% Learn · 33% Revise · 17% Test",
      description: "Allocates 3 learning chunks, 2 revision intervals at decay points, and 1 self-test per topic.",
      bestFor: "Full-semester study, deep theoretical mastery, long-term retention.",
      pros: ["Highest stability growth", "Prevents memory decay automatically", "Thorough coverage"],
    },
    {
      id: "80/20",
      name: "80/20 Pareto Yield",
      icon: Zap,
      ratios: "50% Learn · 30% Revise · 20% Test",
      description: "Calculates PYQ weightage × gap to prioritize top 20% topics covering 80% marks first.",
      bestFor: "Students with limited study hours seeking maximum exam score return.",
      pros: ["Focuses effort on high-yield questions", "Fast score improvement", "Prerequisites preserved"],
    },
    {
      id: "balanced",
      name: "Balanced Modular",
      icon: Scale,
      ratios: "50% Learn · 30% Revise · 20% Test",
      description: "Even chronological pacing across modules and course outcomes.",
      bestFor: "Classroom alignment, continuous internal assessments (CIEs).",
      pros: ["Predictable weekly rhythm", "Equal module weighting", "Great for daily habits"],
    },
    {
      id: "crunch",
      name: "Exam Crunch Sprint",
      icon: Flame,
      ratios: "30% Learn · 40% Revise · 30% Test",
      description: "Heavy revision drills and recall tests, targeting weak & low-retention topics.",
      bestFor: "Final 1-2 weeks before VTU semester exams (SEE).",
      pros: ["Aggressive practice on past papers", "Identifies recall gaps immediately", "Calm pre-exam buffer"],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <Card className="max-w-3xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-[var(--border-default)]">
          <div>
            <h2 className="text-lg font-bold text-[var(--text-primary)] font-display">
              Study Strategy Comparison
            </h2>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">
              Choose the adaptive pacing methodology that best fits your current timeline and goals.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-muted)]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {styles.map((s) => {
            const Icon = s.icon;
            const isSelected = currentMode === s.id;
            return (
              <div
                key={s.id}
                className={`p-4 rounded-xl border transition-all flex flex-col justify-between ${
                  isSelected
                    ? "border-[var(--accent-primary)] bg-[var(--accent-primary)]/10 ring-1 ring-[var(--accent-primary)]"
                    : "border-[var(--border-default)] bg-[var(--surface-muted)] hover:border-[var(--border-hover)]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-[var(--accent-primary)]" />
                      <span className="font-semibold text-sm text-[var(--text-primary)]">
                        {s.name}
                      </span>
                    </div>
                    {isSelected && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[var(--accent-primary)] text-white">
                        Active
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] font-mono text-[var(--accent-primary)] bg-[var(--surface-primary)] px-2 py-1 rounded inline-block mb-2">
                    {s.ratios}
                  </div>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-3">
                    {s.description}
                  </p>
                  <div className="text-[11px] text-[var(--text-primary)] font-medium mb-2">
                    <span className="text-[var(--text-muted)]">Best for: </span>
                    {s.bestFor}
                  </div>
                  <ul className="space-y-1 mb-4">
                    {s.pros.map((p, i) => (
                      <li key={i} className="text-[11px] text-[var(--text-muted)] flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  variant={isSelected ? "primary" : "outline"}
                  className="w-full text-xs py-1.5"
                  onClick={() => {
                    onSelectMode(s.id);
                    onClose();
                  }}
                >
                  {isSelected ? "Currently Active" : `Switch to ${s.name.split(" ")[0]}`}
                </Button>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
