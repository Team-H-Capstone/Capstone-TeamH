import React, { useState } from 'react';
import ReactSound from 'react-sound';
import './MusicPlayer.css';
import 'react-circular-progressbar/dist/styles.css';
import Sound from './playSound';
import ProgressBar from './ProgressBar';
import StyleSlider from './Slider';

const playBtnImg = 'svg/play.svg';
const pauseBtnImg = 'svg/pause.svg';
const loudVolumeImg = 'svg/volume-2.svg';
const lowVolumeImg = 'svg/volume-1.svg';
const muteVolumeImg = 'svg/volume-x.svg';

const rainAudio = 'audio/rain.mp3';
const woodlandAudio = 'audio/woodland.mp3';
const streamAudio = 'audio/stream.mp3';

const rainImg = 'img/rain.jpg';
const woodlandImg = 'img/woodland.jpg';
const streamImg = 'img/stream.jpg';

// const rainVid = 'img/rain.mp4';
// const woodlandVid = 'img/woodland.mp4';

const MusicPlayer = () => {
  const [playButton, setPlayButton] = useState(playBtnImg);
  const [audioStatus, setAudioStatus] = useState(ReactSound.status.STOPPED); //* react-sound playStatus:
  const [time, setTime] = useState([120, 300, 600, 900]); //* timeValues is an array of time values in seconds for the time
  const [audioNames, setAudioNames] = useState(['Rain', 'Woodland', 'Stream']); //* audioNames is an array of audio names
  const [seekCurrentPosition, setSeekCurrentPosition] = useState(0); //* seekCurrentPosition is the current position of the audio track
  const [audio, setAudio] = useState(rainAudio); //* audio is current audio track
  const [bgImg, setBgImg] = useState(rainImg); //* bgImg is the background image
  const [desiredTime, setDesiredTime] = useState(120); //* desiredTime is the desired time in seconds
  const [volumeIcon, setVolumeIcon] = useState(); //* volumeIcon is the volume icon
  const [volume, setVolume] = useState(100); //* volume is the volume of the audio track
  const [mute, setMute] = useState(false); //* mute is the mute status of the audio track

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
    console.log('timeSelect: ' + e.duration);
  };

  const audioSelect = (name) => {
    console.log('audioSelect');
    if (name === 'Woodland') {
      setAudio(woodlandAudio);
      setBgImg(woodlandImg);
      // console.log('woodland', bgImg)
    } else if (name === 'Rain') {
      setAudio(rainAudio);
      setBgImg(rainImg);
    } else if (name === 'Stream') {
      setAudio(streamAudio);
      setBgImg('img/stream.jpg');
    }
  };

  const moveSeekBar = (pos) => {
    // console.log('moveSeekBar: ' + pos + ', ' + desiredTime);
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
      key={duration} //
      onClick={() => timeSelect({ duration })}
    >
      {duration / 60} Minutes
    </button>
  ));

  const audioOptions = audioNames.map((name) => (
    <button className="music_bt" key={name} onClick={() => audioSelect(name)}>
      {name}
    </button>
  ));

  const volumeChange = (value) => {
    setVolume(mute ? volume : value);
    setVolumeIcon(
      mute || value === 0
        ? muteVolumeImg
        : value <= 50
        ? lowVolumeImg
        : loudVolumeImg
    );
  };

  const toggleMute = () => {
    setVolumeIcon(
      !mute ? muteVolumeImg : volume <= 50 ? lowVolumeImg : loudVolumeImg
      );
      setMute(!mute);
  };

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
        <img src={bgImg} alt="backgroundImg" />
      </div>
      {/* <div className="mt-12 text-white">{timeOptions}</div> */}
      {/* <div className="grid mt-12 text-white">{audioOptions}</div> */}
      <div className="player_container">
        <img className="playPause" src={playButton} onClick={playPause} alt='playPause'/>

        <div className="volume_container">
          <img
            className="volume_icon"
            src={volumeIcon}
            onClick={toggleMute}
            alt='volume'
          />
          <div className="volume_bar">
            <StyleSlider
              id="volume_slider"
              onChange={volumeChange}
              step={1}
              min={0}
              max={100}
              value={mute ? 0 : volume}
            />
          </div>
        </div>

        <div className="audio_bar">
          <ProgressBar id='seek' percentage={seekCurrentPosition} />
        </div>
        <Sound
          audio={audio}
          playStatus={audioStatus}
          func={moveSeekBar}
          desireTime={desiredTime}
          volume={mute ? 0 : volume}
        />
        <div className="timer text-white">00 : 00</div>
        <div className="mt-12 text-white">{timeOptions}</div>
      </div>
      <div className="audio_menu text-white">{audioOptions}</div>
    </div>
  );
};

export default MusicPlayer;
