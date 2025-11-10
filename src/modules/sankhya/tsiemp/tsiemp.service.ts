// src/modules/sankhya/tsiemp/tsiemp.service.ts
import { getSqlServer } from '../../../config/sqlserver';
import logger from '../../../utils/logger';
import { SankhyaCompanyDetails } from './tsiemp.types';

export async function getCompanyDetails(codEmp: number): Promise<SankhyaCompanyDetails | undefined> {
  const query = `
    SELECT
      TSIEMP.CODEMP,
      TSIEMP.NOMEFANTASIA,
      TSIEMP.RAZAOSOCIAL,
      TSIEMP.CGC,
      TSIEMP.INSCESTAD,
      TSIEMP.INSCMUN,
      TSIEMP.TELEFONE,
      TSIEMP.EMAIL,
      TSIEMP.CEP,
      TSIEMP.NUMEND,
      TSIEMP.COMPLEMENTO,
      TSIEMP.CODBAI,
      TSIEMP.CODCID,
      TSIEMP.CODMUN,
      TSICID.NOMECID,
      TSIUFS.UF AS UF_ABBR,
      TSIUFS.DESCRICAO AS UF_NAME,
      TSIBAI.NOMEBAI AS BAIRRO
    FROM TSIEMP
    LEFT JOIN TSICID ON TSIEMP.CODCID = TSICID.CODCID
    LEFT JOIN TSIUFS ON TSICID.UF = TSIUFS.CODUF
    LEFT JOIN TSIBAI ON TSIEMP.CODBAI = TSIBAI.CODBAI
    WHERE TSIEMP.CODEMP = @codEmp
  `;
  try {
    const pool = await getSqlServer();
    const request = pool.request();
    request.input('codEmp', codEmp);
    const result = await request.query(query);
    logger.debug('getCompanyDetails executed', { codEmp, resultCount: result.recordset.length });
    const companyDetails = result.recordset[0] as SankhyaCompanyDetails | undefined;

    if (companyDetails) {
      companyDetails.address = {
        CEP: companyDetails.CEP || '',
        NUMERO: companyDetails.NUMEND || '',
        COMPLEMENTO: companyDetails.COMPLEMENTO,
        BAIRRO: companyDetails.BAIRRO || '',
        CODCID: companyDetails.CODCID || 0,
        NOMECID: companyDetails.NOMECID || '',
        UF: companyDetails.UF_ABBR || '',
      };
    }
    return companyDetails;
  } catch (error: any) {
    logger.error('Error in getCompanyDetails', error, { codEmp });
    throw error;
  }
}
