import { calculateRetention, DEFAULT_INITIAL_STABILITY } from "./forgettingModel";
import {
  PlanMode,
  PlanTopicInput,
  PlanTaskItem,
  SchedulerInput,
  SchedulerOutput,
  PLAN_STYLES,
  REVIEW_THRESHOLD,
} from "./schedulerTypes";

export * from "./schedulerTypes";

/**
 * Topological sort of topics respecting prerequisite chains.
 */
export function topologicalSortTopics(topics: PlanTopicInput[], mode: PlanMode): PlanTopicInput[] {
  const topicMap = new Map<string, PlanTopicInput>(topics.map(t => [t.id, t]));
  const inDegree = new Map<string, number>();
  const adj = new Map<string, string[]>();

  for (const t of topics) {
    inDegree.set(t.id, 0);
    adj.set(t.id, []);
  }

  for (const t of topics) {
    for (const prereqId of t.prerequisiteIds) {
      if (topicMap.has(prereqId)) {
        adj.get(prereqId)!.push(t.id);
        inDegree.set(t.id, (inDegree.get(t.id) || 0) + 1);
      }
    }
  }

  const getPriorityScore = (t: PlanTopicInput): number => {
    const yieldScore = t.pyqImportance * (1 - t.mastery + 0.1);
    if (mode === '80/20' || mode === 'crunch') return yieldScore;
    return -(t.moduleNumber * 100 + t.order);
  };

  const readyQueue: PlanTopicInput[] = [];
  for (const t of topics) {
    if ((inDegree.get(t.id) || 0) === 0) readyQueue.push(t);
  }

  const sorted: PlanTopicInput[] = [];
  while (readyQueue.length > 0) {
    readyQueue.sort((a, b) => getPriorityScore(b) - getPriorityScore(a));
    const current = readyQueue.shift()!;
    sorted.push(current);

    for (const neighborId of adj.get(current.id) || []) {
      const deg = (inDegree.get(neighborId) || 0) - 1;
      inDegree.set(neighborId, deg);
      if (deg === 0) {
        const neighbor = topicMap.get(neighborId);
        if (neighbor) readyQueue.push(neighbor);
      }
    }
  }

  if (sorted.length < topics.length) {
    for (const t of topics) {
      if (!sorted.some(s => s.id === t.id)) sorted.push(t);
    }
  }

  return sorted;
}

export function generateDates(startDateStr: string, targetDateStr: string): string[] {
  const dates: string[] = [];
  const current = new Date(startDateStr);
  const end = new Date(targetDateStr);
  while (current <= end) {
    dates.push(current.toISOString().slice(0, 10));
    current.setDate(current.getDate() + 1);
  }
  return dates;
}

/**
 * Calculates date offset in days when retention drops below threshold: R = exp(-t/S) < threshold
 */
export function calculateDaysUntilReviewNeeded(stability: number, threshold: number = REVIEW_THRESHOLD): number {
  const s = Math.max(0.5, stability || DEFAULT_INITIAL_STABILITY);
  const days = -s * Math.log(threshold);
  return Math.max(1, Math.round(days));
}

/**
 * Core deterministic planner engine (T2.3).
 */
