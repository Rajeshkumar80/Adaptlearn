import { ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline" | "danger" | "brass";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[2px] px-4 py-2 text-[13px] font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-paper hover:bg-navy-deep",
  ghost: "bg-transparent text-navy hover:bg-navy-soft",
  outline: "bg-transparent text-navy border border-hairline hover:border-navy",
  danger: "bg-error text-paper hover:opacity-90",
  brass: "bg-brass text-paper hover:opacity-90",
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
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
      className="w-full rounded-[2px] border border-hairline bg-paper px-3 py-2 text-sm placeholder:text-ink-muted focus:border-navy focus:outline-none"
      {...props}
    />
  );
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className="w-full rounded-[2px] border border-hairline bg-paper px-3 py-2 text-sm focus:border-navy focus:outline-none"
      {...props}
    />
  );
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className="w-full rounded-[2px] border border-hairline bg-paper px-3 py-2 text-sm placeholder:text-ink-muted focus:border-navy focus:outline-none"
      {...props}
    />
  );
}

type BadgeTone = "navy" | "brass" | "success" | "warning" | "error" | "info";

const badgeTones: Record<BadgeTone, string> = {
  navy: "bg-navy-soft text-navy",
  brass: "bg-warning-soft text-brass",
  success: "bg-success-soft text-success",
  warning: "bg-warning-soft text-warning",
  error: "bg-error-soft text-error",
  info: "bg-navy-soft text-info",
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
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${badgeTones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

export function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`skeleton rounded-[2px] ${className}`} />;
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
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-hairline pb-4">
      <div>
        <h1 className="font-display text-[26px] font-semibold text-ink">{title}</h1>
        {subtitle && <p className="mt-1 text-[13px] text-ink-muted">{subtitle}</p>}
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
      <h3 className="font-display text-[19px] font-semibold text-ink">{title}</h3>
      <p className="max-w-sm text-[13px] text-ink-muted">{body}</p>
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
    <div className="flex items-center gap-3 rounded-[2px] border border-error bg-error-soft px-4 py-3">
      <div>
        <p className="text-[13px] font-semibold text-error">Something went wrong</p>
        <p className="text-[12px] text-ink-muted">{message}</p>
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
    ink: "text-ink",
    brass: "text-brass",
    success: "text-success",
    error: "text-error",
    navy: "text-navy",
  };
  return (
    <div className="ledger-card p-4">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
        {label}
      </p>
      <p className={`tnum font-display mt-1 text-[28px] font-semibold ${toneColor[tone]}`}>
        {value}
      </p>
      {footnote && <p className="mt-1 text-[11px] text-ink-muted">{footnote}</p>}
    </div>
  );
}

export function MasteryBar({ value }: { value: number }) {
  const pct = Math.round(Math.max(0, Math.min(1, value)) * 100);
  const color =
    pct >= 70 ? "bg-success" : pct >= 40 ? "bg-brass" : "bg-error";
  return (
    <div className="flex items-center gap-2">
      <div className="h-2 w-full max-w-[160px] overflow-hidden rounded-full bg-paper-deep">
        <div
          className={`h-full rounded-full ${color} transition-all`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="tnum text-[11px] text-ink-muted">{pct}%</span>
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
  const tone =
    kind === "success"
      ? "border-success bg-success-soft text-success"
      : kind === "error"
        ? "border-error bg-error-soft text-error"
        : "border-info bg-navy-soft text-info";
  return (
    <div
      className={`animate-[fadeIn_0.24s_ease-out] fixed right-4 top-4 z-50 rounded-[2px] border px-4 py-3 text-[13px] font-medium shadow-lg ${tone}`}
    >
      {children}
    </div>
  );
}
