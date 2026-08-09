import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from "../config";
import { logAiCall } from "../error-tracking";

let genAI: GoogleGenerativeAI | null = null;

function client(): GoogleGenerativeAI {
  if (!config.geminiApiKey) {
    throw new Error("GEMINI_API_KEY not configured");
  }
  if (!genAI) genAI = new GoogleGenerativeAI(config.geminiApiKey);
  return genAI;
}

export const GEMINI_MODEL = "gemini-2.5-flash";

export async function geminiGenerate(prompt: string, userId?: string): Promise<string> {
  const model = client().getGenerativeModel({ model: GEMINI_MODEL });
  const result = await model.generateContent(prompt);
  const text = result.response.text();
  if (userId) logAiCall(userId, GEMINI_MODEL, prompt.length, text.length);
  return text;
}
