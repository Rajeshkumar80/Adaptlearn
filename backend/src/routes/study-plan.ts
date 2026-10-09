import { Router } from "express";
import { z } from "zod";
import { prisma } from "../db";
import { requireAuth, AuthRequest } from "../middleware/auth";
import {
  allocateStudyTasks,
  PLAN_STYLES,
  PlanMode,
  PlanTopicInput
} from "../services/schedulerEngine";

const router = Router();

// GET /api/study-plan/styles - plan style metadata and descriptions
router.get("/styles", requireAuth, (_req, res) => { res.json({ styles: PLAN_STYLES }); });

// GET /api/study-plan/subjects - available subjects with topic counts and student mastery
router.get("/subjects", requireAuth, async (req: AuthRequest, res) => {
  try {
    const [subjects, topics, userStates] = await Promise.all([
      prisma.subject.findMany({ orderBy: { code: "asc" }, include: { _count: { select: { modules: true } } } }),
      prisma.topic.findMany({ select: { subjectCode: true, id: true } }),
      prisma.learningState.findMany({ where: { userId: req.user!.id }, select: { topicId: true, mastery: true } }),
    ]);
    const stateMap = new Map(userStates.map(s => [s.topicId, s.mastery]));

    const result = subjects.map(s => {
      const subTopics = topics.filter(t => t.subjectCode === s.code);
      const totalMastery = subTopics.reduce((acc, t) => acc + (stateMap.get(t.id) ?? 0.2), 0);
      const avgMastery = subTopics.length > 0 ? totalMastery / subTopics.length : 0;
      return {
        code: s.code, name: s.name, semester: s.semester, credits: s.credits,
        moduleCount: s._count.modules, topicCount: subTopics.length,
        avgMastery: Math.round(avgMastery * 100) / 100
      };
    });
    res.json({ subjects: result });
  } catch (err: any) { res.status(500).json({ error: err.message }); }
});

