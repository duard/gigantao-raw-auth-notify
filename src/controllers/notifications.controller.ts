import { createNotification, Notification } from '../services/notification.service'
import { Hono } from 'hono'

const notifications = new Hono()

notifications.post('/', async (c) => {
  const notification = await c.req.json<Notification>()
  try {
    const data = await createNotification(notification)
    return c.json({ success: true, data })
  } catch (e: any) {
    return c.json({ success: false, message: e.message }, 400)
  }
})

export default notifications
