import React, { useState } from 'react'
import ReactSound from 'react-sound';

const Sound = ({ playStatus, audio, func, desireTime, volume}) => {
 const [position, setPosition] = useState(0);
 const [loop, setLoop] = useState(0);
  
  const handleSongPlaying = ({position, duration}) => {
    setPosition(position); //* current position of the audio track in milliseconds

    const timer = document.querySelector('.timer'); 
    let pos = position + loop * duration; //* current position of the audio track in milliseconds
    let min = Math.floor(pos / (1000 * 60)); //* convert milliseconds to minutes
    let sec = Math.floor(pos / (1000) % 60); // convert milliseconds to seconds
    
    min = ("0" + min).slice(-2); //* add a zero in front of the number if it is less than 10
    sec = ("0" + sec).slice(-2); 
    
    timer.innerHTML = `${min} : ${sec}`; 
    func(pos/1000); 
    
    console.log(Math.floor(pos/1000) + ", " + desireTime); 
  }
  
  return (
    <ReactSound
      url={audio} //* url is ReactSound's prop
      playStatus={playStatus}
      onPlaying={handleSongPlaying}
      onFinishedPlaying={() => setLoop(loop + 1)} //* loop the audio track
      onStop={() => setPosition(0) && setLoop(0)} //* reset the position of the audio track to 0
      position={position} 
      volume={volume}
      
    />
  );

}

export default Sound