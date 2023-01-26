import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";


const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

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
          Hello!
        </h1>
        <div>
          <Link to="question" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-600 hover:border-orange-600">
              Scroll Down
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
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
        <h2
          className="flex justify-center items-center text-9xl font-bold"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
        >
          Welcome to
        </h2>
        <h1
          className="flex justify-center items-center text-9xl font-bold"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
        >
          *OUR WEBSITE NAME*
        </h1>
      </section>
    </div>
  );
};

export default Home;
