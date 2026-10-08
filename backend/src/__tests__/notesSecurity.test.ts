import { describe, it } from "node:test";
import assert from "node:assert/strict";
import fs from "fs";
import path from "path";
import { prisma } from "../db";
import {
  validatePdfMagicBytes,
  sanitizeStoredFileName,
  canUserAccessNote,
  MAX_NOTE_FILE_SIZE,
  SECURE_NOTES_DIR,
} from "../services/notesStorage";

describe("T3.1 Secure Notes & Access Control", () => {
  it("validates %PDF- magic bytes strictly and rejects non-PDF and spoofed files", () => {
    // Valid PDF buffer starting with %PDF-
    const validPdfBuffer = Buffer.from("%PDF-1.7\nSample PDF header\n%%EOF");
    assert.equal(validatePdfMagicBytes(validPdfBuffer), true);

    // Invalid: text file
    const textBuffer = Buffer.from("Hello world, this is just a plain text document.");
    assert.equal(validatePdfMagicBytes(textBuffer), false);

    // Invalid: spoofed HTML with .pdf extension
    const htmlBuffer = Buffer.from("<!DOCTYPE html><html><body>Spoofed content</body></html>");
    assert.equal(validatePdfMagicBytes(htmlBuffer), false);

    // Invalid: empty or truncated buffer
    const emptyBuffer = Buffer.alloc(0);
    assert.equal(validatePdfMagicBytes(emptyBuffer), false);
    const shortBuffer = Buffer.from("%PD");
    assert.equal(validatePdfMagicBytes(shortBuffer), false);
  });

  it("enforces sanitised stored filename and prevents directory traversal", () => {
    const maliciousName1 = "../../../../etc/passwd.pdf";
    const sanitized1 = sanitizeStoredFileName(maliciousName1);
    assert.ok(!sanitized1.includes(".."), "Must not contain directory traversal '..'");
    assert.ok(!sanitized1.includes("/"), "Must not contain slashes");
    assert.ok(!sanitized1.includes("\\"), "Must not contain backslashes");

    const maliciousName2 = "my_notes\0_hidden.pdf";
    const sanitized2 = sanitizeStoredFileName(maliciousName2);
    assert.ok(!sanitized2.includes("\0"), "Must strip null bytes");
  });

  it("enforces 25 MB cap threshold", () => {
    assert.equal(MAX_NOTE_FILE_SIZE, 25 * 1024 * 1024);
    const validSize = 10 * 1024 * 1024;
    const oversize = 26 * 1024 * 1024;
    assert.ok(validSize <= MAX_NOTE_FILE_SIZE, "10 MB must be accepted");
    assert.ok(oversize > MAX_NOTE_FILE_SIZE, "26 MB must exceed limit");
  });

  it("enforces cross-role and cross-semester access rejection (HTTP 403 logic)", async () => {
    // Retrieve demo teacher and student
    const teacher = await prisma.user.findUnique({ where: { email: "teacher1@adaptlearn.dev" } });
    const studentSem7 = await prisma.user.findUnique({ where: { email: "demo.student@adaptlearn.dev" } });
    assert.ok(teacher, "Teacher must exist");
    assert.ok(studentSem7, "Student must exist");

    // Create a test note in DB for semester 7 subject (BCS701)
    const testNote = await prisma.notes.create({
      data: {
        subjectCode: "BCS701",
        moduleNumber: 1,
        title: "Test AI Intro Notes",
        description: "Verified T3.1 test note",
        fileUrl: "/api/notes/stream/test_note.pdf",
        filePath: path.join(SECURE_NOTES_DIR, "test_note.pdf"),
        fileSize: 1024,
        uploadedByTeacherId: teacher.id,
        isPublished: true,
      },
    });

    try {
      // 1. Author: Teacher access -> ALLOWED
      const teacherAccess = await canUserAccessNote(
        { id: teacher.id, role: "TEACHER" },
        testNote.id
      );
      assert.equal(teacherAccess.allowed, true, "Teacher who uploaded note must be allowed");

      // 2. Student enrolled in Sem 7 accessing Sem 7 note -> ALLOWED
      const sem7StudentAccess = await canUserAccessNote(
        { id: studentSem7.id, role: "STUDENT", semester: 7, classId: studentSem7.classId },
        testNote.id
      );
      assert.equal(sem7StudentAccess.allowed, true, "Sem 7 student accessing Sem 7 note must be allowed");

      // 3. Cross-semester student (Sem 3) accessing Sem 7 note -> REJECTED (Forbidden)
      const sem3StudentAccess = await canUserAccessNote(
        { id: "student-sem3-test", role: "STUDENT", semester: 3, classId: null },
        testNote.id
      );
      assert.equal(sem3StudentAccess.allowed, false, "Sem 3 student accessing Sem 7 note must be rejected");
      assert.ok(
        sem3StudentAccess.reason?.includes("Forbidden"),
        "Must specify Forbidden reason for cross-semester access"
      );

      // 4. Non-existent note -> REJECTED
      const nonExistent = await canUserAccessNote(
        { id: teacher.id, role: "TEACHER" },
        "non-existent-note-id"
      );
      assert.equal(nonExistent.allowed, false);
    } finally {
      // Cleanup test note
      await prisma.notes.delete({ where: { id: testNote.id } });
    }
  });
});
