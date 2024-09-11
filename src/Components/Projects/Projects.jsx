import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold text-center animate-bounce-in">Projects</h1> {/* Added text-center */}
      <div className="py-12 px-8 flex flex-wrap justify-center gap-5 mx-auto"> {/* Added justify-center and mx-auto */}
        <ProjectCard
          title="NodeLink Chatroom"
          main="Built a dynamic chat platform by utilizing Node.js and Socket.IO, enabling users communication. Manages two-way messaging and uninterrupted connections to facilitate concurrent interactions within a collaborative space, showcasing expertise in Node.js, Socket.IO, and real-time web application development."
          srcimg="/Portfolio/assets/chatroom.jpg"
        />
        <ProjectCard
          title="Cryptocurrency Tracker"
          main="A web application which provides latest information regarding cryptocurrencies market statistics as well as latest cryptocurrencies news. The data is fetched from real time APIs."
          srcimg="/Portfolio/assets/webapp.jpg"
        />
        <ProjectCard
          title="NGO Nexus"
          main="A vibrant NGO activity management tool with a bevy of standout features. This contains an easy-to-use admin panel, a system for organizing volunteers that includes a way to reward them, built-in donation capabilities, and a seamless platform for content creation. All of them were painstakingly made combining the complementary strengths of Flutter and Firebase."
          srcimg="/Portfolio/assets/ngoapp.jpeg"
        />
      </div>
    </div>
  );
};

export default Projects;