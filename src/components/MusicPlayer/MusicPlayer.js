import React, { useState } from 'react';
import ReactSound from 'react-sound';
import './MusicPlayer.css';
import Sound from './playSound';
import ProgressBar from './ProgressBar';

const playBtnImg = 'svg/play.svg';
const pauseBtnImg = 'svg/pause.svg';

const rainAudio = 'audio/rain.mp3';
const woodlandAudio = 'audio/woodland.mp3';

const rainImg = 'img/rain.jpg';
const woodlandImg = 'img/woodland.jpg';

// const rainVid = 'img/rain.mp4';
// const woodlandVid = 'img/woodland.mp4';

const MusicPlayer = () => {
  const [playButton, setPlayButton] = useState(playBtnImg);
  const [audioStatus, setAudioStatus] = useState(ReactSound.status.STOPPED); //* react-sound playStatus:
  const [time, setTime] = useState([120, 300, 600, 900]); //* timeValues is an array of time values in seconds for the time
  const [audioNames, setAudioNames] = useState(['Rain', 'Woodland']); //* audioNames is an array of audio names
  const [seekCurrentPosition, setSeekCurrentPosition] = useState(0); //* seekCurrentPosition is the current position of the audio track
  const [audio, setAudio] = useState(rainAudio); //* audio is current audio track
  const [bgImg, setBgImg] = useState(rainImg); //* bgImg is the background image
  const [desiredTime, setDesiredTime] = useState(120); //* desiredTime is the desired time in seconds

  const playPause = () => {
    console.log('playPause');
    if (playButton === playBtnImg) {
      setPlayButton(pauseBtnImg);
      setAudioStatus(ReactSound.status.PLAYING);
    } else if (playButton === pauseBtnImg) {
      setPlayButton(playBtnImg);
      setAudioStatus(ReactSound.status.PAUSED);
    }
  };

  const timeSelect = (e) => {
    setDesiredTime(e.duration);
  };

  const audioSelect = (name) => {
    console.log('audioSelect');
    if (name === 'Woodland') {
      setAudio(woodlandAudio);
      setBgImg(woodlandImg);
    } else if (name === 'Rain') {
      setAudio(rainAudio);
      setBgImg(rainImg);
    }
  };

  const moveSeekBar = (pos) => {
    setSeekCurrentPosition((pos / desiredTime) * 100); //* current position of the audio track in percentage of the desiredTime
    if (Math.floor(pos) === desiredTime) {
      //* if the current position of the audio track is equal to the desiredTime then stop the audio track
      // setPlayButton(playBtnImg)
      setAudioStatus(ReactSound.status.STOPPED);
    }
  };

  const timeOptions = time.map((duration) => (
    <button
      className="music_bt"
      key={duration}
      onClick={() => timeSelect({ duration })}
    >
      {duration / 60} Minutes
    </button>
  ));

  const timeOption = time.map((duration) => (
    <label className="time_option" key={duration}>
      <input
        type="radio"
        name="time"
        value={duration}
        onChange={() => timeSelect({ duration })}
      />
      {duration / 60} Minutes
    </label>
  ));

  const audioOptions = audioNames.map((name) => (
    <button className="music_bt" key={name} onClick={() => audioSelect(name)}>
      {name}
    </button>
  ));

  return (
    // <div className="flex max-w-screen-xl my-10 h-screen">
    <div className="app_container">
      <div className="background_overlay"></div>
      <div className="background">
        <video
          loop
          playsInline
          autoPlay
          disablePictureInPicture
          controlsList="nodownload noplaybackrate"
          id="bg_vid"
        >
          <source
            // src="https://assets.calm.com/02468a3ae77a0cd4b8104fda6b0164e8.mp4"
            src={bgImg}
            type="video/mp4"
          ></source>
        </video>
        {/* <img src={bgImg} alt="backgroundImg" /> */}
      </div>
      <div className="mt-12 text-white">{timeOption}</div>
      <div className="player_container">
        <img className="playPause" src={playButton} onClick={playPause}></img>
        <div className="audio_bar">
          <ProgressBar percentage={seekCurrentPosition} />
        </div>
        <Sound
          audio={audio}
          playStatus={audioStatus}
          func={moveSeekBar}
          desireTime={desiredTime}
        />
        <div className="timer text-white">00 : 00</div>
      </div>
      <div className="mt-12 text-white">{audioOptions}</div>
    </div>
  );
};

export default MusicPlayer;
