import { ReactNode } from "react";
import SideNav from "@/components/SideNav";
import { RoleGuard } from "@/components/RoleGuard";

export default function TeacherLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-board">
      <RoleGuard role="TEACHER" />
      <SideNav />
      <main className="flex-1 overflow-y-auto bg-board">
        <div className="ledger-card mx-auto my-4 min-h-[calc(100vh-32px)] max-w-[1100px] px-8 py-6">
          {children}
        </div>
      </main>
    </div>
  );
}
