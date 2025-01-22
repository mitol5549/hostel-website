import type { Metadata } from 'next';
import './globals.css';
import MainHeader from '@/components/MainHeader';
import Footer from '@/components/Footer';
import Head from 'next/head';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Хостел Тихий',
  description: 'Hotel Review UI/UX App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <Head>
        <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
      </Head>
      <body>
        <Providers>
          <MainHeader />
          <main className="relative overflow-hidden">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
