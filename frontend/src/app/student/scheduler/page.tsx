"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarClock, Clock, Check, Trash2 } from "lucide-react";
import { api, errorMessage } from "@/lib/api";
import { Button, Card, EmptyState, ErrorState, Input, Select } from "@/components/ui";
import { useSubjects } from "@/lib/subjects";

interface ScheduleItem {
  topicId: string;
  topicName: string;
  subjectCode: string;
  moduleNumber: number | null;
  priority: number;
  allocatedMinutes: number;
  reasons: string[];
}

interface PlanResponse {
  subjectCode: string;
  moduleNumber: number | null;
  totalAllocatedMinutes: number;
  created: number;
  schedule: ScheduleItem[];
}

interface StudyTask {
  id: string;
  subjectCode: string;
  subjectName: string;
  moduleNumber: number | null;
  topicName: string;
  minutes: number;
  date: string;
  done: boolean;
  order: number;
}

export default function SchedulerPage() {
  const { subjects, loading } = useSubjects();
  const [semester, setSemester] = useState(5);
  const [subjectCode, setSubjectCode] = useState("");
  const [moduleNumber, setModuleNumber] = useState("");
  const [minutes, setMinutes] = useState("60");
  const [plan, setPlan] = useState<PlanResponse | null>(null);
  const [tasks, setTasks] = useState<StudyTask[]>([]);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const semSubjects = subjects.filter((s) => s.semester === semester);
  const semesters = Array.from(new Set(subjects.map((s) => s.semester))).sort((a, b) => a - b);

  useEffect(() => {
    api
      .get<{ tasks: StudyTask[] }>("/planner")
      .then((res) => setTasks(res.data.tasks))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (semSubjects.length > 0 && !semSubjects.some((s) => s.code === subjectCode)) {
      setSubjectCode(semSubjects[0].code);
      setModuleNumber("");
    }
  }, [semSubjects, subjectCode]);

  async function generate() {
    setError("");
    setBusy(true);
    try {
      const res = await api.post<PlanResponse>("/planner", {
        subjectCode,
        moduleNumber: moduleNumber ? Number(moduleNumber) : undefined,
        minutes: Number(minutes),
      });
      setPlan(res.data);
      const list = await api.get<{ tasks: StudyTask[] }>("/planner");
      setTasks(list.data.tasks);
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setBusy(false);
    }
  }

  async function toggleDone(task: StudyTask) {
    await api.patch(`/planner/${task.id}`, { done: !task.done });
    setTasks((ts) => ts.map((t) => (t.id === task.id ? { ...t, done: !t.done } : t)));
  }

  async function removeTask(task: StudyTask) {
    await api.delete(`/planner/${task.id}`);
    setTasks((ts) => ts.filter((t) => t.id !== task.id));
  }

  const moduleOptions = subjects.find((s) => s.code === subjectCode)?.modules ?? [];
  const open = tasks.filter((t) => !t.done);
  const done = tasks.filter((t) => t.done);
  const totalMin = tasks.reduce((s, t) => s + (t.done ? 0 : t.minutes), 0);

  return (
    <div>
      <div className="mb-6 border-b border-hairline pb-4">
        <h1 className="font-display text-[26px] font-semibold text-ink">Scheduler</h1>
        <p className="mt-1 text-[13px] text-ink-muted">
          Pick a subject (and module) and how many minutes you want to study — the
          planner divides the time across that scope&apos;s topics by mastery, PYQ
          importance, prerequisites, and your forgetting curve. Tasks persist and
          you can tick them off as you finish.
        </p>
      </div>

      <Card className="mb-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
              Semester
            </label>
            <Select
              value={semester}
              onChange={(e) => {
                setSemester(Number(e.target.value));
                setSubjectCode("");
                setModuleNumber("");
              }}
            >
              {semesters.map((sem) => (
                <option key={sem} value={sem}>
                  Sem {sem}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
              Subject
            </label>
            <Select
              value={subjectCode}
              onChange={(e) => {
                setSubjectCode(e.target.value);
                setModuleNumber("");
              }}
            >
              {loading ? (
                <option disabled>Loading…</option>
              ) : semSubjects.length === 0 ? (
                <option value="">No subjects for Sem {semester}</option>
              ) : (
                semSubjects.map((s) => (
                  <option key={s.code} value={s.code}>
                    {s.code} — {s.name}
                  </option>
                ))
              )}
            </Select>
          </div>
          <div>
            <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
              Module (optional)
            </label>
            <Select value={moduleNumber} onChange={(e) => setModuleNumber(e.target.value)}>
              <option value="">All modules</option>
              {moduleOptions.map((m) => (
                <option key={m.id} value={m.moduleNumber}>
                  Module {m.moduleNumber} — {m.name}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
              Minutes to study
            </label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
              <Input
                type="number"
                min={10}
                max={600}
                step={5}
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
          <div className="flex items-end">
            <Button onClick={generate} disabled={busy || !subjectCode} className="w-full">
              <CalendarClock className="h-4 w-4" />
              {busy ? "Planning…" : "Plan session"}
            </Button>
          </div>
        </div>
      </Card>

      {error && <ErrorState message={error} onRetry={generate} />}

      {plan && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="mb-8"
        >
          <div className="mb-4 flex items-center gap-3">
            <p className="text-[13px] text-ink-muted">
              {plan.subjectCode}
              {plan.moduleNumber ? ` · Module ${plan.moduleNumber}` : " · all modules"} →{" "}
              <span className="tnum font-semibold text-navy">
                {plan.totalAllocatedMinutes} minutes
              </span>{" "}
              across {plan.schedule.length} topics
              {plan.created > 0
                ? ` · ${plan.created} new task${plan.created > 1 ? "s" : ""} added`
                : " · everything already planned for today"}
            </p>
          </div>
          <div className="ledger-card divide-y divide-hairline">
            {plan.schedule.length === 0 && (
              <p className="px-4 py-6 text-center text-[13px] text-ink-muted">
                Nothing scheduled — no topics found in this scope.
              </p>
            )}
            {plan.schedule.map((item, i) => (
              <div key={item.topicId} className="flex flex-wrap items-center gap-3 px-4 py-3">
                <span className="tnum w-7 text-[13px] font-semibold text-brass">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-semibold text-ink">
                    {item.topicName}
                  </p>
                  <p className="text-[11px] text-ink-muted">
                    {item.subjectCode}
                    {item.moduleNumber ? ` · Module ${item.moduleNumber}` : ""}
                    {item.reasons.length > 0 && ` · ${item.reasons.join(", ")}`}
                  </p>
                </div>
                <div className="text-right">
                  <p className="tnum font-display text-[18px] font-semibold text-navy">
                    {item.allocatedMinutes}
                    <span className="ml-0.5 text-[11px] font-normal text-ink-muted">min</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-display text-[18px] font-semibold text-ink">Today&apos;s plan</h2>
        <p className="text-[12px] text-ink-muted">
          {open.length} open · {done.length} done ·{" "}
          <span className="tnum font-semibold text-navy">{totalMin} min</span> remaining
        </p>
      </div>

      {tasks.length === 0 ? (
        <EmptyState
          title="Nothing planned yet"
          body="Pick a subject above, set your minutes, and the planner builds today's list."
        />
      ) : (
        <div className="ledger-card divide-y divide-hairline">
          {[...open, ...done].map((task) => (
            <div
              key={task.id}
              className={`flex items-center gap-3 px-4 py-3 ${
                task.done ? "opacity-50" : ""
              }`}
            >
              <button
                onClick={() => toggleDone(task)}
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-[2px] border transition-colors ${
                  task.done
                    ? "border-brass bg-brass text-paper"
                    : "border-hairline text-transparent hover:border-brass"
                }`}
                title={task.done ? "Mark not done" : "Mark done"}
              >
                <Check className="h-4 w-4" />
              </button>
              <div className="min-w-0 flex-1">
                <p
                  className={`truncate text-[13px] font-semibold ${
                    task.done ? "text-ink-muted line-through" : "text-ink"
                  }`}
                >
                  {task.topicName}
                </p>
                <p className="text-[11px] text-ink-muted">
                  {task.subjectCode} — {task.subjectName}
                  {task.moduleNumber ? ` · Module ${task.moduleNumber}` : ""} ·{" "}
                  {new Date(task.date).toLocaleDateString()}
                </p>
              </div>
              <span className="tnum shrink-0 text-[13px] font-semibold text-navy">
                {task.minutes} min
              </span>
              <button
                onClick={() => removeTask(task)}
                className="shrink-0 text-ink-muted transition-colors hover:text-error"
                title="Remove task"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
