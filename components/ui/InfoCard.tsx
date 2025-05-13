import Image from 'next/image';
import { FC } from 'react';

interface InfoCardProps {
  location: string;
  distance: string;
  roomsCount: number;
}

export const InfoCard: FC<InfoCardProps> = ({ location, distance, roomsCount }) => {
  return (
    <div className='relative z-20 flex w-[300px] flex-col gap-8 rounded-2xl bg-green-700 px-7 py-8'>
      <div className='flex flex-col'>
        <div className='flexBetween'>
          <p className='regular-16 text-gray-300'>Расположение</p>
          <Image src='/close.svg' alt='close' width={24} height={24} />
        </div>
        <p className='bold-20 text-white'>{location}</p>
      </div>
      <div className='flexBetween'>
        <div className='flex flex-col'>
          <p className='regular-16 block text-gray-300'>Расстояние до центра</p>
          <p className='bold-20 text-white'>{distance}</p>
        </div>
        <div className='flexBetween ml-1'>
          <div className='flex flex-col'>
            <p className='regular-16 block text-gray-300'>Количество номеров</p>
            <p className='bold-20 text-white'>{roomsCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
