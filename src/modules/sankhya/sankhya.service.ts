import jwt from 'jsonwebtoken'
import { getMysqlPool } from '../../config/mysql'
import { createNotification } from '../../services/notification.service'
import { SankhyaUser } from './sankhya.types'

export async function login(username: string, password: string) {
  const pool = await getMysqlPool() // 🔹 garantir pool inicializado
  const [result] = await pool.query(
    `SELECT id, username, password_hash FROM tgo_usuarios WHERE username = ? AND deleted_at IS NULL`,
    [username]
  )
  // @ts-ignore
  const user: SankhyaUser = result[0]
  if (!user) throw new Error('Usuário não encontrado ou inativo')

  // Placeholder de senha (substitua pelo bcrypt.compare se tiver hash real)
  if (password !== user.password_hash) {
    throw new Error('Senha incorreta')
  }

  const expiresIn = '8h'
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET!,
    { expiresIn }
  )

  const expiresAt = new Date()
  expiresAt.setHours(expiresAt.getHours() + 8)

  const [sessionResult] = await pool.query(
    'INSERT INTO user_sessions (user_id, token, expires_at) VALUES (?, ?, ?)',
    [user.id, token, expiresAt]
  )

  await createNotification({
    user_id: user.id,
    type: 'LOGIN',
    category: 'SECURITY',
    title: 'Novo login detectado',
    message: `O usuário ${user.username} acabou de fazer login.`,
  })

  // @ts-ignore
  return { token, sessionId: sessionResult.insertId }
}

export async function invalidateSession(sessionId: number) {
  const pool = await getMysqlPool() // 🔹 garantir pool inicializado
  const [result] = await pool.query(
    'UPDATE user_sessions SET is_active = FALSE WHERE id = ?',
    [sessionId]
  )
  return result
}

export async function getActiveSessions(userId: number) {
  const pool = await getMysqlPool() // 🔹 garantir pool inicializado
  const [rows] = await pool.query(
    'SELECT * FROM user_sessions WHERE user_id = ? AND is_active = TRUE',
    [userId]
  )
  return rows
}
