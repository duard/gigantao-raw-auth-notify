/* eslint-disable @typescript-eslint/no-explicit-any */
import { Context } from 'hono';
import { login, verifyToken } from './auth.service';
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

  static async validateToken(c: Context) {
    try {
      const body = await c.req.json();
      const { token } = body;

      if (!token) {
        return c.json({ isValid: false, message: 'Token not provided' }, 400);
      }

      const decoded = await verifyToken(token);
      return c.json({ isValid: true, message: 'Token is valid', decoded }, 200);
    } catch (error: any) {
      return c.json({ isValid: false, message: error.message }, 401);
    }
  }
}
