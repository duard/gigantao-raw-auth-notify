import { Hono } from 'hono';
import { SankhyaAuthController } from './auth/sankhya-auth.controller';

const authRoutes = new Hono();

authRoutes.post('/login-sankhya', SankhyaAuthController.login);

export default authRoutes;
