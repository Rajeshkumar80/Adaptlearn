"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Loader2, Lock, Unlock } from "lucide-react";
import { io } from "socket.io-client";
import { api, errorMessage, BACKEND_URL, getToken } from "@/lib/api";
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
  subTopicsTotal: number;
  subTopicsDone: number;
}

interface SubTopicItem {
  id: string;
  title: string;
  orderIndex: number;
  completed: boolean;
}

export default function RoadmapPage() {
  const { subjects, loading: subjectsLoading } = useSubjects();
  const [subjectCode, setSubjectCode] = useState("");
  const [roadmap, setRoadmap] = useState<RoadmapTopic[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const [expandedTopicId, setExpandedTopicId] = useState<string | null>(null);
  const [checklists, setChecklists] = useState<Record<string, SubTopicItem[]>>({});
  const [checklistLoading, setChecklistLoading] = useState<Record<string, boolean>>({});
  const [checklistError, setChecklistError] = useState("");
  const inFlight = useRef<Set<string>>(new Set());
  const [pulseMap, setPulseMap] = useState<Record<string, number>>({});

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

  // live unlock events -> update roadmap + pulse the new card
  useEffect(() => {
    const socket = io(BACKEND_URL, { auth: { token: getToken() } });
    socket.on("topic-unlocked", (payload: { topicId: string; name: string }) => {
      setRoadmap((prev) =>
        prev.map((t) => (t.id === payload.topicId ? { ...t, locked: false, lockedBy: [] } : t))
      );
      pulseTopic(payload.topicId);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  function pulseTopic(topicId: string) {
    setPulseMap((prev) => ({ ...prev, [topicId]: Date.now() }));
    setTimeout(() => {
      setPulseMap((prev) => {
        const next = { ...prev };
        delete next[topicId];
        return next;
      });
    }, 1600);
  }

  function unlockTopic(topicId: string) {
    setRoadmap((prev) =>
      prev.map((t) => (t.id === topicId ? { ...t, locked: false, lockedBy: [] } : t))
    );
    pulseTopic(topicId);
  }

  function openChecklist(topicId: string) {
    if (checklists[topicId]) {
      setExpandedTopicId((cur) => (cur === topicId ? null : topicId));
      return;
    }
    setExpandedTopicId(topicId);
    setChecklistLoading((prev) => ({ ...prev, [topicId]: true }));
    setChecklistError("");
    api
      .get<{ topic: RoadmapTopic; subTopics: SubTopicItem[] }>(`/topics/${topicId}/subtopics`)
      .then((res) => {
        setChecklists((prev) => ({ ...prev, [topicId]: res.data.subTopics }));
        setRoadmap((prev) =>
          prev.map((t) =>
            t.id === topicId
              ? { ...t, subTopicsTotal: res.data.subTopics.length }
              : t
          )
        );
      })
      .catch((err) => {
        setChecklistError(errorMessage(err));
        setExpandedTopicId(null);
      })
      .finally(() => setChecklistLoading((prev) => ({ ...prev, [topicId]: false })));
  }

  function applyDone(topicId: string, items: SubTopicItem[]) {
    setRoadmap((prev) =>
      prev.map((t) =>
        t.id === topicId ? { ...t, subTopicsDone: items.filter((i) => i.completed).length } : t
      )
    );
  }

  async function toggleSubTopic(topicId: string, item: SubTopicItem) {
    if (inFlight.current.has(item.id)) return;
    inFlight.current.add(item.id);
    const optimistic = { ...item, completed: !item.completed };
    const optimisticItems = (checklists[topicId] || []).map((s) =>
      s.id === item.id ? optimistic : s
    );
    setChecklists((prev) => ({ ...prev, [topicId]: optimisticItems }));
    applyDone(topicId, optimisticItems);
    try {
      const res = await api.post<{
        completed: boolean;
        topicMastered: boolean;
        unlocked: { id: string; name: string }[];
      }>(`/topics/${item.id}/toggle`);
      const serverItems = optimisticItems.map((s) =>
        s.id === item.id ? { ...s, completed: res.data.completed } : s
      );
      setChecklists((prev) => ({ ...prev, [topicId]: serverItems }));
      setRoadmap((prev) =>
        prev.map((t) =>
          t.id === topicId
            ? {
                ...t,
                subTopicsDone: serverItems.filter((i) => i.completed).length,
                mastery: res.data.topicMastered ? 1 : t.mastery,
              }
            : t
        )
      );
      for (const u of res.data.unlocked) unlockTopic(u.id);
    } catch (err) {
      setChecklistError(errorMessage(err));
      const rollbackItems = (checklists[topicId] || []).map((s) =>
        s.id === item.id ? item : s
      );
      setChecklists((prev) => ({ ...prev, [topicId]: rollbackItems }));
      applyDone(topicId, rollbackItems);
    } finally {
      inFlight.current.delete(item.id);
    }
  }

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
        subtitle="Prerequisite-gated path through the syllabus — tick off sub-topics to master a topic and unlock the next module."
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
                    variants={{
                      idle: { opacity: 1, y: 0 },
                      pulse: {
                        opacity: 1,
                        y: 0,
                        backgroundColor: ["#f3e8da", "rgba(243,232,218,0)"],
                        transition: { duration: 1.5, ease: "easeOut" },
                      },
                    }}
                    animate={pulseMap[t.id] ? "pulse" : "idle"}
                  >
                    <button
                      onClick={() => !t.locked && openChecklist(t.id)}
                      disabled={t.locked}
                      className={`flex w-full items-center gap-4 px-4 py-3 text-left ${
                        t.locked ? "cursor-not-allowed" : "cursor-pointer hover:bg-ink/[0.02]"
                      }`}
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
                        ) : t.mastery >= 0.7 ? (
                          <Check className="h-3.5 w-3.5" strokeWidth={3} />
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
                          {t.subTopicsTotal > 0 && (
                            <Badge tone="brass">
                              {t.subTopicsDone}/{t.subTopicsTotal} sub-topics
                            </Badge>
                          )}
                          <MasteryBar value={t.mastery} />
                          <ChevronDown
                            className={`h-4 w-4 text-ink-muted transition-transform ${
                              expandedTopicId === t.id ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      ) : null}
                    </button>

                    <AnimatePresence initial={false}>
                      {expandedTopicId === t.id && !t.locked && (
                        <motion.div
                          key="checklist"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-hairline bg-ink/[0.03] px-4 py-3">
                            {checklistLoading[t.id] ? (
                              <div className="flex items-center gap-2 py-2 text-[12px] text-ink-muted">
                                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                                Loading sub-topics…
                              </div>
                            ) : checklistError ? (
                              <p className="py-1 text-[12px] text-error">{checklistError}</p>
                            ) : (
                              <>
                                <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
                                  {t.subTopicsDone}/{t.subTopicsTotal} completed
                                </p>
                                <div className="divide-y divide-hairline/60">
                                  {(checklists[t.id] || []).map((item) => (
                                    <CheckRow
                                      key={item.id}
                                      item={item}
                                      onToggle={() => toggleSubTopic(t.id, item)}
                                      disabled={inFlight.current.has(item.id)}
                                    />
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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

function CheckRow({
  item,
  onToggle,
  disabled,
}: {
  item: SubTopicItem;
  onToggle: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onToggle}
      disabled={disabled}
      className="group flex w-full items-center gap-3 py-2 text-left"
    >
      <span
        className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[2px] border transition-colors ${
          item.completed
            ? "border-success bg-success text-white"
            : "border-hairline bg-paper group-hover:border-brass"
        }`}
      >
        <AnimatePresence>
          {item.completed && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 25 }}
            >
              <Check className="h-3 w-3" strokeWidth={3} />
            </motion.span>
          )}
        </AnimatePresence>
      </span>
      <span
        className={`text-[13px] ${item.completed ? "text-ink-muted line-through" : "text-ink"}`}
      >
        {item.title}
      </span>
    </button>
  );
}