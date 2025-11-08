import mysql, { Pool, PoolOptions } from 'mysql2/promise';
import { URL } from 'url'; // Import URL to parse the connection string

let mysqlPool: Pool | undefined;

const getMysqlConfig = (): PoolOptions => {
  if (process.env.MYSQL_URL) {
    const mysqlUrl = new URL(process.env.MYSQL_URL);
    return {
      host: mysqlUrl.hostname,
      port: parseInt(mysqlUrl.port || '3306', 10),
      user: mysqlUrl.username,
      password: mysqlUrl.password,
      database: mysqlUrl.pathname.substring(1), // Remove leading '/'
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      ssl: mysqlUrl.searchParams.get('ssl-mode') === 'REQUIRED' ? { rejectUnauthorized: false } : undefined,
    };
  } else {
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

    return {
      host: process.env.MYSQL_HOST || 'mysql',
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || '12345',
      database: getDatabaseName(),
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    };
  }
};

const config = getMysqlConfig();

console.log("🛠️ Tentando criar pool MySQL com configuração:", {
  host: config.host,
  user: config.user,
  database: config.database,
  // password and ssl details are sensitive, so not logging them directly
});

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
