import { getSqlServer } from '../../../config/sqlserver'

export async function executeRawQuery(query: string) {
  const pool = await getSqlServer()
  const result = await pool.request().query(query)
  return result.recordset
}
