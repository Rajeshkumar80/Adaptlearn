"use client";

import {
  useState, useRef, useEffect, useMemo, useCallback,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send, Square, Sparkles, Plus, Trash2, MessageSquare,
  ChevronLeft, ChevronRight, ChevronDown, Copy, Check,
  BookOpen, ChevronsDown, Search, Brain, FileSearch,
  PenLine, CheckCircle2,
} from "lucide-react";
import { api, errorMessage } from "@/lib/api";
import { useAuth } from "@/lib/auth";
import QuizCard, { QuizQuestion } from "./QuizCard";
import AnswerRenderer, { PYQItem } from "./AnswerRenderer";

// ── types ─────────────────────────────────────────────────────────────────────
interface ChatMessage {
  role: "user" | "assistant";
  content: string | Record<string, unknown>;
  thinking?: string;
  thinkingMs?: number;
  chunks?: { id: string; title: string; similarity: number; moduleNumber: number | null }[];
  diagrams?: { tag: string; url: string; topic: string; caption: string }[];
  quiz?: { topicId: string | null; questions: QuizQuestion[] };
  pyqList?: PYQItem[];
  previousYearQuestions?: PYQItem[];
  modelPaperQuestions?: PYQItem[];
  isImportantTopic?: boolean;
  importanceSummary?: string;
  isStreaming?: boolean;
}

interface SessionSummary {
  id: string;
  title: string;
  subjectCode: string | null;
  moduleNumber: number | null;
  messageCount: number;
  updatedAt: string;
}

type Phase = "idle" | "submitted" | "thinking" | "writing";

// ── session grouping ───────────────────────────────────────────────────────────
function groupSessions(sessions: SessionSummary[]) {
  const now  = Date.now();
  const DAY  = 86_400_000;
  const groups: { label: string; items: SessionSummary[] }[] = [
    { label: "Today",      items: [] },
    { label: "Last 7 days",items: [] },
    { label: "Older",      items: [] },
  ];
  for (const s of sessions) {
    const age = now - new Date(s.updatedAt).getTime();
    if (age < DAY)         groups[0].items.push(s);
    else if (age < 7*DAY)  groups[1].items.push(s);
    else                   groups[2].items.push(s);
  }
  return groups.filter(g => g.items.length > 0);
}

// ── Step Timeline ─────────────────────────────────────────────────────────────
const PHASE_STEPS = [
  { key: "understand", label: "Understand", icon: Brain },
  { key: "search",     label: "Search",     icon: FileSearch },
  { key: "write",      label: "Write",      icon: PenLine },
  { key: "verify",     label: "Verify",     icon: CheckCircle2 },
] as const;

type StepKey = typeof PHASE_STEPS[number]["key"];

function phaseToStep(phase: Phase): StepKey | null {
  switch (phase) {
    case "submitted": return "understand";
    case "thinking":  return "search";
    case "writing":   return "write";
    case "idle":      return null;
  }
}

