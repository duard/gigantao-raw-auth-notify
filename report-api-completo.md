# 🚀 API Relatórios (SQL Server → MySQL + MinIO + Redis + BullMQ + wkhtmltopdf + Hono)

Este arquivo contém **tudo**: arquitetura, estrutura de pastas, `.env` exemplos, `docker-compose.yml`, `Dockerfile`, `package.json`, código TypeScript (API, filas, worker), SQL para MySQL, templates, utilitários, e instruções para rodar localmente com Docker.  
Copie o conteúdo dos blocos de código para os respetivos arquivos do seu repositório.

---

## Sumário
1. Visão geral
2. Estrutura do projeto
3. .env (exemplos)
4. docker-compose.yml
5. Dockerfile
6. package.json
7. tsconfig.json
8. Código TypeScript (arquivos principais)
9. templates e utilitários
10. migrations / SQL
11. Comandos úteis
12. Boas práticas

---

## 1) Visão geral

Fluxo:
1. API recebe requisição para gerar relatório (usuário, filtros).
2. API grava um registro inicial em MySQL (audit) e enfileira job em BullMQ (Redis).
3. Worker consome job, consulta dados no SQL Server (raw SQL), gera HTML, converte para PDF usando `wkhtmltopdf`.
4. Worker envia o PDF para MinIO (S3-compatible), atualiza registro em MySQL com `s3_path` e `status`, publica notificação via Redis e/ou envia e-mail.
5. Usuário faz download via presigned URL do MinIO.

---

## 2) Estrutura do projeto

```
api-relatorios/
├── src/
│   ├── index.ts
│   ├── server.ts
│   ├── routes/
│   │   ├── reports.route.ts
│   │   └── health.route.ts
│   ├── jobs/
│   │   ├── report.queue.ts
│   │   └── report.worker.ts
│   ├── services/
│   │   ├── sqlserver.service.ts
│   │   ├── mysql.service.ts
│   │   ├── minio.service.ts
│   │   └── pdf.service.ts
│   └── utils/
│       └── logger.ts
├── migrations/
│   └── mysql_init.sql
├── docker-compose.yml
├── Dockerfile
├── .env.example
├── package.json
└── tsconfig.json
```

---

## 3) `.env.example`

```
# API
NODE_ENV=production
PORT=3000

# Redis (BullMQ)
REDIS_URL=redis://redis:6379

# SQLServer (fonte de dados)
MSSQL_HOST=mssql
MSSQL_PORT=1433
MSSQL_USER=sa
MSSQL_PASSWORD=YourStrong!Passw0rd
MSSQL_DATABASE=ReportDB

# MySQL (audit/logs)
MYSQL_HOST=mysql
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=example
MYSQL_DATABASE=audits

# MinIO (S3)
MINIO_ENDPOINT=minio
MINIO_PORT=9000
MINIO_ACCESS_KEY=minioadmin
MINIO_SECRET_KEY=minioadmin
MINIO_BUCKET=reports
MINIO_USE_SSL=false

# wkhtmltopdf
WKHTMLTOPDF_PATH=/usr/local/bin/wkhtmltopdf

# Email (opcional)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=mail@example.com
SMTP_PASS=supersecret

# Misc
APP_BASE_URL=http://localhost:3000
```

---

## 4) `docker-compose.yml`