// GET /api/study-plan/active - retrieve active plan and all its tasks
router.get("/active", requireAuth, async (req: AuthRequest, res) => {
  try {
    const plan = await prisma.studyPlan.findFirst({
      where: { userId: req.user!.id, status: "ACTIVE" },
      orderBy: { createdAt: "desc" },
      include: {
        tasks: {
          orderBy: [{ scheduledDate: "asc" }, { order: "asc" }]
        }
      }
    });

    if (!plan) {
      return res.json({ plan: null });
    }

    const totalTasks = plan.tasks.length;
    const completedTasks = plan.tasks.filter(t => t.status === "COMPLETED").length;
    const progressPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    res.json({
      plan: {
        ...plan,
        progressPercent,
        totalTasks,
        completedTasks
      }
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/study-plan/all - retrieve all saved & active study plans for the user
router.get("/all", requireAuth, async (req: AuthRequest, res) => {
  try {
    const plans = await prisma.studyPlan.findMany({
      where: { userId: req.user!.id },
      orderBy: { createdAt: "desc" },
      include: {
        tasks: {
          select: { id: true, status: true }
        }
      }
    });

    const formatted = plans.map((p) => {
      const totalTasks = p.tasks.length;
      const completedTasks = p.tasks.filter((t) => t.status === "COMPLETED").length;
      const progressPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
      return {
        id: p.id,
        subjects: p.subjects,
        examDate: p.examDate,
        targetFinishDate: p.targetFinishDate,
        hoursPerDay: p.hoursPerDay,
        mode: p.mode,
        status: p.status,
        createdAt: p.createdAt,
        updatedAt: p.updatedAt,
        totalTasks,
        completedTasks,
        progressPercent
      };
    });

    res.json({ plans: formatted });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/study-plan/generate - generate and persist a new study plan
router.post("/generate", requireAuth, async (req: AuthRequest, res) => {
  try {
    const bodySchema = z.object({
      subjectCodes: z.array(z.string()).min(1),
      targetDate: z.string(),
      isExamDate: z.boolean().default(false),
      hoursPerDay: z.number().min(0.5).max(12).default(2.0),
      mode: z.enum(['3-2-1', '80/20', 'balanced', 'crunch']).default('3-2-1'),
      preferredSlot: z.string().optional()
    });

    const input = bodySchema.parse(req.body);
    const userId = req.user!.id;
    const startDate = new Date().toISOString().slice(0, 10);

    // Fetch topics for selected subjects
    let rawTopics = await prisma.topic.findMany({
      where: { subjectCode: { in: input.subjectCodes } },
      orderBy: [{ subjectCode: "asc" }, { moduleNumber: "asc" }, { order: "asc" }],
      include: {
        prerequisites: { select: { id: true } }
      }
    });

    if (rawTopics.length === 0) {
      // Auto-heal: seed standard 5 modules for selected subjects
      for (const sc of input.subjectCodes) {
        for (let m = 1; m <= 5; m++) {
          await prisma.topic.create({
            data: {
              subjectCode: sc,
              moduleNumber: m,
              name: `${sc} Module ${m} Core Topics`,
              description: `VTU Curriculum module ${m} for ${sc}`,
              order: 1,
              pyqImportance: 0.8,
            },
          });
        }
      }
      rawTopics = await prisma.topic.findMany({
        where: { subjectCode: { in: input.subjectCodes } },
        orderBy: [{ subjectCode: "asc" }, { moduleNumber: "asc" }, { order: "asc" }],
        include: { prerequisites: { select: { id: true } } },
      });
    }

    // Fetch student learning state & behavioral profile
    const [states, behavior] = await Promise.all([
      prisma.learningState.findMany({
        where: { userId, topicId: { in: rawTopics.map(t => t.id) } }
      }),
      (async () => {
        try {
          const { getStudentBehaviorMetrics } = await import("../services/behaviorEngine");
          return await getStudentBehaviorMetrics(userId);
        } catch {
          return null;
        }
      })()
    ]);
    const stateMap = new Map(states.map(s => [s.topicId, s]));

    const planTopics: PlanTopicInput[] = rawTopics.map(t => {
      const st = stateMap.get(t.id);
      return {
        id: t.id,
        subjectCode: t.subjectCode,
        moduleNumber: t.moduleNumber,
        name: t.name,
        order: t.order,
        pyqImportance: t.pyqImportance,
        mastery: st ? st.mastery : 0.2,
        retention: st ? st.retention : 1.0,
        stability: st?.stability ?? 1.5,
        prerequisiteIds: t.prerequisites.map(p => p.id)
      };
    });

    const studentSlot = input.preferredSlot ||
      (behavior && behavior.preferredStudyWindow !== "INSUFFICIENT_DATA" ? behavior.preferredStudyWindow : "EVENING");

    const allocation = allocateStudyTasks({
      topics: planTopics,
      startDate,
      targetDate: input.targetDate,
      isExamDate: input.isExamDate,
      hoursPerDay: input.hoursPerDay,
      mode: input.mode as PlanMode,
      preferredSlot: studentSlot
    });

    // Keep previous active plans saved
    await prisma.studyPlan.updateMany({
      where: { userId, status: "ACTIVE" },
      data: { status: "SAVED" }
    });

    const parsedTargetDate = new Date(input.targetDate);
    const studyPlan = await prisma.studyPlan.create({
      data: {
        userId,
        subjects: input.subjectCodes,
        examDate: input.isExamDate ? parsedTargetDate : null,
        targetFinishDate: !input.isExamDate ? parsedTargetDate : null,
        hoursPerDay: input.hoursPerDay,
        mode: input.mode,
        status: "ACTIVE"
      }
    });

    let enrichmentMap = new Map<string, any>();
    try {
      const { enrichTasksWithLlm } = await import("../services/planEnricher");
      const dbTopicContexts = rawTopics.map(t => ({ id: t.id, name: t.name, moduleNumber: t.moduleNumber }));
      const enrichment = await enrichTasksWithLlm(input.subjectCodes.join(", "), dbTopicContexts);
      enrichmentMap = enrichment.enrichedMap;
    } catch (llmErr) {
      console.warn("LLM enrichment bypassed, using deterministic curriculum to-dos:", llmErr);
    }

    // Create tasks
    const taskData = allocation.tasks.map((t, idx) => {
      const enrich = t.topicId ? enrichmentMap.get(t.topicId) : undefined;
      return {
        planId: studyPlan.id,
        userId,
        subjectCode: t.subjectCode,
        moduleNumber: t.moduleNumber,
        topicId: t.topicId,
        topicName: t.topicName,
        scheduledDate: t.scheduledDate,
        scheduledSlot: t.scheduledSlot,
        minutes: t.minutes,
        type: t.type,
        status: "PENDING",
        order: idx,
        todoText: enrich?.todoText || `Review ${t.topicName} concepts and exam patterns`,
        subPoints: enrich?.subPoints || [
          `Understand key definitions and core theory of ${t.topicName}`,
          `Trace step-by-step algorithms and structural formulas`,
          `Practice VTU question bank problems and diagrams`,
        ],
        selfCheckQuestion: enrich?.selfCheckQuestion || `Explain the core concepts and exam applications of ${t.topicName}.`
      };
    });

    await prisma.planTask.createMany({
      data: taskData
    });

    const createdTasks = await prisma.planTask.findMany({
      where: { planId: studyPlan.id },
      orderBy: [{ scheduledDate: "asc" }, { order: "asc" }]
    });

    const fullPlan = {
      ...studyPlan,
      progressPercent: 0,
      totalTasks: createdTasks.length,
      completedTasks: 0,
      tasks: createdTasks,
    };

    res.status(201).json({
      plan: fullPlan,
      summary: {
        totalPlannedMinutes: allocation.totalPlannedMinutes,
        availableMinutes: allocation.availableMinutes,
        studyDaysCount: allocation.studyDaysCount,
        taskCounts: allocation.taskCounts
      },
      tasks: createdTasks
    });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// PATCH /api/study-plan/tasks/:id - update task completion status
router.patch("/tasks/:id", requireAuth, async (req: AuthRequest, res) => {
  try {
    const { status } = z.object({
      status: z.enum(["PENDING", "COMPLETED", "SKIPPED", "MISSED"])
    }).parse(req.body);

    const task = await prisma.planTask.findFirst({
      where: { id: req.params.id, userId: req.user!.id }
    });

    if (!task) {
      return res.status(404).json({ error: "Plan task not found" });
    }

    const completedAt = status === "COMPLETED" ? new Date() : null;

    const updated = await prisma.planTask.update({
      where: { id: task.id },
      data: { status, completedAt }
    });

    let unlocked: any[] = [];
    if (status === "COMPLETED" && task.topicId) {
      const { markTaskCompleteAndCheckUnlocks } = await import("../services/unlockEngine");
      unlocked = await markTaskCompleteAndCheckUnlocks(req.user!.id, task.topicId);
    }

    res.json({ task: updated, unlocked });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// POST /api/study-plan/reorder - reorder tasks within plan
router.post("/reorder", requireAuth, async (req: AuthRequest, res) => {
  try {
    const { taskIds } = z.object({ taskIds: z.array(z.string()) }).parse(req.body);
    await Promise.all(
      taskIds.map((id, index) =>
        prisma.planTask.updateMany({ where: { id, userId: req.user!.id }, data: { order: index } })
      )
    );
    res.json({ success: true });
  } catch (err: any) { res.status(400).json({ error: err.message }); }
});

// POST /api/study-plan/reschedule-missed - forward reschedule overdue tasks
router.post("/reschedule-missed", requireAuth, async (req: AuthRequest, res) => {
  try {
    const today = new Date().toISOString().slice(0, 10);
    const missed = await prisma.planTask.findMany({
      where: {
        userId: req.user!.id, status: "PENDING", scheduledDate: { lt: today }
      },
      orderBy: { scheduledDate: "asc" }
    });

    if (missed.length === 0) return res.json({ rescheduledCount: 0, message: "No overdue tasks" });

    // Reschedule them to today
    await prisma.planTask.updateMany({
      where: { id: { in: missed.map(m => m.id) } },
      data: { scheduledDate: today, status: "PENDING" }
    });
    res.json({ rescheduledCount: missed.length, newDate: today });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/study-plan/:id/activate - switch user active plan to this saved plan
router.post("/:id/activate", requireAuth, async (req: AuthRequest, res) => {
  try {
    const userId = req.user!.id;
    const plan = await prisma.studyPlan.findFirst({
      where: { id: req.params.id, userId },
    });

    if (!plan) {
      return res.status(404).json({ error: "Study plan not found" });
    }

    // Set other active plans to SAVED
    await prisma.studyPlan.updateMany({
      where: { userId, id: { not: plan.id }, status: "ACTIVE" },
      data: { status: "SAVED" },
    });

    // Set this plan to ACTIVE
    const activated = await prisma.studyPlan.update({
      where: { id: plan.id },
      data: { status: "ACTIVE" },
      include: {
        tasks: {
          orderBy: [{ scheduledDate: "asc" }, { order: "asc" }],
        },
      },
    });

    const totalTasks = activated.tasks.length;
    const completedTasks = activated.tasks.filter((t) => t.status === "COMPLETED").length;
    const progressPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    res.json({
      plan: {
        ...activated,
        progressPercent,
        totalTasks,
        completedTasks,
      },
      message: "Study plan activated successfully",
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/study-plan/:id/switch-mode - apply selected strategy from comparison modal
router.post("/:id/switch-mode", requireAuth, async (req: AuthRequest, res) => {
  try {
    const { mode } = z
      .object({
        mode: z.enum(["3-2-1", "80/20", "balanced", "crunch"]),
      })
      .parse(req.body);

    const userId = req.user!.id;
    const plan = await prisma.studyPlan.findFirst({
      where: { id: req.params.id, userId },
      include: { tasks: true },
    });

    if (!plan) {
      return res.status(404).json({ error: "Study plan not found" });
    }

    // Determine subject codes
    let subjectCodes: string[] = [];
    if (Array.isArray(plan.subjects)) {
      subjectCodes = plan.subjects as string[];
    } else if (typeof plan.subjects === "string") {
      try {
        const parsed = JSON.parse(plan.subjects);
        subjectCodes = Array.isArray(parsed) ? parsed : [plan.subjects];
      } catch {
        subjectCodes = [plan.subjects];
      }
    }
    if (subjectCodes.length === 0) {
      subjectCodes = Array.from(new Set(plan.tasks.map((t) => t.subjectCode)));
    }
    if (subjectCodes.length === 0) {
      subjectCodes = ["BCS701"];
    }

    // Determine targetDate
    const targetDate = plan.examDate
      ? plan.examDate.toISOString().slice(0, 10)
      : plan.targetFinishDate
      ? plan.targetFinishDate.toISOString().slice(0, 10)
      : (() => {
          const d = new Date();
          d.setDate(d.getDate() + 14);
          return d.toISOString().slice(0, 10);
        })();

    const startDate = new Date().toISOString().slice(0, 10);

    // Fetch topics
    let rawTopics = await prisma.topic.findMany({
      where: { subjectCode: { in: subjectCodes } },
      orderBy: [{ subjectCode: "asc" }, { moduleNumber: "asc" }, { order: "asc" }],
      include: { prerequisites: { select: { id: true } } },
    });

    if (rawTopics.length === 0) {
      for (const sc of subjectCodes) {
        for (let m = 1; m <= 5; m++) {
          await prisma.topic.create({
            data: {
              subjectCode: sc,
              moduleNumber: m,
              name: `${sc} Module ${m} Core Topics`,
              description: `VTU Curriculum module ${m} for ${sc}`,
              order: 1,
              pyqImportance: 0.8,
            },
          });
        }
      }
      rawTopics = await prisma.topic.findMany({
        where: { subjectCode: { in: subjectCodes } },
        orderBy: [{ subjectCode: "asc" }, { moduleNumber: "asc" }, { order: "asc" }],
        include: { prerequisites: { select: { id: true } } },
      });
    }

    const [states, behavior] = await Promise.all([
      prisma.learningState.findMany({
        where: { userId, topicId: { in: rawTopics.map((t) => t.id) } },
      }),
      (async () => {
        try {
          const { getStudentBehaviorMetrics } = await import("../services/behaviorEngine");
          return await getStudentBehaviorMetrics(userId);
        } catch {
          return null;
        }
      })(),
    ]);
    const stateMap = new Map(states.map((s) => [s.topicId, s]));

    const planTopics: PlanTopicInput[] = rawTopics.map((t) => {
      const st = stateMap.get(t.id);
      return {
        id: t.id,
        subjectCode: t.subjectCode,
        moduleNumber: t.moduleNumber,
        name: t.name,
        order: t.order,
        pyqImportance: t.pyqImportance,
        mastery: st ? st.mastery : 0.2,
        retention: st ? st.retention : 1.0,
        stability: st?.stability ?? 1.5,
        prerequisiteIds: t.prerequisites.map((p) => p.id),
      };
    });

    const studentSlot =
      behavior && behavior.preferredStudyWindow !== "INSUFFICIENT_DATA"
        ? behavior.preferredStudyWindow
        : "EVENING";

    const allocation = allocateStudyTasks({
      topics: planTopics,
      startDate,
      targetDate,
      isExamDate: Boolean(plan.examDate),
      hoursPerDay: plan.hoursPerDay,
      mode: mode as PlanMode,
      preferredSlot: studentSlot,
    });

    // Delete existing tasks for this plan
    await prisma.planTask.deleteMany({
      where: { planId: plan.id },
    });

    const taskData = allocation.tasks.map((t, idx) => ({
      planId: plan.id,
      userId,
      subjectCode: t.subjectCode,
      moduleNumber: t.moduleNumber,
      topicId: t.topicId,
      topicName: t.topicName,
      scheduledDate: t.scheduledDate,
      scheduledSlot: t.scheduledSlot,
      minutes: t.minutes,
      type: t.type,
      status: "PENDING",
      order: idx,
      todoText: `Review ${t.topicName} concepts and exam patterns`,
      subPoints: [
        `Understand key definitions and core theory of ${t.topicName}`,
        `Trace step-by-step algorithms and structural formulas`,
        `Practice VTU question bank problems and diagrams`,
      ],
      selfCheckQuestion: `Explain the core concepts and exam applications of ${t.topicName}.`,
    }));

    await prisma.planTask.createMany({
      data: taskData,
    });

    await prisma.studyPlan.update({
      where: { id: plan.id },
      data: { mode },
    });

    const updatedTasks = await prisma.planTask.findMany({
      where: { planId: plan.id },
      orderBy: [{ scheduledDate: "asc" }, { order: "asc" }],
    });

    const updatedPlan = {
      ...plan,
      mode,
      progressPercent: 0,
      totalTasks: updatedTasks.length,
      completedTasks: 0,
      tasks: updatedTasks,
    };

    res.json({
      plan: updatedPlan,
      message: `Plan strategy successfully switched to ${mode.toUpperCase()}`,
    });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /api/study-plan/:id - remove study plan
router.delete("/:id", requireAuth, async (req: AuthRequest, res) => {
  try {
    const userId = req.user!.id;
    const plan = await prisma.studyPlan.findFirst({
      where: { id: req.params.id, userId },
    });

    if (!plan) {
      return res.status(404).json({ error: "Study plan not found" });
    }

    const wasActive = plan.status === "ACTIVE";
    await prisma.studyPlan.delete({ where: { id: plan.id } });

    if (wasActive) {
      const remaining = await prisma.studyPlan.findFirst({
        where: { userId },
        orderBy: { createdAt: "desc" },
      });
      if (remaining) {
        await prisma.studyPlan.update({
          where: { id: remaining.id },
          data: { status: "ACTIVE" },
        });
      }
    }

    res.json({ success: true, message: "Study plan deleted" });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
