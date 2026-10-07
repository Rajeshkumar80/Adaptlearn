"use client";

import { useEffect, useRef, useState } from "react";
import { Copy, Check, Sparkles, PenTool, Layers } from "lucide-react";

interface MermaidDiagramProps {
  code: string;
  title?: string;
  sketchGuide?: string;
}

export default function MermaidDiagram({ code, title, sketchGuide }: MermaidDiagramProps) {
  const [svgContent, setSvgContent] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"visual" | "sketch">("visual");
  const [renderError, setRenderError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function renderChart() {
      if (!code || !code.trim()) return;
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: "base",
          themeVariables: {
            primaryColor: "#e8720c",
            primaryTextColor: "#ffffff",
            primaryBorderColor: "#d66a0a",
            lineColor: "#e8720c",
            secondaryColor: "#3b82f6",
            tertiaryColor: "#10b981",
            fontFamily: "inherit",
            fontSize: "12px",
          },
          securityLevel: "loose",
        });

        // Clean code of markdown fences if any
        let cleanCode = code
          .replace(/^```(?:mermaid)?/gm, "")
          .replace(/```$/gm, "")
          .trim();

        if (!cleanCode.startsWith("graph") && !cleanCode.startsWith("flowchart") && !cleanCode.startsWith("sequenceDiagram") && !cleanCode.startsWith("classDiagram") && !cleanCode.startsWith("stateDiagram")) {
          cleanCode = `flowchart TD\n${cleanCode}`;
        }

        const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
        const { svg } = await mermaid.render(id, cleanCode);
        if (isMounted) {
          setSvgContent(svg);
          setRenderError(false);
        }
      } catch (err) {
        console.warn("Mermaid render error:", err);
        if (isMounted) {
          setRenderError(true);
        }
      }
    }

    renderChart();
    return () => { isMounted = false; };
  }, [code]);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!code && !sketchGuide) return null;

  return (
    <div className="mt-5 rounded-xl border-2 border-amber-500/80 bg-amber-50/70 dark:bg-amber-950/40 p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5 pb-2.5 border-b border-amber-300 dark:border-amber-800">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-amber-600 text-white shadow-xs">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <p className="text-[13px] font-black uppercase tracking-wider text-amber-950 dark:text-amber-100">
              ✏️ {title || "AI-Synthesized Exam Architecture & Flow Diagram"}
            </p>
            <p className="text-[11px] text-[var(--text-secondary)]">
              High-Precision Topic Diagram Tailored for VTU 10-Mark Answer Writing
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {sketchGuide && (
            <div className="flex items-center gap-1 rounded-lg bg-[var(--bg-tertiary)] p-0.5 border border-[var(--border-default)] text-[11px]">
              <button
                type="button"
                onClick={() => setActiveTab("visual")}
                className={`px-2.5 py-1 rounded-md font-bold transition flex items-center gap-1 ${
                  activeTab === "visual"
                    ? "bg-[var(--accent-primary)] text-white shadow-xs"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                <Layers className="h-3 w-3" /> Visual Flow
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("sketch")}
                className={`px-2.5 py-1 rounded-md font-bold transition flex items-center gap-1 ${
                  activeTab === "sketch"
                    ? "bg-[var(--accent-primary)] text-white shadow-xs"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                <PenTool className="h-3 w-3" /> Exam Drawing Guide
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={copyCode}
            className="flex items-center gap-1 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-default)] px-2.5 py-1 text-[11px] font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition"
            title="Copy Diagram Structure"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>
      </div>

      {activeTab === "visual" && (
        <div className="relative rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-4 overflow-x-auto min-h-[140px] flex items-center justify-center shadow-inner">
          {!renderError && svgContent ? (
            <div
              className="w-full flex justify-center [&_svg]:max-w-full [&_svg]:h-auto"
              dangerouslySetInnerHTML={{ __html: svgContent }}
            />
          ) : (
            <pre className="text-xs font-mono text-[var(--text-primary)] p-3 bg-[var(--bg-secondary)] rounded-lg w-full overflow-x-auto whitespace-pre-wrap leading-relaxed border border-[var(--border-default)]">
              {code}
            </pre>
          )}
        </div>
      )}

      {activeTab === "sketch" && sketchGuide && (
        <div className="rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-100/60 dark:bg-amber-950/60 p-4 text-[13px] leading-relaxed text-[var(--text-primary)]">
          <p className="font-black text-amber-950 dark:text-amber-200 mb-2 flex items-center gap-1.5">
            <PenTool className="h-4 w-4 text-amber-600 dark:text-amber-400" /> How to Sketch this in your VTU Answer Sheet (3-4 Marks Guaranteed):
          </p>
          <div className="whitespace-pre-wrap font-medium space-y-1">
            {sketchGuide}
          </div>
        </div>
      )}
    </div>
  );
}
