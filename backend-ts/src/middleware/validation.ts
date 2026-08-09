import { Request, Response, NextFunction } from "express";
import { z, ZodError } from "zod";

// Validates req.body (and optional params/query) against a zod schema.
export function validate(schema: z.ZodTypeAny) {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        res.status(400).json({ error: "Validation failed", issues: err.issues });
        return;
      }
      next(err);
    }
  };
}
