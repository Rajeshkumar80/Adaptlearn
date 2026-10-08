import { Router } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { z } from "zod";
import { prisma } from "../db";
import { requireAuth, requireTeacher, AuthRequest } from "../middleware/auth";
import {
  SECURE_NOTES_DIR,
  MAX_NOTE_FILE_SIZE,
  validatePdfMagicBytes,
  sanitizeStoredFileName,
  canUserAccessNote,
} from "../services/notesStorage";

const router = Router();

// Configure multer with memory storage to validate magic bytes BEFORE saving to disk
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: MAX_NOTE_FILE_SIZE },
});

const noteUploadSchema = z.object({
  subjectCode: z.string().min(1),
  moduleNumber: z.coerce.number().int().min(1).max(5).optional(),
  title: z.string().min(1),
  description: z.string().optional().default(""),
  classId: z.string().optional(),
});

// POST /api/notes - upload note (Teachers/Admins only)
router.post(
  "/",
  requireAuth,
  requireTeacher,
  (req, res, next) => {
    upload.single("file")(req, res, (err: any) => {
      if (err) {
        if (err.code === "LIMIT_FILE_SIZE") {
          return res.status(413).json({ error: "File exceeds 25 MB limit" });
        }
        return res.status(400).json({ error: err.message });
      }
      next();
    });
  },
  async (req: AuthRequest, res) => {
    if (!req.file) {
      return res.status(400).json({ error: "File required" });
    }

    // 1. Validate %PDF- magic bytes
    if (!validatePdfMagicBytes(req.file.buffer)) {
      return res.status(400).json({
        error: "Invalid file type: File must be a valid PDF (magic bytes check failed)",
      });
    }

    try {
      const body = noteUploadSchema.parse(req.body);

      // 2. Save file with sanitised name in secure storage
      const storedFileName = sanitizeStoredFileName(req.file.originalname);
      const secureFilePath = path.join(SECURE_NOTES_DIR, storedFileName);
      fs.writeFileSync(secureFilePath, req.file.buffer);

      // 3. Persist record in database
      const note = await prisma.notes.create({
        data: {
          subjectCode: body.subjectCode,
          moduleNumber: body.moduleNumber || null,
          title: body.title,
          description: body.description || "",
          filePath: secureFilePath,
          fileUrl: `/api/notes/stream/${storedFileName}`,
          fileSize: req.file.size,
          classId: body.classId || null,
          uploadedByTeacherId: req.user!.id,
          isPublished: true,
        },
      });

      res.status(201).json({ note });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }
);

// GET /api/notes/:id/stream - authenticated streaming endpoint
router.get("/:id/stream", requireAuth, async (req: AuthRequest, res) => {
  try {
    const access = await canUserAccessNote(req.user as any, req.params.id);

    if (!access.allowed) {
      return res.status(403).json({ error: access.reason || "Forbidden" });
    }

    const note = access.note!;
    const filePath = note.filePath || path.join(SECURE_NOTES_DIR, path.basename(note.fileUrl));

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: "Note file not found on disk" });
    }

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `inline; filename="${encodeURIComponent(note.title)}.pdf"`);
    res.setHeader("Content-Length", note.fileSize || fs.statSync(filePath).size);

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/notes/stream/:filename - authenticated stream by filename
router.get("/stream/:filename", requireAuth, async (req: AuthRequest, res) => {
  try {
    const filename = sanitizeStoredFileName(req.params.filename);
    const note = await prisma.notes.findFirst({
      where: {
        OR: [
          { filePath: { endsWith: filename } },
          { fileUrl: { contains: filename } },
        ],
      },
    });

    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }

    const access = await canUserAccessNote(req.user as any, note.id);
    if (!access.allowed) {
      return res.status(403).json({ error: access.reason || "Forbidden" });
    }

    const filePath = note.filePath || path.join(SECURE_NOTES_DIR, filename);
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: "Note file not found on disk" });
    }

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `inline; filename="${encodeURIComponent(note.title)}.pdf"`);
    res.setHeader("Content-Length", note.fileSize || fs.statSync(filePath).size);

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/notes/:id/download - authenticated attachment download
router.get("/:id/download", requireAuth, async (req: AuthRequest, res) => {
  try {
    const access = await canUserAccessNote(req.user as any, req.params.id);

    if (!access.allowed) {
      return res.status(403).json({ error: access.reason || "Forbidden" });
    }

    const note = access.note!;
    const filePath = note.filePath || path.join(SECURE_NOTES_DIR, path.basename(note.fileUrl));

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: "Note file not found on disk" });
    }

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="${encodeURIComponent(note.title)}.pdf"`);
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/notes - list notes visible to caller
router.get("/", requireAuth, async (req: AuthRequest, res) => {
  try {
    const { subject, module } = req.query as { subject?: string; module?: string };
    const user = req.user!;

    if (user.role === "TEACHER" || user.role === "ADMIN") {
      const notes = await prisma.notes.findMany({
        where: {
          uploadedByTeacherId: user.role === "TEACHER" ? user.id : undefined,
          subjectCode: subject || undefined,
          moduleNumber: module ? Number(module) : undefined,
        },
        orderBy: { createdAt: "desc" },
      });
      return res.json({ notes });
    }

    // Student notes listing: only notes for student's semester/class
    const studentUser = await prisma.user.findUnique({
      where: { id: user.id },
      select: { semester: true, classId: true },
    });

    // Subjects in student semester
    const semSubjects = studentUser?.semester
      ? await prisma.subject.findMany({ where: { semester: studentUser.semester }, select: { code: true } })
      : [];
    const allowedSubjectCodes = semSubjects.map((s) => s.code);

    const notes = await prisma.notes.findMany({
      where: {
        isPublished: true,
        OR: [{ classId: null }, { classId: studentUser?.classId ?? "__none__" }],
        subjectCode: subject
          ? subject
          : allowedSubjectCodes.length > 0
          ? { in: allowedSubjectCodes }
          : undefined,
        moduleNumber: module ? Number(module) : undefined,
      },
      orderBy: { createdAt: "desc" },
    });

    res.json({ notes });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/notes/:id - teacher deletes note
router.delete("/:id", requireAuth, requireTeacher, async (req: AuthRequest, res) => {
  try {
    const note = await prisma.notes.findFirst({
      where: { id: req.params.id, uploadedByTeacherId: req.user!.id },
    });

    if (!note) {
      return res.status(404).json({ error: "Note not found or unauthorized" });
    }

    if (note.filePath && fs.existsSync(note.filePath)) {
      try {
        fs.unlinkSync(note.filePath);
      } catch {}
    }

    await prisma.notes.delete({ where: { id: note.id } });
    res.json({ success: true });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
