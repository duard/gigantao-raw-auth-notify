import { getMysqlPool } from '../../config/mysql'
import { getSqlServer } from '../../config/sqlserver'
import { tableMappings } from './mappings'

async function getLastSyncTimestamp(tableName: string): Promise<Date> {
  const pool = await getMysqlPool() // 🔹 usar sempre getMysqlPool()
  const [rows]: any = await pool.query(
    'SELECT last_sync_timestamp FROM integrator_state WHERE table_name = ? ORDER BY id DESC LIMIT 1',
    [tableName]
  )
  if (rows.length === 0) {
    return new Date('1970-01-01')
  }
  return new Date(rows[0].last_sync_timestamp)
}

async function updateLastSyncTimestamp(tableName: string, timestamp: Date) {
  const pool = await getMysqlPool() // 🔹 usar getMysqlPool()
  await pool.query(
    'INSERT INTO integrator_state (table_name, last_sync_timestamp) VALUES (?, ?)',
    [tableName, timestamp]
  )
}

async function syncTable(mapping: typeof tableMappings[0]) {
  const {
    sourceTable,
    destinationTable,
    primaryKey,
    sourcePrimaryKey,
    timestampColumn,
    columns,
  } = mapping

  const lastSync = await getLastSyncTimestamp(sourceTable)
  const pool = await getSqlServer()

  const selectColumns = columns.map((c) => `${c.source} as ${c.destination}`).join(', ')
  const query = `SELECT ${selectColumns} FROM ${sourceTable} WHERE ${timestampColumn} > '${lastSync.toISOString()}'`

  const result = await pool.request().query(query)
  const rows = result.recordset

  if (rows.length === 0) {
    return { table: sourceTable, message: 'No new data to sync.' }
  }

  let maxDtAlter = lastSync
  const mysqlPool = await getMysqlPool() // 🔹 garantir pool inicializado

  for (const row of rows) {
    const keys = Object.keys(row)
    const values = Object.values(row)

    const insertColumns = keys.join(', ')
    const valuePlaceholders = keys.map(() => '?').join(', ')
    const updatePlaceholders = keys
      .filter((k) => k !== primaryKey)
      .map((k) => `${k} = VALUES(${k})`)
      .join(', ')

    const upsertQuery = `
      INSERT INTO ${destinationTable} (${insertColumns})
      VALUES (${valuePlaceholders})
      ON DUPLICATE KEY UPDATE
        ${updatePlaceholders},
        updated_at = CURRENT_TIMESTAMP,
        deleted_at = NULL
    `

    await mysqlPool.query(upsertQuery, values)

    const newTimestamp = row[columns.find(c => c.source === timestampColumn)!.destination]
    if (newTimestamp > maxDtAlter) {
      maxDtAlter = newTimestamp
    }
  }

  await updateLastSyncTimestamp(sourceTable, maxDtAlter)

  return { table: sourceTable, message: `${rows.length} rows synchronized successfully.` }
}

export async function syncAllTables() {
  const results = []
  for (const mapping of tableMappings) {
    const result = await syncTable(mapping)
    results.push(result)
  }
  return results
}
