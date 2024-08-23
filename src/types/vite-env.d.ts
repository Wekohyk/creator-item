/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ICON_HOST: string;
  readonly VITE_APP_BUILD_TIME: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
