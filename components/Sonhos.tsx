import { useState } from "react";
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

  const toggleShowThumb = (name: string) => {
    // setCurrentVideo(video);
    // document.getElementById(`thumb-${name}`).classList.add("fullOpacity");
    setCurrentThumb(name);
  };

  const classesThumb = (sonho: any) => {
    let classes = `${styles.sonhoThumb}`;
    classes += currentThumb == sonho.name ? ` ${styles.fullOpacity}` : "";
    // classes +=
    //   (showSonhos && !sonho.equipe) || (!showSonhos && sonho.equipe)
    //     ? ` ${styles.show}`
    //     : ` ${styles.hide}`;
    return classes;
  };

  const SonhosMenu = () => (
    <ul className={styles.submenu}>
      {sonhosData.map((sonho) => {
        return (
          <li
            key={`link-${sonho.name}`}
            // className={
            //   (showSonhos && !sonho.equipe) || (!showSonhos && sonho.equipe)
            //     ? `${styles.show}`
            //     : `${styles.hide}`
            // }
            onClick={() => {
              toggleShowVideo(sonho.video);
            }}
            onMouseEnter={() => {
              toggleShowThumb(sonho.name);
            }}
            onMouseOut={() => {
              toggleShowThumb("");
            }}
          >
            {sonho.name}
          </li>
        );
      })}
    </ul>
  );

  const SonhosElements = () => (
    <div className={styles.sonhosContainer}>
      {sonhosData.map((sonho) => {
        return (
          <div key={`thumb-${sonho.name}`} className={classesThumb(sonho)}>
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
