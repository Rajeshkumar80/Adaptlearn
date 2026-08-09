import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

function required(name: string): string {
  const v = process.env[name];
  if (!v) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return v;
}

export const config = {
  port: Number(process.env.PORT || 8001),
  nodeEnv: process.env.NODE_ENV || "development",
  databaseUrl: required("DATABASE_URL"),
  // Fail-fast: never boot without a JWT secret
  jwtSecret: required("JWT_SECRET"),
  geminiApiKey: process.env.GEMINI_API_KEY || "",
  redisUrl: process.env.REDIS_URL || "",
  dataDir: process.env.DATA_DIR || path.resolve(__dirname, "../../data"),
};
