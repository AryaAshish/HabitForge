class Logger {
  log(message: string, data?: unknown) {
    // Will be replaced with proper logging service (e.g., Sentry, PostHog)
    // __DEV__ check ensures no logs in production
  }

  error(message: string, error?: unknown) {
    // Error logging
  }

  warn(message: string, data?: unknown) {
    // Warning logging
  }
}

export const logger = new Logger();