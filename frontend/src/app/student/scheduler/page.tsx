"use client";

import React, { useState, useEffect } from "react";
import { api, errorMessage } from "@/lib/api";
import { PageShell, Card, Button, Badge } from "@/components/ui";
import { Calendar, Layers, BarChart3, Plus } from "lucide-react";
import { SchedulerConfigForm } from "@/components/scheduler/SchedulerConfigForm";
import { SubjectProgressRing } from "@/components/scheduler/SubjectProgressRing";
import { PlanComparisonModal } from "@/components/scheduler/PlanComparisonModal";
import { MergedRoadmapGraph } from "@/components/scheduler/MergedRoadmapGraph";
import { SchedulerTaskCard } from "@/components/scheduler/SchedulerTaskCard";

interface PlanTask {
  id: string;
  subjectCode: string;
  moduleNumber: number | null;
  topicId: string | null;
  topicName: string;
  scheduledDate: string;
  scheduledSlot: string | null;
  minutes: number;
  type: "learn" | "revise" | "test";
  status: "PENDING" | "COMPLETED" | "SKIPPED" | "MISSED";
  order: number;
  todoText?: string;
  subPoints?: string[];
  selfCheckQuestion?: string;
}

interface ActivePlan {
  id: string;
  subjects: string[];
  examDate?: string;
  targetFinishDate?: string;
  hoursPerDay: number;
  mode: string;
  progressPercent: number;
  totalTasks: number;
  completedTasks: number;
  tasks: PlanTask[];
}

