// src/modules/sankhya/tfpfun/tfpfun.service.ts
import { getSqlServer } from '../../../config/sqlserver'
import logger from '../../../utils/logger'
import { SankhyaEmployeeDetails } from './tfpfun.types'

export async function getEmployeeDetails(codEmp: number, codFunc: number): Promise<SankhyaEmployeeDetails | undefined> {
  const query = `
    SELECT
      TFPFUN.CODFUNC,
      TFPFUN.NOMEFUNC,
      TFPFUN.CPF,
      TFPFUN.PERTENCEDP,
      TFPFUN.NUMEND,
      TFPFUN.COMPLEMENTO,
      TFPFUN.CEP,
      TFPFUN.TELEFONE,
      TFPFUN.EMAIL,
      TFPFUN.CODBAI,
      TFPFUN.CODCID,
      TSICID.NOMECID,
      TSIUFS.UF AS UF_ABBR,
      TSIUFS.DESCRICAO AS UF_NAME,
      TSIBAI.NOMEBAI AS BAIRRO
    FROM TFPFUN
    LEFT JOIN TSICID ON TFPFUN.CODCID = TSICID.CODCID
    LEFT JOIN TSIUFS ON TSICID.UF = TSIUFS.CODUF
    LEFT JOIN TSIBAI ON TFPFUN.CODBAI = TSIBAI.CODBAI
    WHERE TFPFUN.CODEMP = @codEmp AND TFPFUN.CODFUNC = @codFunc
  `;
  try {
    const pool = await getSqlServer();
    const request = pool.request();
    request.input('codEmp', codEmp);
    request.input('codFunc', codFunc);
    const result = await request.query(query);
    logger.debug('getEmployeeDetails executed', { codEmp, codFunc, resultCount: result.recordset.length });
    const employeeDetails = result.recordset[0] as SankhyaEmployeeDetails | undefined;

    if (employeeDetails) {
      employeeDetails.address = {
        CEP: employeeDetails.CEP || '',
        NUMERO: employeeDetails.NUMEND || '',
        COMPLEMENTO: employeeDetails.COMPLEMENTO || null,
        BAIRRO: employeeDetails.BAIRRO || '',
        CODCID: employeeDetails.CODCID || 0,
        NOMECID: employeeDetails.NOMECID || '',
        UF: employeeDetails.UF_ABBR || '',
      };
    }
    return employeeDetails;
  } catch (error: any) {
    logger.error('Error in getEmployeeDetails', error, { codEmp, codFunc });
    throw error;
  }
}
