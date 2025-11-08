# 🚀 Notification & Auth API (Hono + SQL Raw + SQLServer + MySQL)

Este projeto é uma API moderna em **TypeScript** usando o **Hono** como framework principal, com autenticação integrada via **SQL Server** e registro de notificações no **MySQL**.  
Ele serve como **núcleo unificado** para autenticação de usuários e gerenciamento de notificações (email, logs, jobs pesados, etc).

---

## 🧩 Estrutura do Projeto

```
notification-auth-api/
├── src/
│   ├── app.ts
│   ├── server.ts
│   ├── config/
│   │   ├── env.ts
│   │   ├── sqlserver.ts
│   │   └── mysql.ts
│   ├── routes/
│   │   ├── auth.routes.ts
│   │   └── notifications.routes.ts
│   ├── controllers/
│   │   ├── auth.controller.ts
│   │   └── notifications.controller.ts
│   ├── services/
│   │   ├── auth.service.ts
│   │   ├── notification.service.ts
│   │   └── email.service.ts
│   ├── utils/
│   │   ├── jwt.ts
│   │   ├── hash.ts
│   │   └── response.ts
│   └── jobs/
│       ├── queue.ts
│       └── worker.ts
├── .env
├── package.json
├── tsconfig.json
└── docker-compose.yml
```

---

## ⚙️ Dependências Principais

```bash
npm install hono mssql mysql2 jsonwebtoken bcrypt dotenv bullmq nodemailer
npm install -D typescript tsx @types/node
```

---

## 🧱 Configuração do Ambiente

**.env**
```
PORT=31033

# SQL Server (Auth)
SQLSERVER_USER=sa
SQLSERVER_PASSWORD=12345
SQLSERVER_SERVER=sqlserver
SQLSERVER_DATABASE=AuthDB

# MySQL (Notificações)
MYSQL_HOST=mysql
MYSQL_USER=root
MYSQL_PASSWORD=12345
MYSQL_DATABASE=NotificationsDB

# JWT
JWT_SECRET=supersecretkey

# Redis (para fila)
REDIS_URL=redis://default:password@redis:6379
```

---

## 🗄️ Configuração dos Bancos

**src/config/sqlserver.ts**
```ts
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
```

**src/config/mysql.ts**
```ts
import mysql from 'mysql2/promise'

export const mysqlPool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
})
```

---

## 🔐 Auth (SQL Raw no SQL Server)

**src/services/auth.service.ts**
```ts
import { getSqlServer } from '../config/sqlserver'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function login(username: string, password: string) {
  const pool = await getSqlServer()
  const result = await pool.request().query(
    `SELECT id, username, password_hash FROM Users WHERE username = '${username}'`
  )
  const user = result.recordset[0]
  if (!user) throw new Error('Usuário não encontrado')
  const match = await bcrypt.compare(password, user.password_hash)
  if (!match) throw new Error('Senha incorreta')
  const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET!, { expiresIn: '8h' })
  return { token }
}
```

**src/controllers/auth.controller.ts**
```ts
import { login } from '../services/auth.service'
import { Hono } from 'hono'

const auth = new Hono()

auth.post('/login', async (c) => {
  const { username, password } = await c.req.json()
  try {
    const data = await login(username, password)
    return c.json({ success: true, ...data })
  } catch (e: any) {
    return c.json({ success: false, message: e.message }, 400)
  }
})

export default auth
```

---

## 🔔 Notificações (SQL Raw no MySQL)

**src/services/notification.service.ts**
```ts
import { mysqlPool } from '../config/mysql'

export async function registerNotification(type: string, content: string, userId?: number) {
  const [result] = await mysqlPool.query(
    'INSERT INTO notifications (type, content, user_id, created_at) VALUES (?, ?, ?, NOW())',
    [type, content, userId || null]
  )
  return result
}
```

**src/controllers/notifications.controller.ts**
```ts
import { registerNotification } from '../services/notification.service'
import { Hono } from 'hono'

const notifications = new Hono()

notifications.post('/', async (c) => {
  const { type, content, userId } = await c.req.json()
  try {
    const data = await registerNotification(type, content, userId)
    return c.json({ success: true, data })
  } catch (e: any) {
    return c.json({ success: false, message: e.message }, 400)
  }
})

export default notifications
```

---

## 🧵 Fila e Jobs Pesados (BullMQ + Redis)

**src/jobs/queue.ts**
```ts
import { Queue } from 'bullmq'
export const jobQueue = new Queue('jobs', { connection: { url: process.env.REDIS_URL! } })
```

**src/jobs/worker.ts**
```ts
import { Worker } from 'bullmq'
import { sendEmail } from '../services/email.service'

new Worker('jobs', async (job) => {
  if (job.name === 'send-email') await sendEmail(job.data.to, job.data.subject, job.data.body)
})
```

---

## 📧 Serviço de E-mail

**src/services/email.service.ts**
```ts
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS },
})

export async function sendEmail(to: string, subject: string, body: string) {
  await transporter.sendMail({ from: process.env.MAIL_USER, to, subject, html: body })
}
```

---

## 🚀 Inicialização

**src/app.ts**
```ts
import { Hono } from 'hono'
import auth from './controllers/auth.controller'
import notifications from './controllers/notifications.controller'

const app = new Hono()
app.route('/auth', auth)
app.route('/notifications', notifications)

export default app
```

**src/server.ts**
```ts
import { serve } from '@hono/node-server'
import app from './app'
import 'dotenv/config'

serve({ fetch: app.fetch, port: Number(process.env.PORT) || 3103 })
console.log(`🚀 Server running on http://localhost:${process.env.PORT || 3103}`)
```

---

## 🐳 Docker Compose

**docker-compose.yml**
```yaml
version: '3.9'
services:
  api:
    build: .
    command: npm run dev
    ports:
      - "3103:3103"
    env_file: .env
    depends_on:
      - sqlserver
      - mysql
      - redis

  sqlserver:
    image: mcr.microsoft.com/mssql/server:2022-latest
    environment:
      SA_PASSWORD: "12345"
      ACCEPT_EULA: "Y"
    ports:
      - "1433:1433"

  mysql:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: "12345"
      MYSQL_DATABASE: "NotificationsDB"
    ports:
      - "3306:3306"

  redis:
    image: redis:7
    ports:
      - "6379:6379"
```

---

## ✅ Teste Rápido

**Login:**
```bash
curl -X POST http://localhost:3103/auth/login -H "Content-Type: application/json" -d '{"username":"admin","password":"1234"}'
```

**Criar Notificação:**
```bash
curl -X POST http://localhost:3103/notifications -H "Content-Type: application/json" -d '{"type":"EMAIL","content":"Nova mensagem","userId":1}'
```

---

## 🧠 Conclusão

- **Hono**: ultrarrápido e minimalista
- **SQL Raw**: controle total e performance
- **SQLServer + MySQL**: separação de responsabilidades
- **BullMQ + Redis**: fila de processamento assíncrona
- **Nodemailer**: e-mails transacionais simples

---

💡 Ideal para centralizar **auth, notificações e jobs pesados** num único microsserviço.
