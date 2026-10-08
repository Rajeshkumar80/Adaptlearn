export type PlanMode = '3-2-1' | '80/20' | 'balanced' | 'crunch';

export interface PlanTopicInput {
  id: string;
  subjectCode: string;
  moduleNumber: number;
  name: string;
  order: number;
  pyqImportance: number; // 0 to 100
  mastery: number; // 0.0 to 1.0
  stability?: number; // memory stability in days
  retention: number; // 0.0 to 1.0
  lastReviewedDate?: string; // YYYY-MM-DD
  prerequisiteIds: string[];
}

export interface AllocationConfig {
  mode: PlanMode;
  learnRatio: number;
  reviseRatio: number;
  testRatio: number;
  description: string;
}

export const REVIEW_THRESHOLD = 0.60;

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
  revisionTriggeredByRetention?: boolean;
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
  revisionDatesSummary: Array<{
    topicId: string;
    topicName: string;
    computedRevisionDate: string;
    retentionAtRevision: number;
  }>;
  tasks: PlanTaskItem[];
}
