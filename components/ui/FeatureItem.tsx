import Image from 'next/image';
import { FC } from 'react';

interface FeatureItemProps {
  title: string;
  icon: string;
  description: string;
}

export const FeatureItem: FC<FeatureItemProps> = ({ title, icon, description }) => {
  return (
    <div>
      <li className='flex w-full flex-1 flex-col items-start'>
        <div className='rounded-full p-4 lg:p-7 bg-green-600'>
          <Image src={icon} alt={title} width={38} height={38} />
        </div>
        <h2 className='bold-20 lg:bold-32 mt-5 bg-white/80'>{title}</h2>
        <p
          className='regular-16 mt-5 bg-white/80 text-gray-30
        lg:mt-[30px] lg:bg-none'
        >
          {description}
        </p>
      </li>
    </div>
  );
};
