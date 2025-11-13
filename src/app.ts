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
// ✅ Lista explícita de domínios permitidos
// =============================================
const allowedOrigins = [
  // 🔹 LOCAL
  'http://localhost:9300',
  'http://localhost:9200',
  'http://localhost:9100',
  'http://localhost:9400',
  'http://127.0.0.1:9300',
  'http://127.0.0.1:9200',
  'http://127.0.0.1:9100',
  'http://127.0.0.1:9400',
  'https://rh-local.gigantao.net',
  'https://api-local.gigantao.net',
  'https://api-pontotel-local.gigantao.net',
  'https://api-auth-local.gigantao.net',

  // 🔹 DEVELOPMENT
  'https://rh-dev.gigantao.net',
  'https://api-dev.gigantao.net',
  'https://api-pontotel-dev.gigantao.net',
  'https://api-auth-dev.gigantao.net',

  // 🔹 HOMOLOGATION
  'https://rh-homolog.gigantao.net',
  'https://api-homolog.gigantao.net',
  'https://api-pontotel-homolog.gigantao.net',
  'https://api-auth-homolog.gigantao.net',

  // 🔹 TEST
  'https://rh-test.gigantao.net',
  'https://api-test.gigantao.net',
  'https://api-pontotel-test.gigantao.net',
  'https://api-auth-test.gigantao.net',

  // 🔹 PRODUCTION
  'https://rh.gigantao.net',
  'https://api.gigantao.net',
  'https://api-pontotel.gigantao.net',
  'https://api-gigantao-raw-auth-notify.gigantao.net',

  // 🔹 Serviços auxiliares
  'https://carlos.gigantao.net',

  // 🔹 Fallback localhost (para devs na rede)
  'http://192.168.1.9:9200',
  'http://192.168.1.9:9300',
  'http://192.168.1.9:9100',
  'http://192.168.1.9:9400',
];

// =============================================
// ✅ Middleware CORS
// =============================================
app.use(
  '*',
  cors({
    origin: (origin) => {
      if (!origin) return '*'; // curl, mobile apps, Postman

      const isAllowed =
        allowedOrigins.includes(origin) ||
        /^https?:\/\/([a-z0-9-]+\.)*gigantao\.net$/i.test(origin);

      if (isAllowed) {
        console.log(`✅ CORS liberado → ${origin}`);
        return origin;
      }

      console.warn(`🚫 CORS bloqueado → ${origin}`);
      return process.env.NODE_ENV === 'production' ? 'null' : '*';
    },
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
    exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
    credentials: true,
    maxAge: 86400,
  })
);

console.log('✅ CORS configurado com todos os domínios do tunnel');

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
// 🧩 Healthcheck e fallback
// =============================================
app.get('/', (c) => c.text('Auth Notify API running 🚀'));
app.all('*', (c) => c.json({ error: 'Not Found' }, 404));

export default app;
