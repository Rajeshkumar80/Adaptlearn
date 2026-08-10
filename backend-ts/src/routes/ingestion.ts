import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import multer from "multer";
import path from "path";
import fs from "fs";
import { z } from "zod";
import { requireAuth, requireTeacher, AuthRequest } from "../middleware/auth";
import { validate } from "../middleware/validation";
import { chunkText, embedText } from "../services/embeddings";
import { ingestPdfDocument, IngestedDoc } from "../services/ingest";

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

const ingestSchema = z.object({
  subjectCode: z.string().min(1),
  moduleNumber: z.coerce.number().int().min(1).optional(),
  docType: z.enum(["notes", "syllabus", "pyq", "model-paper", "co"]).optional(),
});

// §4.6 — POST /api/ingestion/upload : teacher uploads a text/PDF doc →
// extract text → chunk → embed → store DocumentChunk rows (tagged subject/module)
router.post("/upload", requireAuth, requireTeacher, upload.single("file"), validate(ingestSchema), async (req: AuthRequest, res) => {
  try {
    if (!req.file) {
      res.status(400).json({ error: "file field required" });
      return;
    }
    const { subjectCode, moduleNumber, docType } = req.body;

    let text: string;
    let pdfIngest: IngestedDoc | null = null;
    if (req.file.mimetype === "application/pdf" || req.file.originalname.endsWith(".pdf")) {
      // Diagram-aware path: render every page to PNG, chunk per page with page numbers.
      pdfIngest = await ingestPdfDocument(prisma, {
        pdfPath: req.file.path,
        subjectCode,
        moduleNumber: moduleNumber || null,
        title: req.file.originalname,
        docType: docType || "notes",
        uploadedByTeacherId: req.user!.id,
      });
      res.status(201).json({
        document: { id: pdfIngest.documentId, title: req.file.originalname, subjectCode, moduleNumber: moduleNumber || null },
        chunkCount: pdfIngest.chunkCount,
        pageCount: pdfIngest.pageCount,
        pageImages: pdfIngest.pageImages,
      });
      return;
    }
    text = fs.readFileSync(req.file.path, "utf-8");

    const document = await prisma.document.create({
      data: {
        title: req.file.originalname,
        subjectCode,
        moduleNumber: moduleNumber || null,
        fileUrl: `/uploads/${req.file.filename}`,
        docType: docType || "notes",
        uploadedByTeacherId: req.user!.id,
      },
    });

    const chunks = chunkText(text);
    for (const chunk of chunks) {
      const embedding = await embedText(chunk.content);
      await prisma.$executeRawUnsafe(
        `INSERT INTO "DocumentChunk" ("id", "sourceDocumentId", "subjectCode", "moduleNumber", "content", "embedding", "createdAt")
         VALUES ($1, $2, $3, $4, $5, $6::vector, now())`,
        crypto.randomUUID(),
        document.id,
        subjectCode,
        chunk.moduleNumber ?? moduleNumber ?? null,
        chunk.content,
        `[${embedding.join(",")}]`
      );
    }

    res.status(201).json({
      document: { id: document.id, title: document.title, subjectCode, moduleNumber: document.moduleNumber },
      chunkCount: chunks.length,
    });
  } catch (err) {
    res.status(500).json({ error: "Ingestion failed", detail: String(err) });
  }
});

export default router;
