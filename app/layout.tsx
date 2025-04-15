import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import MainHeader from '@/components/MainHeader';
import { Providers } from './providers';

import './globals.css';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://xn--e1agaehq2ac2a1e.xn--p1ai'),
  title: 'Хостел "Тихий" в Красноярске',
  description:
    'Комфортное размещение в центре Красноярска с бесплатным Wi-Fi, круглосуточной регистрацией и другими удобствами.',
  icons: {
    icon: '/x-logo.svg',
  },
  keywords: [
    'хостел',
    'Красноярск',
    'комфортное проживание',
    'бесплатный Wi-Fi',
    'круглосуточная регистрация',
  ],
  authors: [{ name: 'Хостел "Тихий"' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Хостел "Тихий" в Красноярске',
    description:
      'Ищете комфортное и доступное проживание в центре Красноярска? Хостел "Тихий" предлагает уютные номера с бесплатным Wi-Fi и круглосуточной регистрацией.',
    url: 'https://xn--e1agaehq2ac2a1e.xn--p1ai/',
    siteName: 'Хостел "Тихий"',
    images: [
      {
        url: 'https://xn--e1agaehq2ac2a1e.xn--p1ai/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Фасад хостела "Тихий"',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru' className={`scroll-smooth ${montserrat.variable}`}>
      <body>
        <Providers>
          <MainHeader />
          <main className='relative overflow-hidden'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
