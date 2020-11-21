import { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import styles from "../styles/Home.module.css";

export default function Sonhos(props) {
  const { sonhosData } = props;
  const [showVideo, setShowVideo] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  const [currentThumb, setCurrentThumb] = useState("");

  const toggleShowVideo = (video: string) => {
    console.log(video);
    setCurrentVideo(video);

    setShowVideo(!showVideo);
  };

  const toggleShowThumb = (id: string) => {
    setCurrentThumb(id);
  };

  const SonhosMenu = () => (
    <ul className={styles.submenu}>
      {sonhosData.map((sonho) => (
        <li
          key={`link-${sonho.id}`}
          onClick={() => {
            toggleShowVideo(sonho.video);
          }}
          onMouseEnter={() => {
            toggleShowThumb(sonho.id);
          }}
          onMouseOut={() => {
            toggleShowThumb("");
          }}
          className={styles.test}
          id={`link-${sonho.id}`}
        >
          {sonho.name}
        </li>
      ))}
    </ul>
  );

  const SonhosElements = () => (
    <div className={styles.sonhosContainer}>
      {sonhosData.map((sonho) => (
        <div
          key={`thumb-${sonho.id}`}
          className={
            currentThumb == sonho.id
              ? `${styles.sonhoThumb} ${styles.fullOpacity}`
              : styles.sonhoThumb
          }
          onClick={() => {
            toggleShowVideo(sonho.video);
          }}
          id={`thumb-${sonho.id}`}
        >
          <img src={sonho.thumb} />
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.thumbWrapper}>
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
  );
}
