import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

function required(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing required env var: ${name}`);
  return v;
}

export const config = {
  port: Number(process.env.PORT || 8001),
  nodeEnv: process.env.NODE_ENV || "development",
  databaseUrl: required("DATABASE_URL"),
  jwtSecret: required("JWT_SECRET"),
  geminiApiKey: process.env.GEMINI_API_KEY || "",
  // Comma-separated allowlist, e.g. "https://adaptlearn.example.edu,https://app.adaptlearn.example.edu".
  // Defaults to the known local dev origins (same hosts already trusted in the CSP frame-ancestors directive).
  corsOrigins: (process.env.CORS_ORIGINS || "http://localhost:3000,http://localhost:3001")
    .split(",")
    .map((o) => o.trim())
    .filter(Boolean),
};
