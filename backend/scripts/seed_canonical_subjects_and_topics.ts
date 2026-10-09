import fs from "fs";
import path from "path";
import { prisma } from "../src/db";

async function seedCanonical() {
  const subjectsJsonPath = path.resolve(__dirname, "../../knowledge/subjects.json");
  const raw = JSON.parse(fs.readFileSync(subjectsJsonPath, "utf-8"));
  const subjectsData = raw.subjects;

  console.log("Syncing canonical subjects, modules, and topics...");

  for (const [code, info] of Object.entries<any>(subjectsData)) {
    const sem = Number(info.semester);
    const name = String(info.name);

    // Upsert Subject
    const subject = await prisma.subject.upsert({
      where: { code },
      update: { name, semester: sem, credits: 4 },
      create: { code, name, semester: sem, credits: 4 },
    });
    console.log(`Synced Subject: ${code} (${name}, Sem ${sem})`);

    // Ensure 5 modules
    const modulesObj = info.modules || {};
    for (let m = 1; m <= 5; m++) {
      const moduleName = modulesObj[String(m)] || `Module ${m}`;
      await prisma.module.upsert({
        where: {
          subjectId_moduleNumber: {
            subjectId: subject.id,
            moduleNumber: m,
          },
        },
        update: { name: moduleName },
        create: {
          subjectId: subject.id,
          moduleNumber: m,
          name: moduleName,
        },
      });

      // Ensure topics for this module
      const existingTopics = await prisma.topic.findMany({
        where: { subjectCode: code, moduleNumber: m },
      });

      if (existingTopics.length === 0) {
        console.log(`  Creating topics for ${code} Module ${m}...`);
        const topicNames = [
          `Introduction to ${moduleName.split("—")[0].trim()}`,
          `Core Principles and Mechanisms of ${moduleName.split("—")[0].trim()}`,
          `Advanced Applications and VTU Problems in ${moduleName.split("—")[0].trim()}`,
        ];

        for (let tIdx = 0; tIdx < topicNames.length; tIdx++) {
          await prisma.topic.create({
            data: {
              subjectCode: code,
              moduleNumber: m,
              name: topicNames[tIdx],
              description: `VTU curriculum syllabus topic for ${code} Module ${m}: ${topicNames[tIdx]}`,
              order: tIdx + 1,
              pyqImportance: 0.8 - tIdx * 0.1,
            },
          });
        }
      }
    }
  }

  console.log("Finished syncing subjects, modules, and topics!");
}

seedCanonical()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
