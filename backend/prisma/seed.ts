import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

// ── VTU CSE Subjects (3rd – 7th sem) ─────────────────────────────────────────
const SUBJECTS = [
  // 3rd Sem
  { code: "BCS301", name: "Mathematics for CS", semester: 3, credits: 4,
    modules: ["Linear Algebra","Calculus","Probability","Statistics","Numerical Methods"] },
  { code: "BCS302", name: "Data Structures & Algorithms", semester: 3, credits: 4,
    modules: ["Arrays & Linked Lists","Stacks & Queues","Trees","Graphs","Sorting & Hashing"] },
  { code: "BCS303", name: "Digital Design & Computer Organization", semester: 3, credits: 4,
    modules: ["Boolean Algebra","Combinational Circuits","Sequential Circuits","CPU Design","Memory & I/O"] },
  { code: "BCS304", name: "Object Oriented Programming with Java", semester: 3, credits: 4,
    modules: ["OOP Concepts","Classes & Objects","Inheritance","Exception Handling","Collections & I/O"] },
  { code: "BCS306A", name: "Discrete Mathematics", semester: 3, credits: 3,
    modules: ["Set Theory","Relations & Functions","Graph Theory","Combinatorics","Logic & Proofs"] },

  // 4th Sem
  { code: "BCS401", name: "Analysis & Design of Algorithms", semester: 4, credits: 4,
    modules: ["Algorithm Analysis","Divide & Conquer","Greedy Algorithms","Dynamic Programming","NP Problems"] },
  { code: "BCS402", name: "Microcontrollers", semester: 4, credits: 4,
    modules: ["8051 Architecture","Instruction Set","Interrupts","Interfacing","Applications"] },
  { code: "BCS403", name: "Database Management Systems", semester: 4, credits: 4,
    modules: ["ER Model","Relational Algebra","SQL","Normalisation","Transaction Management"] },
  { code: "BCS405A", name: "Cloud Computing", semester: 4, credits: 3,
    modules: ["Cloud Fundamentals","Service Models","Virtualization","Cloud Storage","Security"] },
  { code: "BBOC407", name: "Biology for Engineers", semester: 4, credits: 3,
    modules: ["Cell Biology","Biomolecules","Genetics","Biotechnology","Biosystems"] },
  { code: "BUHK408", name: "Universal Human Values", semester: 4, credits: 2,
    modules: ["Self Exploration","Harmony in Family","Society & Nature","Ethical Competence","Professional Ethics"] },

  // 5th Sem
  { code: "BCS501", name: "Software Engineering", semester: 5, credits: 4,
    modules: ["Process Models","Requirements Engineering","Design","Testing","Project Management"] },
  { code: "BCS502", name: "Computer Networks", semester: 5, credits: 4,
    modules: ["Network Models","Data Link Layer","Network Layer","Transport Layer","Application Layer"] },
  { code: "BCS503", name: "Theory of Computation", semester: 5, credits: 4,
    modules: ["Automata","Regular Languages","Context Free Grammars","Turing Machines","Decidability"] },
  { code: "BCS515B", name: "Python for ML", semester: 5, credits: 3,
    modules: ["Python Basics","NumPy & Pandas","Visualization","ML Algorithms","Deep Learning Intro"] },
  { code: "BRMK557", name: "Research Methodology", semester: 5, credits: 2,
    modules: ["Research Process","Literature Review","Research Design","Data Analysis","Report Writing"] },

  // 6th Sem
  { code: "BCS601", name: "Operating Systems", semester: 6, credits: 4,
    modules: ["Process Management","CPU Scheduling","Memory Management","File Systems","I/O & Deadlocks"] },
  { code: "BCS602", name: "Machine Learning", semester: 6, credits: 4,
    modules: ["Introduction to ML","Regression","Classification","Unsupervised Learning","Neural Networks"] },
  { code: "BCS613A", name: "Cryptography & Network Security", semester: 6, credits: 3,
    modules: ["Classical Ciphers","Symmetric Key","Public Key","Hashing & Digital Signatures","Network Security"] },

  // 7th Sem
  { code: "BCS701", name: "Internet of Things", semester: 7, credits: 4,
    modules: ["IoT Fundamentals","IoT Protocols","IoT Architecture","Smart Systems","IoT Applications"] },
  { code: "BCS702", name: "Big Data Analytics", semester: 7, credits: 4,
    modules: ["Big Data Concepts","Hadoop & HDFS","MapReduce","Hive & Pig","Spark & Analytics"] },
  { code: "BCS703", name: "Artificial Intelligence", semester: 7, credits: 4,
    modules: ["AI Introduction","Search Algorithms","Knowledge Representation","Planning","Machine Learning"] },
  { code: "BCS714D", name: "Deep Learning", semester: 7, credits: 3,
    modules: ["Neural Networks","CNNs","RNNs & LSTMs","GANs","Applications"] },
];

