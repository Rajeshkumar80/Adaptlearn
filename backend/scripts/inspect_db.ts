import { prisma } from "../src/db";

async function main() {
  const subjects = await prisma.subject.count();
  const notes = await prisma.notes.count();
  const users = await prisma.user.count();
  const tests = await prisma.test.count();
  const questions = await prisma.question.count();
  const assignments = await prisma.assignment.count();
  const studyPlans = await prisma.studyPlan.count();
  const planTasks = await prisma.planTask.count();
  const studyTasks = await prisma.studyTask.count();
  const documents = await prisma.document.count();
  const chunks = await prisma.documentChunk.count();

  console.log({
    subjects,
    notes,
    users,
    tests,
    questions,
    assignments,
    studyPlans,
    planTasks,
    studyTasks,
    documents,
    chunks,
  });

  const notesBySem = await prisma.$queryRaw`
    SELECT s.semester, COUNT(n.id) as count
    FROM "Notes" n
    JOIN "Subject" s ON n."subjectCode" = s.code
    GROUP BY s.semester
    ORDER BY s.semester
  `;
  console.log("Notes by semester:", notesBySem);

  const testList = await prisma.test.findMany({ select: { id: true, title: true, subjectCode: true, isActive: true } });
  console.log("Tests:", testList);

  const assignList = await prisma.assignment.findMany({ select: { id: true, title: true, subjectCode: true } });
  console.log("Assignments:", assignList);
}

main().catch(console.error).finally(() => prisma.$disconnect());
