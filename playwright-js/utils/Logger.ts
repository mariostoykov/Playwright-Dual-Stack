export class Logger {
    private static getTimestamp(): string {
        return new Date().toISOString();
    }

    static info(message: string): void {
    console.log(`[${this.getTimestamp()}] [INFO] ℹ️ ${message}`);
  }

  static warn(message: string): void {
    console.warn(`[${this.getTimestamp()}] [WARN] ⚠️ ${message}`);
  }

  static error(message: string, error?: any): void {
    console.error(`[${this.getTimestamp()}] [ERROR] ❌ ${message}`);
    if (error) {
      console.error(error);
    }
  }
}