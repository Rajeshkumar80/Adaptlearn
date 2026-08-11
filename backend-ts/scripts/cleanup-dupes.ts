import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const dupes = await prisma.assignment.findMany({
    where: { title: "E2E Assignment" },
    include: { _count: { select: { submissions: true } } },
    orderBy: { createdAt: "desc" },
  });
  console.log(`Found ${dupes.length} 'E2E Assignment' rows`);
  const keep = dupes.find((a) => a._count.submissions > 0) ?? dupes[0];
  const toDelete = dupes.filter((a) => a.id !== keep?.id);
  for (const a of toDelete) {
    await prisma.assignmentSubmission.deleteMany({ where: { assignmentId: a.id } });
    await prisma.assignment.delete({ where: { id: a.id } });
  }
  console.log(`Deleted ${toDelete.length} duplicates; kept ${keep?.id} (${keep?.title})`);
  const left = await prisma.assignment.findMany({ select: { id: true, title: true, subjectCode: true } });
  console.log(`Remaining assignments: ${JSON.stringify(left)}`);
}

main().finally(() => prisma.$disconnect());
