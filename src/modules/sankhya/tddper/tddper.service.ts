import { getSqlServer } from '../../../config/sqlserver';
import logger from '../../../utils/logger';
import { SankhyaUserPermission } from './tddper.types';

export async function getUserPermissions(codUsu: number): Promise<any[]> {
  const query = `
    SELECT
      *
    FROM TDDPER
    WHERE CODUSU = @codUsu
  `;
  try {
    const pool = await getSqlServer();
    const request = pool.request();
    request.input('codUsu', codUsu);
    const result = await request.query(query);
    logger.debug('getUserPermissions executed', { codUsu, resultCount: result.recordset.length, recordset: result.recordset });
    return result.recordset;
  } catch (error: any) {
    logger.error('Error in getUserPermissions', error, { codUsu });
    throw error;
  }
}