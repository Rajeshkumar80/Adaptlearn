import { prisma } from "../db";

export interface SubmissionAuthUser {
  id: string;
  role: string;
}

/**
 * Submission photo filenames are stored as `<ownerStudentId>__<timestamp>_<random>_<name>`.
 * This lets the owning student view their own just-uploaded photo before any
 * AssignmentSubmission row exists (preview step), without a DB round trip.
 */
export function extractOwnerIdFromFilename(filename: string): string {
  return filename.split("__")[0];
}

/**
 * Verifies whether a user may stream a given submission-photo filename.
 * - The owning student (id embedded in filename) may always view it.
 * - Admins may view any submission file.
 * - A teacher may view it only if some submission by that owner, for an
 *   assignment the teacher created, actually lists this exact filename in
 *   its fileUrls — i.e. it was genuinely submitted to one of their assignments.
 */
export async function canUserAccessSubmissionFile(
  user: SubmissionAuthUser,
  safeFilename: string
): Promise<{ allowed: boolean; reason?: string }> {
  const ownerId = extractOwnerIdFromFilename(safeFilename);

  if (user.role === "ADMIN") return { allowed: true };
  if (user.role === "STUDENT" && user.id === ownerId) return { allowed: true };

  if (user.role === "TEACHER") {
    const submissions = await prisma.assignmentSubmission.findMany({
      where: { studentId: ownerId, assignment: { createdByTeacherId: user.id } },
      select: { fileUrls: true },
    });
    const matched = submissions.some(
      (s) =>
        Array.isArray(s.fileUrls) &&
        (s.fileUrls as string[]).some((u) => typeof u === "string" && u.endsWith(`/${safeFilename}`))
    );
    if (matched) return { allowed: true };
    return { allowed: false, reason: "Forbidden: not a submission to one of your assignments" };
  }

  return { allowed: false, reason: "Forbidden" };
}
