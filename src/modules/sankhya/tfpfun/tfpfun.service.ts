// src/modules/sankhya/tfpfun/tfpfun.service.ts
import { getSqlServer } from '../../../config/sqlserver'
import logger from '../../../utils/logger'
import { SankhyaEmployeeDetails } from './tfpfun.types'

export async function getEmployeeDetails(codEmp: number, codFunc: number): Promise<SankhyaEmployeeDetails | undefined> {
  const query = `
    SELECT
      CODFUNC,
      NOMEFUNC,
      CPF
    FROM TFPFUN
    WHERE CODEMP = @codEmp AND CODFUNC = @codFunc
  `;
  try {
    const pool = await getSqlServer();
    const request = pool.request();
    request.input('codEmp', codEmp);
    request.input('codFunc', codFunc);
    const result = await request.query(query);
    logger.debug('getEmployeeDetails executed', { codEmp, codFunc, resultCount: result.recordset.length });
    return result.recordset[0] as SankhyaEmployeeDetails | undefined;
  } catch (error: any) {
    logger.error('Error in getEmployeeDetails', error, { codEmp, codFunc });
    throw error;
  }
}
