import helmet from "helmet";
import cors from "cors";
import { Express } from "express";
import { config } from "../config";

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
  // SECURITY: reflect only known app origins (CORS_ORIGINS env var), not every
  // requesting origin. Auth uses Bearer tokens (not cookies), so this mainly
  // guards against future cookie-based features and unexpected cross-origin reads.
  app.use(
    cors({
      origin: (origin, cb) => {
        if (!origin || config.corsOrigins.includes(origin)) cb(null, true);
        else cb(new Error("Not allowed by CORS"));
      },
      credentials: true,
    })
  );
}
