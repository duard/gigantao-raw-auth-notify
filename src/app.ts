import { serveStatic } from '@hono/node-server/serve-static';
import { swaggerUI } from '@hono/swagger-ui';
import 'dotenv/config';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import sankhyaRoutes from './modules/sankhya/sankhya.routes';
import authRoutes from './routes/auth.routes';
import emailRoutes from './routes/email.routes';
import notificationsRoutes from './routes/notifications.routes';

const app = new Hono();

// Configure CORS
app.use(cors({
  origin: '*', // Temporarily allow all origins for debugging
}));
console.warn('CORS is temporarily configured to allow all origins for debugging purposes. Remember to restrict this in production.');

app.use('/*', serveStatic({ root: './public' }));
app.get('/ui', swaggerUI({ url: '/openapi.json' }));
app.route('/auth', authRoutes);
app.route('/sankhya', sankhyaRoutes);
app.route('/notifications', notificationsRoutes);
app.route('/email', emailRoutes);

export default app;
