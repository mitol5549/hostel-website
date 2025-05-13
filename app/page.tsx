'use client';

import Gallery from '@/components/sections/Gallery';
import Features from '@/components/sections/Features';
import Hero from '@/components/sections/Hero';
import RoomList from '@/components/sections/RoomList';
import Footer from '@/components/layout/Footer';
import Contacts from '@/components/sections/Contacts';
import { Divider } from '@heroui/react';
import { BackgroundImage } from '@/components/ui/BackgroundImage';
import { FC } from 'react';
import { HERO, LAYOUT } from '@/Constants';

const Home: FC = () => {
  return (
    <>
      <div className={`relative h-[${LAYOUT.heroHeight}]`}>
        <BackgroundImage src={HERO.image.src} alt={HERO.image.alt} />
        <div className='relative z-20'>
          <Hero />
        </div>
      </div>
      <Gallery />
      <RoomList />
      <Features />
      <Contacts />
      <Divider />
      <Footer />
      <div id='WidgetShowCheckAvailabilityButtonForMobileDevicesId' />
    </>
  );
};

export default Home;
