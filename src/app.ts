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

// --- ✅ CORS seguro e dinâmico ---
app.use('*', cors({
  origin: (origin) => {
    if (!origin) return false // Bloqueia requisições sem origin (segurança extra)
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
      return false
    }
  },
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}))

console.warn(
  'CORS configurado: localhost, rede local (192.168.*), e *.gigantao.net estão permitidos.'
)

// --- Rotas e estáticos ---
app.use('/*', serveStatic({ root: './public' }))
app.get('/ui', swaggerUI({ url: '/openapi.json' }))
app.route('/auth', authRoutes)
app.route('/sankhya', sankhyaRoutes)
app.route('/notifications', notificationsRoutes)
app.route('/email', emailRoutes)

export default app
