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

// --- ✅ CORS global, seguro e confiável ---
app.use('*', cors({
  origin: (origin: string | undefined) => {
    if (!origin) return null // sem origin → bloqueia

    const allowedOrigins = [
      /^https?:\/\/([a-z0-9-]+\.)*gigantao\.net(:\d+)?$/,
      /^https?:\/\/192\.168\.\d+\.\d+(:\d+)?$/,
      /^http:\/\/localhost(:\d+)?$/,
      /^http:\/\/localhost:3101\/gigantao-login$/,
    ]

    const isAllowed = allowedOrigins.some((pattern) => pattern.test(origin))
    if (isAllowed) {
      console.log(`🟢 CORS permitido para: ${origin}`)
      return origin
    } else {
      console.warn(`🔴 CORS bloqueado para: ${origin}`)
      return null
    }
  },
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}))

console.warn(
  'CORS configurado: localhost, rede local (192.168.*), e *.gigantao.net estão permitidos.'
)

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
