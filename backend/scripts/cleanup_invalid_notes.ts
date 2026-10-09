import { prisma } from "../src/db";
import fs from "fs";

async function main() {
  const nullNotes = await prisma.notes.findMany({
    where: {
      OR: [
        { filePath: null },
        { fileSize: 0 },
        { fileUrl: { endsWith: ".txt" } }
      ]
    }
  });

  console.log(`Found ${nullNotes.length} invalid placeholder notes to clean up.`);

  if (nullNotes.length > 0) {
    const deleted = await prisma.notes.deleteMany({
      where: {
        id: { in: nullNotes.map(n => n.id) }
      }
    });
    console.log(`Successfully deleted ${deleted.count} placeholder notes.`);
  }

  // Also check if any existing notes point to missing files on disk
  const allNotes = await prisma.notes.findMany();
  let missingFiles = 0;
  for (const n of allNotes) {
    if (n.filePath && !fs.existsSync(n.filePath)) {
      missingFiles++;
      await prisma.notes.delete({ where: { id: n.id } });
    }
  }
  console.log(`Cleaned up ${missingFiles} notes pointing to non-existent files.`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
