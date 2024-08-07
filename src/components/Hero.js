import React from "react";
// import Typical from "react-typical";
import Socials from "../components/Socials";
import "./Hero.css";
import resume from "../assets/img/Resume.pdf"
import file from "../assets/img/file.png"

import { motion } from "framer-motion";
import { styles } from "../styles";
// import { EarthCanvas } from "./canvas/index";
// import { slideIn } from "../utils/motion";

// import woman image
import bgImg from "../assets/img/bgImg.jpg";
import myPic from "../assets/img/mypic.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex
    items-center lg:bg-cover
    lg:bg-center lg:bg-no-repeat  py-32 lg:py-0 overflow-hidden"
    >
      {/* <video
        src={BgVideo}
        autoPlay
        muted
        loop
        className="video-bg"
        loading="lazy"
      /> */}
      <img src={bgImg} alt="" className="video-bg" />
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/* left side */}
          <motion.div
            style={styles}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }} 
          >
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-3xl text-accent mb-[22px]">
              Hey There, I'm Vivek 👋
            </p>
            <h1 className="text-4xl mb-[14px] leading-[44px] md:text-5xl md:leading-tight lg:text-6xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              I Build & Design <br /> Web Interfaces.
            </h1>
            <div className="font-mono mb-[22px] text-xl flex space-x-3 md:text-2xl lg:text-2xl ">
              <h4> I Am Into <span className="text-red-500"> Full-Stack Developement </span> </h4>
              {/* Text to Animate */}
              {/* <strong className="text-red-600 px-1">
                <Typical
                  steps={[
                    "Frontend Development.",
                    2000,
                    "Backend Development.",
                    2000,
                    "Web Designing.",
                    2000,
                    "Web Development.",
                    2000,
                    "UI/UX Designing.",
                    2000,
                    "Native Development.",
                    2000,
                  ]}
                  wrapper="p"
                  loop={Infinity}
                />
              </strong> */}
            </div>
            {/* <button id='vivek' className='btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all'><a href="#contact">Work with me</a></button> */}
            {/* Socials */}
            <div className="lg:block py-3 pb-8">
              <a href={resume} className="bg-[#F06A95] hover:bg-[#c7794c] duration-200 text-white py-2 px-4 rounded-full ">Download Offline Resume <img src={file} alt="" className="inline w-5"/></a>
            </div>
            <div className="wrapper">
              <a id="hello" href="#contact">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Work with me
              </a>
            </div>
          </div>
          </motion.div>
          {/* right side */}
          <div className="hidden lg:flex flex-1 justify-end items-end ">
            <motion.img
              src={myPic}
              alt="pic"
              className="w-[300px] h-[300px] rounded-full"
              style={styles}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
