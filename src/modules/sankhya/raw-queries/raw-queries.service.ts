import { getSqlServer } from '../../../config/sqlserver'
import logger from '../../../utils/logger' // Import the logger

export async function executeRawQuery(query: string) {
  logger.debug('Executing raw SQL query', { query })
  try {
    const pool = await getSqlServer()
    const result = await pool.request().query(query)
    logger.debug('Raw SQL query executed successfully', { query, rowsAffected: result.rowsAffected })
    return result.recordset
  } catch (error: any) {
    logger.error('Error executing raw SQL query', error, { query })
    throw error // Re-throw the error so the controller can handle it
  }
}
