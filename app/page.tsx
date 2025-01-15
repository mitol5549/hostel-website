import Camp from '@/components/Camp';
import Features from '@/components/Features';
import Guide from '@/components/Guide';
import Hero from '@/components/Hero';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="relative h-screen">
        <Image
          src="/hero-back.png"
          alt="Hero Background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          priority
          className="z-0"
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-50 z-10" /> */}
        <div className="relative z-20">
          <Hero />
        </div>
      </div>
      <Guide />
      <Features />
      <Camp />
    </>
  );
}
