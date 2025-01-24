import { Card, CardFooter, CardHeader, Image } from '@heroui/react';
import Button from './Button';

interface RoomCardProps {
  images: string[];
  title: string;
  description: string;
  price: number;
  capacity: number;
}

const RoomCard: React.FC<RoomCardProps> = ({ images, title, description, price, capacity }) => {
  return (
    <Card className="w-full h-[300px] col-span-12 sm:col-span-7 flex flex-row">
      {/* Фото слева */}
      <div className="w-1/2 h-full">
        <Image removeWrapper alt="room" className="w-full h-full object-cover" src={images[0]} />
      </div>

      {/* Информация справа */}
      <div className="w-1/2 p-6 flex flex-col justify-between">
        <CardHeader className="mb-4 flex flex-col">
          <h3 className="font-bold text-xl mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </CardHeader>

        <CardFooter className="flex flex-col">
          <div className="flex flex-col justify-between items-center mb-4">
            <span className="text-green-600 font-bold">{price} ₽ / ночь</span>
            <span className="text-gray-500">Вместимость: {capacity} чел.</span>
          </div>
          <Button type="button" title="Забронировать" variant="btn_dark_green" />
        </CardFooter>
      </div>
    </Card>
  );
};

export default RoomCard;
