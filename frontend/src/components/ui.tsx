import { ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline" | "danger" | "brass";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-[13px] font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

const variants: Record<Variant, string> = {
  primary:
    "text-white hover:opacity-90 shadow-sm",
  ghost:
    "bg-transparent hover:opacity-80",
  outline:
    "bg-transparent border hover:opacity-80",
  danger:
    "text-white hover:opacity-90",
  brass:
    "text-white hover:opacity-90",
};

const variantStyles: Record<Variant, React.CSSProperties> = {
  primary: { background: "var(--accent-primary)", color: "#fff" },
  ghost: { color: "var(--accent-primary)" },
  outline: {
    color: "var(--accent-primary)",
    borderColor: "var(--border-default)",
  },
  danger: { background: "var(--status-error)", color: "#fff" },
  brass: { background: "var(--accent-primary)", color: "#fff" },
};

export function Button({
  variant = "primary",
  className = "",
  style,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      style={{ ...variantStyles[variant], ...style }}
      {...props}
    />
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`ledger-card p-5 ${className}`}>{children}</div>;
}

export function Panel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`ledger-panel p-4 ${className}`}>{children}</div>;
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="w-full rounded-md border px-3 py-2 text-sm transition-colors duration-200 focus:outline-none"
      style={{
        borderColor: "var(--border-default)",
        background: "var(--bg-input)",
        color: "var(--text-primary)",
      }}
      {...props}
    />
  );
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
      style={{
        borderColor: "var(--border-default)",
        background: "var(--bg-input)",
        color: "var(--text-primary)",
      }}
      {...props}
    />
  );
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
      style={{
        borderColor: "var(--border-default)",
        background: "var(--bg-input)",
        color: "var(--text-primary)",
      }}
      {...props}
    />
  );
}

type BadgeTone = "navy" | "brass" | "success" | "warning" | "error" | "info";

const badgeToneStyles: Record<BadgeTone, React.CSSProperties> = {
  navy: { background: "var(--accent-soft)", color: "var(--accent-primary)" },
  brass: { background: "var(--accent-soft)", color: "var(--accent-primary)" },
  success: { background: "var(--status-running-soft)", color: "var(--status-running)" },
  warning: { background: "rgba(234, 179, 8, 0.1)", color: "var(--status-warning)" },
  error: { background: "var(--status-error-soft)", color: "var(--status-error)" },
  info: { background: "var(--accent-soft)", color: "var(--accent-primary)" },
};

export function Badge({
  tone = "navy",
  children,
  className = "",
}: {
  tone?: BadgeTone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-[3px] border px-2 py-0.5 text-[11px] font-medium tracking-tight ${className}`}
      style={{
        ...badgeToneStyles[tone],
        borderColor: "var(--border-default)",
      }}
    >
      {children}
    </span>
  );
}

export function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`skeleton rounded-md ${className}`} />;
}

/**
 * PageShell — wrap the content of any regular student / teacher page with
 * this to get the standard scrollable, padded, max-width canvas.
 * The AI Tutor page manages its own full-height layout and does NOT use this.
 */
export function PageShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex-1 overflow-y-auto`}>
      <div className={`mx-auto max-w-[1180px] px-6 py-6 ${className}`}>
        {children}
      </div>
    </div>
  );
}

export function PageTitle({
  title,
  subtitle,
  right,
}: {
  title: string;
  subtitle?: string;
  right?: ReactNode;
}) {
  return (
    <div
      className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b pb-4"
      style={{ borderColor: "var(--border-default)" }}
    >
      <div>
        <h1
          className="font-display text-[22px] font-semibold tracking-tight flex items-center gap-2"
          style={{ color: "var(--text-primary)" }}
        >
          <span style={{ color: "var(--accent-primary)" }}>■</span>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-1 text-[11px] uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
            {subtitle}
          </p>
        )}
      </div>
      {right}
    </div>
  );
}

