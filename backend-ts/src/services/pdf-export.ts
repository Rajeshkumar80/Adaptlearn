import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

// Renders a plain markdown note (headings, bullets, numbered lists, code /
// [DIAGRAM:] blocks, tables) into a real PDF so students never see raw .md.
// Used when a teacher uploads a non-PDF file and for migrating legacy notes.

export const PDF_EXPORT_DIR = path.resolve(__dirname, "../../uploads/pdf-export");
fs.mkdirSync(PDF_EXPORT_DIR, { recursive: true });

const MARGIN = 50;
const BODY = 11;
const CODE = 9;

interface PdfLine {
  kind: "h1" | "h2" | "h3" | "body" | "bullet" | "num" | "code" | "table";
  text: string;
  cells?: string[];
  level?: number;
}

function parseMarkdown(md: string): PdfLine[] {
  const out: PdfLine[] = [];
  let inCode = false;
  let codeBuf: string[] = [];
  const lines = md.split(/\r?\n/);

  const flushCode = () => {
    if (codeBuf.length > 0) {
      out.push({ kind: "code", text: codeBuf.join("\n") });
      codeBuf = [];
    }
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (/^```/.test(line)) {
      if (inCode) {
        inCode = false;
        flushCode();
      } else {
        flushCode();
        inCode = true;
      }
      continue;
    }
    if (inCode) {
      codeBuf.push(line);
      continue;
    }
    if (!line) continue;
    if (/^#{1,6}\s/.test(line)) {
      const m = line.match(/^(#{1,6})\s+(.*)$/)!;
      const kind = (m[1].length <= 2 ? "h" + m[1].length : "h3") as PdfLine["kind"];
      out.push({ kind: kind === "h1" ? "h1" : kind === "h2" ? "h2" : "h3", text: m[2] });
      continue;
    }
    const bullet = line.match(/^[-*•]\s+(.*)$/);
    if (bullet) {
      out.push({ kind: "bullet", text: bullet[1], level: line.startsWith("  ") ? 1 : 0 });
      continue;
    }
    const num = line.match(/^\d+[.)]\s+(.*)$/);
    if (num) {
      out.push({ kind: "num", text: num[1] });
      continue;
    }
    if (line.startsWith("|")) {
      const cells = line.split("|").slice(1, -1).map((c) => c.trim());
      if (cells.every((c) => /^:?-{2,}:?$/.test(c))) continue; // separator row
      out.push({ kind: "table", text: "", cells });
      continue;
    }
    out.push({ kind: "body", text: line });
  }
  flushCode();
  return out;
}

export function markdownToPdf(md: string, outPath: string, title: string): string {
  const doc = new PDFDocument({
    size: "A4",
    margins: { top: 56, bottom: 56, left: MARGIN, right: MARGIN },
    info: { Title: title },
  });
  const write = fs.createWriteStream(outPath);
  doc.pipe(write);

  let y = doc.page.margins.top;
  const width = doc.page.width - doc.page.margins.left - doc.page.margins.right;

  const ensure = (h: number) => {
    if (y + h > doc.page.height - doc.page.margins.bottom) {
      doc.addPage();
      y = doc.page.margins.top;
    }
  };

  const renderInline = (text: string, size: number, bold: boolean) => {
    // strip the [DIAGRAM: ...] markers from inline text, keep code ticks clean
    const cleaned = text
      .replace(/\[DIAGRAM:.*?\]/g, "")
      .replace(/`([^`]+)`/g, "$1")
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/\*([^*]+)\*/g, "$1");
    doc.font(bold ? "Helvetica-Bold" : "Helvetica").fontSize(size).fillColor("#1a2333");
    doc.text(cleaned, doc.page.margins.left, y, { width, lineGap: 3 });
    y = doc.y;
  };

  for (const item of parseMarkdown(md)) {
    switch (item.kind) {
      case "h1": {
        ensure(30);
        doc.moveDown(1);
        renderInline(item.text, 17, true);
        doc.moveDown(0.4);
        y = doc.y;
        break;
      }
      case "h2": {
        ensure(26);
        doc.moveDown(0.8);
        renderInline(item.text, 14, true);
        doc.moveDown(0.3);
        y = doc.y;
        break;
      }
      case "h3": {
        ensure(22);
        doc.moveDown(0.6);
        renderInline(item.text, 12, true);
        doc.moveDown(0.2);
        y = doc.y;
        break;
      }
      case "body": {
        ensure(18);
        renderInline(item.text, BODY, false);
        y = doc.y + 2;
        break;
      }
      case "bullet": {
        ensure(18);
        const prefix = item.level ? "    •" : "  •";
        doc.font("Helvetica").fontSize(BODY).fillColor("#1a2333");
        doc.text(prefix, doc.page.margins.left, y, { width, lineGap: 2 });
        const px = doc.page.margins.left + (item.level ? 40 : 24);
        const cleaned = item.text.replace(/`([^`]+)`/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1");
        doc.text(cleaned, px, y, { width: width - (px - doc.page.margins.left), lineGap: 2 });
        y = doc.y + 2;
        break;
      }
      case "num": {
        ensure(18);
        doc.font("Helvetica").fontSize(BODY).fillColor("#1a2333");
        doc.text("  1. ", doc.page.margins.left, y, { width, lineGap: 2 });
        doc.text(item.text.replace(/`([^`]+)`/g, "$1"), doc.page.margins.left + 28, y, {
          width: width - 28,
          lineGap: 2,
        });
        y = doc.y + 2;
        break;
      }
      case "code": {
        const lines = item.text.split("\n");
        const h = lines.length * 12 + 16;
        ensure(h);
        doc.rect(doc.page.margins.left, y, width, h).fill("#f1f4f8");
        doc
          .font("Courier")
          .fontSize(CODE)
          .fillColor("#24304a")
          .text(item.text, doc.page.margins.left + 8, y + 8, {
            width: width - 16,
            lineGap: 2,
            characterSpacing: 0,
          });
        y = doc.y + 8;
        break;
      }
      case "table": {
        if (!item.cells) break;
        const colW = width / item.cells.length;
        ensure(22);
        doc.font("Helvetica-Bold").fontSize(9).fillColor("#1a2333");
        let maxH = 14;
        item.cells.forEach((c, ci) => {
          doc.text(c, doc.page.margins.left + ci * colW + 3, y + 3, {
            width: colW - 6,
            lineGap: 1,
          });
        });
        doc
          .moveTo(doc.page.margins.left, y)
          .lineTo(doc.page.margins.left + width, y)
          .strokeColor("#c8ced8")
          .stroke();
        doc
          .moveTo(doc.page.margins.left, y + 14)
          .lineTo(doc.page.margins.left + width, y + 14)
          .strokeColor("#c8ced8")
          .stroke();
        y += 14 + 2;
        break;
      }
    }
  }

  doc.end();
  return outPath;
}