```yaml
version: '3.9'
services:
  redis:
    image: redis:7-alpine
    command: ["redis-server", "--save", "", "--appendonly", "no"]
    ports:
      - "6379:6379"
    volumes:
      - redisdata:/data

  minio:
    image: minio/minio:RELEASE.2025-01-01T00-00-00Z
    environment:
      MINIO_ROOT_USER: minioadmin
      MINIO_ROOT_PASSWORD: minioadmin
    command: server /data
    ports:
      - "9000:9000"
      - "9001:9001"
    volumes:
      - miniodata:/data

  mssql:
    image: mcr.microsoft.com/mssql/server:2022-latest
    environment:
      SA_PASSWORD: "YourStrong!Passw0rd"
      ACCEPT_EULA: "Y"
    ports:
      - "1433:1433"
    healthcheck:
      test: ["CMD-SHELL", "/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P YourStrong!Passw0rd -Q 'select 1' || exit 1"]
    volumes:
      - mssqldata:/var/opt/mssql

  mysql:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: example
      MYSQL_DATABASE: audits
    ports:
      - "3306:3306"
    volumes:
      - mysqldata:/var/lib/mysql

  api:
    build:
      context: .
      target: production
    container_name: report-api
    env_file:
      - .env
    ports:
      - "3000:3000"
    depends_on:
      - redis
      - mssql
      - mysql
      - minio

  worker:
    build:
      context: .
      target: production
    container_name: report-worker
    env_file:
      - .env
    command: ["node", "dist/jobs/report.worker.js"]
    depends_on:
      - redis
      - mssql
      - mysql
      - minio

volumes:
  redisdata:
  miniodata:
  mssqldata:
  mysqldata:
```

---

## 5) `Dockerfile`

```dockerfile
# Stage base
FROM node:20-slim AS base
RUN apt-get update && apt-get install -y curl ca-certificates wget gnupg build-essential python3 make
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --production
COPY . .

# Stage build (se usar TS)
FROM base AS build
RUN npm run build

# Runtime
FROM node:20-slim AS production
RUN apt-get update && apt-get install -y wkhtmltopdf xvfb fontconfig libxrender1 libxext6
WORKDIR /app
COPY --from=build /app/dist /app/dist
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/package.json /app/package.json
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "dist/server.js"]
```

---

## 6) `package.json`

```json
{
  "name": "report-api",
  "version": "1.0.0",
  "scripts": {
    "dev": "ts-node-dev --respawn src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "worker": "node dist/jobs/report.worker.js"
  },
  "dependencies": {
    "hono": "^3.0.0",
    "bullmq": "^2.0.0",
    "ioredis": "^5.0.0",
    "mssql": "^10.0.0",
    "mysql2": "^3.0.0",
    "minio": "^7.0.0",
    "nodemailer": "^6.9.0",
    "pug": "^3.0.2",
    "ajv": "^8.12.0",
    "uuid": "^9.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "ts-node-dev": "^2.0.0",
    "@types/node": "^20.0.0"
  }
}
```

---

## 7) `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true
  }
}
```

---

## 8) Código TypeScript - arquivos principais

### `src/server.ts`

```ts
import 'dotenv/config';
import { Hono } from 'hono';
import reportsRouter from './routes/reports.route';
import healthRouter from './routes/health.route';

const app = new Hono();

app.route('/', reportsRouter);
app.route('/health', healthRouter);

const port = parseInt(process.env.PORT || '3000', 10);
app.get('/', (c) => c.text('Report API'));
app.fire();
(async () => {
  console.log(`Listening on ${port}`);
  await app.listen({ port });
})();
```

---

### `src/routes/health.route.ts`

```ts
import { Hono } from 'hono';
const router = new Hono();

router.get('/ping', (c) => c.json({ status: 'ok', time: new Date().toISOString() }));

export default router;
```

---

### `src/routes/reports.route.ts`

```ts
import { Hono } from 'hono';
import { v4 as uuidv4 } from 'uuid';
import { pdfQueue } from '../jobs/report.queue';
import { auditInsert } from '../services/mysql.service';

const router = new Hono();

router.post('/api/reports', async (c) => {
  const body = await c.req.json();
  const { user_id, report_name, params } = body;
  const jobId = uuidv4();

  // Audit insert
  await auditInsert({
    user_id,
    report_name,
    job_id: jobId,
    status: 'queued',
    meta: params || {}
  });

  await pdfQueue.add('generate', {
    jobId, user_id, report_name, params
  }, { attempts: 3, backoff: { type: 'exponential', delay: 5000 } });

  return c.json({ status: 'queued', jobId });
});

export default router;
```

---

### `src/jobs/report.queue.ts`

```ts
import { Queue, QueueScheduler } from 'bullmq';
import IORedis from 'ioredis';

const connection = new IORedis(process.env.REDIS_URL || 'redis://redis:6379');

