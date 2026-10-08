"use client";

import React from "react";
import { CheckCircle2, Circle, GripVertical } from "lucide-react";

export interface PlanTaskItemProps {
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

interface SchedulerTaskCardProps {
  task: PlanTaskItemProps;
  onToggle: (task: PlanTaskItemProps) => void;
  onDragStart: (id: string) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (id: string) => void;
}

export function SchedulerTaskCard({
  task,
  onToggle,
  onDragStart,
  onDragOver,
  onDrop,
}: SchedulerTaskCardProps) {
  const isCompleted = task.status === "COMPLETED";

  return (
    <div
      draggable
      onDragStart={() => onDragStart(task.id)}
      onDragOver={onDragOver}
      onDrop={() => onDrop(task.id)}
      className={`p-3.5 rounded-lg border transition-all text-xs flex gap-3 ${
        isCompleted
          ? "border-[var(--border-default)] bg-[var(--surface-muted)]/40 opacity-75"
          : "border-[var(--border-default)] bg-[var(--surface-muted)] hover:border-[var(--border-hover)]"
      }`}
    >
      <button
        type="button"
        onClick={() => onToggle(task)}
        className="mt-0.5 text-[var(--accent-primary)] hover:scale-110 transition-transform shrink-0"
      >
        {isCompleted ? (
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
        ) : (
          <Circle className="w-4 h-4 text-[var(--text-muted)] hover:text-[var(--accent-primary)]" />
        )}
      </button>

      <div className="min-w-0 flex-1 space-y-1.5">
        <div className="flex items-center justify-between gap-2">
          <span
            className={`font-semibold ${
              isCompleted ? "line-through text-[var(--text-muted)]" : "text-[var(--text-primary)]"
            }`}
          >
            {task.topicName}
          </span>
          <div className="flex items-center gap-1.5 shrink-0">
            <span
              className={`px-1.5 py-0.5 rounded text-[10px] uppercase font-bold ${
                task.type === "learn"
                  ? "bg-blue-500/15 text-blue-400"
                  : task.type === "revise"
                  ? "bg-amber-500/15 text-amber-400"
                  : "bg-purple-500/15 text-purple-400"
              }`}
            >
              {task.type}
            </span>
            <span className="text-[10px] text-[var(--text-muted)]">{task.minutes}m</span>
          </div>
        </div>

        {task.todoText && (
          <p className="text-[11px] text-[var(--text-muted)]">{task.todoText}</p>
        )}

        {task.subPoints && task.subPoints.length > 0 && (
          <ul className="list-disc list-inside text-[10px] text-[var(--text-muted)] space-y-0.5 pl-1">
            {task.subPoints.map((pt, i) => (
              <li key={i} className="truncate">
                {pt}
              </li>
            ))}
          </ul>
        )}

        {task.selfCheckQuestion && (
          <div className="text-[10px] text-[var(--accent-primary)]/90 bg-[var(--surface-primary)] p-1.5 rounded mt-1">
            <span className="font-bold">Self-check: </span>
            {task.selfCheckQuestion}
          </div>
        )}
      </div>

      <GripVertical className="w-3.5 h-3.5 text-[var(--text-muted)] cursor-grab shrink-0 mt-1 opacity-40 hover:opacity-100" />
    </div>
  );
}
