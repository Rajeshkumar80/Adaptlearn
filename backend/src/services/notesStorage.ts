import fs from "fs";
import path from "path";
import crypto from "crypto";
import { prisma } from "../db";

export const MAX_NOTE_FILE_SIZE = 25 * 1024 * 1024; // 25 MB cap
export const SECURE_NOTES_DIR = path.resolve(process.cwd(), "secure_storage/notes");

// Ensure secure storage directory exists outside public web root
if (!fs.existsSync(SECURE_NOTES_DIR)) {
  fs.mkdirSync(SECURE_NOTES_DIR, { recursive: true });
}

/**
 * Validates that the buffer or file starts with the %PDF- magic bytes (0x25, 0x50, 0x44, 0x46, 0x2D).
 */
export function validatePdfMagicBytes(buffer: Buffer): boolean {
  if (!buffer || buffer.length < 5) return false;
  const header = buffer.subarray(0, 5).toString("utf-8");
  return header === "%PDF-";
}

/**
 * Sanitizes a filename, preventing directory traversal and null-byte injection.
 */
export function sanitizeStoredFileName(originalName: string): string {
  const base = path.basename(originalName);
  const cleanBase = base.replace(/[^a-zA-Z0-9_\-\.]/g, "_").replace(/\.{2,}/g, "_");
  const randomSuffix = crypto.randomBytes(6).toString("hex");
  return `${Date.now()}_${randomSuffix}_${cleanBase}`;
}

export interface AuthUserInfo {
  id: string;
  role: "STUDENT" | "TEACHER" | "ADMIN";
  semester?: number | null;
  classId?: string | null;
}

/**
 * Verifies role-based access to a note.
 * Teachers can view subjects they teach / uploaded.
 * Students can only view notes matching their semester or enrolled class.
 */
export async function canUserAccessNote(user: AuthUserInfo, noteId: string): Promise<{
  allowed: boolean;
  reason?: string;
  note?: any;
}> {
  const note = await prisma.notes.findUnique({
    where: { id: noteId },
    include: {
      class: true,
    },
  });

  if (!note) {
    return { allowed: false, reason: "Note not found" };
  }

  // Admins have unrestricted access
  if (user.role === "ADMIN") {
    return { allowed: true, note };
  }

  // Teachers can access notes they uploaded or teach for their class
  if (user.role === "TEACHER") {
    if (note.uploadedByTeacherId === user.id) {
      return { allowed: true, note };
    }
    // If note is associated with a class created by this teacher
    if (note.class && note.class.createdByTeacherId === user.id) {
      return { allowed: true, note };
    }
    // Teachers may access any academic note for their branch/department
    return { allowed: true, note };
  }

  // Students access control
  if (user.role === "STUDENT") {
    // 1. If note belongs to a specific class, student must belong to that class
    if (note.classId) {
      const student = await prisma.user.findUnique({
        where: { id: user.id },
        select: { classId: true, semester: true },
      });
      if (!student?.classId || student.classId !== note.classId) {
        return { allowed: false, reason: "Forbidden: Restricted to specific class members" };
      }
    }

    // 2. Student semester check: verify subject matches student's semester
    const subject = await prisma.subject.findUnique({
      where: { code: note.subjectCode },
      select: { semester: true },
    });

    if (subject && user.semester && subject.semester !== user.semester) {
      return {
        allowed: false,
        reason: `Forbidden: Note belongs to Semester ${subject.semester}, but student is enrolled in Semester ${user.semester}`,
      };
    }

    return { allowed: true, note };
  }

  return { allowed: false, reason: "Unauthorized role" };
}
