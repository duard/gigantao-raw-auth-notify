import { Hono } from 'hono'
import { syncAllTables } from './sankhya-integrator.service'

const sankhyaIntegrator = new Hono()

sankhyaIntegrator.post('/sync', async (c) => {
  try {
    const result = await syncAllTables()
    return c.json({ success: true, data: result })
  } catch (e: any) {
    return c.json({ success: false, message: e.message }, 500)
  }
})

export default sankhyaIntegrator
