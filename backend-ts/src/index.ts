import express, { Request, Response } from "express";
import http from "http";
import path from "path";
import { PrismaClient } from "@prisma/client";
import { config } from "./config";
import { applySecurity } from "./middleware/security";
import { apiLimiter } from "./middleware/rate-limit";
import { initWebsocket } from "./websocket";

import authRoutes from "./routes/auth";
import studentRoutes from "./routes/student";
import teacherRoutes from "./routes/teacher";
import adminRoutes from "./routes/admin";
import testsRoutes from "./routes/tests";
import learningRoutes from "./routes/learning";
import learningStateRoutes from "./routes/learning-state";
import plannerRoutes from "./routes/planner";
import roadmapRoutes from "./routes/roadmap";
import notificationsRoutes from "./routes/notifications";
import journalRoutes from "./routes/journal";
import notesRoutes from "./routes/notes";
import assignmentsRoutes from "./routes/assignments";
import classesRoutes from "./routes/classes";
import ingestionRoutes from "./routes/ingestion";
import aiRoutes from "./routes/ai";
import documentsRoutes from "./routes/documents";
import studyPlanRoutes from "./routes/study-plan";
import vtuRoutes from "./routes/vtu";

const prisma = new PrismaClient();

export function createApp() {
  const app = express();
  app.use(express.json({ limit: "5mb" }));
  applySecurity(app);
  app.use("/api", apiLimiter);

  // static uploads (notes / submissions / ingested docs)
  app.use("/uploads", express.static(path.resolve(__dirname, "../uploads")));

  app.get("/api/health", async (_req: Request, res: Response) => {
    try {
      const [users, subjects, topics, chunks, documents, classes] = await Promise.all([
        prisma.user.count(),
        prisma.subject.count(),
        prisma.topic.count(),
        prisma.documentChunk.count(),
        prisma.document.count(),
        prisma.class.count(),
      ]);
      res.json({
        status: "ok",
        db: { users, subjects, topics, documents, chunks, classes },
        time: new Date().toISOString(),
      });
    } catch (err) {
      res.status(500).json({ status: "error", db: null, detail: String(err) });
    }
  });

  app.use("/api/auth", authRoutes);
  app.use("/api/student", studentRoutes);
  app.use("/api/teacher", teacherRoutes);
  app.use("/api/admin", adminRoutes);
  app.use("/api/tests", testsRoutes);
  app.use("/api/learning", learningRoutes);
  app.use("/api/learning-state", learningStateRoutes);
  app.use("/api/planner", plannerRoutes);
  app.use("/api/roadmap", roadmapRoutes);
  app.use("/api/notifications", notificationsRoutes);
  app.use("/api/journal", journalRoutes);
  app.use("/api/notes", notesRoutes);
  app.use("/api/assignments", assignmentsRoutes);
  app.use("/api/classes", classesRoutes);
  app.use("/api/ingestion", ingestionRoutes);
  app.use("/api/ai", aiRoutes);
  app.use("/api/documents", documentsRoutes);
  app.use("/api/study-plan", studyPlanRoutes);
  app.use("/api/vtu", vtuRoutes);

  app.use((err: Error, _req: Request, res: Response, _next: any) => {
    res.status(500).json({ error: "Internal server error", detail: err.message });
  });

  return app;
}

if (require.main === module) {
  const app = createApp();
  const server = http.createServer(app);
  initWebsocket(server);
  server.listen(config.port, () => {
    console.log(`AdaptLearn backend listening on :${config.port}`);
  });
}

export { prisma };
