// src/modules/sankhya/tsigru/tsigru.service.ts
import { getSqlServer } from '../../../config/sqlserver'
import logger from '../../../utils/logger'
import { SankhyaGroupDetails } from './tsigru.types'

export async function getGroupDetails(codGrupo: number): Promise<SankhyaGroupDetails | undefined> {
  const query = `
    SELECT
      CODGRUPO,
      NOMEGRUPO,
      ATIVO,
      EMAIL,
      USER_NAME,
      AD_GRUPO_WPP
    FROM TSIGRU
    WHERE CODGRUPO = @codGrupo
  `;
  try {
    const pool = await getSqlServer();
    const request = pool.request();
    request.input('codGrupo', codGrupo);
    const result = await request.query(query);
    logger.debug('getGroupDetails executed', { codGrupo, resultCount: result.recordset.length });
    return result.recordset[0] as SankhyaGroupDetails | undefined;
  } catch (error: any) {
    logger.error('Error in getGroupDetails', error, { codGrupo });
    throw error;
  }
}
