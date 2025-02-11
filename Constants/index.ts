// NAVIGATION
export const NAV_LINKS = [
  { href: '#home', key: 'home', label: 'Главная' },
  { href: '#rooms', key: 'rooms ', label: 'Номера' },
  { href: '#features', key: 'features', label: 'Удобства' },
  { href: '#gallery', key: 'gallery', label: 'Галерея' },
  { href: '#contacts', key: 'contacts', label: 'Контакты' },
];

export const rooms = [
  {
    id: 1,
    images: ['/img-1.png', '/img-2.png', '/img-3.png'],
    title: 'Одноместный номер',
    description: 'Уютный номер для одного гостя с всеми удобствами',
    price: 1500,
    capacity: 1,
  },
  {
    id: 2,
    images: ['/img-1.png', '/img-2.png', '/img-3.png'],
    title: 'Двухместный номер',
    description: 'Просторный номер с двумя кроватями',
    price: 2500,
    capacity: 2,
  },
  {
    id: 3,
    images: ['/img-1.png', '/img-2.png', '/img-3.png'],
    title: 'Общий номер',
    description: 'Общий номер на 10 человек с индивидуальными шкафчиками',
    price: 800,
    capacity: 10,
  },
];

// CAMP SECTION
export const PEOPLE_URL = ['/person-1.png', '/person-2.png', '/person-3.png', '/person-4.png'];

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
  // {
  //   title: 'Номера для некурящих',
  //   icon: '/smoking.svg',
  //   variant: 'green',
  //   description: 'В нашем хостеле есть отдельные номера только для некурящих',
  // },
  {
    title: 'Вызов такси',
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
  // {
  //   title: 'Можно с питомцами',
  //   icon: '/pet.svg',
  //   variant: 'green',
  //   description: 'Допускается размещение домашних животных по предварительному запросу',
  // },
  // {
  //   title: 'Услуга будильника',
  //   icon: '/alarm.svg',
  //   variant: 'green',
  //   description: 'Администратор разбудит вас в условленое время, чтобы вы ничего не проспали',
  // },
  // {
  //   title: 'Библиотека',
  //   icon: '/library.svg',
  //   variant: 'green',
  //   description: 'Для тех, кто не может жить без чтения, мы собрали небольшую библиотеку',
  // },
  // {
  //   title: 'Настольные игры',
  //   icon: '/chess.svg',
  //   variant: 'green',
  //   description: 'Отличное развлечение для дружной компании, несколько популярных игр на выбор',
  // },
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

export const FOOTER_CONTACT_INFO = {
  title: 'Наши контакты',
  links: [
    { label: 'Адрес', value: '660068, Красноярск, пер. Тихий 2' },
    { label: 'Телефон', value: '+7 (391) 271 21 81' },
    { label: '', value: '+7 (963) 191 21 81' },
    { label: 'E-Mail', value: 'info@отельтихий.рф' },
  ],
};

export const SOCIALS = {
  title: 'Соцсети и мессенджеры',
  links: ['/facebook.svg', '/instagram.svg', '/twitter.svg'],
};
