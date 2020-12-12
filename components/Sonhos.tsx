import { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import styles from "../styles/Home.module.css";

export default function Sonhos(props) {
  const { sonhosData } = props;
  const [showVideo, setShowVideo] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const toggleShowVideo = (video: string) => {
    console.log(video);
    setCurrentVideo(video);

    setShowVideo(!showVideo);
  };

  const SonhosMenu = () => (
    <ul className={styles.submenu}>
      {sonhosData.map((sonho) => (
        <li
          key={`link-${sonho.id}`}
          onClick={() => {
            toggleShowVideo(sonho.video);
          }}
          className={styles.submenuLink}
          id={`link-${sonho.id}`}
        >
          {sonho.name}
          <div
            key={`thumb-${sonho.id}`}
            className={
              sonho.equipe
                ? `${styles.sonhoThumb} ${styles.thumbEquipe}`
                : `${styles.sonhoThumb} ${styles.thumbEntrevista}`
            }
            onClick={() => {
              toggleShowVideo(sonho.video);
            }}
            id={`thumb-${sonho.id}`}
          >
            <img src={sonho.thumb} />
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={styles.thumbWrapper}>
      <SonhosMenu />
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
