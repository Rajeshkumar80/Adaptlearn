"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    if (!user) router.replace("/login");
    else if (user.role === "TEACHER") router.replace("/teacher/dashboard");
    else if (user.role === "ADMIN") router.replace("/admin/dashboard");
    else router.replace("/student/dashboard");
  }, [user, loading, router]);

  return (
    <div className="flex h-screen items-center justify-center bg-board">
      <div className="ledger-card sheet-yellow pinned px-8 py-6">
        <p className="font-display text-[18px] uppercase tracking-wide text-ink">
          Pinning your notices…
        </p>
      </div>
    </div>
  );
}