function StepTimeline({ phase }: { phase: Phase }) {
  const activeStep = phaseToStep(phase);
  const activeIdx = activeStep
    ? PHASE_STEPS.findIndex(s => s.key === activeStep)
    : -1;

  return (
    <div className="flex items-center gap-1">
      {PHASE_STEPS.map((step, i) => {
        const Icon = step.icon;
        const isActive = i === activeIdx;
        const isDone = activeIdx > i;
        const isFuture = activeIdx < i;

        return (
          <div key={step.key} className="flex items-center gap-1">
            <motion.div
              className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider transition-colors ${
                isActive
                  ? "bg-[var(--accent-primary)] text-white"
                  : isDone
                    ? "bg-[var(--status-running-soft)] text-[var(--status-running)]"
                    : "bg-[var(--bg-tertiary)] text-[var(--text-muted)]"
              }`}
              animate={isActive ? { scale: [1, 1.04, 1] } : {}}
              transition={isActive ? { duration: 1.2, repeat: Infinity, ease: "easeInOut" } : {}}
            >
              <Icon className="h-3 w-3" />
              <span className="hidden sm:inline">{step.label}</span>
            </motion.div>
            {i < PHASE_STEPS.length - 1 && (
              <div
                className={`h-px w-3 transition-colors ${
                  isDone ? "bg-[var(--status-running)]" : isFuture ? "bg-hairline" : "bg-[var(--accent-primary)]"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── BreathingOrb ──────────────────────────────────────────────────────────────
function BreathingOrb({ phase }: { phase: "thinking" | "writing" | "idle" }) {
  if (phase === "idle") return null;
  const color = phase === "thinking"
    ? "from-navy to-navy-soft"
    : "from-brass to-warning-soft";
  return (
    <motion.span
      className={`inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-br ${color}`}
      animate={{ scale: [1, 1.18, 1] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    />
  );
}

// ── ThinkingPanel ─────────────────────────────────────────────────────────────
function ThinkingPanel({
  text, active, ms,
}: { text: string; active: boolean; ms?: number }) {
  const [open, setOpen] = useState(true);

  // auto-collapse when answer starts
  useEffect(() => {
    if (!active) {
      const t = setTimeout(() => setOpen(false), 600);
      return () => clearTimeout(t);
    }
  }, [active]);

  const label = active
    ? "Thinking…"
    : `Thought for ${ms != null ? (ms / 1000).toFixed(1) : "?"}s`;

  return (
    <div className="thinking-panel mb-3">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="flex w-full items-center gap-2 px-3 py-2 text-left"
      >
        <BreathingOrb phase={active ? "thinking" : "idle"} />
        {!active && <span className="h-2 w-2 rounded-full bg-[var(--status-running)]" />}
        <span className="flex-1 text-[11px] font-semibold uppercase tracking-widest text-[var(--text-muted)]">
          {label}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-3.5 w-3.5 text-[var(--text-muted)]" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            style={{ overflow: "hidden" }}
          >
            <pre className="thinking-body">
              {text || "…"}
            </pre>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── ToolChip ──────────────────────────────────────────────────────────────────
function ToolChip({ label, done, durationMs }: {
  label: string;
  done: boolean;
  durationMs?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      className={`mb-2 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${
        done
          ? "border-[var(--status-running)]-soft bg-[var(--status-running-soft)] text-[var(--status-running)]"
          : "border-[var(--border-default)] bg-[var(--bg-secondary)] text-[var(--text-muted)]"
      }`}
    >
      {done ? (
        <Check className="h-3 w-3" />
      ) : (
        <motion.span
          className="inline-block h-3 w-3 rounded-full border-2 border-[var(--accent-primary)] border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        />
      )}
      <span>{label}</span>
      {done && durationMs != null && (
        <span className="text-[10px] opacity-70">
          {(durationMs / 1000).toFixed(1)}s
        </span>
      )}
    </motion.div>
  );
}

// ── CopyButton ────────────────────────────────────────────────────────────────
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  function copy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }
  return (
    <button
      onClick={copy}
      className="flex items-center gap-1 rounded px-2 py-1 text-[11px] text-[var(--text-muted)] transition-colors hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)]"
      title="Copy answer"
    >
      {copied ? <Check className="h-3 w-3 text-[var(--status-running)]" /> : <Copy className="h-3 w-3" />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

// ── Elapsed Timer ─────────────────────────────────────────────────────────────
function ElapsedTimer({ ms }: { ms: number }) {
  const secs = (ms / 1000).toFixed(1);
  return (
    <span className="tnum text-[11px] tabular-nums text-[var(--text-muted)]">
      {secs}s
    </span>
  );
}

// ── main page ─────────────────────────────────────────────────────────────────
export default function TutorPage() {
  const { user } = useAuth();

  // chat state
  const [messages,  setMessages]  = useState<ChatMessage[]>([]);
  const [sessions,  setSessions]  = useState<SessionSummary[]>([]);
  const [activeId,  setActiveId]  = useState<string | null>(null);
  const [question,  setQuestion]  = useState("");
  const [chatLoading,setChatLoading] = useState(false);

  // thinking / streaming state
  const [phase,       setPhase]       = useState<Phase>("idle");
  const [thinkingText,setThinkingText]= useState("");
  const [thinkingMs,  setThinkingMs]  = useState(0);
  const [searchDone,  setSearchDone]  = useState(false);
  const [searchMs,    setSearchMs]    = useState(0);
  const thinkTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const thinkStartRef = useRef(0);
  const abortRef      = useRef<AbortController | null>(null);

  // scroll
  const scrollRef     = useRef<HTMLDivElement>(null);
  const bottomRef     = useRef<HTMLDivElement>(null);
  const [showJump,    setShowJump]    = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQ,     setSearchQ]     = useState("");

  // ── derived ──────────────────────────────────────────────────────────────
  const filteredSessions = useMemo(
    () => sessions.filter(s =>
      !searchQ || s.title.toLowerCase().includes(searchQ.toLowerCase())
    ),
    [sessions, searchQ]
  );
  const grouped = useMemo(() => groupSessions(filteredSessions), [filteredSessions]);
  const busy = phase !== "idle";

  // ── init ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    api.get<{ sessions: SessionSummary[] }>("/chat")
      .then(res => setSessions(res.data.sessions))
      .catch(() => {});
  }, []);

  // ── auto-scroll ───────────────────────────────────────────────────────────
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const fromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
      setShowJump(fromBottom > 80);
    };
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const fromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    if (fromBottom < 80 || phase === "submitted") {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, phase]);

  function jumpToBottom() {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    setShowJump(false);
  }

  // ── session ops ───────────────────────────────────────────────────────────
  async function refreshSessions() {
    try {
      const res = await api.get<{ sessions: SessionSummary[] }>("/chat");
      setSessions(res.data.sessions);
    } catch { /* stale */ }
  }

  function newChat() {
    setActiveId(null);
    setMessages([]);
    setPhase("idle");
  }

  async function openSession(id: string) {
    setChatLoading(true);
    try {
      const res = await api.get<{
        session: { subjectCode: string|null; moduleNumber: number|null };
        messages: ChatMessage[];
      }>(`/chat/${id}`);
      setMessages(res.data.messages.map(m => {
        let pyqList: PYQItem[] | undefined = undefined;
        let isImportantTopic: boolean | undefined = undefined;
        let importanceSummary: string | undefined = undefined;
        let chunksArray = undefined;

        if (m.chunks) {
          if (Array.isArray(m.chunks)) {
            chunksArray = m.chunks;
          } else if (typeof m.chunks === "object") {
            const obj = m.chunks as any;
            chunksArray = obj.chunks;
            pyqList = obj.pyqList;
            isImportantTopic = obj.isImportantTopic;
            importanceSummary = obj.importanceSummary;
          }
        }
        return {
          ...m,
          chunks: chunksArray,
          pyqList,
          isImportantTopic,
          importanceSummary,
        };
      }));
      setActiveId(id);
      setPhase("idle");
    } catch (err) {
      setMessages([{ role: "assistant", content: `⚠ ${errorMessage(err)}` }]);
    } finally {
      setChatLoading(false);
    }
  }

  async function deleteSession(id: string, e: React.MouseEvent) {
    e.stopPropagation();
    try {
      await api.delete(`/chat/${id}`);
      setSessions(s => s.filter(x => x.id !== id));
      if (activeId === id) newChat();
    } catch { /* ignore */ }
  }

  const skipStreamingRef = useRef(false);

  // ── stop streaming ────────────────────────────────────────────────────────
  function stop() {
    abortRef.current?.abort();
    skipStreamingRef.current = true;
    setPhase("idle");
    if (thinkTimerRef.current) clearInterval(thinkTimerRef.current);
  }

  function skipStreaming() {
    skipStreamingRef.current = true;
  }

  // ── ask ───────────────────────────────────────────────────────────────────
  const ask = useCallback(async (e?: React.FormEvent) => {
    e?.preventDefault();
    const q = question.trim();
    if (!q || busy) return;

    setMessages(m => [...m, { role: "user", content: q }]);
    setQuestion("");
    setPhase("submitted");
    setThinkingText("");
    setThinkingMs(0);
    setSearchDone(false);
    setSearchMs(0);

    const controller = new AbortController();
    abortRef.current = controller;

    let sessionId = activeId;

    try {
      // ensure session (no subject/module required)
      if (!sessionId) {
        const created = await api.post<{ session: { id: string } }>("/chat", {});
        sessionId = created.data.session.id;
        setActiveId(sessionId);
      }
      await api.post(`/chat/${sessionId}/messages`, { role: "user", content: q });

      // kick off thinking phase + timer
      setPhase("thinking");
      thinkStartRef.current = Date.now();
      thinkTimerRef.current = setInterval(() => {
        setThinkingMs(Date.now() - thinkStartRef.current);
      }, 100);

      setThinkingText(`Analyzing: "${q}"\nSearching knowledge base…`);

      // Try to extract a VTU subject code from the question (e.g. BCS701)
      const subjectMatch = q.match(/\b[A-Z]{2,5}\d{3}[A-Z]?\b/);
      const subjectCode  = subjectMatch ? subjectMatch[0] : "GENERAL";

      // call AI
      const res = await api.post("/ai/ask", {
        question: q,
        subjectCode,
      }, { signal: controller.signal });

      // search phase done
      const searchElapsed = Date.now() - thinkStartRef.current;
      setSearchDone(true);
      setSearchMs(searchElapsed);

      if (thinkTimerRef.current) clearInterval(thinkTimerRef.current);
      const elapsedMs = Date.now() - thinkStartRef.current;
      setThinkingMs(elapsedMs);
      setPhase("writing");

      const data = res.data as {
        answer: string | Record<string, unknown>;
        retrievedChunks?: ChatMessage["chunks"];
        diagrams?: ChatMessage["diagrams"];
        pyqList?: PYQItem[];
        previousYearQuestions?: PYQItem[];
        modelPaperQuestions?: PYQItem[];
        isImportantTopic?: boolean;
        importanceSummary?: string;
        followUpQuiz?: { topicId: string|null; questions: QuizQuestion[] };
      };

      const finalAnswerObj = typeof data.answer === "object" && data.answer !== null
        ? (data.answer as any)
        : null;

      skipStreamingRef.current = false;

      // ── Real Token-Like / Sentence-by-Sentence Streaming Animation ───────────
      if (finalAnswerObj && Array.isArray(finalAnswerObj.sections) && finalAnswerObj.sections.length > 0) {
        const fullSections = finalAnswerObj.sections;
        interface StreamFrame {
          sections: { type: string; heading: string; text: string; key_terms?: string[] }[];
        }
        const frames: StreamFrame[] = [];
        const currentSections: { type: string; heading: string; text: string; key_terms?: string[] }[] = [];

        for (let sIdx = 0; sIdx < fullSections.length; sIdx++) {
          const s = fullSections[sIdx];
          const fullText = String(s.text || "").trim();
          // Split by sentence endings, bullet points, or newlines for realistic token pacing
          const clauses = fullText.match(/[^.!?\n]+[.!?\n]+|\S+/g) || [fullText];
          let accumulatedText = "";

          for (let pIdx = 0; pIdx < clauses.length; pIdx++) {
            accumulatedText += clauses[pIdx] + (clauses[pIdx].endsWith("\n") ? "" : " ");
            frames.push({
              sections: [
                ...currentSections,
                {
                  type: s.type,
                  heading: s.heading,
                  text: accumulatedText.trim(),
                  key_terms: s.key_terms,
                }
              ]
            });
          }

          currentSections.push({
            type: s.type,
            heading: s.heading,
            text: fullText,
            key_terms: s.key_terms,
          });
        }

        // Subsample frames to ensure dynamic, smooth pacing (~30-40 ticks total)
        const maxSteps = 36;
        const stride = Math.max(1, Math.floor(frames.length / maxSteps));
        const keyFrames: StreamFrame[] = [];
        for (let i = 0; i < frames.length; i += stride) {
          keyFrames.push(frames[i]);
        }
        if (frames.length > 0 && keyFrames[keyFrames.length - 1] !== frames[frames.length - 1]) {
          keyFrames.push(frames[frames.length - 1]);
        }

        // Mount the initial streaming assistant message
        const initialStreamMsg: ChatMessage = {
          role: "assistant",
          content: {
            ...finalAnswerObj,
            sections: keyFrames[0]?.sections || [],
          },
          thinking: thinkingText,
          thinkingMs: elapsedMs,
          chunks: data.retrievedChunks,
          isImportantTopic: data.isImportantTopic,
          importanceSummary: data.importanceSummary,
          isStreaming: true,
        };

        setMessages(m => [...m, initialStreamMsg]);

        // Accelerating streaming loop: starts steadily at ~50ms, finishes briskly at ~10ms
        const totalSteps = keyFrames.length;
        for (let step = 0; step < totalSteps; step++) {
          if (controller.signal.aborted || skipStreamingRef.current) break;

          const f = keyFrames[step];
          setMessages(prev => {
            const copy = [...prev];
            const lastIdx = copy.length - 1;
            if (lastIdx >= 0 && copy[lastIdx].role === "assistant") {
              copy[lastIdx] = {
                ...copy[lastIdx],
                content: {
                  ...finalAnswerObj,
                  sections: f.sections,
                },
                isStreaming: true,
              };
            }
            return copy;
          });

          // Smooth acceleration curve: slows initially, writes fast at the end
          const progress = step / Math.max(1, totalSteps - 1);
          const delay = Math.max(8, Math.round(52 - 44 * Math.pow(progress, 1.6)));
          await new Promise(r => setTimeout(r, delay));
        }
      }

      // Finalize assistant message with full content, diagrams, and quiz
      const finalAssistantMsg: ChatMessage = {
        role: "assistant",
        content: data.answer,
        thinking: thinkingText,
        thinkingMs: elapsedMs,
        chunks: data.retrievedChunks,
        diagrams: data.diagrams,
        pyqList: data.pyqList,
        previousYearQuestions: data.previousYearQuestions,
        modelPaperQuestions: data.modelPaperQuestions,
        isImportantTopic: data.isImportantTopic,
        importanceSummary: data.importanceSummary,
        quiz: data.followUpQuiz?.questions.length ? data.followUpQuiz : undefined,
        isStreaming: false,
      };

      setMessages(prev => {
        const copy = [...prev];
        const lastIdx = copy.length - 1;
        if (lastIdx >= 0 && copy[lastIdx].role === "assistant") {
          copy[lastIdx] = finalAssistantMsg;
          return copy;
        }
        return [...copy, finalAssistantMsg];
      });

      setPhase("idle");

      const contentForDb = typeof finalAssistantMsg.content === "object"
        ? JSON.stringify(finalAssistantMsg.content)
        : String(finalAssistantMsg.content);

      await api.post(`/chat/${sessionId}/messages`, {
        role: "assistant",
        content: contentForDb,
        chunks: {
          chunks: finalAssistantMsg.chunks,
          pyqList: finalAssistantMsg.pyqList,
          isImportantTopic: finalAssistantMsg.isImportantTopic,
          importanceSummary: finalAssistantMsg.importanceSummary,
        },
        diagrams: finalAssistantMsg.diagrams ?? undefined,
        quiz: finalAssistantMsg.quiz ?? undefined,
      });
      await refreshSessions();

    } catch (err: any) {
      if (thinkTimerRef.current) clearInterval(thinkTimerRef.current);
      if (err?.name === "CanceledError" || err?.name === "AbortError") {
        setMessages(m => [...m, { role: "assistant", content: "⏹ Stopped." }]);
      } else {
        setMessages(m => [...m, { role: "assistant", content: `⚠ ${errorMessage(err)}` }]);
      }
      setPhase("idle");
    }
  }, [question, busy, activeId, thinkingText]);

  // ── textarea auto-grow ───────────────────────────────────────────────────
  function handleTextarea(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setQuestion(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = Math.min(e.target.scrollHeight, 200) + "px";
  }

  // ── phase header label ───────────────────────────────────────────────────
  const phaseLabel = {
    idle:      "",
    submitted: "Sending…",
    thinking:  "Thinking…",
    writing:   "Writing answer…",
  }[phase];

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="flex h-full min-h-0 flex-1 overflow-hidden">

      {/* ── Collapsible Sidebar ───────────────────────────────────────────── */}
      <AnimatePresence initial={false}>
        {sidebarOpen && (
          <motion.aside
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 260, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="flex shrink-0 flex-col overflow-hidden border-r border-[var(--border-default)] bg-[var(--bg-secondary)]"
            style={{ minWidth: 0 }}
          >
            {/* new chat */}
            <div className="p-3">
              <button
                onClick={newChat}
                className="new-chat-btn flex w-full items-center justify-center gap-2 rounded-[2px] bg-[var(--accent-primary)] px-3 py-2.5 text-[13px] font-semibold text-white transition-all hover:bg-[var(--bg-login)]"
              >
                <Plus className="h-4 w-4" /> New chat
              </button>
            </div>

            {/* search */}
            <div className="px-3 pb-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--text-muted)]" />
                <input
                  value={searchQ}
                  onChange={e => setSearchQ(e.target.value)}
                  placeholder="Search chats…"
                  className="w-full rounded-[2px] border border-[var(--border-default)] bg-[var(--bg-primary)] py-1.5 pl-7 pr-3 text-[12px] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none"
                />
              </div>
            </div>

            {/* grouped history */}
            <nav className="flex-1 overflow-y-auto px-1">
              {grouped.length === 0 && (
                <div className="flex flex-col items-center py-10 text-center">
                  <MessageSquare className="h-8 w-8 text-hairline" />
                  <p className="mt-2 text-[12px] text-[var(--text-muted)]">
                    No chats yet
                  </p>
                  <p className="mt-0.5 text-[11px] text-[var(--text-muted)] opacity-60">
                    Start a new conversation above
                  </p>
                </div>
              )}
              {grouped.map(group => (
                <div key={group.label} className="mb-2">
                  <p className="px-3 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                    {group.label}
                  </p>
                  {group.items.map(s => (
                    <div
                      key={s.id}
                      onClick={() => openSession(s.id)}
                      className={`group flex cursor-pointer items-center gap-2 rounded-[2px] px-2.5 py-2 transition-colors hover:bg-[var(--bg-primary)] ${
                        activeId === s.id ? "bg-[var(--bg-primary)] font-semibold" : ""
                      }`}
                    >
                      <MessageSquare className="h-3.5 w-3.5 shrink-0 text-[var(--text-muted)]" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[12px] text-[var(--text-primary)]">{s.title}</p>
                        <p className="truncate text-[10px] text-[var(--text-muted)]">
                          {s.subjectCode ?? "General"} · {s.messageCount} msgs
                        </p>
                      </div>
                      <button
                        onClick={e => deleteSession(s.id, e)}
                        className="shrink-0 text-[var(--text-muted)] opacity-0 transition-opacity hover:text-[var(--status-error)] group-hover:opacity-100"
                        title="Delete"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* ── Main panel ───────────────────────────────────────────────────── */}
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">

        {/* ── Top header bar ─────────────────────────────────────────────── */}
        <div className="flex shrink-0 items-center gap-3 border-b border-[var(--border-default)] bg-[var(--bg-primary)] px-4 py-2.5">
          {/* sidebar toggle */}
          <button
            onClick={() => setSidebarOpen(o => !o)}
            className="flex h-7 w-7 items-center justify-center rounded-[2px] border border-[var(--border-default)] text-[var(--text-muted)] transition-colors hover:bg-[var(--bg-secondary)]"
            title={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            {sidebarOpen
              ? <ChevronLeft className="h-4 w-4" />
              : <ChevronRight className="h-4 w-4" />}
          </button>

          <div className="flex-1">
            <h1 className="font-display text-[17px] font-semibold leading-none text-[var(--text-primary)]">
              AI Tutor
            </h1>
            {phaseLabel && (
              <motion.p
                key={phaseLabel}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-0.5 flex items-center gap-1.5 text-[11px] text-[var(--text-muted)]"
              >
                <BreathingOrb phase={phase === "writing" ? "writing" : "thinking"} />
                {phaseLabel}
                {busy && <ElapsedTimer ms={thinkingMs} />}
              </motion.p>
            )}
          </div>

          {/* Step timeline — visible during active phases */}
          <AnimatePresence>
            {busy && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <StepTimeline phase={phase} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* new chat shortcut */}
          <button
            onClick={newChat}
            className="flex h-7 items-center gap-1.5 rounded-[2px] border border-[var(--border-default)] px-2.5 text-[12px] text-[var(--text-muted)] transition-colors hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]"
            title="New chat"
          >
            <Plus className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">New</span>
          </button>
        </div>

        {/* ── Message list ───────────────────────────────────────────────── */}
        <div
          ref={scrollRef}
          className="relative flex-1 overflow-y-auto"
        >
          <div className="mx-auto max-w-3xl space-y-0 px-4 py-6">

            {/* empty state */}
            {!chatLoading && messages.length === 0 && phase === "idle" && (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <motion.div
                  animate={{ scale: [1, 1.08, 1], rotate: [0, 8, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="h-10 w-10 text-[var(--accent-primary)]" />
                </motion.div>
                <p className="font-display mt-4 text-[22px] font-semibold text-[var(--text-primary)]">
                  Ask anything
                </p>
                <p className="mt-2 max-w-sm text-[13px] text-[var(--text-muted)]">
                  Your AI tutor is ready. Ask about any topic — the AI will automatically find the right subject and module context.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {[
                    "What is IoT?",
                    "Explain OSI model",
                    "Define machine learning with example",
                    "Explain SDLC phases with diagram",
                  ].map(hint => (
                    <button
                      key={hint}
                      onClick={() => setQuestion(hint)}
                      className="rounded-full border border-[var(--border-default)] bg-[var(--bg-secondary)] px-3 py-1.5 text-[12px] text-[var(--text-muted)] transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
                    >
                      {hint}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {chatLoading && (
              <div className="flex items-center gap-2 py-4">
                <div className="skeleton h-3 w-3 rounded-full" />
                <p className="text-[12px] text-[var(--text-muted)]">Loading chat…</p>
              </div>
            )}

            {/* messages */}
            <AnimatePresence initial={false}>
              {messages.map((m, i) => (
                <motion.div
                  key={`${activeId}-${i}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className={`mb-6 ${m.role === "user" ? "flex justify-end" : "block"}`}
                >
                  {m.role === "user" ? (
                    /* User — right-aligned bubble */
                    <div className="user-bubble max-w-[75%]">
                      <p className="whitespace-pre-wrap text-[13px] leading-relaxed">
                        {m.content as string}
                      </p>
                    </div>
                  ) : (
                    /* Assistant — full-width, no bubble */
                    <div className="w-full">
                      {/* thinking panel (if this message has a trace) */}
                      {m.thinking && (
                        <ThinkingPanel
                          text={m.thinking}
                          active={false}
                          ms={m.thinkingMs}
                        />
                      )}

                      {/* answer */}
                      <AnswerRenderer
                        content={m.content}
                        diagrams={m.diagrams ?? []}
                        pyqList={m.pyqList ?? []}
                        previousYearQuestions={m.previousYearQuestions}
                        modelPaperQuestions={m.modelPaperQuestions}
                        isImportantTopic={m.isImportantTopic}
                        importanceSummary={m.importanceSummary}
                        isStreaming={Boolean(m.isStreaming)}
                      />

                      {/* source chips */}
                      {m.chunks && m.chunks.length > 0 && (
                        <div className="mt-3 flex flex-wrap items-center gap-1.5">
                          <BookOpen className="h-3 w-3 text-[var(--text-muted)]" />
                          {m.chunks.map(c => (
                            <span
                              key={c.id}
                              className="rounded-full border border-[var(--border-default)] px-2 py-0.5 text-[10px] text-[var(--text-muted)]"
                            >
                              {c.title}{c.moduleNumber ? ` M${c.moduleNumber}` : ""} · {c.similarity.toFixed(2)}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* quiz */}
                      {m.quiz && (
                        <div className="mt-4">
                          <QuizCard topicId={m.quiz.topicId} questions={m.quiz.questions} />
                        </div>
                      )}

                      {/* action row */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-2 flex items-center gap-1"
                        aria-live="polite"
                      >
                        <CopyButton
                          text={
                            typeof m.content === "object"
                              ? JSON.stringify(m.content, null, 2)
                              : String(m.content)
                          }
                        />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* live thinking indicator */}
            <AnimatePresence>
              {(phase === "thinking" || phase === "submitted") && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="mb-4"
                >
                  <ThinkingPanel
                    text={thinkingText}
                    active
                    ms={thinkingMs}
                  />
                  {/* Tool chips */}
                  <div className="ml-3 flex flex-wrap gap-2">
                    <ToolChip
                      label="Searching knowledge base…"
                      done={searchDone}
                      durationMs={searchDone ? searchMs : undefined}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div ref={bottomRef} />
          </div>

          {/* Jump to latest */}
          <AnimatePresence>
            {showJump && (
              <motion.button
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                onClick={jumpToBottom}
                className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-[var(--border-default)] bg-[var(--bg-primary)] px-3 py-1.5 text-[12px] font-medium text-[var(--text-primary)] shadow-sm transition-colors hover:bg-[var(--bg-secondary)]"
              >
                <ChevronsDown className="h-3.5 w-3.5" /> Jump to latest
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* ── Pinned composer ─────────────────────────────────────────────── */}
        <div className="shrink-0 border-t border-[var(--border-default)] bg-[var(--bg-primary)] px-4 py-3">
          <form onSubmit={ask}>
            <div className="composer-box flex items-end gap-2">
              <textarea
                id="tutor-question"
                value={question}
                onChange={handleTextarea}
                onKeyDown={e => {
                  if ((e.ctrlKey || e.metaKey) && e.key === "Enter" && question.trim() && !busy) {
                    e.preventDefault();
                    ask();
                  }
                }}
                placeholder="Ask anything… (Ctrl+Enter to send)"
                rows={1}
                disabled={busy}
                className="flex-1 resize-none bg-transparent text-[13px] leading-relaxed text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none disabled:opacity-50"
                style={{ minHeight: 36, maxHeight: 200 }}
              />
              {busy ? (
                <button
                  type="button"
                  onClick={stop}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[2px] bg-[var(--status-error)] text-white transition-colors hover:opacity-90"
                  title="Stop"
                >
                  <Square className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!question.trim()}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[2px] bg-[var(--accent-primary)] text-white transition-colors hover:bg-[var(--bg-login)] disabled:cursor-not-allowed disabled:opacity-40"
                  title="Send (Ctrl+Enter)"
                >
                  <Send className="h-4 w-4" />
                </button>
              )}
            </div>
            <div className="mt-1.5 flex items-center justify-between text-[10px] text-[var(--text-muted)]">
              <p>
                AI Tutor · auto-detects subject context
                {busy && (
                  <span className="ml-2 inline-flex items-center gap-1 text-[var(--accent-primary)] font-semibold">
                    <BreathingOrb phase={phase === "writing" ? "writing" : "thinking"} />
                    {phaseLabel}
                  </span>
                )}
              </p>
              {phase === "writing" && (
                <button
                  type="button"
                  onClick={skipStreaming}
                  className="inline-flex items-center gap-1 rounded bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 text-[10.5px] font-bold text-amber-700 dark:text-amber-300 hover:bg-amber-500/25 transition cursor-pointer"
                  title="Skip writing animation and view complete answer"
                >
                  ⚡ Skip to End ⏩
                </button>
              )}
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
