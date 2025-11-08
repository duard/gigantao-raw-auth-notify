import { Hono } from 'hono'
import emailController from '../controllers/email.controller'

const emailRoutes = new Hono()

emailRoutes.route('/email', emailController)

export default emailRoutes
