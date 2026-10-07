import fs from "fs";
import path from "path";

const DATA_ROOT = path.resolve(__dirname, "../../../DATA");
const KNOWLEDGE_ROOT = path.resolve(__dirname, "../../../knowledge");
const SUBJECTS_JSON_PATH = path.join(KNOWLEDGE_ROOT, "subjects.json");
const DIAGRAM_MAP_PATH = path.join(DATA_ROOT, "diagram_topic_map.json");

export interface PYQItem {
  paper: string;
  question: string;
  marks?: number;
  moduleNumber?: number;
  level?: string;
  co?: string;
  isImportant: boolean;
  badge: string;
  score: number;
  isModelPaper?: boolean;
}

export interface DiagramItem {
  tag: string;
  url: string;
  topic: string;
  caption: string;
  relevanceScore: number;
}

export interface RetrievedChunk {
  id: string;
  title: string;
  similarity: number;
  moduleNumber: number | null;
  sourceFile: string;
  content: string;
  isQBank?: boolean;
  rawScore?: number;
}

export interface RagResult {
  subjectCode: string;
  subjectName: string;
  moduleNumber: number;
  moduleTitle: string;
  detectedTopic: string;
  textbookExcerpt: string;
  structuredContext: string;
  retrievedChunks: { id: string; title: string; similarity: number; moduleNumber: number | null }[];
  detailedChunks: RetrievedChunk[];
  pyqList: PYQItem[];
  previousYearQuestions: PYQItem[];
  modelPaperQuestions: PYQItem[];
  isImportantTopic: boolean;
  importanceSummary: string;
  diagrams: DiagramItem[];
  hasContext: boolean;
}

// ── Canonical Subject Metadata Cache ──────────────────────────────────────────
interface CanonicalSubject {
  name: string;
  semester: number;
  semester_label: string;
  modules: Record<string, string>;
}

let _canonicalSubjects: Record<string, CanonicalSubject> | null = null;

export function getCanonicalSubjects(): Record<string, CanonicalSubject> {
  if (_canonicalSubjects) return _canonicalSubjects;
  try {
    const raw = fs.readFileSync(SUBJECTS_JSON_PATH, "utf-8");
    _canonicalSubjects = JSON.parse(raw).subjects || {};
  } catch {
    _canonicalSubjects = {};
  }
  return _canonicalSubjects!;
}

