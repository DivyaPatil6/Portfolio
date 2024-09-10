import React from "react";

const ProjectCard = ({ title, main, srcimg }) => {
  return (
    <div className="group p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-slate-700">
      <div className="relative overflow-hidden rounded-xl">
        <img
          className="p-4 transition-transform duration-500 ease-in-out transform group-hover:scale-110"
          src={srcimg}
          alt={title}
        />
      </div>
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal mt-4 transition-opacity duration-300 ease-in-out group-hover:opacity-90">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2 text-gray-300 group-hover:text-white transition-colors duration-300 ease-in-out">
        {main}
      </p>
    </div>
  );
};

export default ProjectCard;