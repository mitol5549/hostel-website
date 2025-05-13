import Image from 'next/image';
import { FC } from 'react';

interface BackgroundImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const BackgroundImage: FC<BackgroundImageProps> = ({ src, alt, className = '' }) => {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      style={{ objectFit: 'cover' }}
      quality={100}
      priority
      className={`z-0 ${className}`}
    />
  );
};
