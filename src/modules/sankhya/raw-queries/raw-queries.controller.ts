import { Hono } from 'hono'
import { executeRawQuery } from './raw-queries.service'
import { jwtMiddleware } from '../../../middleware/jwt.middleware'

const rawQueriesController = new Hono()

rawQueriesController.post('/', jwtMiddleware, async (c) => {
  try {
    const { query } = await c.req.json()
    if (!query) {
      c.status(400)
      return c.json({ error: 'Query is required' })
    }

    // Basic security check: prevent common DDL/DML operations that could be destructive
    const lowerCaseQuery = query.toLowerCase().trim()
    if (lowerCaseQuery.startsWith('insert') ||
        lowerCaseQuery.startsWith('update') ||
        lowerCaseQuery.startsWith('delete') ||
        lowerCaseQuery.startsWith('drop') ||
        lowerCaseQuery.startsWith('create') ||
        lowerCaseQuery.startsWith('alter')) {
      c.status(403)
      return c.json({ error: 'Only SELECT queries are allowed for raw execution.' })
    }

    const result = await executeRawQuery(query)
    return c.json(result)
  } catch (error: any) {
    c.status(500)
    return c.json({ error: error.message })
  }
})

export default rawQueriesController
