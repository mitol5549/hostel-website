'use client';

import { HeroUIProvider } from '@heroui/react';
import Script from 'next/script';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      {children}
      <Script
        src='https://bookonline24.ru/widget.js'
        onLoad={() => {
          window.HotelWidget?.init({
            hotelId: 'e2877d32-3e03-4011-926a-79404e1b490a',
            version: '2',
            baseUrl: 'https://bookonline24.ru/',
            theme: {
              common: {
                buttons: {
                  // Задаем настройки основных кнопок
                  primary: {
                    bg: '#289446',
                    hoverBg: '#34ad55',
                    textColor: '#fff',
                    borderColor: '#289446',
                    hoverBorderColor: '#34ad55',
                  },
                  // Задаем настройки второстепенных кнопок
                  secondary: {
                    bg: '#289446',
                    hoverBg: '#34ad55',
                    textColor: '#fff',
                    borderColor: '#289446',
                    hoverBorderColor: '#34ad55',
                  },
                },
              },
              bookingForm: {
                checkButton: {
                  text: {
                    ru: 'Проверить доступность',
                    en: 'Check availability',
                  },
                },
              },
              roomsList: {
                itemBorder: '20px solid #f3f4f6',
                item: {
                  bg: '#fff',
                  border: '1px solid #d7d7d7',
                  borderRadius: '10px',
                  padding: '30px',
                },
              },
            },
            hooks: {
              onError: (e: any) => console.error('onError', e),
              onInit: () => console.log('onInit'),
              onBooking: (v: any) => console.log('onBooking', v),
            },
          });

          window.HotelWidget?.add({
            type: 'bookingForm',
            inline: true,
            appearance: {
              container: 'WidgetHorizontalBlockId',
            },
            theme: {
              checkButton: {
                text: {
                  ru: 'Проверить доступность',
                  en: 'Сheck availability',
                },
              },
            },
          });

          window.HotelWidget?.add({
            type: 'roomsList',
            appearance: {
              container: 'WidgetRoomsListId',
            },
          });

          window.HotelWidget?.add({
            type: 'showCheckAvailabilityButtonForMobileDevices',
            appearance: {
              container: 'WidgetShowCheckAvailabilityButtonForMobileDevicesId',
            },
            theme: {
              checkButton: {
                text: {
                  ru: 'Забронировать',
                  en: 'Book rooms',
                },
              },
            },
          });
        }}
      />
    </HeroUIProvider>
  );
}
