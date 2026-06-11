import React from "react";
import { TypeAnimation } from "react-type-animation";
import heroImage from "../assets/profilepic.png";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black">
      <div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
        <img src={heroImage} alt="hero-image" />
      </div>
      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-white text-4xl sm:text-5xl lg-text-8xl font-extrabold">
          <span className="primary-color">I'm a</span>
          <TypeAnimation
            sequence={[
              " MERN Developer",
              1000,
              " AI Enthusiast",
              1000,
              " Cloud Architect",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-white sm:text-lg my-6 lg:text-xl">
          My name is Aman, and I am an enthusiastic Full Stack MERN Developer
          with a passion for efficiently developing and beautifying responsive
          web applications.
        </p>
        <div className="my-8">
          <a
            href="https://drive.google.com/file/d/1aQQf7gZKv1GvTs0O8om4wJhds-TpYuXQ/view?usp=sharing"
            className="px-6 py-3 w-full mr-4 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white"
          >
            Download Resume
          </a>
          <a
            href="https://www.linkedin.com/in/aman-kumar-jha-3b254823b/"
            className="px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 transition duration-300 text-white hover:border-none"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
