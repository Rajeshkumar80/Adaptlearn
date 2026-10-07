import { Router } from "express";
import bcrypt from "bcryptjs";
import { z } from "zod";
import rateLimit from "express-rate-limit";
import { prisma } from "../db";
import { signToken } from "../utils/auth";
import { requireAuth, AuthRequest } from "../middleware/auth";

const router = Router();

const authLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 20, standardHeaders: true, legacyHeaders: false });

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(1),
  role: z.enum(["STUDENT", "TEACHER"]).optional(),
  usn: z.string().optional(),
  branch: z.string().optional(),
  semester: z.coerce.number().int().min(1).max(8).optional(),
});

router.post("/register", authLimiter, async (req, res) => {
  try {
    const body = registerSchema.parse(req.body);
    const exists = await prisma.user.findUnique({ where: { email: body.email } });
    if (exists) { res.status(409).json({ error: "Email already registered" }); return; }
    const hashed = await bcrypt.hash(body.password, 10);
    const user = await prisma.user.create({
      data: {
        email: body.email, password: hashed, name: body.name,
        role: body.role === "TEACHER" ? "TEACHER" : "STUDENT",
        usn: body.usn || null, branch: body.branch || null, semester: body.semester || null,
      },
      select: { id: true, email: true, name: true, role: true, usn: true, branch: true, semester: true, classId: true },
    });
    res.status(201).json({ user, token: signToken({ id: user.id, email: user.email, role: user.role }) });
  } catch (err: any) {
    if (err?.name === "ZodError") { res.status(400).json({ error: "Validation failed", detail: err.errors }); return; }
    res.status(500).json({ error: "Registration failed", detail: String(err) });
  }
});

router.post("/login", authLimiter, async (req, res) => {
  try {
    const { email, password } = z.object({ email: z.string().email(), password: z.string() }).parse(req.body);
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(401).json({ error: "Invalid credentials" }); return;
    }
    res.json({
      user: { id: user.id, email: user.email, name: user.name, role: user.role, usn: user.usn, branch: user.branch, semester: user.semester, classId: user.classId },
      token: signToken({ id: user.id, email: user.email, role: user.role, classId: user.classId }),
    });
  } catch (err: any) {
    if (err?.name === "ZodError") { res.status(400).json({ error: "Validation failed" }); return; }
    res.status(500).json({ error: "Login failed", detail: String(err) });
  }
});

router.get("/me", requireAuth, async (req: AuthRequest, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user!.id },
    select: { id: true, email: true, name: true, role: true, usn: true, branch: true, semester: true, classId: true },
  });
  if (!user) { res.status(404).json({ error: "User not found" }); return; }
  res.json({ user });
});

export default router;
