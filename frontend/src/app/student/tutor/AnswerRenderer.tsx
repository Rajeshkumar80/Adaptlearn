"use client";

import { ReactNode, useState } from "react";
import {
  BookOpen, Sparkles, Layers, CheckCircle2,
  GitCompare, Lightbulb, FileText, Image as ImageIcon, Flame,
  Copy, Check, Maximize2, X, ExternalLink
} from "lucide-react";

import MermaidDiagram from "./MermaidDiagram";

interface Section {
  type: string;
  heading?: string;
  text?: string;
  key_terms?: string[];
  diagram_tag?: string;
}

export interface AIDiagramRef {
  title?: string;
  mermaid_code?: string;
  exam_sketch_guide?: string;
}

interface StructuredAnswer {
  question?: string;
  subject_code?: string;
  topic?: string;
  module?: number;
  marks?: number;
  co_reference?: string;
  sections?: Section[];
  ai_diagram?: AIDiagramRef;
  raw?: string;
}

export interface PYQItem {
  paper: string;
  question: string;
  marks?: number;
  moduleNumber?: number;
  level?: string;
  co?: string;
  isImportant: boolean;
  badge: string;
  score: number;
  isModelPaper?: boolean;
}

export interface DiagramRef {
  tag: string;
  url: string;
  topic: string;
  caption: string;
}

interface Props {
  content: string | StructuredAnswer;
  marks?: number;
  coRef?: string;
  diagrams?: DiagramRef[];
  aiDiagram?: AIDiagramRef;
  pyqList?: PYQItem[];
  previousYearQuestions?: PYQItem[];
  modelPaperQuestions?: PYQItem[];
  isImportantTopic?: boolean;
  importanceSummary?: string;
  isStreaming?: boolean;
}

const SECTION_CONFIG: Record<string, { color: string; icon: any; label: string; headerColor: string }> = {
  definition: {
    color: "border-l-blue-600 border border-blue-200/80 bg-blue-50/70 dark:border-blue-800/40 dark:bg-blue-950/30",
    icon: BookOpen,
    label: "Definition & Core Concept",
    headerColor: "text-blue-700 dark:text-blue-300",
  },
  explanation: {
    color: "border-l-amber-600 border border-amber-200/80 bg-amber-50/70 dark:border-amber-800/40 dark:bg-amber-950/30",
    icon: Lightbulb,
    label: "Key Principles & Theoretical Concepts",
    headerColor: "text-amber-700 dark:text-amber-300",
  },
  architecture: {
    color: "border-l-emerald-600 border border-emerald-200/80 bg-emerald-50/70 dark:border-emerald-800/40 dark:bg-emerald-950/30",
    icon: Layers,
    label: "Architecture & Step-by-Step Working",
    headerColor: "text-emerald-700 dark:text-emerald-300",
  },
  how_it_works: {
    color: "border-l-emerald-600 border border-emerald-200/80 bg-emerald-50/70 dark:border-emerald-800/40 dark:bg-emerald-950/30",
    icon: Layers,
    label: "Architecture & Step-by-Step Working",
    headerColor: "text-emerald-700 dark:text-emerald-300",
  },
  example: {
    color: "border-l-purple-600 border border-purple-200/80 bg-purple-50/70 dark:border-purple-800/40 dark:bg-purple-950/30",
    icon: Sparkles,
    label: "Simple Real-World Example & Analogy",
    headerColor: "text-purple-700 dark:text-purple-300",
  },
  comparison: {
    color: "border-l-cyan-600 border border-cyan-200/80 bg-cyan-50/70 dark:border-cyan-800/40 dark:bg-cyan-950/30",
    icon: GitCompare,
    label: "Key Differences & Technical Comparison",
    headerColor: "text-cyan-700 dark:text-cyan-300",
  },
  conclusion: {
    color: "border-l-rose-600 border border-rose-200/80 bg-rose-50/70 dark:border-rose-800/40 dark:bg-rose-950/30",
    icon: CheckCircle2,
    label: "VTU Exam Scoring Tips & Key Takeaways",
    headerColor: "text-rose-700 dark:text-rose-300",
  },
};