export function EmptyState({
  title,
  body,
  action,
}: {
  title: string;
  body: string;
  action?: ReactNode;
}) {
  return (
    <div className="ledger-card flex flex-col items-center gap-3 px-6 py-14 text-center">
      <h3
        className="font-display text-[19px] font-semibold"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h3>
      <p className="max-w-sm text-[13px]" style={{ color: "var(--text-muted)" }}>
        {body}
      </p>
      {action}
    </div>
  );
}

export function ErrorState({
  message,
  onRetry,
}: {
  message: string;
  onRetry?: () => void;
}) {
  return (
    <div
      className="flex items-center gap-3 rounded-md border px-4 py-3"
      style={{
        borderColor: "var(--status-error)",
        background: "var(--status-error-soft)",
      }}
    >
      <div>
        <p className="text-[13px] font-semibold" style={{ color: "var(--status-error)" }}>
          Something went wrong
        </p>
        <p className="text-[12px]" style={{ color: "var(--text-muted)" }}>
          {message}
        </p>
      </div>
      {onRetry && (
        <Button variant="danger" onClick={onRetry} className="ml-auto shrink-0">
          Retry
        </Button>
      )}
    </div>
  );
}

export function LoadingRows({ rows = 4 }: { rows?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="ledger-card p-4">
          <Skeleton className="mb-2 h-4 w-2/5" />
          <Skeleton className="h-3 w-3/4" />
        </div>
      ))}
    </div>
  );
}

export function StatCard({
  label,
  value,
  tone = "ink",
  footnote,
}: {
  label: string;
  value: string | number;
  tone?: "ink" | "brass" | "success" | "error" | "navy";
  footnote?: string;
}) {
  const toneColor: Record<string, string> = {
    ink: "var(--text-primary)",
    brass: "var(--accent-primary)",
    success: "var(--status-running)",
    error: "var(--status-error)",
    navy: "var(--accent-primary)",
  };
  return (
    <div className="ledger-card kpi-card p-4">
      <p
        className="text-[11px] font-semibold uppercase tracking-wide"
        style={{ color: "var(--text-muted)" }}
      >
        {label}
      </p>
      <p
        className="tnum font-display mt-1 text-[28px] font-semibold"
        style={{ color: toneColor[tone] }}
      >
        {value}
      </p>
      {footnote && (
        <p className="mt-1 text-[11px]" style={{ color: "var(--text-muted)" }}>
          {footnote}
        </p>
      )}
    </div>
  );
}

export function MasteryBar({ value }: { value: number }) {
  const pct = Math.round(Math.max(0, Math.min(1, value)) * 100);
  const color =
    pct >= 70
      ? "var(--status-running)"
      : pct >= 40
        ? "var(--status-warning)"
        : "var(--status-error)";
  return (
    <div className="flex items-center gap-2">
      <div
        className="h-2 w-full max-w-[160px] overflow-hidden rounded-full"
        style={{ background: "var(--bg-tertiary)" }}
      >
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
      <span className="tnum text-[11px]" style={{ color: "var(--text-muted)" }}>
        {pct}%
      </span>
    </div>
  );
}

export function Toast({
  kind,
  children,
}: {
  kind: "success" | "error" | "info";
  children: ReactNode;
}) {
  const toneMap: Record<string, React.CSSProperties> = {
    success: {
      borderColor: "var(--status-running)",
      background: "var(--status-running-soft)",
      color: "var(--status-running)",
    },
    error: {
      borderColor: "var(--status-error)",
      background: "var(--status-error-soft)",
      color: "var(--status-error)",
    },
    info: {
      borderColor: "var(--accent-primary)",
      background: "var(--accent-soft)",
      color: "var(--accent-primary)",
    },
  };
  return (
    <div
      className="animate-[fadeIn_0.24s_ease-out] fixed right-4 top-4 z-50 rounded-md border px-4 py-3 text-[13px] font-medium"
      style={{ ...toneMap[kind], boxShadow: "var(--shadow-lg)" }}
    >
      {children}
    </div>
  );
}
