import { prisma } from "../db";
import fs from "fs";

async function verifyNotesE2EFlow() {
  console.log("=== T3.3 NOTES END-TO-END FLOW VERIFICATION ===");

  // 1. Authenticate Teacher
  const teacherLogin = await fetch("http://localhost:8001/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "teacher1@adaptlearn.dev", password: "Teacher@123" }),
  });
  const { token: teacherToken, user: teacherUser } = await teacherLogin.json();
  if (!teacherToken) throw new Error("Teacher login failed");
  console.log(`[1] Teacher authenticated: ${teacherUser.name} (${teacherUser.role})`);

  // 2. Authenticate Student (Sem 7)
  const studentLogin = await fetch("http://localhost:8001/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "demo.student@adaptlearn.dev", password: "Student@123" }),
  });
  const { token: studentToken, user: studentUser } = await studentLogin.json();
  if (!studentToken) throw new Error("Student login failed");
  console.log(`[2] Student authenticated: ${studentUser.name} (Semester: ${studentUser.semester})`);

  // 3. Reject non-PDF upload
  const badForm = new FormData();
  badForm.append("file", new Blob(["NOT A PDF CONTENT"], { type: "application/pdf" }), "fake.pdf");
  badForm.append("title", "Fake PDF Note");
  badForm.append("subjectCode", "BCS701");
  const badUploadRes = await fetch("http://localhost:8001/api/notes", {
    method: "POST",
    headers: { Authorization: `Bearer ${teacherToken}` },
    body: badForm,
  });
  const badJson = await badUploadRes.json();
  console.log(`[3] Spoofed PDF rejected: HTTP ${badUploadRes.status} -> ${badJson.error}`);
  if (badUploadRes.status !== 400) throw new Error("Spoofed PDF was not rejected with HTTP 400");

  // 4. Upload valid PDF note
  const validPdfBytes = Buffer.from(
    "%PDF-1.4\n1 0 obj\n<< /Title (VTU BCS701 Module 1 Notes) /Author (Prof Rajesh Kumar) >>\nendobj\ntrailer\n<< /Root 1 0 R >>\n%%EOF"
  );
  const goodForm = new FormData();
  goodForm.append("file", new Blob([validPdfBytes], { type: "application/pdf" }), "BCS701_Module1_AI_Search.pdf");
  goodForm.append("title", "BCS701 Module 1: Heuristic Search & Adversarial Planning");
  goodForm.append("description", "Comprehensive notes for VTU 7th Sem CSE on A* and Minimax algorithms.");
  goodForm.append("subjectCode", "BCS701");
  goodForm.append("moduleNumber", "1");

  const uploadRes = await fetch("http://localhost:8001/api/notes", {
    method: "POST",
    headers: { Authorization: `Bearer ${teacherToken}` },
    body: goodForm,
  });
  const uploadJson = await uploadRes.json();
  console.log(`[4] Valid PDF uploaded: HTTP ${uploadRes.status} -> ID: ${uploadJson.note?.id}`);
  if (uploadRes.status !== 201 || !uploadJson.note?.id) throw new Error("Valid PDF upload failed");
  const testNoteId = uploadJson.note.id;

  // 5. Student fetches notes list for subject BCS701 & module 1
  const listRes = await fetch("http://localhost:8001/api/notes?subject=BCS701&module=1", {
    headers: { Authorization: `Bearer ${studentToken}` },
  });
  const listJson = await listRes.json();
  const foundNote = listJson.notes?.find((n: any) => n.id === testNoteId);
  console.log(`[5] Student query /api/notes?subject=BCS701&module=1: count=${listJson.notes?.length}, foundTestNote=${!!foundNote}`);
  if (!foundNote) throw new Error("Student could not find the uploaded note");

  // 6. Student streams note PDF with ?token= (iframe flow)
  const streamRes = await fetch(`http://localhost:8001/api/notes/${testNoteId}/stream?token=${studentToken}`);
  const streamContentType = streamRes.headers.get("content-type");
  const streamBody = await streamRes.text();
  const streamValid = streamRes.status === 200 && streamContentType === "application/pdf" && streamBody.startsWith("%PDF-");
  console.log(`[6] Student in-page PDF stream: HTTP ${streamRes.status}, Content-Type: ${streamContentType}, Valid=%PDF: ${streamValid}`);
  if (!streamValid) throw new Error("PDF stream failed or corrupted");

  // 7. Student downloads note PDF with Bearer header
  const dlRes = await fetch(`http://localhost:8001/api/notes/${testNoteId}/download`, {
    headers: { Authorization: `Bearer ${studentToken}` },
  });
  const dlDisposition = dlRes.headers.get("content-disposition");
  console.log(`[7] Student PDF download: HTTP ${dlRes.status}, Content-Disposition: ${dlDisposition}`);
  if (dlRes.status !== 200 || !dlDisposition?.includes("attachment")) throw new Error("PDF download failed");

  // 8. Cleanup test note
  const delRes = await fetch(`http://localhost:8001/api/notes/${testNoteId}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${teacherToken}` },
  });
  console.log(`[8] Teacher deleted note: HTTP ${delRes.status}`);

  console.log("=== ALL T3.3 VERIFICATION CHECKS PASSED SUCCESSFULLY ===");
}

verifyNotesE2EFlow().catch((err) => {
  console.error("Verification failed:", err);
  process.exit(1);
});
