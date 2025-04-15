'use client';

import Gallery from '@/components/Gallery';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import RoomList from '@/components/RoomList';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='relative h-[calc(100vh-4rem)]'>
        <Image
          src='/hero-back.png'
          alt='Hero Background'
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          priority
          className='z-0'
        />
        <div className='relative z-20'>
          <Hero />
        </div>
      </div>
      <Gallery />
      <RoomList />
      <Features />
      <div id='WidgetShowCheckAvailabilityButtonForMobileDevicesId' />
    </>
  );
}
