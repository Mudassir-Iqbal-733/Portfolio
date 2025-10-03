import React from "react";
import profilePic from "../media/dp.jpg.jpg";

const About = () => {
  return (
    <div id="about" className="mt-40 w-full px-6 md:px-10">
     
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
        <span className="block w-24 h-0.5 bg-[#19d6e0] mt-5"></span>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-start mt-12 gap-8">
        
        <div className="bg-gray-800/50 text-white p-6 rounded-2xl shadow-lg w-full md:w-1/3 max-w-sm mx-auto">
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
              MERN Stack Developer
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
            I am a MERN Stack Developer with hands-on experience in building high-quality, scalable, and modern web applications.
I specialize in creating responsive and accessible user interfaces that deliver seamless user experiences.
On the backend, I develop robust systems tailored to meet diverse business needs.
<br /><br />
My tech stack expertise includes HTML, CSS, JavaScript, and React.js for dynamic and interactive frontends.
I work with Tailwind CSS to craft clean, modern, and responsive designs with ease.
For backend development, I rely on Node.js, Express.js, and MongoDB to build secure and scalable applications.
<br /><br />
I am also skilled in GitHub for version control and Vercel for smooth, production-ready deployments.
I bring a goal-oriented mindset, a focus on clean code practices, and a passion for continuous improvement.
Collaboration, adaptability, and problem-solving are strengths I consistently bring to my work.
Above all, I strive to deliver value-driven solutions that transform ideas into exceptional digital products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
