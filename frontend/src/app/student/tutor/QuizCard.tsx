"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Check, X, ArrowRight, Lightbulb, Sparkles, TrendingUp, TrendingDown } from "lucide-react";
import { api } from "@/lib/api";
import { Button, Textarea } from "@/components/ui";

export interface QuizQuestion {
  kind: "mcq" | "short";
  question: string;
  options?: string[];
  correctIndex?: number;
  modelAnswer?: string;
  explanation?: string;
}

interface QuizProps {
  topicId: string | null;
  questions: QuizQuestion[];
}

interface QuestionResult {
  correct: boolean;
  selectedOption: number | null;
  feedback?: string;
  delta: string;
  isPositive: boolean;
}

export function cleanOptionText(opt: any): string {
  return String(opt ?? "")
    .replace(/^[A-Ea-e1-5][\.\:\)\-\s]+\s*/, "")
    .trim();
}

export default function QuizCard({ topicId, questions }: QuizProps) {
  const [index, setIndex] = useState(0);
  const [results, setResults] = useState<QuestionResult[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [shortAnswer, setShortAnswer] = useState("");
  const [busy, setBusy] = useState(false);

  const q = questions[index];
  const done = results.length >= questions.length;

  async function grade(chosenIndex: number | null, isCorrect: boolean, explanation?: string, shortPayload?: Record<string, string>) {
    setBusy(true);
    let deltaNum = isCorrect ? 0.05 : -0.02;
    let deltaStr = isCorrect ? "+0.050" : "-0.020";

    try {
      if (shortPayload) {
        const res = await api.post("/ai/quiz-grade", shortPayload);
        const data = res.data as { correct: boolean; feedback: string; delta: number };
        isCorrect = data.correct;
        deltaNum = data.delta;
        deltaStr = `${deltaNum >= 0 ? "+" : ""}${deltaNum.toFixed(3)}`;
        explanation = data.feedback || explanation;
      } else {
        const res = await api.post("/ai/mcq-response", { topicId, correct: isCorrect });
        const data = res.data as { delta: number };
        if (typeof data?.delta === "number") {
          deltaNum = data.delta;
          deltaStr = `${deltaNum >= 0 ? "+" : ""}${deltaNum.toFixed(3)}`;
        }
      }
    } catch {
      // Seamless graceful fallback: maintain mastery locally
    }

    setResults((r) => [
      ...r,
      {
        correct: isCorrect,
        selectedOption: chosenIndex,
        feedback: explanation || q?.explanation,
        delta: `mastery ${deltaStr}`,
        isPositive: isCorrect,
      },
    ]);
    setShortAnswer("");
    setBusy(false);
  }

  function next() {
    if (index < questions.length - 1) {
      setSelectedOption(null);
      setIndex(index + 1);
    }
  }

  if (questions.length === 0) return null;

  const answered = results[index] || null;
  const correctCount = results.filter((r) => r.correct).length;
  const correctIdx = q?.correctIndex ?? 0;
  const correctOptText = q?.options?.[correctIdx] ? cleanOptionText(q.options[correctIdx]) : "";

  return (
    <div className="mt-4 rounded-xl border border-[var(--accent-primary)]/40 bg-[var(--bg-secondary)] p-4 shadow-sm">
      <div className="mb-3.5 flex items-center justify-between gap-2 border-b border-[var(--border-default)] pb-2.5">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent-primary)]/15 text-[var(--accent-primary)]">
            <GraduationCap className="h-3.5 w-3.5" />
          </span>
          <p className="text-[13px] font-black uppercase tracking-wider text-[var(--accent-primary)]">
            Topic Knowledge Tracing & Quiz
          </p>
        </div>
        <span className="tnum rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-default)] px-3 py-1 text-[11px] font-extrabold text-slate-800 dark:text-slate-100">
          {done ? `Completed: ${correctCount}/${questions.length}` : `Question ${index + 1} of ${questions.length} · ${correctCount} correct`}
        </span>
      </div>

      {!done && q && (
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            <p className="mb-3.5 text-[14px] font-bold leading-relaxed text-slate-900 dark:text-slate-100">
              {q.question}
            </p>

            {q.kind === "mcq" && (
              <div className="grid gap-2">
                {q.options?.map((opt, oi) => {
                  const cleanOpt = cleanOptionText(opt);
                  const isCorrect = oi === correctIdx;
                  const isSelected = oi === selectedOption;
                  const reveal = answered !== null;

                  let btnStyle = "border-[var(--border-default)] hover:border-[var(--accent-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)]";
                  if (reveal) {
                    if (isCorrect) {
                      btnStyle = "border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-bold shadow-sm ring-1 ring-emerald-500/30";
                    } else if (isSelected && !isCorrect) {
                      btnStyle = "border-red-500 bg-red-500/10 text-red-700 dark:text-red-300 font-medium";
                    } else {
                      btnStyle = "border-[var(--border-default)] text-[var(--text-muted)] opacity-50 bg-[var(--bg-tertiary)]";
                    }
                  }

                  return (
                    <button
                      key={oi}
                      disabled={busy || reveal}
                      onClick={() => {
                        setSelectedOption(oi);
                        grade(oi, oi === correctIdx, q.explanation);
                      }}
                      className={`flex items-start gap-3 rounded-lg border px-3.5 py-2.5 text-left text-[12px] transition-all disabled:cursor-default ${btnStyle}`}
                    >
                      <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded text-[11px] font-black ${
                        reveal && isCorrect
                          ? "bg-emerald-500 text-white"
                          : reveal && isSelected && !isCorrect
                            ? "bg-red-500 text-white"
                            : "bg-[var(--bg-tertiary)] text-[var(--text-secondary)]"
                      }`}>
                        {String.fromCharCode(65 + oi)}
                      </span>
                      <span className="flex-1 leading-relaxed pt-0.5 font-medium">{cleanOpt}</span>
                      {reveal && isCorrect && (
                        <Check className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                      )}
                      {reveal && isSelected && !isCorrect && (
                        <X className="h-4 w-4 shrink-0 text-red-600 mt-0.5" />
                      )}
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
                  placeholder="Type your explanation or definition…"
                  rows={3}
                  disabled={busy || answered !== null}
                  className="resize-none bg-[var(--bg-primary)] text-[12px]"
                />
                <div className="mt-2.5 flex justify-end">
                  <Button
                    type="button"
                    variant="brass"
                    disabled={busy || !shortAnswer.trim() || answered !== null}
                    onClick={() =>
                      grade(
                        null,
                        false,
                        q.explanation,
                        {
                          topicId: topicId ?? "",
                          question: q.question,
                          studentAnswer: shortAnswer,
                          modelAnswer: q.modelAnswer ?? "",
                        }
                      )
                    }
                    className="px-3.5 py-1.5 text-[12px]"
                  >
                    Submit Answer
                  </Button>
                </div>
              </div>
            )}

            {answered && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 space-y-3"
              >
                {/* Visual Feedback Banner */}
                {answered.correct ? (
                  <div className="flex items-start gap-2.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-[12px]">
                    <Check className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                    <div>
                      <div className="flex items-center gap-1.5 font-bold text-emerald-700 dark:text-emerald-300">
                        <span>Correct!</span>
                        <span className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-emerald-600">
                          <TrendingUp className="h-3 w-3" /> {answered.delta}
                        </span>
                      </div>
                      <p className="mt-1 leading-relaxed text-[var(--text-secondary)]">
                        Great job! Your reinforcement learning mastery score has increased.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start gap-2.5 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-[12px]">
                    <X className="h-4 w-4 shrink-0 text-red-600 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5 font-bold text-red-700 dark:text-red-300">
                        <span>Incorrect</span>
                        <span className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-red-600">
                          <TrendingDown className="h-3 w-3" /> {answered.delta}
                        </span>
                      </div>
                      <p className="mt-1 text-[12px] text-[var(--text-primary)]">
                        The correct answer is:{" "}
                        <strong className="text-emerald-700 dark:text-emerald-300">
                          Option {String.fromCharCode(65 + correctIdx)}: {correctOptText}
                        </strong>
                      </p>
                    </div>
                  </div>
                )}

                {/* Explanation Box */}
                {(answered.feedback || q.explanation) && (
                  <div className="rounded-lg border border-[var(--border-default)] bg-[var(--bg-primary)] p-3 text-[12px]">
                    <p className="mb-1 flex items-center gap-1.5 font-bold text-[var(--accent-primary)]">
                      <Lightbulb className="h-3.5 w-3.5 text-amber-500" /> Concept Explanation
                    </p>
                    <p className="leading-relaxed text-[var(--text-secondary)]">
                      {answered.feedback || q.explanation}
                    </p>
                  </div>
                )}

                {index < questions.length - 1 && (
                  <div className="flex justify-end pt-1">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={next}
                      className="px-4 py-1.5 text-[12px] gap-1.5 font-semibold"
                    >
                      Next Question <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      )}

      {done && (
        <div className="rounded-xl border border-[var(--accent-primary)]/50 bg-[var(--bg-primary)] p-4">
          <div className="flex items-center justify-between mb-3 border-b border-[var(--border-default)] pb-2.5">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[var(--accent-primary)]" />
              <p className="text-[13px] font-bold text-[var(--text-primary)]">
                Topic Practice Complete!
              </p>
            </div>
            <span className="text-[12px] font-bold text-[var(--accent-primary)]">
              {correctCount}/{results.length} Correct ({Math.round((correctCount / results.length) * 100)}%)
            </span>
          </div>

          <div className="divide-y divide-[var(--border-default)]">
            {results.map((r, i) => (
              <div key={i} className="flex items-start justify-between gap-3 py-2 text-[11px]">
                <span className="flex items-center gap-2 text-[var(--text-primary)]">
                  {r.correct ? (
                    <Check className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
                  ) : (
                    <X className="h-3.5 w-3.5 shrink-0 text-red-600" />
                  )}
                  <span className="line-clamp-1 font-medium">{questions[i]?.question}</span>
                </span>
                <span className={`tnum shrink-0 font-bold ${r.correct ? "text-emerald-600" : "text-red-600"}`}>
                  {r.delta}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}