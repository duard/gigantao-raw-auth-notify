import { Hono } from 'hono'
import { serveStatic } from '@hono/node-server/serve-static'
import { swaggerUI } from '@hono/swagger-ui'
import sankhyaRoutes from './modules/sankhya/sankhya.routes'
import notificationsRoutes from './routes/notifications.routes'
import emailRoutes from './routes/email.routes'

const app = new Hono()

app.use('/*', serveStatic({ root: './public' }))
app.get('/ui', swaggerUI({ url: '/openapi.json' }))
app.route('/', sankhyaRoutes)
app.route('/', notificationsRoutes)
app.route('/', emailRoutes)

export default app
