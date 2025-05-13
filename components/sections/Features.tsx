import { FEATURES } from '@/Constants';
import { FC } from 'react';
import { FeatureItem } from '@/components/ui/FeatureItem';

const Features: FC = () => {
  return (
    <section
      id='features'
      className='max-container md:padding-container px-10 flex-col flexCenter
    overflow-hidden py-24'
    >
      <div
        className='max-w-[942px] px-auto relative w-full 
      flex justify-between'
      >
        <div className='z-20 flex w-full flex-col'>
          <div className='relative'>
            <h2 className='bold-40 lg:bold-64 bg-white/80'>Удобства для комфортного проживания</h2>
          </div>

          <ul
            className='mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3
          lg:mg-20 lg:gap-20'
          >
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
