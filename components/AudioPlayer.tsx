import React, { useEffect } from "react";
import WaveSurfer from "wavesurfer.js";

export default function AudioPlayer() {
  useEffect(() => {
    function loadAudio() {
      var playButton = document.querySelector("#playBtn"),
        toggleMuteButton = document.querySelector("#toggleMuteBtn"),
        setMuteOnButton = document.querySelector("#setMuteOnBtn"),
        setMuteOffButton = document.querySelector("#setMuteOffBtn");

      var wavesurfer = WaveSurfer.create({
        container: document.querySelector("#waveform"),
        waveColor: "#D9DCFF",
        progressColor: "#4353FF",
        cursorColor: "#4353FF",
        barWidth: 3,
        barRadius: 3,
        cursorWidth: 1,
        height: 200,
        barGap: 3,
      });

      wavesurfer.on("error", function (e) {
        console.warn(e);
      });

      wavesurfer.once("ready", function () {
        playButton.onclick = function () {
          wavesurfer.playPause();
        };

        toggleMuteButton.onclick = function () {
          wavesurfer.toggleMute();
        };

        setMuteOnButton.onclick = function () {
          wavesurfer.setMute(true);
        };

        setMuteOffButton.onclick = function () {
          wavesurfer.setMute(false);
        };
      });
      wavesurfer.load("/audio/soundtrack.mp3");
    }
    loadAudio();
  }, []);

  return (
    <div>
      <div id='waveform'></div>
      <button id='playBtn'>Play/Pause</button>
      <button id='toggleMuteBtn'>Mute</button>
      <button id='setMuteOnBtn'>Mute</button>
      <button id='setMuteOffBtn'>UnMute</button>
    </div>
  );
}
