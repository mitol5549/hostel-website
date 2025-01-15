import RoomCard from './RoomCard';
import { rooms } from '@/Constants';

const RoomList: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Наши номера</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map(room => (
            <RoomCard key={room.id} {...room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomList;
