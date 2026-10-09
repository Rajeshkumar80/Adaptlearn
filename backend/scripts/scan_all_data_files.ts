import fs from "fs";
import path from "path";

const dataDir = path.resolve(__dirname, "../../DATA");

function scanDir(dir: string): { pdfs: string[]; mds: string[] } {
  let pdfs: string[] = [];
  let mds: string[] = [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === "node_modules" || e.name === ".git") continue;
      const sub = scanDir(full);
      pdfs.push(...sub.pdfs);
      mds.push(...sub.mds);
    } else if (e.isFile()) {
      if (e.name.toLowerCase().endsWith(".pdf")) pdfs.push(full);
      else if (e.name.toLowerCase().endsWith(".md")) mds.push(full);
    }
  }
  return { pdfs, mds };
}

const all = scanDir(dataDir);
console.log(`Total PDFs in DATA: ${all.pdfs.length}`);
console.log(`Total MDs in DATA: ${all.mds.length}`);

// Breakdown of PDFs by parent categories
const pdfParents: Record<string, number> = {};
for (const p of all.pdfs) {
  const rel = path.relative(dataDir, p);
  const top = rel.split(path.sep)[0];
  pdfParents[top] = (pdfParents[top] || 0) + 1;
}
console.log("PDFs by top-level folder:", pdfParents);

// Breakdown of MDs in /notes/ folders
const notesMds = all.mds.filter(m => m.includes(path.sep + "notes" + path.sep));
console.log(`Markdown notes in */notes/* folders: ${notesMds.length}`);
