import React, { useState } from 'react'
import ReactSound from 'react-sound';

const Sound = ({ playStatus, audio, func, desireTime}) => {
 const [pos, setPos] = useState(0);
  
  const handleSongPlaying = (obj) => {
    setPos(obj.position); //* current position of the audio track in milliseconds
    const timer = document.querySelector('.timer'); 
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
      url={audio}
      playStatus={playStatus}
      onPlaying={handleSongPlaying}
    />
  );

}

export default Sound