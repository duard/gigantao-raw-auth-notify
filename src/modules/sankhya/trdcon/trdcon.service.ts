// src/modules/sankhya/trdcon/trdcon.service.ts
import { getSqlServer } from '../../../config/sqlserver'
import logger from '../../../utils/logger'
import { SankhyaTrdcon } from './trdcon.types'

export async function getTrdconByNucontrole(nuControle: number): Promise<SankhyaTrdcon | undefined> {
  const query = `
    SELECT
      CON.NUCONTROLE,
      CON.TIPOCONTROLE,
      CON.DESCRCONTROLE,
      CON.ADICIONAL,
      CON.CONTROLE,
      EVE.ONCLICK,
      CON.NOME
    FROM TRDCON CON
    LEFT JOIN TRDEVE EVE ON (EVE.NUCONTROLE = CON.NUCONTROLE)
    WHERE CON.NUCONTROLE = @nuControle
  `;
  try {
    const pool = await getSqlServer();
    const request = pool.request();
    request.input('nuControle', nuControle);
    const result = await request.query(query);
    logger.debug('getTrdconByNucontrole executed', { nuControle, resultCount: result.recordset.length });
    return result.recordset[0] as SankhyaTrdcon | undefined;
  } catch (error: any) {
    logger.error('Error in getTrdconByNucontrole', error, { nuControle });
    throw error;
  }
}
