// src/modules/sankhya/tsigpu/tsigpu.service.ts
import { getSqlServer } from '../../../config/sqlserver'
import logger from '../../../utils/logger'
import { SankhyaUserGroup } from './tsigpu.types'

export async function getUserGroups(codUsu: number): Promise<SankhyaUserGroup[]> {
  const query = `
    SELECT TOP 501
      TSIGPU.CODGRUPO AS CODGRUPO,
      TSIGPU.CODUSU AS CODUSU,
      TSIGPU.DATAFIM AS DATAFIM,
      TSIGPU.DATAINICIO AS DATAINICIO,
      TSIGPU.REPASSAR AS REPASSAR,
      TSIGPU.SEQUENCIA AS SEQUENCIA
    FROM TSIGPU WITH (NOLOCK)
    WHERE (TSIGPU.CODUSU = @codUsu)
  `;
  try {
    const pool = await getSqlServer();
    const request = pool.request();
    request.input('codUsu', codUsu);
    const result = await request.query(query);
    logger.debug('getUserGroups executed', { codUsu, resultCount: result.recordset.length });
    return result.recordset as SankhyaUserGroup[];
  } catch (error: any) {
    logger.error('Error in getUserGroups', error, { codUsu });
    throw error;
  }
}
