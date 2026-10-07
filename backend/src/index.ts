import express, { Request, Response, NextFunction } from "express";
import http from "http";
import path from "path";
import fs from "fs";
import { config } from "./config";
import { applySecurity } from "./middleware/security";
import rateLimit from "express-rate-limit";
import { initWebsocket } from "./websocket";
import { prisma } from "./db";

import authRoutes         from "./routes/auth";
import studentRoutes      from "./routes/student";
import teacherRoutes      from "./routes/teacher";
import adminRoutes        from "./routes/admin";
import testsRoutes        from "./routes/tests";
import learningRoutes     from "./routes/learning";
import learningStateRoutes from "./routes/learning-state";
import plannerRoutes      from "./routes/planner";
import roadmapRoutes      from "./routes/roadmap";
import notificationsRoutes from "./routes/notifications";
import journalRoutes      from "./routes/journal";
import notesRoutes        from "./routes/notes";
import assignmentsRoutes  from "./routes/assignments";
import classesRoutes      from "./routes/classes";
import aiRoutes           from "./routes/ai";
import documentsRoutes    from "./routes/documents";
import studyPlanRoutes    from "./routes/study-plan";
import vtuRoutes          from "./routes/vtu";
import chatRoutes         from "./routes/chat";
import subtopicRoutes     from "./routes/subtopics";

export function createApp() {
  const app = express();
  app.use(express.json({ limit: "5mb" }));
  applySecurity(app);

  const apiLimiter = rateLimit({ windowMs: 60 * 1000, max: 200, standardHeaders: true, legacyHeaders: false });
  app.use("/api", apiLimiter);

  app.use("/uploads", express.static(path.resolve(__dirname, "../uploads")));

  // Fallback diagram resolver directly from DATA/diagrams
  app.use("/uploads/diagrams", (req, res, next) => {
    const subPath = req.path;
    const parts = subPath.split("/").filter(Boolean);
    if (parts.length >= 2) {
      const [subj, filename] = parts;
      const dataRoot = path.resolve(__dirname, "../../../DATA/diagrams");
      const sems = ["3RD SEM", "4TH SEM", "5TH SEM", "6TH SEM", "7TH SEM"];
      for (const sem of sems) {
        const candidate = path.join(dataRoot, sem, subj, filename);
        if (fs.existsSync(candidate)) {
          return res.sendFile(candidate);
        }
      }
    }
    next();
  });

  // ── health ──────────────────────────────────────────────────────────────────
  app.get("/api/health", async (_req: Request, res: Response) => {
    try {
      const [users, subjects, topics] = await Promise.all([
        prisma.user.count(),
        prisma.subject.count(),
        prisma.topic.count(),
      ]);
      const ollamaModel = process.env.OLLAMA_MODEL || "llama3.1:8b";
      res.json({ status: "ok", db: { users, subjects, topics }, ollamaModel, time: new Date().toISOString() });
    } catch (err) {
      res.status(500).json({ status: "error", detail: String(err) });
    }
  });

  // ── routes ──────────────────────────────────────────────────────────────────
  app.use("/api/auth",          authRoutes);
  app.use("/api/student",       studentRoutes);
  app.use("/api/teacher",       teacherRoutes);
  app.use("/api/admin",         adminRoutes);
  app.use("/api/tests",         testsRoutes);
  app.use("/api/learning",      learningRoutes);
  app.use("/api/learning-state", learningStateRoutes);
  app.use("/api/planner",       plannerRoutes);
  app.use("/api/roadmap",       roadmapRoutes);
  app.use("/api/notifications", notificationsRoutes);
  app.use("/api/journal",       journalRoutes);
  app.use("/api/notes",         notesRoutes);
  app.use("/api/assignments",   assignmentsRoutes);
  app.use("/api/classes",       classesRoutes);
  app.use("/api/ai",            aiRoutes);
  app.use("/api/documents",     documentsRoutes);
  app.use("/api/study-plan",    studyPlanRoutes);
  app.use("/api/vtu",           vtuRoutes);
  app.use("/api/chat",          chatRoutes);
  app.use("/api/topics",        subtopicRoutes);

  // ── global error handler ────────────────────────────────────────────────────
  app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    const isClient =
      (err as any).code === "LIMIT_FILE_SIZE" ||
      err.message?.startsWith("Only PDF") ||
      err.name === "MulterError";
    res.status(isClient ? 400 : 500).json({
      error: isClient ? err.message : "Internal server error",
      detail: err.message,
    });
  });

  return app;
}

if (require.main === module) {
  const app    = createApp();
  const server = http.createServer(app);
  initWebsocket(server);
  server.listen(config.port, () => {
    console.log(`AdaptLearn backend on http://localhost:${config.port}`);
    console.log(`Ollama model: ${process.env.OLLAMA_MODEL || "llama3.1:8b"}`);
    console.log(`Health: http://localhost:${config.port}/api/health`);
  });
}

export { prisma };
