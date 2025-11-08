import { serve } from '@hono/node-server'
import 'dotenv/config'
import app from './app'
import { initSocket } from './socket'

import { initMysqlPool } from './config/mysql'

const port = Number(process.env.PORT) || 3103;

(async () => {
  try {
    await initMysqlPool();
    console.log('✅ MySQL pool initialized successfully.');
  } catch (error) {
    console.error('❌ Failed to initialize MySQL pool:', error);
    process.exit(1); // Exit if database connection fails
  }

  const server = serve(
    {
      fetch: app.fetch,
      port,
    },
    (info) => {
      console.log(`🚀 Server running on http://localhost:${info.port}`)
    }
  )

  initSocket(server as any)
})()
