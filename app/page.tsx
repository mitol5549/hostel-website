'use client';

import Camp from '@/components/Camp';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import RoomList from '@/components/RoomList';
import Image from 'next/image';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <div className="relative h-screen">
        <Image
          src="/hero-back.png"
          alt="Hero Background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          priority
          className="z-0"
        />
        <div className="relative z-20">
          <Hero />
        </div>
      </div>
      <RoomList />
      <Features />
      <Camp />
      <div id="showCheckAvailabilityButtonForMobileDevices" />

      <Script
        src="https://bookonline24.ru/widget.js"
        onReady={() => {
          window.HotelWidget?.init({
            hotelId: 'e2877d32-3e03-4011-926a-79404e1b490a',
            version: '2',
            baseUrl: 'https://bookonline24.ru/',
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
          });
        }}
      />
    </>
  );
}
