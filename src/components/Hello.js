import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { HiArrowNarrowRight } from "react-icons/hi";
import Linky from "react-scroll";
import Login from "./Login";
import Register from "./Register";
import { auth } from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import Chart from "./Chart";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className="w-full h-screen">
      <section className="flex flex-col justify-center items-center w-full h-full bg-[#1e3a8a] text-white">
        <h1
          className="flex justify-center items-center text-9xl font-bold"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          Hello {user ? user.displayName : ""}!
        </h1>
        <div>
          {/* <Linky to="question" smooth={true} duration={500}> */}
          {/* <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-600 hover:border-orange-600">
              Scroll Down */}
          {/* <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span> */}
          {/* </button> */}
          {/* </Linky> */}
        </div>
      </section>
      <section
        name="question"
        className="flex flex-col justify-center items-center w-full h-full bg-[#1e3a8a] text-white"
      >
        <h1
          className="flex justify-center items-center text-9xl font-bold"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
        >
          How are you?
        </h1>
      </section>
      <section className="flex flex-col justify-center items-center w-full h-full bg-[#1e3a8a] text-white">
        <h1
          className="flex justify-center items-center text-9xl font-bold"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
        >
          Welcome to
        </h1>
        <h1
          className="flex justify-center items-center text-9xl font-bold"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
        >
          BE MINDFUL
        </h1>
      </section>
      <section
        name="question"
        className="flex flex-col justify-center items-center w-full h-full bg-[#1e3a8a] text-white"
      >
        <h1
          className="flex justify-center items-center text-4xl font-bold"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
        >
          Did you know mental health affects hundreds of millions of people around the world?
        </h1>
        <br></br>
        <Chart />
      </section>
      <section
        name="question"
        className="flex flex-col justify-center items-center w-full h-full bg-[#1e3a8a] text-white"
      >
        <h1
          className="flex justify-center items-center text-9xl font-bold"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
        >
          Enter Mental Spa
        </h1>
        <h1
          style={{ fontStyle: "italic", marginTop: 50 }}
          className="flex justify-center items-center text-5xl font-bold"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
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
              backgroundSize:"cover"
            }}
          >
            <h1
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                fontSize: 43,
              }}
            >
              Music/Meditation/Videos
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
                backgroundPosition: "center"
              }}
            >
              <h1
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  fontSize: 43
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
