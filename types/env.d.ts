declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASE_URL: string;
      CHROME_PATH?: string;
    }
  }
}

export {};
