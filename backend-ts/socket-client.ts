// §4.13 verification, single process: student socket client + teacher HTTP send
import { io } from "socket.io-client";

const BASE = "http://localhost:8001";

async function main() {
  const sLogin = await fetch(`${BASE}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "demo.student@adaptlearn.dev", password: "Student@123" }),
  });
  const { token: studentToken } = await sLogin.json();

  const socket = io(BASE, { auth: { token: studentToken } });
  const timeout = setTimeout(() => { console.log("FAIL: no notification within 20s"); process.exit(1); }, 20000);

  socket.on("connect", async () => {
    console.log("[student-socket] connected, sid=" + socket.id);
    const tLogin = await fetch(`${BASE}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "teacher1@adaptlearn.dev", password: "Teacher@123" }),
    });
    const { token: teacherToken } = await tLogin.json();
    const send = await fetch(`${BASE}/api/notifications/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${teacherToken}` },
      body: JSON.stringify({ classId: "class-cse-5a", title: "Assignment 1 reminder", body: "Waterfall vs Agile comparison due Aug 20" }),
    });
    const res = await send.json();
    console.log("[teacher-api] delivered to " + res.delivered + " students");
  });

  socket.on("notification", (n) => {
    console.log(`[student-socket] RECEIVED LIVE: "${n.title}": ${n.body}`);
    clearTimeout(timeout);
    socket.close();
    process.exit(0);
  });
  socket.on("connect_error", (e) => {
    console.log("[student-socket] connect_error:", e.message);
    process.exit(1);
  });
}

main();
