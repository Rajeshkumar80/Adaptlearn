import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import multer from "multer";
import path from "path";
import fs from "fs";
import { z } from "zod";
import { requireAuth, AuthRequest } from "../middleware/auth";
import { validate } from "../middleware/validation";

const prisma = new PrismaClient();
const router = Router();

const uploadsDir = path.resolve(__dirname, "../../uploads/submissions");
fs.mkdirSync(uploadsDir, { recursive: true });

const photoStorage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadsDir),
  filename: (_req, file, cb) =>
    cb(null, `${Date.now()}-${file.originalname.replace(/[^\w.\-]/g, "_")}`),
});
const photoUpload = multer({
  storage: photoStorage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (file.mimetype.startsWith("image/")) cb(null, true);
    else cb(new Error("Only image files (photos of your written work) are accepted."));
  },
});

// Student profile + overview dashboard data
router.get("/profile", requireAuth, async (req: AuthRequest, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user!.id },
    include: {
      class: true,
      learningStates: { include: { topic: true } },
      studySessions: true,
      achievements: true,
    },
  });
  res.json({ user });
});

// Notes scoped to student's class (master prompt §4.12 / phase-2.4)
router.get("/notes", requireAuth, async (req: AuthRequest, res) => {
  const { subject, module } = req.query as { subject?: string; module?: string };
  const user = await prisma.user.findUnique({ where: { id: req.user!.id }, select: { classId: true } });
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }
  const notes = await prisma.notes.findMany({
    where: {
      // Notes with no classId are public (shared to all students);
      // class-scoped notes are visible only to that class.
      OR: [{ classId: null }, { classId: user.classId ?? "__none__" }],
      subjectCode: subject || undefined,
      moduleNumber: module ? Number(module) : undefined,
    },
    orderBy: { createdAt: "desc" },
  });
  res.json({ notes });
});

// Assignments visible to student: class-scoped ones plus public (all-class) ones
router.get("/assignments", requireAuth, async (req: AuthRequest, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user!.id },
    select: { classId: true, submissions: true },
  });
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }
  const assignments = await prisma.assignment.findMany({
    where: {
      OR: [{ classId: user.classId ?? "__none__" }, { classId: null }],
    },
    include: {
      submissions: { where: { studentId: req.user!.id } },
      createdBy: { select: { name: true } },
    },
    orderBy: { createdAt: "desc" },
  });
  res.json({ assignments });
});

const submitSchema = z
  .object({
    content: z.string().max(20000).optional(),
    fileUrls: z.array(z.string()).max(6).optional(),
  })
  .refine((d) => (d.content && d.content.trim().length > 0) || (d.fileUrls && d.fileUrls.length > 0), {
    message: "Write an answer or upload a photo of your written work.",
  });

// Student: upload photo(s) of handwritten work → returns the public URL(s)
router.post("/assignments/upload-photo", requireAuth, photoUpload.array("photos", 6), (req: AuthRequest, res) => {
  const files = (req.files as Express.Multer.File[]) ?? [];
  if (files.length === 0) {
    res.status(400).json({ error: "No photos received" });
    return;
  }
  res.status(201).json({
    urls: files.map((f) => `/uploads/submissions/${f.filename}`),
  });
});

// Student: submit an assignment (typed answer and/or photo uploads)
router.post("/assignments/:id/submit", requireAuth, validate(submitSchema), async (req: AuthRequest, res) => {
  const { content, fileUrls } = req.body;
  const assignment = await prisma.assignment.findUnique({ where: { id: req.params.id } });
  if (!assignment) {
    res.status(404).json({ error: "Assignment not found" });
    return;
  }
  const submission = await prisma.assignmentSubmission.upsert({
    where: { assignmentId_studentId: { assignmentId: assignment.id, studentId: req.user!.id } },
    update: {
      content: content || null,
      fileUrls: fileUrls || undefined,
      submittedAt: new Date(),
      marks: null,
      feedback: null,
      gradedAt: null,
      aiAnalysis: undefined,
      aiEvaluatedAt: null,
    },
    create: {
      assignmentId: assignment.id,
      studentId: req.user!.id,
      content: content || null,
      fileUrls: fileUrls || undefined,
    },
  });
  res.status(201).json({ submission });
});

export default router;