export function allocateStudyTasks(input: SchedulerInput): SchedulerOutput {
  const quantum = input.taskQuantumMin ?? 30;
  const allDates = generateDates(input.startDate, input.targetDate);
  if (allDates.length === 0) allDates.push(input.startDate);

  const bufferDaysCount = input.isExamDate && allDates.length > 1 ? 1 : 0;
  const studyDates = bufferDaysCount > 0 ? allDates.slice(0, -1) : allDates;
  const studyDaysCount = studyDates.length;

  const dailyMinutes = Math.max(30, Math.round(input.hoursPerDay * 60));
  const availableMinutes = studyDaysCount * dailyMinutes;
  const tasksPerDay = Math.max(1, Math.floor(dailyMinutes / quantum));

  let sortedTopics = topologicalSortTopics(input.topics, input.mode);
  if (input.mode === '80/20' && sortedTopics.length > 3) {
    const cutoffCount = Math.max(1, Math.ceil(sortedTopics.length * 0.20));
    const highYieldSet = new Set<string>();
    const byYield = [...sortedTopics].sort((a, b) =>
      (b.pyqImportance * (1 - b.mastery)) - (a.pyqImportance * (1 - a.mastery))
    );
    for (let i = 0; i < cutoffCount; i++) {
      highYieldSet.add(byYield[i].id);
      for (const p of byYield[i].prerequisiteIds) highYieldSet.add(p);
    }
    sortedTopics = sortedTopics.filter(t => highYieldSet.has(t.id));
  }
  if (sortedTopics.length === 0) sortedTopics = input.topics;

  // Track scheduled tasks per day to respect daily capacity
  const dayBuckets = new Map<string, PlanTaskItem[]>();
  for (const date of studyDates) dayBuckets.set(date, []);

  const revisionDatesSummary: Array<{
    topicId: string;
    topicName: string;
    computedRevisionDate: string;
    retentionAtRevision: number;
  }> = [];

  const preferredSlot = input.preferredSlot || "EVENING";
  const slotCycle = ["MORNING", "AFTERNOON", "EVENING", "NIGHT"];
  // Reorder slots so student's preferredSlot is primary for heavy tasks
  const orderedSlots = [
    preferredSlot,
    ...slotCycle.filter(s => s !== preferredSlot)
  ];

  let orderIndex = 0;

  // 1. Initial learning passes for sorted topics (3 parts in 3-2-1)
  const topicLearnedDay = new Map<string, number>();
  const learnParts = input.mode === "3-2-1" ? 3 : input.mode === "crunch" ? 1 : 2;

  for (let topicIdx = 0; topicIdx < sortedTopics.length; topicIdx++) {
    const topic = sortedTopics[topicIdx];
    for (let p = 0; p < learnParts; p++) {
      const assignedDayIdx = studyDates.findIndex(d => (dayBuckets.get(d)?.length || 0) < tasksPerDay);
      if (assignedDayIdx === -1) break;

      const date = studyDates[assignedDayIdx];
      const currentDayTasks = dayBuckets.get(date)!;
      const slot = currentDayTasks.length === 0 ? preferredSlot : orderedSlots[currentDayTasks.length % orderedSlots.length];

      currentDayTasks.push({
        subjectCode: topic.subjectCode,
        moduleNumber: topic.moduleNumber,
        topicId: topic.id,
        topicName: topic.name,
        scheduledDate: date,
        scheduledSlot: slot,
        minutes: quantum,
        type: "learn",
        order: orderIndex++
      });
      if (!topicLearnedDay.has(topic.id)) {
        topicLearnedDay.set(topic.id, assignedDayIdx);
      }
    }
  }

  // 2. Insert revision blocks where predicted retention < threshold (T1.1)
  const reviseParts = input.mode === "3-2-1" ? 2 : input.mode === "crunch" ? 2 : 1;
  for (const topic of sortedTopics) {
    const learnedDayIdx = topicLearnedDay.get(topic.id);
    if (learnedDayIdx === undefined) continue;

    const stability = topic.stability ?? 1.5;
    const daysUntilDecay = calculateDaysUntilReviewNeeded(stability, REVIEW_THRESHOLD);
    const revisionDayIdx = Math.min(studyDaysCount - 1, learnedDayIdx + daysUntilDecay);
    const revisionDate = studyDates[revisionDayIdx];

    const retentionAtRev = calculateRetention(revisionDayIdx - learnedDayIdx, stability);
    revisionDatesSummary.push({
      topicId: topic.id,
      topicName: topic.name,
      computedRevisionDate: revisionDate,
      retentionAtRevision: retentionAtRev
    });

    for (let r = 0; r < reviseParts; r++) {
      const targetDay = Math.min(studyDaysCount - 1, revisionDayIdx + r);
      const targetDate = studyDates[targetDay];
      const revBucket = dayBuckets.get(targetDate)!;
      if (revBucket.length < tasksPerDay) {
        revBucket.push({
          subjectCode: topic.subjectCode,
          moduleNumber: topic.moduleNumber,
          topicId: topic.id,
          topicName: topic.name,
          scheduledDate: targetDate,
          scheduledSlot: orderedSlots[revBucket.length % orderedSlots.length],
          minutes: quantum,
          type: "revise",
          order: orderIndex++,
          revisionTriggeredByRetention: true
        });
      }
    }
  }

  // 3. Fill remaining capacity according to plan style
  let fillerTopicIdx = 0;
  for (const date of studyDates) {
    const bucket = dayBuckets.get(date)!;
    while (bucket.length < tasksPerDay && sortedTopics.length > 0) {
      const topic = sortedTopics[fillerTopicIdx % sortedTopics.length];
      const taskType = input.mode === "crunch"
        ? (bucket.length % 2 === 0 ? "test" : "revise")
        : (bucket.length % 4 === 0 ? "test" : bucket.length % 4 === 1 ? "revise" : "learn");
      bucket.push({
        subjectCode: topic.subjectCode,
        moduleNumber: topic.moduleNumber,
        topicId: topic.id,
        topicName: topic.name,
        scheduledDate: date,
        scheduledSlot: orderedSlots[bucket.length % orderedSlots.length],
        minutes: quantum,
        type: taskType,
        order: orderIndex++
      });
      fillerTopicIdx++;
    }
  }

  // Flatten tasks in chronological and slot order
  const allTasks: PlanTaskItem[] = [];
  for (const date of studyDates) {
    allTasks.push(...(dayBuckets.get(date) || []));
  }

  const totalPlannedMinutes = allTasks.reduce((sum, t) => sum + t.minutes, 0);

  return {
    mode: input.mode,
    totalPlannedMinutes,
    availableMinutes,
    studyDaysCount,
    bufferDaysCount,
    taskCounts: {
      learn: allTasks.filter(t => t.type === "learn").length,
      revise: allTasks.filter(t => t.type === "revise").length,
      test: allTasks.filter(t => t.type === "test").length,
      total: allTasks.length
    },
    revisionDatesSummary,
    tasks: allTasks
  };
}
