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
import { bird1Img, bird2Img, forestImg, rocksImg, waterImg, treeImg, circleChart, mapChart, mapChart2, covid, covid2, covid3, mentalImg, mentalImg1 } from './constant';
import ImageSlider from './ImageSlider';

const Home = () => {
  const text = document.getElementById('text');
  const bird1 = document.getElementById('bird1');
  const bird2 = document.getElementById('bird2');
  const forest = document.getElementById('forest');
  const rocks = document.getElementById('rocks');
  const water = document.getElementById('water');
  const btn = document.getElementById('home_btn');

  const mental = document.getElementById('mental');
  const mental1 = document.getElementById('mental1');
  const tree = document.getElementById('tree');

  window.addEventListener('scroll', function () {
    let value = window.scrollY;

    text.style.top = 50 + value * -0.5 + '%'; //* 0.5 is the speed of the movement
    bird1.style.top = value * -1.5 + 'px';
    bird1.style.left = value * 2 + 'px';
    bird2.style.top = value * -1.5 + 'px';
    bird2.style.left = value * -5 + 'px';
    // btn.style.marginTop = value * 1.5 + 'px';
    rocks.style.top = value * -0.1 + 'px';
    forest.style.top = value * 0.55 + 'px';

    mental.style.top = value * 0.55 + 'px';
    mental1.style.top = value * -1.5 + 'px';
    mental1.style.left = value * 2 + 'px';
  });

  const handleClick = () => {
    const target = document.getElementById('map_chart');
    // const target = document.querySelector('[name="question"]');
    target.scrollIntoView({ behavior: 'smooth' });
  };


  useEffect(() => {
    AOS.init();
  }, []);

  const [user] = useAuthState(auth);
  // console.log(user);

  return (
    <div className="w-full h-screen">
      <section id="main_sec" className="flex flex-col justify-center items-center w-full h-screen relative bg-[#ADD8E6] text-red ">
        <h2 className="flex justify-center items-center text-9xl font-bold text-center  " id="text" style={{ fontSize: '5vw' }} data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
          <span className="tracking-wide leading-none ">
            {' '}
            Hello <br />
            {user ? user.displayName : ''}!
          </span>
          {/* <br/>{user ? user.displayName : ""}! */}
        </h2>
        <img src={bird1Img} id="bird1" alt="bird1" />
        <img src={bird2Img} id="bird2" alt="bird2" className="mt-8" />
        {/* <img src={forestImg} id="forest" alt="forest" className="mt-10" /> */}
        {/* <button className='' id='home_btn' onClick={handleClick}>Explore</button> */}
        <img src={treeImg} id="tree" alt="tree" className="mt-10" />
        {/* <img src={rocksImg} id="rocks" alt="rocks" className="my-10" /> */}
        {/* <img src={waterImg} id='water' alt='water'/> */}

        {/* <img src={mentalImg1} id="mental1" alt="mental1" className="mt-10" /> */}
        {/* <img src={mentalImg} id="mental" alt="mental" className="mt-20" /> */}
      </section>
      
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
