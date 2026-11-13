'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import type { YandexMapInstance } from '@/types/yandex-maps';

const YandexMap = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [ymapsLoaded, setYmapsLoaded] = useState(false);
  const handleApiReady = () => setYmapsLoaded(true);

  useEffect(() => {
    const ymaps = window.ymaps;
    const container = mapContainerRef.current;
    if (!ymapsLoaded || !ymaps || !container) return;

    let cancelled = false;
    let map: YandexMapInstance | undefined;

    ymaps.ready(() => {
      // Поздний callback API не должен создавать карту после размонтирования.
      if (cancelled) return;

      map = new ymaps.Map(container, {
        center: [56.009673, 92.951413],
        zoom: 10,
        controls: [],
      });

      map.behaviors.disable('scrollZoom');

      const placemark = new ymaps.Placemark(
        [56.009673, 92.951413],
        { balloonContent: 'Хостел "Тихий"' },
        { preset: 'islands#greenIcon' },
      );
      map.geoObjects.add(placemark);
    });

    return () => {
      cancelled = true;
      map?.destroy();
    };
  }, [ymapsLoaded]);

  return (
    <>
      <Script
        id='yandex-maps-api'
        src='https://api-maps.yandex.ru/2.1/?lang=ru_RU'
        onReady={handleApiReady}
      />
      <div
        ref={mapContainerRef}
        className='w-full h-[500px] rounded-lg shadow-lg'
      />
    </>
  );
};

export default YandexMap;
