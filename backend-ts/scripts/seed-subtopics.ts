// Idempotent backfill: attach syllabus-sourced sub-topics to every Topic row
// that does not have them yet. Safe on an existing database — no deletes.
// Run: npx tsx scripts/seed-subtopics.ts
import { PrismaClient } from "@prisma/client";
import { subtopicsFromDescription } from "../src/services/subtopics";

const prisma = new PrismaClient();

async function main() {
  const topics = await prisma.topic.findMany({
    include: { _count: { select: { subTopics: true } } },
  });
  let created = 0;
  let skipped = 0;
  let normalized = 0;
  for (const topic of topics) {
    if (topic._count.subTopics > 0) {
      skipped++;
      // keep existing titles in sync with the parser's capitalization
      const rows = await prisma.subTopic.findMany({ where: { topicId: topic.id } });
      for (const row of rows) {
        const cap = row.title.charAt(0).toUpperCase() + row.title.slice(1);
        if (cap !== row.title) {
          await prisma.subTopic.update({ where: { id: row.id }, data: { title: cap } });
          normalized++;
        }
      }
      continue;
    }
    const titles = subtopicsFromDescription(topic.description);
    if (titles.length === 0) continue;
    await prisma.subTopic.createMany({
      data: titles.map((title, idx) => ({
        topicId: topic.id,
        title,
        orderIndex: idx + 1,
      })),
    });
    created++;
  }
  console.log(`Topics already with sub-topics (skipped): ${skipped}`);
  console.log(`Topics backfilled: ${created}`);
  console.log(`Titles capitalized: ${normalized}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());