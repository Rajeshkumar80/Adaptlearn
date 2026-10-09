/**
 * seed_notes.ts
 * Seeds Notes records from all VTU_CSE_Notes txt files into the DB,
 * also adds test results for demo student to populate progress page,
 * and adds notifications.
 *
 * Run: cd backend && npx tsx prisma/seed_notes.ts
 */
import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";

const prisma = new PrismaClient();

const ROOT = path.resolve(__dirname, "../../DATA/VTU_CSE_Notes");

// Sem folder → semester number
const SEM_MAP: Record<string, number> = {
  "3RD SEM": 3, "4TH SEM": 4, "5TH SEM": 5,
  "6TH SEM": 6, "7TH SEM": 7,
};

async function seedNotes() {
  const teacher = await prisma.user.findFirst({ where: { role: "TEACHER" } });
  if (!teacher) throw new Error("No teacher found — run seed.ts first");

  const demoClass = await prisma.class.findFirst();

  let created = 0;
  let skipped = 0;

  const semDirs = fs.readdirSync(ROOT).filter(d => fs.statSync(path.join(ROOT, d)).isDirectory());
  for (const semDir of semDirs.sort()) {
    const semester = SEM_MAP[semDir] ?? 0;
    const semPath = path.join(ROOT, semDir);
    const subjDirs = fs.readdirSync(semPath).filter(d => fs.statSync(path.join(semPath, d)).isDirectory());

    for (const subjCode of subjDirs) {
      const subjPath = path.join(semPath, subjCode);
      const files = fs.readdirSync(subjPath).filter(f =>
        f.endsWith(".txt") &&
        f.toLowerCase().includes("module") &&
        !f.toLowerCase().includes("question paper")
      );

      for (const fname of files) {
        // Extract module number from filename e.g. BCS502-module-1-pdf.txt
        const mMatch = fname.match(/module[-_](\d+)/i);
        const moduleNumber = mMatch ? parseInt(mMatch[1]) : null;

        // Derive title
        const titleBase = fname.replace(/-pdf.*\.txt$/i, "").replace(/-/g, " ").replace(/\.txt$/i, "");
        const title = `${subjCode} Module ${moduleNumber ?? "?"} — Lecture Notes`;

        // Check if already exists
        const exists = await prisma.notes.findFirst({
          where: { subjectCode: subjCode, moduleNumber, title },
        });
        if (exists) { skipped++; continue; }

        // We don't have a real uploaded file, so use a placeholder URL
        const fileUrl = `/uploads/notes/${subjCode}/${fname}`;

        await prisma.notes.create({
          data: {
            subjectCode: subjCode,
            moduleNumber,
            title,
            fileUrl,
            uploadedByTeacherId: teacher.id,
            classId: demoClass?.id ?? null,
          },
        });
        created++;
      }
    }
  }

  console.log(`Notes: ${created} created, ${skipped} skipped`);
}

async function seedTestResults() {
  const student = await prisma.user.findFirst({ where: { role: "STUDENT" } });
  if (!student) return;

  const tests = await prisma.test.findMany({ include: { questions: true }, take: 3 });
  let created = 0;
  for (const test of tests) {
    const exists = await prisma.testResult.findFirst({ where: { testId: test.id, studentId: student.id } });
    if (exists) continue;
    const correct = Math.ceil(test.questions.length * 0.7);
    const answers = test.questions.map((q, i) => ({
      questionId: q.id,
      selectedIndex: i < correct ? q.correctIndex : (q.correctIndex + 1) % 4,
      correct: i < correct,
    }));
    const score = test.questions.slice(0, correct).reduce((s, q) => s + q.marks, 0);
    await prisma.testResult.create({
      data: {
        testId: test.id,
        studentId: student.id,
        score,
        totalMarks: test.questions.reduce((s, q) => s + q.marks, 0),
        answers,
        submittedAt: new Date(Date.now() - Math.random() * 7 * 86400000),
      },
    });
    created++;
  }
  console.log(`Test results: ${created} seeded`);
}

async function seedNotifications() {
  const student = await prisma.user.findFirst({ where: { role: "STUDENT" } });
  if (!student) return;

  const notifs = [
    { title: "New test available", body: "Computer Networks Module 1 Quiz has been published by your teacher.", type: "info" },
    { title: "Assignment due soon", body: "Machine Learning Assignment — Linear Regression is due in 3 days.", type: "warning" },
    { title: "Study plan generated", body: "Your adaptive study plan for BCS502 and BCS602 has been created. 36 tasks scheduled.", type: "success" },
    { title: "Mastery milestone", body: "You have reached 70% mastery on Computer Networks — Network Layer!", type: "success" },
  ];

  let created = 0;
  for (const n of notifs) {
    await prisma.notification.create({
      data: { userId: student.id, title: n.title, body: n.body, type: n.type },
    });
    created++;
  }
  console.log(`Notifications: ${created} seeded`);
}

async function seedLearningStates() {
  const student = await prisma.user.findFirst({ where: { role: "STUDENT" } });
  if (!student) return;

  // Seed mastery for a spread of topics so progress page is populated
  const topics = await prisma.topic.findMany({ take: 50, orderBy: { subjectCode: "asc" } });
  let created = 0;
  const masteryValues = [0.15, 0.28, 0.42, 0.51, 0.63, 0.72, 0.81, 0.35, 0.48, 0.67];
  for (let i = 0; i < topics.length; i++) {
    const mastery = masteryValues[i % masteryValues.length];
    const exists = await prisma.learningState.findFirst({ where: { userId: student.id, topicId: topics[i].id } });
    if (exists) continue;
    await prisma.learningState.create({
      data: {
        userId: student.id,
        topicId: topics[i].id,
        mastery,
        stability: 1.5 + mastery * 3,
        correctCount: Math.round(mastery * 10),
        wrongCount: Math.round((1 - mastery) * 5),
        timesReviewed: Math.round(mastery * 8) + 1,
        lastReviewedAt: new Date(Date.now() - Math.random() * 5 * 86400000),
      },
    });
    created++;
  }
  console.log(`Learning states: ${created} seeded`);
}

async function main() {
  console.log("Seeding notes, test results, notifications, and learning states...\n");
  await seedNotes();
  await seedTestResults();
  await seedNotifications();
  await seedLearningStates();
  console.log("\nAll seeding done.");
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
