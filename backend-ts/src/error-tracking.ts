// Lightweight error tracking. Console-based by default; extend to Sentry/etc later.

export function trackError(context: string, err: unknown): void {
  const message = err instanceof Error ? err.stack || err.message : String(err);
  console.error(`[error-tracking] ${context}: ${message}`);
}

export function logAiCall(userId: string, model: string, promptChars: number, responseChars: number): void {
  console.log(
    `[ai-log] userId=${userId} model=${model} promptChars=${promptChars} responseChars=${responseChars}`
  );
}
