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

// --- CORS global ---
app.use('*', cors({
  origin: '*', 
  allowHeaders: ['Content-Type', 'Authorization'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  exposeHeaders: ['Content-Length'],
  credentials: true,
}))
app.options('*', (c) => c.text('', 204))

// --- Rotas ---
app.route('/auth', authRoutes)
app.route('/sankhya', sankhyaRoutes)
app.route('/notifications', notificationsRoutes)
app.route('/email', emailRoutes)

// --- Swagger ---
app.get('/ui', swaggerUI({ url: '/openapi.json' }))

// --- Arquivos estáticos ---
app.use('/*', serveStatic({ root: './public' }))

export default app