export const pdfQueue = new Queue('pdf-queue', { connection });
export const pdfQueueScheduler = new QueueScheduler('pdf-queue', { connection });
```

---

### `src/jobs/report.worker.ts`

```ts
import 'dotenv/config';
import { Worker } from 'bullmq';
import IORedis from 'ioredis';
import { rawMSSQL } from '../services/sqlserver.service';
import { htmlToPdfBuffer } from '../services/pdf.service';
import { ensureBucket, minioPutObject, getPresignedUrl } from '../services/minio.service';
import { auditUpdate } from '../services/mysql.service';

const connection = new IORedis(process.env.REDIS_URL || 'redis://redis:6379');

const worker = new Worker('pdf-queue', async job => {
  const { jobId, user_id, report_name, params } = job.data;
  try {
    // 1) Query SQL Server (raw)
    const sql = `-- customize per report_name
      SELECT TOP 100 * FROM SomeTable WHERE CompanyId = ${params.companyId}`;
    const rows = await rawMSSQL(sql);

    // 2) Render HTML
    const html = renderSimpleTemplate(report_name, rows, params);

    // 3) Convert HTML -> PDF
    const pdfBuffer = await htmlToPdfBuffer(html);

    // 4) Save on MinIO
    const bucket = process.env.MINIO_BUCKET || 'reports';
    await ensureBucket(bucket);
    const objectName = `${report_name}/${params.companyId}/${jobId}.pdf`;
    await minioPutObject(bucket, objectName, pdfBuffer);

    // 5) Update audit
    await auditUpdate(jobId, { status: 'completed', s3_path: objectName });

    // 6) Publish notification
    connection.publish('reports_channel', JSON.stringify({ jobId, user_id, status: 'completed', s3_path: objectName }));

    return { s3_path: objectName };
  } catch (err:any) {
    await auditUpdate(jobId, { status: 'failed', meta: JSON.stringify({ error: err.message }) });
    connection.publish('reports_channel', JSON.stringify({ jobId, user_id, status: 'failed', error: err.message }));
    throw err;
  }
}, { connection });

function renderSimpleTemplate(title:string, rows:any[], params:any) {
  const rowsHtml = rows.map(r => `<tr><td>${r.id}</td><td>${r.name ?? ''}</td></tr>`).join('');
  return `<!doctype html><html><head><meta charset="utf-8"><title>${title}</title></head><body><h1>${title}</h1><table>${rowsHtml}</table></body></html>`;
}
```

---

## 9) Serviços auxiliares (MySQL, MSSQL, MinIO, PDF)

### `src/services/sqlserver.service.ts`

```ts
import sql from 'mssql';

const config = {
  user: process.env.MSSQL_USER,
  password: process.env.MSSQL_PASSWORD,
  server: process.env.MSSQL_HOST,
  database: process.env.MSSQL_DATABASE,
  port: parseInt(process.env.MSSQL_PORT || '1433',10),
  options: { encrypt: false, trustServerCertificate: true },
  pool: { max: 20, min: 0, idleTimeoutMillis: 30000 }
};

export const mssqlPool = new sql.ConnectionPool(config)
  .connect()
  .then(p => { console.log('MSSQL connected'); return p; })
  .catch(err => { console.error(err); process.exit(1); });

export async function rawMSSQL(query:string, inputs:any[] = []) {
  const pool = await mssqlPool;
  const req = pool.request();
  inputs.forEach((v,i) => req.input(`p${i}`, v));
  const res = await req.query(query);
  return res.recordset;
}
```

---

### `src/services/mysql.service.ts`

```ts
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export async function auditInsert(payload:{ user_id:string|number, report_name:string, job_id:string, status:string, s3_path?:string, meta?:object }) {
  const sql = `INSERT INTO report_requests (user_id, report_name, job_id, status, s3_path, meta, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())`;
  const params = [payload.user_id, payload.report_name, payload.job_id, payload.status, payload.s3_path||null, JSON.stringify(payload.meta||{})];
  const [res] = await pool.execute(sql, params);
  return res;
}

