import React from "react";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <>
      <div>
        <br />
        <br />
        <br />
      </div>
      <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
        <div className="md:w-2/4 md:pt-10 ">
          <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
            <TextChange />
          </h1>
          <p className="text-sm md:text-2xl tracking-tight ">
            Passionate software developer ready to transform your vision into a digital masterpiece.
          </p>
{/*           Resume button */}
          <a href="/Portfolio/DivyaPatil_Resume.pdf" download="DivyaPatil_Resume.pdf">
            <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              Download Resume
            </button>
          </a>
        </div>
        <div>
          <img className="" src="/Portfolio/assets/gifimg.gif" alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