function highlightTerms(text: string, terms?: string[]): string {
  if (!terms?.length) return text;
  let result = text;
  for (const term of terms) {
    if (!term || term.length < 3) continue;
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    result = result.replace(new RegExp(`\\b(${escaped})\\b`, "gi"), "**$1**");
  }
  return result;
}

function renderText(text: string): ReactNode[] {
  return text.split(/\n+/).filter(Boolean).map((para, i) => {
    const isBullet = para.trim().startsWith("•") || para.trim().startsWith("-");
    const isNumbered = /^\d+\.\s/.test(para.trim());

    const cleanPara = isBullet
      ? para.trim().replace(/^[•\-]\s*/, "")
      : para;

    const parts = cleanPara.split(/\*\*(.+?)\*\*/g);

    return (
      <div
        key={i}
        className={`mt-1.5 text-[13.5px] leading-relaxed text-[var(--text-primary)] font-semibold ${
          isBullet || isNumbered ? "flex items-start gap-2 ml-1" : ""
        }`}
      >
        {isBullet && (
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-primary)]" />
        )}
        <div className="flex-1">
          {parts.map((part, j) =>
            j % 2 === 1 ? (
              <strong
                key={j}
                className="font-black text-amber-900 dark:text-amber-200 bg-amber-400/25 dark:bg-amber-500/20 px-1.5 py-0.5 rounded border border-amber-500/30 inline-block my-0.5"
              >
                {part}
              </strong>
            ) : (
              part
            )
          )}
        </div>
      </div>
    );
  });
}

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8001";

