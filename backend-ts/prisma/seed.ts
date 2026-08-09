import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import fs from "fs";
import path from "path";
import { scoreTopicsFromPyq, parsePyqMarkdown } from "../src/services/pyq-scorer";

const prisma = new PrismaClient();

const DATA_DIR = path.resolve(__dirname, "../../data");

function readAllFiles(dir: string): Array<{ path: string; content: string }> {
  if (!fs.existsSync(dir)) return [];
  const out: Array<{ path: string; content: string }> = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...readAllFiles(full));
    else if (entry.name.endsWith(".md") || entry.name.endsWith(".txt")) {
      out.push({ path: full, content: fs.readFileSync(full, "utf-8") });
    }
  }
  return out;
}

interface SyllabusTopic {
  name: string;
  description: string;
}

function parseSyllabus(file: { path: string; content: string }) {
  const semMatch = file.path.match(/sem(\d+)/i);
  const semester = semMatch ? Number(semMatch[1]) : 0;
  const head = file.content.match(/^#\s*(\S+)\s*[—-]\s*(.+)$/m);
  const code = head ? head[1].trim() : null;
  const name = head ? head[2].trim() : null;
  if (!code || !name) return null;
  const creditsMatch = file.content.match(/\*\*Credits\*\*:\s*(\d+)/i);
  const credits = creditsMatch ? Number(creditsMatch[1]) : 4;

  const modules: Array<{ moduleNumber: number; name: string; topics: SyllabusTopic[] }> = [];
  const moduleRe = /^##\s*Module\s*(\d+)[:\-]?\s*(.*)$/m;
  let match: RegExpExecArray | null;
  let currentModule: { moduleNumber: number; name: string; topics: SyllabusTopic[] } | null = null;
  let inTopics = false;

  for (const line of file.content.split(/\r?\n/)) {
    const m = line.match(moduleRe);
    if (m) {
      currentModule = { moduleNumber: Number(m[1]), name: m[2].trim() || `Module ${m[1]}`, topics: [] };
      modules.push(currentModule);
      inTopics = false;
      continue;
    }
    if (/^###\s*Topics Covered/i.test(line)) {
      inTopics = true;
      continue;
    }
    if (currentModule && inTopics) {
      const bullet = line.match(/^-\s*\*\*(.+?)\*\*:?\s*(.*)$/);
      if (bullet) {
        currentModule.topics.push({ name: bullet[1].trim(), description: bullet[2].trim() });
      }
    }
  }
  return { code, name, semester, credits, modules };
}

function parseCourseOutcomes(file: { path: string; content: string }) {
  const semMatch = file.path.match(/sem(\d+)/i);
  const semester = semMatch ? Number(semMatch[1]) : 0;
  const head = file.content.match(/^#\s*(\S+)/m);
  const code = head ? head[1].trim() : null;
  if (!code) return null;
  const cos: Array<{ coNumber: number; description: string; bloomsLevel: string; modules: string; weightage: string }> = [];
  const rowRe = /^\|\s*\*\*(CO\d+)\*\*\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|$/;
  for (const line of file.content.split(/\r?\n/)) {
    const m = line.match(rowRe);
    if (m) {
      cos.push({
        coNumber: Number(m[1].replace("CO", "")),
        description: m[2].trim(),
        bloomsLevel: m[3].trim(),
        modules: m[4].trim(),
        weightage: m[5].trim(),
      });
    }
  }
  return { code, semester, cos };
}

async function seedSubjects() {
  const syllabusFiles = readAllFiles(path.join(DATA_DIR, "syllabus"));
  let subjectCount = 0;
  let moduleCount = 0;
  let topicCount = 0;
  let coCount = 0;

  for (const file of syllabusFiles) {
    const parsed = parseSyllabus(file);
    if (!parsed) continue;
    const subject = await prisma.subject.upsert({
      where: { code: parsed.code },
      update: { name: parsed.name, semester: parsed.semester, credits: parsed.credits },
      create: { code: parsed.code, name: parsed.name, semester: parsed.semester, credits: parsed.credits },
    });
    subjectCount++;

    const coFile = readAllFiles(path.join(DATA_DIR, "course-outcomes")).find(
      (f) => f.path.match(/sem\d+[\\/](\w+)\.md$/)?.[1] === parsed.code
    );
    if (coFile) {
      const co = parseCourseOutcomes(coFile);
      if (co) {
        for (const c of co.cos) {
          await prisma.courseOutcome.upsert({
            where: { subjectId_coNumber: { subjectId: subject.id, coNumber: c.coNumber } },
            update: { description: c.description, bloomsLevel: c.bloomsLevel, modules: c.modules, weightage: c.weightage },
            create: { subjectId: subject.id, coNumber: c.coNumber, description: c.description, bloomsLevel: c.bloomsLevel, modules: c.modules, weightage: c.weightage },
          });
          coCount++;
        }
      }
    }

    // previous module's topics become prerequisites for this module's topics
    let prevModuleTopics: string[] = [];
    for (const mod of parsed.modules.sort((a, b) => a.moduleNumber - b.moduleNumber)) {
      const dbModule = await prisma.module.upsert({
        where: { subjectId_moduleNumber: { subjectId: subject.id, moduleNumber: mod.moduleNumber } },
        update: { name: mod.name },
        create: { subjectId: subject.id, moduleNumber: mod.moduleNumber, name: mod.name },
      });
      moduleCount++;
      const topicIds: string[] = [];
      for (let i = 0; i < mod.topics.length; i++) {
        const t = mod.topics[i];
        const topic = await prisma.topic.create({
          data: {
            subjectCode: parsed.code,
            moduleNumber: mod.moduleNumber,
            name: t.name,
            description: t.description,
            order: i + 1,
            prerequisites: prevModuleTopics.length > 0 ? { connect: prevModuleTopics.map((id) => ({ id })) } : undefined,
          },
        });
        topicIds.push(topic.id);
        topicCount++;
      }
      prevModuleTopics = topicIds;
    }
  }
  return { subjectCount, moduleCount, topicCount, coCount };
}

async function seedPyqImportance() {
  const subjects = await prisma.subject.findMany();
  let updated = 0;
  for (const subject of subjects) {
    const pyqFiles = readAllFiles(path.join(DATA_DIR, "pyqs", `sem${subject.semester}`, subject.code));
    if (pyqFiles.length === 0) continue;
    const scores = await scoreTopicsFromPyq(prisma, subject.code, pyqFiles.map((f) => f.content));
    for (const s of scores) {
      await prisma.topic.update({ where: { id: s.topicId }, data: { pyqImportance: s.importance } });
      updated++;
    }
  }
  return updated;
}

async function seedUsers() {
  const teachers = [];
  for (let i = 1; i <= 4; i++) {
    const email = `teacher${i}@adaptlearn.dev`;
    const exists = await prisma.user.findUnique({ where: { email } });
    if (!exists) {
      teachers.push(
        await prisma.user.create({
          data: {
            email,
            password: await bcrypt.hash("Teacher@123", 10),
            name: `Teacher ${i}`,
            role: "TEACHER",
            branch: "CSE",
            semester: i <= 2 ? 5 : 6,
          },
        })
      );
    } else {
      teachers.push(exists);
    }
  }

  const adminEmail = "admin@adaptlearn.dev";
  if (!(await prisma.user.findUnique({ where: { email: adminEmail } }))) {
    await prisma.user.create({
      data: { email: adminEmail, password: await bcrypt.hash("Admin@123", 10), name: "Admin", role: "ADMIN" },
    });
  }

  const demoEmail = "demo.student@adaptlearn.dev";
  let demoStudent: any = await prisma.user.findUnique({ where: { email: demoEmail } });

  const classA = await prisma.class.upsert({
    where: { id: "class-cse-5a" },
    update: {},
    create: { id: "class-cse-5a", name: "CSE 5A", branch: "CSE", semester: 5, createdByTeacherId: teachers[0].id },
  });
  const classB = await prisma.class.upsert({
    where: { id: "class-cse-6a" },
    update: {},
    create: { id: "class-cse-6a", name: "CSE 6A", branch: "CSE", semester: 6, createdByTeacherId: teachers[2].id },
  });

  let studentCount = 0;
  for (let i = 1; i <= 40; i++) {
    const sem = i <= 20 ? 5 : 6;
    const klass = i <= 20 ? classA : classB;
    const email = `student${String(i).padStart(2, "0")}@adaptlearn.dev`;
    const exists = await prisma.user.findUnique({ where: { email } });
    if (!exists) {
      await prisma.user.create({
        data: {
          email,
          password: await bcrypt.hash("Student@123", 10),
          name: `Student ${i}`,
          role: "STUDENT",
          usn: `1BI22CS${String(i).padStart(3, "0")}`,
          branch: "CSE",
          semester: sem,
          classId: klass.id,
        },
      });
    }
    studentCount++;
  }

  if (!demoStudent) {
    demoStudent = await prisma.user.create({
      data: {
        email: demoEmail,
        password: await bcrypt.hash("Student@123", 10),
        name: "Demo Student",
        role: "STUDENT",
        usn: "1BI22CS999",
        branch: "CSE",
        semester: 5,
        classId: classA.id,
      },
    });
  }

  return { teachers, classA, classB, demoStudent, studentCount };
}

async function seedLearningStates() {
  const students = await prisma.user.findMany({ where: { role: "STUDENT" }, take: 12 });
  const topics = await prisma.topic.findMany({ where: { subjectCode: "BCS501" }, take: 10 });
  let count = 0;
  for (const student of students) {
    for (let i = 0; i < topics.length; i++) {
      const t = topics[i];
      const exists = await prisma.learningState.findUnique({
        where: { userId_topicId: { userId: student.id, topicId: t.id } },
      });
      if (exists) continue;
      const seed = ((student.id.length + i * 7) % 10) / 10;
      await prisma.learningState.create({
        data: {
          userId: student.id,
          topicId: t.id,
          mastery: Math.min(0.95, Math.max(0.15, seed)),
          stability: 0.5,
          timesReviewed: Math.floor(seed * 10),
          correctCount: Math.floor(seed * 8),
          wrongCount: Math.floor((1 - seed) * 4),
          lastReviewedAt: new Date(Date.now() - i * 86_400_000),
        },
      });
      count++;
    }
  }
  return count;
}

async function seedDemoTest(classA: { id: string }, teacherId: string) {
  const existing = await prisma.test.findFirst({ where: { title: "BCS501 Module 1 Quick Test" } });
  if (existing) return 0;
  const topics = await prisma.topic.findMany({ where: { subjectCode: "BCS501", moduleNumber: 1 }, take: 2 });
  const test = await prisma.test.create({
    data: {
      subjectCode: "BCS501",
      title: "BCS501 Module 1 Quick Test",
      durationMin: 10,
      isActive: true,
      createdByTeacherId: teacherId,
      classId: classA.id,
      questions: {
        create: [
          {
            text: "Which of the following is a prescriptive process model?",
            options: ["Waterfall Model", "PSP", "TSP", "Unified Process phases"],
            correctIndex: 0,
            marks: 2,
            topicId: topics[0]?.id ?? null,
          },
          {
            text: "The nature of software includes:",
            options: ["Only hardware", "Software is intangible but drives behavior", "Only code files", "Databases"],
            correctIndex: 1,
            marks: 2,
            topicId: topics[0]?.id ?? null,
          },
          {
            text: "Which phase of the Unified Process focuses on building the initial version?",
            options: ["Inception", "Elaboration", "Construction", "Transition"],
            correctIndex: 2,
            marks: 2,
            topicId: topics[1]?.id ?? null,
          },
        ],
      },
    },
  });
  return test ? 1 : 0;
}

async function main() {
  // Dev-only clean slate (dependency order) so re-seeding is idempotent
  await prisma.learningState.deleteMany();
  await prisma.studySession.deleteMany();
  await prisma.studyPlan.deleteMany();
  await prisma.journalEntry.deleteMany();
  await prisma.achievement.deleteMany();
  await prisma.assignmentSubmission.deleteMany();
  await prisma.assignment.deleteMany();
  await prisma.notes.deleteMany();
  await prisma.notification.deleteMany();
  await prisma.cheatFlag.deleteMany();
  await prisma.testResult.deleteMany();
  await prisma.question.deleteMany();
  await prisma.test.deleteMany();
  await prisma.documentChunk.deleteMany();
  await prisma.document.deleteMany();
  await prisma.topic.deleteMany();
  await prisma.courseOutcome.deleteMany();
  await prisma.module.deleteMany();
  await prisma.subject.deleteMany();
  await prisma.user.deleteMany();
  await prisma.class.deleteMany();
  console.log("DB wiped (dev clean slate)");

  console.log("Seeding subjects from real syllabus data...");
  const subj = await seedSubjects();
  console.log(`Subjects: ${subj.subjectCount}, Modules: ${subj.moduleCount}, Topics: ${subj.topicCount}, COs: ${subj.coCount}`);

  console.log("Scoring PYQ importance...");
  const scored = await seedPyqImportance();
  console.log(`PYQ importance scores set on ${scored} topics`);

  console.log("Seeding users + classes...");
  const users = await seedUsers();
  console.log(`Teachers: ${users.teachers.length}, Students: ${users.studentCount}, Demo student: ${users.demoStudent.email}`);

  console.log("Seeding learning states...");
  const states = await seedLearningStates();
  console.log(`Learning states: ${states}`);

  console.log("Seeding demo test...");
  const tests = await seedDemoTest(users.classA, users.teachers[0].id);
  console.log(`Demo tests: ${tests}`);

  console.log("Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
