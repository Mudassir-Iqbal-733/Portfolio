import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

const linkProps = {
  smooth: true,
  duration: 800,
  offset: -80,
  spy: true, // 👈 important: tracks scroll to apply activeClass
  className:
    "cursor-pointer text-white font-bold hover:text-[#19d6e0] hover:underline underline-offset-8",
  activeClass:
    "text-[#19d6e0] underline underline-offset-8", // 👈 active link style
};
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 px-6 py-4 flex items-center justify-between  shadow-md z-50">
      <h1 className="text-[#19d6e0] text-2xl font-bold">Mudassir Iqbal</h1>

      <div className="hidden md:flex space-x-6">
        <Link to="home" {...linkProps}>Home</Link>
        <Link to="about" {...linkProps}>About</Link>
        <Link to="education" {...linkProps}>Education</Link>
        <Link to="skills" {...linkProps}>Skills</Link>
        <Link to="projects" {...linkProps}>Projects</Link>
        <Link to="contact" {...linkProps}>Contact</Link>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none"
      >
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center space-y-4 py-6 md:hidden">
          <Link to="home" {...linkProps} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="about" {...linkProps} onClick={() => setIsOpen(false)}>About</Link>
           <Link to="education" {...linkProps} onClick={() => setIsOpen(false)}>Education</Link>
          <Link to="skills" {...linkProps} onClick={() => setIsOpen(false)}>Skills</Link>
          <Link to="projects" {...linkProps} onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="contact" {...linkProps} onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
      
    </nav>
  );
};

export default Navbar;
