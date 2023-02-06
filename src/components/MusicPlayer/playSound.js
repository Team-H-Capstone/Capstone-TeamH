import React, { useState } from 'react'
import ReactSound from 'react-sound';

const Sound = (props) => {
 const [position, setPosition] = useState(0);
 const [loop, setLoop] = useState(0);
  
  const handleSongPlaying = ({position, duration}) => {
    setPosition(position); //* current position of the audio track in milliseconds

    // const timer = document.querySelector('.timer'); 
    const pos = position + loop * duration; //* current position of the audio track in milliseconds
    const min = Math.floor(pos / (1000 * 60)); //* convert milliseconds to minutes
    const sec = Math.floor(pos / (1000) % 60); // convert milliseconds to seconds
    
    const formattedMin = ('0' + min).slice(-2); //* format the minutes and seconds to 2 digits
    const formattedSec = ('0' + sec).slice(-2);
    
    // timer.innerHTML = `${formattedMin} : ${formattedSec}`; 
    props.func(pos/1000); 
    
    console.log(Math.floor(pos/1000) + ", " + props.desireTime); 
  }
  
  return (
    <ReactSound
      url={props.audio} //* url is ReactSound's prop
      playStatus={props.playStatus}
      onPlaying={handleSongPlaying}
      // onFinishedPlaying={() => {
      //   if (props.playStatus !== ReactSound.status.PAUSED) {
      //     setLoop(loop + 1);
      //   }
      // }}
      onFinishedPlaying={() => setPosition(0) && setLoop(loop + 1) && props.play()}
      onStop={() => setPosition(0) && setLoop(0)} //* reset the position of the audio track to 0
      position={position} 
      volume={props.volume}
      
    />
  );

}

export default Sound