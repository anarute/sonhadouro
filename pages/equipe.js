import sonhosData from "../data/equipe.json";

import Head from "next/head";
import dynamic from "next/dynamic";

import styles from "../styles/Home.module.css";
import Sonhos from "../components/Sonhos";
import Navbar from "../components/Navbar";

const AudioPlayer = dynamic(() => import("../components/AudioPlayer"), {
  ssr: false,
});

export default function Equipe() {
  return (
    <div className={styles.container}>
      <Head>
        <title>sonhadouro - equipe</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='//fonts.googleapis.com/css2?family=Flamenco&display=swap'
          rel='stylesheet'
        ></link>
      </Head>

      <main className={styles.main}>
        <Navbar />
        <Sonhos sonhosData={sonhosData} />
        <footer>{/* <AudioPlayer /> */}</footer>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
