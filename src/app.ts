import { serveStatic } from '@hono/node-server/serve-static'
import { swaggerUI } from '@hono/swagger-ui'
import 'dotenv/config'
import { Hono } from 'hono'

import sankhyaRoutes from './modules/sankhya/sankhya.routes'
import authRoutes from './routes/auth.routes'
import emailRoutes from './routes/email.routes'
import notificationsRoutes from './routes/notifications.routes'

const app = new Hono()

// Configure CORS to allow all origins (for debugging, not recommended for production)
// app.use(cors({
//   origin: '*',
//   allowHeaders: ['X-Custom-Header', 'Upgrade-Insecure-Requests', 'Content-Type'], // Added Content-Type
//   allowMethods: ['POST', 'GET', 'PUT', 'DELETE', 'OPTIONS'],
//   exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
//   maxAge: 600,
//   credentials: true,
// }));
console.warn('CORS is configured to allow all origins. This is NOT recommended for production environments due to security risks.');

// --- ✅ Preflight OPTIONS para todas as rotas ---
app.options('*', (c) =>
  c.text('OK', 204, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
  })
)

// --- Rotas de API ---
app.route('/auth', authRoutes)
app.route('/sankhya', sankhyaRoutes)
app.route('/notifications', notificationsRoutes)
app.route('/email', emailRoutes)

// --- Swagger UI ---
app.get('/ui', swaggerUI({ url: '/openapi.json' }))

// --- Servir arquivos estáticos ---
app.use('/*', serveStatic({ root: './public' }))

export default app
