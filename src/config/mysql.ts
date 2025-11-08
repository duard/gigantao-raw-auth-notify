import mysql, { Pool } from 'mysql2/promise';

const getDatabaseName = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return process.env.MYSQL_DATABASE_PROD;
    case 'development':
      return process.env.MYSQL_DATABASE_DEV;
    case 'testg':
      return process.env.MYSQL_DATABASE_TEST;
    default:
      return process.env.MYSQL_DATABASE_DEV;
  }
};

const config = {
  host: process.env.MYSQL_HOST || 'mysql',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '12345',
  database: getDatabaseName(),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

console.log("🛠️ Tentando criar pool MySQL com configuração:", config);

let mysqlPool: Pool | undefined;

export const initMysqlPool = async (): Promise<Pool> => {
  if (mysqlPool) return mysqlPool;

  for (let i = 0; i < 5; i++) {
    try {
      mysqlPool = mysql.createPool(config);
      const conn = await mysqlPool.getConnection();
      console.log("✅ Conexão MySQL estabelecida com sucesso!");
      conn.release();
      return mysqlPool;
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(`❌ Falha na conexão MySQL (tentativa ${i + 1}/5): ${err.message}`);
      } else {
        console.error(`❌ Falha na conexão MySQL (tentativa ${i + 1}/5):`, err);
      }
      await new Promise(res => setTimeout(res, 2000));
    }
  }

  console.error("💥 Não foi possível conectar ao MySQL. Verifique host, user, senha e network.");
  process.exit(1);
};

// Função segura para obter o pool já inicializado
export const getMysqlPool = async (): Promise<Pool> => {
  if (!mysqlPool) {
    return initMysqlPool()
  }
  return mysqlPool
}


export { mysqlPool };
