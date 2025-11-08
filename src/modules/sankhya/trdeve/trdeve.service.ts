// src/modules/sankhya/trdeve/trdeve.service.ts
import { getSqlServer } from '../../../config/sqlserver'
import logger from '../../../utils/logger'
import { SankhyaTrdeve } from './trdeve.types'

export async function getTrdeveByNucontrole(nuControle: number): Promise<SankhyaTrdeve | undefined> {
  const query = `
    SELECT
      NUCONTROLE,
      ONCLICK
    FROM TRDEVE
    WHERE NUCONTROLE = @nuControle
  `;
  try {
    const pool = await getSqlServer();
    const request = pool.request();
    request.input('nuControle', nuControle);
    const result = await request.query(query);
    logger.debug('getTrdeveByNucontrole executed', { nuControle, resultCount: result.recordset.length });
    return result.recordset[0] as SankhyaTrdeve | undefined;
  } catch (error: any) {
    logger.error('Error in getTrdeveByNucontrole', error, { nuControle });
    throw error;
  }
}
