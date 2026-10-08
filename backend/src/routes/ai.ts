import { Router } from "express";
import { z } from "zod";
import http from "http";
import https from "https";
import fs from "fs";
import path from "path";
import { prisma } from "../db";
import { requireAuth, AuthRequest } from "../middleware/auth";
import rateLimit from "express-rate-limit";
import { executeRAG, resolveSubjectCode, retrieveKnowledgeCandidates, retrievePYQs } from "../services/ragService";
import { sanitizeAndEnrichAnswer, StructuredAnswer } from "../services/answerSynthesizer";
import { validateGrounding, GroundingValidationResult } from "../services/groundingValidator";
import { generateCuratedTopicQuestions, cleanOptionText } from "../services/quizSynthesizer";
import { analyzeQuestion, QuestionAnalysis, isConversationalQuery } from "../services/questionAnalyzer";
import { rerankCandidates, allocateDynamicContext } from "../services/reranker";
import { resolveDiagramDecision, DiagramDecision } from "../services/diagramService";
import { isCodeQuestion, resolveCodePipeline } from "../services/codePipeline";
import { retrieveFormulaForQuery } from "../services/formulaService";
import { evaluateConceptCompleteness } from "../services/completenessValidator";

const router = Router();
const aiLimiter = rateLimit({ windowMs: 60 * 1000, max: 60, standardHeaders: true, legacyHeaders: false });

// ── Ollama & Groq config ───────────────────────────────────────────────────────
const OLLAMA_HOST  = process.env.OLLAMA_HOST  || "127.0.0.1";
const OLLAMA_PORT  = Number(process.env.OLLAMA_PORT || 11434);
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || "llama3.1:8b";
const GROQ_API_KEY = process.env.GROQ_API_KEY || "";

// ── Query Deconstruction for Combined / Multi-Part Student Questions ─────────
export interface DeconstructedPrompt {
  isMultiPart: boolean;
  requestsDefinition: boolean;
  requestsDifferences: boolean;
  requestsTypes: boolean;
  requestsWorking: boolean;
  requestsDiagram: boolean;
  subQuestionsSummary: string[];
  cleanTopicName: string;
}

export function deconstructStudentPrompt(question: string): DeconstructedPrompt {
  const q = question.toLowerCase();

  const requestsDefinition  = /\b(define|definition|what is|meaning of|explain the concept)\b/i.test(q);
  const requestsDifferences = /\b(diffrent|difference|differences|differentiate|distinguish|compare|versus|vs)\b/i.test(q);
  const requestsTypes       = /\b(types|list different|categories|classification|kinds|classify|varieties|models)\b/i.test(q);
  const requestsWorking     = /\b(how it works|working|architecture|operational flow|steps|mechanism|process)\b/i.test(q);
  const requestsDiagram     = /\b(diagram|diagramm|digramm|diageram|flowchart|sketch|neat sketch|draw|figure)\b/i.test(q);

  const subQuestionsSummary: string[] = [];
  if (requestsDefinition)  subQuestionsSummary.push("Formal Definition & Governing Objective");
  if (requestsTypes)       subQuestionsSummary.push("Types, Classification & Primary Categories");
  if (requestsWorking)     subQuestionsSummary.push("Step-by-Step Architecture & Operational Mechanism");
  if (requestsDifferences) subQuestionsSummary.push("Key Differences & Technical Comparison");
  if (requestsDiagram)     subQuestionsSummary.push("Dedicated Flowchart / Architecture Diagram");

  const isMultiPart = subQuestionsSummary.length >= 2;

  let cleanTopic = question
    .replace(/\b(define|what is|explain|describe|discuss|say the diffrent of|difference between|differences between|list diffrent types of|types of|with diagram|with digramm|and draw|neat diagram|neat sketch)\b/gi, "")
    .replace(/[?,.:;!]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!cleanTopic || cleanTopic.length < 3) cleanTopic = question;

  return {
    isMultiPart,
    requestsDefinition,
    requestsDifferences,
    requestsTypes,
    requestsWorking,
    requestsDiagram,
    subQuestionsSummary,
    cleanTopicName: cleanTopic.slice(0, 80),
  };
}

// ── Question-Type Classifier (Task 12) ────────────────────────────────────────
export function detectQuestionType(question: string): string {
  const q = question.toLowerCase();
  if (/\b(define|definition|what is|meaning of|state the concept)\b/i.test(q)) return "definition";
  if (/\b(difference|differences|differentiate|distinguish|compare|versus|vs)\b/i.test(q)) return "compare";
  if (/\b(algorithm|pseudo-code|pseudocode|procedure|steps to)\b/i.test(q)) return "algorithm";
  if (/\b(calculate|compute|solve|derive|numerical|find the value)\b/i.test(q)) return "numerical";
  if (/\b(architecture|pin diagram|block diagram|internal structure)\b/i.test(q)) return "architecture";
  if (/\b(list|name|enumerate|mention)\b/i.test(q)) return "list";
  return "explain";
}

