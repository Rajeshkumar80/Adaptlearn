export type PlanMode = '3-2-1' | '80/20' | 'balanced' | 'crunch';

export interface PlanTopicInput {
  id: string;
  subjectCode: string;
  moduleNumber: number;
  name: string;
  order: number;
  pyqImportance: number; // 0 to 100
  mastery: number; // 0.0 to 1.0
  retention: number; // 0.0 to 1.0
  prerequisiteIds: string[];
}

export interface AllocationConfig {
  mode: PlanMode;
  learnRatio: number;
  reviseRatio: number;
  testRatio: number;
  description: string;
}

/**
 * Plan style configurations (Assumptions list A)
 */
export const PLAN_STYLES: Record<PlanMode, AllocationConfig> = {
  '3-2-1': {
    mode: '3-2-1',
    learnRatio: 3 / 6, // 50%
    reviseRatio: 2 / 6, // 33.3%
    testRatio: 1 / 6, // 16.7%
    description: '3 parts learn, 2 parts revise, 1 part test per topic'
  },
  '80/20': {
    mode: '80/20',
    learnRatio: 0.50,
    reviseRatio: 0.30,
    testRatio: 0.20,
    description: 'Pareto principle: schedule top 20% high-yield topics first'
  },
  'balanced': {
    mode: 'balanced',
    learnRatio: 0.50,
    reviseRatio: 0.30,
    testRatio: 0.20,
    description: 'Balanced progression across modules and subjects'
  },
  'crunch': {
    mode: 'crunch',
    learnRatio: 0.30,
    reviseRatio: 0.40,
    testRatio: 0.30,
    description: 'Exam sprint: high-yield revision and active recall tests'
  }
};

export interface PlanTaskItem {
  subjectCode: string;
  moduleNumber: number;
  topicId: string;
  topicName: string;
  scheduledDate: string; // YYYY-MM-DD
  scheduledSlot: string; // MORNING | AFTERNOON | EVENING | NIGHT
  minutes: number;
  type: 'learn' | 'revise' | 'test';
  order: number;
}

export interface SchedulerInput {
  topics: PlanTopicInput[];
  startDate: string; // YYYY-MM-DD
  targetDate: string; // YYYY-MM-DD
  isExamDate?: boolean;
  hoursPerDay: number;
  mode: PlanMode;
  preferredSlot?: string;
  taskQuantumMin?: number; // default 30
}

export interface SchedulerOutput {
  planId?: string;
  mode: PlanMode;
  totalPlannedMinutes: number;
  availableMinutes: number;
  studyDaysCount: number;
  bufferDaysCount: number;
  taskCounts: {
    learn: number;
    revise: number;
    test: number;
    total: number;
  };
  tasks: PlanTaskItem[];
}

/**
 * Topological sort of topics respecting prerequisite chains.
 * If A is a prerequisite of B, A appears strictly before B.
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

  // Priority scoring for tie-breaking in Kahn's algorithm
  const getPriorityScore = (t: PlanTopicInput): number => {
    const yieldScore = t.pyqImportance * (1 - t.mastery + 0.1);
    if (mode === '80/20' || mode === 'crunch') {
      return yieldScore;
    }
    // For 3-2-1 and balanced, preserve module and syllabus order
    return -(t.moduleNumber * 100 + t.order);
  };

  const readyQueue: PlanTopicInput[] = [];
  for (const t of topics) {
    if ((inDegree.get(t.id) || 0) === 0) {
      readyQueue.push(t);
    }
  }

  const sorted: PlanTopicInput[] = [];

  while (readyQueue.length > 0) {
    // Sort ready queue by priority score descending
    readyQueue.sort((a, b) => getPriorityScore(b) - getPriorityScore(a));
    const current = readyQueue.shift()!;
    sorted.push(current);

    const neighbors = adj.get(current.id) || [];
    for (const neighborId of neighbors) {
      const deg = (inDegree.get(neighborId) || 0) - 1;
      inDegree.set(neighborId, deg);
      if (deg === 0) {
        const neighborTopic = topicMap.get(neighborId);
        if (neighborTopic) readyQueue.push(neighborTopic);
      }
    }
  }

  // If cycle detected (should not occur in DAG), append any remaining
  if (sorted.length < topics.length) {
    for (const t of topics) {
      if (!sorted.some(s => s.id === t.id)) {
        sorted.push(t);
      }
    }
  }

  return sorted;
}

/**
 * Generates date strings between start (inclusive) and target (inclusive).
 */
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
 * Core deterministic allocation math.
 */
