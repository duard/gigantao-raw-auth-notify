import { Hono } from 'hono'
import { executeRawQuery } from './raw-queries.service'
import { jwtMiddleware } from '../../../middleware/jwt.middleware'
import logger from '../../../utils/logger' // Import the logger

const rawQueriesController = new Hono()

rawQueriesController.post('/', jwtMiddleware, async (c) => {
  const user = c.get('user') // User type is now inferred from hono.d.ts
  const { query } = await c.req.json()

  logger.info('Raw query attempt', { userId: user?.id, username: user?.username, query })

  try {
    if (!query) {
      logger.warn('Raw query attempt failed: Query is required', { userId: user?.id, username: user?.username })
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
      logger.warn('Raw query attempt failed: Forbidden DDL/DML operation', { userId: user?.id, username: user?.username, query })
      c.status(403)
      return c.json({ error: 'Only SELECT queries are allowed for raw execution.' })
    }

    const result = await executeRawQuery(query)
    logger.info('Raw query executed successfully', { userId: user?.id, username: user?.username, query, resultCount: result.length })
    return c.json(result)
  } catch (error: any) {
    logger.error('Raw query execution failed', error, { userId: user?.id, username: user?.username, query })
    c.status(500)
    return c.json({ error: error.message })
  }
})

export default rawQueriesController
