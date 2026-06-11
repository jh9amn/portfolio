import React from "react";
import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12 px-4" id="about">
      <div className="grid md:grid-cols-2 gap-8 items-center sm:py-16">
        {/* --- Left Column: Biography Text --- */}
        <div className="mt-4 md:mt-0 text-left flex h-full items-center">
          <div className="my-auto md:mr-6">
            <h2 className="text-4xl font-bold mb-6 primary-color">About Me</h2>
            <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
              I am a software developer and Master of Computer Applications
              student at the Indian Institute of Technology Patna, currently
              working as an Analyst at Tata Consultancy Services. My expertise
              spans full-stack web development using the MERN stack alongside
              advanced engineering in Generative AI, Large Language Models
              (LLMs), and Retrieval-Augmented Generation (RAG) pipelines.
              <br />
              <br />
              From training and fine-tuning models like Gemma using LoRA and
              QLoRA architectures to deploying production-ready full-stack
              applications like Gadget Garden and Jobman, I bridge the gap
              between intelligent data systems and scalable user interfaces. I
              focus on optimizing geospatial data accuracy, implementing DevOps
              pipelines with AWS and Docker, and building cloud-driven solutions
              that solve complex real-world challenges.
            </p>
          </div>
        </div>

        {/* --- Right Column: About Image --- */}
        <div className="flex justify-center items-center">
          <img
            src={aboutImg}
            width={400}
            height={400}
            alt="About profile visualization"
            className="rounded-3xl shadow-xl border border-gray-900 object-cover w-[300px] h-[300px] md:w-[400px] md:h-[400px] transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
