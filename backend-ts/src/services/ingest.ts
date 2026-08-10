import { PrismaClient } from "@prisma/client";
import path from "path";
import fs from "fs";
import { chunkText, embedText } from "./embeddings";
import { extractPdfPages, pageForChunk, PdfPage } from "./pdf";

// Shared PDF ingestion: render page images (diagram surface), chunk per page,
// stamp page numbers, store PageImage rows + embedded DocumentChunk rows.
// Used by both POST /api/ingestion/upload and scripts/ingest-data.ts.

export const UPLOADS_DIR = path.resolve(__dirname, "../../uploads");

export interface IngestedDoc {
  documentId: string;
  chunkCount: number;
  pageCount: number;
  pageImages: number;
}

export async function ingestPdfDocument(
  prisma: PrismaClient,
  opts: {
    pdfPath: string;
    subjectCode: string;
    moduleNumber?: number | null;
    title: string;
    docType: string;
    uploadedByTeacherId?: string;
  }
): Promise<IngestedDoc> {
  const dirName = `${opts.subjectCode}-${opts.title.replace(/[^\w.\-]/g, "_")}`;
  const pagesDir = path.join(UPLOADS_DIR, "pages", dirName);
  const publicPrefix = `/uploads/pages/${dirName}`;
  const pages = await extractPdfPages(opts.pdfPath, pagesDir, publicPrefix);

  const document = await prisma.document.create({
    data: {
      title: opts.title,
      subjectCode: opts.subjectCode,
      moduleNumber: opts.moduleNumber ?? null,
      fileUrl: opts.pdfPath.replace(/\\/g, "/"),
      docType: opts.docType,
      ...(opts.uploadedByTeacherId
        ? { uploadedByTeacherId: opts.uploadedByTeacherId }
        : {}),
    },
  });

  let inserted = 0;
  for (const page of pages) {
    if (page.imageUrl) {
      await prisma.pageImage.create({
        data: {
          documentId: document.id,
          pageNumber: page.pageNumber,
          fileUrl: page.imageUrl,
        },
      });
    }
    if (!page.text.trim()) continue;
    const chunks = chunkText(page.text);
    for (const chunk of chunks) {
      // Within a page, module headings carry through from chunkText.
      const embedding = await embedText(chunk.content);
      await prisma.$executeRawUnsafe(
        `INSERT INTO "DocumentChunk" ("id", "sourceDocumentId", "subjectCode", "moduleNumber", "pageNumber", "content", "embedding", "createdAt")
         VALUES ($1, $2, $3, $4, $5, $6, $7::vector, now())`,
        crypto.randomUUID(),
        document.id,
        opts.subjectCode,
        chunk.moduleNumber ?? opts.moduleNumber ?? null,
        page.pageNumber,
        chunk.content,
        `[${embedding.join(",")}]`
      );
      inserted++;
    }
  }

  return { documentId: document.id, chunkCount: inserted, pageCount: pages.length, pageImages: pages.filter((p) => p.imageUrl).length };
}

export { pageForChunk };
export type { PdfPage };

// Re-tag chunks to pages after the fact (used when only text was ingested and
// page images already exist).
export async function stampChunkPages(
  prisma: PrismaClient,
  documentId: string,
  pages: { pageNumber: number; text: string }[]
): Promise<number> {
  const chunks = await prisma.documentChunk.findMany({
    where: { sourceDocumentId: documentId, pageNumber: null },
    select: { id: true, content: true },
  });
  let stamped = 0;
  for (const c of chunks) {
    const pageNumber = pageForChunk(c.content, pages.map((p) => ({ ...p, imageUrl: "" })));
    if (pageNumber != null) {
      await prisma.documentChunk.update({
        where: { id: c.id },
        data: { pageNumber },
      });
      stamped++;
    }
  }
  return stamped;
}