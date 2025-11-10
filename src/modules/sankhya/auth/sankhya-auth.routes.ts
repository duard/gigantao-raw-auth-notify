import { Hono } from 'hono';
import { SankhyaAuthController } from './sankhya-auth.controller';

const sankhyaAuthRouter = new Hono();

sankhyaAuthRouter.post('/login', SankhyaAuthController.login);

export default sankhyaAuthRouter;
