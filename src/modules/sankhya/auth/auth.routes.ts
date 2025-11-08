import { Hono } from 'hono'
import authController from './auth.controller'

const authRoutes = new Hono()

authRoutes.route('/', authController)

export default authRoutes
