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
    else router.replace("/student/dashboard");
  }, [user, loading, router]);

  return (
    <div className="flex h-screen items-center justify-center bg-navy-deep">
      <p className="font-display text-[20px] text-paper">Opening the ledger…</p>
    </div>
  );
}
