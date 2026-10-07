import { ReactNode } from "react";

/**
 * The tutor page manages its own full-height scroll internally
 * (sidebar + chat panel).  This layout wrapper simply passes children
 * through without any extra padding or overflow wrapper, so the page
 * can use `h-full overflow-hidden` against the parent flex container.
 */
export default function TutorLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
