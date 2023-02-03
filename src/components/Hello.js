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

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className="w-full h-screen">
      <section className="flex flex-col justify-center items-center w-full h-full bg-[#1e3a8a] text-white" style={{backgroundImage: "radial-gradient(#2b53c4, #1e3987, #325edb)"}}>
        <h1
          className="flex justify-center items-center text-9xl font-bold text-center"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          Hello {user ? user.displayName : ""}!
        </h1>
      </section>
      <section
        name="question"
        className="flex flex-col justify-center items-center w-full h-full bg-[#1e3a8a] text-white" style={{backgroundImage: "radial-gradient(#2b53c4, #1e3987, #325edb)"}}
      >
        <h1
          className="flex justify-center items-center text-9xl font-bold text-center"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
        >
          How are you doing today?
        </h1>
      </section>
      <section name="question" className="flex flex-col justify-center items-center w-full h-full bg-[#1e3a8a] text-white" style={{backgroundImage: "radial-gradient(#2b53c4, #1e3987, #325edb)"}}>
        <h1
          className="flex justify-center items-center text-9xl font-bold text-center"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
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
      <section
        className="flex flex-col justify-center items-center w-full h-full bg-[#1e3a8a] text-white"
        style={{backgroundImage: "radial-gradient(#2b53c4, #1e3987, #325edb)"}}
      >
        <h1
          className="flex justify-center items-center text-5xl font-bold text-center w-50 h-400"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="1000"
          data-aos-offset="0"
        >
          Did you know mental health affects hundreds of millions of people around the world?
        </h1>
        <br></br>
        <br></br>
        <Chart />
      </section>
      <section
        name="question"
        className="flex flex-col justify-center items-center w-full h-full bg-[#1e3a8a] text-white"
        style={{backgroundImage: "radial-gradient(#2b53c4, #1e3987, #325edb)"}}
      >
        <h1 className="flex justify-center text-center items-center text-5xl font-bold"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
          >
          Statistics of mental health prevalence in the United States of America
          </h1>
          <br></br>
          <br></br>
          <AdultChart />
      </section>
      <section
        name="question"
        className="flex flex-col justify-center items-center w-full h-full bg-[#1e3a8a] text-white"
        style={{backgroundImage: "radial-gradient(#2b53c4, #1e3987, #325edb)"}}
      >
        <h1 className="flex justify-center text-center items-center text-5xl font-bold"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
          >
          Want to learn more about Mental Health? Take the quiz!
          </h1>
          <br></br>
          <br></br>
          <Quiz />
      </section>
      <section
        name="question"
        className="flex flex-col justify-center items-center w-full h-full bg-[#1e3a8a] text-white"
        style={{backgroundImage: "repeating-radial-gradient(#2b53c4, #1e3987 10%, #325edb 15%)"}}
      >
        <h1
          className="flex justify-center items-center text-9xl font-bold text-center"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
        >
        Enter Our Mental Spa
        </h1>
        <h1
          style={{ fontStyle: "italic", marginTop: 50 }}
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
            width: 1100,
            marginTop: 100,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 500,
              height: 300,
              alignItems: "right",
              border: "10px solid white",
              backgroundImage: `url("/img/meditation.jpeg")`,
              backgroundPosition: "center",
              backgroundSize:"cover",
              borderRadius: 50
            }}
          >
            <h1
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                fontSize: 60,
              }}
            >
              Music & Videos
            </h1>
          </div>
          <Link to="/memoryGame">
            <div
              style={{
                display: "flex",
                width: 500,
                height: 300,
                alignItems: "right",
                border: "10px solid white",
                backgroundImage: `url("/img/gameBackground.jpeg")`,
                backgroundPosition: "center",
                borderRadius: 50
              }}
            >
              <h1
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  fontSize: 60
                }}
              >
                Games
              </h1>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
