export interface AnalyticsData {
  classes: { id: string; name: string; branch: string; semester: number }[];
  counts: {
    students: number;
    tests: number;
    submissions: number;
    cheatFlags: number;
    notes: number;
    assignments: number;
  };
  avgScore: number | null;
  recentResults: {
    id: string;
    score: number;
    totalMarks: number;
    submittedAt: string;
    student: { name: string; usn: string | null };
    test: { title: string };
  }[];
}

export interface CheatFlag {
  id: string;
  testId: string;
  type: string;
  severity: string;
  details: string;
  createdAt: string;
  student: { name: string; usn: string | null };
  test: { title: string };
}

// Dual-contrast literals (not var()): recharts SVG attributes don't resolve CSS custom properties.
// ponytail: keep in sync visually with globals.css tokens if the theme changes.
export const C = {
  navy: "#e8720c",
  navySoft: "rgba(232, 114, 12, 0.08)",
  brass: "#f59e0b",
  success: "#22c55e",
  error: "#ef4444",
  warning: "#eab308",
  info: "#3b82f6",
  inkMuted: "#78716c",
  hairline: "#a8a29e",
  grid: "rgba(120, 113, 108, 0.35)",
  paperDeep: "rgba(120, 113, 108, 0.12)",
};

export const PALETTE = [C.navy, C.brass, C.success, C.warning, C.info, C.error];
