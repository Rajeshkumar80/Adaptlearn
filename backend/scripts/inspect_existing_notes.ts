import { prisma } from "../src/db";

async function main() {
  const notes = await prisma.notes.findMany({ take: 10 });
  console.log("Sample notes:", JSON.stringify(notes, null, 2));

  const countByExtension: Record<string, number> = {};
  const allNotes = await prisma.notes.findMany({ select: { filePath: true, fileUrl: true } });
  for (const n of allNotes) {
    const ext = n.filePath ? n.filePath.split(".").pop()?.toLowerCase() || "none" : "none";
    countByExtension[ext] = (countByExtension[ext] || 0) + 1;
  }
  console.log("Notes by file extension:", countByExtension);
}

main().catch(console.error).finally(() => prisma.$disconnect());
