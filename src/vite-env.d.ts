/// <reference types="vite/client" />
interface ImportMetaEnv {
  /**
   * node上的环境变量
   */
  readonly NODE_ENV: string;
  /**
   * 接口地址前缀
   */
  APP_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
