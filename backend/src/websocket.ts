import { Server as HttpServer } from "http";
import { Server, Socket } from "socket.io";
import { verifyToken } from "./utils/auth";
import { prisma } from "./db";

let io: Server | null = null;

export function initWebsocket(server: HttpServer): Server {
  io = new Server(server, { cors: { origin: true, credentials: true } });

  io.use((socket, next) => {
    const token = socket.handshake.auth?.token;
    if (!token) return next(new Error("Missing token"));
    try {
      (socket as any).user = verifyToken(token);
      next();
    } catch {
      next(new Error("Invalid token"));
    }
  });

  io.on("connection", (socket: Socket) => {
    const user = (socket as any).user as { id: string; role: string; classId?: string | null };
    socket.join("global");
    socket.join(`role:${user.role}`);
    socket.join(`user:${user.id}`);
    if (user.classId) socket.join(`class:${user.classId}`);

    socket.on("join-class", async (classId: string) => {
      if (user.role === "TEACHER" || user.role === "ADMIN") {
        const owned = await prisma.class.findFirst({ where: { id: classId, createdByTeacherId: user.id } });
        if (owned) socket.join(`class:${classId}`);
      } else {
        const member = await prisma.user.findFirst({ where: { id: user.id, classId } });
        if (member) socket.join(`class:${classId}`);
      }
    });
  });

  return io;
}

export function getIo(): Server {
  if (!io) throw new Error("Websocket not initialized");
  return io;
}

export function emitToClass(classId: string, event: string, payload: unknown): void {
  io?.to(`class:${classId}`).emit(event, payload);
}

export function emitToUser(userId: string, event: string, payload: unknown): void {
  io?.to(`user:${userId}`).emit(event, payload);
}
