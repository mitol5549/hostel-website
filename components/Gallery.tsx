import EmblaCarousel from './EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';

const OPTIONS: EmblaOptionsType = { align: 'start', dragFree: true, loop: true };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="2xl:max-container relative flex flex-col py-10 
    lg:mb-10 lg:py-20 xl:mb-20"
    >
      <div className="relative">
        <h2 className="bold-40 lg:bold-64 bg-white/80">Фотогалерея</h2>
      </div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  );
};

export default Gallery;
