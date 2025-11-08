import { Hono } from 'hono'
import rawQueriesController from './raw-queries.controller'

const rawQueriesRoutes = new Hono()

rawQueriesRoutes.route('/raw-queries', rawQueriesController)

export default rawQueriesRoutes
