import Link from 'next/link';
import styles from '@/styles/page.module.scss';

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>Title</h1>
      <div>Hello World! Тест работы</div>
      <ul>
        <li>
          <Link href="/categories">Категории</Link>
        </li>
        <li>
          <Link href="/products">Товар</Link>
        </li>
      </ul>
    </>
  );
}
