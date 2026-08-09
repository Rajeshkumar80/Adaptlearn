"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, BookOpen } from "lucide-react";
import { api, errorMessage } from "@/lib/api";
import { Button, Select, Textarea, Toast } from "@/components/ui";
import { useSubjects } from "@/lib/subjects";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  chunks?: { id: string; title: string; similarity: number; moduleNumber: number | null }[];
  mcq?: {
    question: string;
    options: string[];
    correctIndex: number;
    topicId: string | null;
  } | null;
  mcqAnswered?: boolean;
  mcqCorrect?: boolean;
  masteryDelta?: string;
}

export default function TutorPage() {
  const { subjects, loading } = useSubjects();
  const [subjectCode, setSubjectCode] = useState("");
  const [moduleNumber, setModuleNumber] = useState("");
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [busy, setBusy] = useState(false);
  const [toast, setToast] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (subjects.length > 0 && !subjectCode) {
      setSubjectCode(subjects[0].code);
      setModuleNumber("");
    }
  }, [subjects, subjectCode]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, busy]);

  async function ask(e: React.FormEvent) {
    e.preventDefault();
    const q = question.trim();
    if (!q || busy) return;
    setMessages((m) => [...m, { role: "user", content: q }]);
    setQuestion("");
    setBusy(true);
    try {
      const res = await api.post("/ai/ask", {
        question: q,
        subjectCode,
        moduleNumber: moduleNumber ? Number(moduleNumber) : undefined,
      });
      const data = res.data as {
        answer: string;
        retrievedChunks?: { id: string; title: string; similarity: number; moduleNumber: number | null }[];
        followUpMcq?: {
          question: string;
          options: string[];
          correctIndex: number;
          topicId: string | null;
        } | null;
      };
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: data.answer,
          chunks: data.retrievedChunks,
          mcq: data.followUpMcq,
        },
      ]);
    } catch (err) {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: `⚠ ${errorMessage(err)}` },
      ]);
    } finally {
      setBusy(false);
    }
  }

  async function answerMcq(msgIndex: number, correct: boolean) {
    const msg = messages[msgIndex];
    if (!msg?.mcq) return;
    setBusy(true);
    try {
      const res = await api.post("/ai/mcq-response", {
        topicId: msg.mcq.topicId,
        correct,
      });
      const data = res.data as { delta: number };
      setMessages((m) =>
        m.map((mm, i) =>
          i === msgIndex
            ? {
                ...mm,
                mcqAnswered: true,
                mcqCorrect: correct,
                masteryDelta: `mastery ${data.delta >= 0 ? "+" : ""}${data.delta.toFixed(3)}`,
              }
            : mm
        )
      );
    } catch (err) {
      setToast(errorMessage(err));
    } finally {
      setBusy(false);
    }
  }

  const moduleOptions =
    subjects.find((s) => s.code === subjectCode)?.modules ?? [];

  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 border-b border-hairline pb-4">
        <h1 className="font-display text-[26px] font-semibold text-ink">AI Tutor</h1>
        <p className="mt-1 text-[13px] text-ink-muted">
          Ask anything about your syllabus — answers are grounded in your module
          notes with citations, then quizzed back to you.
        </p>
      </div>

      <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
            Subject
          </label>
          <Select value={subjectCode} onChange={(e) => { setSubjectCode(e.target.value); setModuleNumber(""); }}>
            {loading ? (
              <option>Loading subjects…</option>
            ) : (
              subjects.map((s) => (
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
          <Select
            value={moduleNumber}
            onChange={(e) => setModuleNumber(e.target.value)}
          >
            <option value="">All modules</option>
            {moduleOptions.map((m) => (
              <option key={m.id} value={m.moduleNumber}>
                Module {m.moduleNumber} — {m.name}
              </option>
            ))}
          </Select>
        </div>
      </div>

      <div className="ledger-card flex-1 space-y-4 overflow-y-auto p-4">
        {messages.length === 0 && (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
            <Sparkles className="h-8 w-8 text-brass" />
            <p className="font-display text-[18px] font-semibold text-ink">
              Ask your first question
            </p>
            <p className="max-w-sm text-[13px] text-ink-muted">
              e.g. “Explain the Waterfall model with a diagram” or “Calculate NPV
              for the project in module 3”
            </p>
          </div>
        )}
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
            >
              <div
                className={`max-w-[85%] rounded-[2px] px-4 py-3 ${
                  m.role === "user"
                    ? "bg-navy text-paper"
                    : "ledger-card"
                }`}
              >
                <div className="whitespace-pre-wrap text-[13px] leading-relaxed">
                  {m.content}
                </div>

                {m.chunks && m.chunks.length > 0 && (
                  <div className="mt-3 border-t border-hairline pt-2">
                    <p className="mb-1 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-widest text-ink-muted">
                      <BookOpen className="h-3 w-3" /> Retrieved from
                    </p>
                    {m.chunks.map((c) => (
                      <p key={c.id} className="text-[11px] text-ink-muted">
                        {c.title}
                        {c.moduleNumber ? ` · Module ${c.moduleNumber}` : ""} · sim{" "}
                        {c.similarity.toFixed(3)}
                      </p>
                    ))}
                  </div>
                )}

                {m.mcq && !m.mcqAnswered && (
                  <div className="mt-3 rounded-[2px] border border-brass bg-warning-soft p-3">
                    <p className="mb-2 text-[13px] font-semibold text-ink">
                      {m.mcq.question}
                    </p>
                    <div className="grid gap-1.5">
                      {m.mcq.options.map((opt, oi) => (
                        <button
                          key={oi}
                          disabled={busy}
                          onClick={() => answerMcq(i, oi === m.mcq!.correctIndex)}
                          className="rounded-[2px] border border-hairline bg-paper px-3 py-1.5 text-left text-[12px] hover:border-brass hover:bg-paper-alt disabled:opacity-50"
                        >
                          {String.fromCharCode(65 + oi)}. {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {m.mcq && m.mcqAnswered && (
                  <div
                    className={`mt-3 rounded-[2px] border px-3 py-2 text-[12px] font-medium ${
                      m.mcqCorrect
                        ? "border-success bg-success-soft text-success"
                        : "border-error bg-error-soft text-error"
                    }`}
                  >
                    {m.mcqCorrect
                      ? `Correct — ${m.masteryDelta}.`
                      : `Not quite — ${m.masteryDelta}. Review the module notes and try again.`}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {busy && (
          <div className="flex items-center gap-2 px-4">
            <div className="skeleton h-3 w-3 rounded-full" />
            <p className="text-[12px] text-ink-muted">Tutor is thinking…</p>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={ask} className="mt-4 flex gap-2">
        <Textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question about the syllabus, a diagram, or a numerical…"
          rows={2}
          className="resize-none"
        />
        <Button type="submit" disabled={busy || !question.trim()} className="shrink-0">
          <Send className="h-4 w-4" /> Ask
        </Button>
      </form>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.24 }}
          >
            <Toast kind="error" >{toast}</Toast>
            <button className="hidden" onClick={() => setToast("")} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
