import React from "react";

const techStack = [
  {
    name: "JAVASCRIPT",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    type: "frontend",
  },
  {
    name: "REACT",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    type: "frontend",
  },
  {
    name: "PYTHON",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    type: "ai",
  },
  {
    name: "LANGCHAIN",
    url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'><path fill='%231C3C3A' d='M116.5 20c-11 0-21.7 5.8-27.2 16L40.7 122c-7.3 13-1.4 29.7 12.3 35.4l24.4 10.2l-6.1 27.2c-3.1 14 7.2 27.2 21.4 27.2h54.3c11 0 21.7-5.8 27.2-16l48.6-86c7.3-13 1.4-29.7-12.3-35.4l-24.4-10.2l6.1-27.2c3.1-14-7.2-27.2-21.4-27.2H116.5z'/><path fill='%23D4EBE9' d='M139.3 64.7c-2-9-11.4-14.7-20.7-12.6L71 63c-9.2 2-14.9 11.2-12.8 20.4l11 48.2c2 9 11.4 14.7 20.7 12.6l47.6-10.8c9.2-2 14.9-11.2 12.8-20.4l-11-48.3z'/><circle cx='94' cy='94' r='10' fill='%231C3C3A'/><path fill='%23EE6C4D' d='M205.8 141.4l-31-13c-9.2-3.8-19.8.7-23.7 10l-19.8 47.3c-3.9 9.3.6 19.9 9.8 23.8l31 13c9.2 3.8 19.8-.7 23.7-10l19.8-47.3c4-9.3-.5-19.9-9.8-23.8z'/></svg>",
    type: "ai",
  },
  {
    name: "NLP",
    url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23a855f7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'></path><path d='M8 10h.01'></path><path d='M12 10h.01'></path><path d='M16 10h.01'></path></svg>",
    type: "ai",
  },
  {
    name: "KAFKA",
    url: "https://icon.icepanel.io/Technology/png-shadow-512/Apache-Kafka.png",
    type: "cloud",
  },
  {
    name: "AWS",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    type: "cloud",
  },
  {
    name: "DOCKER",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    type: "cloud",
  },
  {
    name: "KUBERNETES",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg",
    type: "cloud",
  },
];

const Skills = () => {
  return (
    <div className="bg-black border border-gray-800 text-gray-400 md:min-h-[150px] max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center p-4 rounded-b-xl overflow-hidden">
      {/* --- Left Side: Heading --- */}
      <h2 className="text-white text-xl md:text-3xl font-bold tracking-tight text-center md:text-left md:pl-4 mb-4 md:mb-0 whitespace-nowrap">
        My <br className="hidden md:block" /> Tech Stack
      </h2>

      {/* --- Right Side: Horizontal Row without visible scrollbar --- */}
      <div className="flex flex-row flex-nowrap justify-start md:justify-center items-center gap-4 md:gap-6 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center min-w-[75px] md:min-w-[90px] transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer flex-shrink-0"
          >
            <img
              src={tech.url}
              alt={tech.name}
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <p
              className={`mt-2 text-[10px] md:text-xs font-semibold tracking-wider ${
                tech.type === "ai"
                  ? "text-purple-400"
                  : tech.type === "cloud"
                    ? "text-blue-400"
                    : "text-gray-300"
              }`}
            >
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
