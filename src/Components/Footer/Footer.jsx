import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold animate-bounce-in">Contact</h1>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          divyavpatil24@gmail.com
        </li>

        <a href="https://www.linkedin.com/in/divya-patil-712200215">
          <li className="flex gap-1 items-center">
            <CiLinkedin />
            https://www.linkedin.com/in/divya-patil-712200215
          </li>
        </a>
      </ul>
    </div>
  );
};

export default Footer;
