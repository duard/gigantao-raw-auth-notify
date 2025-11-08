// src/modules/sankhya/trdpco/trdpco.service.ts
import { getSqlServer } from '../../../config/sqlserver'
import logger from '../../../utils/logger'
import { SankhyaTrdpco } from './trdpco.types'

export async function getTrdpcoProperties(nuControle: number, names: string[]): Promise<SankhyaTrdpco[]> {
  // Constructing IN clause for names array
  const nameList = names.map(name => `'${name}'`).join(',');
  const query = `
    SELECT
      PCO.NUCONTROLE,
      PCO.NOME,
      PCO.VALOR
    FROM TRDPCO PCO
    WHERE PCO.NUCONTROLE = @nuControle AND PCO.NOME IN (${nameList})
  `;
  try {
    const pool = await getSqlServer();
    const request = pool.request();
    request.input('nuControle', nuControle);
    const result = await request.query(query);
    logger.debug('getTrdpcoProperties executed', { nuControle, names, resultCount: result.recordset.length });
    return result.recordset as SankhyaTrdpco[];
  } catch (error: any) {
    logger.error('Error in getTrdpcoProperties', error, { nuControle, names });
    throw error;
  }
}
