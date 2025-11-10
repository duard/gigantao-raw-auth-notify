
import { getSqlServer } from '../../../config/sqlserver';
import logger from '../../../utils/logger';
import { SankhyaUserPermission } from './tsiacs.types';

/**
 * Fetches all permissions for a user and their groups from TSIACS table.
 * @param codUsu - The user's code.
 * @param groupCods - An array of group codes the user belongs to.
 * @returns A promise that resolves to an array of permission strings.
 */
export async function getAllUserPermissions(codUsu: number, groupCods: number[]): Promise<string[]> {
  const sql = await getSqlServer();
  if (!sql) {
    logger.error('SQL Server connection failed while fetching user permissions.');
    throw new Error('Erro ao conectar ao servidor SQL.');
  }

  // Ensure groupCods is not empty to prevent SQL errors
  if (groupCods.length === 0) {
    logger.warn('No group codes provided for user, permissions check might be incomplete.', { codUsu });
    // Optionally, you might want to fetch user-specific permissions if groupCods is empty
    // For now, we return an empty array if no groups are provided.
    return [];
  }

  // Construct the IN clause for the group codes
  const groupCodsInClause = groupCods.map(cod => `'${cod}'`).join(',');

  try {
    const query = `
      SELECT *
      FROM TSIACS
      WHERE CODUSU = ${codUsu} OR CODGRUPO IN (${groupCodsInClause})
    `;
    logger.debug('Executing permission query:', { query });
    const result = await sql.query(query);
    logger.debug('Permission query result:', { recordset: result.recordset });
    const permissions: SankhyaUserPermission[] = result.recordset;

    // Process the permissions to extract the names of the columns that are set to 'S'
    const activePermissions = permissions.flatMap(p =>
      Object.entries(p)
        .filter(([key, value]) => key.startsWith('AD_') && value === 'S')
        .map(([key]) => key)
    );

    // Remove duplicates and return
    return [...new Set(activePermissions)];
  } catch (error: any) {
    logger.error('Error fetching user permissions from TSIACS', error, { codUsu, groupCods });
    throw new Error('Erro ao buscar permissões do usuário.');
  }
}
