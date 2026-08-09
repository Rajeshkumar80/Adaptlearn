import { PrismaClient } from "@prisma/client";
import { embedText } from "./embeddings";

// pgvector cosine-similarity retrieval (<=> operator), scoped by subject/module.
// The DocumentChunk.embedding column is Unsupported("vector(384)") — queried via raw SQL.

const prisma = new PrismaClient();

export interface RetrievedChunk {
  id: string;
  sourceDocumentId: string;
  subjectCode: string;
  moduleNumber: number | null;
  content: string;
  title: string;
  distance: number;
  similarity: number;
}

export async function retrieve(
  question: string,
  subjectCode: string,
  moduleNumber?: number | null,
  topK = 5
): Promise<RetrievedChunk[]> {
  const embedding = await embedText(question);
  const vec = `[${embedding.join(",")}]`;

  const moduleClause = moduleNumber != null ? "AND dc.\"moduleNumber\" = $3" : "";
  const params: unknown[] = [vec, subjectCode];
  if (moduleNumber != null) params.push(moduleNumber);

  const rows: any[] = await prisma.$queryRawUnsafe(
    `SELECT dc.id, dc."sourceDocumentId", dc."subjectCode", dc."moduleNumber",
            dc.content, d.title,
            (dc.embedding <=> $1::vector)::float8 AS distance
     FROM "DocumentChunk" dc
     JOIN "Document" d ON d.id = dc."sourceDocumentId"
     WHERE dc."subjectCode" = $2
       ${moduleClause}
     ORDER BY dc.embedding <=> $1::vector
     LIMIT ${topK}`,
    ...params
  );

  return rows.map((r: any) => ({
    id: r.id,
    sourceDocumentId: r.sourceDocumentId,
    subjectCode: r.subjectCode,
    moduleNumber: r.moduleNumber,
    content: r.content,
    title: r.title,
    distance: r.distance,
    similarity: 1 - r.distance,
  }));
}
