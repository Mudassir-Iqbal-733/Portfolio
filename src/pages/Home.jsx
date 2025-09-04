import React from "react";
import img from "../media/dummy.png";
import { Facebook, Linkedin, Github, Instagram } from "lucide-react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div id="home" className="flex flex-col-reverse md:flex-row items-center justify-between mt-20 md:mt-40 px-6 md:px-16 gap-10">
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
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            offset={-80}
            className="cursor-pointer font-medium px-8 py-2 rounded-md bg-[#16bbe0] hover:bg-[#1399b8] transition"
          >
            View My Work
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={1000}
            className="cursor-pointer font-medium px-8 py-2 rounded-md border border-gray-400 hover:bg-gray-800 transition"
          >
            Get In Touch
          </Link>
        </div>

        <div className="flex justify-center md:justify-start gap-6 mt-6">
          <a
            href="https://facebook.com/maharmudassir.iqbal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="text-white hover:text-[#16bbe0] transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/mudassir-iqbal09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="text-white hover:text-[#16bbe0] transition" />
          </a>
          <a
            href="https://github.com/Mudassir-Iqbal-733"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="text-white hover:text-[#16bbe0] transition" />
          </a>
          <a
            href="https://www.instagram.com/mudassiriqbal232/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="text-white hover:text-[#16bbe0] transition" />
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={img}
          alt="Mudassir Iqbal"
          
        />
      </div>
    </div>
  );
};

export default Home;
