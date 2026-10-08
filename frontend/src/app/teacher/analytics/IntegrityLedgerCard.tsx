"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Badge, Card, EmptyState } from "@/components/ui";
import { CheatFlag, C } from "./types";

interface Props {
  flags: CheatFlag[];
}

function timeAgo(iso: string): string {
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return "";
  const mins = Math.max(0, Math.floor((Date.now() - then) / 60000));
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 7) return `${days}d ago`;
  return new Date(iso).toLocaleDateString();
}

const initials = (name: string) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");

const severityHex: Record<string, string> = {
  HIGH: C.error,
  MEDIUM: C.warning,
  LOW: C.info,
};

const typeChip: Record<string, "error" | "warning" | "info" | "navy"> = {
  TAB_SWITCH: "error",
  WINDOW_BLUR: "warning",
  COPY_PASTE: "warning",
  FOCUS_OUT: "info",
};

export function IntegrityLedgerCard({ flags }: Props) {
  const severityBreakdown = useMemo(() => {
    const b = [
      { severity: "HIGH", count: 0, color: C.error },
      { severity: "MEDIUM", count: 0, color: C.warning },
      { severity: "LOW", count: 0, color: C.info },
    ];
    for (const f of flags) {
      const hit = b.find((x) => x.severity === f.severity);
      if (hit) hit.count++;
    }
    return b;
  }, [flags]);

  return (
    <Card>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-display text-[17px] font-semibold text-[var(--text-primary)]">
            Integrity ledger
          </h2>
          <p className="text-[12px] text-[var(--text-muted)]">
            tab-switch & window-blur events (advisory)
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          {severityBreakdown.map((s) => (
            <span
              key={s.severity}
              className="tnum rounded-full px-2.5 py-1 text-[10px] font-bold"
              style={{ background: `${s.color}1a`, color: s.color }}
            >
              {s.severity} {s.count}
            </span>
          ))}
        </div>
      </div>

      {flags.length === 0 ? (
        <EmptyState
          title="Clean record"
          body="No tab-switch or window-blur flags recorded during tests."
        />
      ) : (
        <>
          <div className="mb-4 flex h-2 overflow-hidden rounded-full bg-[var(--bg-tertiary)]">
            {severityBreakdown.map((s) =>
              s.count > 0 ? (
                <motion.div
                  key={s.severity}
                  initial={{ width: 0 }}
                  animate={{ width: `${(s.count / flags.length) * 100}%` }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  style={{ background: s.color }}
                />
              ) : null
            )}
          </div>
          <div className="max-h-[300px] divide-y divide-[var(--border-default)] overflow-y-auto">
            {flags.map((f, i) => {
              const sevHex = severityHex[f.severity] ?? C.info;
              return (
                <motion.div
                  key={f.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.04 }}
                  className="flex items-center gap-3 py-2.5"
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
                    style={{ background: `${sevHex}1a`, color: sevHex }}
                  >
                    {initials(f.student.name)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13px] font-semibold text-[var(--text-primary)]">
                      {f.student.name}
                      {f.student.usn && (
                        <span className="ml-1.5 text-[11px] font-medium text-[var(--text-muted)]">
                          {f.student.usn}
                        </span>
                      )}
                    </p>
                    <p className="truncate text-[11px] text-[var(--text-muted)]">
                      {f.test.title}
                      <span className="mx-1">·</span>
                      <span
                        className="font-semibold"
                        style={{
                          color: typeChip[f.type]
                            ? severityHex[f.severity]
                            : C.inkMuted,
                        }}
                      >
                        {f.type}
                      </span>
                      {f.details && <span> · {f.details}</span>}
                      <span className="mx-1">·</span>
                      {timeAgo(f.createdAt)}
                    </p>
                  </div>
                  <Badge
                    tone={
                      f.severity === "HIGH"
                        ? "error"
                        : f.severity === "MEDIUM"
                        ? "warning"
                        : "info"
                    }
                  >
                    {f.severity}
                  </Badge>
                </motion.div>
              );
            })}
          </div>
        </>
      )}
    </Card>
  );
}
