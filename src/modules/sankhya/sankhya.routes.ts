import { Hono } from 'hono'
import authController from './auth/auth.controller'

const sankhyaRoutes = new Hono()

sankhyaRoutes.route('/sankhya', authController)

export default sankhyaRoutes
