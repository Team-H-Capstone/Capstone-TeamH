import React, {useEffect} from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Hello = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full h-screen bg-[#1e3a8a] text-white">
      <h1
        className="flex justify-center items-center text-9xl font-bold"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
      >
        Hello!
      </h1>
    </div>
  );
};

export default Hello;
