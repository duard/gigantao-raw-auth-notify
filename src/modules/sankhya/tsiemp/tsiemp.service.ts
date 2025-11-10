// src/modules/sankhya/tsiemp/tsiemp.service.ts
import { getSqlServer } from '../../../config/sqlserver'
import logger from '../../../utils/logger'
import { SankhyaCompanyDetails } from './tsiemp.types'

export async function getCompanyDetails(codEmp: number): Promise<SankhyaCompanyDetails | undefined> {
  const query = `
    SELECT
      CODEMP,
      NOMEEMP,
      RAZAOSOCIAL,
      CGC
    FROM TSIEMP
    WHERE CODEMP = @codEmp
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
