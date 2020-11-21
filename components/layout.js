import Meta from "../components/meta";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className={styles.main}>
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
}
