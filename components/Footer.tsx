import { FOOTER_CONTACT_INFO, SOCIALS } from '@/Constants';
import Image from 'next/image';
import Link from 'next/link';
import YandexMap from '@/components/YandexMap';
import { Divider } from '@heroui/react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacts" className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-16 px-8 md:px-16 lg:px-24">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          {/* Левая колонка с контактной информацией */}
          <div className="flex-1 flex flex-col gap-10">
            <h3 className="bold-40 mb-6">Наши контакты</h3>

            {/* Контактная информация */}
            <div>
              <div className="flex flex-col gap-4">
                {FOOTER_CONTACT_INFO.links.map((link, index) => (
                  <Link href="/" key={`contact-link-${index}`} className="flex justify-between">
                    <p className="whitespace-nowrap medium-14">{link.label}</p>
                    <p>{link.value}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Социальные сети */}
            <div>
              <h4 className="bold-18 mb-4">{SOCIALS.title}</h4>
              <ul className="flex gap-4">
                {SOCIALS.links.map((link, index) => (
                  <li key={`social-link-${index}`}>
                    <Link href="/">
                      <Image src={link} alt="social logo" width={24} height={24} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Правая колонка с Яндекс.Картами */}
          <div className="flex-1">
            <div className="lg:ml-8 mg-2">
              <YandexMap />
            </div>
          </div>
        </div>

        <Divider className="my-4" />
        <div className="w-full justify-center text-gray-30 flex h-5 items-center space-x-4 ">
          <p className="regular-14">{currentYear} "Тихий" хостел</p>
          <Divider orientation="vertical" />
          <p className="regular-14">Powered by NextJS 14</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
