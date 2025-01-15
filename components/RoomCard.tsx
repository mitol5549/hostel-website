import Image from 'next/image';
import Button from './Button';

interface RoomCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  capacity: number;
}

const RoomCard: React.FC<RoomCardProps> = ({ image, title, description, price, capacity }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-green-600 font-bold">{price} ₽ / ночь</span>
          <span className="text-gray-500">Вместимость: {capacity} чел.</span>
        </div>
        <Button type="button" title="Забронировать" variant="btn_dark_green" />
      </div>
    </div>
  );
};

export default RoomCard;
