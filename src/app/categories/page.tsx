import Link from 'next/link';

export default function Categories() {
  return (
    <>
      <h1>Категории</h1>
      <ul>
        <li>
          <Link href="/">Главная</Link>
        </li>
        <li>
          <Link href="/products">Товар</Link>
        </li>
      </ul>
    </>
  );
}
