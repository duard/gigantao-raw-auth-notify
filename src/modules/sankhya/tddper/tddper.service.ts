// src/modules/sankhya/tddper/tddper.service.ts
import { getSqlServer } from '../../../config/sqlserver'
import logger from '../../../utils/logger'
import { SankhyaUserPermission } from './tddper.types'

export async function checkUserPermission(
  codUsu: number,
  codGrupo: number,
  idAcesso: string
): Promise<SankhyaUserPermission | undefined> {
  const query = `
    SELECT
      TDDPER.ACESSO AS acesso,
      TDDPER.CODGRUPO AS codGrupo,
      TDDPER.CODUSU AS codUsu,
      TDDPER.IDACESSO AS idAcesso,
      TDDPER.VERSAO AS versao
    FROM TDDPER
    WHERE (TDDPER.IDACESSO = @idAcesso AND TDDPER.CODUSU = @codUsu AND TDDPER.CODGRUPO = @codGrupo)
  `;
  try {
    const pool = await getSqlServer();
    const request = pool.request();
    request.input('codUsu', codUsu);
    request.input('codGrupo', codGrupo);
    request.input('idAcesso', idAcesso);
    const result = await request.query(query);
    logger.debug('checkUserPermission executed', { codUsu, codGrupo, idAcesso, resultCount: result.recordset.length });
    return result.recordset[0] as SankhyaUserPermission | undefined;
  } catch (error: any) {
    logger.error('Error in checkUserPermission', error, { codUsu, codGrupo, idAcesso });
    throw error;
  }
}
