"use client";

import { useEffect, useRef, useState } from "react";
import { AlertTriangle, Clock, Send, ShieldAlert } from "lucide-react";
import { api, errorMessage } from "@/lib/api";
import { Badge, Button, Card, Textarea } from "@/components/ui";

interface TestQuestion {
  id: string;
  text: string;
  questionType: "MCQ" | "DESCRIPTIVE";
  options: string[];
  marks: number;
  rubric?: any;
}

interface TestTakingViewProps {
  test: {
    id: string;
    title: string;
    subjectCode: string;
    durationMin: number;
    questions: TestQuestion[];
  };
  attemptNumber: number;
  onCancel: () => void;
  onSubmitted: (result: any) => void;
}

export function TestTakingView({
  test,
  attemptNumber,
  onCancel,
  onSubmitted,
}: TestTakingViewProps) {
  const [timeLeft, setTimeLeft] = useState(test.durationMin * 60);
  const [mcqAnswers, setMcqAnswers] = useState<Record<string, number>>({});
  const [textAnswers, setTextAnswers] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [warningCount, setWarningCount] = useState(0);
  const [warningMsg, setWarningMsg] = useState("");
  const [cheatEvents, setCheatEvents] = useState<any[]>([]);

  const isTerminatedRef = useRef(false);
  const startTimeRef = useRef(Date.now());

  // 1. Timer Countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit("AUTO_SUBMITTED_TIME_EXPIRED");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 2. Integrity event handler
  async function triggerIntegrityEvent(type: string, details: string) {
    if (isTerminatedRef.current || submitting) return;

    const newEvents = [...cheatEvents, { type, details }];
    setCheatEvents(newEvents);

    try {
      const res = await api.post(`/tests/${test.id}/integrity-event`, {
        type,
        details,
        attemptNumber,
      });
      const count = res.data.warningCount;
      setWarningCount(count);

      if (count === 4) {
        setWarningMsg("FINAL WARNING (4/4): One more tab switch or focus loss will terminate your test!");
      } else if (count >= 5) {
        isTerminatedRef.current = true;
        setWarningMsg("Integrity threshold exceeded (5/4 violations). Automatically terminating assessment...");
        handleSubmit("AUTO_SUBMITTED_INTEGRITY");
      } else {
        setWarningMsg(`Integrity Warning (${count}/4): Tab switch or focus change detected.`);
      }
    } catch {
      // Fallback local counting if offline
      const count = warningCount + 1;
      setWarningCount(count);
      if (count >= 5) {
        isTerminatedRef.current = true;
        handleSubmit("AUTO_SUBMITTED_INTEGRITY");
      }
    }
  }

  // 3. Focus & Visibility event listeners
  useEffect(() => {
    function handleVisibility() {
      if (document.hidden) {
        triggerIntegrityEvent("TAB_SWITCH", "User navigated away or hid browser tab");
      }
    }
    function handleBlur() {
      triggerIntegrityEvent("WINDOW_BLUR", "Browser window lost focus");
    }

    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("blur", handleBlur);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("blur", handleBlur);
    };
  }, [cheatEvents, warningCount]);

  async function handleSubmit(forcedStatus?: string) {
    if (submitting) return;
    setSubmitting(true);
    const timeTakenSec = Math.round((Date.now() - startTimeRef.current) / 1000);

    const answersPayload = test.questions.map((q) => ({
      questionId: q.id,
      selectedIndex: q.questionType === "MCQ" ? mcqAnswers[q.id] : undefined,
      textAnswer: q.questionType === "DESCRIPTIVE" ? textAnswers[q.id] || "" : undefined,
    }));

    try {
      const res = await api.post(`/tests/${test.id}/submit`, {
        answers: answersPayload,
        timeTakenSec,
        status: forcedStatus || "SUBMITTED",
        cheatEvents,
      });
      onSubmitted(res.data.result);
    } catch (err) {
      alert(errorMessage(err));
      setSubmitting(false);
    }
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timerStr = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <div
      className="space-y-4 max-w-3xl mx-auto select-none"
      onCopy={(e) => {
        e.preventDefault();
        triggerIntegrityEvent("CLIPBOARD_COPY", "Copy attempt prevented");
      }}
      onPaste={(e) => {
        e.preventDefault();
        triggerIntegrityEvent("CLIPBOARD_PASTE", "Paste attempt prevented");
      }}
      onCut={(e) => {
        e.preventDefault();
        triggerIntegrityEvent("CLIPBOARD_CUT", "Cut attempt prevented");
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        triggerIntegrityEvent("CONTEXT_MENU", "Context menu attempt prevented");
      }}
    >
      {/* Test Sticky Banner */}
      <Card className="sticky top-4 z-40 flex items-center justify-between p-3.5 border-[var(--border-default)] backdrop-blur-md bg-black/80">
        <div>
          <h2 className="text-sm font-bold text-[var(--text-primary)]">{test.title}</h2>
          <span className="text-[11px] text-[var(--text-muted)]">
            {test.subjectCode} · Attempt #{attemptNumber}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-1.5 font-mono text-sm font-bold ${timeLeft <= 120 ? "text-red-400 animate-pulse" : "text-[var(--accent-primary)]"}`}>
            <Clock className="w-4 h-4" /> {timerStr}
          </div>
          <Button onClick={() => handleSubmit()} disabled={submitting} className="text-xs py-1 px-3">
            <Send className="w-3.5 h-3.5 mr-1" /> {submitting ? "Submitting…" : "Submit"}
          </Button>
        </div>
      </Card>

      {/* Warning Escalation Banner */}
      {warningMsg && (
        <div className={`p-3 rounded text-xs flex items-center gap-2 border ${warningCount >= 4 ? "bg-red-950/60 border-red-700 text-red-200" : "bg-amber-950/40 border-amber-800 text-amber-200"}`}>
          <ShieldAlert className="w-4 h-4 shrink-0 text-amber-400" />
          <span className="flex-1">{warningMsg}</span>
        </div>
      )}

      {/* Questions List */}
      <div className="space-y-4">
        {test.questions.map((q, idx) => (
          <Card key={q.id} className="p-4 space-y-3 border-[var(--border-default)]">
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                <span className="text-[var(--accent-primary)] mr-1.5">{idx + 1}.</span>
                {q.text}
              </p>
              <Badge tone="navy" className="shrink-0">{q.marks} marks</Badge>
            </div>

            {q.questionType === "MCQ" ? (
              <div className="grid gap-2">
                {q.options.map((opt, oi) => {
                  const selected = mcqAnswers[q.id] === oi;
                  return (
                    <button
                      key={oi}
                      type="button"
                      onClick={() => setMcqAnswers((s) => ({ ...s, [q.id]: oi }))}
                      className={`text-left text-xs p-2.5 rounded border transition-colors ${selected ? "border-[var(--accent-primary)] bg-[var(--accent-soft)] font-semibold text-[var(--accent-primary)]" : "border-[var(--border-default)] bg-[var(--bg-primary)] hover:border-[var(--accent-primary)]"}`}
                    >
                      <span className="font-bold mr-2">{String.fromCharCode(65 + oi)}.</span>
                      {opt}
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-1.5">
                {q.rubric && (
                  <p className="text-[11px] text-[var(--text-muted)] italic">
                    Criteria: {typeof q.rubric === "string" ? q.rubric : "Explain key concepts clearly"}
                  </p>
                )}
                <Textarea
                  value={textAnswers[q.id] || ""}
                  onChange={(e) => setTextAnswers((s) => ({ ...s, [q.id]: e.target.value }))}
                  placeholder="Type your descriptive answer here... (Copy/paste is disabled for assessment integrity)"
                  rows={4}
                  className="text-xs"
                />
                <div className="text-right text-[10px] text-[var(--text-muted)]">
                  {(textAnswers[q.id] || "").trim().split(/\s+/).filter(Boolean).length} words
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4">
        <Button variant="ghost" onClick={onCancel} disabled={submitting}>Cancel</Button>
        <Button onClick={() => handleSubmit()} disabled={submitting}>
          {submitting ? "Evaluating with AI…" : "Final Submit"}
        </Button>
      </div>
    </div>
  );
}
