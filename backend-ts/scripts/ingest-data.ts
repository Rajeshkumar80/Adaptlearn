import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
import { chunkText, embedText } from "../src/services/embeddings";
import { scoreTopicsFromPyq, parsePyqMarkdown } from "../src/services/pyq-scorer";

// Batch ingestion: walks the repo-level data/ tree (syllabus, textbooks-notes,
// pyqs, model-papers, course-outcomes, vtu-answer-rules) and ingests every
// file through the §4.4/4.5 pipeline. Idempotent: skips already-ingested files.

const prisma = new PrismaClient();

const DATA_DIR = process.env.DATA_DIR || path.resolve(__dirname, "../../data");

function walk(dir: string): Array<{ path: string; rel: string }> {
  if (!fs.existsSync(dir)) return [];
  const out: Array<{ path: string; rel: string }> = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.name.endsWith(".md") || entry.name.endsWith(".txt") || entry.name.endsWith(".pdf")) {
      out.push({ path: full, rel: path.relative(DATA_DIR, full) });
    }
  }
  return out;
}

function detectMeta(rel: string) {
  // e.g. pyqs/sem5/BCS501/2023.md | syllabus/sem5/BCS501.md | textbooks-notes/sem6/BCS602/module3.md
  const parts = rel.split(/[\\/]/);
  const docTypeMap: Record<string, string> = {
    syllabus: "syllabus",
    "textbooks-notes": "notes",
    pyqs: "pyq",
    "model-papers": "model-paper",
    "course-outcomes": "co",
    "vtu-answer-rules": "answer-rules",
    "youtube-links": "links",
  };
  const kind = docTypeMap[parts[0]] || "notes";
  const semMatch = parts.find((p) => /^sem\d+$/i.test(p)) || "";
  const semester = semMatch ? Number(semMatch.replace("sem", "")) : 0;
  const subjectCode = parts.find((p) => /^[A-Z]{2,}\d{3}[A-Z]?$/.test(p)) || "";
  const filename = parts[parts.length - 1];
  return { kind, semester, subjectCode, filename };
}

async function ingestFile(rel: string, fullPath: string) {
  const { kind, semester, subjectCode, filename } = detectMeta(rel);
  if (kind === "links") return 0; // link lists are not content

  const title = `${subjectCode || "GENERAL"} - ${filename}`;
  const existing = await prisma.document.findFirst({ where: { title, subjectCode: subjectCode || "GENERAL" } });
  if (existing) {
    console.log(`  skip (exists): ${rel}`);
    return 0;
  }

  let text: string;
  if (fullPath.endsWith(".pdf")) {
    const pdf = await import("pdf-parse");
    const parsed = await pdf.default(fs.readFileSync(fullPath));
    text = parsed.text;
  } else {
    text = fs.readFileSync(fullPath, "utf-8");
  }

  const doc = await prisma.document.create({
    data: { title, subjectCode: subjectCode || "GENERAL", docType: kind, fileUrl: rel },
  });

  const chunks = chunkText(text);
  let inserted = 0;
  for (const chunk of chunks) {
    const embedding = await embedText(chunk.content);
    await prisma.$executeRawUnsafe(
      `INSERT INTO "DocumentChunk" ("id", "sourceDocumentId", "subjectCode", "moduleNumber", "content", "embedding", "createdAt")
       VALUES ($1, $2, $3, $4, $5, $6::vector, now())`,
      crypto.randomUUID(),
      doc.id,
      subjectCode || "GENERAL",
      chunk.moduleNumber,
      chunk.content,
      `[${embedding.join(",")}]`
    );
    inserted++;
  }
  console.log(`  ingested: ${rel} -> ${inserted} chunks`);
  return inserted;
}

async function main() {
  console.log(`Data dir: ${DATA_DIR}`);
  const files = walk(DATA_DIR);
  console.log(`Found ${files.length} files`);

  let totalChunks = 0;
  let totalDocs = 0;
  for (const f of files) {
    try {
      totalChunks += await ingestFile(f.rel, f.path);
      totalDocs++;
    } catch (err) {
      console.error(`  FAILED: ${f.rel} -> ${err}`);
    }
  }
  console.log(`Ingested ${totalDocs} documents, ${totalChunks} chunks`);

  console.log("Re-scoring PYQ importance across all subjects...");
  const subjects = await prisma.subject.findMany();
  let scored = 0;
  for (const subject of subjects) {
    const pyqFiles = files.filter(
      (f) => f.rel.startsWith(`pyqs${path.sep}sem${subject.semester}${path.sep}${subject.code}`) ||
             f.rel.startsWith(`pyqs/sem${subject.semester}/${subject.code}`)
    );
    if (pyqFiles.length === 0) continue;
    const scores = await scoreTopicsFromPyq(prisma, subject.code, pyqFiles.map((f) => fs.readFileSync(f.path, "utf-8")));
    for (const s of scores) {
      await prisma.topic.update({ where: { id: s.topicId }, data: { pyqImportance: s.importance } });
      scored++;
    }
  }
  console.log(`PYQ importance updated on ${scored} topics`);
  console.log("Ingestion complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
