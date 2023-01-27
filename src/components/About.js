import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const About = () => {
  return (
    <div className="w-full h-screen" style={{background:"white"}}>
      <section className="flex flex-col justify-center items-center w-full h-2/4 bg-[#dad7cd] text-[#344e41]">
        <h1 className="text-7xl font-bold tracking-wide">About Us</h1>
        <h2 className="text-lg italic pt-10">
          "Vulnerability sounds like truth and feels like courage. Truth and
          courage aren't always comfortable, but they're never weakness." —
          Brené Brown
        </h2>
      </section>
      <section className="flex flex-row justify-center items-center w-full py-12" style={{background:"white"}}>
        <div className="flex flex-col pl-20">
          <h2 className="text-4xl font-bold pb-4">Mental Health Awareness</h2>
          <h3 className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam
            aliquam sem et. Tincidunt id aliquet risus feugiat in. Aliquet nec
            ullamcorper sit amet. Etiam non quam lacus suspendisse faucibus
            interdum. Bibendum ut tristique et egestas.
            <br></br>
            <br></br>
            Ut faucibus pulvinar elementum integer. Odio aenean sed adipiscing
            diam donec adipiscing tristique. Volutpat commodo sed egestas
            egestas fringilla phasellus. Sagittis vitae et leo duis. Nibh tortor
            id aliquet lectus proin nibh nisl. Tellus cras adipiscing enim eu
            turpis. Diam quis enim lobortis scelerisque.Tincidunt id aliquet
            risus feugiat in. Aliquet nec ullamcorper sit amet.
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
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <div className="flex flex-row pb-7 pt-1">
          <div className="flex flex-col justify-center items-center px-5">
            <img
              className="rounded-full pb-2"
              width="175"
              alt="creator"
              src="/img/atif.jpeg"
            />
            <h3 className="text-xl font-medium">Atif Hussaini</h3>
            <div className="space-x-3 text-lg font-medium border-t border-gray-200">
              <a
                className="text-[#2E4C6D] dark:hover:text-[#e63946] transition-colors duration-200"
                href="http://www.linkedin.com/atif-hussaini"
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
              width="200"
              alt="creator"
              src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
            />
            <h3 className="text-xl font-medium">Andrew Kidd</h3>
            <div className="space-x-3 text-lg font-medium border-t border-gray-200">
              <a
                className="text-[#2E4C6D] dark:hover:text-[#e63946] transition-colors duration-200"
                href="http://www.linkedin.com"
              >
                <LinkedInIcon />
              </a>
              <a
                className="text-[#2E4C6D] dark:hover:text-[#e63946] transition-colors duration-200"
                href="http://www.github.com"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center px-5">
            <img
              width="200"
              alt="creator"
              src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
            />
            <h3 className="text-xl font-medium">Tien La</h3>
            <div className="space-x-3 text-lg font-medium border-t border-gray-200">
              <a
                className="text-[#2E4C6D] dark:hover:text-[#e63946] transition-colors duration-200"
                href="http://www.linkedin.com"
              >
                <LinkedInIcon />
              </a>
              <a
                className="text-[#2E4C6D] dark:hover:text-[#e63946] transition-colors duration-200"
                href="http://www.github.com"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center px-5">
            <img
              width="200"
              alt="creator"
              src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
            />
            <h3 className="text-xl font-medium">Eva Li</h3>
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
              width="200"
              alt="creator"
              src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
            />
            <h3 className="text-xl font-medium">Justin Signo</h3>
            <div className="space-x-3 text-lg font-medium border-t border-gray-200">
              <a
                className="text-[#2E4C6D] dark:hover:text-[#e63946] transition-colors duration-200"
                href="http://www.linkedin.com"
              >
                <LinkedInIcon />
              </a>
              <a
                className="text-[#2E4C6D] dark:hover:text-[#e63946] transition-colors duration-200"
                href="http://www.github.com"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-full py-3 bg-[#dad7cd] text-[#344e41]">
        <h2 className="text-lg font-semibold">Capstone Repo</h2>
        <a href="https://github.com/Team-H-Capstone/Capstone-TeamH">
          Website Name --- GitHub Link
        </a>
      </section>
    </div>
  );
};

export default About;
