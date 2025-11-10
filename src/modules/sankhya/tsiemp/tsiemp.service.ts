// src/modules/sankhya/tsiemp/tsiemp.service.ts
import { getSqlServer } from '../../../config/sqlserver'
import logger from '../../../utils/logger'
import { SankhyaCompanyDetails } from './tsiemp.types'

export async function getCompanyDetails(codEmp: number): Promise<SankhyaCompanyDetails | undefined> {
  const query = `
    SELECT
      TSIEMP.CODEMP,
      TSIEMP.NOMEEMP,
      TSIEMP.RAZAOSOCIAL,
      TSIEMP.CGC,
      TSIEMP.INSCEST,
      TSIEMP.INSCRM,
      TSIEMP.TELEFONE,
      TSIEMP.EMAIL,
      TSIEMP.CEP,
      TSIEMP.LOGRADOURO,
      TSIEMP.NUMERO,
      TSIEMP.COMPLEMENTO,
      TSIEMP.BAIRRO,
      TSIEMP.CODCID,
      TSICID.NOMECID,
      TSICID.UF
    FROM TSIEMP
    LEFT JOIN TSICID ON TSIEMP.CODCID = TSICID.CODCID
    WHERE TSIEMP.CODEMP = @codEmp
  `;
  try {
    const pool = await getSqlServer();
    const request = pool.request();
    request.input('codEmp', codEmp);
    const result = await request.query(query);
    logger.debug('getCompanyDetails executed', { codEmp, resultCount: result.recordset.length });
    return result.recordset[0] as SankhyaCompanyDetails | undefined;
  } catch (error: any) {
    logger.error('Error in getCompanyDetails', error, { codEmp });
    throw error;
  }
}
