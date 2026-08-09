// PYQ frequency scorer.
// Simplified keyword-based frequency analysis (NOT full NLP classification —
// that is a deferred report feature, see REPORT_ALIGNMENT.md).
// Maps PYQ questions to topics by keyword overlap and computes a 0-100
// importance score per topic: importance = frequency normalized to 0-100.

export interface PyqQuestion {
  module: number | null;
  text: string;
  marks: number;
  bloomLevel: string | null;
}

export function parsePyqMarkdown(markdown: string): PyqQuestion[] {
  const questions: PyqQuestion[] = [];
  let module: number | null = null;

  const moduleRe = /^##\s*module\s*(\d+)/i;
  const qRe = /^-?\s*\*\*(Q\d+\([a-z]+\))\*\*\s*\[(.*?)\]:\s*(.+)$/i;

  for (const line of markdown.split(/\r?\n/)) {
    const m = line.trim().match(moduleRe);
    if (m) {
      module = Number(m[1]);
      continue;
    }
    const q = line.trim().match(qRe);
    if (q) {
      const meta = q[2];
      const marksMatch = meta.match(/(\d+)\s*Marks/i);
      const bloomMatch = meta.match(/(L\d)/i);
      questions.push({
        module,
        text: q[3],
        marks: marksMatch ? Number(marksMatch[1]) : 0,
        bloomLevel: bloomMatch ? bloomMatch[1] : null,
      });
    }
  }
  return questions;
}

// tokenize into significant keywords (drop stopwords, keep length >= 4)
const STOPWORDS = new Set([
  "the", "and", "with", "that", "this", "what", "which", "from", "have", "are",
  "for", "explain", "define", "describe", "discuss", "differentiate", "what",
  "list", "state", "draw", "mention", "write", "using", "with", "each", "their",
  "into", "where", "will", "would", "also", "any", "can", "its", "then", "them",
]);

export function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length >= 4 && !STOPWORDS.has(w));
}

export interface TopicPyqScore {
  topicId: string;
  topicName: string;
  subjectCode: string;
  moduleNumber: number;
  questionCount: number;
  totalMarks: number;
  importance: number; // 0-100 normalized
}

export async function scoreTopicsFromPyq(
  prisma: any,
  subjectCode: string,
  pyqTexts: string[]
): Promise<TopicPyqScore[]> {
  const topics = await prisma.topic.findMany({ where: { subjectCode } });
  const questions = pyqTexts.flatMap((t) => parsePyqMarkdown(t));

  const counts = new Map<string, { q: number; marks: number }>();
  for (const t of topics) {
    const qTokens = new Set(tokenize(t.name + " " + t.description));
    for (const question of questions) {
      const qTokensSet = new Set(tokenize(question.text));
      const overlap = [...qTokens].filter((tk) => qTokensSet.has(tk)).length;
      // also count module-aligned questions (module match contributes weight)
      if (overlap >= 2 || (overlap >= 1 && question.module === t.moduleNumber)) {
        const entry = counts.get(t.id) || { q: 0, marks: 0 };
        entry.q += 1;
        entry.marks += question.marks;
        counts.set(t.id, entry);
      }
    }
  }

  const maxQ = Math.max(1, ...[...counts.values()].map((c) => c.q));
  const maxMarks = Math.max(1, ...[...counts.values()].map((c) => c.marks));

  return topics.map((t: any) => {
    const c = counts.get(t.id) || { q: 0, marks: 0 };
    const importance =
      Math.round((0.6 * (c.q / maxQ) + 0.4 * (c.marks / maxMarks)) * 100 * 100) / 100;
    return {
      topicId: t.id,
      topicName: t.name,
      subjectCode,
      moduleNumber: t.moduleNumber,
      questionCount: c.q,
      totalMarks: c.marks,
      importance,
    };
  });
}