// ── Canonical Subject Code Resolver ───────────────────────────────────────────
export function resolveSubjectCode(question: string, provided?: string): string {
  const subjects = getCanonicalSubjects();
  const q = question.toLowerCase();

  // 1. Direct match with subject code in query
  for (const code of Object.keys(subjects)) {
    const codeRx = new RegExp(`\\b${code.toLowerCase()}\\b`, "i");
    if (codeRx.test(q)) return code;
  }

  // 2. Direct match with canonical subject name from subjects.json
  for (const [code, info] of Object.entries(subjects)) {
    if (info && info.name) {
      const nameRx = new RegExp(`\\b${info.name.toLowerCase()}\\b`, "i");
      if (nameRx.test(q)) return code;
    }
  }

  // 3. If valid code or name was explicitly provided (and not GENERAL), verify against canonical
  if (provided && provided !== "GENERAL" && provided.trim().length > 0) {
    const cleanProvided = provided.trim().toUpperCase();
    if (subjects[cleanProvided]) {
      return cleanProvided;
    }
    // Match provided against canonical subject names
    for (const [code, info] of Object.entries(subjects)) {
      if (info?.name && info.name.toLowerCase() === provided.trim().toLowerCase()) {
        return code;
      }
    }
  }

  // 4. Domain rules strictly aligned with VTU CSE 2022 Scheme (Single Source of Truth)
  if (/\b(blockchain|bitcoin|ethereum|smart contract|consensus|proof of work|proof of stake|hyperledger|solidity)\b/i.test(q)) {
    return "BCS714D";
  }
  if (/\b(deep learning|neural network|cnn|rnn|lstm|transformer|convolutional|perceptron|backpropagation|activation function|pooling layer|feedforward|autoencoder|gan)\b/i.test(q)) {
    return "BCS702";
  }
  if (/\b(iot|internet of things|mqtt|coap|rfid|zigbee|esp32|arduino|sensor network|wsn)\b/i.test(q)) {
    return "BCS701";
  }
  if (/\b(cryptography|cipher|rsa|des|aes|diffie|hellman|digital signature|hash function|network security|firewall)\b/i.test(q)) {
    return "BCS703";
  }
  if (/\b(natural language|nlp|lemmatiz|n-gram|pos tagging|sentiment analysis|word2vec|bert)\b/i.test(q)) {
    return "BCS613C";
  }
  if (/\b(mobile app|android|activity lifecycle|intent|broadcast receiver|content provider|flutter)\b/i.test(q)) {
    return "BCS613A";
  }
  if (/\b(machine learning|supervised|unsupervised|reinforcement|svm|clustering|regression|classification|random forest|decision tree|gradient descent|k-means|knn|naive bayes|logistic regression|linear regression|overfitting|underfitting)\b/i.test(q)) {
    return "BCS602";
  }
  if (/\b(compiler|compilers|compiler design|phases of a compiler|compiler phases|lexical analysis|lexer|syntax analysis|semantic analysis|ll\(1\)|lr\(1\)|slr|lalr|parse tree|ast|three address code|intermediate code|code optimization|code generation|symbol table)\b/i.test(q)) {
    return "BCS601";
  }
  if (/\b(cloud|virtualization|docker|kubernetes|aws|azure|saas|paas|iaas|hypervisor|devops|microservices)\b/i.test(q)) {
    return "BCS515B";
  }
  if (/\b(automata|dfa|nfa|turing machine|cfg|context free|regular expression|regular language|pumping lemma|pushdown|pda|chomsky)\b/i.test(q)) {
    return "BCS503";
  }
  if (/\b(osi|osi model|tcp|udp|ip address|ipv4|ipv6|routing algorithm|distance vector|link state|ospf|bgp|subnet|packet switching|ethernet|csma|sliding window|crc|data link layer|transport layer|network layer)\b/i.test(q)) {
    return "BCS502";
  }
  if (/\b(software engineering|sdlc|waterfall|agile|scrum|srs|black box|white box|unit testing|integration testing)\b/i.test(q)) {
    return "BCS501";
  }
  if (/\b(discrete math|set theory|equivalence relation|partial order|lattice|combinatorics|permutation|recurrence relation|pigeonhole|graph theory)\b/i.test(q)) {
    return "BCS405A";
  }
  if (/\b(database|dbms|rdbms|sql|normalization|1nf|2nf|3nf|bcnf|acid|transaction|er diagram|entity relationship|relational algebra|primary key|foreign key|indexing|btree)\b/i.test(q)) {
    return "BCS403";
  }
  if (/\b(8051|microcontroller|arm architecture|arm processor|arm cortex|timer 0|timer 1|tmod|tcon|scon|pin diagram|embedded system)\b/i.test(q)) {
    return "BCS402";
  }
  if (/\b(algorithm analysis|divide and conquer|greedy|dynamic programming|knapsack|dijkstra|kruskal|prim|floyd|warshall|bellman|huffman|quicksort|merge sort|np hard|np complete|asymptotic|big o|theta|omega|backtracking)\b/i.test(q)) {
    return "BCS401";
  }
  if (/\b(java|inheritance|polymorphism|encapsulation|abstract class|interface|multithreading|exception handling|jvm|jdk)\b/i.test(q)) {
    return "BCS306A";
  }
  if (/\b(data structure|array|linked list|doubly linked|singly linked|stack|queue|circular queue|deque|binary tree|binary search tree|bst|avl tree|red black|heap|priority queue|hashing|hash table)\b/i.test(q)) {
    return "BCS304";
  }
  if (/\b(operating system|process management|process scheduling|pcb|thread|threads|deadlock|banker|semaphore|mutex|paging|virtual memory|page replacement|fifo|lru|cpu scheduling|round robin|fcfs|sjf|priority scheduling)\b/i.test(q)) {
    return "BCS303";
  }
  if (/\b(digital design|ddco|boolean algebra|k-map|kmap|karnaugh|logic gate|flip-flop|flipflop|multiplexer|decoder|addressing mode|addressing modes|instruction cycle|register transfer|bus arbitration|bus structure|cache memory|cache mapping|alu|pipelining)\b/i.test(q)) {
    return "BCS302";
  }
  if (/\b(linear algebra|eigen|matrix|calculus|probability|statistics|bayes)\b/i.test(q)) {
    return "BCS301";
  }

  // Fallback if provided was specified but not matched earlier
  if (provided && subjects[provided.toUpperCase()]) {
    return provided.toUpperCase();
  }

  return "BCS302";
}

