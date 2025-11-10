// src/utils/logger.ts

const LOG_LEVEL = process.env.LOG_LEVEL || 'debug';

const logger = {
  info: (message: string, context?: Record<string, any>) => {
    if (['info', 'debug'].includes(LOG_LEVEL)) {
      console.log(`[INFO] ${new Date().toISOString()} - ${message}`, context ? JSON.stringify(context) : '')
    }
  },
  error: (message: string, error?: Error, context?: Record<string, any>) => {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, error ? error.message : '', context ? JSON.stringify(context) : '')
  },
  warn: (message: string, context?: Record<string, any>) => {
    if (['warn', 'info', 'debug'].includes(LOG_LEVEL)) {
      console.warn(`[WARN] ${new Date().toISOString()} - ${message}`, context ? JSON.stringify(context) : '')
    }
  },
  debug: (message: string, context?: Record<string, any>) => {
    if (LOG_LEVEL === 'debug') {
      console.debug(`[DEBUG] ${new Date().toISOString()} - ${message}`, context ? JSON.stringify(context) : '')
    }
  },
};

export default logger;

