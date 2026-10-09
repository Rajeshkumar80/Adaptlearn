"use client";

import React, { useState, useEffect } from "react";
import { api, errorMessage } from "@/lib/api";
import { Card, Button, Input } from "@/components/ui";
import { Calendar, Clock, Sparkles, BookOpen, AlertCircle } from "lucide-react";

export interface PlanStyleInfo {
  mode: string;
  learnRatio: number;
  reviseRatio: number;
  testRatio: number;
  description: string;
}

export interface SubjectItem {
  code: string;
  name: string;
  semester: number;
  credits: number;
  moduleCount: number;
  topicCount: number;
  avgMastery: number;
}

interface SchedulerConfigFormProps {
  onPlanGenerated: (data: any) => void;
  onCancel?: () => void;
  initialMode?: string;
}

export function SchedulerConfigForm({ onPlanGenerated, onCancel, initialMode }: SchedulerConfigFormProps) {
  const [subjects, setSubjects] = useState<SubjectItem[]>([]);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [isExamDate, setIsExamDate] = useState<boolean>(true);
  
  // Set default target date to 14 days from now
  const defaultTarget = new Date();
  defaultTarget.setDate(defaultTarget.getDate() + 14);
  const [targetDate, setTargetDate] = useState<string>(defaultTarget.toISOString().slice(0, 10));

  const [hoursPerDay, setHoursPerDay] = useState<number>(2.0);
  const [mode, setMode] = useState<string>(initialMode || "3-2-1");
  const [preferredSlot, setPreferredSlot] = useState<string>("EVENING");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    api.get<{ subjects: SubjectItem[] }>("/study-plan/subjects")
      .then((res) => {
        setSubjects(res.data.subjects || []);
        if (res.data.subjects?.length > 0) {
          // Pre-select first subject
          setSelectedSubjects([res.data.subjects[0].code]);
        }
      })
      .catch((err) => {
        setError(errorMessage(err));
      });
  }, []);

  const toggleSubject = (code: string) => {
    setSelectedSubjects(prev =>
      prev.includes(code)
        ? prev.length > 1 ? prev.filter(c => c !== code) : prev // keep at least 1
        : [...prev, code]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSubjects.length === 0) {
      setError("Please select at least one subject.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/study-plan/generate", {
        subjectCodes: selectedSubjects,
        targetDate,
        isExamDate,
        hoursPerDay: Number(hoursPerDay),
        mode,
        preferredSlot
      });
      onPlanGenerated(res.data);
    } catch (err: any) {
      setError(errorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  const styleOptions = [
    {
      id: "3-2-1",
      name: "3-2-1 Method",
      badge: "Classic Spaced",
      desc: "50% Learn / 33% Revise / 17% Test. Best for deep understanding."
    },
    {
      id: "80/20",
      name: "80/20 Pareto",
      badge: "High Yield",
      desc: "Schedules top 20% PYQ topics first for maximum score impact."
    },
    {
      id: "balanced",
      name: "Balanced",
      badge: "Steady Pace",
      desc: "Even distribution across modules with regular reviews."
    },
    {
      id: "crunch",
      name: "Exam Crunch",
      badge: "Fast Sprint",
      desc: "Intensive 40% revision & 30% mock recall drills before exam."
    }
  ];

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[var(--accent-primary)]" />
            Configure Your Adaptive Study Plan
          </h2>
          <p className="text-sm text-[var(--text-muted)] mt-1">
            Pick your subjects, target date, daily capacity, and learning strategy.
          </p>
        </div>

        {error && (
          <div className="p-3 text-sm bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* 1. Subject selector */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2">
            Target Subjects (Select 1 or more)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 max-h-48 overflow-y-auto p-1 border border-[var(--border-default)] rounded-lg">
            {subjects.map(s => {
              const selected = selectedSubjects.includes(s.code);
              return (
                <button
                  type="button"
                  key={s.code}
                  onClick={() => toggleSubject(s.code)}
                  className={`p-2.5 text-left rounded-md border text-xs transition-all flex flex-col justify-between ${
                    selected
                      ? "border-[var(--accent-primary)] bg-[var(--accent-primary)]/10 text-[var(--text-primary)]"
                      : "border-[var(--border-default)] bg-[var(--surface-muted)] text-[var(--text-muted)] hover:border-[var(--text-muted)]"
                  }`}
                >
                  <div className="flex items-center justify-between font-semibold">
                    <span>{s.code}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--surface-primary)]">
                      Sem {s.semester}
                    </span>
                  </div>
                  <div className="truncate text-[11px] mt-1">{s.name}</div>
                  <div className="text-[10px] text-[var(--text-muted)] mt-1 flex justify-between">
                    <span>{s.topicCount} topics</span>
                    <span>{Math.round(s.avgMastery * 100)}% mastery</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Target Date & Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                Target Date
              </label>
              <div className="flex gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setIsExamDate(true)}
                  className={`px-2 py-0.5 rounded ${isExamDate ? "bg-[var(--accent-primary)] text-white" : "text-[var(--text-muted)]"}`}
                >
                  Exam Date
                </button>
                <button
                  type="button"
                  onClick={() => setIsExamDate(false)}
                  className={`px-2 py-0.5 rounded ${!isExamDate ? "bg-[var(--accent-primary)] text-white" : "text-[var(--text-muted)]"}`}
                >
                  Finish By
                </button>
              </div>
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
              <Input
                type="date"
                value={targetDate}
                min={new Date().toISOString().slice(0, 10)}
                onChange={(e) => setTargetDate(e.target.value)}
                className="pl-9 text-sm"
                required
              />
            </div>
            {isExamDate && (
              <p className="text-[11px] text-[var(--text-muted)] mt-1">
                * Includes an automated 1-day pre-exam buffer for final calm review.
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
              Daily Study Capacity
            </label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
              <Input
                type="number"
                step="0.5"
                min="0.5"
                max="10"
                value={hoursPerDay}
                onChange={(e) => setHoursPerDay(Number(e.target.value))}
                className="pl-9 text-sm"
                required
              />
            </div>
            <p className="text-[11px] text-[var(--text-muted)] mt-1">
              Hours per day allocated for study ({Math.round(hoursPerDay * 60)} minutes/day).
            </p>
          </div>
        </div>

        {/* 3. Plan Style */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2">
            Plan Strategy / Style
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {styleOptions.map((opt) => (
              <div
                key={opt.id}
                onClick={() => setMode(opt.id)}
                className={`p-3 rounded-lg border cursor-pointer transition-all ${
                  mode === opt.id
                    ? "border-[var(--accent-primary)] bg-[var(--accent-primary)]/10"
                    : "border-[var(--border-default)] hover:border-[var(--border-hover)] bg-[var(--surface-muted)]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-[var(--text-primary)]">
                    {opt.name}
                  </span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[var(--surface-primary)] text-[var(--accent-primary)]">
                    {opt.badge}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-muted)] mt-1 leading-snug">
                  {opt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Preferred Time Slot */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2">
            Peak Focus Study Slot
          </label>
          <div className="grid grid-cols-4 gap-2 text-xs">
            {["MORNING", "AFTERNOON", "EVENING", "NIGHT"].map((slot) => (
              <button
                type="button"
                key={slot}
                onClick={() => setPreferredSlot(slot)}
                className={`py-2 rounded-md border capitalize font-medium transition-all ${
                  preferredSlot === slot
                    ? "border-[var(--accent-primary)] bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] font-semibold"
                    : "border-[var(--border-default)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                {slot.toLowerCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 pt-2 border-t border-[var(--border-default)]">
          {onCancel && (
            <Button type="button" variant="ghost" onClick={onCancel}>
              Cancel
            </Button>
          )}
          <Button type="submit" disabled={loading || selectedSubjects.length === 0} className="px-6">
            {loading ? "Generating Plan…" : "Generate Adaptive Plan"}
          </Button>
        </div>
      </form>
    </Card>
  );
}
