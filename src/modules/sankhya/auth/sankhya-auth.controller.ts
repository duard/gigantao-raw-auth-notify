/* eslint-disable @typescript-eslint/no-explicit-any */
import { Context } from 'hono';
import { login } from './auth.service';
import { loginSchema } from './sankhya-auth.dtos';

export class SankhyaAuthController {
  static async login(c: Context) {
    const body = await c.req.json();
    const validation = loginSchema.safeParse(body);

    if (!validation.success) {
      return c.json({ error: 'Invalid request body' }, 400);
    }

    const { username, password } = validation.data;

    try {
      const data = await login(username, password);
      return c.json({ success: true, ...data });
    } catch (error: any) {
      return c.json({ success: false, message: error.message }, 401);
    }
  }
}
