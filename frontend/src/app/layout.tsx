import type { Metadata } from "next";
import { Oswald, Public_Sans } from "next/font/google";
import { AuthProvider } from "@/lib/auth";
import "./globals.css";

/*
 * ─────────────────────────────────────────────────────────────
 * DIRECTION — CAMPUS NOTICE BOARD
 * seed: 8c76c9d9 (concept-seed, ASSIGNED index 3)
 * ─────────────────────────────────────────────────────────────
 * THESIS        VTU study tools rendered as a real notice board:
 *               green cork board, paper sheets pinned with
 *               red-headed pins, rubber-stamp statuses,
 *               pencil-underlined forms, brass nails.
 * OWN-WORLD     Every surface is either board (green), sheet
 *               (paper/sheet-*) or hardware (pin/stamp/brass).
 *               No glassy cards, no shadows, no 8px+ radii,
 *               no gradients. Only Oswald (headers) + Public
 *               Sans (body). Borders are 2–3px ink or hairline.
 * STORY         Pinned sheets update in place (a new notice
 *               slides in, a stamp lands, a score is nailed).
 *               Motion is brief: pin-drop, stamp-land, fade.
 * FIRST VIEWPORT  login: board + pinned "Notice of entry" sheet.
 * FORM          Inputs are pencil-underlined lines on paper;
 *               Selects/Buttons/checkboxes stay native-shaped
 *               but ink-toned. Focus ring = brass.
 * FINISH        All 22 pages: board shell, pinned sheets,
 *               stamp badges, pencil fields, Oswald headers.
 *               Functions/APIs unchanged — look only.
 * ─────────────────────────────────────────────────────────────
 */

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AdaptLearn — Adaptive Learning for VTU",
  description:
    "Adaptive learning platform: RAG tutor, mastery tracking, scheduling, tests and analytics for VTU students and teachers.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${oswald.variable} ${publicSans.variable}`}>
      <body className="min-h-screen">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