// ── Module Number Resolver ───────────────────────────────────────────────────
export function resolveModuleNumber(
  subjectCode: string,
  question: string,
  provided?: number
): number {
  if (provided && provided >= 1 && provided <= 5) return provided;
  const subjects = getCanonicalSubjects();
  const subj = subjects[subjectCode];
  if (!subj || !subj.modules) return 1;

  const q = question.toLowerCase();
  let bestMod = 1;
  let bestScore = 0;

  for (const [modNumStr, title] of Object.entries(subj.modules)) {
    const modNum = parseInt(modNumStr, 10);
    const tLower = title.toLowerCase();

    const words = tLower.replace(/[^a-z0-9]/g, " ").split(/\s+/).filter(w => w.length > 2);
    let score = 0;
    for (const w of words) {
      if (["introduction", "and", "for", "with", "the", "basic", "design"].includes(w)) continue;
      if (q.includes(w)) score += 3;
    }

    // High confidence keyword triggers
    if (tLower.includes("addressing mode") && (q.includes("addressing mode") || q.includes("addressing modes"))) score += 15;
    if (tLower.includes("k-map") && (q.includes("k-map") || q.includes("kmap") || q.includes("karnaugh"))) score += 15;
    if (tLower.includes("tree") && (q.includes("tree") || q.includes("bst"))) score += 15;
    if (tLower.includes("schedul") && (q.includes("schedul") || q.includes("round robin"))) score += 15;
    if (tLower.includes("normalization") && q.includes("normalization")) score += 15;
    if (tLower.includes("arm") && q.includes("arm")) score += 15;
    if (tLower.includes("8051") && q.includes("8051")) score += 15;
    if (tLower.includes("compiler") && (q.includes("compiler") || q.includes("lexical") || q.includes("phase") || q.includes("phases"))) score += 15;

    if (score > bestScore) {
      bestScore = score;
      bestMod = modNum;
    }
  }

  return bestMod;
}

// ── Suffix Stemming & Tokenization ───────────────────────────────────────────
const STOP_WORDS = new Set([
  "what", "is", "a", "an", "the", "and", "or", "in", "on", "of", "to", "for", "with",
  "by", "at", "from", "as", "explain", "describe", "discuss", "neat", "diagram", "sketch",
  "suitable", "how", "why", "which", "different", "state", "list", "write", "note", "between",
  "define", "give", "types", "various", "example", "examples", "using", "use", "uses", "used",
  "their", "following", "terms", "show", "compare", "brief", "briefly", "also", "all"
]);

function stem(word: string): string {
  const w = word.toLowerCase();
  const suffixes = ["ation", "tions", "tion", "ing", "ies", "es", "ed", "s"];
  for (const s of suffixes) {
    if (w.endsWith(s) && w.length > s.length + 2) {
      return w.slice(0, -s.length);
    }
  }
  return w;
}

function tokenize(text: string): Set<string> {
  const words = text
    .toLowerCase()
    .replace(/k[\s\-_]+map/g, " kmap ")
    .replace(/[^a-z0-9]/g, " ")
    .split(/\s+/)
    .filter(w => w.length > 2 && !STOP_WORDS.has(w));
  return new Set(words.map(stem));
}

function extractPhrases(query: string): string[] {
  const words = query
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  const phrases: string[] = [];
  for (let l = 2; l <= 3; l++) {
    for (let i = 0; i <= words.length - l; i++) {
      const window = words.slice(i, i + l);
      if (window.some(w => !STOP_WORDS.has(w))) {
        phrases.push(window.join(" "));
      }
    }
  }
  return phrases;
}

