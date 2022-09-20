export {};

declare global {
  interface Window {
    gtag: any;
  }
}

export interface ProgressState {
  value: number;
}
