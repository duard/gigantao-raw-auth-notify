import { Hono } from 'hono'
import authController from './auth/auth.controller' // Import auth controller
import sankhyaController from './sankhya.controller' // Import the sankhya controller
import rawQueriesRoutes from './raw-queries/raw-queries.routes' // Import raw queries routes

const sankhyaRoutes = new Hono()

sankhyaRoutes.route('/sankhya', authController) // Route auth controller under /sankhya
sankhyaRoutes.route('/sankhya', sankhyaController) // Route sankhya controller under /sankhya
sankhyaRoutes.route('/sankhya', rawQueriesRoutes) // Include raw queries routes under /sankhya

export default sankhyaRoutes
