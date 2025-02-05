'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const HotelBookingWidget = dynamic(() => import('@/components/HotelWidget'), { ssr: false });

const Hero = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).HotelWidget) {
      (window as any).HotelWidget.add({
        type: 'bookingForm',
        appearance: { container: 'WidgetHorizontalBlockId' },
      });
    }
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen max-container padding-container flex flex-col
    gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row justify-center items-center"
    >
      <div className="relative mt-48 z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">Хостел "Тихий"</h1>
        <div className="my-11 flex flex-wrap gap-5">
          <p className="regular-16 mt-6 bg-white/80 text-gray-30 xl:max-w-[520px]">
            Хостел "Тихий" — новый уютный хостел, расположенный по адресу переулок Тихий, 2, в тихом и удобном районе
            Красноярска. Близость к ключевым транспортным узлам и городской инфраструктуре делает его отличным выбором
            для путешественников и гостей города. Интерьер хостела выполнен в современном дизайнерском стиле с
            элементами, отражающими природу и атмосферу уюта. Мы позаботились о том, чтобы каждый гость чувствовал себя
            как дома.
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
      <div className="w-full flex justify-center">
        <HotelBookingWidget />
      </div>
    </section>
  );
};

export default Hero;
