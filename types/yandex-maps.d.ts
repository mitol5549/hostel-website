/// <reference types="next" />
/// <reference types="next/types/global" />

declare global {
  interface Window {
    ymaps: typeof ymaps;
  }
}

export {};
