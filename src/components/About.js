import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const About = () => {
  return (
    <div className="w-full h-screen" style={{background:"white"}}>
      <section className="flex flex-col justify-center items-center w-full h-2/4 bg-[#DAD7CD] text-[#3A5A40] border-solid mt-10 m-auto pt-10">
        <h1 className="text-7xl font-bold tracking-wide">About Us</h1>
           <h2 className="text-lg italic pt-10 text-center">
            "Vulnerability sounds like truth and feels like courage. Truth and
            courage aren't always comfortable, but they're never weakness." —
            Brené Brown
          </h2>
      </section>
      <section className="flex flex-row justify-center items-center w-full py-12" style={{background:"white"}}>
        <div className="flex flex-col pl-20">
          <h2 className="text-4xl font-bold pb-4">Mental Health Awareness</h2>
          <h3 className="text-lg">
            We created Mindful to raise awareness and provide supportive tools for one of the world’s most critical issues: <strong>Mental Health</strong>. Significant progress has been made in recent years to make the discussion of mental health less taboo than in the past but there is still plenty of work to do; We hope to keep the momentum going with this website. Our forum was built to foster an inclusive community where users can express themselves and grow together. Whether you are currently living with a mental illness or not, welcome to <strong>Mindful</strong>.
          </h3>
        </div>
        <img
          width="54%"
          alt="aboutPic"
          src="https://syncromsp.com/wp-content/uploads/2022/08/how-to-encourage-mental-health-awareness-at-your-msp.png
        "
        />
      </section>
      <section className="flex flex-col justify-center items-center w-full" style={{background:"white"}}>
        <h2 className="text-3xl font-bold pb-6">Software Development Team</h2>
        <div className="flex flex-row pb-7 pt-1">
          <div className="flex flex-col justify-center items-center px-4">
            <img
              className="rounded-full pb-2"
              width="175"
              alt="creator"
              src="/img/atif.jpeg"
            />
            <h3 className="text-xl font-extrabold font-medium">Atif Hussaini</h3>
            <h4>Full-Stack Developer</h4>
            <div className="space-x-3 text-lg font-medium border-t border-gray-200">
              <a
                className="text-[#2E4C6D] dark:hover:text-[#e63946] transition-colors duration-200"
                href="http://www.linkedin.com/in/atif-hussaini"
              >
                <LinkedInIcon />
              </a>
              <a
                className="text-[#2E4C6D] dark:hover:text-[#e63946] transition-colors duration-200"
                href="https://github.com/AtifHussaini"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center px-5">
            <img
              className="rounded-full pb-2"
              width="175"
              alt="creator"
              src="/img/andrew.jpeg"
            />
            <h3 className="text-xl font-extrabold font-medium">Andrew Kidd</h3>
            <h4>Full-Stack Developer</h4>
            <div className="space-x-3 text-lg font-medium border-t border-gray-200">
              <a
                className="text-[#2E4C6D] dark:hover:text-[#e63946] transition-colors duration-200"
                href="http://www.linkedin.com/in/andrew-c-kidd/"
              >
                <LinkedInIcon />
              </a>
              <a
                className="text-[#2E4C6D] dark:hover:text-[#e63946] transition-colors duration-200"
                href="http://www.github.com/ackidd/"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center px-5">
            <img
              className="rounded-full pb-2"
              width="175"
              alt="creator"
              src="/img/tienL.jpeg"
            />
            <h3 className="text-xl font-extrabold font-medium">Tien La</h3>
            <h4>Full-Stack Developer</h4>
            <div className="space-x-3 text-lg font-medium border-t border-gray-200">
              <a
                className="text-[#2E4C6D] dark:hover:text-[#e63946] transition-colors duration-200"
                href="http://www.linkedin.com/in/tienla/"
              >
                <LinkedInIcon />
              </a>
              <a
                className="text-[#2E4C6D] dark:hover:text-[#e63946] transition-colors duration-200"
                href="http://www.github.com/tiencla"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center px-5">
            <img
              className="rounded-full pb-2"
              width="175"
              alt="creator"
              src="/img/evaLi.jpeg"
            />
            <h3 className="text-xl font-extrabold font-medium">Eva Li</h3>
            <h4>Full-Stack Developer</h4>
            <div className="space-x-3 text-lg font-medium border-t border-gray-200">
              <a
                className="text-[#2E4C6D] dark:hover:text-[#e63946] transition-colors duration-200"
                href="http://www.linkedin.com/in/eva-li-rd"
              >
                <LinkedInIcon />
              </a>
              <a
                className="text-[#2E4C6D] dark:hover:text-[#e63946] transition-colors duration-200"
                href="http://www.github.com/kibapika"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center px-5">
            <img
              className="rounded-full pb-2"
              width="175"
              alt="creator"
              src="/img/justinS.png"
            />
            <h3 className="text-xl font-extrabold font-medium">Justin Signo</h3>
            <h4>Full-Stack Developer</h4>
            <div className="space-x-3 text-lg font-medium border-t border-gray-200">
              <a
                className="text-[#2E4C6D] dark:hover:text-[#e63946] transition-colors duration-200"
                href="https://www.linkedin.com/in/justin-signo/"
              >
                <LinkedInIcon />
              </a>
              <a
                className="text-[#2E4C6D] dark:hover:text-[#e63946] transition-colors duration-200"
                href="https://www.github.com/jsigno"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-full py-3 bg-[#DAD7CD] text-[#3A5A40]">
        <h2 className="text-lg font-semibold">Capstone Repo</h2>
        <a href="https://github.com/Team-H-Capstone/Capstone-TeamH">
          MINDFUL --- GitHub Link
        </a>
      </section>
    </div>
  );
};

export default About;
