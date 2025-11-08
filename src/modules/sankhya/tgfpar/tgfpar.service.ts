// src/modules/sankhya/tgfpar/tgfpar.service.ts
import { getSqlServer } from '../../../config/sqlserver'
import logger from '../../../utils/logger'
import { SankhyaPartnerDetails } from './tgfpar.types'

export async function getPartnerDetails(codParc: number): Promise<SankhyaPartnerDetails | undefined> {
  const query = `
    SELECT
      CODPARC,
      CGC_CPF,
      RAZAOSOCIAL,
      NOMEPARC
    FROM TGFPAR
    WHERE CODPARC = @codParc
  `;
  try {
    const pool = await getSqlServer();
    const request = pool.request();
    request.input('codParc', codParc);
    const result = await request.query(query);
    logger.debug('getPartnerDetails executed', { codParc, resultCount: result.recordset.length });
    return result.recordset[0] as SankhyaPartnerDetails | undefined;
  } catch (error: any) {
    logger.error('Error in getPartnerDetails', error, { codParc });
    throw error;
  }
}