async function main() {
  console.log("Seeding database...");

  // ── Demo users ───────────────────────────────────────────────────────────
  const studentPw = await bcrypt.hash("Student@123", 12);
  const teacherPw = await bcrypt.hash("Teacher@123", 12);
  const adminPw   = await bcrypt.hash("Admin@123",   12);

  const student = await prisma.user.upsert({
    where: { email: "demo.student@adaptlearn.dev" },
    update: {},
    create: { email: "demo.student@adaptlearn.dev", password: studentPw, name: "Demo Student", role: "STUDENT", usn: "1VT22CS001", branch: "CSE", semester: 7 },
  });

  const teacher = await prisma.user.upsert({
    where: { email: "teacher1@adaptlearn.dev" },
    update: {},
    create: { email: "teacher1@adaptlearn.dev", password: teacherPw, name: "Prof. Rajesh Kumar", role: "TEACHER", branch: "CSE" },
  });

  await prisma.user.upsert({
    where: { email: "admin@adaptlearn.dev" },
    update: {},
    create: { email: "admin@adaptlearn.dev", password: adminPw, name: "Admin", role: "ADMIN" },
  });

  console.log("  ✓ Demo users created");

  // ── Demo class ───────────────────────────────────────────────────────────
  const demoClass = await prisma.class.upsert({
    where: { id: "demo-class-7a" },
    update: {},
    create: { id: "demo-class-7a", name: "7th Sem CSE-A", branch: "CSE", semester: 7, createdByTeacherId: teacher.id },
  });

  await prisma.user.update({ where: { id: student.id }, data: { classId: demoClass.id } });
  console.log("  ✓ Demo class created");

  // ── Subjects, modules, topics, subtopics ─────────────────────────────────
  for (const s of SUBJECTS) {
    const subject = await prisma.subject.upsert({
      where: { code: s.code },
      update: {},
      create: {
        code: s.code, name: s.name, semester: s.semester, credits: s.credits,
        modules: {
          create: s.modules.map((name, i) => ({ moduleNumber: i + 1, name })),
        },
        courseOutcomes: {
          create: s.modules.map((_, i) => ({
            coNumber: i + 1,
            description: `Apply concepts of ${s.modules[i]} to solve engineering problems`,
            bloomsLevel: i < 2 ? "L2" : i < 4 ? "L3" : "L4",
            modules: String(i + 1),
            weightage: "20%",
          })),
        },
      },
    });

    // Topics + subtopics per module
    for (let m = 1; m <= s.modules.length; m++) {
      const moduleName = s.modules[m - 1];

      // 3 topics per module
      const topicNames = [
        `Introduction to ${moduleName}`,
        `Core Concepts of ${moduleName}`,
        `Applications of ${moduleName}`,
      ];

      const createdTopics = [];
      for (let ti = 0; ti < topicNames.length; ti++) {
        const topic = await prisma.topic.upsert({
          where: { id: `${s.code}-m${m}-t${ti + 1}` },
          update: {},
          create: {
            id: `${s.code}-m${m}-t${ti + 1}`,
            subjectCode: s.code,
            moduleNumber: m,
            name: topicNames[ti],
            description: `${topicNames[ti]}: definition, working, examples, and VTU exam answers`,
            order: ti,
            pyqImportance: ti === 1 ? 75 : ti === 2 ? 60 : 40,
            subTopics: {
              create: [
                { title: `Definition and overview of ${topicNames[ti]}`, orderIndex: 0 },
                { title: `Working mechanism and key components`, orderIndex: 1 },
                { title: `Examples and VTU exam applications`, orderIndex: 2 },
              ],
            },
          },
        });
        createdTopics.push(topic);
      }

      // Prerequisite chain: topic[1] depends on topic[0], topic[2] on topic[1]
      if (createdTopics.length >= 2) {
        await prisma.topic.update({
          where: { id: createdTopics[1].id },
          data: { prerequisites: { connect: [{ id: createdTopics[0].id }] } },
        });
      }
      if (createdTopics.length >= 3) {
        await prisma.topic.update({
          where: { id: createdTopics[2].id },
          data: { prerequisites: { connect: [{ id: createdTopics[1].id }] } },
        });
      }
    }

    process.stdout.write(`  ✓ ${s.code}\n`);
  }

  console.log("\n=== Seed complete ===");
  console.log("Demo accounts:");
  console.log("  Student : demo.student@adaptlearn.dev / Student@123");
  console.log("  Teacher : teacher1@adaptlearn.dev    / Teacher@123");
  console.log("  Admin   : admin@adaptlearn.dev       / Admin@123");
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
