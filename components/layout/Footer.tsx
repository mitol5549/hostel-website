import { Divider } from '@heroui/react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id='contacts' className='py-12 md:padding-container px-10 md:mb-0 mb-16'>
      <div className='w-full justify-center text-gray-30 flex h-5 items-center space-x-4'>
        <p className='regular-14'>{currentYear} "Тихий" хостел</p>
        <Divider orientation='vertical' />
        <p className='regular-14'>Powered by NextJS 14</p>
      </div>
    </footer>
  );
};

export default Footer;
