// One-off migration: converts every legacy note whose stored file is NOT a
// PDF (e.g. the old .md demo uploads) into a real PDF via the pdf-export
// service and repoints the Notes row at the new file. Original files stay on
// disk. Run with: npx tsx scripts/convert-legacy-notes.ts
import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
import { markdownToPdf, PDF_EXPORT_DIR } from "../src/services/pdf-export";

const prisma = new PrismaClient();

async function main() {
  const notes = await prisma.notes.findMany();
  let converted = 0;
  for (const note of notes) {
    const isPdf = note.fileUrl.toLowerCase().endsWith(".pdf");
    if (isPdf) {
      console.log(`  ok (pdf): ${note.title}`);
      continue;
    }
    const absPath = path.resolve(__dirname, `../uploads/${note.fileUrl.replace(/^\/uploads\//, "")}`);
    if (!fs.existsSync(absPath)) {
      console.log(`  MISSING FILE, skipping: ${note.fileUrl}`);
      continue;
    }
    const md = fs.readFileSync(absPath, "utf-8");
    const outName = `${note.id}.pdf`;
    const outPath = path.join(PDF_EXPORT_DIR, outName);
    markdownToPdf(md, outPath, note.title);
    await prisma.notes.update({
      where: { id: note.id },
      data: { fileUrl: `/uploads/pdf-export/${outName}` },
    });
    console.log(`  converted: ${note.title} -> ${note.fileUrl}`);
    converted++;
  }
  console.log(`Converted ${converted} notes to PDF.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
