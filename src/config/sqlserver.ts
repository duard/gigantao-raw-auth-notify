import mssql from 'mssql'

const sqlServerPool = new mssql.ConnectionPool({
  user: process.env.SQLSERVER_USER,
  password: process.env.SQLSERVER_PASSWORD,
  server: process.env.SQLSERVER_SERVER as string,
  database: process.env.SQLSERVER_DATABASE,
  options: { encrypt: false },
})

export const getSqlServer = async () => {
  if (!sqlServerPool.connected) await sqlServerPool.connect()
  return sqlServerPool
}