import { prisma } from "../src/db";

async function main() {
  const groups = await prisma.notes.groupBy({
    by: ["subjectCode"],
    _count: { id: true },
  });
  console.log("Notes by subject in DB (total subjects with notes:", groups.length, "):");
  for (const g of groups.sort((a, b) => a.subjectCode.localeCompare(b.subjectCode))) {
    const sub = await prisma.subject.findUnique({ where: { code: g.subjectCode }, select: { semester: true, name: true } });
    console.log(`  ${g.subjectCode} (Sem ${sub?.semester ?? "?"} - ${sub?.name ?? "unmapped"}): ${g._count.id} notes`);
  }

  // Check which subjects in Subject table DO NOT have notes
  const allSubjects = await prisma.subject.findMany({ select: { code: true, semester: true, name: true } });
  const subjectsWithNotes = new Set(groups.map((g) => g.subjectCode));
  const missingSubjects = allSubjects.filter((s) => !subjectsWithNotes.has(s.code));
  console.log("\nSubjects with 0 notes in DB:", missingSubjects);
}

main().catch(console.error).finally(() => prisma.$disconnect());
