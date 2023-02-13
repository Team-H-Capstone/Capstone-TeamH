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
          className="flex justify-center items-center text-9xl font-bold text-center pb-4"
          style={{ fontSize: "5vw" }}
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
        >
          Hello, {user ? user.displayName : ""}
        </h1>
        <h1
          className="flex justify-center items-center text-9xl font-bold text-center"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="1000"
          data-aos-offset="0"
          style={{ fontSize: "5vw" }}
        >
          Welcome to
        </h1>
        <h1
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="1750"
          data-aos-offset="0"
          className="title"
          style={{ letterSpacing:"10px"}}
        >
        MINDFUL
        </h1>
        <h1
          className="flex justify-center items-center text-9xl font-bold text-center"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="2500"
          data-aos-offset="0"
          style={{ fontSize: "3vw" }}
        >
        A safe space to reflect and improve your well-being.
        </h1>
      </section>
      <section
        name="rooms"
        className="flex flex-row justify-center items-center w-full h-full text-[#344E41]"
        style={{
          backgroundImage: "radial-gradient(#DAD7CD, #A3B18A, #588157)",
        }}
      >
        <div
          style={{
            width: "50vw",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <h1 
          className="flex justify-center items-center text-9xl font-bold text-center"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
          style={{ fontSize: "4.5vw", lineHeight: "1.25"}}
        >
          Explore interactive wellness rooms and tour the forum as a visitor.
        </h1>
        </div>
        <div>
        <h1
          className="text-9xl font-bold text-center"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
          style={{ fontSize: "3.5vw" }}
        >
          Enter Our Interactive Rooms
        </h1>
        <div
          style={{
            width: "50vw",
            marginTop: 60,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Link to="/music">
            <div
              style={{
                display: "flex",
                width: "20vw",
                height: "20vh",
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
                Music
              </h1>
            </div>
          </Link>

          <Link to="/memoryGame">
            <div
              style={{
                display: "flex",
                width: "20vw",
                height: "20vh",
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
                Game
              </h1>
            </div>
          </Link>
        </div>
        </div>
      </section>
      <section
        name="question"
        className="flex flex-row justify-center items-center w-full h-full text-[#344E41]"
        style={{
          backgroundImage: "radial-gradient(#DAD7CD, #A3B18A, #588157)",
        }}
      >  
        <div
          className="text-9xl font-bold text-center"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
          style={{ fontSize: "3.5vw", width:"30vw", lineHeight: "1.5" }}
        >
          <Link className="text-[#800e13] font-bold hover:text-[#E07A5F] hover:text-[4.5vw] hover:underline" to="/register">Sign up</Link> to boost and refine mindfulness with a mood tracker and journal. 
        </div>
        <img
          alt="homeimg"
          width="400vw"
          className="rounded-full px-[10px], border-2"
          src="https://cdn.sanity.io/images/0vv8moc6/psychtimes/05a2dd97fbedb285c5fd380a411b24847c8dcc11-1000x819.jpg?fit=crop&auto=format"
        />
        <div
          className="text-9xl font-bold text-center"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
           style={{ fontSize: "3.5vw", width:"30vw", lineHeight: "1.5" }}
        >
          With your free account, connect with other users through the forum and let your voice be heard.
        </div>
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
          className="flex justify-center text-center items-center text-5xl font-bold pb-4"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
          style={{ fontSize: "2.5vw" }}
        >
          Want to learn more about Mental Health? Take the quiz!
        </h1>
        <br></br>
        <Quiz />
      </section>
    </div>
  );
};

export default Home;