import sonhosData from "../data/equipe.json";

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Meta from "../components/meta";
import Sonhos from "../components/Sonhos";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>sonhadouro</title>
      </Head>
      <Meta />
      <main className={styles.main}>
        <Navbar />
        <Sonhos sonhosData={sonhosData} />
      </main>
      <footer className={styles.footer}>
        <div id='trilha'>
          <iframe
            width='100%'
            height='100'
            scrolling='no'
            frameborder='no'
            src='//w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F114286830%3Fsecret_token%3Ds-86avf&amp;color=d3d3d3&amp;auto_play=false&amp;show_artwork=false&amp;show_user=false&amp;show_comments=false&amp;sharing=false&amp;liking=false'
          ></iframe>
        </div>
      </footer>
    </>
  );
}
