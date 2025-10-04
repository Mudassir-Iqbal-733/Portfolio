import React from "react";
import ems from "../media/EMS-Project.png";
import todo from "../media/to-do list.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  const projects = [
    {
      img: ems,
      title: "EMS Project",
      description: "An Employee Management System built with React and Local Storage.",
      link: "https://example.com/ems",
    },
    {
      img: todo,
      title: "To-Do List",
      description: "A simple and responsive to-do list app with Json Server support.",
      link: "https://example.com/todo",
    },
  ];

    useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration
        once: false,    // animation happens every time you scroll
      });
    }, []);
  return (
    <div id="projects" className="mt-30 px-6 md:px-10">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold">Projects</h1>
        <p className="text-xl mt-2 text-center">
          Here are a few of the projects I've worked on. Each one reflects my
          focus on user experience, performance, and modern practices.
        </p>
        <span className="block w-24 h-0.5 bg-[#19d6e0] mt-5" ></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projects.map((p, index) => (
          <div
          data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
            key={index}
            className="transition-transform duration-300 hover:translate-x-1 hover:shadow-[#19d6e0]/30 max-w-sm bg-gray-800/50  rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl "
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5 flex flex-col">
              <h2 className="text-2xl font-semibold ">{p.title}</h2>
              <p className=" mt-2 text-sm">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
