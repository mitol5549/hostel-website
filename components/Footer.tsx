import { FOOTER_CONTACT_INFO } from '@/Constants';
import Link from 'next/link';
import YandexMap from '@/components/YandexMap';
import { Button, Divider } from '@heroui/react';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id='contacts' className='flexCenter my-24 max-container'>
      <div className='max-w-[942px] flex w-full flex-col gap-16'>
        <div className='flex flex-col gap-20 lg:flex-row'>
          {/* Левая колонка с контактной информацией */}
          <div className='flex-1 flex flex-col gap-10'>
            <h3 className='bold-40 mb-6'>Наши контакты</h3>

            {/* Контактная информация */}
            <div>
              <div className='flex flex-col gap-4'>
                {FOOTER_CONTACT_INFO.links.map((link, index) => (
                  <Link href='/' key={`contact-link-${index}`} className='flex justify-between'>
                    <p className='whitespace-nowrap medium-14'>{link.label}</p>
                    <p>{link.value}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Социальные сети */}
            <div>
              <h4 className='bold-18 mb-4'>Соцсети и мессенджеры</h4>
              <ul className='flex gap-4'>
                <li key={"What'sApp"}>
                  <Button
                    isIconOnly
                    as={Link}
                    color='primary'
                    href='https://wa.me/79059719037'
                    target='_blank'
                    variant='light'
                    aria-label="What's App"
                  >
                    <Image src='/whatsapp.svg' alt="What's App" width={48} height={48} />
                  </Button>
                </li>
              </ul>
            </div>
          </div>

          {/* Правая колонка с Яндекс.Картами */}
          <div className='flex-1'>
            <div className='lg:ml-8 mg-2'>
              <YandexMap />
            </div>
          </div>
        </div>

        <Divider className='my-4' />
        <div className='w-full justify-center text-gray-30 flex h-5 items-center space-x-4 '>
          <p className='regular-14'>{currentYear} "Тихий" хостел</p>
          <Divider orientation='vertical' />
          <p className='regular-14'>Powered by NextJS 14</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
