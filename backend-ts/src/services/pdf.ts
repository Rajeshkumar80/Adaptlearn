import fs from "fs";
import path from "path";

// PDF page rendering + per-page text extraction via MuPDF (WASM, ESM-only —
// loaded with dynamic import so CommonJS output stays compatible).

export interface PdfPage {
  pageNumber: number; // 1-based
  text: string;
  imageUrl: string; // public URL under /uploads
}

const RENDER_SCALE = 2; // 2x zoom for readable diagrams

// Renders every page of a PDF to a PNG under outDir and returns per-page text.
// imageUrl is built from publicPrefix (e.g. "/uploads/pages/<docId>").
export async function extractPdfPages(
  pdfPath: string,
  outDir: string,
  publicPrefix: string
): Promise<PdfPage[]> {
  const mupdf = await import("mupdf");
  const buf = fs.readFileSync(pdfPath);
  const doc = mupdf.Document.openDocument(buf, "application/pdf");
  const pages: PdfPage[] = [];
  fs.mkdirSync(outDir, { recursive: true });
  try {
    const count = doc.countPages();
    for (let i = 0; i < count; i++) {
      const page = doc.loadPage(i);
      let text = "";
      try {
        text = page.toStructuredText("preserve-images").asText() ?? "";
      } catch {
        text = "";
      }
      let imageUrl = "";
      try {
        const pixmap = page.toPixmap(
          mupdf.Matrix.scale(RENDER_SCALE, RENDER_SCALE),
          mupdf.ColorSpace.DeviceRGB,
          false
        );
        const png = pixmap.asPNG();
        const file = path.join(outDir, `page-${i + 1}.png`);
        fs.writeFileSync(file, Buffer.from(png));
        imageUrl = `${publicPrefix.replace(/\/$/, "")}/page-${i + 1}.png`;
      } catch (err) {
        console.error(`[pdf] render failed page ${i + 1}:`, err);
      }
      pages.push({ pageNumber: i + 1, text, imageUrl });
    }
  } finally {
    try {
      doc.destroy();
    } catch {
      /* noop */
    }
  }
  return pages;
}

// Maps a chunk's content to the most likely PDF page by scoring
// distinctive prefix/suffix overlap against per-page text.
export function pageForChunk(chunkContent: string, pages: PdfPage[]): number | null {
  if (pages.length === 0) return null;
  const probe = chunkContent.slice(0, 80).replace(/\s+/g, " ").trim();
  if (probe.length < 12) return null;
  let best: PdfPage | null = null;
  let bestScore = 0;
  for (const p of pages) {
    const pageText = p.text.replace(/\s+/g, " ").trim();
    if (!pageText) continue;
    const idx = pageText.indexOf(probe);
    const score = idx >= 0 ? probe.length : 0;
    if (score > bestScore) {
      bestScore = score;
      best = p;
    }
  }
  return best ? best.pageNumber : null;
}
