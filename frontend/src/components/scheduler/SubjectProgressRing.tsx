"use client";

import React from "react";

interface SubjectProgressRingProps {
  code: string;
  name: string;
  percent: number;
  completedTasks: number;
  totalTasks: number;
}

export function SubjectProgressRing({
  code,
  name,
  percent,
  completedTasks,
  totalTasks,
}: SubjectProgressRingProps) {
  const safePercent = Math.max(0, Math.min(100, isNaN(percent) ? 0 : percent));
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (safePercent / 100) * circumference;

  return (
    <div className="flex items-center gap-3 p-3 rounded-lg border border-[var(--border-default)] bg-[var(--surface-muted)]">
      <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
        <svg className="w-16 h-16 transform -rotate-90">
          <circle
            cx="32"
            cy="32"
            r={radius}
            stroke="var(--border-default)"
            strokeWidth="5"
            fill="transparent"
          />
          <circle
            cx="32"
            cy="32"
            r={radius}
            stroke="var(--accent-primary)"
            strokeWidth="5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-500 ease-out"
          />
        </svg>
        <div className="absolute text-center">
          <span className="text-xs font-bold text-[var(--text-primary)] font-display">
            {safePercent}%
          </span>
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-[var(--accent-primary)]">{code}</span>
          <span className="text-[10px] text-[var(--text-muted)]">
            {completedTasks}/{totalTasks} tasks
          </span>
        </div>
        <p className="text-xs font-medium text-[var(--text-primary)] truncate mt-0.5">{name}</p>
        <div className="w-full bg-[var(--surface-primary)] h-1 rounded-full mt-2 overflow-hidden">
          <div
            className="bg-[var(--accent-primary)] h-full transition-all duration-500"
            style={{ width: `${safePercent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
