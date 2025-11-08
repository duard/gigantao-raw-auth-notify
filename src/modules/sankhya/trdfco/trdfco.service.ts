// src/modules/sankhya/trdfco/trdfco.service.ts
import { getSqlServer } from '../../../config/sqlserver'
import logger from '../../../utils/logger'
import { SankhyaTrdfco } from './trdfco.types'

export async function getTrdfcoHierarchy(nuControleFilho: number): Promise<SankhyaTrdfco[]> {
  const query = `
    SELECT
      FCO.NUCONTROLE,
      FCO.NUCONTROLEFILHO,
      FCO.ATIVO
    FROM TRDFCO FCO
    WHERE FCO.NUCONTROLEFILHO = @nuControleFilho
  `;
  try {
    const pool = await getSqlServer();
    const request = pool.request();
    request.input('nuControleFilho', nuControleFilho);
    const result = await request.query(query);
    logger.debug('getTrdfcoHierarchy executed', { nuControleFilho, resultCount: result.recordset.length });
    return result.recordset as SankhyaTrdfco[];
  } catch (error: any) {
    logger.error('Error in getTrdfcoHierarchy', error, { nuControleFilho });
    throw error;
  }
}
