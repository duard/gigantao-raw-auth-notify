// src/modules/sankhya/tddiac/tddiac.service.ts
import { getSqlServer } from '../../../config/sqlserver'
import logger from '../../../utils/logger'
import { SankhyaTddiac } from './tddiac.types'

export async function getTddiacDetails(idAcesso: string): Promise<SankhyaTddiac[]> {
  const query = `
    SELECT TOP 501
      TDDIAC.DESCRICAO AS descricao,
      TDDIAC.IDACESSO AS idAcesso,
      TDDIAC.SEQUENCIA AS sequencia,
      TDDIAC.SIGLA AS sigla
    FROM TDDIAC
    WHERE (TDDIAC.IDACESSO = @idAcesso)
    ORDER BY TDDIAC.SEQUENCIA
  `;
  try {
    const pool = await getSqlServer();
    const request = pool.request();
    request.input('idAcesso', idAcesso);
    const result = await request.query(query);
    logger.debug('getTddiacDetails executed', { idAcesso, resultCount: result.recordset.length });
    return result.recordset as SankhyaTddiac[];
  } catch (error: any) {
    logger.error('Error in getTddiacDetails', error, { idAcesso });
    throw error;
  }
}
