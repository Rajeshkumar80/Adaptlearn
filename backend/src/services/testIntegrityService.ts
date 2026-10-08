import { prisma } from "../db";
import { getIo } from "../websocket";

export interface IntegrityEventInput {
  type: string;
  severity?: string;
  details?: string;
  attemptNumber?: number;
}

export const INTEGRITY_LIMITATION_DISCLOSURE =
  "Integrity events reflect client browser focus, tab visibility, and clipboard activity indicators. They are designed to monitor assessment environment adherence and do not constitute definitive forensic proof of academic dishonesty.";

/**
 * Records an integrity event, calculates warning progression, and notifies teachers in real-time.
 */
export async function recordIntegrityEvent(
  testId: string,
  studentId: string,
  event: IntegrityEventInput
) {
  const attemptNum = event.attemptNumber || 1;

  // 1. Count past flags for this attempt
  const pastCount = await prisma.cheatFlag.count({
    where: { testId, studentId, attemptNumber: attemptNum },
  });
  const currentCount = pastCount + 1;

  let actionTaken = "WARNING";
  let warningLabel = `Warning ${currentCount}`;
  if (currentCount === 4) {
    warningLabel = "Final Warning (4/4)";
  } else if (currentCount >= 5) {
    actionTaken = "FORCE_SUBMIT";
    warningLabel = "Test Automatically Terminated (Integrity Threshold Exceeded)";
  }

  // 2. Persist event
  const flag = await prisma.cheatFlag.create({
    data: {
      testId,
      studentId,
      attemptNumber: attemptNum,
      type: event.type,
      severity: event.severity || (currentCount >= 4 ? "HIGH" : "MEDIUM"),
      details: event.details || `Triggered event #${currentCount} (${event.type})`,
      eventCount: currentCount,
      actionTaken,
    },
    include: {
      student: { select: { id: true, name: true, usn: true, email: true } },
      test: { select: { id: true, title: true, subjectCode: true } },
    },
  });

  // 3. Emit real-time WebSocket notification to teachers
  try {
    const io = getIo();
    io.to("role:TEACHER").to("role:ADMIN").emit("test:integrity_event", {
      testId,
      testTitle: flag.test.title,
      studentId,
      studentName: flag.student.name,
      studentUsn: flag.student.usn,
      type: event.type,
      attemptNumber: attemptNum,
      warningCount: currentCount,
      actionTaken,
      warningLabel,
      timestamp: flag.createdAt.toISOString(),
      disclosure: INTEGRITY_LIMITATION_DISCLOSURE,
    });
  } catch {
    // Socket might not be active in unit tests
  }

  return {
    flagId: flag.id,
    warningCount: currentCount,
    actionTaken,
    warningLabel,
    disclosure: INTEGRITY_LIMITATION_DISCLOSURE,
  };
}

/**
 * Generates an aggregated integrity report and CSV export for a test.
 */
export async function getTestIntegrityReport(testId: string) {
  const flags = await prisma.cheatFlag.findMany({
    where: { testId },
    include: {
      student: { select: { id: true, name: true, usn: true, email: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  const studentMap = new Map<
    string,
    {
      studentId: string;
      studentName: string;
      usn: string | null;
      email: string;
      attemptNumber: number;
      totalEvents: number;
      tabSwitches: number;
      clipboardEvents: number;
      blurEvents: number;
      otherEvents: number;
      events: Array<{
        type: string;
        details: string;
        actionTaken: string;
        timestamp: string;
      }>;
    }
  >();

  for (const f of flags) {
    const key = `${f.studentId}_${f.attemptNumber}`;
    if (!studentMap.has(key)) {
      studentMap.set(key, {
        studentId: f.studentId,
        studentName: f.student.name,
        usn: f.student.usn,
        email: f.student.email,
        attemptNumber: f.attemptNumber,
        totalEvents: 0,
        tabSwitches: 0,
        clipboardEvents: 0,
        blurEvents: 0,
        otherEvents: 0,
        events: [],
      });
    }

    const row = studentMap.get(key)!;
    row.totalEvents++;
    if (f.type.toLowerCase().includes("tab")) row.tabSwitches++;
    else if (f.type.toLowerCase().includes("copy") || f.type.toLowerCase().includes("paste")) row.clipboardEvents++;
    else if (f.type.toLowerCase().includes("blur")) row.blurEvents++;
    else row.otherEvents++;

    row.events.push({
      type: f.type,
      details: f.details,
      actionTaken: f.actionTaken,
      timestamp: f.createdAt.toISOString(),
    });
  }

  const studentSummaries = Array.from(studentMap.values());

  // Generate CSV
  const csvHeaders = "Student Name,USN,Email,Attempt,Total Events,Tab Switches,Clipboard (Copy/Paste),Window Blurs,Other Events\n";
  const csvRows = studentSummaries
    .map(
      (s) =>
        `"${s.studentName}","${s.usn || "N/A"}","${s.email}",${s.attemptNumber},${s.totalEvents},${s.tabSwitches},${s.clipboardEvents},${s.blurEvents},${s.otherEvents}`
    )
    .join("\n");
  const csvData = csvHeaders + csvRows;

  return {
    testId,
    totalIntegrityEvents: flags.length,
    studentsFlaggedCount: studentSummaries.length,
    studentSummaries,
    csvData,
    disclosure: INTEGRITY_LIMITATION_DISCLOSURE,
  };
}
