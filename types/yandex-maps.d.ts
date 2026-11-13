export interface YandexMapInstance {
  behaviors: { disable: (behavior: string) => void };
  geoObjects: { add: (object: unknown) => void };
  destroy: () => void;
}

interface YandexMapsApi {
  ready: (callback: () => void) => void;
  Map: new (
    container: HTMLElement,
    state: { center: [number, number]; zoom: number; controls: string[] },
  ) => YandexMapInstance;
  Placemark: new (
    coordinates: [number, number],
    properties: Record<string, unknown>,
    options: Record<string, unknown>,
  ) => unknown;
}

declare global {
  interface Window {
    ymaps?: YandexMapsApi;
  }
}
