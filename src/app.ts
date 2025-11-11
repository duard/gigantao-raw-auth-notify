import { serveStatic } from '@hono/node-server/serve-static'
import { swaggerUI } from '@hono/swagger-ui'
import 'dotenv/config'
import { Hono } from 'hono'
import { cors } from 'hono/cors'

import sankhyaRoutes from './modules/sankhya/sankhya.routes'
import authRoutes from './routes/auth.routes'
import emailRoutes from './routes/email.routes'
import notificationsRoutes from './routes/notifications.routes'

const app = new Hono()

// --- CORS global estilo NestJS ---
app.use('*', cors({
  origin: (origin: string | undefined) => {
    // Permite requisições sem origin (curl, apps)
    if (!origin) return '*'

    // Lista de origens permitidas
    const allowedOrigins = [
      /^https?:\/\/([a-z0-9-]+\.)*gigantao\.net(:\d+)?$/,
      /^https?:\/\/192\.168\.\d+\.\d+(:\d+)?$/,
      /^http:\/\/localhost(:\d+)?$/,
      /^http:\/\/localhost:3101\/gigantao-login$/,
    ]

    // Valida origin
    const matched = allowedOrigins.some((pattern) => pattern.test(origin))
    if (matched) {
      console.log(`🟢 CORS permitido para: ${origin}`)
      return origin
    }

    console.warn(`🔴 CORS bloqueado para: ${origin}`)
    return null
  },
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin'],
  credentials: true,
}))

// --- Preflight OPTIONS global (necessário para Cloudflare laranja) ---
app.options('*', (c) =>
  c.text('OK', 204, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, PATCH',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, Authorization, Accept',
    'Access-Control-Allow-Credentials': 'true',
  })
)

// --- Rotas e estáticos ---
app.use('/*', serveStatic({ root: './public' }))
app.get('/ui', swaggerUI({ url: '/openapi.json' }))
app.route('/auth', authRoutes)
app.route('/sankhya', sankhyaRoutes)
app.route('/notifications', notificationsRoutes)
app.route('/email', emailRoutes)

export default app
