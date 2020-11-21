import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Navbar() {
  return (
    <section>
      <nav className={styles.menu}>
        <li className={styles.title}>
          <Link href='/'>sonhadouro</Link>
        </li>
        <li id='menu-sonhos'>
          <Link href='/'>sonhos</Link>
        </li>
        <li>
          <Link href='/equipe'>equipe</Link>
        </li>
        <li>
          <Link href='/projeto'>projeto</Link>
        </li>
        <li>
          <Link href='/noticias'>notícias</Link>
        </li>
      </nav>
    </section>
  );
}
