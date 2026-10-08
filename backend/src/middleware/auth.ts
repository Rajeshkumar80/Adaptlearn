import { Request, Response, NextFunction } from "express";
import { verifyToken, JwtPayload } from "../utils/auth";

export interface AuthRequest extends Request {
  user?: JwtPayload;
}

export function requireAuth(req: AuthRequest, res: Response, next: NextFunction): void {
  const header = req.headers.authorization;
  const token = header?.startsWith("Bearer ")
    ? header.slice(7)
    : (typeof req.query?.token === "string" ? req.query.token : null);
  if (!token) {
    res.status(401).json({ error: "Missing bearer token" });
    return;
  }
  try {
    req.user = verifyToken(token);
    next();
  } catch {
    res.status(401).json({ error: "Invalid or expired token" });
  }
}

export function requireRole(...roles: string[]) {
  return (req: AuthRequest, res: Response, next: NextFunction): void => {
    if (!req.user) { res.status(401).json({ error: "Unauthorized" }); return; }
    if (!roles.includes(req.user.role)) { res.status(403).json({ error: "Forbidden" }); return; }
    next();
  };
}

export const requireTeacher = requireRole("TEACHER", "ADMIN");
export const requireAdmin   = requireRole("ADMIN");
