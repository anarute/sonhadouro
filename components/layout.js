import Meta from "../components/meta";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Layout(props) {
  return (
    <>
      <Meta />
      <div className={styles.main}>
        <Navbar current={props.current} />
        <main>{props.children}</main>
      </div>
    </>
  );
}
