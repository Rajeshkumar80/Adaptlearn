import fs from "fs";
import path from "path";

const dataDir = path.resolve(__dirname, "../../DATA");
const items = fs.readdirSync(dataDir, { withFileTypes: true });

const subjectFolders: string[] = [];
for (const it of items) {
  if (it.isDirectory()) {
    const subNotes = path.join(dataDir, it.name, "notes");
    if (fs.existsSync(subNotes)) {
      const files = fs.readdirSync(subNotes);
      subjectFolders.push(`${it.name}: ${files.length} notes (${files.join(", ")})`);
    }
  }
}

console.log("Subject directories with /notes folder:", subjectFolders.length);
console.log(subjectFolders.slice(0, 30));
