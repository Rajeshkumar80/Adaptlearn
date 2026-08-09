"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarClock, Clock } from "lucide-react";
import { api, errorMessage } from "@/lib/api";
import { Button, Card, ErrorState, Input, Select, Toast } from "@/components/ui";
import { useSubjects } from "@/lib/subjects";

interface ScheduleItem {
  topicId: string;
  topicName: string;
  subjectCode: string;
  moduleNumber: number;
  priority: number;
  allocatedMinutes: number;
  reasons: string[];
}

interface PlanResponse {
  availableHoursToday: number;
  totalAllocatedMinutes: number;
  schedule: ScheduleItem[];
}

const reasonTone: Record<string, string> = {
  "low mastery": "text-error",
  "high PYQ importance": "text-brass",
  "due for review": "text-warning",
  "prerequisite unmet": "text-info",
};

export default function SchedulerPage() {
  const { subjects, loading } = useSubjects();
  const [hours, setHours] = useState("2");
  const [subjectCode, setSubjectCode] = useState("");
  const [plan, setPlan] = useState<PlanResponse | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [toast, setToast] = useState("");

  async function generate() {
    setError("");
    setBusy(true);
    try {
      const res = await api.post<PlanResponse>("/planner", {
        availableHoursToday: Number(hours),
        subjectCode: subjectCode || undefined,
      });
      setPlan(res.data);
      if (res.data.schedule.length === 0) {
        setToast("Nothing scheduled — all topics are mastered or reviewed today.");
      }
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setBusy(false);
    }
  }

  function toneFor(reason: string): string {
    const key = Object.keys(reasonTone).find((k) => reason.includes(k));
    return key ? reasonTone[key] : "text-ink-muted";
  }

  return (
    <div>
      <div className="mb-6 border-b border-hairline pb-4">
        <h1 className="font-display text-[26px] font-semibold text-ink">Scheduler</h1>
        <p className="mt-1 text-[13px] text-ink-muted">
          Tell the planner how many hours you can study today — it allocates time
          by mastery, PYQ importance, prerequisites, and your forgetting curve.
        </p>
      </div>

      <Card className="mb-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
              Hours today
            </label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
              <Input
                type="number"
                min={0.25}
                max={16}
                step={0.25}
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
              Subject (optional)
            </label>
            <Select value={subjectCode} onChange={(e) => setSubjectCode(e.target.value)}>
              <option value="">All subjects</option>
              {loading ? (
                <option disabled>Loading…</option>
              ) : (
                subjects.map((s) => (
                  <option key={s.code} value={s.code}>
                    {s.code} — {s.name}
                  </option>
                ))
              )}
            </Select>
          </div>
          <div className="flex items-end">
            <Button onClick={generate} disabled={busy} className="w-full">
              <CalendarClock className="h-4 w-4" />
              {busy ? "Planning…" : "Generate plan"}
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
        >
          <div className="mb-4 flex items-center gap-3">
            <p className="text-[13px] text-ink-muted">
              {plan.availableHoursToday} hours →{" "}
              <span className="tnum font-semibold text-navy">
                {plan.totalAllocatedMinutes} minutes
              </span>{" "}
              of focused study
            </p>
          </div>
          <div className="ledger-card divide-y divide-hairline">
            {plan.schedule.length === 0 && (
              <p className="px-4 py-6 text-center text-[13px] text-ink-muted">
                Nothing scheduled today.
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
                    {item.subjectCode} · Module {item.moduleNumber}
                  </p>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {item.reasons.map((r) => (
                      <span
                        key={r}
                        className={`text-[11px] ${toneFor(r)}`}
                      >
                        · {r}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <p className="tnum font-display text-[18px] font-semibold text-navy">
                    {item.allocatedMinutes}
                    <span className="ml-0.5 text-[11px] font-normal text-ink-muted">min</span>
                  </p>
                  <p className="tnum text-[11px] text-ink-muted">
                    pri {item.priority.toFixed(3)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {toast && (
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.24 }}
        >
          <Toast kind="info">{toast}</Toast>
        </motion.div>
      )}
    </div>
  );
}
