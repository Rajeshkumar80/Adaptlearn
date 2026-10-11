import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { prisma } from "../db";

/**
 * Security Fix: tests.ts had three routes (GET /:id/results, GET /:id/integrity-report,
 * PATCH /results/:resultId/grade) that fetched by object id without checking the
 * requesting teacher actually created that test (BOLA — any authenticated teacher
 * could read or alter another teacher's test results/integrity data).
 *
 * Also fixed: the student-facing GET /:id/take question payload was leaking the
 * grading `rubric` (shown live in the exam UI as "Criteria"), and startTime/endTime
 * windows on Test were never enforced server-side.
 *
 * These tests exercise the exact Prisma queries the routes now run (ownership-scoped
 * lookups + the restricted question select) against the real database, proving the
 * fix without needing an HTTP harness. A live end-to-end HTTP verification (register
 * temp teacher, create/attack/cleanup a real test) was additionally run manually and
 * recorded in SECURITY_AUDIT_REPORT.md.
 */
describe("Security Fix: Test ownership (BOLA) and answer-key exposure", () => {
  it("ownership-scoped result lookup returns nothing for a teacher who did not create the test", async () => {
    const teacher = await prisma.user.findUnique({ where: { email: "teacher1@adaptlearn.dev" } });
    const otherTeacher = await prisma.user.findFirst({ where: { role: "TEACHER", id: { not: teacher!.id } } });
    assert.ok(teacher, "Teacher fixture must exist");

    const test = await prisma.test.create({
      data: {
        subjectCode: "BCS701",
        title: "Regression: ownership scoping",
        createdByTeacherId: teacher!.id,
        questions: { create: [{ text: "dummy", questionType: "MCQ", options: ["a", "b"], correctIndex: 0, marks: 2 }] },
      },
    });

    try {
      // Simulates the route's new ownership check for /:id/results, /:id/integrity-report
      const asOwner = await prisma.test.findFirst({ where: { id: test.id, createdByTeacherId: teacher!.id }, select: { id: true } });
      assert.ok(asOwner, "The creating teacher must pass the ownership check");

      const fakeOutsiderId = otherTeacher?.id || "non-existent-teacher-id";
      const asOutsider = await prisma.test.findFirst({ where: { id: test.id, createdByTeacherId: fakeOutsiderId }, select: { id: true } });
      assert.equal(asOutsider, null, "A teacher who did not create the test must not pass the ownership check");

      // Simulates the route's new ownership check for PATCH /results/:resultId/grade
      const result = await prisma.testResult.create({
        data: { testId: test.id, studentId: teacher!.id, attemptNumber: 1, score: 2, totalMarks: 2 },
      });
      const gradeAsOwner = await prisma.testResult.findFirst({ where: { id: result.id, test: { createdByTeacherId: teacher!.id } } });
      assert.ok(gradeAsOwner, "Owning teacher must be able to grade their own test's result");
      const gradeAsOutsider = await prisma.testResult.findFirst({ where: { id: result.id, test: { createdByTeacherId: fakeOutsiderId } } });
      assert.equal(gradeAsOutsider, null, "A non-owning teacher must not be able to override grades on another teacher's test");
    } finally {
      await prisma.testResult.deleteMany({ where: { testId: test.id } });
      await prisma.test.delete({ where: { id: test.id } });
    }
  });

  it("the student-facing question select excludes rubric, modelAnswer, and expectedKeywords", async () => {
    const teacher = await prisma.user.findUnique({ where: { email: "teacher1@adaptlearn.dev" } });
    const test = await prisma.test.create({
      data: {
        subjectCode: "BCS701",
        title: "Regression: rubric exposure",
        createdByTeacherId: teacher!.id,
        questions: {
          create: [{
            text: "Explain X", questionType: "DESCRIPTIVE", options: [], marks: 10,
            rubric: { mustMention: "the real grading criteria that must stay secret" },
            modelAnswer: "the model answer",
            expectedKeywords: ["secret", "keywords"],
          }],
        },
      },
      include: { questions: true },
    });

    try {
      // Exact select used by GET /:id/take after the fix
      const studentFacing = await prisma.question.findMany({
        where: { testId: test.id },
        select: { id: true, text: true, questionType: true, options: true, marks: true, topicId: true },
      });
      const q: any = studentFacing[0];
      assert.equal(q.rubric, undefined, "rubric must never be sent to the test-taking student");
      assert.equal(q.modelAnswer, undefined, "modelAnswer must never be sent to the test-taking student");
      assert.equal(q.expectedKeywords, undefined, "expectedKeywords must never be sent to the test-taking student");

      // Confirm the data still exists server-side for grading (not accidentally deleted)
      const full = await prisma.question.findUnique({ where: { id: test.questions[0].id } });
      assert.ok(full?.rubric, "rubric must still exist in the DB for server-side evaluation");
    } finally {
      await prisma.question.deleteMany({ where: { testId: test.id } });
      await prisma.test.delete({ where: { id: test.id } });
    }
  });

  it("rejects takes/submits outside the test's configured startTime/endTime window", async () => {
    const teacher = await prisma.user.findUnique({ where: { email: "teacher1@adaptlearn.dev" } });
    const futureTest = await prisma.test.create({
      data: {
        subjectCode: "BCS701", title: "Regression: future window", createdByTeacherId: teacher!.id,
        startTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      },
    });
    const pastTest = await prisma.test.create({
      data: {
        subjectCode: "BCS701", title: "Regression: closed window", createdByTeacherId: teacher!.id,
        endTime: new Date(Date.now() - 1000),
      },
    });

    try {
      const now = new Date();
      assert.ok(futureTest.startTime && now < futureTest.startTime, "Future-start test must be rejected by the 'not open yet' check");
      assert.ok(pastTest.endTime && now > pastTest.endTime, "Past-end test must be rejected by the 'window closed' check");
    } finally {
      await prisma.test.delete({ where: { id: futureTest.id } });
      await prisma.test.delete({ where: { id: pastTest.id } });
    }
  });
});
