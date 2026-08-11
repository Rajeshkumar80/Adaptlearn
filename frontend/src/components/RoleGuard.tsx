"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";

export function RoleGuard({ role }: { role: "STUDENT" | "TEACHER" | "ADMIN" }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (loading) return;
    if (!user) {
      router.replace(`/login?next=${encodeURIComponent(pathname)}`);
      return;
    }
    const home =
      user.role === "TEACHER"
        ? "/teacher/dashboard"
        : user.role === "ADMIN"
          ? "/admin/dashboard"
          : "/student/dashboard";
    if (user.role !== role) {
      router.replace(home);
    }
  }, [user, loading, role, router, pathname]);

  if (loading || !user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="skeleton h-6 w-6 rounded-full" />
          <p className="text-[13px] text-ink-muted">Pinning the notices…</p>
        </div>
      </div>
    );
  }
  return null;
}
