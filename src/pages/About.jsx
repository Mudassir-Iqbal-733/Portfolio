import React from "react";
import profilePic from "../media/dp.jpg.jpg";

const About = () => {
  return (
    <div className="mt-40 w-full px-6 md:px-10">
     
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
        <span className="block w-24 h-0.5 bg-[#19d6e0] mt-5"></span>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-start mt-12 gap-8">
        
        <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg w-full md:w-1/3 max-w-sm mx-auto">
          <div className="flex justify-center">
            <img
  src={profilePic}
  alt="Mudassir Iqbal"
  className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-[#289ac7] shadow-md object-cover object-top bg-black"
/>
          </div>
          <div className="text-center mt-4">
            <h2 className="text-lg md:text-xl font-bold">Mudassir Iqbal</h2>
            <p className="text-[#289ac7] font-medium text-sm md:text-base">
              Frontend React Developer
            </p>
          </div>
          <div className="mt-4 space-y-2 text-sm md:text-base">
            <p className="flex items-center justify-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              Available Worldwide
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              Open for Opportunities
            </p>
          </div>
        </div>
        <div className="w-full md:w-2/3 py-5 text-justify text-sm md:text-base leading-relaxed">
          <p>
            Hi, I’m Mudassir Iqbal, a frontend developer passionate about
            creating responsive, modern, and user-friendly web applications. My
            expertise lies in React.js, where I build reusable components and
            scalable architectures that bring designs to life. I work with
            JavaScript (ES6+), Tailwind CSS, and Redux, focusing on clean code
            and smooth performance. I enjoy crafting intuitive user interfaces
            that look great and work seamlessly across devices. For me, frontend
            development is not just about code, but about shaping meaningful
            digital experiences.
            <br />
            <br />
            I pay close attention to detail, optimize for performance, and love
            the challenge of debugging and problem-solving. Collaboration is an
            important part of my process, and I enjoy working with designers,
            backend developers, and clients to build polished projects. Every
            new project is a chance to combine creativity with technology and
            deliver something impactful. I keep learning continuously, exploring
            new React libraries and best practices to improve my craft.
            <br />
            <br />My ultimate goal is to create web applications that balance
            design, functionality, and performance, while growing as a developer
            who contributes value to both users and the developer community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
