import Image from 'next/image';
import { FC } from 'react';
import { InfoCard } from '@/components/ui/InfoCard';
import { DescriptionBlock } from '@/components/ui/DescriptionBlock';
import { HERO } from '@/Constants';

const Hero: FC = () => {
  return (
    <section
      id='home'
      className='relative h-screen max-container padding-container flex flex-col
      gap-20 pt-10 md:gap-28 lg:pt-20 justify-center items-center'
      aria-label='Главная информация о хостеле'
    >
      <div className='flex flex-row gap-36'>
        <div className='relative mt-4 z-20 flex flex-1 flex-col xl:w-1/2'>
          <Image
            src={HERO.logo.src}
            alt={HERO.logo.alt}
            width={HERO.logo.width}
            height={HERO.logo.height}
            className='w-80 h-auto'
            priority
          />
          <DescriptionBlock text={HERO.description} />
        </div>

        <div className='relative flex-1 items-start justify-end hidden xl:flex'>
          <InfoCard
            location={HERO.info.location}
            distance={HERO.info.distance}
            roomsCount={HERO.info.roomsCount}
          />
        </div>
      </div>

      <div className='w-full flex justify-center'>
        <div id='WidgetHorizontalBlockId' />
      </div>
    </section>
  );
};

export default Hero;
