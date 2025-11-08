import { initMysqlPool } from '../../../config/mysql'

export type User = {
  id?: number
  sankhya_user_id: number
  username: string
  full_name?: string | null
  access_control?: string | null
  email?: string | null
  password_hash?: string | null
  level?: number
  last_access_at?: Date | null
  access_limit_at?: Date | null
  sankhya_updated_at?: Date
  is_cashier?: string
  has_ecf?: string
  central_nf_printer?: string
  smtp_server?: string | null
  smtp_type?: string | null
  smtp_username?: string | null
  smtp_password?: string | null
  can_export_reports?: string
  can_view_all_headers?: string
  show_profit_analysis?: string
  quote_approval_type?: string
  user_name_ad?: string | null
  cpf?: string
  rg?: string | null
  birth_date?: Date | null
  function_code?: number | null
  internal_code?: string | null
  queue_name?: string | null
  password_never_expires?: string | null
  smtp_port?: number
  smtp_security?: string
  email_sol_lib?: string | null
  not_sla_queue?: string | null
  locale?: string
  user_type?: number
  phone?: string | null
  address?: string | null
  created_at?: Date
  updated_at?: Date
  deleted_at?: Date | null
}

async function getPool() {
  return await initMysqlPool()
}

export async function getAllUsers(): Promise<User[]> {
  const pool = await getPool()
  const [rows] = await pool.query('SELECT * FROM tgo_usuarios WHERE deleted_at IS NULL')
  return rows as User[]
}

export async function getUserById(id: number): Promise<User | undefined> {
  const pool = await getPool()
  const [rows] = await pool.query('SELECT * FROM tgo_usuarios WHERE id = ? AND deleted_at IS NULL', [id])
  return (rows as User[])[0]
}

export async function createUser(user: User): Promise<User & { id: number }> {
  const pool = await getPool()

  const [result]: any = await pool.query(
    `INSERT INTO tgo_usuarios (
      sankhya_user_id, username, full_name, access_control, email, password_hash, level,
      last_access_at, access_limit_at, sankhya_updated_at, is_cashier, has_ecf, central_nf_printer,
      smtp_server, smtp_type, smtp_username, smtp_password, can_export_reports,
      can_view_all_headers, show_profit_analysis, quote_approval_type, user_name_ad, cpf, rg,
      birth_date, function_code, internal_code, queue_name, password_never_expires, smtp_port,
      smtp_security, email_sol_lib, not_sla_queue, locale, user_type, phone,
      address
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      user.sankhya_user_id, user.username, user.full_name || null, user.access_control || null,
      user.email || null, user.password_hash || null, user.level || 100,
      user.last_access_at || null, user.access_limit_at || null, user.sankhya_updated_at || new Date(),
      user.is_cashier || 'N', user.has_ecf || 'N', user.central_nf_printer || 'S',
      user.smtp_server || null, user.smtp_type || 'N', user.smtp_username || null,
      user.smtp_password || null, user.can_export_reports || 'S', user.can_view_all_headers || 'T',
      user.show_profit_analysis || 'S', user.quote_approval_type || 'M', user.user_name_ad || null,
      user.cpf || null, user.rg || null, user.birth_date || null, user.function_code || null,
      user.internal_code || null, user.queue_name || null, user.password_never_expires || 'S',
      user.smtp_port || 25, user.smtp_security || 'N', user.email_sol_lib || null,
      user.not_sla_queue || null, user.locale || 'PT_BR', user.user_type || 0,
      user.phone || null, user.address || null,
    ]
  )

  return { id: result.insertId, ...user }
}

export async function updateUser(id: number, user: Partial<User>) {
  const pool = await getPool()

  const fields = Object.keys(user)
    .filter(key => user[key as keyof User] !== undefined && key !== 'id' && key !== 'sankhya_user_id' && key !== 'created_at')
    .map(key => `${key} = ?`)

  const values = Object.entries(user)
    .filter(([key, value]) => value !== undefined && key !== 'id' && key !== 'sankhya_user_id' && key !== 'created_at')
    .map(([_, value]) => value)

  if (fields.length === 0) return { message: 'No fields to update.' }

  values.push(id)

  const [result] = await pool.query(
    `UPDATE tgo_usuarios SET ${fields.join(', ')}, updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
    values
  )

  return result
}

export async function deleteUser(id: number) {
  const pool = await getPool()
  const [result] = await pool.query(
    'UPDATE tgo_usuarios SET deleted_at = CURRENT_TIMESTAMP WHERE id = ?',
    [id]
  )
  return result
}
