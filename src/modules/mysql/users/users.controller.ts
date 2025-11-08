import { Hono } from 'hono'
import { createUser, deleteUser, getAllUsers, getUserById, updateUser, User } from './users.service'

const users = new Hono()

users.get('/', async (c) => {
  try {
    const allUsers = await getAllUsers()
    return c.json({ success: true, data: allUsers })
  } catch (e: any) {
    return c.json({ success: false, message: e.message }, 500)
  }
})

users.get('/:id', async (c) => {
  const id = Number(c.req.param('id'))
  try {
    const user = await getUserById(id)
    if (!user) {
      return c.json({ success: false, message: 'User not found' }, 404)
    }
    return c.json({ success: true, data: user })
  } catch (e: any) {
    return c.json({ success: false, message: e.message }, 500)
  }
})

users.post('/', async (c) => {
  const user: User = await c.req.json()
  try {
    const newUser = await createUser(user)
    return c.json({ success: true, data: newUser }, 201)
  } catch (e: any) {
    return c.json({ success: false, message: e.message }, 400)
  }
})

users.put('/:id', async (c) => {
  const id = Number(c.req.param('id'))
  const user: Partial<User> = await c.req.json()
  try {
    const result = await updateUser(id, user)
    // @ts-ignore
    if (result.affectedRows === 0) {
      return c.json({ success: false, message: 'User not found or no changes made' }, 404)
    }
    return c.json({ success: true, message: 'User updated successfully' })
  } catch (e: any) {
    return c.json({ success: false, message: e.message }, 400)
  }
})

users.delete('/:id', async (c) => {
  const id = Number(c.req.param('id'))
  try {
    const result = await deleteUser(id)
    // @ts-ignore
    if (result.affectedRows === 0) {
      return c.json({ success: false, message: 'User not found' }, 404)
    }
    return c.json({ success: true, message: 'User deleted successfully' })
  } catch (e: any) {
    return c.json({ success: false, message: e.message }, 500)
  }
})

export default users
