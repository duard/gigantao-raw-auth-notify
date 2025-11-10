import { getSqlServer } from '../../../config/sqlserver';
import logger from '../../../utils/logger';
import { SankhyaUserPermission } from './tddper.types';

export async function getUserPermissions(codUsu: number): Promise<SankhyaUserPermission[]> {
  const query = `
    SELECT
      NOMEMODULO
    FROM TDDPER
    WHERE CODUSU = @codUsu
  `;
  try {
    const pool = await getSqlServer();
    const request = pool.request();
    request.input('codUsu', codUsu);
    const result = await request.query(query);
    logger.debug('getUserPermissions executed', { codUsu, resultCount: result.recordset.length });
    return result.recordset as SankhyaUserPermission[];
  } catch (error: any) {
    logger.error('Error in getUserPermissions', error, { codUsu });
    throw error;
  }
}