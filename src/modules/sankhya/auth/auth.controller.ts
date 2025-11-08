import { Hono } from 'hono'
import { login } from './auth.service'
import { LoginDto } from './dto/login.dto'

const authController = new Hono()

authController.post('/login', async (c) => {
  const { username, password } = await c.req.json<LoginDto>()
  try {
    const data = await login(username, password)
    return c.json({ success: true, ...data })
  } catch (e: any) {
    return c.json({ success: false, message: e.message }, 401)
  }
})

export default authController
