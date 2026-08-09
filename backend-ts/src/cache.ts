import Redis from "ioredis";
import { config } from "./config";

// Redis-backed cache with in-memory fallback when REDIS_URL is unset (by design).
// All methods are async so the two backends are interchangeable.

class MemoryCache {
  private store = new Map<string, { value: unknown; expiresAt: number }>();

  async get<T>(key: string): Promise<T | null> {
    const entry = this.store.get(key);
    if (!entry) return null;
    if (entry.expiresAt < Date.now()) {
      this.store.delete(key);
      return null;
    }
    return entry.value as T;
  }

  async set(key: string, value: unknown, ttlSeconds: number): Promise<void> {
    this.store.set(key, { value, expiresAt: Date.now() + ttlSeconds * 1000 });
  }

  async del(key: string): Promise<void> {
    this.store.delete(key);
  }
}

let redis: Redis | null = null;
if (config.redisUrl) {
  redis = new Redis(config.redisUrl, { lazyConnect: true });
  redis.on("error", () => {
    redis = null;
  });
}

export const cache: Pick<MemoryCache, "get" | "set" | "del"> = redis
  ? {
      async get<T>(key: string) {
        const raw = await redis!.get(key);
        return raw ? (JSON.parse(raw) as T) : null;
      },
      async set(key: string, value: unknown, ttlSeconds: number) {
        await redis!.set(key, JSON.stringify(value), "EX", ttlSeconds);
      },
      async del(key: string) {
        await redis!.del(key);
      },
    }
  : new MemoryCache();
