import { ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline" | "danger" | "brass";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[2px] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] transition-[background-color,transform] duration-100 active:translate-y-[1px] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

const variants: Record<Variant, string> = {
  primary: "bg-board text-paper hover:bg-board-soft",
  ghost: "bg-transparent text-board hover:bg-navy-soft",
  outline: "bg-transparent text-board border border-hairline hover:border-board",
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

export function Pin({ className = "pin" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M14.5 4.2c-1.4-.3-2.8-.2-4 .2C8.6 5 7.6 6.6 7.7 8.3c.1 1.6.9 2.6 1.6 3.9L8.6 20c-.1.6.3 1.1.9 1.1h5c.6 0 1-.5.9-1.1l-.7-7.8c.7-1.3 1.5-2.3 1.6-3.9.1-1.7-.9-3.3-2.8-4.1Z"
        fill="#c4453a"
        stroke="#8f2e24"
        strokeWidth="0.8"
      />
      <circle cx="11.8" cy="8.6" r="2.1" fill="#f5d5cc" stroke="#8f2e24" strokeWidth="0.6" />
    </svg>
  );
}

export function Card({
  children,
  className = "",
  sheet,
  pinned = true,
}: {
  children: ReactNode;
  className?: string;
  sheet?: "yellow" | "pink" | "blue" | "green";
  pinned?: boolean;
}) {
  const sheetClass = sheet ? `sheet-${sheet}` : "";
  return (
    <div className={`ledger-card p-5 ${sheetClass} ${className}`}>
      {pinned && <Pin />}
      {children}
    </div>
  );
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
      className="form-field w-full px-3 py-2 text-sm"
      {...props}
    />
  );
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className="form-field w-full px-3 py-2 text-sm"
      {...props}
    />
  );
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className="form-field w-full px-3 py-2 text-sm"
      {...props}
    />
  );
}

type BadgeTone = "navy" | "brass" | "success" | "warning" | "error" | "info";

const badgeInk: Record<BadgeTone, string> = {
  navy: "text-board",
  brass: "text-brass",
  success: "text-success",
  warning: "text-warning",
  error: "text-error",
  info: "text-info",
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
    <span className={`stamp stamp-enter ${badgeInk[tone]} ${className}`}>
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
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b-2 border-board pb-4">
      <div>
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
          AdaptLearn · Notice
        </p>
        <h1 className="font-display text-[30px] font-semibold uppercase leading-none tracking-[0.02em] text-ink">
          {title}
        </h1>
        {subtitle && <p className="mt-2 text-[13px] text-ink-muted">{subtitle}</p>}
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
      <Pin />
      <h3 className="font-display text-[22px] font-semibold uppercase tracking-[0.02em] text-ink">
        {title}
      </h3>
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
        <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-error">
          Something went wrong
        </p>
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
    navy: "text-board",
  };
  return (
    <div className="ledger-card p-4">
      <Pin />
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
        {label}
      </p>
      <p className={`tnum font-display mt-1 text-[30px] font-semibold leading-none ${toneColor[tone]}`}>
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
      <div className="h-2 w-full max-w-[160px] overflow-hidden rounded-full border border-hairline bg-paper-deep">
        <div
          className={`h-full rounded-full ${color} transition-all duration-300 ease-out`}
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
        : "border-info bg-info-soft text-info";
  return (
    <div
      className={`animate-[pin-drop_0.22s_cubic-bezier(0.22,1,0.36,1)] fixed right-4 top-4 z-50 rounded-[2px] border px-4 py-3 text-[13px] font-medium shadow-lg ${tone}`}
    >
      <Pin className="pin" />
      {children}
    </div>
  );
}
