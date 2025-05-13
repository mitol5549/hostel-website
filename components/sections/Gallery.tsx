import EmblaCarousel from '@/components/carousel/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import { FC } from 'react';
import { GALLERY } from '@/Constants';

const SLIDES = Array.from(Array(GALLERY.slideCount).keys());

const Gallery: FC = () => {
  return (
    <section
      id='gallery'
      className='2xl:max-container relative flex flex-col py-10 
    lg:mb-10 lg:py-20 xl:mb-20'
    >
      <div className='relative flex justify-center py-10'>
        <h2 className='bold-40 lg:bold-64'>{GALLERY.title}</h2>
      </div>
      <EmblaCarousel slides={SLIDES} options={GALLERY.options} />
    </section>
  );
};

export default Gallery;
