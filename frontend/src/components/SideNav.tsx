"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  MessageSquareText,
  CalendarClock,
  TrendingUp,
  Route,
  FileText,
  ClipboardList,
  Bell,
  Users,
  ShieldAlert,
  ChartColumn,
} from "lucide-react";
import { useAuth } from "@/lib/auth";
import { Pin } from "@/components/ui";

const studentNav = [
  { href: "/student/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/student/tutor", label: "AI Tutor", icon: MessageSquareText },
  { href: "/student/scheduler", label: "Scheduler", icon: CalendarClock },
  { href: "/student/progress", label: "How I Learn", icon: TrendingUp },
  { href: "/student/notes", label: "Notes", icon: BookOpen },
  { href: "/student/assignments", label: "Assignments", icon: ClipboardList },
  { href: "/student/roadmap", label: "Roadmap", icon: Route },
  { href: "/student/tests", label: "Tests", icon: FileText },
];

const teacherNav = [
  { href: "/teacher/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/teacher/analytics", label: "Analytics", icon: ChartColumn },
  { href: "/teacher/notes", label: "Notes", icon: BookOpen },
  { href: "/teacher/assignments", label: "Assignments", icon: ClipboardList },
  { href: "/teacher/tests", label: "Tests", icon: ShieldAlert },
  { href: "/teacher/classes", label: "Classes", icon: Users },
];

const adminNav = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
];

export default function SideNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();
  const role = user?.role ?? "STUDENT";
  const isTeacher = role === "TEACHER";
  const isAdmin = role === "ADMIN";
  const nav = isTeacher ? teacherNav : isAdmin ? adminNav : studentNav;

  return (
    <aside className="flex h-full w-56 shrink-0 flex-col border-r-2 border-board-deep bg-board text-paper">
      <Link href="/" className="flex items-center gap-2 border-b-2 border-board-deep px-5 py-4">
        <GraduationCap className="h-6 w-6 text-sheet-yellow" />
        <div>
          <p className="font-display text-[19px] font-semibold uppercase leading-none tracking-[0.04em] text-paper">
            AdaptLearn
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-paper/60">
            Campus Notice Board
          </p>
        </div>
      </Link>

      <nav className="flex-1 overflow-y-auto py-3">
        <p className="px-5 pb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-paper/60">
          {isTeacher ? "Teacher" : isAdmin ? "Admin" : "Student"}
        </p>
        {nav.map((item) => {
          const active = pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex items-center gap-3 px-5 py-2.5 text-[13px] font-medium transition-colors ${
                active
                  ? "bg-board-soft text-paper"
                  : "text-paper/70 hover:bg-board-soft/60 hover:text-paper"
              }`}
            >
              {active && <Pin className="absolute -top-2 left-4 h-4 w-4" />}
              <Icon className="h-4 w-4" />
              <span className="uppercase tracking-[0.06em]">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t-2 border-board-deep px-5 py-4">
        <p className="truncate text-[13px] font-semibold text-paper">{user?.name}</p>
        <p className="truncate text-[11px] text-paper/60">
          {isTeacher ? "Teacher" : isAdmin ? "Administrator" : user?.usn || user?.email}
        </p>
        <button
          onClick={() => {
            logout();
            router.push("/login");
          }}
          className="mt-2 flex items-center gap-2 text-[12px] font-medium text-paper/70 hover:text-sheet-pink"
        >
          <LogOut className="h-3.5 w-3.5" /> Sign out
        </button>
      </div>
    </aside>
  );
}

export { Bell };
