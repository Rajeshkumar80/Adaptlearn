import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { requireAuth, AuthRequest } from "../middleware/auth";
import { authLimiter } from "../middleware/rate-limit";
import { validate } from "../middleware/validation";
import { signToken } from "../utils/auth";

const prisma = new PrismaClient();
const router = Router();

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(1),
  role: z.enum(["STUDENT", "TEACHER"]).optional(),
  usn: z.string().optional(),
  branch: z.string().optional(),
  semester: z.number().int().min(1).max(8).optional(),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

router.post("/register", authLimiter, validate(registerSchema), async (req, res) => {
  try {
    const { email, password, name, role, usn, branch, semester } = req.body;
    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) {
      res.status(409).json({ error: "Email already registered" });
      return;
    }
    const hashed = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashed,
        name,
        role: role === "TEACHER" ? "TEACHER" : "STUDENT",
        usn: usn || null,
        branch: branch || null,
        semester: semester || null,
      },
      select: { id: true, email: true, name: true, role: true, usn: true, branch: true, semester: true, classId: true },
    });
    res.status(201).json({ user, token: signToken({ id: user.id, email: user.email, role: user.role }) });
  } catch (err) {
    res.status(500).json({ error: "Registration failed", detail: String(err) });
  }
});

router.post("/login", authLimiter, validate(loginSchema), async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }
    const payload = { id: user.id, email: user.email, role: user.role, classId: user.classId };
    res.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        usn: user.usn,
        branch: user.branch,
        semester: user.semester,
        classId: user.classId,
      },
      token: signToken(payload),
    });
  } catch (err) {
    res.status(500).json({ error: "Login failed", detail: String(err) });
  }
});

router.get("/me", requireAuth, async (req: AuthRequest, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user!.id },
    select: { id: true, email: true, name: true, role: true, usn: true, branch: true, semester: true, classId: true },
  });
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }
  res.json({ user });
});

export default router;
