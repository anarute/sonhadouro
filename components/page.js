import dynamic from "next/dynamic";
import { useState } from "react";

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Meta from "./meta";
import Sonhos from "./Sonhos";
import Navbar from "./Navbar";

const AudioPlayer = dynamic(() => import("./AudioPlayer"), {
  ssr: false,
});

export default function Page({ sonhosData, pageName }) {
  const [playing, setPlay] = useState(false);
  return (
    <>
      <Head>
        <title>sonhadouro</title>
      </Head>
      <Meta />
      <main className={styles.main}>
        <Navbar current={pageName} />
        <Sonhos sonhosData={sonhosData} setPlay={setPlay} />
      </main>
      <footer className={styles.footer}>
        <div id='trilha'>
          <AudioPlayer
            url='/audio/soundtrack.mp3'
            playing={playing}
            setPlay={setPlay}
          />
        </div>
      </footer>
    </>
  );
}
