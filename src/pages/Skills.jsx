import React from 'react'
import { FaJs, FaReact, FaGithub, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiMongodb, SiExpress, SiPostman, SiVercel,SiRedux } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React JS", icon: <FaReact className="text-blue-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-200" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Vite", icon: <SiVite className="text-purple-400" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: false,    // animation happens every time you scroll
    });
  }, []);
  return (
    <div id='skills' className='mt-40 w-full px-10'>
      <div className='flex flex-col items-center'>
        <h1 className='text-5xl font-bold'>Skills</h1>
        <span className='block w-15 h-0.5 bg-[#19d6e0] mt-5'></span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-15">
        {skills.map((skill, index) => (
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            key={index}
            className="transition-transform duration-300 hover:translate-x-1 hover:shadow-[#19d6e0]/30 flex items-center gap-2 bg-gray-800/50 rounded-lg px-4 py-2 shadow-md hover:shadow-lg"
          >
            <span className="text-4xl">{skill.icon}</span>
            <span className="text-white text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills