import helmet from "helmet";
import cors from "cors";
import { Express } from "express";

export function applySecurity(app: Express): void {
  app.use(
    helmet({
      crossOriginResourcePolicy: { policy: "cross-origin" },
      crossOriginEmbedderPolicy: false,
    })
  );
  app.use(cors({ origin: true, credentials: true }));
}
