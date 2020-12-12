import React, { useEffect, useRef, useState } from "react";

import WaveSurfer from "wavesurfer.js";
import styles from "../styles/AudioPlayer.module.css";

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "#eee",
  progressColor: "#444",
  cursorColor: "#ddd",
  barWidth: 3,
  barRadius: 3,
  responsive: true,
  height: 100,
  normalize: true,
  partialRender: true,
});

export default function Waveform({ url, playing, setPlay }) {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [loading, setLoading] = useState(true);

  if (wavesurfer && wavesurfer.current) {
    if (playing) {
      wavesurfer.current.play();
    } else {
      wavesurfer.current.pause();
    }
    if (wavesurfer.current.isPlaying() !== playing)
      setPlay(wavesurfer.current.isPlaying());
  }

  useEffect(() => {
    setPlay(false);
    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(url);

    wavesurfer.current.on("pause", function () {
      setPlay(false);
    });
    wavesurfer.current.on("ready", function () {
      setLoading(false);
    });
    return () => wavesurfer.current.destroy();
  }, [url, setPlay]);

  const handlePlayPause = () => {
    setPlay(!playing);
  };

  return (
    <div className={styles.audioWrapper}>
      {loading ? (
        <div className={styles.loadBar}>
          <img src='/img/loader.svg' alt='loader' />
        </div>
      ) : (
        <div className={styles.controls}>
          <button onClick={handlePlayPause} className={styles.controlButton}>
            {!playing ? (
              <div className={styles.triangle}></div>
            ) : (
              <div className={styles.pause}>▌▌</div>
            )}
          </button>
        </div>
      )}
      <div id='waveform' ref={waveformRef} />
    </div>
  );
}
