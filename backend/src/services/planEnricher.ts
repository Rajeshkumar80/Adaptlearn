import { z } from "zod";
import { executeStructuredLlm } from "./llm";

export const TaskEnrichmentItemSchema = z.object({
  topicId: z.string(),
  todoText: z.string().min(3),
  subPoints: z.array(z.string()).min(1).max(5),
  selfCheckQuestion: z.string().min(5),
});

export const PlanEnrichmentResponseSchema = z.object({
  enrichedTasks: z.array(TaskEnrichmentItemSchema),
});

export type TaskEnrichmentItem = z.infer<typeof TaskEnrichmentItemSchema>;

export interface DbTopicContext {
  id: string;
  name: string;
  moduleNumber: number;
  subTopics?: string[];
}

export interface EnrichmentValidationResult {
  totalGenerated: number;
  validKept: number;
  inventedDropped: number;
  enrichedMap: Map<string, TaskEnrichmentItem>;
}

/**
 * Validates that every task produced by LLM maps strictly to an existing topic in the DB.
 * Drops any invented or unmapped topics.
 */
export function validateEnrichedTasks(
  rawItems: TaskEnrichmentItem[],
  dbTopicIds: Set<string>
): EnrichmentValidationResult {
  const enrichedMap = new Map<string, TaskEnrichmentItem>();
  let inventedDropped = 0;

  for (const item of rawItems) {
    if (dbTopicIds.has(item.topicId)) {
      enrichedMap.set(item.topicId, item);
    } else {
      inventedDropped++;
    }
  }

  return {
    totalGenerated: rawItems.length,
    validKept: enrichedMap.size,
    inventedDropped,
    enrichedMap,
  };
}

/**
 * Generates deterministic fallback to-do items from DB topics.
 * Guarantees 0 invented topics.
 */
export function generateFallbackEnrichment(dbTopics: DbTopicContext[]): TaskEnrichmentItem[] {
  return dbTopics.map((t) => {
    const defaultSubs = t.subTopics && t.subTopics.length >= 2
      ? t.subTopics.slice(0, 3)
      : [
          `Understand key definitions and core theory of ${t.name}`,
          `Trace step-by-step algorithms or structural components`,
          `Practice VTU question bank numericals and diagrams`,
        ];

    return {
      topicId: t.id,
      todoText: `Review fundamental concepts and VTU exam patterns for ${t.name}`,
      subPoints: defaultSubs,
      selfCheckQuestion: `What are the primary principles, working mechanism, and exam applications of ${t.name}?`,
    };
  });
}

/**
 * Enriches study plan tasks with actionable to-dos, 2-3 sub-points, and a self-check question.
 * Filters strictly against the DB topic catalog to guarantee zero invented topics.
 */
export async function enrichTasksWithLlm(
  subjectCode: string,
  dbTopics: DbTopicContext[]
): Promise<EnrichmentValidationResult> {
  const dbTopicIds = new Set(dbTopics.map((t) => t.id));

  const topicSummaryText = dbTopics
    .map(
      (t) =>
        `- ID: "${t.id}" | Name: "${t.name}" | Module: ${t.moduleNumber}` +
        (t.subTopics && t.subTopics.length > 0 ? ` | Sub-topics: [${t.subTopics.join(", ")}]` : "")
    )
    .join("\n");

  const systemPrompt = `You are a high-performance VTU Engineering academic study planner.
Your job is to provide specific study to-dos, 2-3 sub-points, and 1 self-check question per topic.

STRICT CONSTRAINTS:
1. You may ONLY output tasks for the topics in the provided list.
2. The "topicId" field MUST match one of the exact IDs provided.
3. DO NOT invent topics from other subjects, courses, or random domains.
4. Output valid JSON adhering to the specified schema:
   {
     "enrichedTasks": [
       {
         "topicId": "<exact_id_from_list>",
         "todoText": "<specific actionable focus>",
         "subPoints": ["<point 1>", "<point 2>", "<point 3>"],
         "selfCheckQuestion": "<direct VTU exam recall question>"
       }
     ]
   }`;

  const userPrompt = `Subject: ${subjectCode}
Available Syllabus Topics:
${topicSummaryText}

Generate structured to-do items for these topics. Return JSON matching the schema.`;

  const fallback = () => ({
    enrichedTasks: generateFallbackEnrichment(dbTopics),
  });

  const response = await executeStructuredLlm({
    systemPrompt,
    userPrompt,
    schema: PlanEnrichmentResponseSchema,
    fallbackGenerator: fallback,
  });

  const validation = validateEnrichedTasks(response.enrichedTasks, dbTopicIds);

  // If LLM dropped or missed any topics, fill missing with DB fallback
  for (const t of dbTopics) {
    if (!validation.enrichedMap.has(t.id)) {
      const fb = generateFallbackEnrichment([t])[0];
      validation.enrichedMap.set(t.id, fb);
    }
  }

  return validation;
}
