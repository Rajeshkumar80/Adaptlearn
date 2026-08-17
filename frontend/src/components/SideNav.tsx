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

export default function SideNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();
  const isTeacher = user?.role === "TEACHER";
  const nav = isTeacher ? teacherNav : studentNav;

  return (
    <aside className="flex h-full w-56 shrink-0 flex-col border-r border-hairline bg-paper-alt">
      <Link href="/" className="flex items-center gap-2 border-b border-hairline px-5 py-4">
        <GraduationCap className="h-6 w-6 text-brass" />
        <div>
          <p className="font-display text-[17px] font-semibold leading-none text-navy">
            AdaptLearn
          </p>
          <p className="mt-0.5 text-[10px] uppercase tracking-widest text-ink-muted">
            Academic Ledger
          </p>
        </div>
      </Link>

      <nav className="flex-1 overflow-y-auto py-3">
        <p className="px-5 pb-2 text-[10px] font-semibold uppercase tracking-widest text-ink-muted">
          {isTeacher ? "Teacher" : "Student"}
        </p>
        {nav.map((item) => {
          const active = pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 border-l-2 px-5 py-2.5 text-[13px] font-medium transition-colors ${
                active
                  ? "border-brass bg-paper text-navy"
                  : "border-transparent text-ink-muted hover:bg-paper hover:text-ink"
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-hairline px-5 py-4">
        <p className="truncate text-[13px] font-semibold text-ink">{user?.name}</p>
        <p className="truncate text-[11px] text-ink-muted">
          {isTeacher ? "Teacher" : user?.usn || user?.email}
        </p>
        <button
          onClick={() => {
            logout();
            router.push("/login");
          }}
          className="mt-2 flex items-center gap-2 text-[12px] font-medium text-ink-muted hover:text-error"
        >
          <LogOut className="h-3.5 w-3.5" /> Sign out
        </button>
      </div>
    </aside>
  );
}

export { Bell };
