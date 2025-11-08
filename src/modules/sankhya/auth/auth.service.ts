import jwt from 'jsonwebtoken'
import { getMysqlPool } from '../../../config/mysql'
import { getSqlServer } from '../../../config/sqlserver'
import { createNotification } from '../../../services/notification.service'
import { hashString } from '../../../utils/sankhya/pass'

// Tipagem para usuário Sankhya
export interface SankhyaUser {
  CODUSU: number
  NOMEUSU: string
  EMAIL: string
  INTERNO: string
  CPF?: string
}

export async function login(username: string, password: string): Promise<{ token: string, sessionId: number, user: SankhyaUser }> {
  const mysqlPool = await getMysqlPool() // garante que o pool esteja inicializado
  console.log('Login attempt for username:', username)

  const sql = await getSqlServer()
  if (!sql) throw new Error('Erro ao conectar ao servidor SQL.')
  console.log('Successfully obtained SQL Server connection.')

  const normalizedUsername = username.toLowerCase()
  console.log('Normalized username:', normalizedUsername)

  // Buscar usuário
  const userFoundByUsername = await findUserByUsername(username)
  if (!userFoundByUsername) throw new Error('Usuário não encontrado')
  console.log('User found by username. Proceeding with password verification.')

  // Gerar hash da senha
  const passwordHash = hashString((username + password).trim())
  console.log('Password hash generated:', passwordHash)

  // Verificar senha no SQL Server
  const result = await sql.query`
    SELECT CODUSU, NOMEUSU, EMAIL 
    FROM TSIUSU 
    WHERE NOMEUSU = ${normalizedUsername} AND INTERNO = ${passwordHash}
  `
  if (result.recordset.length === 0) throw new Error('Senha inválida')
  const user: SankhyaUser = result.recordset[0]
  console.log('User authenticated:', user.NOMEUSU)

  // Gerar JWT
  const expiresIn = '8h'
  const token = jwt.sign({ id: user.CODUSU, username: user.NOMEUSU }, process.env.JWT_SECRET!, { expiresIn })
  const expiresAt = new Date()
  expiresAt.setHours(expiresAt.getHours() + 8)

  // Inserir sessão no MySQL
  const [sessionResult]: any = await mysqlPool.query(
    'INSERT INTO user_sessions (user_id, token, expires_at) VALUES (?, ?, ?)',
    [user.CODUSU, token, expiresAt]
  )
  console.log('Session inserted with ID:', sessionResult.insertId)

  // Criar notificação
  try {
    await createNotification({
      user_id: user.CODUSU,
      type: 'LOGIN',
      category: 'SECURITY',
      title: 'Novo login detectado',
      message: `O usuário ${user.NOMEUSU} acabou de fazer login.`,
    })
    console.log('Notification created successfully.')
  } catch (notificationError: any) {
    console.error('Error creating notification:', notificationError.message)
  }

  return { token, sessionId: sessionResult.insertId, user }
}

export async function findUserByUsername(username: string): Promise<SankhyaUser | null> {
  const sql = await getSqlServer()
  const normalizedUsername = username.toLowerCase()

  const result = await sql.query`
    SELECT CODUSU, NOMEUSU, EMAIL, INTERNO, CPF
    FROM TSIUSU
    WHERE NOMEUSU = ${normalizedUsername}
  `

  if (result.recordset.length === 0) return null
  return result.recordset[0] as SankhyaUser
}
