import Link from 'next/link';

export default function Products() {
  return (
    <>
      <h1>Товар</h1>
      <ul>
        <li>
          <Link href="/">Главная</Link>
        </li>
        <li>
          <Link href="/categories">Категории</Link>
        </li>
      </ul>
    </>
  );
}
