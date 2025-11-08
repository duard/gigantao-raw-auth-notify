import { Hono } from 'hono'
import notificationsController from '../controllers/notifications.controller'

const notificationsRoutes = new Hono()

notificationsRoutes.route('/notifications', notificationsController)

export default notificationsRoutes
