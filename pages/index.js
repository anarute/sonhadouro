import { useState } from "react";

import Head from "next/head";
import dynamic from "next/dynamic";

import styles from "../styles/Home.module.css";
import Sonhos from "../components/Sonhos";

const AudioPlayer = dynamic(() => import("../components/AudioPlayer"), {
  ssr: false,
});

export default function Home() {
  const [showSonhos, setSonhos] = useState(true);

  const toggleSonhos = (equipe) => {
    setSonhos(equipe);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>sonhadouro</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='//fonts.googleapis.com/css2?family=Flamenco&display=swap'
          rel='stylesheet'
        ></link>
      </Head>

      <main className={styles.main}>
        <nav className={styles.menu}>
          <li className={styles.title}>sonhadouro</li>
          <li id='menu-sonhos' onClick={() => toggleSonhos(true)}>
            sonhos
          </li>
          <li onClick={() => toggleSonhos(false)}>equipe</li>
          <li>
            <a href='/projeto'>projeto</a>
          </li>
          <li>notícias</li>
        </nav>
        <Sonhos showSonhos={showSonhos} />
        <footer>{/* <AudioPlayer /> */}</footer>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
