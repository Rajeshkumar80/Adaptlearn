"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";

export function RoleGuard({ role }: { role: "STUDENT" | "TEACHER" }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (loading) return;
    if (!user) {
      router.replace(`/login?next=${encodeURIComponent(pathname)}`);
      return;
    }
    if (role === "TEACHER" && user.role !== "TEACHER") {
      router.replace("/student/dashboard");
      return;
    }
    if (role === "STUDENT" && user.role !== "STUDENT") {
      router.replace("/teacher/dashboard");
    }
  }, [user, loading, role, router, pathname]);

  if (loading || !user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="skeleton h-6 w-6 rounded-full" />
          <p className="text-[13px] text-ink-muted">Opening the ledger…</p>
        </div>
      </div>
    );
  }
  return null;
}
