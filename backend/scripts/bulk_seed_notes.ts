import fs from "fs";
import path from "path";
import crypto from "crypto";
import { prisma } from "../src/db";
import {
  SECURE_NOTES_DIR,
  validatePdfMagicBytes,
  sanitizeStoredFileName,
} from "../src/services/notesStorage";

interface SeedStat {
  totalScanned: number;
  totalSeeded: number;
  duplicatesSkipped: number;
  invalidSkipped: number;
  unmappedSkipped: number;
  bySubject: Record<string, number>;
  skippedFiles: Array<{ path: string; reason: string }>;
}

async function bulkSeedNotes() {
  console.log("Starting bulk seed from DATA/VTU_CSE_Notes...");

  const notesRootDir = path.resolve(__dirname, "../../DATA/VTU_CSE_Notes");
  const subjectMapPath = path.resolve(__dirname, "../../DATA/scheme/subject_map.json");
  const reportPath = path.resolve(__dirname, "../../notes_seed_report.md");

  if (!fs.existsSync(notesRootDir)) {
    throw new Error(`Directory not found: ${notesRootDir}`);
  }

  // 1. Load subject map
  const rawSubjectMap = JSON.parse(fs.readFileSync(subjectMapPath, "utf-8"));
  const validSubjectCodes = new Set(Object.keys(rawSubjectMap));
  console.log(`Loaded ${validSubjectCodes.size} valid subjects from subject_map.json.`);

  // 2. Fetch or identify default teacher uploader
  let teacher = await prisma.user.findFirst({ where: { role: "TEACHER" } });
  if (!teacher) {
    teacher = await prisma.user.findFirst();
  }
  if (!teacher) throw new Error("No user found in database to assign as uploader");

  const stats: SeedStat = {
    totalScanned: 0,
    totalSeeded: 0,
    duplicatesSkipped: 0,
    invalidSkipped: 0,
    unmappedSkipped: 0,
    bySubject: {},
    skippedFiles: [],
  };

  const seenHashes = new Set<string>();

  // 3. Recursive walker
  function findPdfFiles(dir: string): string[] {
    const results: string[] = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        results.push(...findPdfFiles(fullPath));
      } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".pdf")) {
        results.push(fullPath);
      }
    }
    return results;
  }

  const pdfPaths = findPdfFiles(notesRootDir);
  stats.totalScanned = pdfPaths.length;
  console.log(`Found ${pdfPaths.length} PDF files in DATA/VTU_CSE_Notes.`);

  for (const filePath of pdfPaths) {
    const fileBuffer = fs.readFileSync(filePath);

    // Check size & magic bytes
    if (fileBuffer.length < 500) {
      stats.invalidSkipped++;
      stats.skippedFiles.push({ path: filePath, reason: "Empty or truncated file (<500B)" });
      continue;
    }

    if (!validatePdfMagicBytes(fileBuffer)) {
      stats.invalidSkipped++;
      stats.skippedFiles.push({ path: filePath, reason: "Invalid %PDF- header magic bytes" });
      continue;
    }

    // Hash check for duplicates
    const fileHash = crypto.createHash("sha256").update(fileBuffer).digest("hex");
    if (seenHashes.has(fileHash)) {
      stats.duplicatesSkipped++;
      stats.skippedFiles.push({ path: filePath, reason: `Duplicate file content (SHA256: ${fileHash.slice(0, 12)})` });
      continue;
    }
    seenHashes.add(fileHash);

    // Derive subject code and module
    const fileName = path.basename(filePath);
    const parentDir = path.basename(path.dirname(filePath));

    let subjectCode = "";
    // Check parent folder matching subject code
    for (const code of validSubjectCodes) {
      if (parentDir.toUpperCase() === code || fileName.toUpperCase().includes(code)) {
        subjectCode = code;
        break;
      }
    }

    if (!subjectCode || !validSubjectCodes.has(subjectCode)) {
      stats.unmappedSkipped++;
      stats.skippedFiles.push({ path: filePath, reason: `Unmapped subject code (parent: ${parentDir}, file: ${fileName})` });
      continue;
    }

    // Derive module number
    let moduleNumber: number | null = null;
    const modMatch = fileName.match(/module[_-]?(\d+)/i) || fileName.match(/m(\d+)/i);
    if (modMatch) {
      moduleNumber = parseInt(modMatch[1], 10);
    }

    const title = moduleNumber
      ? `${subjectCode} Module ${moduleNumber} Notes`
      : `${subjectCode} Study Notes (${fileName.replace(/\.pdf$/i, "")})`;

    const existing = await prisma.notes.findFirst({
      where: {
        subjectCode,
        title,
      },
    });
    if (existing) {
      stats.bySubject[subjectCode] = (stats.bySubject[subjectCode] || 0) + 1;
      continue;
    }

    // Copy to secure notes directory
    const storedName = sanitizeStoredFileName(fileName);
    const securePath = path.join(SECURE_NOTES_DIR, storedName);
    fs.writeFileSync(securePath, fileBuffer);

    // Insert into database
    await prisma.notes.create({
      data: {
        subjectCode,
        moduleNumber: moduleNumber && moduleNumber >= 1 && moduleNumber <= 5 ? moduleNumber : null,
        title,
        description: `VTU Curriculum Lecture Notes for ${subjectCode}${moduleNumber ? ` (Module ${moduleNumber})` : ""}`,
        filePath: securePath,
        fileUrl: `/api/notes/stream/${storedName}`,
        fileSize: fileBuffer.length,
        uploadedByTeacherId: teacher.id,
        isPublished: true,
      },
    });

    stats.totalSeeded++;
    stats.bySubject[subjectCode] = (stats.bySubject[subjectCode] || 0) + 1;
  }

  // 4. Generate notes_seed_report.md
  let reportMd = `# VTU CSE Notes Bulk Seed Report\n\n`;
  reportMd += `Generated At: ${new Date().toISOString()}\n\n`;
  reportMd += `## Summary Metrics\n`;
  reportMd += `- **Total PDFs Scanned:** ${stats.totalScanned}\n`;
  reportMd += `- **Successfully Seeded:** ${stats.totalSeeded}\n`;
  reportMd += `- **Duplicate Files Skipped (Hash check):** ${stats.duplicatesSkipped}\n`;
  reportMd += `- **Corrupt/Invalid Header Skipped:** ${stats.invalidSkipped}\n`;
  reportMd += `- **Unmapped / Non-Scheme Files Skipped:** ${stats.unmappedSkipped}\n\n`;

  reportMd += `## Seeded Notes per Subject\n`;
  reportMd += `| Subject Code | Seeded Notes Count |\n`;
  reportMd += `| :--- | :--- |\n`;
  for (const [code, count] of Object.entries(stats.bySubject).sort()) {
    reportMd += `| \`${code}\` | ${count} |\n`;
  }

  reportMd += `\n## Skipped Files Audit Log (${stats.skippedFiles.length} files)\n`;
  reportMd += `| File Name | Reason |\n`;
  reportMd += `| :--- | :--- |\n`;
  for (const sk of stats.skippedFiles.slice(0, 50)) {
    reportMd += `| \`${path.basename(sk.path)}\` | ${sk.reason} |\n`;
  }
  if (stats.skippedFiles.length > 50) {
    reportMd += `| ... (${stats.skippedFiles.length - 50} more) | See full logs |\n`;
  }

  fs.writeFileSync(reportPath, reportMd, "utf-8");
  console.log(`\nSeed completed! Report saved to ${reportPath}`);
  console.log(`Total seeded: ${stats.totalSeeded}, Duplicates skipped: ${stats.duplicatesSkipped}`);
}

bulkSeedNotes()
  .catch((e) => {
    console.error("Bulk seed failed:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
