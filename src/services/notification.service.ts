import { getMysqlPool } from '../config/mysql'
import { getIO } from '../socket'

export type Notification = {
  user_id?: number
  tenant_id?: number
  type: string
  category?: string
  title: string
  message: string
  data?: any
  parent_id?: number
  root_id?: number
}

export async function createNotification(notification: Notification) {
  const {
    user_id,
    tenant_id,
    type,
    category,
    title,
    message,
    data,
    parent_id,
    root_id,
  } = notification
  const mysqlPool = await getMysqlPool(); // Get the initialized MySQL pool
  const [result] = await mysqlPool.query(
    'INSERT INTO notifications (user_id, tenant_id, type, category, title, message, data, parent_id, root_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [
      user_id || null,
      tenant_id || null,
      type,
      category || null,
      title,
      message,
      data ? JSON.stringify(data) : null,
      parent_id || null,
      root_id || null,
    ]
  )

  const io = getIO()
  // @ts-ignore
  const newNotification = { ...notification, id: result.insertId, created_at: new Date() }
  io.emit('new-notification', newNotification)

  return result
}

/**
 * @deprecated Use createNotification instead
 */
export async function registerNotification(
  type: string,
  content: string,
  userId?: number
) {
  const mysqlPool = await getMysqlPool(); // Get the initialized MySQL pool
  const [result] = await mysqlPool.query(
    'INSERT INTO notifications (type, title, message, user_id, created_at) VALUES (?, ?, ?, ?, NOW())',
    [type, 'Notification', content, userId || null]
  )

  const io = getIO()
  io.emit('new-notification', {
    // @ts-ignore
    id: result.insertId,
    type,
    content,
    userId,
    created_at: new Date(),
  })

  return result
}