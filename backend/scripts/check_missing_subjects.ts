import fs from "fs";
import path from "path";
import { prisma } from "../src/db";

async function main() {
  const mapPath = path.resolve(__dirname, "../../DATA/scheme/subject_map.json");
  const rawMap = JSON.parse(fs.readFileSync(mapPath, "utf-8"));

  const semRomanToNum: Record<string, number> = {
    I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7, VIII: 8
  };

  const dbSubjects = await prisma.subject.findMany();
  const dbCodes = new Set(dbSubjects.map(s => s.code));

  console.log(`DB has ${dbSubjects.length} subjects.`);
  console.log(`subject_map.json has ${Object.keys(rawMap).length} subjects.`);

  const missingInDb: any[] = [];
  for (const [code, info] of Object.entries<any>(rawMap)) {
    if (!dbCodes.has(code)) {
      missingInDb.push({
        code,
        name: info.official_name,
        semester: semRomanToNum[info.semester] || 0
      });
    }
  }

  console.log(`Missing in DB (${missingInDb.length}):`, missingInDb);
}

main().catch(console.error).finally(() => prisma.$disconnect());