// ── Grounded Ollama System Prompt (Task 11) ───────────────────────────────────
const SYSTEM = `You are AdaptLearn, an authoritative Visvesvaraya Technological University (VTU) examination tutor.

Answer the student's question using the supplied syllabus knowledge context.
The supplied context is the authoritative educational source for this answer.

Strict Rules:
- Ground your answer ONLY in the supplied syllabus reference context.
- Do NOT invent facts, fake citations, or hallucinate concepts.
- Do NOT add generic filler (such as "Structural Modularity", "Deterministic Control", "Initialization & Ingestion", or generic software engineering terminology).
- Do NOT create sections merely to make the answer longer.
- Mark-Based Depth Rules:
  * 2 Marks: Provide a crisp definition and 1-2 key points only. Keep concise.
  * 5 Marks: Provide definition, structured explanation, main types/steps, and an example.
  * 10 Marks: Provide introduction, detailed explanation of all components/types, examples, diagram/table, and concise conclusion.
  * 15 Marks: Provide comprehensive breakdown including definition, mechanism, components, examples, comparison, and exam strategy.
- Question-Wording Rules:
  * "Define": Focus on definition, meaning, and a concise example if useful.
  * "Explain" / "Describe": Structured explanation, features, mechanism, example, and diagram where relevant.
  * "Compare" / "Differentiate": Parameter-by-parameter contrast or comparative table.
  * "With diagram": Diagram is mandatory if relevant.
- PYQ and Exam Rules:
  * Do NOT invent exam years or claim topics were asked unless confirmed in PREVIOUS YEAR QUESTIONS.
  * Keep Model Paper questions distinct from Previous Year Questions.
- If the supplied context does not contain enough information, explicitly state in the text that the available source material is insufficient.
- Prefer factual correctness and syllabus fidelity over verbosity.
- Write in clear, student-friendly VTU examination style.

Required JSON Structure:
{
  "question": string,
  "subject_code": string,
  "topic": string,
  "module": integer (1-5),
  "marks": integer,
  "co_reference": string,
  "sections": [
    {"type": "definition" | "explanation" | "how_it_works" | "example" | "comparison" | "conclusion", "heading": string, "text": string}
  ],
  "ai_diagram": {
    "title": "Clean diagram title",
    "mermaid_code": "flowchart TD\\n  A --> B",
    "exam_sketch_guide": "Step-by-step exam sheet drawing instructions"
  }
}
Output ONLY the JSON object. No markdown code blocks, no text outside.`;

// ── Local Ollama HTTP caller ──────────────────────────────────────────────────
function ollamaChat(
  messages: { role: string; content: string }[],
  timeout = 35000
): Promise<string> {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      model: OLLAMA_MODEL,
      messages,
      stream: false,
      options: { temperature: 0.25, num_ctx: 3072, num_predict: 1200 },
    });

    const req = http.request(
      {
        host: OLLAMA_HOST,
        port: OLLAMA_PORT,
        path: "/api/chat",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(body),
        },
      },
      (res) => {
        let data = "";
        res.on("data", d => (data += d));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data)?.message?.content || "");
          } catch {
            reject(new Error("Failed to parse Ollama response"));
          }
        });
      }
    );
    req.setTimeout(timeout, () => {
      req.destroy();
      reject(new Error("Ollama timeout"));
    });
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

