// src/modules/sankhya/tsicfg/tsicfg.service.ts
import { getSqlServer } from '../../../config/sqlserver'
import logger from '../../../utils/logger'
import { SankhyaUserConfiguration } from './tsicfg.types'

export async function getUserConfigurations(
  codUsu: number,
  chave: string,
  tipo: string
): Promise<SankhyaUserConfiguration | undefined> {
  const query = `
    SELECT
      TSICFG.CHAVE AS CHAVE,
      TSICFG.CHAVEPAI AS CHAVEPAI,
      TSICFG.CODUSU AS CODUSU,
      '$$CLOBFIELD(TSICFG.CONFIG)$$' AS CONFIG,
      TSICFG.TIPO AS TIPO
    FROM TSICFG
    WHERE (TSICFG.CHAVE = @chave AND TSICFG.TIPO = @tipo AND TSICFG.CODUSU = @codUsu)
  `;
  try {
    const pool = await getSqlServer();
    const request = pool.request();
    request.input('codUsu', codUsu);
    request.input('chave', chave);
    request.input('tipo', tipo);
    const result = await request.query(query);
    logger.debug('getUserConfigurations executed', { codUsu, chave, tipo, resultCount: result.recordset.length });
    return result.recordset[0] as SankhyaUserConfiguration | undefined;
  } catch (error: any) {
    logger.error('Error in getUserConfigurations', error, { codUsu, chave, tipo });
    throw error;
  }
}
