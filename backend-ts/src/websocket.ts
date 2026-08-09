import { Server as HttpServer } from "http";
import { Server, Socket } from "socket.io";
import { verifyToken } from "./utils/auth";

// Socket.io with JWT auth. Rooms:
//   global        — everyone
//   role:TEACHER  — all teachers
//   role:ADMIN    — admins
//   class:<id>    — members of a class
let io: Server | null = null;

export function initWebsocket(server: HttpServer): Server {
  io = new Server(server, {
    cors: { origin: true, credentials: true },
  });

  io.use((socket, next) => {
    const token = socket.handshake.auth?.token;
    if (!token) return next(new Error("Missing token"));
    try {
      const payload = verifyToken(token);
      (socket as any).user = payload;
      next();
    } catch {
      next(new Error("Invalid token"));
    }
  });

  io.on("connection", (socket: Socket) => {
    const user = (socket as any).user as { id: string; role: string; classId?: string };
    socket.join("global");
    socket.join(`role:${user.role}`);
    if (user.classId) socket.join(`class:${user.classId}`);
    socket.on("join-class", (classId: string) => socket.join(`class:${classId}`));
  });

  return io;
}

export function getIo(): Server {
  if (!io) throw new Error("Websocket not initialized");
  return io;
}

export function emitToClass(classId: string, event: string, payload: unknown): void {
  if (!io) return;
  io.to(`class:${classId}`).emit(event, payload);
}

export function emitToUser(userId: string, event: string, payload: unknown): void {
  if (!io) return;
  io.to("global").except(`role:TEACHER`).except(`role:ADMIN`).emit(event, payload);
  // direct per-user room is not tracked; notifications go via global + role filtering in client
}
