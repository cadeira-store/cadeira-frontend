import React from 'react';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { Footer, Header } from '@/components';
import '@/styles/global.scss';
import Link from 'next/link';

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

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>Products Layout</h1>
      <Link href="products/new">New</Link>
      {children}
    </>
  );
}
