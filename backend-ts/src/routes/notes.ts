import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import multer from "multer";
import path from "path";
import fs from "fs";
import { z } from "zod";
import { requireAuth, requireTeacher, AuthRequest } from "../middleware/auth";
import { validate } from "../middleware/validation";

const prisma = new PrismaClient();
const router = Router();

const uploadsDir = path.resolve(__dirname, "../../uploads");
fs.mkdirSync(uploadsDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadsDir),
  filename: (_req, file, cb) =>
    cb(null, `${Date.now()}-${file.originalname.replace(/[^\w.\-]/g, "_")}`),
});
const upload = multer({ storage, limits: { fileSize: 25 * 1024 * 1024 } });

const noteSchema = z.object({
  subjectCode: z.string().min(1),
  moduleNumber: z.coerce.number().int().min(1).optional(),
  title: z.string().min(1),
  classId: z.string().optional(),
});

// Teacher uploads a note file (multer) with subject/module tags
router.post(
  "/",
  requireAuth,
  requireTeacher,
  upload.single("file"),
  validate(noteSchema),
  async (req: AuthRequest, res) => {
    if (!req.file) {
      res.status(400).json({ error: "file field required" });
      return;
    }
    const { subjectCode, moduleNumber, title, classId } = req.body;
    const fileUrl = `/uploads/${req.file.filename}`;
    const note = await prisma.notes.create({
      data: {
        subjectCode,
        moduleNumber: moduleNumber || null,
        title,
        fileUrl,
        classId: classId || null,
        uploadedByTeacherId: req.user!.id,
      },
    });
    res.status(201).json({ note });
  }
);

// Teacher lists own notes (or by subject)
router.get("/", requireAuth, requireTeacher, async (req: AuthRequest, res) => {
  const { subject, module } = req.query as { subject?: string; module?: string };
  const notes = await prisma.notes.findMany({
    where: {
      uploadedByTeacherId: req.user!.id,
      subjectCode: subject || undefined,
      moduleNumber: module ? Number(module) : undefined,
    },
    orderBy: { createdAt: "desc" },
  });
  res.json({ notes });
});

router.delete("/:id", requireAuth, requireTeacher, async (req: AuthRequest, res) => {
  const result = await prisma.notes.deleteMany({
    where: { id: req.params.id, uploadedByTeacherId: req.user!.id },
  });
  res.json({ deleted: result.count });
});

export default router;
