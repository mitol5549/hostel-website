'use client';

import { useEffect, useRef, useState } from 'react';

const YandexMap = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [ymapsLoaded, setYmapsLoaded] = useState(false);

  // Функция для загрузки скрипта Яндекс.Карт
  const loadYmapsScript = () => {
    return new Promise<void>((resolve, reject) => {
      if (window.ymaps) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
      script.async = true;
      script.onload = () => {
        setYmapsLoaded(true);
        resolve();
      };
      script.onerror = () => reject(new Error('Failed to load Yandex Maps script'));
      document.head.appendChild(script);
    });
  };

  useEffect(() => {
    loadYmapsScript()
      .then(() => {
        if (ymapsLoaded && mapContainerRef.current) {
          const ymaps = window.ymaps;

          ymaps.ready(() => {
            const map = new ymaps.Map(mapContainerRef.current, {
              center: [56.009673, 92.951413], // Координаты Красноярска
              zoom: 10, // Уровень масштабирования
              controls: [], // Убираем все элементы управления, включая зум
            });

            // Отключаем масштабирование при скролле
            map.behaviors.disable('scrollZoom'); // Отключаем масштабирование колесиком

            // Добавляем маркер
            const placemark = new ymaps.Placemark(
              [56.009673, 92.951413], // Координаты маркера
              {
                balloonContent: 'Хостел "Тихий"', // Подсказка при клике на маркер
              },
              {
                preset: 'islands#greenIcon', // Тёмно-зелёный цвет
              },
            );

            // Размещаем маркер на карте
            map.geoObjects.add(placemark);
          });
        }
      })
      .catch((error) => {
        console.error('Error loading Yandex Maps script', error);
      });
  }, [ymapsLoaded]);

  return (
    <div
      ref={mapContainerRef}
      className='w-full h-[500px] rounded-lg shadow-lg' // Стили для карты с помощью Tailwind
    />
  );
};

export default YandexMap;
