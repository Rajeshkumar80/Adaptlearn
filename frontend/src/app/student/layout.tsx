import { ReactNode } from "react";
import SideNav from "@/components/SideNav";
import { RoleGuard } from "@/components/RoleGuard";

export default function StudentLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <RoleGuard role="STUDENT" />
      <SideNav />
      <main className="flex-1 overflow-y-auto bg-paper">
        <div className="mx-auto max-w-[1180px] px-6 py-6">{children}</div>
      </main>
    </div>
  );
}
