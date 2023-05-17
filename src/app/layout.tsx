import React from 'react';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { Footer, Header } from '@/components';
import '@/styles/global.scss';

const inter = Inter({ subsets: ['latin', 'cyrillic'], weight: '400' });
export const metadata: Metadata = {
  title: 'Taburet',
  description: 'Онлайн магазин мебели',
  keywords: ['Купить', 'Онлайн', 'Мебель', 'Стул'],
  icons: {
    icon: '/icon.png',
  },
};

// TODO: stick fonts, nav up in layout.tsx

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning={true} because certain browser extensions can conflict with Next.js and trigger unnecessary warning messages.
    <html lang="ru">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
