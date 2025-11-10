import { Hono } from 'hono';
import { serveStatic } from '@hono/node-server/serve-static';
import { swaggerUI } from '@hono/swagger-ui';
import sankhyaRoutes from './modules/sankhya/sankhya.routes';
import notificationsRoutes from './routes/notifications.routes';
import emailRoutes from './routes/email.routes';
import authRoutes from './routes/auth.routes';

const app = new Hono();

app.use('/*', serveStatic({ root: './public' }));
app.get('/ui', swaggerUI({ url: '/openapi.json' }));
app.route('/auth', authRoutes);
app.route('/sankhya', sankhyaRoutes);
app.route('/notifications', notificationsRoutes);
app.route('/email', emailRoutes);

export default app;
