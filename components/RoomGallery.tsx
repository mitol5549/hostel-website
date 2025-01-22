'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { Card } from "@heroui/react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface RoomGalleryProps {
  images: string[];
}

const RoomGallery: React.FC<RoomGalleryProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative h-10">
      <Slider {...settings}>
        {images.map((image, index) => (
          <Card key={index} className="relative object-cover">
            <Image src={image} alt={`Room ${index + 1}`} width={500} height={100} className="object-cover rounded-sm" />
          </Card>
        ))}
      </Slider>
    </div>
  );
};

export default RoomGallery;
