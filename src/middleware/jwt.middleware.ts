import { Context, Next } from 'hono'
import { verify } from 'jsonwebtoken'

export async function jwtMiddleware(c: Context, next: Next) {
  const authHeader = c.req.header('Authorization')

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    c.status(401)
    return c.json({ error: 'Unauthorized: No token provided' })
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = verify(token, process.env.JWT_SECRET!)
    c.set('user', decoded) // Attach decoded user to context
    await next()
  } catch (error: any) {
    c.status(401)
    return c.json({ error: 'Unauthorized: Invalid token' })
  }
}
