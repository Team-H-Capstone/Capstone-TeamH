import React from "react";
import AdultChart from "../AdultChart";
import Chart from "./Chart";

const Data = () => {
  return (
    <>
      <section
        className="flex flex-col justify-center items-center w-full h-screen text-[#344E41] pt-20"
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
          style={{ fontSize: "2vw" }}
        >
          Did you know mental health affects hundreds of millions of people
          around the world?
        </h1>
        <br></br>
        <br></br>
        <Chart />
      </section>
      <section
        name="question"
        className="flex flex-col justify-center items-center w-full h-screen text-[#344E41]"
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
          Statistics of mental health prevalence in the United States of America
        </h1>
        <br></br>
        <br></br>
        <AdultChart />
      </section>
    </>
  );
};

export default Data;
