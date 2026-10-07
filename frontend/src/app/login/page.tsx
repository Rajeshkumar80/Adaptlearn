"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { GraduationCap } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { errorMessage } from "@/lib/api";
import { Button, Input } from "@/components/ui";
import ThemeToggle from "@/components/ThemeToggle";

function LoginForm() {
  const { login } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("demo.student@adaptlearn.dev");
  const [password, setPassword] = useState("Student@123");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      const user = await login(email, password);
      const next = searchParams.get("next");
      if (next && next.startsWith("/")) {
        router.replace(next);
      } else if (user.role === "TEACHER") {
        router.replace("/teacher/dashboard");
      } else {
        router.replace("/student/dashboard");
      }
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center px-4" style={{ background: "var(--bg-login)" }}>
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <GraduationCap className="mx-auto h-10 w-10" style={{ color: "var(--accent-primary)" }} />
          <h1 className="font-display mt-3 text-[28px] font-semibold" style={{ color: "var(--accent-primary)" }}>
            AdaptLearn
          </h1>
          <p className="mt-1 text-[12px] uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
            Adaptive learning for VTU
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="ledger-card p-6 shadow-xl"
          style={{ background: "var(--bg-elevated)" }}
        >
          <label className="mb-1 block text-[12px] font-semibold" style={{ color: "var(--text-muted)" }}>
            Email
          </label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="mb-1 mt-4 block text-[12px] font-semibold" style={{ color: "var(--text-muted)" }}>
            Password
          </label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && (
            <p className="mt-3 rounded-md border px-3 py-2 text-[12px]" style={{ borderColor: "var(--status-error)", background: "var(--status-error-soft)", color: "var(--status-error)" }}>
              {error}
            </p>
          )}
          <Button type="submit" disabled={busy} className="mt-5 w-full">
            {busy ? "Signing in…" : "Sign in"}
          </Button>
          <p className="mt-4 text-center text-[11px]" style={{ color: "var(--text-muted)" }}>
            Demo: demo.student@adaptlearn.dev · teacher1@adaptlearn.dev
          </p>
        </form>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