export function allocateStudyTasks(input: SchedulerInput): SchedulerOutput {
  const quantum = input.taskQuantumMin ?? 30;
  const config = PLAN_STYLES[input.mode] || PLAN_STYLES['3-2-1'];
  const allDates = generateDates(input.startDate, input.targetDate);

  if (allDates.length === 0) {
    allDates.push(input.startDate);
  }

  const bufferDaysCount = input.isExamDate && allDates.length > 1 ? 1 : 0;
  const studyDates = bufferDaysCount > 0 ? allDates.slice(0, -1) : allDates;
  const studyDaysCount = studyDates.length;

  const dailyMinutes = Math.max(30, Math.round(input.hoursPerDay * 60));
  const availableMinutes = studyDaysCount * dailyMinutes;
  const tasksPerDay = Math.max(1, Math.floor(dailyMinutes / quantum));
  const maxTotalTasks = studyDaysCount * tasksPerDay;

  // Filter & sort topics based on mode
  let sortedTopics = topologicalSortTopics(input.topics, input.mode);

  if (input.mode === '80/20' && sortedTopics.length > 3) {
    // 80/20: Prioritize the top topics, but ensure any prerequisite of a chosen topic is also included
    const cutoffCount = Math.max(1, Math.ceil(sortedTopics.length * 0.20));
    const highYieldSet = new Set<string>();
    
    // Pick top candidates by importance
    const byYield = [...sortedTopics].sort((a, b) => 
      (b.pyqImportance * (1 - b.mastery)) - (a.pyqImportance * (1 - a.mastery))
    );
    for (let i = 0; i < cutoffCount; i++) {
      highYieldSet.add(byYield[i].id);
      for (const p of byYield[i].prerequisiteIds) highYieldSet.add(p);
    }
    sortedTopics = sortedTopics.filter(t => highYieldSet.has(t.id));
  }

  if (sortedTopics.length === 0) {
    sortedTopics = input.topics;
  }

  // Determine proportions per topic
  // 3-2-1 mode has 3 learn, 2 revise, 1 test
  const slots: Array<{ topic: PlanTopicInput; type: 'learn' | 'revise' | 'test' }> = [];

  for (const topic of sortedTopics) {
    if (input.mode === '3-2-1') {
      slots.push({ topic, type: 'learn' });
      slots.push({ topic, type: 'learn' });
      slots.push({ topic, type: 'learn' });
      slots.push({ topic, type: 'revise' });
      slots.push({ topic, type: 'revise' });
      slots.push({ topic, type: 'test' });
    } else if (input.mode === 'crunch') {
      slots.push({ topic, type: 'learn' });
      slots.push({ topic, type: 'revise' });
      slots.push({ topic, type: 'revise' });
      slots.push({ topic, type: 'test' });
    } else {
      // balanced / 80-20
      slots.push({ topic, type: 'learn' });
      slots.push({ topic, type: 'learn' });
      slots.push({ topic, type: 'revise' });
      slots.push({ topic, type: 'test' });
    }
  }

  // Adjust slots to fit capacity
  let selectedSlots = slots;
  if (slots.length > maxTotalTasks) {
    selectedSlots = slots.slice(0, maxTotalTasks);
  } else if (slots.length < maxTotalTasks && sortedTopics.length > 0) {
    // Fill remaining capacity with revision and test blocks for topics needing it most
    let idx = 0;
    while (selectedSlots.length < maxTotalTasks) {
      const topic = sortedTopics[idx % sortedTopics.length];
      const type = idx % 2 === 0 ? 'revise' : 'test';
      selectedSlots.push({ topic, type });
      idx++;
    }
  }

  const slotTimes = ['MORNING', 'AFTERNOON', 'EVENING', 'NIGHT'];
  const preferred = input.preferredSlot || 'EVENING';
  const slotIndexStart = Math.max(0, slotTimes.indexOf(preferred));

  const tasks: PlanTaskItem[] = [];
  let currentDayIdx = 0;
  let currentSlotOffset = 0;

  for (let i = 0; i < selectedSlots.length; i++) {
    const item = selectedSlots[i];
    const date = studyDates[currentDayIdx];
    const slotName = slotTimes[(slotIndexStart + currentSlotOffset) % slotTimes.length];

    tasks.push({
      subjectCode: item.topic.subjectCode,
      moduleNumber: item.topic.moduleNumber,
      topicId: item.topic.id,
      topicName: item.topic.name,
      scheduledDate: date,
      scheduledSlot: slotName,
      minutes: quantum,
      type: item.type,
      order: i
    });

    currentSlotOffset++;
    if (currentSlotOffset >= tasksPerDay) {
      currentSlotOffset = 0;
      currentDayIdx = Math.min(studyDates.length - 1, currentDayIdx + 1);
    }
  }

  const totalPlannedMinutes = tasks.reduce((sum, t) => sum + t.minutes, 0);

  return {
    mode: input.mode,
    totalPlannedMinutes,
    availableMinutes,
    studyDaysCount,
    bufferDaysCount,
    taskCounts: {
      learn: tasks.filter(t => t.type === 'learn').length,
      revise: tasks.filter(t => t.type === 'revise').length,
      test: tasks.filter(t => t.type === 'test').length,
      total: tasks.length
    },
    tasks
  };
}
