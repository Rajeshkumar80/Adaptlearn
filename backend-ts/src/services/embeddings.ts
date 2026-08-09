import { pipeline } from "@xenova/transformers";

// Local CPU embeddings via @xenova/transformers (all-MiniLM-L6-v2, 384 dims).
// Falls back to Gemini text-embedding endpoint only if the local model fails to load.

let extractor: any = null;

async function loadExtractor() {
  if (!extractor) {
    extractor = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");
  }
  return extractor;
}

export const EMBEDDING_DIM = 384;

export async function embedText(text: string): Promise<number[]> {
  try {
    const ex = await loadExtractor();
    const output = await ex(text, { pooling: "mean", normalize: true });
    return Array.from(output.data as Float32Array);
  } catch (err) {
    console.error("[embeddings] local model failed, falling back to Gemini:", err);
    return embedWithGemini(text);
  }
}

async function embedWithGemini(text: string): Promise<number[]> {
  const { config } = await import("../config");
  if (!config.geminiApiKey) {
    throw new Error("No embedding backend available (local model failed and no GEMINI_API_KEY)");
  }
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/text-embedding-004:embedContent?key=${config.geminiApiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: "text-embedding-004", content: { parts: [{ text }] } }),
    }
  );
  if (!res.ok) throw new Error(`Gemini embedding failed: ${res.status} ${await res.text()}`);
  const data = (await res.json()) as { embedding: { values: number[] } };
  return data.embedding.values;
}

// --- Chunking: paragraph/heading aware, ~300-500 tokens (~1100-1800 chars), ~50 token overlap ---

const TARGET_CHARS = 1500; // ~375 tokens
const OVERLAP_CHARS = 200; // ~50 tokens

export interface Chunk {
  content: string;
  moduleNumber: number | null;
  heading: string | null;
}

const MODULE_HEADING_RE = /^(?:##|#)\s*(?:module|MODULE)\s*(\d+)[:.\-]?\s*(.*)$/i;

export function chunkText(text: string): Chunk[] {
  const lines = text.split(/\r?\n/);
  const chunks: Chunk[] = [];
  let current = "";
  let currentHeading: string | null = null;
  let currentModule: number | null = null;

  const flush = () => {
    const content = current.trim();
    if (content.length > 0) {
      chunks.push({ content, moduleNumber: currentModule, heading: currentHeading });
    }
  };

  for (const raw of lines) {
    const line = raw.trim();
    const moduleMatch = line.match(MODULE_HEADING_RE);
    if (moduleMatch) {
      flush();
      current = "";
      currentModule = Number(moduleMatch[1]);
      currentHeading = line;
      continue;
    }
    if (/^#{1,3}\s/.test(line)) {
      flush();
      current = line;
      currentHeading = line;
      continue;
    }
    if (line === "" || /^---+\s*$/.test(line)) {
      if (current.length > 0) current += "\n";
      continue;
    }
    current += line + "\n";
    if (current.length >= TARGET_CHARS) {
      // cut at a sentence boundary near the overlap point
      const cutBase = Math.max(0, current.length - OVERLAP_CHARS);
      let cut = current.length;
      for (let i = current.length - 1; i > cutBase; i--) {
        if (current[i] === "." || current[i] === "?" || current[i] === "!") {
          cut = i + 1;
          break;
        }
      }
      chunks.push({
        content: current.slice(0, cut).trim(),
        moduleNumber: currentModule,
        heading: currentHeading,
      });
      current = current.slice(Math.max(0, cut - OVERLAP_CHARS));
    }
  }
  flush();
  return chunks;
}
