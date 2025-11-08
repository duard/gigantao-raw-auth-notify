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

export async function getAllUserPermissions(codUsu: number, userGroups: number[]): Promise<string[]> {
  // Ensure userGroups is not empty to avoid SQL errors with IN clause
  const groupList = userGroups.length > 0 ? userGroups.join(',') : 'NULL';

  const query = `
    SELECT DISTINCT IDACESSO
    FROM TDDPER
    WHERE CODUSU = @codUsu
    UNION
    SELECT DISTINCT IDACESSO
    FROM TDDPER
    WHERE CODGRUPO IN (${groupList})
  `;
  try {
    const pool = await getSqlServer();
    const request = pool.request();
    request.input('codUsu', codUsu);
    const result = await request.query(query);
    const permissions = result.recordset.map((row: any) => row.IDACESSO);
    logger.debug('getAllUserPermissions executed', { codUsu, userGroups, resultCount: permissions.length });
    return permissions;
  } catch (error: any) {
    logger.error('Error in getAllUserPermissions', error, { codUsu, userGroups });
    throw error;
  }
}
