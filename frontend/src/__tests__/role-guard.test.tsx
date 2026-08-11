import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { RoleGuard } from "@/components/RoleGuard";
import { AuthContext, User } from "@/lib/auth";

const replace = vi.fn();

vi.mock("next/navigation", () => ({
  usePathname: () => "/teacher/dashboard",
  useRouter: () => ({ replace }),
}));

function renderWithRole(user: User | null, loading = false) {
  return render(
    <AuthContext.Provider value={{ user, loading, login: vi.fn(), logout: vi.fn() }}>
      <RoleGuard role="TEACHER" />
    </AuthContext.Provider>
  );
}

const teacher: User = {
  id: "t1",
  email: "teacher1@adaptlearn.dev",
  name: "Teacher One",
  role: "TEACHER",
};

const student: User = {
  id: "s1",
  email: "student@adaptlearn.dev",
  name: "Student One",
  role: "STUDENT",
  usn: "1BI22CS001",
  classId: "class-cse-5a",
};

describe("RoleGuard", () => {
  beforeEach(() => {
    replace.mockClear();
  });

  it("shows the loading splash while auth is resolving", () => {
    renderWithRole(null, true);
    expect(screen.getByText("Pinning the notices…")).toBeInTheDocument();
  });

  it("redirects unauthenticated users to /login with the next path", async () => {
    renderWithRole(null, false);
    await waitFor(() =>
      expect(replace).toHaveBeenCalledWith(
        "/login?next=%2Fteacher%2Fdashboard"
      )
    );
  });

  it("lets a teacher through on a teacher route", () => {
    const { container } = renderWithRole(teacher, false);
    expect(container).toBeEmptyDOMElement();
    expect(replace).not.toHaveBeenCalled();
  });

  it("kicks a student off a teacher route back to the student dashboard", async () => {
    renderWithRole(student, false);
    await waitFor(() =>
      expect(replace).toHaveBeenCalledWith("/student/dashboard")
    );
  });
});
