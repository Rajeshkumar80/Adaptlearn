import { prisma } from "../src/db";

async function main() {
  const notes = await prisma.notes.findMany({ where: { filePath: null }, take: 5 });
  console.log("Notes with null filePath:", JSON.stringify(notes, null, 2));
}

main().catch(console.error).finally(() => prisma.$disconnect());