export async function auditUpdate(job_id:string, update:any) {
  const sets:string[] = [];
  const params:any[] = [];
  Object.entries(update).forEach(([k,v]) => { sets.push(`${k} = ?`); params.push(v); });
  params.push(job_id);
  const sql = `UPDATE report_requests SET ${sets.join(', ')} WHERE job_id = ?`;
  const [res] = await pool.execute(sql, params);
  return res;
}
```

---

### `src/services/minio.service.ts`

```ts
import { Client } from 'minio';
import fs from 'fs';

export const minioClient = new Client({
  endPoint: process.env.MINIO_ENDPOINT || 'minio',
  port: parseInt(process.env.MINIO_PORT || '9000', 10),
  useSSL: (process.env.MINIO_USE_SSL === 'true'),
  accessKey: process.env.MINIO_ACCESS_KEY,
  secretKey: process.env.MINIO_SECRET_KEY
});

export async function ensureBucket(bucketName:string) {
  try {
    const exists = await minioClient.bucketExists(bucketName);
    if (!exists) await minioClient.makeBucket(bucketName);
  } catch (err) {
    // if bucketExists throws, try to create
    try { await minioClient.makeBucket(bucketName); } catch(e){ }
  }
}

export async function minioPutObject(bucket:string, objectName:string, buffer:Buffer) {
  return minioClient.putObject(bucket, objectName, buffer);
}

export async function getPresignedUrl(bucket:string, objectName:string, expirySec = 3600) {
  return minioClient.presignedGetObject(bucket, objectName, expirySec);
}
```

---

### `src/services/pdf.service.ts`

```ts
import { exec } from 'child_process';
import fs from 'fs/promises';

export async function htmlToPdfBuffer(html:string) {
  const tmpHtml = `/tmp/${Date.now()}-${Math.random().toString(36).slice(2)}.html`;
  const tmpPdf = `/tmp/${Date.now()}-${Math.random().toString(36).slice(2)}.pdf`;
  await fs.writeFile(tmpHtml, html, 'utf-8');
  const cmd = `${process.env.WKHTMLTOPDF_PATH || 'wkhtmltopdf'} --enable-local-file-access ${tmpHtml} ${tmpPdf}`;
  await new Promise<void>((resolve, reject) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err) return reject(new Error(stderr || err.message));
      resolve();
    });
  });
  const buffer = await fs.readFile(tmpPdf);
  await fs.unlink(tmpHtml).catch(()=>{});
  await fs.unlink(tmpPdf).catch(()=>{});
  return buffer;
}
```

---

## 10) migrations/mysql_init.sql

```sql
CREATE TABLE IF NOT EXISTS report_requests (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL,
  report_name VARCHAR(255) NOT NULL,
  job_id VARCHAR(36) NOT NULL UNIQUE,
  status VARCHAR(50) NOT NULL,
  s3_path VARCHAR(1024),
  meta JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);
CREATE INDEX idx_report_status ON report_requests(status);
```

---

## 11) Comandos úteis

- Subir ambiente: `docker compose up --build -d`
- Ver logs API: `docker logs -f report-api`
- Rodar worker local: `npm run worker`
- Rodar migrations MySQL: conecte no container MySQL e execute `migrations/mysql_init.sql`
- Testar endpoint:  
  ```bash
  curl -X POST http://localhost:3000/api/reports    -H "Content-Type: application/json"    -d '{"user_id":"123","report_name":"folha_ponto","params":{"companyId":1,"month":"2025-10"}}'
  ```

---

## 12) Boas práticas / notas finais

- Use pools adequados (MSSQL/MYSQL) e limite conexões.  
- Evite executar consultas SQL massivas sem índices; crie índices no SQL Server.  
- Certifique-se que `wkhtmltopdf` tem dependências do sistema (fonts, libssl, etc.).  
- Use presigned URLs do MinIO para downloads públicos temporários.  
- Adicione retries/backoff na fila (já demonstrado).  
- Implemente autenticação/authorization no endpoint para controlar quem pode requisitar relatórios.  
- Adicione monitoração (Prometheus) nos workers e na API.

---

### Fim — arquivo pronto para uso.
