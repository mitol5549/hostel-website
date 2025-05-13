import { CONTACTS } from '@/Constants';
import { FC } from 'react';
import YandexMap from '@/components/YandexMap';
import { ContactInfo } from '@/components/ui/ContactInfo';
import { SocialLinks } from '@/components/ui/SocialLinks';

const Contacts: FC = () => {
  return (
    <section id='contacts' className='py-12 bg-gray-100 md:padding-container px-10'>
      <div className='max-w-[942px] mx-auto'>
        <div className='relative flex justify-center pb-10'>
          <h2 className='bold-40 lg:bold-64'>{CONTACTS.title}</h2>
        </div>

        <div className='flex flex-col gap-20 lg:flex-row'>
          {/* Левая колонка с контактной информацией */}
          <div className='flex-1 flex flex-col gap-10'>
            <ContactInfo links={CONTACTS.info.links} />
            <SocialLinks links={CONTACTS.social} />
          </div>

          {/* Правая колонка с Яндекс.Картами */}
          <div className='flex-1'>
            <div className='lg:ml-8 mg-2'>
              <YandexMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
