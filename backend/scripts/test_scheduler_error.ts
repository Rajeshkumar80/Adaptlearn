import { prisma } from "../src/db";
import { allocateStudyTasks, PlanMode } from "../src/services/schedulerEngine";
import { enrichTasksWithLlm } from "../src/services/planEnricher";

async function main() {
  const user = await prisma.user.findFirst({ where: { role: "STUDENT" } });
  if (!user) {
    console.error("No student user found");
    return;
  }
  console.log("Testing with student:", user.id, user.email);

  // Check all subjects and their topic counts
  const subjects = await prisma.subject.findMany({
    include: { _count: { select: { modules: true } } }
  });
  console.log(`Found ${subjects.length} subjects in DB.`);

  for (const s of subjects) {
    const topicCount = await prisma.topic.count({ where: { subjectCode: s.code } });
    console.log(`Subject ${s.code} (Sem ${s.semester}): ${topicCount} topics`);
  }

  // Let's test generating a plan for BCS301
  const testSubject = subjects[0]?.code || "BCS301";
  console.log(`\nTesting plan generation for ${testSubject}...`);

  const rawTopics = await prisma.topic.findMany({
    where: { subjectCode: { in: [testSubject] } },
    orderBy: [{ subjectCode: "asc" }, { moduleNumber: "asc" }, { order: "asc" }],
    include: { prerequisites: { select: { id: true } } }
  });

  console.log(`rawTopics count: ${rawTopics.length}`);

  if (rawTopics.length === 0) {
    console.log("ERROR: 0 topics for", testSubject);
    return;
  }

  const startDate = new Date().toISOString().slice(0, 10);
  const targetDate = new Date(Date.now() + 14 * 86400000).toISOString().slice(0, 10);

  try {
    const planTopics = rawTopics.map(t => ({
      id: t.id,
      subjectCode: t.subjectCode,
      moduleNumber: t.moduleNumber,
      name: t.name,
      order: t.order,
      pyqImportance: t.pyqImportance,
      mastery: 0.2,
      retention: 1.0,
      stability: 1.5,
      prerequisiteIds: t.prerequisites.map(p => p.id)
    }));

    console.log("Calling allocateStudyTasks...");
    const allocation = allocateStudyTasks({
      topics: planTopics,
      startDate,
      targetDate,
      isExamDate: true,
      hoursPerDay: 2.0,
      mode: "3-2-1" as PlanMode,
      preferredSlot: "EVENING"
    });
    console.log(`allocateStudyTasks succeeded. Total tasks: ${allocation.tasks.length}`);

    console.log("Calling enrichTasksWithLlm...");
    const dbTopicContexts = rawTopics.map(t => ({ id: t.id, name: t.name, moduleNumber: t.moduleNumber }));
    const enrichment = await enrichTasksWithLlm(testSubject, dbTopicContexts);
    console.log(`enrichTasksWithLlm succeeded. Enriched map size: ${enrichment.enrichedMap.size}`);
  } catch (err) {
    console.error("FAILED during plan generation logic:", err);
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
