'use client';

import { useEffect } from 'react';

const HotelBookingWidget = () => {
  useEffect(() => {
    const container = document.getElementById('BookingFormWidget');
    if (container) container.innerHTML = ''; // Очищаем перед рендерингом

    const script = document.createElement('script');
    script.src = 'https://bookonline24.ru/widget.js';
    script.async = true;
    script.onload = () => {
      if (typeof (window as any).HotelWidget !== 'undefined') {
        (window as any).HotelWidget.init({
          hotelId: 'e2877d32-3e03-4011-926a-79404e1b490a',
          version: '2',
          baseUrl: 'https://bookonline24.ru',
          hooks: {
            onError: function (e: any) {
              console.error('onError', e);
            },
            onInit: function () {
              console.log('onInit');
            },
            onBooking: function (v: any) {
              console.log('onBooking', v);
            },
          },
        });

        (window as any).HotelWidget.add({
          type: 'bookingForm',
          appearance: {
            container: 'BookingFormWidget',
          },
        });
      }
    };

    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="BookingFormWidget"></div>;
};

export default HotelBookingWidget;
