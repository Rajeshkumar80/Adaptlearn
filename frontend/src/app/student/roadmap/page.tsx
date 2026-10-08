"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { PageShell, Card, Button } from "@/components/ui";
import { CalendarClock, Route, ArrowRight } from "lucide-react";

export default function RoadmapRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    // Auto-redirect to unified scheduler where Roadmap and Planner are unified
    const timer = setTimeout(() => {
      router.replace("/student/scheduler");
    }, 600);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <PageShell>
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="p-8 text-center max-w-md w-full border-[var(--border-default)]">
          <div className="w-12 h-12 rounded-full bg-[var(--accent-primary)]/15 flex items-center justify-center mx-auto mb-4 text-[var(--accent-primary)]">
            <CalendarClock className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-bold text-[var(--text-primary)] font-display">
            Roadmap Merged into Unified Scheduler
          </h2>
          <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
            The prerequisite graph and task planner are now unified into a single adaptive scheduler with live unlock events. Redirecting you automatically…
          </p>
          <div className="mt-6">
            <Button
              className="w-full text-xs"
              onClick={() => router.replace("/student/scheduler")}
            >
              Go to Unified Scheduler
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </div>
        </Card>
      </div>
    </PageShell>
  );
}