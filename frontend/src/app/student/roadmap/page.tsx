"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Lock, Unlock, Route } from "lucide-react";
import { api, errorMessage } from "@/lib/api";
import {
  Badge,
  EmptyState,
  ErrorState,
  LoadingRows,
  MasteryBar,
  PageTitle,
  Select,
} from "@/components/ui";
import { useSubjects } from "@/lib/subjects";

interface RoadmapTopic {
  id: string;
  name: string;
  moduleNumber: number;
  order: number;
  pyqImportance: number;
  mastery: number;
  locked: boolean;
  lockedBy: string[];
}

export default function RoadmapPage() {
  const { subjects, loading: subjectsLoading } = useSubjects();
  const [subjectCode, setSubjectCode] = useState("");
  const [roadmap, setRoadmap] = useState<RoadmapTopic[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (subjects.length > 0 && !subjectCode) setSubjectCode(subjects[0].code);
  }, [subjects, subjectCode]);

  useEffect(() => {
    if (!subjectCode) return;
    setLoading(true);
    setError("");
    api
      .get<{ roadmap: RoadmapTopic[] }>(`/roadmap/${subjectCode}`)
      .then((res) => setRoadmap(res.data.roadmap))
      .catch((err) => setError(errorMessage(err)))
      .finally(() => setLoading(false));
  }, [subjectCode]);

  const byModule = roadmap.reduce<Record<number, RoadmapTopic[]>>((acc, t) => {
    (acc[t.moduleNumber] ||= []).push(t);
    return acc;
  }, {});

  const total = roadmap.length;
  const unlocked = roadmap.filter((t) => !t.locked).length;

  return (
    <div>
      <PageTitle
        title="Roadmap"
        subtitle="Prerequisite-gated path through the syllabus — master a module to unlock the next."
        right={
          <div className="w-56">
            <Select value={subjectCode} onChange={(e) => setSubjectCode(e.target.value)}>
              {subjectsLoading ? (
                <option>Loading…</option>
              ) : (
                subjects.map((s) => (
                  <option key={s.code} value={s.code}>
                    {s.code} — {s.name}
                  </option>
                ))
              )}
            </Select>
          </div>
        }
      />

      {total > 0 && (
        <p className="mb-4 text-[13px] text-ink-muted">
          <span className="font-semibold text-navy">{unlocked}</span> of {total}{" "}
          topics unlocked
        </p>
      )}

      {loading ? (
        <LoadingRows rows={5} />
      ) : error ? (
        <ErrorState message={error} />
      ) : roadmap.length === 0 ? (
        <EmptyState
          title="No roadmap"
          body="No topics were found for this subject."
        />
      ) : (
        <div className="space-y-5">
          {Object.entries(byModule).map(([module, topics]) => (
            <div key={module}>
              <h2 className="font-display mb-2 text-[16px] font-semibold text-navy">
                Module {module}
              </h2>
              <div className="ledger-card divide-y divide-hairline">
                {topics.map((t) => (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.18 }}
                    className="flex items-center gap-4 px-4 py-3"
                  >
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
                        t.locked
                          ? "border-hairline text-ink-muted"
                          : t.mastery >= 0.7
                            ? "border-success bg-success-soft text-success"
                            : "border-brass bg-warning-soft text-brass"
                      }`}
                    >
                      {t.locked ? (
                        <Lock className="h-3.5 w-3.5" />
                      ) : (
                        <Unlock className="h-3.5 w-3.5" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p
                        className={`truncate text-[13px] font-semibold ${
                          t.locked ? "text-ink-muted" : "text-ink"
                        }`}
                      >
                        {t.name}
                      </p>
                      <p className="text-[11px] text-ink-muted">
                        {t.locked
                          ? `Locked — master: ${t.lockedBy.join(", ")}`
                          : `PYQ importance ${Math.round(t.pyqImportance)}%`}
                      </p>
                    </div>
                    {t.mastery >= 0.7 && !t.locked ? (
                      <Badge tone="success">Mastered</Badge>
                    ) : !t.locked ? (
                      <div className="flex items-center gap-3">
                        <MasteryBar value={t.mastery} />
                      </div>
                    ) : null}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
