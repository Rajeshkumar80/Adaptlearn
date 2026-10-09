"use client";

import React, { useState, useEffect } from "react";
import { api, errorMessage } from "@/lib/api";
import { PageShell, Card, Button, Badge, Select } from "@/components/ui";
import { Calendar, Layers, BarChart3, Plus, Trash2, Check, RefreshCw } from "lucide-react";
import { SchedulerConfigForm } from "@/components/scheduler/SchedulerConfigForm";
import { SubjectProgressRing } from "@/components/scheduler/SubjectProgressRing";
import { PlanComparisonModal } from "@/components/scheduler/PlanComparisonModal";
import { MergedRoadmapGraph } from "@/components/scheduler/MergedRoadmapGraph";
import { SchedulerTaskCard } from "@/components/scheduler/SchedulerTaskCard";
import { getCached, setCached } from "@/lib/cache";

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
  status?: string;
  progressPercent: number;
  totalTasks: number;
  completedTasks: number;
  tasks: PlanTask[];
}

export interface SavedPlanSummary {
  id: string;
  subjects: string[] | string;
  examDate?: string;
  targetFinishDate?: string;
  hoursPerDay: number;
  mode: string;
  status: string;
  createdAt: string;
  totalTasks: number;
  completedTasks: number;
  progressPercent: number;
}

const CACHE_ACTIVE = "study_plan_active";
const CACHE_ALL = "study_plan_all";

