import { sm2Defaults, forgettingUrgency } from "./sm2";

// §4.10 priority formula (master prompt):
//   priority = (1 - mastery) * 0.4 + pyqImportance * 0.3 + dependencyCount * 0.2 + forgettingUrgency * 0.1
// All inputs normalized to [0,1]; pyqImportance is stored 0-100 so it is divided by 100.

export interface SchedulerItemInput {
  topicId: string;
  topicName: string;
  mastery: number; // 0..1
  pyqImportance: number; // 0..100
  dependencyCount: number; // number of unmastered prerequisites
  lastReviewedAt: number | null;
  intervalDays: number;
  estimatedMinutes: number;
  subjectCode: string;
  moduleNumber: number;
}

export interface ScheduledItem {
  topicId: string;
  topicName: string;
  subjectCode: string;
  moduleNumber: number;
  priority: number;
  allocatedMinutes: number;
  reasons: string[];
}

export function computePriority(item: SchedulerItemInput): number {
  const pyqNorm = item.pyqImportance / 100;
  const depNorm = Math.min(1, item.dependencyCount / 5); // cap dependency term
  const urgency = forgettingUrgency({
    ...sm2Defaults,
    lastReviewedAt: item.lastReviewedAt,
    intervalDays: item.intervalDays,
  });
  return (
    (1 - item.mastery) * 0.4 +
    pyqNorm * 0.3 +
    depNorm * 0.2 +
    urgency * 0.1
  );
}

export function computeReasons(item: SchedulerItemInput, priority: number): string[] {
  const reasons: string[] = [];
  if (item.mastery < 0.5) reasons.push("low mastery");
  if (item.pyqImportance >= 50) reasons.push("high PYQ importance");
  if (item.dependencyCount > 0) reasons.push(`${item.dependencyCount} prerequisite(s) unmet`);
  const urgency = forgettingUrgency({
    ...sm2Defaults,
    lastReviewedAt: item.lastReviewedAt,
    intervalDays: item.intervalDays,
  });
  if (urgency > 0.7) reasons.push("due for review (forgetting)");
  if (reasons.length === 0) reasons.push("steady state");
  return reasons;
}

// Allocate availableHoursToday across items proportionally to priority
export function allocateTime(
  items: SchedulerItemInput[],
  availableHoursToday: number,
  minAllocationMinutes = 15
): ScheduledItem[] {
  const totalMinutes = Math.max(0, Math.round(availableHoursToday * 60));
  const withPriority = items.map((it) => ({
    it,
    priority: computePriority(it),
  }));
  const totalPriority = withPriority.reduce((sum, item) => sum + item.priority, 0) || 1;

  const result: Array<{ it: SchedulerItemInput; priority: number; allocated: number }> =
    withPriority
      .sort((a, b) => b.priority - a.priority)
      .map(({ it, priority }) => ({
        it,
        priority,
        allocated: Math.floor((priority / totalPriority) * totalMinutes),
      }));

  let remaining = totalMinutes - result.reduce((sum, e) => sum + e.allocated, 0);

  // enforce minimum allocation where budget allows; then hand out leftovers
  result.forEach((entry, idx) => {
    if (remaining > 0 && entry.allocated < minAllocationMinutes) {
      const take = Math.min(minAllocationMinutes - entry.allocated, remaining);
      entry.allocated += take;
      remaining -= take;
    }
    result[idx] = entry;
  });
  // distribute any remaining minutes to the highest-priority item
  if (remaining > 0 && result.length > 0) {
    result[0].allocated += remaining;
  }

  return result
    .filter((r) => r.allocated > 0)
    .map(({ it, priority, allocated }) => ({
      topicId: it.topicId,
      topicName: it.topicName,
      subjectCode: it.subjectCode,
      moduleNumber: it.moduleNumber,
      priority,
      allocatedMinutes: allocated,
      reasons: computeReasons(it, priority),
    }));
}
