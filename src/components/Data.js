import React from "react";
import AdultChart from "../AdultChart";
import Chart from "./Chart";

const Data = () => {
  return (
    <div className="w-full h-screen bg-[#DAD7CD]">
      <section
      className="flex flex-col justify-center items-center w-full text-[#344E41] pt-20">
      <h1 
      className="flex justify-center items-center text-5xl font-bold text-center w-50"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
      style={{ fontSize: "4vw", marginTop: "55px"}}
      >Take a look at mental illness by the numbers.</h1>
      </section>
      <section
        className="flex flex-col justify-center items-center w-full h-screen text-[#344E41] pt-8"
        style={{
          backgroundImage: "radial-gradient(#DAD7CD, #A3B18A, #588157)",
        }}
      >
        <h1
          className="flex justify-center items-center text-5xl font-bold text-center w-50 h-400"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="1000"
          data-aos-offset="0"
          style={{ fontSize: "2.5vw" }}
        >
          Did you know mental health affects hundreds of millions of people
          around the world?
        </h1>
        <br></br>
        <br></br>
        <Chart />
      </section>
      <section
        className="flex flex-col justify-center items-center w-full h-screen text-[#344E41]"
        style={{
          backgroundImage: "radial-gradient(#DAD7CD, #A3B18A, #588157)",
        }}
      >
        <h1
          className="flex justify-center items-center text-5xl font-bold text-center w-50"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
          style={{ fontSize: "2.5vw" }}
        >
          Statistics of mental health prevalence in the United States of America
        </h1>
        <br></br>
        <br></br>
        <br></br>
        <AdultChart />
      </section>
    </div>
  );
};

export default Data;
