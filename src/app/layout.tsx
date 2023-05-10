import './styles/globals.scss';

import React from 'react';

import { Footer, Header } from '@/components';

export const metadata = {
  title: 'Cadeira',
  description: 'Онлайн магазин мебели',

  keywords: ['Купить', 'Онлайн', 'Мебель', 'Стул'],
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
