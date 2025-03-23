import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import MainHeader from '@/components/MainHeader';
import Footer from '@/components/Footer';
import { Providers } from './providers';

import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Хостел Тихий',
  description: 'Хостел "Тихий" в Красноярске',
  icons: {
    icon: '/x-logo.svg',
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
