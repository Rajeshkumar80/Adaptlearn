import { ReactNode } from "react";
import SideNav from "@/components/SideNav";
import { RoleGuard } from "@/components/RoleGuard";

export default function StudentLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <RoleGuard role="STUDENT" />
      <SideNav />
      {/*
        `min-h-0` lets the flex child shrink below its content height so that
        child pages can use `h-full` reliably.  Pages that want full-height
        mode (e.g. the AI Tutor) declare their own nested layout (tutor/layout.tsx)
        that skips this wrapper; regular pages get the standard scrollable canvas.
      */}
      <main className="flex min-h-0 flex-1 flex-col overflow-hidden" style={{ background: "var(--bg-primary)" }}>
        {children}
      </main>
    </div>
  );
}