export default function UnifiedSchedulerPage() {
  const [activePlan, setActivePlan] = useState<ActivePlan | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showConfig, setShowConfig] = useState<boolean>(false);
  const [showComparison, setShowComparison] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"plan" | "roadmap">("plan");
  const [tickingId, setTickingId] = useState<string | null>(null);
  const [draggedTaskId, setDraggedTaskId] = useState<string | null>(null);

  const loadActivePlan = async () => {
    try {
      await api.post("/study-plan/reschedule-missed").catch(() => {});
      const res = await api.get<{ plan: ActivePlan | null }>("/study-plan/active");
      setActivePlan(res.data.plan);
    } catch {
      // Graceful fallback
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadActivePlan();
  }, []);

  const handleToggleTask = async (task: PlanTask) => {
    const newStatus = task.status === "COMPLETED" ? "PENDING" : "COMPLETED";
    setTickingId(task.id);
    try {
      await api.patch(`/study-plan/tasks/${task.id}`, { status: newStatus });
      setActivePlan((prev) => {
        if (!prev) return null;
        const updatedTasks = prev.tasks.map((t) =>
          t.id === task.id ? { ...t, status: newStatus as any } : t
        );
        const completed = updatedTasks.filter((t) => t.status === "COMPLETED").length;
        return {
          ...prev,
          completedTasks: completed,
          progressPercent: Math.round((completed / updatedTasks.length) * 100),
          tasks: updatedTasks,
        };
      });
    } catch (err) {
      console.error(err);
    } finally {
      setTickingId(null);
    }
  };

  const handleDragStart = (id: string) => {
    setDraggedTaskId(id);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = async (targetId: string) => {
    if (!draggedTaskId || draggedTaskId === targetId || !activePlan) return;
    const taskList = [...activePlan.tasks];
    const dragIdx = taskList.findIndex((t) => t.id === draggedTaskId);
    const dropIdx = taskList.findIndex((t) => t.id === targetId);
    if (dragIdx === -1 || dropIdx === -1) return;

    const [moved] = taskList.splice(dragIdx, 1);
    taskList.splice(dropIdx, 0, moved);

    setActivePlan({ ...activePlan, tasks: taskList });
    setDraggedTaskId(null);

    try {
      await api.post("/study-plan/reorder", { taskIds: taskList.map((t) => t.id) });
    } catch (err) {
      console.error(err);
    }
  };

  // Group tasks by scheduled date
  const groupedTasks = (activePlan?.tasks || []).reduce<Record<string, PlanTask[]>>((acc, t) => {
    const d = t.scheduledDate;
    if (!acc[d]) acc[d] = [];
    acc[d].push(t);
    return acc;
  }, {});

  const dates = Object.keys(groupedTasks).sort();
  const selectedSubject = activePlan?.subjects?.[0] || "BCS701";

  return (
    <PageShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[var(--border-default)]">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                Unified Study Scheduler & Roadmap
              </h1>
              {activePlan && (
                <Badge tone="navy" className="text-xs font-mono uppercase">
                  {activePlan.mode}
                </Badge>
              )}
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              Deterministic spacing, forgetting curve protection, and live prerequisite roadmap.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="text-xs py-1.5 px-3" onClick={() => setShowComparison(true)}>
              <Layers className="w-3.5 h-3.5 mr-1" />
              Compare Strategies
            </Button>
            <Button className="text-xs py-1.5 px-3" onClick={() => setShowConfig(!showConfig)}>
              {showConfig ? "Close Config" : <><Plus className="w-3.5 h-3.5 mr-1" /> New Study Plan</>}
            </Button>
          </div>
        </div>

        {/* Plan Config Form Drawer */}
        {showConfig && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-300">
            <SchedulerConfigForm
              onPlanGenerated={(data) => {
                setActivePlan(data.plan);
                setShowConfig(false);
                loadActivePlan();
              }}
              onCancel={() => setShowConfig(false)}
            />
          </div>
        )}

        {/* Subject Progress Rings */}
        {activePlan && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {(activePlan.subjects || []).map((subCode) => {
              const subTasks = activePlan.tasks.filter((t) => t.subjectCode === subCode);
              const done = subTasks.filter((t) => t.status === "COMPLETED").length;
              const pct = subTasks.length > 0 ? Math.round((done / subTasks.length) * 100) : 0;
              return (
                <SubjectProgressRing
                  key={subCode}
                  code={subCode}
                  name={`Subject ${subCode}`}
                  percent={pct}
                  completedTasks={done}
                  totalTasks={subTasks.length}
                />
              );
            })}
          </div>
        )}

        {/* View Switcher Tabs */}
        <div className="flex border-b border-[var(--border-default)] gap-4">
          <button
            onClick={() => setActiveTab("plan")}
            className={`pb-2.5 text-xs font-semibold flex items-center gap-2 border-b-2 transition-all ${
              activeTab === "plan"
                ? "border-[var(--accent-primary)] text-[var(--accent-primary)]"
                : "border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            Adaptive Schedule & To-Dos
          </button>
          <button
            onClick={() => setActiveTab("roadmap")}
            className={`pb-2.5 text-xs font-semibold flex items-center gap-2 border-b-2 transition-all ${
              activeTab === "roadmap"
                ? "border-[var(--accent-primary)] text-[var(--accent-primary)]"
                : "border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            Knowledge Graph & Prerequisite Map
          </button>
        </div>

        {/* Tab 1: Schedule Week Board */}
        {activeTab === "plan" && (
          <div className="space-y-6">
            {!activePlan && !loading && (
              <Card className="p-8 text-center">
                <Calendar className="w-10 h-10 text-[var(--text-muted)] mx-auto mb-3" />
                <h3 className="text-base font-bold text-[var(--text-primary)]">No Active Study Plan</h3>
                <p className="text-xs text-[var(--text-muted)] mt-1 max-w-sm mx-auto">
                  Generate your personalised adaptive plan based on your exam date and VTU syllabus.
                </p>
                <Button className="mt-4 text-xs py-1.5 px-3" onClick={() => setShowConfig(true)}>
                  Create Study Plan Now
                </Button>
              </Card>
            )}

            {dates.map((dateStr) => {
              const dayTasks = groupedTasks[dateStr] || [];
              const isToday = dateStr === new Date().toISOString().slice(0, 10);

              return (
                <div key={dateStr} className="space-y-3">
                  <div className="flex items-center justify-between pb-1 border-b border-[var(--border-default)]">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-xs text-[var(--text-primary)]">
                        {dateStr}
                      </span>
                      {isToday && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400">
                          Today
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-[var(--text-muted)]">
                      {dayTasks.length} tasks · {dayTasks.reduce((s, t) => s + t.minutes, 0)} min
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {dayTasks.map((task) => (
                      <SchedulerTaskCard
                        key={task.id}
                        task={task}
                        onToggle={handleToggleTask}
                        onDragStart={handleDragStart}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Merged Roadmap Graph */}
        {activeTab === "roadmap" && (
          <MergedRoadmapGraph subjectCode={selectedSubject} />
        )}

        {/* Strategy Comparison Modal */}
        {showComparison && (
          <PlanComparisonModal
            currentMode={activePlan?.mode || "3-2-1"}
            onSelectMode={(mode) => {
              setShowConfig(true);
            }}
            onClose={() => setShowComparison(false)}
          />
        )}
      </div>
    </PageShell>
  );
}
