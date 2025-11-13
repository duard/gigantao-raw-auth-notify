import { Hono } from 'hono';
import { SankhyaAuthController } from '../modules/sankhya/auth/sankhya-auth.controller';

const authRoutes = new Hono();

authRoutes.post('/login', SankhyaAuthController.login);
authRoutes.post('/validate', SankhyaAuthController.validateToken);

export default authRoutes;
