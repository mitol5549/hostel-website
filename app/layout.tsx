import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import MainHeader from '@/components/layout/MainHeader';
import { Providers } from './providers';

import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://xn--e1agaehq2ac2a1e.xn--p1ai'),
  title: 'Хостел "Тихий" в Красноярске | Комфортное проживание в центре города',
  description:
    'Хостел "Тихий" в центре Красноярска предлагает комфортное размещение с бесплатным Wi-Fi, круглосуточной регистрацией, общей кухней и парковкой. Бронируйте онлайн по лучшим ценам.',
  icons: {
    icon: '/x-logo.svg',
  },
  keywords: [
    'хостел',
    'Красноярск',
    'комфортное проживание',
    'бесплатный Wi-Fi',
    'круглосуточная регистрация',
    'бронирование хостела',
    'недорогой хостел',
    'центр города',
    'хостел в Красноярске',
    'гостиница Красноярск',
    'отель Красноярск',
    'проживание в Красноярске',
  ],
  authors: [{ name: 'Хостел "Тихий"' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://xn--e1agaehq2ac2a1e.xn--p1ai',
  },
  openGraph: {
    title: 'Хостел "Тихий" в Красноярске | Комфортное проживание в центре города',
    description:
      'Ищете комфортное и доступное проживание в центре Красноярска? Хостел "Тихий" предлагает уютные номера с бесплатным Wi-Fi, круглосуточной регистрацией, общей кухней и парковкой.',
    url: 'https://xn--e1agaehq2ac2a1e.xn--p1ai/',
    siteName: 'Хостел "Тихий"',
    images: [
      {
        url: 'https://xn--e1agaehq2ac2a1e.xn--p1ai/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Фасад хостела "Тихий" в Красноярске',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Хостел "Тихий" в Красноярске | Комфортное проживание в центре города',
    description:
      'Комфортное размещение в центре Красноярска с бесплатным Wi-Fi и круглосуточной регистрацией',
    images: ['https://xn--e1agaehq2ac2a1e.xn--p1ai/og-image.jpg'],
  },
  verification: {
    google: 'ваш-google-verification-code',
    yandex: 'ваш-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru' className={`scroll-smooth ${montserrat.variable}`}>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
      </head>
      <body>
        <Providers>
          <MainHeader />
          <main className='relative overflow-hidden'>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
