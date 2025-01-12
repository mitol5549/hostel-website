// app/page.tsx

import YandexMap from '@/components/YandexMap';

const Contacts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center">Наш Хостел</h1>
      <p className="text-center mt-4 text-lg text-gray-700">Добро пожаловать в наш хостел в Красноярске!</p>

      <div className="mt-10">
        {/* Вставляем компонент с картой */}
        <YandexMap />
      </div>
    </div>
  );
};

export default Contacts;
