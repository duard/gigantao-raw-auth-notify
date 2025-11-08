// src/modules/sankhya/tsipvi/tsipvi.service.ts
import { getSqlServer } from '../../../config/sqlserver'
import logger from '../../../utils/logger'
import { SankhyaTsipvi } from './tsipvi.types'

export async function getTsipviConfig(codUsu: number): Promise<SankhyaTsipvi | undefined> {
  const query = `
    SELECT TOP 2
      TSIPVI.CODUSU AS CODUSU,
      TSIPVI.CONFIG AS CONFIG
    FROM TSIPVI
    WHERE (CODUSU = @codUsu)
  `;
  try {
    const pool = await getSqlServer();
    const request = pool.request();
    request.input('codUsu', codUsu);
    const result = await request.query(query);
    logger.debug('getTsipviConfig executed', { codUsu, resultCount: result.recordset.length });
    return result.recordset[0] as SankhyaTsipvi | undefined;
  } catch (error: any) {
    logger.error('Error in getTsipviConfig', error, { codUsu });
    throw error;
  }
}
