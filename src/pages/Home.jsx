import React from "react";
import img from "../media/media.jpg";
import { Facebook, Linkedin, Github, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Home = ({ scrollToSection, refs }) => {

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-20 md:mt-40 px-6 md:px-16 gap-10">
      
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-semibold leading-tight">
          Hello, I'm{" "}
          <span className="text-[#186d8f]">Mudassir Iqbal</span>
        </h1>

        <p className="text-base md:text-lg mt-5 text-gray-200 leading-relaxed">
          I am a passionate frontend developer with a focus on creating clean,
          responsive, and user-friendly web applications. Skilled in modern
          technologies like React, Tailwind CSS, and JavaScript, I bring designs
          to life with precision. I enjoy crafting intuitive interfaces that
          enhance user experience across all devices. With a strong eye for
          detail, I combine creativity and code to build impactful digital
          solutions. Always eager to learn and grow, I keep improving my skills
          to stay ahead in the ever-evolving web world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
          <button onClick={() => scrollToSection(refs.projectsRef)}  className="font-medium px-8 py-2 rounded-md bg-[#16bbe0] hover:bg-[#1399b8] transition">
            View My Work
          </button>
          <button onClick={() => scrollToSection(refs.contactRef)} className="font-medium px-8 py-2 rounded-md border border-gray-400 hover:bg-gray-800 transition">
            Get In Touch
          </button>
        </div>
        <div className="flex justify-center md:justify-start gap-6 mt-6">
          <Link to="https://facebook.com/maharmudassir.iqbal" target="_blank">
            <Facebook className="text-white hover:text-[#16bbe0] transition" />
          </Link>
          <Link to="https://www.linkedin.com/in/mudassir-iqbal09" target="_blank">
            <Linkedin className="text-white hover:text-[#16bbe0] transition" />
          </Link>
          <Link to="https://github.com/Mudassir-Iqbal-733" target="_blank">
            <Github className="text-white hover:text-[#16bbe0] transition" />
          </Link>
          <Link to="https://www.instagram.com/mudassiriqbal232/" target="_blank">
            <Instagram className="text-white hover:text-[#16bbe0] transition" />
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={img}
          alt="Mudassir Iqbal"
          className="w-64 h-64 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px] object-cover rounded-full border-4 border-[#186d8f] shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
