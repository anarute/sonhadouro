import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Navbar(props) {
  const { current } = props;

  return (
    <section>
      <nav className={styles.menu}>
        <li className={styles.title}>
          <Link href='/'>sonhadouro</Link>
        </li>
        <li
          id='menu-sonhos'
          className={current === "sonhos" ? styles.current : ""}
        >
          <Link href='/'>sonhos</Link>
        </li>
        <li className={current === "equipe" ? styles.current : ""}>
          <Link href='/equipe'>equipe</Link>
        </li>
        <li className={current === "projeto" ? styles.current : ""}>
          <Link href='/projeto'>projeto</Link>
        </li>
        <li className={current === "noticias" ? styles.current : ""}>
          <Link href='/noticias'>notícias</Link>
        </li>
      </nav>
    </section>
  );
}
