import { FC } from 'react';

interface DescriptionBlockProps {
  text: string;
}

export const DescriptionBlock: FC<DescriptionBlockProps> = ({ text }) => {
  return (
    <div className='my-11 flex justify-center rounded-[10px] flex-wrap gap-5 bg-white/80 p-4'>
      <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>{text}</p>
    </div>
  );
};
