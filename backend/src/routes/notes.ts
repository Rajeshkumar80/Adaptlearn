import { Router } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { z } from "zod";
import { prisma } from "../db";
import { requireAuth, requireTeacher, AuthRequest } from "../middleware/auth";

const router = Router();
const uploadsDir = path.resolve(__dirname, "../../uploads");
fs.mkdirSync(uploadsDir, { recursive: true });

const upload = multer({
  storage: multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, uploadsDir),
    filename: (_req, file, cb) => cb(null, `${Date.now()}-${file.originalname.replace(/[^\w.\-]/g, "_")}`),
  }),
  limits: { fileSize: 25 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const ok = file.originalname.toLowerCase().endsWith(".pdf") || file.mimetype === "application/pdf";
    ok ? cb(null, true) : cb(new Error("Only PDF files are accepted"));
  },
});

const noteSchema = z.object({
  subjectCode: z.string().min(1),
  moduleNumber: z.coerce.number().int().min(1).optional(),
  title: z.string().min(1),
  classId: z.string().optional(),
});

router.post("/", requireAuth, requireTeacher, upload.single("file"), async (req: AuthRequest, res) => {
  if (!req.file) { res.status(400).json({ error: "file required" }); return; }
  try {
    const body = noteSchema.parse(req.body);
    const note = await prisma.notes.create({
      data: {
        subjectCode: body.subjectCode,
        moduleNumber: body.moduleNumber || null,
        title: body.title,
        fileUrl: `/uploads/${req.file.filename}`,
        classId: body.classId || null,
        uploadedByTeacherId: req.user!.id,
      },
    });
    res.status(201).json({ note, chunksIngested: 0 });
  } catch (err: any) { res.status(400).json({ error: err.message }); }
});

router.get("/", requireAuth, requireTeacher, async (req: AuthRequest, res) => {
  const { subject, module } = req.query as { subject?: string; module?: string };
  const notes = await prisma.notes.findMany({
    where: { uploadedByTeacherId: req.user!.id, subjectCode: subject || undefined, moduleNumber: module ? Number(module) : undefined },
    orderBy: { createdAt: "desc" },
  });
  res.json({ notes });
});

router.delete("/:id", requireAuth, requireTeacher, async (req: AuthRequest, res) => {
  const r = await prisma.notes.deleteMany({ where: { id: req.params.id, uploadedByTeacherId: req.user!.id } });
  res.json({ deleted: r.count });
});

export default router;