export default function AnswerRenderer({
  content,
  marks = 10,
  coRef,
  diagrams = [],
  aiDiagram,
  pyqList = [],
  previousYearQuestions,
  modelPaperQuestions,
  isImportantTopic,
  importanceSummary,
  isStreaming = false,
}: Props) {
  const [activeTab, setActiveTab] = useState<"pyq" | "model">("pyq");
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);
  const [zoomedDiagram, setZoomedDiagram] = useState<DiagramRef | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  let answer: StructuredAnswer | null = null;
  if (typeof content === "string") {
    const trimmed = content.trim();
    if (trimmed.startsWith("{")) {
      try { answer = JSON.parse(trimmed); } catch { /* not JSON */ }
    }
  } else if (typeof content === "object" && content !== null) {
    answer = content as StructuredAnswer;
  }

  // Plain text fallback
  if (!answer || !answer.sections?.length) {
    const text = typeof content === "string" ? content : (answer?.raw ?? JSON.stringify(content));
    return (
      <div className="whitespace-pre-wrap text-[13px] leading-relaxed text-[var(--text-primary)]">
        {text}
        {isStreaming && (
          <span className="inline-block w-2 h-4 ml-1 bg-[var(--accent-primary)] animate-pulse align-middle" />
        )}
      </div>
    );
  }

  const m = 10; // Always 10 marks format
  const rawCo = coRef ?? answer.co_reference ?? "CO1";
  const coMatch = String(rawCo).match(/\bCO[1-5]\b/i);
  const co = coMatch ? coMatch[0].toUpperCase() : (String(rawCo).length <= 8 ? String(rawCo).toUpperCase() : "CO1");
  const subj = answer.subject_code;

  // Derive questions
  const pyqs = previousYearQuestions && previousYearQuestions.length > 0
    ? previousYearQuestions
    : pyqList.filter(q => !q.isModelPaper);

  const modelQs = modelPaperQuestions && modelPaperQuestions.length > 0
    ? modelPaperQuestions
    : pyqList.filter(q => q.isModelPaper);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const validSections = answer.sections.filter(
    (sec) => sec.text && sec.text.trim() !== "..." && sec.text.trim() !== "…"
  );

  return (
    <div className="space-y-4">
      {/* ── Real-Time Streaming Indicator ── */}
      {isStreaming && (
        <div className="flex items-center justify-between rounded-xl border border-amber-400 bg-amber-500/10 px-3.5 py-2 text-[12px] text-amber-800 dark:text-amber-200">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
            </span>
            <span className="font-bold">Writing authentic VTU 10-mark answer sentence-by-sentence…</span>
          </div>
          <span className="text-[10px] uppercase font-black tracking-wider text-amber-600 dark:text-amber-400">
            Streaming
          </span>
        </div>
      )}

      {/* ── Exam Importance & Frequency Banner ── */}
      {(isImportantTopic || importanceSummary) && (
        <div className="flex items-center gap-2.5 rounded-xl border-2 border-amber-500 bg-amber-100/90 dark:bg-amber-950/60 px-4 py-3 text-[13px] text-amber-950 dark:text-amber-100 shadow-sm">
          <Flame className="h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400 animate-pulse" />
          <span className="font-black tracking-wide">
            {importanceSummary || "🔥 High Priority Exam Topic: Frequently tested in past VTU university papers"}
          </span>
        </div>
      )}

      {/* ── Metadata badges: 10 Marks Standard ── */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-default)] pb-2.5">
        <div className="flex flex-wrap items-center gap-2">
          {subj && (
            <span className="inline-flex items-center rounded-lg bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 px-3 py-1 text-[11px] font-black tracking-wide shadow-xs">
              {subj}
            </span>
          )}
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 text-white px-3 py-1 text-[11px] font-bold shadow-xs">
            <CheckCircle2 className="h-3.5 w-3.5" /> {m} Marks Full Answer Format
          </span>
          {co && (
            <span className="inline-flex items-center rounded-lg bg-blue-600 text-white px-3 py-1 text-[11px] font-bold shadow-xs">
              {co} Outcome
            </span>
          )}
        </div>

        <span className="text-[11px] font-bold text-[var(--text-primary)] bg-[var(--bg-tertiary)] px-2.5 py-1 rounded-md border border-[var(--border-default)]">
          Tailored for VTU Examination Writing
        </span>
      </div>

      {/* ── 6 Distinct Structured Sections ── */}
      <div className="space-y-3">
        {validSections.map((sec, idx) => {
          const cfg = SECTION_CONFIG[sec.type] || {
            color: "border-l-[var(--accent-primary)] bg-[var(--bg-secondary)] border border-[var(--border-default)]",
            icon: BookOpen,
            label: sec.type.replace(/_/g, " ").toUpperCase(),
            headerColor: "text-[var(--text-primary)]",
          };
          const Icon = cfg.icon;
          const heading = sec.heading || cfg.label;
          const textWithTerms = highlightTerms(sec.text!, sec.key_terms);
          const isCurrentTypingSection = isStreaming && idx === validSections.length - 1;

          return (
            <div
              key={idx}
              className={`rounded-r-xl border-l-[5px] px-4 py-3.5 shadow-xs transition-all ${cfg.color}`}
            >
              <div className="mb-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--bg-primary)] shadow-xs">
                    <Icon className="h-3.5 w-3.5 text-[var(--accent-primary)]" />
                  </div>
                  <h4 className={`text-[12.5px] font-black uppercase tracking-wider ${cfg.headerColor || "text-[var(--text-primary)]"}`}>
                    {heading}
                  </h4>
                </div>
                {isCurrentTypingSection && (
                  <span className="flex items-center gap-1 text-[10px] font-bold text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/40 px-2 py-0.5 rounded-full animate-pulse">
                    typing…
                  </span>
                )}
              </div>
              <div>
                {renderText(textWithTerms)}
                {isCurrentTypingSection && (
                  <span className="inline-block w-2 h-4 ml-1.5 rounded-[1px] bg-[var(--accent-primary)] animate-pulse align-middle" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── High-Yield Syllabus Diagrams (RAG Retrieved) ── */}
      {diagrams && diagrams.length > 0 && (
        <div className="mt-5 rounded-xl border-2 border-indigo-400/80 bg-indigo-50/70 dark:bg-indigo-950/40 p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-indigo-300 dark:border-indigo-800">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-indigo-600 text-white shadow-xs">
                <ImageIcon className="h-4 w-4" />
              </div>
              <p className="text-[13px] font-black uppercase tracking-wider text-indigo-950 dark:text-indigo-100">
                🖼️ High-Yield Syllabus Diagrams (Draw in Exam for Full Marks)
              </p>
            </div>
            <span className="text-[11px] font-extrabold bg-indigo-600 text-white px-3 py-1 rounded-full shadow-xs">
              {diagrams.length} Diagram{diagrams.length > 1 ? "s" : ""} Available
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {diagrams.map((d, i) => {
              const hasFailed = failedImages[d.url];
              return (
                <figure
                  key={i}
                  className="group relative flex flex-col justify-between rounded-xl border border-[var(--border-default)] bg-[var(--bg-primary)] p-3 shadow-xs hover:border-indigo-500 hover:shadow-md transition-all duration-200"
                >
                  <div
                    className="relative cursor-pointer overflow-hidden rounded-lg bg-white p-2 border border-slate-200 flex items-center justify-center min-h-[170px]"
                    onClick={() => setZoomedDiagram(d)}
                  >
                    {!hasFailed ? (
                      <img
                        src={`${BACKEND_URL}${d.url}`}
                        alt={d.topic}
                        className="max-h-52 w-full object-contain transition duration-200 group-hover:scale-102"
                        loading="lazy"
                        onError={() => {
                          setFailedImages(prev => ({ ...prev, [d.url]: true }));
                        }}
                      />
                    ) : (
                      <div className="text-center p-4 text-[var(--text-muted)] space-y-1.5">
                        <ImageIcon className="h-8 w-8 mx-auto text-indigo-400 opacity-60" />
                        <p className="text-xs font-semibold text-[var(--text-primary)]">Syllabus Diagram Ready</p>
                        <p className="text-[10px] text-[var(--text-muted)]">Click below to view high-resolution source</p>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-150 text-white text-xs font-semibold gap-1.5 rounded-lg backdrop-blur-[1px]">
                      <Maximize2 className="h-4 w-4" /> Click to Enlarge Diagram
                    </div>
                  </div>

                  <figcaption className="mt-2.5 text-[12px]">
                    <span className="font-black text-[var(--text-primary)] block mb-0.5">
                      {d.topic}
                    </span>
                    {d.caption && (
                      <span className="leading-snug block text-[var(--text-secondary)] font-semibold text-[11px] line-clamp-2">
                        {d.caption}
                      </span>
                    )}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      )}

      {/* ── AI-Generated Exam Architecture & Flow Diagram (Mermaid Vector + Sketch Guide) ── */}
      {(aiDiagram || answer?.ai_diagram) && (
        <MermaidDiagram
          code={aiDiagram?.mermaid_code || answer?.ai_diagram?.mermaid_code || ""}
          title={aiDiagram?.title || answer?.ai_diagram?.title}
          sketchGuide={aiDiagram?.exam_sketch_guide || answer?.ai_diagram?.exam_sketch_guide}
        />
      )}

      {/* ── VTU Exam Practice Questions: PYQ & Model Papers ("Just Question") ── */}
      {((pyqs && pyqs.length > 0) || (modelQs && modelQs.length > 0)) && (
        <div className="mt-5 rounded-xl border border-[var(--border-default)] bg-[var(--bg-secondary)] p-4 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2.5 border-b border-[var(--border-default)]">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-[var(--accent-primary)]" />
              <p className="text-[12px] font-bold uppercase tracking-wider text-[var(--text-primary)]">
                VTU Question Paper Intelligence on this Topic
              </p>
            </div>

            {/* Tab selector */}
            <div className="flex items-center gap-1 rounded-lg bg-[var(--bg-tertiary)] p-0.5 border border-[var(--border-default)] text-[11px]">
              <button
                type="button"
                onClick={() => setActiveTab("pyq")}
                className={`px-3 py-1 rounded-md font-bold transition ${
                  activeTab === "pyq"
                    ? "bg-[var(--accent-primary)] text-white shadow-xs"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                📝 Previous Papers ({pyqs.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("model")}
                className={`px-3 py-1 rounded-md font-bold transition ${
                  activeTab === "model"
                    ? "bg-[var(--accent-primary)] text-white shadow-xs"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                📌 Model Papers ({modelQs.length})
              </button>
            </div>
          </div>

          {/* Tab Content: Just Question format */}
          {activeTab === "pyq" && (
            <div className="space-y-2">
              {pyqs.length === 0 ? (
                <p className="text-[12px] text-[var(--text-muted)] italic py-2">
                  No exact previous exam paper matches found for this specific query.
                </p>
              ) : (
                pyqs.map((q, i) => (
                  <div
                    key={i}
                    className="flex items-start justify-between gap-3 rounded-lg border border-[var(--border-default)] bg-[var(--bg-primary)] p-3 text-[12px] shadow-xs"
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-bold text-[var(--accent-primary)] text-[11px]">
                          {q.paper}
                        </span>
                        <span className="text-[10px] rounded bg-[var(--bg-tertiary)] px-2 py-0.5 font-semibold text-[var(--text-secondary)]">
                          {q.marks ?? 10} Marks {q.level ? `· ${q.level}` : ""} {q.co ? `· ${q.co}` : ""}
                        </span>
                        {q.isImportant && (
                          <span className="text-[9px] rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 px-2 py-0.2 font-bold">
                            High Frequency
                          </span>
                        )}
                      </div>
                      <p className="font-medium text-[var(--text-primary)] leading-relaxed">
                        "{q.question}"
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => copyToClipboard(q.question, `pyq-${i}`)}
                      className="shrink-0 p-1.5 rounded-md hover:bg-[var(--bg-tertiary)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition"
                      title="Copy Question"
                    >
                      {copiedIndex === `pyq-${i}` ? (
                        <Check className="h-3.5 w-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === "model" && (
            <div className="space-y-2">
              {modelQs.length === 0 ? (
                <p className="text-[12px] text-[var(--text-muted)] italic py-2">
                  No official model paper question matches found for this specific query.
                </p>
              ) : (
                modelQs.map((q, i) => (
                  <div
                    key={i}
                    className="flex items-start justify-between gap-3 rounded-lg border border-[var(--border-default)] bg-[var(--bg-primary)] p-3 text-[12px] shadow-xs"
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-bold text-indigo-600 dark:text-indigo-400 text-[11px]">
                          {q.paper}
                        </span>
                        <span className="text-[10px] rounded bg-[var(--bg-tertiary)] px-2 py-0.5 font-semibold text-[var(--text-secondary)]">
                          {q.marks ?? 10} Marks {q.level ? `· ${q.level}` : ""} {q.co ? `· ${q.co}` : ""}
                        </span>
                      </div>
                      <p className="font-medium text-[var(--text-primary)] leading-relaxed">
                        "{q.question}"
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => copyToClipboard(q.question, `model-${i}`)}
                      className="shrink-0 p-1.5 rounded-md hover:bg-[var(--bg-tertiary)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition"
                      title="Copy Question"
                    >
                      {copiedIndex === `model-${i}` ? (
                        <Check className="h-3.5 w-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      )}

      {/* ── Diagram Zoom Modal / Lightbox ── */}
      {zoomedDiagram && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-150"
          onClick={() => setZoomedDiagram(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl bg-[var(--bg-primary)] p-6 shadow-2xl border border-[var(--border-default)] flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--border-default)]">
              <div>
                <h3 className="text-base font-bold text-[var(--text-primary)]">
                  {zoomedDiagram.topic}
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  Official VTU Notes Syllabus Diagram (High-Yield 10-Mark Exam Material)
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`${BACKEND_URL}${zoomedDiagram.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-tertiary)] hover:bg-[var(--accent-primary)] hover:text-white text-xs font-semibold text-[var(--text-secondary)] transition"
                  title="Open full resolution in new tab"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> Full Size
                </a>
                <button
                  type="button"
                  onClick={() => setZoomedDiagram(null)}
                  className="p-1.5 rounded-lg hover:bg-[var(--bg-tertiary)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="overflow-auto flex-1 flex items-center justify-center bg-white p-4 rounded-xl border border-slate-200 shadow-inner">
              <img
                src={`${BACKEND_URL}${zoomedDiagram.url}`}
                alt={zoomedDiagram.topic}
                className="max-h-[62vh] w-auto object-contain rounded-md"
              />
            </div>

            {zoomedDiagram.caption && (
              <p className="mt-3 text-xs text-[var(--text-secondary)] italic bg-[var(--bg-secondary)] px-3 py-2 rounded-lg border border-[var(--border-default)]">
                📌 {zoomedDiagram.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
