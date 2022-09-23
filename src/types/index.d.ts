export {};

declare global {
  interface Window {
    gtag: any;
  }
}

export interface ProgressState {
  value: number;
}

export interface ThemeState {
  value: boolean;
}
