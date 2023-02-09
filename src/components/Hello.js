import React, { useEffect, useRef } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Linky from 'react-scroll';
import Login from './Login';
import Register from './Register';
import { auth } from '../firebase/firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import Chart from './Chart';
import Quiz from './Quiz';
import AdultChart from '../AdultChart';
import { documentId } from 'firebase/firestore';
import { bird1Img, bird2Img, forestImg, rocksImg, waterImg, circleChart, mapChart, mapChart2, covid, covid2, covid3 } from './constant';
import ImageSlider from './ImageSlider';

const Home = () => {
  const text = document.getElementById('text');
  const bird1 = document.getElementById('bird1');
  const bird2 = document.getElementById('bird2');
  const forest = document.getElementById('forest');
  const rocks = document.getElementById('rocks');
  const water = document.getElementById('water');
  const btn = document.getElementById('home_btn');

  window.addEventListener('scroll', function () {
    let value = window.scrollY;

    text.style.top = 50 + value * -0.5 + '%'; //* 0.5 is the speed of the movement
    bird1.style.top = value * -1.5 + 'px';
    bird1.style.left = value * 2 + 'px';
    bird2.style.top = value * -1.5 + 'px';
    bird2.style.left = value * -5 + 'px';
    // btn.style.marginTop = value * 1.5 + 'px';
    // rocks.style.top = value * -0.1 + 'px';
    forest.style.top = value * 0.55 + 'px';
  });

  // const handleClick = () => {
  //   const target = document.getElementById('map_chart');
  //   // const target = document.querySelector('[name="question"]');
  //   target.scrollIntoView({ behavior: 'smooth' });
  // };


  const track = document.getElementById('image_track');
  const handleOnDown = (e) => {
    track.dataset.mouseDownAt = e.clientX;
  };

  const handleOnMove = (e) => {
    if (track.dataset.mouseDownAt === "0") return;

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
      { duration: 1200, fill: "forwards" }
    );
  
  const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
  };


    for (const image of track.getElementsByClassName("chart")) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }
  };


  useEffect(() => {
    AOS.init();
  }, []);

  const [user] = useAuthState(auth);
  // console.log(user);

  return (
    <div className="w-full h-screen">
      <section id="main_sec" className="flex flex-col justify-center items-center w-full h-screen relative bg-[#344E41] text-white">
        <h2 className="flex justify-center items-center text-9xl font-bold text-center" id="text" style={{ fontSize: '5vw' }} data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
          <span className="tracking-wide leading-none ">
            {' '}
            Hello <br />
            {user ? user.displayName : ''}!
          </span>
          {/* <br/>{user ? user.displayName : ""}! */}
        </h2>
        <img src={bird1Img} id="bird1" alt="bird1" />
        <img src={bird2Img} id="bird2" alt="bird2" className="mt-8" />
        <img src={forestImg} id="forest" alt="forest" className="mt-10" />
        {/* <button className='' id='home_btn' onClick={handleClick}>Explore</button> */}
        <img src={rocksImg} id="rocks" alt="rocks" className="my-10" />
        {/* <img src={waterImg} id='water' alt='water'/> */}
        {/* <h1
          className="flex justify-center items-center text-9xl font-bold text-center"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="2000"
          data-aos-offset="0"
          style={{fontSize: "5vw"}}
        >
          How are you doing today?
        </h1> */}
      </section>
      {/* <div id=''></div> */}
      {/* <section
        name="question"
        className="flex flex-col justify-center items-center w-full h-full bg-[#1e3a8a] text-white" style={{backgroundImage: "radial-gradient(#2b53c4, #1e3987, #325edb)"}}
      >
        
      </section> */}
      <div name="question" className="flex flex-col justify-center items-center w-full h-full bg-[#344E41] text-white relative p-24" >
        <h1 className="flex justify-center items-center text-9xl font-bold text-center" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0" style={{ fontSize: '5vw' }}>
          Welcome to
        </h1>
        <h1 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1100" data-aos-offset="0" className="title">
          BE MINDFUL
        </h1>
      </div>

      <ImageSlider/>

      <div name="question" className="flex flex-col justify-center items-center w-full h-full bg-[#344E41] text-white ">
        <br></br>
        <h1 className="flex justify-center text-center items-center text-5xl font-bold" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0" style={{ fontSize: '2vw' }}>
          Want to learn more about Mental Health? Take the quiz!
        </h1>
        <br></br>
        <Quiz />
      </div>
      <div
        name="question"
        className="flex flex-col justify-center items-center w-full h-full text-[#344E41]"
        
      >
        <h1
          className="flex justify-center items-center text-9xl font-bold text-center"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
          style={{ fontSize: "5vw" }}
        >
          Enter Our Interactive Rooms
        </h1>
        <div
          style={{
            width: '100vw',
            marginTop: 100,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Link to="/music">
            <div
              style={{
                display: "flex",
                width: "25vw",
                height: "25vh",
                alignItems: "right",
                border: "8px solid white",
                backgroundImage: `url("/img/meditation.jpeg")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: 50,
                marginRight: 25,
              }}
            >
              <h1
                style={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                  width: "100%",
                  fontSize: "3vw",
                  color: "#DAD7CD",
                }}
              >
                Music & Videos
              </h1>
            </div>
          </Link>

          <Link to="/memoryGame">
            <div
              style={{
                display: "flex",
                width: "25vw",
                height: "25vh",
                alignItems: "right",
                border: "8px solid white",
                backgroundImage: `url("/img/gameBackground.jpeg")`,
                backgroundPosition: "center",
                borderRadius: 50,
                color: "#DAD7CD",
              }}
            >
              <h1
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  fontSize: "3vw",
                }}
              >
                Games
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
