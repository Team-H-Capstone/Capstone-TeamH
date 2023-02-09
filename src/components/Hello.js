import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { auth } from "../firebase/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import Quiz from "./Quiz";
import MusicPlayer from "./MusicPlayer/MusicPlayer";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className="w-full h-screen">
      <section
        className="flex flex-col justify-center items-center w-full h-full bg-[#1e3a8a] text-[#3A5A40]"
        style={{
          backgroundImage: "radial-gradient(#DAD7CD, #A3B18A, #588157)",
        }}
      >
        <h1
          className="flex justify-center items-center text-9xl font-bold text-center"
          style={{ fontSize: "5vw" }}
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
        >
          Hello {user ? user.displayName : ""}
        </h1>
        <h1
          className="flex justify-center items-center text-9xl font-bold text-center"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
          style={{ fontSize: "5vw" }}
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
        MINDFUL
        </h1>
      </section>

      <section
        name="question"
        className="flex flex-col justify-center items-center w-full h-full text-[#344E41]"
        style={{
          backgroundImage: "radial-gradient(#DAD7CD, #A3B18A, #588157)",
        }}
      >
        <br></br>
        <h1
          className="flex justify-center text-center items-center text-5xl font-bold"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
          style={{ fontSize: "2vw" }}
        >
          Want to learn more about Mental Health? Take the quiz!
        </h1>
        <br></br>
        <Quiz />
      </section>
      <section
        name="question"
        className="flex flex-col justify-center items-center w-full h-full text-[#344E41]"
        style={{
          backgroundImage: "radial-gradient(#DAD7CD, #A3B18A, #588157)",
        }}
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
            width: "100vw",
            marginTop: 100,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
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