export default function UnifiedSchedulerPage() {
  const cachedActive = getCached<ActivePlan>(CACHE_ACTIVE);
  const cachedAll = getCached<SavedPlanSummary[]>(CACHE_ALL);

  const [activePlan, setActivePlan] = useState<ActivePlan | null>(cachedActive || null);
  const [allPlans, setAllPlans] = useState<SavedPlanSummary[]>(cachedAll || []);
  const [loading, setLoading] = useState<boolean>(!cachedActive);
  const [isSwitching, setIsSwitching] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [showConfig, setShowConfig] = useState<boolean>(false);
  const [selectedInitialMode, setSelectedInitialMode] = useState<string>("3-2-1");
  const [showComparison, setShowComparison] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"plan" | "roadmap">("plan");
  const [tickingId, setTickingId] = useState<string | null>(null);
  const [draggedTaskId, setDraggedTaskId] = useState<string | null>(null);

  const loadAllPlans = async (silent = false) => {
    try {
      if (!silent && !cachedActive) setLoading(true);
      // Run reschedule in background without blocking active plan loading
      api.post("/study-plan/reschedule-missed").catch(() => {});

      const [activeRes, allRes] = await Promise.all([
        api.get<{ plan: ActivePlan | null }>("/study-plan/active"),
        api.get<{ plans: SavedPlanSummary[] }>("/study-plan/all"),
      ]);

      if (activeRes.data.plan) {
        setActivePlan(activeRes.data.plan);
        setCached(CACHE_ACTIVE, activeRes.data.plan);
      }
      if (allRes.data.plans) {
        setAllPlans(allRes.data.plans);
        setCached(CACHE_ALL, allRes.data.plans);
      }
    } catch {
      // Graceful fallback
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAllPlans();
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleActivatePlan = async (planId: string) => {
    if (!planId || planId === activePlan?.id) return;
    setIsSwitching(true);
    try {
      const res = await api.post<{ plan: ActivePlan }>(`/study-plan/${planId}/activate`);
      if (res.data?.plan) {
        setActivePlan(res.data.plan);
        setCached(CACHE_ACTIVE, res.data.plan);
        setAllPlans((prev) =>
          prev.map((p) => ({
            ...p,
            status: p.id === planId ? "ACTIVE" : "SAVED",
          }))
        );
        showToast(`Activated ${res.data.plan.mode.toUpperCase()} plan.`);
      }
    } catch (err) {
      showToast(`Failed to activate plan: ${errorMessage(err)}`);
    } finally {
      setIsSwitching(false);
    }
  };

  const handleDeletePlan = async (planId: string) => {
    if (!confirm("Are you sure you want to delete this study plan?")) return;
    try {
      await api.delete(`/study-plan/${planId}`);
      showToast("Plan deleted.");
      loadAllPlans(true);
    } catch (err) {
      showToast(`Failed to delete plan: ${errorMessage(err)}`);
    }
  };

  // Directly apply chosen strategy to active plan
  const handleSelectMode = async (mode: string) => {
    setShowComparison(false);
    if (activePlan) {
      setIsSwitching(true);
      try {
        const res = await api.post<{ plan: ActivePlan; message: string }>(
          `/study-plan/${activePlan.id}/switch-mode`,
          { mode }
        );
        if (res.data?.plan) {
          setActivePlan(res.data.plan);
          setCached(CACHE_ACTIVE, res.data.plan);
          setAllPlans((prev) =>
            prev.map((p) =>
              p.id === activePlan.id ? { ...p, mode, totalTasks: res.data.plan.totalTasks } : p
            )
          );
          showToast(`Applied ${mode.toUpperCase()} strategy! Schedule recalculated.`);
        }
      } catch (err) {
        showToast(`Failed to update strategy: ${errorMessage(err)}`);
      } finally {
        setIsSwitching(false);
      }
    } else {
      setSelectedInitialMode(mode);
      setShowConfig(true);
    }
  };

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
        const updated = {
          ...prev,
          completedTasks: completed,
          progressPercent: Math.round((completed / updatedTasks.length) * 100),
          tasks: updatedTasks,
        };
        setCached(CACHE_ACTIVE, updated);
        return updated;
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

    const updated = { ...activePlan, tasks: taskList };
    setActivePlan(updated);
    setCached(CACHE_ACTIVE, updated);
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
        {/* Toast alert */}
        {toastMessage && (
          <div className="fixed top-5 right-5 z-50 bg-[var(--accent-primary)] text-white text-xs px-4 py-2.5 rounded-lg shadow-lg flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
            <Check className="w-4 h-4" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[var(--border-default)]">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
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

          <div className="flex items-center gap-2 flex-wrap">
            {/* Multiple Saved Plans Selector */}
            {allPlans.length > 0 && (
              <div className="flex items-center gap-1.5 bg-[var(--surface-muted)] px-2.5 py-1 rounded-md border border-[var(--border-default)]">
                <span className="text-[11px] font-semibold text-[var(--text-muted)] uppercase tracking-wide">
                  Plan:
                </span>
                <select
                  aria-label="Active Study Plan"
                  value={activePlan?.id || ""}
                  onChange={(e) => handleActivatePlan(e.target.value)}
                  disabled={isSwitching}
                  className="text-xs bg-transparent text-[var(--text-primary)] font-semibold border-none focus:outline-none cursor-pointer max-w-[200px] truncate"
                >
                  {allPlans.map((p) => {
                    const subs = Array.isArray(p.subjects)
                      ? p.subjects.join(", ")
                      : typeof p.subjects === "string"
                      ? p.subjects
                      : "General";
                    return (
                      <option key={p.id} value={p.id} className="bg-[var(--bg-primary)]">
                        {p.status === "ACTIVE" ? "★ " : ""}{p.mode.toUpperCase()} · {subs} ({p.completedTasks}/{p.totalTasks})
                      </option>
                    );
                  })}
                </select>
                {allPlans.length > 1 && activePlan && (
                  <button
                    onClick={() => handleDeletePlan(activePlan.id)}
                    title="Delete this plan"
                    className="p-1 text-[var(--text-muted)] hover:text-red-400 rounded transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            )}

            <Button
              variant="outline"
              className="text-xs py-1.5 px-3"
              onClick={() => setShowComparison(true)}
            >
              <Layers className="w-3.5 h-3.5 mr-1" />
              Compare Strategies
            </Button>
            <Button
              className="text-xs py-1.5 px-3"
              onClick={() => {
                setSelectedInitialMode(activePlan?.mode || "3-2-1");
                setShowConfig(!showConfig);
              }}
            >
              {showConfig ? (
                "Close Config"
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5 mr-1" /> New Study Plan
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Plan Config Form Drawer */}
        {showConfig && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-300">
            <SchedulerConfigForm
              initialMode={selectedInitialMode}
              onPlanGenerated={(data) => {
                setActivePlan(data.plan);
                setShowConfig(false);
                showToast("New study plan generated and saved successfully!");
                loadAllPlans(true);
              }}
              onCancel={() => setShowConfig(false)}
            />
          </div>
        )}

        {/* Subject Progress Rings */}
        {activePlan && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {(activePlan.subjects || []).map((subCode) => {
              const subTasks = (activePlan.tasks || []).filter((t) => t.subjectCode === subCode);
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

        {/* Tab 1: Adaptive Schedule & To-Dos */}
        {activeTab === "plan" && (
          <div className="space-y-6">
            {loading && !activePlan && (
              <div className="flex flex-col items-center justify-center p-12 text-center">
                <RefreshCw className="w-6 h-6 animate-spin text-[var(--accent-primary)] mb-3" />
                <p className="text-xs text-[var(--text-muted)]">Loading study scheduler…</p>
              </div>
            )}

            {!loading && !activePlan && (
              <Card className="text-center p-8">
                <Calendar className="w-10 h-10 text-[var(--text-muted)] mx-auto mb-3" />
                <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-1">
                  No active study plan
                </h3>
                <p className="text-xs text-[var(--text-muted)] max-w-sm mx-auto mb-4">
                  Configure your exam date, available hours, and pacing strategy to auto-generate a
                  curriculum-aligned study schedule.
                </p>
                <Button onClick={() => setShowConfig(true)} className="text-xs">
                  <Plus className="w-3.5 h-3.5 mr-1" /> Create Your First Plan
                </Button>
              </Card>
            )}

            {dates.map((dateStr) => {
              const dayTasks = groupedTasks[dateStr];
              const isToday = dateStr === new Date().toISOString().slice(0, 10);

              return (
                <div key={dateStr} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold font-mono text-[var(--text-primary)]">
                      {dateStr}
                    </span>
                    {isToday && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                        Today
                      </span>
                    )}
                    <span className="text-[11px] text-[var(--text-muted)]">
                      ({dayTasks.length} task{dayTasks.length !== 1 ? "s" : ""})
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
            onSelectMode={handleSelectMode}
            onClose={() => setShowComparison(false)}
          />
        )}
      </div>
    </PageShell>
  );
}
