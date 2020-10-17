import { useState } from "react";
import sonhosData from "../data/sonhos.json";
import VideoPlayer from "./VideoPlayer";
import styles from "../styles/Home.module.css";

const SonhosMenu = () => (
  <ul className={styles.submenu}>
    {sonhosData.map((sonho) => {
      return <li key={`link-${sonho.name}`}>{sonho.name}</li>;
    })}
  </ul>
);

const Video = () => (
  <ul className={styles.submenu}>
    {sonhosData.map((sonho) => {
      return <li key={`link-${sonho.name}`}>{sonho.name}</li>;
    })}
  </ul>
);

export default function Sonhos(props) {
  const { showSonhos } = props;
  const [showVideo, setShowVideo] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const toggleShowVideo = (video: string) => {
    console.log(video);
    setCurrentVideo(video);

    setShowVideo(!showVideo);
  };

  const SonhosElements = () => (
    <div className={styles.sonhosContainer}>
      {sonhosData.map((sonho) => {
        return (
          <div key={`thumb-${sonho.name}`} className={styles.sonhoThumb}>
            <div
              onClick={() => {
                toggleShowVideo(sonho.video);
              }}
            >
              <img src={sonho.thumb} />
            </div>
          </div>
        );
      })}
    </div>
  );

  return showSonhos ? (
    <div>
      <SonhosMenu />
      <SonhosElements />
      <div
        className={
          showVideo
            ? `${styles.playerWrapper} ${styles.show}`
            : `${styles.playerWrapper} ${styles.hide}`
        }
      >
        <div
          className={styles.overlay}
          onClick={() => {
            toggleShowVideo("");
          }}
        ></div>
        <VideoPlayer path={currentVideo} />
      </div>
    </div>
  ) : (
    <div>hide</div>
  );
}
