import React, { useEffect } from "react";
import img from "../media/media.jpg";
import { Facebook, Linkedin, Github, Instagram } from "lucide-react";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: false, // animation happens every time you scroll
    });
  }, []);

  return (
    <div
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between mt-20 md:mt-40 px-6 md:px-16 gap-10"
    >
      <div
        className="w-full md:w-1/2 text-center md:text-left"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <h1
          data-aos="fade-up"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-semibold leading-tight"
        >
          Hello, I'm <span className="text-[#19d6e0]">Mudassir Iqbal</span>
        </h1>

        <p className="text-base md:text-lg mt-5 text-gray-200 leading-relaxed">
          I am a MERN Stack Developer with hands-on experience in building
          high-quality, scalable, and modern web applications. I specialize in
          developing responsive, and accessible web interfaces and robust
          backend systems tailored to meet business needs.
          <br />
          <br />
          <strong>Tech Stack Expertise:</strong> HTML, CSS, JavaScript, React
          Js, Tailwind CSS, Node.js, Express.js, MongoDB, Github and Vercel.
          <br />
          <br />
          I bring a goal-oriented mindset, a commitment to clean code, and a
          passion for delivering value-driven solutions. Let’s build something
          exceptional together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            offset={-80}
            className="transition-all duration-300 hover:translate-x-2 hover:shadow-lg hover:shadow-[#19d6e0]/40 cursor-pointer font-medium px-8 py-2 rounded-md bg-[#16bbe0]"
          >
            View My Work
          </Link>

          {/* ✅ Download CV button */}
          <a
            href="/Mudassir Iqbal_Resume.pdf" // <-- replace with your actual CV file path
            download="Mudassir_Iqbal_CV"
            className="transition-all duration-300 hover:translate-x-2 hover:shadow-lg hover:shadow-[#19d6e0]/40 cursor-pointer font-medium px-8 py-2 rounded-md border border-gray-400 text-white"
          >
            Download CV
          </a>
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

      <div
        className="w-full md:w-1/2 flex justify-center transition-all duration-300 hover:translate-x-2 hover:shadow-lg hover:shadow-[#19d6e0]/40"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <img src={img} alt="Mudassir Iqbal" />
      </div>
    </div>
  );
};

export default Home;
