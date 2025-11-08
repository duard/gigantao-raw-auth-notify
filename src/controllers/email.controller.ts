import { Hono } from 'hono'
import { sendEmail } from '../services/email.service'

const email = new Hono()

email.post('/send', async (c) => {
  const { to, subject, body } = await c.req.json()
  try {
    await sendEmail(to, subject, body)
    return c.json({ success: true, message: 'Email sent successfully' })
  } catch (e: any) {
    return c.json({ success: false, message: e.message }, 400)
  }
})

export default email
