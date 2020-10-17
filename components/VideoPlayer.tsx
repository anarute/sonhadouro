import React from "react";
import ReactPlayer from "react-player";
import styles from "../styles/Home.module.css";

export default function VideoPlayer(props) {
  return (
    <div className={styles.player}>
      <ReactPlayer
        width='960px'
        height='540px'
        url={props.path}
        controls={true}
      />
    </div>
  );
}
