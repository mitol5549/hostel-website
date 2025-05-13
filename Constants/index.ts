// NAVIGATION
export const NAV_LINKS = [
  { href: '#home', key: 'home', label: 'Главная' },
  { href: '#gallery', key: 'gallery', label: 'Галерея' },
  { href: '#rooms', key: 'rooms ', label: 'Номера' },
  { href: '#features', key: 'features', label: 'Удобства' },
  { href: '#contacts', key: 'contacts', label: 'Контакты' },
];

// HERO SECTION
export const HERO = {
  image: {
    src: '/hero-back.png',
    alt: 'Хостел "Тихий" - комфортное проживание в центре Красноярска',
  },
  logo: {
    src: '/tihii-logo.svg',
    alt: 'Логотип хостела Тихий',
    width: 1171,
    height: 490,
  },
  description:
    'Хостел «Тихий» предлагает комфортное размещение для путешественников и деловых людей. Мы находимся в центре города, недалеко от основных достопримечательностей и транспортных узлов. Наш хостел - это идеальное сочетание комфорта, доступности и удобного расположения.',
  info: {
    location: 'Красноярск, Россия',
    distance: '0.5 км',
    roomsCount: 9,
  },
};

// LAYOUT
export const LAYOUT = {
  heroHeight: 'calc(100vh-4rem)',
};

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Круглосуточная регистрация',
    icon: '/24-hours.svg',
    variant: 'green',
    description: 'Мы работаем 24/7 и поэтому всегда рады гостям в любое время',
  },
  {
    title: 'Бесплатный Wi-Fi',
    icon: '/wi-fi.svg',
    variant: 'green',
    description: 'Высокоскоростной интернет на всей территории хостела',
  },
  {
    title: 'Общая кухня',
    icon: '/kitchen.svg',
    variant: 'green',
    description: 'Воспользуйтесь общей кухней со всей необходимой бытовой техникой',
  },
  {
    title: 'Трансфер',
    icon: '/taxi.svg',
    variant: 'green',
    description: 'Наши администраторы всегда помогут вызвать такси по низким ценам',
  },
  {
    title: 'Бесплатная парковка',
    icon: '/parking.svg',
    variant: 'orange',
    description: 'Частная парковка на месте (предварительный заказ не требуется)',
  },
  {
    title: 'Гладильная доска, утюг',
    icon: '/iron.svg',
    variant: 'green',
    description: 'Наш утюг и гладильная доска помогут приветси ваши вещи в порядок',
  },
  {
    title: 'Стиральная машинка',
    icon: '/washing-machine.svg',
    variant: 'orange',
    description: 'Можете воспользоваться нашей стиральной машиной',
  },
];

// CONTACTS SECTION
export const CONTACTS = {
  title: 'Наши контакты',
  info: {
    links: [
      { label: 'Адрес', value: '660068, Красноярск, пер. Тихий 2' },
      { label: 'Телефон', value: '+7 (391) 271 21 81' },
      { label: '', value: '+7 (963) 191 21 81' },
      { label: 'E-Mail', value: 'hostel@profrezerv.pro' },
    ],
  },
  social: [
    {
      name: "What's App",
      url: 'https://wa.me/79059719037',
      icon: '/whatsapp.svg',
    },
  ],
};

// GALLERY SECTION
export const GALLERY = {
  title: 'Фотогалерея',
  slideCount: 6,
  options: {
    align: 'start' as const,
    dragFree: true,
    loop: true,
  },
};
