import Image from 'next/image';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen max-container padding-container flex flex-col
      gap-20 pt-10 md:gap-28 lg:pt-20 justify-center items-center"
    >
      <div className="flex flex-row gap-36">
        <div className="relative mt-48 z-20 flex flex-1 flex-col xl:w-1/2">
          <h1 className="font-sofia font-extrabold text-4xl">Хостел "Тихий"</h1>
          <div className="my-11 flex flex-wrap gap-5">
            <p className="regular-16 mt-6 bg-white/80 text-gray-30 xl:max-w-[520px]">
              Хостел «Тихий» предлагает комфортное размещение для путешественников и деловых людей. Мы находимся в
              центре города, недалеко от основных достопримечательностей и транспортных узлов.
            </p>
          </div>
        </div>

        <div className="relative flex-1 items-start hidden xl:flex">
          <div
            className="relative z-20 flex w-[260px] flex-col gap-8
        rounded-3xl bg-green-700 px-7 py-8"
          >
            <div className="flex flex-col">
              <div className="flexBetween">
                <p className="regular-16 text-gray-300">Расположение</p>
                <Image src="/close.svg" alt="close" width={24} height={24} />
              </div>
              <p className="bold-20 text-white">Красноярск, Россия</p>
            </div>
            <div className="flexBetween">
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-300">Расстояние</p>
                <p className="bold-20 text-white">73 км</p>
              </div>
              <div className="flexBetween">
                <div className="flex flex-col">
                  <p className="regular-16 block text-gray-300">Высота</p>
                  <p className="bold-20 text-white">0.0131 км</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div id="WidgetHorizontalBlockId" />
      </div>
    </section>
  );
};

export default Hero;
