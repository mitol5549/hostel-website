import { Card, CardFooter, CardHeader, Image } from '@heroui/react';
import Button from './Button';
import RoomGallery from './RoomGallery';

interface RoomCardProps {
  images: string[];
  title: string;
  description: string;
  price: number;
  capacity: number;
}

const RoomCard: React.FC<RoomCardProps> = ({ images, title, description, price, capacity }) => {
  return (
    <Card className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
      </CardHeader>
      <Image removeWrapper alt="room" className="z-0 w-full h-full object-cover" src={images[0]} />
      <CardFooter>
        <div className="flex justify-between items-center mb-4">
          <span className="text-green-600 font-bold">{price} ₽ / ночь</span>
          <span className="text-gray-500">Вместимость: {capacity} чел.</span>
        </div>
        <Button type="button" title="Забронировать" variant="btn_dark_green" />
      </CardFooter>
    </Card>
  );
};

export default RoomCard;
