import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { HiArrowNarrowRight } from "react-icons/hi";
import Linky from "react-scroll";
import Login from "./Login";
import Register from "./Register";
import { auth } from "../firebase/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import Chart from "./Chart";
import Quiz from "./Quiz";
import AdultChart from "../AdultChart";
import MusicPlayer from "./MusicPlayer/MusicPlayer";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className="w-full h-screen">
      <section className="flex flex-col justify-center items-center w-full h-full bg-[#1e3a8a] text-[#3A5A40]" style={{backgroundImage: "radial-gradient(#DAD7CD, #A3B18A, #588157)"}}>
        <h1
          className="flex justify-center items-center text-9xl font-bold text-center"
          style={{fontSize: "5vw"}}
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
        >
          Hello {user ? user.displayName : ""}!
        </h1>
        <h1
          className="flex justify-center items-center text-9xl font-bold text-center"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="2000"
          data-aos-offset="0"
          style={{fontSize: "5vw"}}
        >
          How are you doing today?
        </h1>
      </section>
      {/* <section
        name="question"
        className="flex flex-col justify-center items-center w-full h-full bg-[#1e3a8a] text-white" style={{backgroundImage: "radial-gradient(#2b53c4, #1e3987, #325edb)"}}
      >
        
      </section> */}
      <section name="question" className="flex flex-col justify-center items-center w-full h-full text-[#3A5A40]" style={{backgroundImage: "radial-gradient(#DAD7CD, #A3B18A, #588157)"}}>
        <h1
          className="flex justify-center items-center text-9xl font-bold text-center"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
          style={{fontSize: "5vw"}}
        >
          Welcome to
        </h1>
        <h1
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="1100"
          data-aos-offset="0"
          className="title"
        >
          BE MINDFUL
        </h1>
      </section>
      <section className="flex flex-col justify-center items-center w-full h-full text-[#344E41]" style={{backgroundImage: "radial-gradient(#DAD7CD, #A3B18A, #588157)"}}>
        <h1
          className="flex justify-center items-center text-5xl font-bold text-center w-50 h-400"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="1000"
          data-aos-offset="0"
          style={{fontSize: "2vw"}}
        >
          Did you know mental health affects hundreds of millions of people around the world?
        </h1>
        <br></br>
        <br></br>
        <Chart />
      </section>
      <section
        name="question"
        className="flex flex-col justify-center items-center w-full h-full text-[#344E41]" style={{backgroundImage: "radial-gradient(#DAD7CD, #A3B18A, #588157)"}}
      >
        <br></br>
        <h1 className="flex justify-center text-center items-center text-5xl font-bold"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
          style={{fontSize: "2vw"}}
          >
          Statistics of mental health prevalence in the United States of America
          </h1>
          <br></br>
          <br></br>
          <AdultChart />
      </section>
      <section
        name="question"
        className="flex flex-col justify-center items-center w-full h-full text-[#344E41]" style={{backgroundImage: "radial-gradient(#DAD7CD, #A3B18A, #588157)"}}
      >
        <br></br>
        <h1 className="flex justify-center text-center items-center text-5xl font-bold"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
          style={{fontSize: "2vw"}}
          >
          Want to learn more about Mental Health? Take the quiz!
          </h1>
          <br></br>
          <Quiz />
      </section>
      <section
        name="question"
        className="flex flex-col justify-center items-center w-full h-full text-[#344E41]" style={{backgroundImage: "radial-gradient(#DAD7CD, #A3B18A, #588157)"}}
      >
        <h1
          className="flex justify-center items-center text-9xl font-bold text-center"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
          style={{fontSize: "5vw"}}
        >
        Enter Our Mental Spa
        </h1>
        <h1
          style={{ fontStyle: "italic", marginTop: 50, fontSize: "2vw" }}
          className="flex justify-center items-center text-5xl font-bold"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="1000"
          data-aos-offset="0"
        >
          Interactive Meditation Rooms
        </h1>
        <div
          style={{
            width: "100vw",
            marginTop: 100,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Link to='/music'>
          <div
            style={{
              display: "flex",
              width: "25vw",
              height: "25vh",
              alignItems: "right",
              border: "8px solid white",
              backgroundImage: `url("/img/meditation.jpeg")`,
              backgroundPosition: "center",
              backgroundSize:"cover",
              borderRadius: 50,
              marginRight: 25
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
                color: "#DAD7CD"
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
                color: "#DAD7CD"
              }}
            >
              <h1
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  fontSize: "3vw"
                }}
              >
                Memory Game
              </h1>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