// ── Fast Cloud LLM Fallback (Groq) ────────────────────────────────────────────
function groqChat(
  messages: { role: string; content: string }[],
  timeout = 25000
): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!GROQ_API_KEY) {
      reject(new Error("No Groq API key configured"));
      return;
    }

    const body = JSON.stringify({
      model: "qwen/qwen3.8-27b",
      messages,
      temperature: 0.2,
      max_tokens: 1500,
      response_format: { type: "json_object" },
    });

    const req = https.request(
      {
        hostname: "api.groq.com",
        path: "/openai/v1/chat/completions",
        method: "POST",
        headers: {
          "Authorization": `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(body),
        },
      },
      (res) => {
        let data = "";
        res.on("data", d => (data += d));
        res.on("end", () => {
          try {
            const parsed = JSON.parse(data);
            const content = parsed?.choices?.[0]?.message?.content || "";
            resolve(content);
          } catch {
            reject(new Error("Failed to parse Groq response"));
          }
        });
      }
    );
    req.setTimeout(timeout, () => {
      req.destroy();
      reject(new Error("Groq timeout"));
    });
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

// ── Multi-Tier Resilient LLM Invoker ──────────────────────────────────────────
async function callLLM(messages: { role: string; content: string }[]): Promise<string> {
  // Tier 1: Try Local Ollama LLM
  try {
    const raw = await ollamaChat(messages, 25000);
    if (raw && raw.trim().length > 50) return raw;
  } catch {
    // Local Ollama offline or timed out; fall through to Tier 2
  }

  // Tier 2: Try Fast Groq LLM Fallback
  try {
    const raw = await groqChat(messages, 20000);
    if (raw && raw.trim().length > 50) return raw;
  } catch {
    // Groq offline; fall through to deterministic synthesizer
  }

  return "";
}

function parseJsonAnswer(raw: string): any {
  const cleaned = raw.replace(/```(?:json)?|```/g, "").trim();
  try { return JSON.parse(cleaned); } catch { /* fall through */ }
  const m = cleaned.match(/\{[\s\S]*\}/);
  if (m) {
    try { return JSON.parse(m[0]); } catch { /* fall through */ }
  }
  return null;
}

// ── BKT helper ────────────────────────────────────────────────────────────────
function bktUpdate(mastery: number, correct: boolean): number {
  const pLearn = 0.1, pGuess = 0.25, pSlip = 0.1;
  const p = mastery * (1 - pSlip) + (1 - mastery) * pGuess;
  let pKnown = correct
    ? (mastery * (1 - pSlip)) / p
    : (mastery * pSlip) / (1 - p);
  pKnown = Math.min(1, Math.max(0, pKnown));
  return pKnown + (1 - pKnown) * pLearn;
}

// ── POST /api/ai/ask ──────────────────────────────────────────────────────────
router.post("/ask", requireAuth, aiLimiter, async (req: AuthRequest, res) => {
  try {
    const { question, subjectCode, moduleNumber, marks } = z.object({
      question:     z.string().min(2).max(2000),
      subjectCode:  z.string().min(1).optional().default("GENERAL"),
      moduleNumber: z.number().int().min(1).optional(),
      marks:        z.number().int().optional(),
    }).parse(req.body);

    // 1. Phase 4 Question Analyzer (Task 2 & 3)
    const analysis = analyzeQuestion(question, subjectCode, moduleNumber, marks);
    const resolvedSubject = analysis.subject;
    const qType = analysis.questionType;
    const detectedMarks = marks ?? analysis.detectedMarks;

    // Ambiguity Handling (Task 24 & 25)
    if (analysis.isAmbiguous) {
      console.log(`[RAG /ask] Ambiguous query detected: "${question}"`);
      return res.json({
        answer: {
          question,
          subject_code: resolvedSubject,
          topic: analysis.topic,
          module: analysis.module,
          marks: detectedMarks,
          co_reference: `CO${analysis.module}`,
          sections: [
            {
              type: "ambiguous_query",
              heading: "Query Clarification Needed",
              text: analysis.ambiguityReason || "This topic is taught across multiple VTU subjects. Please select a specific subject or specify the curriculum context.",
              key_terms: [analysis.topic],
            },
          ],
        },
        retrievedChunks: [],
        diagrams: [],
        pyqList: [],
        previousYearQuestions: [],
        modelPaperQuestions: [],
        isImportantTopic: false,
        importanceSummary: "Query is ambiguous; please clarify subject context.",
        followUpQuiz: { topicId: null, questions: [] },
        groundingValidation: { valid: true, score: 1.0, unsupportedClaims: [] },
        retrievalConfidence: "NONE",
        questionAnalysis: analysis,
      });
    }

    // 1b. Basic Conversational Router (Master Prompt Sections 28 & 58)
    if (analysis.intent === "CONVERSATIONAL" || isConversationalQuery(question)) {
      const conversationalResponse: StructuredAnswer = {
        question,
        subject_code: "GENERAL",
        topic: "AdaptLearn Assistant",
        module: 1,
        marks: 2,
        co_reference: "GENERAL",
        sections: [
          {
            type: "definition",
            heading: "AdaptLearn — VTU Educational Assistant",
            text: "Hello! I am AdaptLearn, your dedicated Visvesvaraya Technological University (VTU) CSE educational assistant for the 2022 Scheme. I can help you with module explanations, textbook references, past university exam questions (PYQs), model question papers, and architecture diagrams across Semesters 3 to 7. What topic or exam question would you like to explore?",
            key_terms: ["AdaptLearn", "VTU 2022 Scheme", "Computer Science"],
          },
        ],
      };

      return res.json({
        answer: conversationalResponse,
        retrievedChunks: [],
        diagrams: [],
        pyqList: [],
        previousYearQuestions: [],
        modelPaperQuestions: [],
        isImportantTopic: false,
        importanceSummary: "Conversational Query",
        followUpQuiz: { topicId: null, questions: [] },
        groundingValidation: { valid: true, score: 1.0, unsupportedClaims: [] },
        provenance: ["AdaptLearn Virtual Assistant"],
        retrievalConfidence: "HIGH",
        questionAnalysis: analysis,
      });
    }

    // 1c. Official Syllabus / Curriculum Query Router (Master Prompt Section 56)
    if (analysis.intent === "SYLLABUS") {
      const masterPath = path.resolve(__dirname, "../../../knowledge/vtu_2022_scheme_master.json");
      let subjectEntry: any = null;
      if (fs.existsSync(masterPath)) {
        try {
          const masterData = JSON.parse(fs.readFileSync(masterPath, "utf-8"));
          subjectEntry = masterData.subjects?.find((s: any) => s.code === resolvedSubject);
        } catch {}
      }

      if (subjectEntry && subjectEntry.modules) {
        const moduleSections = Object.entries(subjectEntry.modules).map(([num, title]) => ({
          type: "explanation" as const,
          heading: `Module ${num}: ${title}`,
          text: `Prescribed syllabus unit for ${resolvedSubject} (${subjectEntry.name}), Semester ${subjectEntry.semester}. Covers fundamental mechanisms, formulas, and examination topics.`,
          key_terms: [String(title)],
        }));

        const syllabusAnswer: StructuredAnswer = {
          question,
          subject_code: resolvedSubject,
          topic: `${subjectEntry.name} Curriculum`,
          module: 1,
          marks: 10,
          co_reference: "CO1",
          sections: [
            {
              type: "definition",
              heading: `${resolvedSubject} — Official VTU 2022 Scheme Syllabus`,
              text: `${subjectEntry.name} is a ${subjectEntry.category.toUpperCase()} course carrying ${subjectEntry.credits} credits in Semester ${subjectEntry.semester} of the VTU 2022 Scheme curriculum. Below is the official 5-module syllabus breakdown:`,
              key_terms: [resolvedSubject, subjectEntry.name, "VTU 2022 Scheme"],
            },
            ...moduleSections,
          ],
        };

        return res.json({
          answer: syllabusAnswer,
          retrievedChunks: [],
          diagrams: [],
          pyqList: [],
          previousYearQuestions: [],
          modelPaperQuestions: [],
          isImportantTopic: true,
          importanceSummary: `Official VTU Syllabus: 5 Modules for ${resolvedSubject}`,
          followUpQuiz: { topicId: null, questions: [] },
          groundingValidation: { valid: true, score: 1.0, unsupportedClaims: [] },
          provenance: ["VTU 2022 Scheme Master Curriculum"],
          retrievalConfidence: "HIGH",
          questionAnalysis: analysis,
        });
      }
    }

    // 1d. Specialized PYQ Query Router (Master Prompt Sections 19, 20, 21, 53)
    if (analysis.intent === "PYQ") {
      const pyqData = retrievePYQs(resolvedSubject, question);
      const questionsToDisplay = pyqData.previousYearQuestions.length > 0 ? pyqData.previousYearQuestions : pyqData.pyqList;

      if (questionsToDisplay.length > 0) {
        const qSections = questionsToDisplay.map((p, idx) => ({
          type: "explanation" as const,
          heading: `${idx + 1}. ${p.paper} (${p.marks || 10} Marks — Module ${p.moduleNumber || analysis.module})`,
          text: p.question,
          key_terms: [p.paper, `${p.marks || 10}M`, p.level || "L2"],
        }));

        const pyqAnswer: StructuredAnswer = {
          question,
          subject_code: resolvedSubject,
          topic: `${analysis.topic} Exam Questions`,
          module: analysis.module,
          marks: 10,
          co_reference: `CO${analysis.module}`,
          sections: [
            {
              type: "definition",
              heading: `Previous Year VTU Exam Questions — ${resolvedSubject} (${analysis.topic})`,
              text: `Below are verified previous year university examination questions for ${analysis.topic} in ${resolvedSubject}. These questions are extracted directly from official VTU examination sessions:`,
              key_terms: ["VTU Exam", "Previous Papers", analysis.topic],
            },
            ...qSections,
            {
              type: "conclusion",
              heading: "Exam Strategy & Focus Areas",
              text: `This topic appears frequently with standard weightage of 6 to 10 marks per question. Prepare formal definitions, labeled block diagrams, and comparison tables as per VTU evaluation rubrics.`,
              key_terms: ["Evaluation Rubric", "VTU Scheme"],
            },
          ],
        };

        return res.json({
          answer: pyqAnswer,
          retrievedChunks: [],
          diagrams: [],
          pyqList: questionsToDisplay,
          previousYearQuestions: questionsToDisplay,
          modelPaperQuestions: pyqData.modelPaperQuestions,
          isImportantTopic: true,
          importanceSummary: `Tested in ${questionsToDisplay.length} past university exams.`,
          followUpQuiz: { topicId: null, questions: [] },
          groundingValidation: { valid: true, score: 1.0, unsupportedClaims: [] },
          provenance: questionsToDisplay.map(q => q.paper),
          retrievalConfidence: "HIGH",
          questionAnalysis: analysis,
        });
      }
    }

    // 1e. Specialized Model Paper Query Router (Master Prompt Sections 22 & 54)
    if (analysis.intent === "MODEL_PAPER") {
      const pyqData = retrievePYQs(resolvedSubject, question);
      const modelQuestions = pyqData.modelPaperQuestions.length > 0 ? pyqData.modelPaperQuestions : pyqData.pyqList.filter(q => q.isModelPaper);

      if (modelQuestions.length > 0) {
        const qSections = modelQuestions.map((p, idx) => ({
          type: "explanation" as const,
          heading: `${idx + 1}. Official VTU Model Question Paper (Module ${p.moduleNumber || analysis.module})`,
          text: p.question,
          key_terms: ["Model Paper", `${p.marks || 10}M`],
        }));

        const modelAnswer: StructuredAnswer = {
          question,
          subject_code: resolvedSubject,
          topic: `${analysis.topic} Model Questions`,
          module: analysis.module,
          marks: 10,
          co_reference: `CO${analysis.module}`,
          sections: [
            {
              type: "definition",
              heading: `Official VTU Model Question Papers — ${resolvedSubject} (${analysis.topic})`,
              text: `Below are official VTU Model Question Paper problems issued for ${analysis.topic} in ${resolvedSubject} under the 2022 Scheme:`,
              key_terms: ["VTU Model Paper", analysis.topic],
            },
            ...qSections,
          ],
        };

        return res.json({
          answer: modelAnswer,
          retrievedChunks: [],
          diagrams: [],
          pyqList: modelQuestions,
          previousYearQuestions: pyqData.previousYearQuestions,
          modelPaperQuestions: modelQuestions,
          isImportantTopic: true,
          importanceSummary: `Found in official VTU Model Question Papers.`,
          followUpQuiz: { topicId: null, questions: [] },
          groundingValidation: { valid: true, score: 1.0, unsupportedClaims: [] },
          provenance: ["Official VTU Model Question Papers"],
          retrievalConfidence: "HIGH",
          questionAnalysis: analysis,
        });
      }
    }

    // 2. Code Question Pipeline (Task 19)
    if (analysis.requiresCode && isCodeQuestion(question)) {
      const codeResp = resolveCodePipeline(question);
      if (codeResp) {
        const codeAnswer: StructuredAnswer = {
          question,
          subject_code: resolvedSubject,
          topic: analysis.topic,
          module: analysis.module,
          marks: detectedMarks,
          co_reference: `CO${analysis.module}`,
          sections: [
            {
              type: "definition",
              heading: codeResp.programTitle,
              text: codeResp.explanation,
              key_terms: [codeResp.language, "Algorithm", "Implementation"],
            },
            {
              type: "how_it_works",
              heading: `Source Code (${codeResp.language.toUpperCase()})`,
              text: "```" + codeResp.language + "\n" + codeResp.sourceCode + "\n```",
              key_terms: ["Code", codeResp.language],
            },
            {
              type: "explanation",
              heading: "Complexity Analysis & Sample Execution",
              text: `Time Complexity: ${codeResp.timeComplexity}\nSpace Complexity: ${codeResp.spaceComplexity}\n\nSample Input/Output:\n${codeResp.sampleInputOutput}`,
              key_terms: ["Time Complexity", "Space Complexity"],
            },
          ],
        };

        return res.json({
          answer: codeAnswer,
          retrievedChunks: [],
          diagrams: [],
          pyqList: [],
          previousYearQuestions: [],
          modelPaperQuestions: [],
          isImportantTopic: false,
          importanceSummary: "Programming solution retrieved.",
          followUpQuiz: { topicId: null, questions: [] },
          groundingValidation: { valid: true, score: 1.0, unsupportedClaims: [] },
          provenance: [`VTU Programming Notes (${codeResp.language.toUpperCase()})`],
          retrievalConfidence: "HIGH",
          questionAnalysis: analysis,
        });
      }
    }

    // 3. Deconstruct combined multi-part questions
    const deconstructed = deconstructStudentPrompt(question);

    // 4. Execute RAG pipeline over canonical knowledge base
    const ragResult = executeRAG(resolvedSubject, question, moduleNumber);
    const detectedModule = moduleNumber ?? ragResult.moduleNumber ?? analysis.module ?? 1;

    // 5. Candidate Reranking & Dynamic Context Allocation (Tasks 9, 10, 11, 12, 26)
    const rankedCandidates = rerankCandidates(ragResult.detailedChunks, analysis);

    // 5b. Concept Completeness Check & Targeted Re-Retrieval (Master Prompt Sections 24 & 25)
    const combinedCandidateText = rankedCandidates.slice(0, 5).map(c => c.content).join(" ");
    const completeness = evaluateConceptCompleteness(analysis.topic, combinedCandidateText);
    if (!completeness.isComplete && completeness.targetedSubtopicQueries.length > 0) {
      for (const subQuery of completeness.targetedSubtopicQueries) {
        const extraChunks = retrieveKnowledgeCandidates(resolvedSubject, subQuery, detectedModule);
        for (const ec of extraChunks) {
          if (!rankedCandidates.some(rc => rc.id === ec.id)) {
            rankedCandidates.push({
              ...ec,
              finalScore: (ec.rawScore || 10) * 1.15,
              contentType: "primary_module",
              provenance: {
                subject: resolvedSubject,
                module: ec.moduleNumber,
                sourceFile: ec.sourceFile,
                contentType: "primary_module",
                topic: ec.title,
              },
            });
          }
        }
      }
      rankedCandidates.sort((a, b) => b.finalScore - a.finalScore);
    }

    const dynamicRetrieval = allocateDynamicContext(rankedCandidates, analysis);

    // 6. Diagram Intelligence (Tasks 13–18)
    const diagramDecision = resolveDiagramDecision(
      resolvedSubject,
      question,
      analysis.topic,
      qType,
      detectedModule,
      analysis.keyPoints
    );

    // 7. Numerical & Formula Pipeline (Tasks 20 & 21)
    const formula = retrieveFormulaForQuery(question, resolvedSubject);

    // Observability Logging (Tasks 22 & 31)
    console.log(
      `[RAG /ask] Query: "${question.slice(0, 50)}" | Subject: ${resolvedSubject} | Module: ${detectedModule} | Type: ${qType} | Depth: ${analysis.estimatedDepth} | Confidence: ${dynamicRetrieval.retrievalConfidence} | Budget: ${dynamicRetrieval.allocatedBudget}c`
    );

    // Fetch related topic from DB for BKT binding
    let topic = await prisma.topic.findFirst({
      where: { subjectCode: resolvedSubject, ...(moduleNumber ? { moduleNumber } : {}) },
      orderBy: { order: "asc" },
    });
    if (!topic) {
      topic = await prisma.topic.findFirst({
        where: { subjectCode: resolvedSubject },
        orderBy: { order: "asc" },
      });
    }
    if (!topic) {
      topic = await prisma.topic.findFirst({ orderBy: { id: "asc" } });
    }

    // 8. Negative Test & Empty Context Handling (Task 20)
    if (!ragResult.hasContext && ragResult.retrievedChunks.length === 0) {
      console.log(`[RAG /ask] Insufficient context for "${question}" in ${resolvedSubject}`);
      const fallbackAnswer: StructuredAnswer = {
        question,
        subject_code: resolvedSubject,
        topic: deconstructed.cleanTopicName || topic?.name || question,
        module: detectedModule,
        marks: detectedMarks,
        co_reference: `CO${detectedModule}`,
        sections: [
          {
            type: "insufficient_context",
            heading: "Notice: Topic Not Found in VTU Syllabus Knowledge Base",
            text: `The query "${question}" does not match syllabus topics or indexed materials in the knowledge base for ${resolvedSubject} (Module ${detectedModule}). Please verify the subject code or select a topic from the VTU curriculum.`,
            key_terms: [resolvedSubject],
          },
        ],
      };

      return res.json({
        answer:                 fallbackAnswer,
        retrievedChunks:        [],
        diagrams:               [],
        pyqList:                [],
        previousYearQuestions:  [],
        modelPaperQuestions:    [],
        isImportantTopic:       false,
        importanceSummary:      "No syllabus reference found for this query.",
        followUpQuiz:           { topicId: topic?.id ?? null, questions: [] },
        groundingValidation:    { valid: false, score: 0.0, reason: "Insufficient syllabus context" },
        provenance:             [],
        retrievalConfidence:    "NONE",
        diagramDecision,
        questionAnalysis:       analysis,
      });
    }

    // 9. Build structured context-augmented user prompt (Tasks 11 & 14)
    let promptHeader = `[${resolvedSubject} Module ${detectedModule} — ${detectedMarks} Marks VTU Question — Type: ${qType.toUpperCase()}]`;
    if (deconstructed.isMultiPart) {
      promptHeader += `\nNote: The student asked a multi-part question with ${deconstructed.subQuestionsSummary.length} specific requirements:\n${deconstructed.subQuestionsSummary.map((s, idx) => `  ${idx + 1}. ${s}`).join("\n")}\nYou MUST explicitly answer all sub-parts!`;
    }

    let contextSnippet = dynamicRetrieval.contextString || ragResult.structuredContext || ragResult.textbookExcerpt;
    if (formula && analysis.requiresCalculation) {
      contextSnippet = `[VERIFIED VTU FORMULA: ${formula.formulaName}]\nFormula: ${formula.formulaPlainText}\nLaTeX: ${formula.formulaLatex}\nVariables:\n${formula.variables.map(v => `  - ${v.name}: ${v.description} (${v.unit || ""})`).join("\n")}\nWorked Solution Guide:\n${formula.sampleCalculation}\n\n${contextSnippet}`;
    }

    let userPromptWithRAG = `${promptHeader}\nQuestion: ${question}\n\n`;
    if (contextSnippet) {
      userPromptWithRAG += `Authoritative Syllabus Reference Context:\n${contextSnippet.slice(0, dynamicRetrieval.allocatedBudget)}\n\n`;
    }
    if (ragResult.previousYearQuestions && ragResult.previousYearQuestions.length > 0) {
      userPromptWithRAG += `[PREVIOUS YEAR QUESTIONS (VERIFIED EXAMS)]\n${ragResult.previousYearQuestions.slice(0, 3).map(p => `• ${p.paper} (${p.marks}M): ${p.question}`).join("\n")}\n\n`;
    }
    if (ragResult.modelPaperQuestions && ragResult.modelPaperQuestions.length > 0) {
      userPromptWithRAG += `[MODEL PAPER QUESTIONS (PRACTICE ONLY)]\n${ragResult.modelPaperQuestions.slice(0, 2).map(m => `• ${m.paper} (${m.marks}M): ${m.question}`).join("\n")}\n\n`;
    }
    if (diagramDecision.requiresDiagram || diagramDecision.diagramHelpful) {
      if (diagramDecision.generatedDiagram) {
        userPromptWithRAG += `[DIAGRAM GUIDANCE]\nInclude the verified diagram: ${diagramDecision.generatedDiagram.title}\n\n`;
      }
    }
    userPromptWithRAG += `Provide an accurate, technically sound ${detectedMarks}-marks VTU answer grounded in the reference context. Return valid JSON matching the system schema.`;

    // 7. Invoke Multi-Tier Resilient LLM with Controlled Retries (Tasks 15 & 16)
    let enrichedAnswer: StructuredAnswer | null = null;
    let lastValidation: GroundingValidationResult = {
      valid: false,
      groundingScore: 0,
      topicMatch: false,
      subjectMatch: false,
      unsupportedClaims: [],
      insufficientContext: false,
    };

    let retryCount = 0;
    const maxRetries = 2;
    let currentPrompt = userPromptWithRAG;

    while (retryCount <= maxRetries) {
      const messages = [
        { role: "system", content: SYSTEM },
        { role: "user",   content: currentPrompt },
      ];

      const raw = await callLLM(messages);

      let parsed = parseJsonAnswer(raw);
      if (!parsed || typeof parsed !== "object") {
        parsed = {
          question,
          subject_code: resolvedSubject,
          topic: deconstructed.cleanTopicName || topic?.name || question,
          module: detectedModule,
          marks: detectedMarks,
          co_reference: `CO${detectedModule}`,
          sections: [],
        };
      }

      // Baseline metadata
      parsed.question     = question;
      parsed.subject_code = resolvedSubject;
      parsed.module       = detectedModule;
      parsed.marks        = detectedMarks;
      const coMatch = String(parsed.co_reference || "").match(/\bCO[1-5]\b/i);
      parsed.co_reference = coMatch ? coMatch[0].toUpperCase() : `CO${detectedModule || 1}`;
      if (!parsed.topic) parsed.topic = deconstructed.cleanTopicName || topic?.name || question;

      const candidate = sanitizeAndEnrichAnswer(
        parsed as StructuredAnswer,
        resolvedSubject,
        question,
        contextSnippet,
        detectedMarks
      );

      // Unify diagram from diagramDecision for verified consistency
      if (diagramDecision.useSourceDiagram && diagramDecision.sourceDiagram) {
        candidate.ai_diagram = {
          title: diagramDecision.sourceDiagram.caption || `${analysis.topic} Architecture`,
          mermaid_code: `flowchart TD\n  D["Source Diagram: ${diagramDecision.sourceDiagram.topic}"]`,
          exam_sketch_guide: `Refer to figure: ${diagramDecision.sourceDiagram.caption}`,
        };
      } else if (diagramDecision.generatedDiagram) {
        candidate.ai_diagram = {
          title: diagramDecision.generatedDiagram.title,
          mermaid_code: diagramDecision.generatedDiagram.mermaidCode,
          exam_sketch_guide: diagramDecision.generatedDiagram.drawingGuide,
        };
      }

      // Validate Grounding (Task 15)
      lastValidation = validateGrounding(
        candidate,
        contextSnippet,
        question,
        resolvedSubject,
        candidate.topic
      );

      console.log(
        `[RAG /ask] Attempt ${retryCount + 1}: Valid=${lastValidation.valid}, Score=${lastValidation.groundingScore}, Claims=${lastValidation.unsupportedClaims.length}, Reason=${lastValidation.reason || "OK"}`
      );

      // If LLM returned empty (offline), or answer is valid, or max retries reached: break
      if (!raw || raw.trim().length === 0 || lastValidation.valid || retryCount === maxRetries) {
        enrichedAnswer = candidate;
        break;
      }

      // Retry with targeted correction prompt (Task 16)
      retryCount++;
      const issues = lastValidation.unsupportedClaims.length > 0
        ? lastValidation.unsupportedClaims.join("; ")
        : lastValidation.reason || "Grounding score below threshold";
      currentPrompt = `${userPromptWithRAG}\n\nCORRECTION: Your previous response was rejected due to: ${issues}. Regenerate strictly adhering to the VTU syllabus context without generic filler phrases.`;
    }

    if (!enrichedAnswer) {
      enrichedAnswer = sanitizeAndEnrichAnswer(
        { question, subject_code: resolvedSubject, module: detectedModule, marks: detectedMarks, sections: [] } as any,
        resolvedSubject,
        question,
        contextSnippet,
        detectedMarks
      );
      if (diagramDecision.useSourceDiagram && diagramDecision.sourceDiagram) {
        enrichedAnswer.ai_diagram = {
          title: diagramDecision.sourceDiagram.caption || `${analysis.topic} Architecture`,
          mermaid_code: `flowchart TD\n  D["Source Diagram: ${diagramDecision.sourceDiagram.topic}"]`,
          exam_sketch_guide: `Refer to figure: ${diagramDecision.sourceDiagram.caption}`,
        };
      } else if (diagramDecision.generatedDiagram) {
        enrichedAnswer.ai_diagram = {
          title: diagramDecision.generatedDiagram.title,
          mermaid_code: diagramDecision.generatedDiagram.mermaidCode,
          exam_sketch_guide: diagramDecision.generatedDiagram.drawingGuide,
        };
      }
    }

    // 8. Generate Topic-Consistent Follow-up Quiz
    let followUpQuiz: { topicId: string | null; questions: any[] } = {
      topicId: topic?.id ?? `${resolvedSubject}-m1-t1`,
      questions: [],
    };

    try {
      const topicFocus = enrichedAnswer.topic || deconstructed.cleanTopicName || question;
      const quizSystemPrompt = `You are a VTU engineering exam quiz creator. Create 3 multiple choice questions (MCQs) for university students strictly testing understanding of "${topicFocus}".
Return ONLY a valid JSON array of 3 objects with this exact structure:
[
  {
    "question": "Question text directly on ${topicFocus}?",
    "options": [
      "Option description without prefixes",
      "Option description without prefixes",
      "Option description without prefixes",
      "Option description without prefixes"
    ],
    "correctIndex": 0,
    "explanation": "Clear explanation of why this answer is correct and why other options are incorrect."
  }
]
Requirements:
1. Exactly 4 options per question.
2. Do NOT write 'A.', 'B.', '1.', '2.' in the option strings.
3. 'correctIndex' is 0, 1, 2, or 3.
4. Output ONLY the JSON array.`;

      const mcqRaw = await callLLM([
        { role: "system", content: quizSystemPrompt },
        { role: "user",   content: `Create 3 VTU exam MCQs with explanations strictly on: ${topicFocus}\nSubject: ${resolvedSubject}` },
      ]);

      const cleaned = mcqRaw.replace(/```(?:json)?|```/g, "").trim();
      const m = cleaned.match(/\[[\s\S]*\]/);
      if (m) {
        const qs = JSON.parse(m[0]);
        if (Array.isArray(qs) && qs.length > 0) {
          followUpQuiz.questions = qs.slice(0, 3).map((q: any) => {
            const rawOpts = Array.isArray(q.options) && q.options.length >= 2 ? q.options : [
              "Standard architectural specification",
              "Alternative protocol parameter",
              "Secondary design consideration",
              "General operational attribute",
            ];
            const cleanOpts = rawOpts.slice(0, 4).map(cleanOptionText);
            while (cleanOpts.length < 4) {
              cleanOpts.push(`Option ${String.fromCharCode(65 + cleanOpts.length)}`);
            }
            const cIndex = (typeof q.correctIndex === "number" && q.correctIndex >= 0 && q.correctIndex < cleanOpts.length)
              ? q.correctIndex
              : 0;

            const exp = q.explanation && String(q.explanation).length > 10
              ? String(q.explanation).trim()
              : `Option ${String.fromCharCode(65 + cIndex)} is correct because it directly satisfies the standard definition and operational model of ${topicFocus}.`;

            return {
              kind: "mcq",
              question: String(q.question || `What is the core function of ${topicFocus}?`).trim(),
              options: cleanOpts,
              correctIndex: cIndex,
              explanation: exp,
            };
          });
        }
      }
    } catch { /* fallback below */ }

    // Fallback if model did not return 3 valid questions
    if (!followUpQuiz.questions.length || followUpQuiz.questions.length < 3) {
      followUpQuiz.questions = generateCuratedTopicQuestions(
        enrichedAnswer.topic || question,
        resolvedSubject,
        question
      );
    }

    res.json({
      answer:                 enrichedAnswer,
      retrievedChunks:        ragResult.retrievedChunks,
      diagrams:               ragResult.diagrams,
      pyqList:                ragResult.pyqList,
      previousYearQuestions:  ragResult.previousYearQuestions,
      modelPaperQuestions:    ragResult.modelPaperQuestions,
      isImportantTopic:       ragResult.isImportantTopic,
      importanceSummary:      ragResult.importanceSummary,
      followUpQuiz,
      groundingValidation: {
        valid: lastValidation.valid,
        score: lastValidation.groundingScore,
        unsupportedClaims: lastValidation.unsupportedClaims,
        reason: lastValidation.reason,
      },
      // Phase 4 enrichments
      provenance:             dynamicRetrieval.provenanceSummary,
      retrievalConfidence:    dynamicRetrieval.retrievalConfidence,
      diagramDecision,
      questionAnalysis:       analysis,
      formula:                formula ?? undefined,
    });
  } catch (err: any) {
    const msg = String(err.message || err);
    res.status(500).json({ error: "AI request failed", detail: msg });
  }
});

// ── POST /api/ai/mcq-response — feed quiz answer into BKT ───────────────────
router.post("/mcq-response", requireAuth, aiLimiter, async (req: AuthRequest, res) => {
  try {
    const { topicId, correct } = z.object({
      topicId: z.string().nullable().optional(),
      correct: z.boolean(),
    }).parse(req.body);

    let targetTopicId = topicId;
    if (!targetTopicId) {
      const defaultTopic = await prisma.topic.findFirst({ orderBy: { id: "asc" } });
      targetTopicId = defaultTopic?.id ?? null;
    }

    if (!targetTopicId) {
      res.json({
        state: null,
        masteryBefore: 0.5,
        masteryAfter: correct ? 0.55 : 0.48,
        delta: correct ? 0.05 : -0.02,
        achievementsUnlocked: [],
      });
      return;
    }

    const topic = await prisma.topic.findUnique({ where: { id: targetTopicId } });
    if (!topic) {
      res.json({
        state: null,
        masteryBefore: 0.5,
        masteryAfter: correct ? 0.55 : 0.48,
        delta: correct ? 0.05 : -0.02,
        achievementsUnlocked: [],
      });
      return;
    }

    const state = await prisma.learningState.upsert({
      where:  { userId_topicId: { userId: req.user!.id, topicId: targetTopicId } },
      update: {},
      create: { userId: req.user!.id, topicId: targetTopicId },
    });

    const newMastery = bktUpdate(state.mastery, correct);
    await prisma.learningState.update({
      where: { id: state.id },
      data: {
        mastery:        newMastery,
        correctCount:   state.correctCount  + (correct ? 1 : 0),
        wrongCount:     state.wrongCount    + (correct ? 0 : 1),
        timesReviewed:  state.timesReviewed + 1,
        lastReviewedAt: new Date(),
      },
    });

    await prisma.studySession.create({
      data: { userId: req.user!.id, topicId: targetTopicId, method: "state-trace", correct },
    });

    res.json({
      state: {
        topicId: targetTopicId,
        mastery: newMastery,
        correctCount: state.correctCount + (correct ? 1 : 0),
        wrongCount: state.wrongCount + (correct ? 0 : 1),
      },
      masteryBefore: state.mastery,
      masteryAfter: newMastery,
      delta: newMastery - state.mastery,
      achievementsUnlocked: [],
    });
  } catch (err: any) {
    res.status(500).json({ error: "MCQ evaluation failed", detail: err.message });
  }
});

export default router;
