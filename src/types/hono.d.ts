// src/types/hono.d.ts
import 'hono';

declare module 'hono' {
  interface ContextVariableMap {
    user: { id: number; username: string; };
  }
}
