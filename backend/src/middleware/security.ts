import helmet from "helmet";
import cors from "cors";
import { Express } from "express";

export function applySecurity(app: Express): void {
  app.use(
    helmet({
      crossOriginResourcePolicy: { policy: "cross-origin" },
      crossOriginEmbedderPolicy: false,
      frameguard: false,
      contentSecurityPolicy: {
        directives: {
          ...helmet.contentSecurityPolicy.getDefaultDirectives(),
          "frame-ancestors": ["'self'", "http://localhost:3000", "http://localhost:3001"],
        },
      },
    })
  );
  app.use(cors({ origin: true, credentials: true }));
}
