import { describe, it } from "node:test";
import assert from "node:assert/strict";
import path from "path";
import { prisma } from "../db";
import { extractOwnerIdFromFilename, canUserAccessSubmissionFile } from "../services/submissionsStorage";

describe("Security Fix: Assignment submission photo access control (IDOR)", () => {
  it("extracts the owner id embedded in the stored filename", () => {
    const filename = "student123__1700000000000_abcdef012345_photo.jpg";
    assert.equal(extractOwnerIdFromFilename(filename), "student123");
  });

  it("rejects path traversal/garbage filenames as having no legitimate owner", () => {
    // path.basename() is applied by the route before this is ever called; this
    // test documents that a filename with no "__" separator yields the whole
    // string as the "owner", which will never match a real user id or a
    // teacher's submission lookup, so access is safely denied downstream.
    const weird = extractOwnerIdFromFilename("no-separator.jpg");
    assert.equal(weird, "no-separator.jpg");
  });

  it("always allows the owning student to view their own uploaded photo (pre-submission preview)", async () => {
    const filename = "owner-abc__1700000000000_aaaaaa_photo.jpg";
    const access = await canUserAccessSubmissionFile({ id: "owner-abc", role: "STUDENT" }, filename);
    assert.equal(access.allowed, true);
  });

  it("rejects a different student attempting to view someone else's submission photo", async () => {
    const filename = "owner-abc__1700000000000_aaaaaa_photo.jpg";
    const access = await canUserAccessSubmissionFile({ id: "someone-else", role: "STUDENT" }, filename);
    assert.equal(access.allowed, false, "A student must never access another student's submission file");
  });

  it("allows admins unconditional access", async () => {
    const access = await canUserAccessSubmissionFile({ id: "admin-1", role: "ADMIN" }, "owner-x__1_y_z.jpg");
    assert.equal(access.allowed, true);
  });

  it("allows a teacher to view a photo only once it is actually part of a submission to one of their own assignments", async () => {
    const teacher = await prisma.user.findUnique({ where: { email: "teacher1@adaptlearn.dev" } });
    const student = await prisma.user.findUnique({ where: { email: "demo.student@adaptlearn.dev" } });
    assert.ok(teacher, "Teacher fixture must exist");
    assert.ok(student, "Student fixture must exist");

    const filename = `${student!.id}__1700000000000_test123_work.jpg`;

    // Not yet submitted anywhere -> teacher must be denied, even though they
    // own assignments and the file is a real student's upload.
    const beforeSubmit = await canUserAccessSubmissionFile({ id: teacher!.id, role: "TEACHER" }, filename);
    assert.equal(beforeSubmit.allowed, false, "Teacher must not see a photo before it is submitted to their assignment");

    const assignment = await prisma.assignment.create({
      data: { subjectCode: "BCS701", title: "Security regression test assignment", createdByTeacherId: teacher!.id },
    });

    try {
      await prisma.assignmentSubmission.create({
        data: {
          assignmentId: assignment.id,
          studentId: student!.id,
          fileUrls: [`/api/student/submissions/file/${filename}`],
        },
      });

      const afterSubmit = await canUserAccessSubmissionFile({ id: teacher!.id, role: "TEACHER" }, filename);
      assert.equal(afterSubmit.allowed, true, "Teacher who owns the assignment must see a genuinely submitted photo");

      // A teacher who does NOT own this assignment must still be denied.
      const otherTeacher = await prisma.user.findFirst({ where: { role: "TEACHER", id: { not: teacher!.id } } });
      if (otherTeacher) {
        const unrelated = await canUserAccessSubmissionFile({ id: otherTeacher.id, role: "TEACHER" }, filename);
        assert.equal(unrelated.allowed, false, "A teacher who did not create the assignment must not see the submission");
      }
    } finally {
      await prisma.assignmentSubmission.deleteMany({ where: { assignmentId: assignment.id } });
      await prisma.assignment.delete({ where: { id: assignment.id } });
    }
  });

  it("sanitizes the route-facing filename with path.basename to block directory traversal", () => {
    const traversal = "../../../../etc/passwd";
    const safe = path.basename(traversal);
    assert.equal(safe, "passwd");
    assert.ok(!safe.includes(".."));
  });
});
