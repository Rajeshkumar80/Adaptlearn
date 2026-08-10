"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Check, X, ArrowRight } from "lucide-react";
import { api, errorMessage } from "@/lib/api";
import { Button, Textarea } from "@/components/ui";

export interface QuizQuestion {
  kind: "mcq" | "short";
  question: string;
  options?: string[];
  correctIndex?: number;
  modelAnswer?: string;
}

interface QuizProps {
  topicId: string | null;
  questions: QuizQuestion[];
}

interface QuestionResult {
  correct: boolean;
  feedback?: string;
  delta: string;
}

// State-tracing quiz: 5 mixed questions (MCQ + short answer), asked one at a
// time with progress, instant right/wrong feedback, and a score summary.
// MCQ answers self-grade; short answers are graded by AI (POST /ai/quiz-grade).
export default function QuizCard({ topicId, questions }: QuizProps) {
  const [index, setIndex] = useState(0);
  const [results, setResults] = useState<QuestionResult[]>([]);
  const [shortAnswer, setShortAnswer] = useState("");
  const [busy, setBusy] = useState(false);
  const [toast, setToast] = useState("");

  const q = questions[index];
  const done = results.length >= questions.length;

  async function grade(correct: boolean, feedback?: string, shortPayload?: Record<string, string>) {
    setBusy(true);
    try {
      if (shortPayload) {
        const res = await api.post("/ai/quiz-grade", shortPayload);
        const data = res.data as { correct: boolean; feedback: string; delta: number };
        correct = data.correct;
        feedback = data.feedback;
        record(data.delta);
      } else {
        const res = await api.post("/ai/mcq-response", { topicId, correct });
        const data = res.data as { delta: number };
        record(data.delta);
      }
    } catch (err) {
      setToast(errorMessage(err));
      setBusy(false);
      return;
    }
    function record(delta: number) {
      setResults((r) => [
        ...r,
        { correct, feedback, delta: `mastery ${delta >= 0 ? "+" : ""}${delta.toFixed(3)}` },
      ]);
      setShortAnswer("");
      setBusy(false);
    }
  }

  function next() {
    if (index < questions.length - 1) setIndex(index + 1);
  }

  if (questions.length === 0) return null;

  const answered = results[index] || null;
  const correctCount = results.filter((r) => r.correct).length;

  return (
    <div className="mt-3 rounded-[2px] border border-brass bg-warning-soft p-3">
      <div className="mb-2 flex items-center justify-between gap-2">
        <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-brass">
          <GraduationCap className="h-3.5 w-3.5" /> State tracing
        </p>
        <span className="tnum text-[11px] text-ink-muted">
          {done ? `Score ${correctCount}/${questions.length}` : `Q ${index + 1}/${questions.length} · ${correctCount} correct`}
        </span>
      </div>

      {!done && (
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.16 }}
          >
            <p className="mb-2 text-[13px] font-semibold text-ink">{q.question}</p>

            {q.kind === "mcq" && (
              <div className="grid gap-1.5">
                {q.options?.map((opt, oi) => {
                  const isCorrect = oi === q.correctIndex;
                  const reveal = answered !== null;
                  return (
                    <button
                      key={oi}
                      disabled={busy || reveal}
                      onClick={() => grade(oi === q.correctIndex)}
                      className={`flex items-center gap-2 rounded-[2px] border bg-paper px-3 py-1.5 text-left text-[12px] transition-colors disabled:cursor-default ${
                        reveal && isCorrect
                          ? "border-success bg-success-soft text-success"
                          : reveal
                            ? "border-hairline text-ink-muted opacity-70"
                            : "border-hairline hover:border-brass"
                      }`}
                    >
                      {reveal && isCorrect && <Check className="h-3.5 w-3.5 shrink-0" />}
                      {String.fromCharCode(65 + oi)}. {opt}
                    </button>
                  );
                })}
              </div>
            )}

            {q.kind === "short" && (
              <div>
                <Textarea
                  value={shortAnswer}
                  onChange={(e) => setShortAnswer(e.target.value)}
                  placeholder="Type your answer…"
                  rows={2}
                  disabled={busy || answered !== null}
                  className="resize-none bg-paper text-[12px]"
                />
                <div className="mt-2 flex justify-end">
                  <Button
                    type="button"
                    variant="brass"
                    disabled={busy || !shortAnswer.trim() || answered !== null}
                    onClick={() =>
                      grade(
                        false,
                        undefined,
                        {
                          topicId: topicId ?? "",
                          question: q.question,
                          studentAnswer: shortAnswer,
                          modelAnswer: q.modelAnswer ?? "",
                        }
                      )
                    }
                    className="px-3 py-1.5 text-[12px]"
                  >
                    Submit answer
                  </Button>
                </div>
              </div>
            )}

            {answered && (
              <div className="mt-3 space-y-2">
                <div
                  className={`flex items-start gap-2 rounded-[2px] border px-3 py-2 text-[12px] font-medium ${
                    answered.correct
                      ? "border-success bg-success-soft text-success"
                      : "border-error bg-error-soft text-error"
                  }`}
                >
                  {answered.correct ? (
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  ) : (
                    <X className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  )}
                  <span>
                    {answered.correct
                      ? `Correct — ${answered.delta}.`
                      : `Not quite — ${answered.delta}.`}
                    {answered.feedback ? ` ${answered.feedback}` : ""}
                  </span>
                </div>
                {q.kind === "short" && q.modelAnswer && (
                  <p className="rounded-[2px] bg-paper px-3 py-2 text-[11px] text-ink-muted">
                    <span className="font-semibold text-ink">Model answer:</span>{" "}
                    {q.modelAnswer}
                  </p>
                )}
                {index < questions.length - 1 && (
                  <div className="flex justify-end">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={next}
                      className="px-3 py-1.5 text-[12px]"
                    >
                      Next question <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      )}

      {done && (
        <div className="rounded-[2px] border border-brass bg-paper p-3">
          <p className="mb-2 text-[13px] font-semibold text-ink">
            State tracing complete — {correctCount}/{results.length} correct
          </p>
          <div className="divide-y divide-hairline">
            {results.map((r, i) => (
              <div key={i} className="flex items-start justify-between gap-2 py-1.5 text-[11px]">
                <span className="flex items-center gap-1.5 text-ink">
                  {r.correct ? (
                    <Check className="h-3 w-3 text-success" />
                  ) : (
                    <X className="h-3 w-3 text-error" />
                  )}
                  <span className="line-clamp-2">{questions[i]?.question}</span>
                </span>
                <span className={`tnum shrink-0 ${r.correct ? "text-success" : "text-error"}`}>
                  {r.delta}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {toast && <p className="mt-2 text-[11px] text-error">{toast}</p>}
    </div>
  );
}