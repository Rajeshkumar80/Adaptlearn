"use client";

import React, { useState, useEffect } from "react";
import { api, errorMessage, BACKEND_URL, getToken } from "@/lib/api";
import { io } from "socket.io-client";
import { Card, Badge, LoadingRows } from "@/components/ui";
import { Lock, Unlock, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";

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

interface MergedRoadmapGraphProps {
  subjectCode: string;
  onTopicTicked?: () => void;
}

export function MergedRoadmapGraph({ subjectCode, onTopicTicked }: MergedRoadmapGraphProps) {
  const [topics, setTopics] = useState<RoadmapTopic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [unlockedPulse, setUnlockedPulse] = useState<string | null>(null);

  const loadRoadmap = () => {
    if (!subjectCode) return;
    setLoading(true);
    api.get<{ roadmap: RoadmapTopic[] }>(`/roadmap/${subjectCode}`)
      .then((res) => setTopics(res.data.roadmap || []))
      .catch((err) => setError(errorMessage(err)))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadRoadmap();
  }, [subjectCode]);

  // Socket.IO live unlock event listener with pulse animation
  useEffect(() => {
    const socket = io(BACKEND_URL, { auth: { token: getToken() } });
    socket.on("topic-unlocked", (payload: { topicId: string; name: string }) => {
      setTopics((prev) =>
        prev.map((t) => (t.id === payload.topicId ? { ...t, locked: false, lockedBy: [] } : t))
      );
      setUnlockedPulse(payload.topicId);
      setTimeout(() => setUnlockedPulse(null), 2500);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  if (loading) return <LoadingRows rows={3} />;
  if (error) return <div className="text-sm text-red-400 p-4 border border-red-500/20 rounded-lg">{error}</div>;

  // Group by module
  const modules = Array.from(new Set(topics.map((t) => t.moduleNumber))).sort((a, b) => a - b);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-[var(--text-primary)]">
            Prerequisite Knowledge Graph · {subjectCode}
          </h3>
          <p className="text-xs text-[var(--text-muted)] mt-0.5">
            Topics unlock automatically as prerequisites reach 70%+ mastery.
          </p>
        </div>
        <Badge tone="navy" className="text-xs flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-[var(--accent-primary)]" />
          Live Socket.IO Sync
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((modNum) => {
          const modTopics = topics.filter((t) => t.moduleNumber === modNum);
          return (
            <Card key={modNum} className="p-4 border-[var(--border-default)]">
              <div className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)] mb-3 pb-2 border-b border-[var(--border-default)]">
                Module {modNum}
              </div>
              <div className="space-y-2.5">
                {modTopics.map((topic) => {
                  const isPulsing = unlockedPulse === topic.id;
                  const masteryPct = Math.round((topic.mastery || 0) * 100);

                  return (
                    <div
                      key={topic.id}
                      className={`p-3 rounded-lg border text-xs transition-all ${
                        isPulsing
                          ? "border-emerald-400 bg-emerald-500/15 ring-2 ring-emerald-400 animate-pulse scale-[1.02]"
                          : topic.locked
                          ? "border-[var(--border-default)] bg-[var(--surface-muted)]/50 opacity-70"
                          : "border-[var(--border-default)] bg-[var(--surface-muted)] hover:border-[var(--accent-primary)]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-1.5 font-semibold text-[var(--text-primary)]">
                          {topic.locked ? (
                            <Lock className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0" />
                          ) : (
                            <Unlock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          )}
                          <span className="truncate">{topic.name}</span>
                        </div>
                        <span className="text-[10px] font-mono shrink-0 px-1.5 py-0.5 rounded bg-[var(--surface-primary)] text-[var(--accent-primary)]">
                          PYQ {topic.pyqImportance}%
                        </span>
                      </div>

                      {topic.locked && topic.lockedBy.length > 0 && (
                        <div className="text-[10px] text-amber-400/90 mt-1.5 flex items-center gap-1">
                          <span>Requires: {topic.lockedBy.join(", ")}</span>
                        </div>
                      )}

                      <div className="mt-2.5 flex items-center justify-between text-[10px] text-[var(--text-muted)]">
                        <span>Mastery</span>
                        <span className="font-semibold text-[var(--text-primary)]">{masteryPct}%</span>
                      </div>
                      <div className="w-full bg-[var(--surface-primary)] h-1 rounded-full mt-1 overflow-hidden">
                        <div
                          className={`h-full transition-all duration-300 ${
                            masteryPct >= 70 ? "bg-emerald-400" : "bg-[var(--accent-primary)]"
                          }`}
                          style={{ width: `${masteryPct}%` }}
                        />
                      </div>

                      <div className="mt-2 flex items-center justify-between text-[10px] text-[var(--text-muted)]">
                        <span>Sub-topics</span>
                        <span>
                          {topic.subTopicsDone}/{topic.subTopicsTotal} done
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
