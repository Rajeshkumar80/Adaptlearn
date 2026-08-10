import { PrismaClient } from "@prisma/client";
import path from "path";
import fs from "fs";
import { chunkText, embedText } from "./embeddings";
import { ingestPdfDocument } from "./ingest";

const prisma = new PrismaClient();

export interface IngestFileOptions {
  filePath: string;
  originalName: string;
  subjectCode: string;
  moduleNumber?: number | null;
  source?: "note" | "document";
  noteId?: string;
}

// Shared entry point used by teacher note uploads (and scripts):
// PDFs go through the diagram-aware pipeline, text files get chunked inline.
export async function ingestFile(opts: IngestFileOptions): Promise<number> {
  const header = fs.readFileSync(opts.filePath, "utf-8").slice(0, 5);
  const isPdf = opts.originalName.toLowerCase().endsWith(".pdf") || header === "%PDF-";
  if (isPdf) {
    const result = await ingestPdfDocument(prisma, {
      pdfPath: opts.filePath,
      subjectCode: opts.subjectCode,
      moduleNumber: opts.moduleNumber ?? null,
      title: opts.originalName,
      docType: "notes",
    });
    return result.chunkCount;
  }

  const text = fs.readFileSync(opts.filePath, "utf-8");
  const document = await prisma.document.create({
    data: {
      title: opts.originalName,
      subjectCode: opts.subjectCode,
      moduleNumber: opts.moduleNumber ?? null,
      fileUrl: opts.filePath.replace(/\\/g, "/"),
      docType: "notes",
    },
  });

  let inserted = 0;
  for (const chunk of chunkText(text)) {
    const embedding = await embedText(chunk.content);
    await prisma.$executeRawUnsafe(
      `INSERT INTO "DocumentChunk" ("id", "sourceDocumentId", "subjectCode", "moduleNumber", "content", "embedding", "createdAt")
       VALUES ($1, $2, $3, $4, $5, $6::vector, now())`,
      crypto.randomUUID(),
      document.id,
      opts.subjectCode,
      chunk.moduleNumber ?? opts.moduleNumber ?? null,
      chunk.content,
      `[${embedding.join(",")}]`
    );
    inserted++;
  }
  return inserted;
}
