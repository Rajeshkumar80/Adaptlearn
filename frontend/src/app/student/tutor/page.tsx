"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Sparkles,
  BookOpen,
  Image as ImageIcon,
  Plus,
  Trash2,
  MessageSquare,
} from "lucide-react";
import { api, errorMessage, BACKEND_URL } from "@/lib/api";
import { Button, Select, Textarea, Badge } from "@/components/ui";
import { useSubjects } from "@/lib/subjects";
import { useAuth } from "@/lib/auth";
import QuizCard, { QuizQuestion } from "./QuizCard";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  chunks?: {
    id: string;
    title: string;
    similarity: number;
    moduleNumber: number | null;
    pageImage?: { pageNumber: number; fileUrl: string } | null;
  }[];
  diagrams?: { pageNumber: number; fileUrl: string; title: string }[];
  quiz?: { topicId: string | null; questions: QuizQuestion[] };
}

interface SessionSummary {
  id: string;
  title: string;
  subjectCode: string | null;
  moduleNumber: number | null;
  messageCount: number;
  updatedAt: string;
}

export default function TutorPage() {
  const { subjects, loading } = useSubjects();
  const { user } = useAuth();
  const [semester, setSemester] = useState(5);
  const [subjectCode, setSubjectCode] = useState("");
  const [moduleNumber, setModuleNumber] = useState("");
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [sessions, setSessions] = useState<SessionSummary[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [chatLoading, setChatLoading] = useState(false);
  const [busy, setBusy] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const semesters = useMemo(() => {
    const set = Array.from(new Set(subjects.map((s) => s.semester))).sort((a, b) => a - b);
    if (set.length === 0) return [5, 6];
    return set;
  }, [subjects]);

  const semSubjects = useMemo(
    () => subjects.filter((s) => s.semester === semester),
    [subjects, semester]
  );

  useEffect(() => {
    if (user?.semester) setSemester(user.semester);
  }, [user?.semester]);

  useEffect(() => {
    if (semesters.length > 0 && !semesters.includes(semester)) {
      setSemester(semesters[0]);
    }
  }, [semesters, semester]);

  useEffect(() => {
    if (semSubjects.length > 0 && !semSubjects.some((s) => s.code === subjectCode)) {
      setSubjectCode(semSubjects[0].code);
      setModuleNumber("");
    }
  }, [semSubjects, subjectCode]);

  useEffect(() => {
    api
      .get<{ sessions: SessionSummary[] }>("/chat")
      .then((res) => setSessions(res.data.sessions))
      .catch(() => {});
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, busy]);

  async function refreshSessions() {
    try {
      const res = await api.get<{ sessions: SessionSummary[] }>("/chat");
      setSessions(res.data.sessions);
    } catch {
      /* keep stale list */
    }
  }

  function newChat() {
    setActiveId(null);
    setMessages([]);
  }

  async function openSession(id: string) {
    setChatLoading(true);
    try {
      const res = await api.get<{
        session: { subjectCode: string | null; moduleNumber: number | null };
        messages: ChatMessage[];
      }>(`/chat/${id}`);
      setMessages(res.data.messages);
      if (res.data.session.subjectCode) {
        setSubjectCode(res.data.session.subjectCode);
        setModuleNumber(
          res.data.session.moduleNumber != null ? String(res.data.session.moduleNumber) : ""
        );
      }
      setActiveId(id);
    } catch (err) {
      setMessages([{ role: "assistant", content: `⚠ ${errorMessage(err)}` }]);
    } finally {
      setChatLoading(false);
    }
  }

  async function deleteSession(id: string) {
    try {
      await api.delete(`/chat/${id}`);
      setSessions((s) => s.filter((x) => x.id !== id));
      if (activeId === id) newChat();
    } catch {
      /* ignore */
    }
  }

  async function ask(e: React.FormEvent) {
    e.preventDefault();
    const q = question.trim();
    if (!q || busy) return;
    const userMsg: ChatMessage = { role: "user", content: q };
    setMessages((m) => [...m, userMsg]);
    setQuestion("");
    setBusy(true);

    let sessionId = activeId;
    try {
      if (!sessionId) {
        const created = await api.post<{ session: { id: string } }>("/chat", {
          subjectCode,
          moduleNumber: moduleNumber ? Number(moduleNumber) : undefined,
        });
        sessionId = created.data.session.id;
        setActiveId(sessionId);
      }
      await api.post(`/chat/${sessionId}/messages`, { role: "user", content: q });

      const res = await api.post("/ai/ask", {
        question: q,
        subjectCode,
        moduleNumber: moduleNumber ? Number(moduleNumber) : undefined,
      });
      const data = res.data as {
        answer: string;
        retrievedChunks?: ChatMessage["chunks"];
        diagrams?: ChatMessage["diagrams"];
        followUpQuiz?: { topicId: string | null; questions: QuizQuestion[] };
      };
      const assistantMsg: ChatMessage = {
        role: "assistant",
        content: data.answer,
        chunks: data.retrievedChunks,
        diagrams: data.diagrams,
        quiz:
          data.followUpQuiz && data.followUpQuiz.questions.length > 0
            ? data.followUpQuiz
            : undefined,
      };
      setMessages((m) => [...m, assistantMsg]);
      await api.post(`/chat/${sessionId}/messages`, {
        role: "assistant",
        content: assistantMsg.content,
        chunks: assistantMsg.chunks ?? undefined,
        diagrams: assistantMsg.diagrams ?? undefined,
        quiz: assistantMsg.quiz ?? undefined,
      });
      await refreshSessions();
    } catch (err) {
      setMessages((m) => [...m, { role: "assistant", content: `⚠ ${errorMessage(err)}` }]);
    } finally {
      setBusy(false);
    }
  }

  const moduleOptions = subjects.find((s) => s.code === subjectCode)?.modules ?? [];
  const selectedSubject = subjects.find((s) => s.code === subjectCode);
  const selectedModule = moduleOptions.find((m) => m.moduleNumber === Number(moduleNumber));

  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 border-b border-hairline pb-4">
        <h1 className="font-display text-[26px] font-semibold text-ink">AI Tutor</h1>
        <p className="mt-1 text-[13px] text-ink-muted">
          ChatGPT-style study assistant — every chat is saved, and answers are
          grounded in your module notes with citations and diagrams.
        </p>
      </div>

      <div className="flex flex-1 gap-4 overflow-hidden">
        {/* session sidebar */}
        <aside className="ledger-card flex w-[240px] shrink-0 flex-col">
          <div className="border-b border-hairline p-3">
            <Button onClick={newChat} className="w-full">
              <Plus className="h-4 w-4" /> New chat
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto">
            {sessions.length === 0 && (
              <p className="px-3 py-6 text-center text-[12px] text-ink-muted">
                No chats yet — ask your first question.
              </p>
            )}
            {sessions.map((s) => (
              <div
                key={s.id}
                className={`group flex cursor-pointer items-center gap-2 px-3 py-2.5 transition-colors hover:bg-paper ${
                  activeId === s.id ? "bg-paper" : ""
                }`}
                onClick={() => openSession(s.id)}
              >
                <MessageSquare className="h-3.5 w-3.5 shrink-0 text-ink-muted" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[12px] font-semibold text-ink">
                    {s.title}
                  </p>
                  <p className="truncate text-[10px] text-ink-muted">
                    {s.subjectCode ? `${s.subjectCode}${s.moduleNumber ? ` · M${s.moduleNumber}` : ""}` : "General"}
                    {" · "}
                    {s.messageCount} msgs
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteSession(s.id);
                  }}
                  className="shrink-0 text-ink-muted opacity-0 transition-opacity hover:text-error group-hover:opacity-100"
                  title="Delete chat"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        </aside>

        {/* main column */}
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="ledger-card mb-4 p-4">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
              <div>
                <label className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wide text-ink-muted">
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
                <label className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wide text-ink-muted">
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
                    <option>Loading subjects…</option>
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
                <label className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wide text-ink-muted">
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
              <div className="flex items-end">
                <div className="flex flex-wrap items-center gap-1.5">
                  <Badge tone="navy">Sem {semester}</Badge>
                  <Badge tone="brass" className="max-w-[200px] truncate">
                    {selectedSubject
                      ? `${selectedSubject.code}${selectedModule ? ` · M${selectedModule.moduleNumber}` : ""}`
                      : "General"}
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="ledger-card flex-1 space-y-4 overflow-y-auto p-4">
            {chatLoading && (
              <div className="flex items-center gap-2 px-4">
                <div className="skeleton h-3 w-3 rounded-full" />
                <p className="text-[12px] text-ink-muted">Loading chat…</p>
              </div>
            )}
            {!chatLoading && messages.length === 0 && (
              <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
                <Sparkles className="h-8 w-8 text-brass" />
                <p className="font-display text-[18px] font-semibold text-ink">
                  {activeId ? "This chat is empty" : "Ask your first question"}
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
                  key={`${activeId}-${i}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
                >
                  <div
                    className={`max-w-[85%] rounded-[2px] px-4 py-3 ${
                      m.role === "user" ? "bg-navy text-paper" : "ledger-card"
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

                    {m.diagrams && m.diagrams.length > 0 && (
                      <div className="mt-3 border-t border-hairline pt-2">
                        <p className="mb-1.5 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-widest text-ink-muted">
                          <ImageIcon className="h-3 w-3" /> Diagram{m.diagrams.length > 1 ? "s" : ""} from the notes
                        </p>
                        <div className="grid gap-2">
                          {m.diagrams.map((d, di) => (
                            <a
                              key={`${d.fileUrl}-${di}`}
                              href={`${BACKEND_URL}${d.fileUrl}`}
                              target="_blank"
                              rel="noreferrer"
                              className="group block"
                            >
                              <img
                                src={`${BACKEND_URL}${d.fileUrl}`}
                                alt={`${d.title} — page ${d.pageNumber}`}
                                loading="lazy"
                                className="max-h-[340px] w-full rounded-[2px] border border-hairline bg-paper object-contain"
                              />
                              <span className="mt-1 block text-[11px] text-ink-muted group-hover:text-brass">
                                {d.title} · page {d.pageNumber} — open full size ↗
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {m.quiz && (
                      <QuizCard topicId={m.quiz.topicId} questions={m.quiz.questions} />
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

          <form onSubmit={ask} className="ledger-card mt-4 p-4">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <label
                htmlFor="tutor-question"
                className="text-[12px] font-semibold uppercase tracking-wide text-ink-muted"
              >
                Ask a question
              </label>
              <span className="text-[11px] text-ink-muted">
                {selectedSubject
                  ? `${selectedSubject.code}${selectedModule ? ` · Module ${selectedModule.moduleNumber}` : " · all modules"}`
                  : "General scope"}
                {busy && " · tutor is thinking…"}
              </span>
            </div>
            <Textarea
              id="tutor-question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => {
                if ((e.ctrlKey || e.metaKey) && e.key === "Enter" && question.trim() && !busy) {
                  e.preventDefault();
                  ask(e);
                }
              }}
              placeholder="Ask a question about the syllabus, a diagram, or a numerical…"
              rows={4}
              className="min-h-[130px] w-full resize-y text-[14px] leading-relaxed"
            />
            <div className="mt-2 flex justify-end">
              <Button type="submit" disabled={busy || !question.trim()} className="shrink-0">
                {busy ? (
                  <span className="flex items-center gap-2">
                    <div className="skeleton h-3 w-3 rounded-full" /> Thinking…
                  </span>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Ask
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
