// Generic, subject-agnostic derivation of sub-topics from a syllabus topic
// description. VTU syllabus files list a module topic as:
//   **Introduction**: The nature of software, unique characteristics of
//   WebApps, software engineering definition, ...
// The comma-separated items ARE the syllabus's own sub-topic breakdown — we
// split on them, keeping parenthetical groups intact. No subject/topic names
// are referenced anywhere in this code.

export function subtopicsFromDescription(description: string): string[] {
  if (!description || !description.trim()) return [];
  let raw = description.trim();

  // 1) split on ", " while keeping parenthesized groups intact
  const parts: string[] = [];
  let depth = 0;
  let buf = "";
  for (const seg of raw.split(/(, )/)) {
    if (seg === ", ") {
      if (depth === 0) {
        if (buf.trim()) parts.push(buf.trim());
        buf = "";
      } else {
        buf += ", ";
      }
      continue;
    }
    const open = (seg.match(/\(/g) || []).length;
    const close = (seg.match(/\)/g) || []).length;
    depth += open - close;
    buf += seg;
    if (depth < 0) depth = 0;
  }
  if (buf.trim()) parts.push(buf.trim());

  // 2) if a single item is left, fall back to splitting on " and " so every
  //    topic can still yield 2+ sub-topics (still syllabus words, never invented)
  let items: string[] = parts;
  if (items.length < 2) {
    const sub = raw.split(/\s+and\s+/).map((s) => s.trim()).filter(Boolean);
    if (sub.length >= 2) items = sub;
  }

  // 3) normalize: capitalize first letter, strip trailing punctuation, leading
  //    conjunctions, dedupe
  const seen = new Set<string>();
  const out: string[] = [];
  for (const item of items) {
    let clean = item
      .replace(/\s+/g, " ")
      .replace(/^and\s+/i, "")
      .replace(/[.,;:\s]+$/, "")
      .trim();
    if (!clean) continue;
    clean = clean.charAt(0).toUpperCase() + clean.slice(1);
    const key = clean.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(clean);
  }
  return out;
}