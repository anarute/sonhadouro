import dynamic from "next/dynamic";
import { useState } from "react";

import sonhosData from "../data/sonhos.json";

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Meta from "../components/meta";
import Sonhos from "../components/Sonhos";
import Navbar from "../components/Navbar";

const AudioPlayer = dynamic(() => import("../components/AudioPlayer"), {
  ssr: false,
});

export default function Home() {
  const [playing, setPlay] = useState(false);
  return (
    <>
      <Head>
        <title>sonhadouro</title>
      </Head>
      <Meta />
      <main className={styles.main}>
        <Navbar current='sonhos' />
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
