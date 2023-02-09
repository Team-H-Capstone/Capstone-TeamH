import React, { useEffect} from 'react';
import { circleChart, covid, covid2, covid3, mapChart, mapChart2 } from './constant';

const ImageSlider = () => {
  const track = document.getElementById('image_track');

  const handleOnDown = (e) => {
    track.dataset.mouseDownAt = e.clientX;
  };

  const handleOnMove = (e) => {
    if (track.dataset.mouseDownAt === '0') return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX, // this is the amount of pixels the mouse has moved since the last event fired
      maxDelta = window.innerWidth / 2; // this is the maximum amount of pixels the mouse can move before the image is fully translated to the other side

    const percentage = (mouseDelta / maxDelta) * -100,
      nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
      nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = nextPercentage;

    track.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 1200, fill: 'forwards' }
    );

    for (const image of track.getElementsByClassName('chart')) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: 'forwards' } 
      );
    }
  };

  const handleOnUp = () => {
    track.dataset.mouseDownAt = '0';
    track.dataset.prevPercentage = track.dataset.percentage;
  };

  return (
    <div id="image_track" onMouseDown={handleOnDown} onMouseMove={handleOnMove} onMouseUp={handleOnUp} data-mouse-down-at="0" data-prev-percentage="0">
      <img className="chart" src={circleChart} draggable="false"></img>
      <img className="chart" src={mapChart} draggable="false"></img>
      <img className="chart" src={mapChart2} draggable="false"></img>
      <img className="chart" src={covid} draggable="false"></img>
      <img className="chart" src={covid2} draggable="false"></img>
      <img className="chart" src={covid3} draggable="false"></img>
    </div>
  );
};

export default ImageSlider;
