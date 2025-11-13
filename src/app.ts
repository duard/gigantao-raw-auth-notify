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

// =============================================
// ✅ CORS – universal (frontend, mobile, curl)
// =============================================
app.use(
  '*',
  cors({
    origin: (origin) => {
      // Permite todas as origens conhecidas ou sem origem (ex: curl, mobile)
      if (!origin) return '*'; // curl, mobile apps, Postman
      const allowed = [
        'http://localhost:9200',
        'http://localhost:3100',
        'http://192.168.1.9:9200',
        'http://192.168.1.9:3100',
        /\.gigantao\.net$/,
      ];
      if (allowed.some((rule) => (rule instanceof RegExp ? rule.test(origin) : origin === rule))) {
        return origin;
      }
      return '*'; // fallback para tudo (em dev)
    },
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
    exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
    credentials: true,
    maxAge: 86400,
  })
);

console.log('✅ CORS habilitado para todas as origens confiáveis');

// =============================================
// 🔥 Rotas e estáticos
// =============================================
app.use('/*', serveStatic({ root: './public' }));
app.get('/ui', swaggerUI({ url: '/openapi.json' }));

app.route('/auth', authRoutes);
app.route('/sankhya', sankhyaRoutes);
app.route('/notifications', notificationsRoutes);
app.route('/email', emailRoutes);

// =============================================
// 🧩 Rota de healthcheck e fallback
// =============================================
app.get('/', (c) => c.text('Auth Notify API running 🚀'));
app.all('*', (c) => c.json({ error: 'Not Found' }, 404));

export default app;
