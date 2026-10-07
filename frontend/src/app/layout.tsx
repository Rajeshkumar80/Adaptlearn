import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { AuthProvider } from "@/lib/auth";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AdaptLearn — Adaptive Learning for VTU",
  description:
    "Adaptive learning platform: RAG tutor, mastery tracking, scheduling, tests and analytics for VTU students and teachers.",
};

/**
 * Inline script that runs before React hydration to set the dark class
 * and prevent flash-of-wrong-theme (FOWT).
 */
const themeInitScript = `
  (function() {
    try {
      var stored = localStorage.getItem('theme');
      if (stored !== 'light') {
        document.documentElement.classList.add('dark');
      }
    } catch(e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={jetbrainsMono.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
