// src/modules/sankhya/tgfpes/tgfpes.service.ts
import { getSqlServer } from '../../../config/sqlserver'
import logger from '../../../utils/logger'
import { SankhyaPersonDetails } from './tgfpes.types'

export async function getPersonDetails(codPessoa: number): Promise<SankhyaPersonDetails | undefined> {
  const query = `
    SELECT
      TGFPES.CODPESSOA,
      TGFPES.NOMEFANTASIA,
      TGFPES.RAZAOSOCIAL,
      TGFPES.CGC_CPF,
      TGFPES.CEP,
      TGFPES.CODEND AS CODEND,
      TGFPES.ENDEREC AS LOGRADOURO,
      TGFPES.NUMERO,
      TGFPES.COMPLEMENTO,
      TGFPES.BAIRRO,
      TGFPES.CODCID,
      TSICID.NOMECID,
      TSICID.UF
    FROM TGFPES
    LEFT JOIN TSICID ON TGFPES.CODCID = TSICID.CODCID
    WHERE TGFPES.CODPESSOA = @codPessoa
  `;
  try {
    const pool = await getSqlServer();
    const request = pool.request();
    request.input('codPessoa', codPessoa);
    const result = await request.query(query);
    logger.debug('getPersonDetails executed', { codPessoa, resultCount: result.recordset.length });
    return result.recordset[0] as SankhyaPersonDetails | undefined;
  } catch (error: any) {
    logger.error('Error in getPersonDetails', error, { codPessoa });
    throw error;
  }
}
