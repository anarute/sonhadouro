import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Navbar() {
  return (
    <section>
      <nav className={styles.menu}>
        <li className={styles.title}>
          <Link href='/'>
            <a>sonhadouro</a>
          </Link>
        </li>
        <li id='menu-sonhos'>
          <Link href='/'>
            <a>sonhos</a>
          </Link>
        </li>
        <li>
          <Link href='/equipe'>
            <a>equipe</a>
          </Link>
        </li>
        <li>
          <Link href='/projeto'>
            <a>projeto</a>
          </Link>
        </li>
        <li>notícias</li>
      </nav>
    </section>
  );
}
