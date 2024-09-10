import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { FaBriefcase, FaJava, FaCode, FaDatabase, FaNodeJs, FaServer } from "react-icons/fa";
import { SiMongodb, SiTypescript } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold animate-bounce-in">Technologies and Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiTypescript color="#3178C6" size={50} />;
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaNodeJs color="#8CC84B" size={50} />;
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaServer color="#FFFFFF" size={50} />;
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJava color="#007396" size={50} />;
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCode color="#007ACC" size={50} />;
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaDatabase color="#00758F" size={50} />;
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
        </div>
        <div>
          {/* Dotnet Developer Experience */}
          <div className="group flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center transition-transform duration-500 ease-in-out transform hover:scale-105 hover:bg-opacity-60 hover:shadow-2xl">
            <FaBriefcase className="transition-transform duration-500 ease-in-out transform group-hover:rotate-12" color="#FFFFFF" size={50} />
            <span className="text-white">
              <h2 className="leading-tight text-xl group-hover:text-gray-300 transition-colors duration-300">Dotnet Developer, Mindnerves Technology</h2>
              <p className="text-sm leading-tight font-thin group-hover:text-gray-400 transition-colors duration-300">
                June 2024 - August 2024
              </p>
              <ul className="text-sm p-2">
                <li className="group-hover:text-gray-300 transition-colors duration-300">- Enhanced Suzlon Company (client) project with features and optimizations.</li>
                <li className="group-hover:text-gray-300 transition-colors duration-300">- Designed user-friendly web interfaces.</li>
                <li className="group-hover:text-gray-300 transition-colors duration-300">- Documented specs for knowledge transfer.</li>
              </ul>
            </span>
          </div>

          {/* Web Developer Internship Experience */}
          <div className="group flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center transition-transform duration-500 ease-in-out transform hover:scale-105 hover:bg-opacity-60 hover:shadow-2xl">
            <FaBriefcase className="transition-transform duration-500 ease-in-out transform group-hover:rotate-12" color="#FFFFFF" size={50} />
            <span className="text-white">
              <h2 className="leading-tight text-xl group-hover:text-gray-300 transition-colors duration-300">Web Developer (Intern), Weoto Technologies</h2>
              <p className="text-sm leading-tight font-thin group-hover:text-gray-400 transition-colors duration-300">
                March 2022 - April 2022
              </p>
              <ul className="text-sm p-2">
                <li className="group-hover:text-gray-300 transition-colors duration-300">- Built a web app using React.js and API.</li>
                <li className="group-hover:text-gray-300 transition-colors duration-300">- Explored new tools and techniques during development.</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
