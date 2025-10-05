import React, { useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import blog from "../media/blog.png";
import ems from "../media/EMS-Project.png";
import todo from "../media/to-do list.png";
import portfolio from "../media/Portfolio.png";

const Projects = () => {
  const projects = [
    {
      img: portfolio,
      title: "Portfolio Website",
      description:
        "My personal portfolio built using React, Tailwind, and AOS animations.",
      tech: ["React", "Tailwind", "AOS"],
      github: "https://github.com/Mudassir-Iqbal-733/Portfolio.git",
      live: "https://portfolio-mocha-one-93.vercel.app/",
    },
    {
      img: blog,
      title: "Blog Website",
      description: "My Blog Website built using MERN Stack.",
      tech: ["React", "Tailwind", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/Mudassir-Iqbal-733/Blog.git",
      live: "",
    },
    {
      img: ems,
      title: "Employee Management System",
      description:
        "A web app to manage employee records using React, Context API, and Local Storage.",
      tech: ["React", "Tailwind", "LocalStorage"],
      github: "https://github.com/Mudassir-Iqbal-733/EMS.git",
      live: "",
    },
    {
      img: todo,
      title: "To-Do List",
      description:
        "A clean and responsive to-do app built with React and JSON Server for persistent data.",
      tech: ["React", "Tailwind", "JSON Server"],
      github: "",
      live: "",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div id="projects" className="mt-20 px-6 md:px-12 lg:px-20">
      {/* Section Heading */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#19d6e0]">
          Projects
        </h1>
        <p className="text-lg mt-2 max-w-2xl text-gray-300">
          Here are a few of the projects I've built — combining functionality,
          performance, and clean design.
        </p>
        <span className="block w-24 h-0.5 bg-[#19d6e0] mt-5"></span>
      </div>

      {/* Projects Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 
                   place-items-stretch"
      >
        {projects.map((p, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="bg-gray-900 rounded-2xl shadow-lg flex flex-col overflow-hidden 
                       hover:shadow-[#19d6e0]/40 hover:shadow-2xl transition-all duration-500 "
          >
            {/* Project Image */}
            <div className="overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Project Info */}
            <div className="flex flex-col justify-between flex-grow p-6">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-white">
                  {p.title}
                </h2>
                <p className="text-gray-300 text-sm mb-4">{p.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#19d6e0]/20 text-[#19d6e0] text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons (conditionally shown) */}
              <div className="flex gap-3 mt-auto">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium 
                               bg-[#19d6e0]/20 text-[#19d6e0]
                               hover:bg-[#19d6e0] hover:text-black 
                               rounded-lg border border-[#19d6e0] 
                               transition-all duration-300 w-1/2 text-center"
                  >
                    <FaGithub className="text-lg" /> Code
                  </a>
                )}

                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium 
                               bg-[#19d6e0]/20 text-[#19d6e0]
                               hover:bg-[#19d6e0] hover:text-black 
                               rounded-lg border border-[#19d6e0] 
                               transition-all duration-300 w-1/2 text-center"
                  >
                    <FaExternalLinkAlt className="text-sm" /> Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
