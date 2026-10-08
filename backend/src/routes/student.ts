import { Router } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { z } from "zod";
import { prisma } from "../db";
import { requireAuth, AuthRequest } from "../middleware/auth";

const router = Router();

const uploadsDir = path.resolve(__dirname, "../../uploads/submissions");
fs.mkdirSync(uploadsDir, { recursive: true });

const photoUpload = multer({
  storage: multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, uploadsDir),
    filename: (_req, file, cb) => cb(null, `${Date.now()}-${file.originalname.replace(/[^\w.\-]/g, "_")}`),
  }),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (file.mimetype.startsWith("image/")) cb(null, true);
    else cb(new Error("Only image files accepted"));
  },
});

import { computeStudentIntelligence } from "../services/intelligenceService";

router.get("/profile", requireAuth, async (req: AuthRequest, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user!.id },
    include: { class: true, learningStates: { include: { topic: true } }, studySessions: true, achievements: true },
  });
  res.json({ user });
});

router.get("/intelligence", requireAuth, async (req: AuthRequest, res) => {
  try {
    const intelligence = await computeStudentIntelligence(req.user!.id);
    res.json({ intelligence });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/notes", requireAuth, async (req: AuthRequest, res) => {
  const { subject, module } = req.query as { subject?: string; module?: string };
  const user = await prisma.user.findUnique({ where: { id: req.user!.id }, select: { classId: true } });
  const notes = await prisma.notes.findMany({
    where: {
      OR: [{ classId: null }, { classId: user?.classId ?? "__none__" }],
      subjectCode: subject || undefined,
      moduleNumber: module ? Number(module) : undefined,
    },
    orderBy: { createdAt: "desc" },
  });
  res.json({ notes });
});

router.get("/assignments", requireAuth, async (req: AuthRequest, res) => {
  const user = await prisma.user.findUnique({ where: { id: req.user!.id }, select: { classId: true } });
  const assignments = await prisma.assignment.findMany({
    where: { OR: [{ classId: user?.classId ?? "__none__" }, { classId: null }] },
    include: { submissions: { where: { studentId: req.user!.id } }, createdBy: { select: { name: true } } },
    orderBy: { createdAt: "desc" },
  });
  res.json({ assignments });
});

router.post("/assignments/upload-photo", requireAuth, photoUpload.array("photos", 6), (req: AuthRequest, res) => {
  const files = (req.files as Express.Multer.File[]) ?? [];
  if (!files.length) { res.status(400).json({ error: "No photos received" }); return; }
  res.status(201).json({ urls: files.map(f => `/uploads/submissions/${f.filename}`) });
});

router.post("/assignments/:id/submit", requireAuth, async (req: AuthRequest, res) => {
  try {
    const { content, fileUrls } = z.object({
      content: z.string().max(20000).optional(),
      fileUrls: z.array(z.string()).max(6).optional(),
    }).refine(d => (d.content && d.content.trim().length > 0) || (d.fileUrls && d.fileUrls.length > 0), {
      message: "Provide an answer or photo",
    }).parse(req.body);

    const assignment = await prisma.assignment.findUnique({ where: { id: req.params.id } });
    if (!assignment) { res.status(404).json({ error: "Assignment not found" }); return; }

    const submission = await prisma.assignmentSubmission.upsert({
      where: { assignmentId_studentId: { assignmentId: assignment.id, studentId: req.user!.id } },
      update: { content: content || null, fileUrls: fileUrls || undefined, submittedAt: new Date(), marks: null, feedback: null, gradedAt: null },
      create: { assignmentId: assignment.id, studentId: req.user!.id, content: content || null, fileUrls: fileUrls || undefined },
    });
    res.status(201).json({ submission });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
