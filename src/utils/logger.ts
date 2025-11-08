// src/utils/logger.ts

const logger = {
  info: (message: string, context?: Record<string, any>) => {
    console.log(`[INFO] ${new Date().toISOString()} - ${message}`, context ? JSON.stringify(context) : '')
  },
  error: (message: string, error?: Error, context?: Record<string, any>) => {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, error ? error.message : '', context ? JSON.stringify(context) : '')
  },
  warn: (message: string, context?: Record<string, any>) => {
    console.warn(`[WARN] ${new Date().toISOString()} - ${message}`, context ? JSON.stringify(context) : '')
  },
  debug: (message: string, context?: Record<string, any>) => {
    console.debug(`[DEBUG] ${new Date().toISOString()} - ${message}`, context ? JSON.stringify(context) : '')
  },
};

export default logger;
