'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
// import Button from './Button'

const Hero = () => {
  return (
    <section
      id="#home"
      className="relative h-screen max-container padding-container flex flex-col
    gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row justify-center items-center"
    >
      <div className="relative mt-48 z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">Хостел "Тихий"</h1>

        <div className="my-11 flex flex-wrap gap-5">
          <p className="regular-16 mt-6 bg-white/80 text-gray-30 xl:max-w-[520px]">
            Хостел "Тихий" - новый хостел, расположенный в самом центре города Красноярска, в нескольких шагах от
            Центрального парка "Горького" и "Органного зала", в пешей доступности от железнодорожного вокзала и
            администрации города Красноярска. В хостеле выполнен качественный дизайнерский ремонт. Вам безусловно
            понравиться интерьер, передающий концепцию парка.
          </p>
        </div>
      </div>

      <div className="relative flex-1 items-start hidden xl:flex">
        <div
          className="relative z-20 flex w-[260px] flex-col gap-8
        rounded-3xl bg-green-700 px-7 py-8"
        >
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-300">Расположение</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Красноярск, Россия</p>
          </div>
          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-300">Расстояние</p>
              <p className="bold-20 text-white">73 км</p>
            </div>
            <div className="flexBetween">
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-300">Высота</p>
                <p className="bold-20 text-white">0.0131 км</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
