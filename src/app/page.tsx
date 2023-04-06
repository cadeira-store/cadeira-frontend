import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin', 'cyrillic'], weight: '400' });

export default function Home() {
  return (
    <>
      <h1>Title</h1>
      <div className={inter.className}>Hello World! Тест работы</div>
    </>
  );
}
