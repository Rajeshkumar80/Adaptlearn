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

export const C = {
  navy: "#1e3a5f",
  navySoft: "#e9eef5",
  brass: "#a67c2e",
  success: "#2f6b4f",
  error: "#a03a2e",
  warning: "#a05e1c",
  info: "#3e6d9c",
  inkMuted: "#6e6656",
  hairline: "#e2e2de",
  grid: "#d8cdb4",
  paperDeep: "#ececea",
};

export const PALETTE = [C.navy, C.brass, C.success, C.warning, C.info, C.error];
