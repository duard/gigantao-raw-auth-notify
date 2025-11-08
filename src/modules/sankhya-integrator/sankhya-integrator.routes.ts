import { Hono } from 'hono'
import sankhyaIntegratorController from './sankhya-integrator.controller'

const sankhyaIntegratorRoutes = new Hono()

sankhyaIntegratorRoutes.route(
  '/sankhya-integrator',
  sankhyaIntegratorController
)

export default sankhyaIntegratorRoutes
