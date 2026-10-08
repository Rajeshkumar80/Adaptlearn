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
import ThemeToggle from "@/components/ThemeToggle";

const studentNav = [
  { href: "/student/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/student/tutor", label: "AI Tutor", icon: MessageSquareText },
  { href: "/student/scheduler", label: "Scheduler", icon: CalendarClock },
  { href: "/student/progress", label: "Learning Intelligence", icon: TrendingUp },
  { href: "/student/notes", label: "Notes", icon: BookOpen },
  { href: "/student/assignments", label: "Assignments", icon: ClipboardList },
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
    <aside
      className="flex h-full w-56 shrink-0 flex-col border-r"
      style={{
        background: "var(--bg-sidebar)",
        borderColor: "var(--border-default)",
      }}
    >
      {/* Brand header */}
      <Link
        href="/"
        className="flex items-center gap-2.5 border-b px-5 py-4"
        style={{ borderColor: "var(--border-default)" }}
      >
        <span
          className="flex h-8 w-8 items-center justify-center rounded-md"
          style={{ background: "var(--accent-soft)" }}
        >
          <GraduationCap className="h-5 w-5" style={{ color: "var(--accent-primary)" }} />
        </span>
        <div>
          <p
            className="font-display text-[15px] font-semibold leading-none tracking-tight"
            style={{ color: "var(--accent-primary)" }}
          >
            AdaptLearn
          </p>
          <p
            className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.2em]"
            style={{ color: "var(--text-muted)" }}
          >
            Adaptive Learning
          </p>
        </div>
      </Link>

      {/* Navigation links */}
      <nav className="flex-1 overflow-y-auto py-3">
        <p
          className="px-5 pb-2 text-[10px] font-semibold uppercase tracking-widest"
          style={{ color: "var(--text-muted)" }}
        >
          {isTeacher ? "Teacher" : "Student"}
        </p>
        {nav.map((item) => {
          const active = pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 border-l-2 px-5 py-2.5 text-[13px] font-medium transition-all duration-200"
              style={{
                borderColor: active ? "var(--accent-primary)" : "transparent",
                background: active ? "var(--accent-soft)" : "transparent",
                color: active ? "var(--accent-primary)" : "var(--text-secondary)",
              }}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer: theme toggle + user info */}
      <div
        className="border-t px-5 py-4"
        style={{ borderColor: "var(--border-default)" }}
      >
        <div className="mb-3 flex items-center justify-between">
          <div className="min-w-0 flex-1">
            <p
              className="truncate text-[13px] font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              {user?.name}
            </p>
            <p
              className="truncate text-[11px]"
              style={{ color: "var(--text-muted)" }}
            >
              {isTeacher ? "Teacher" : user?.usn || user?.email}
            </p>
          </div>
          <ThemeToggle />
        </div>
        <button
          onClick={() => {
            logout();
            router.push("/login");
          }}
          className="flex items-center gap-2 text-[12px] font-medium transition-colors duration-200"
          style={{ color: "var(--text-muted)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--status-error)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
        >
          <LogOut className="h-3.5 w-3.5" /> Sign out
        </button>
      </div>
    </aside>
  );
}

export { Bell };
