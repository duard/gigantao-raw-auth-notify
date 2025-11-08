import { Hono } from 'hono'

const sankhya = new Hono()

sankhya.get('/health', (c) => {
  return c.json({ status: 'ok', message: 'Sankhya module is healthy' })
})

export default sankhya
