import React from 'react'
import { FaJs, FaReact, FaGithub, FaNode, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React JS", icon: <FaReact className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Vite", icon: <SiVite className="text-purple-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
];
const Skills = () => {
  return (
   <div id='skills' className='mt-40 w-full px-10'>
            <div className='flex flex-col items-center'>
                <h1 className='text-5xl font-bold'>Skills</h1>
                <span className='block w-15 h-0.5 bg-[#19d6e0] mt-5'></span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-15">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-gray-800/50 rounded-lg px-4 py-2 shadow-md hover:shadow-lg hover:bg-gray-700 transition"
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