// ── Multi-Source Knowledge Retrieval from knowledge/<subject>/ ───────────────
export function retrieveKnowledgeCandidates(
  subjectCode: string,
  question: string,
  detectedModule: number
): RetrievedChunk[] {
  const subjDir = path.join(KNOWLEDGE_ROOT, subjectCode);
  if (!fs.existsSync(subjDir)) return [];

  const candidates: RetrievedChunk[] = [];
  const qTokens = tokenize(question);
  const qPhrases = extractPhrases(question);
  const qLower = question.toLowerCase();

  try {
    const files = fs.readdirSync(subjDir).filter(f => f.endsWith(".md"));

    for (const file of files) {
      const fullPath = path.join(subjDir, file);
      let content = "";
      try {
        content = fs.readFileSync(fullPath, "utf-8");
      } catch {
        continue;
      }

      const isQBank = file.includes("question_bank");
      let modNum: number | null = null;
      const mMatch = file.match(/module(\d+)/i);
      if (mMatch) modNum = parseInt(mMatch[1], 10);

      // Split file into semantic chunks
      let rawChunks: string[] = [];
      if (isQBank) {
        rawChunks = content.split(/\n(?=###?\s+)|---/);
      } else {
        const rawParas = content.split(/\n\s*\n+/);
        let curr = "";
        for (const p of rawParas) {
          const clean = p.trim();
          if (!clean) continue;
          if (curr.length + clean.length > 1400 && curr.length > 250) {
            rawChunks.push(curr);
            curr = clean;
          } else {
            curr = curr ? curr + "\n\n" + clean : clean;
          }
        }
        if (curr) rawChunks.push(curr);
      }

      for (let idx = 0; idx < rawChunks.length; idx++) {
        const raw = rawChunks[idx].trim();
        if (raw.length < 50 || raw.length > 4000) continue;

        const rawLower = raw.toLowerCase();
        const chunkTokens = tokenize(raw);

        // Calculate overlap
        let overlap = 0;
        for (const t of qTokens) {
          if (chunkTokens.has(t)) overlap++;
        }

        // Exact phrase bonus
        let phraseBonus = 0;
        for (const phrase of qPhrases) {
          if (rawLower.includes(phrase)) phraseBonus += 8;
        }

        // Domain-specific keyword alignment
        let domainBonus = 0;
        if (qLower.includes("addressing mode") && rawLower.includes("addressing mode")) domainBonus += 15;
        if (qLower.includes("k-map") && (rawLower.includes("k-map") || rawLower.includes("kmap") || rawLower.includes("karnaugh"))) domainBonus += 15;
        if (qLower.includes("binary search tree") && rawLower.includes("binary search tree")) domainBonus += 15;
        if (qLower.includes("round robin") && rawLower.includes("round robin")) domainBonus += 15;
        if (qLower.includes("normalization") && rawLower.includes("normalization")) domainBonus += 15;
        if (qLower.includes("osi") && rawLower.includes("osi")) domainBonus += 15;
        if (qLower.includes("8051") && rawLower.includes("8051")) domainBonus += 15;
        if (qLower.includes("arm") && rawLower.includes("arm")) domainBonus += 15;
        if (qLower.includes("compiler") && (rawLower.includes("compiler") || rawLower.includes("lexical") || rawLower.includes("syntax") || rawLower.includes("three-address"))) domainBonus += 15;

        // Cross-domain guard: If query is about compiler, reject unrelated cloud / virtualization chunks
        if (qLower.includes("compiler") && /\b(virtual machine|virtualization|hypervisor|vmm|data center|cloud computing)\b/i.test(rawLower) && !/\b(compiler|syntax|lexical|parse|intermediate code|symbol table)\b/i.test(rawLower)) {
          continue;
        }

        // Strict topical relevance requirement:
        // A chunk MUST have token overlap, phrase match, or domain keyword match.
        // It must NEVER receive a module bonus if it has 0 topical relevance!
        const hasTopicalRelevance = overlap > 0 || phraseBonus > 0 || domainBonus > 0;
        if (!hasTopicalRelevance) {
          continue;
        }

        let score = overlap * 2 + phraseBonus + domainBonus;

        // Module alignment bonus ONLY if topical relevance is established
        if (detectedModule && modNum === detectedModule) score += 6;

        // Question bank solutions priority bonus if question matches
        if (isQBank && score > 12) score += 8;

        if (score >= 4) {
          // Extract heading or first line
          const firstLine = raw.split("\n")[0].replace(/^[#\-\*\s]+/, "").trim();
          candidates.push({
            id: `${subjectCode}-${file.replace(/\.md$/, "")}-${idx}`,
            title: firstLine.slice(0, 80) || `${subjectCode} Module ${modNum ?? detectedModule} Section`,
            similarity: Math.min(0.99, 0.5 + score * 0.02),
            moduleNumber: modNum ?? detectedModule,
            sourceFile: `knowledge/${subjectCode}/${file}`,
            content: raw,
            isQBank,
            rawScore: score,
          });
        }
      }
    }
  } catch {
    /* skip on error */
  }

  // Rerank candidates by rawScore descending (fallback to similarity)
  candidates.sort((a, b) => (b.rawScore ?? b.similarity) - (a.rawScore ?? a.similarity));
  return candidates;
}

// ── Structured RAG Context Constructor (Task 8) ──────────────────────────────
export function buildStructuredContext(
  subjectCode: string,
  subjectName: string,
  moduleNumber: number,
  moduleTitle: string,
  question: string,
  candidates: RetrievedChunk[]
): { structuredContext: string; excerpt: string; keyConcepts: string[] } {
  const topCandidates = candidates.slice(0, 6);
  if (topCandidates.length === 0) {
    return { structuredContext: "", excerpt: "", keyConcepts: [] };
  }

  // Extract key concepts from candidates
  const keyConceptSet = new Set<string>();
  const topText = topCandidates.map(c => c.content).join(" ");
  const terms = topText.match(/\b([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)\b/g) || [];
  for (const t of terms) {
    if (t.length > 3 && !STOP_WORDS.has(t.toLowerCase())) {
      keyConceptSet.add(t);
      if (keyConceptSet.size >= 8) break;
    }
  }
  const keyConcepts = Array.from(keyConceptSet);

  // Group candidates by source type
  const qBankCandidate = topCandidates.find(c => c.isQBank);
  const primaryModuleCandidate = topCandidates.find(c => !c.isQBank && c.moduleNumber === moduleNumber);
  const secondaryCandidates = topCandidates.filter(c => c !== qBankCandidate && c !== primaryModuleCandidate);

  const contextBlocks: string[] = [
    `[SUBJECT]\n${subjectCode} — ${subjectName}`,
    `[MODULE]\nModule ${moduleNumber}: ${moduleTitle}`,
    `[KEY CONCEPTS]\n${keyConcepts.map(k => `- ${k}`).join("\n") || "- " + question}`,
  ];

  if (qBankCandidate) {
    contextBlocks.push(
      `[QUESTION BANK SOLUTION]\nSource: ${qBankCandidate.sourceFile}\n${qBankCandidate.content.slice(0, 1500)}`
    );
  }

  if (primaryModuleCandidate) {
    contextBlocks.push(
      `[PRIMARY SOURCE]\nSource: ${primaryModuleCandidate.sourceFile}\n${primaryModuleCandidate.content.slice(0, 1500)}`
    );
  }

  if (secondaryCandidates.length > 0) {
    const additionalText = secondaryCandidates
      .slice(0, 3)
      .map(c => `Source: ${c.sourceFile}\n${c.content.slice(0, 800)}`)
      .join("\n\n");
    contextBlocks.push(`[ADDITIONAL REFERENCE]\n${additionalText}`);
  }

  const structuredContext = contextBlocks.join("\n\n");
  const excerpt = topCandidates.slice(0, 4).map(c => c.content).join("\n\n").slice(0, 2500);

  return { structuredContext, excerpt, keyConcepts };
}

// ── Backward-Compatible retrieveTextbookNotes ────────────────────────────────
export function retrieveTextbookNotes(
  subjectCode: string,
  question: string
): {
  excerpt: string;
  chunks: { id: string; title: string; similarity: number; moduleNumber: number | null }[];
} {
  const effectiveSubject = resolveSubjectCode(question, subjectCode);
  const moduleNumber = resolveModuleNumber(effectiveSubject, question);
  const candidates = retrieveKnowledgeCandidates(effectiveSubject, question, moduleNumber);

  const excerpt = candidates.slice(0, 2).map(c => c.content).join("\n\n").slice(0, 1200);
  const chunks = candidates.slice(0, 4).map(c => ({
    id: c.id,
    title: c.title,
    similarity: c.similarity,
    moduleNumber: c.moduleNumber,
  }));

  return { excerpt, chunks };
}

// ── PYQ Retrieval from question_papers/ ───────────────────────────────────────
function findSubjectPaperFolder(subjectCode: string): string | null {
  const qpDir = path.join(DATA_ROOT, "question_papers");
  if (!fs.existsSync(qpDir)) return null;

  try {
    const sems = fs.readdirSync(qpDir);
    for (const sem of sems) {
      const candidate = path.join(qpDir, sem, subjectCode);
      if (fs.existsSync(candidate) && fs.statSync(candidate).isDirectory()) {
        return candidate;
      }
    }
  } catch {
    /* ignore */
  }
  return null;
}

export function retrievePYQs(
  subjectCode: string,
  question: string
): {
  pyqList: PYQItem[];
  previousYearQuestions: PYQItem[];
  modelPaperQuestions: PYQItem[];
  isImportant: boolean;
  summary: string;
} {
  const effectiveSubject = resolveSubjectCode(question, subjectCode);
  const folder = findSubjectPaperFolder(effectiveSubject);
  if (!folder) {
    return { pyqList: [], previousYearQuestions: [], modelPaperQuestions: [], isImportant: false, summary: "" };
  }

  const paperFiles = [
    { name: "model_papers.md", type: "Model" },
    { name: "previous_papers.md", type: "PYQ" },
    { name: "important_questions.md", type: "Important" },
  ];

  const matchedQuestions: PYQItem[] = [];
  const qTokens = tokenize(question);

  for (const item of paperFiles) {
    const filePath = path.join(folder, item.name);
    if (!fs.existsSync(filePath)) continue;

    try {
      const content = fs.readFileSync(filePath, "utf-8");
      const lines = content.split("\n");
      let currentSession = "VTU University Examination";
      let currentModule = 1;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.startsWith("## ")) {
          currentSession = line.replace(/^##\s+/, "").trim();
        } else if (/Module\s*[–\-—]\s*(\d+)/i.test(line)) {
          const m = line.match(/Module\s*[–\-—]\s*(\d+)/i);
          if (m) currentModule = parseInt(m[1], 10);
        }

        let candidateText = line;
        if (/^(Q\.\s*\d+|[a-d][\.\s]|\d+[\.\s])/i.test(line) && line.length < 25 && i + 1 < lines.length) {
          candidateText = line + " " + lines[i + 1].trim();
        }

        const isQuestionLine = (
          /^(Q\.\s*\d+|[a-d][\.\s]|\d+[\.\s])/i.test(candidateText) ||
          /^(explain|define|what|describe|simplify|apply|show|demonstrate|differentiate|compare|state|list|write)/i.test(candidateText)
        );

        if (isQuestionLine && candidateText.length > 15) {
          const cleanQ = candidateText
            .replace(/^(Q\.\s*\d+\s*[a-d]?\.?|[a-d][\.\s]|\d+[\.\s])\s*/i, "")
            .replace(/\bL[1-4]\b/g, "")
            .replace(/\bCO[1-5]\b/g, "")
            .replace(/(\d+)\s*marks?/i, "")
            .trim();

          const lineTokens = tokenize(cleanQ);
          let matchCount = 0;
          for (const t of qTokens) {
            if (lineTokens.has(t)) matchCount++;
          }

          if (matchCount >= 2 || (qTokens.size <= 3 && matchCount >= 1)) {
            matchedQuestions.push({
              paper: currentSession,
              question: cleanQ.slice(0, 200),
              marks: 10,
              moduleNumber: currentModule,
              level: "L2",
              co: `CO${currentModule}`,
              isImportant: item.type === "Important",
              badge: item.type === "Model"
                ? "📌 Official VTU Model Paper"
                : (item.type === "Important" ? "⭐ VTU Important Question" : "📝 VTU Previous Year Exam"),
              score: matchCount,
              isModelPaper: item.type === "Model",
            });
          }
        }
      }
    } catch {
      /* ignore */
    }
  }

  matchedQuestions.sort((a, b) => b.score - a.score);
  const topQuestions = matchedQuestions.slice(0, 4);
  const previousYearQuestions = topQuestions.filter(q => !q.isModelPaper);
  const modelPaperQuestions = topQuestions.filter(q => q.isModelPaper);
  const isImportant = topQuestions.length >= 2;

  let summary = "";
  if (topQuestions.length > 0) {
    summary = isImportant
      ? `🔥 High Priority Exam Topic: Tested in ${topQuestions.length} past VTU question papers`
      : `📝 VTU Exam Match: Asked in ${topQuestions[0].paper}`;
  }

  return {
    pyqList: topQuestions,
    previousYearQuestions,
    modelPaperQuestions,
    isImportant,
    summary,
  };
}

// ── Accurate Diagram Retrieval with Domain Guardrails ─────────────────────────
let _diagramMap: Record<string, any[]> | null = null;
function getDiagramMap(): Record<string, any[]> {
  if (_diagramMap) return _diagramMap;
  try {
    _diagramMap = JSON.parse(fs.readFileSync(DIAGRAM_MAP_PATH, "utf-8"));
  } catch {
    _diagramMap = {};
  }
  return _diagramMap!;
}

export function retrieveAccurateDiagrams(
  subjectCode: string,
  query: string,
  moduleNumber?: number,
  maxResults = 2
): DiagramItem[] {
  const map = getDiagramMap();
  const effectiveSubject = resolveSubjectCode(query, subjectCode);
  const entries: any[] = map[effectiveSubject] ?? [];
  if (!entries.length) return [];

  const qTokens = tokenize(query);
  const scored = entries.map(e => {
    let score = 0;
    const topic = String(e.topic || "").toLowerCase();
    const caption = String(e.caption || "").toLowerCase();
    const keywords: string[] = Array.isArray(e.keywords) ? e.keywords : [];

    for (const t of qTokens) {
      if (topic.includes(t)) score += 10;
      if (caption.includes(t)) score += 5;
      if (keywords.some(k => k.toLowerCase().includes(t))) score += 8;
    }

    if (moduleNumber && e.module === moduleNumber) score += 5;

    return {
      tag: String(e.tag || ""),
      url: String(e.url || ""),
      topic: String(e.topic || ""),
      caption: String(e.caption || ""),
      relevanceScore: score,
    };
  });

  return scored
    .filter(d => d.relevanceScore >= 20)
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, maxResults);
}

// ── Complete RAG Pipeline Orchestrator ────────────────────────────────────────
export function executeRAG(
  subjectCode: string,
  query: string,
  moduleNumber?: number
): RagResult {
  const resolvedSubject = resolveSubjectCode(query, subjectCode);
  const canonicalSubs = getCanonicalSubjects();
  const subjMeta = canonicalSubs[resolvedSubject] || {
    name: resolvedSubject,
    semester: 3,
    semester_label: "3RD SEM",
    modules: {},
  };

  const detectedMod = resolveModuleNumber(resolvedSubject, query, moduleNumber);
  const moduleTitle = subjMeta.modules[String(detectedMod)] || `Module ${detectedMod}`;

  // 1. Retrieve multi-source knowledge candidates from knowledge/<subject>/
  const candidates = retrieveKnowledgeCandidates(resolvedSubject, query, detectedMod);

  // 2. Build structured RAG context
  const { structuredContext, excerpt } = buildStructuredContext(
    resolvedSubject,
    subjMeta.name,
    detectedMod,
    moduleTitle,
    query,
    candidates
  );

  // 3. Retrieve past exam questions & diagrams
  const { pyqList, previousYearQuestions, modelPaperQuestions, isImportant, summary } = retrievePYQs(resolvedSubject, query);
  const diagrams = retrieveAccurateDiagrams(resolvedSubject, query, detectedMod);

  return {
    subjectCode: resolvedSubject,
    subjectName: subjMeta.name,
    moduleNumber: detectedMod,
    moduleTitle,
    detectedTopic: moduleTitle,
    textbookExcerpt: excerpt,
    structuredContext,
    retrievedChunks: candidates.slice(0, 5).map(c => ({
      id: c.id,
      title: c.title,
      similarity: c.similarity,
      moduleNumber: c.moduleNumber,
    })),
    detailedChunks: candidates.slice(0, 6),
    pyqList,
    previousYearQuestions,
    modelPaperQuestions,
    isImportantTopic: isImportant,
    importanceSummary: summary,
    diagrams,
    hasContext: candidates.length > 0 && excerpt.length > 100,
  };
}
