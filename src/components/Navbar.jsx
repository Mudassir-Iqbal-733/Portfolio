// Navbar.jsx
import React, { useState } from "react";

const Navbar = ({ scrollToSection, refs }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#3b3939] px-6 py-4 flex items-center justify-between border-y border-[#186d8f] shadow-md z-50">
      <h1 className="text-[#289ac7] text-2xl font-bold">Mudassir Iqbal</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <button onClick={() => scrollToSection(refs.homeRef)} className="text-white hover:text-[#289ac7] font-bold">Home</button>
        <button onClick={() => scrollToSection(refs.aboutRef)} className="text-white hover:text-[#289ac7] font-bold">About</button>
        <button onClick={() => scrollToSection(refs.skillsRef)} className="text-white hover:text-[#289ac7] font-bold">Skills</button>
        <button onClick={() => scrollToSection(refs.projectsRef)} className="text-white hover:text-[#289ac7] font-bold">Projects</button>
        <button onClick={() => scrollToSection(refs.contactRef)} className="text-white hover:text-[#289ac7] font-bold">Contact</button>
      </div>

      {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center space-y-4 py-6 md:hidden">
          <button onClick={() => { scrollToSection(refs.homeRef); setIsOpen(false); }} className="text-white hover:text-[#289ac7]">Home</button>
          <button onClick={() => { scrollToSection(refs.aboutRef); setIsOpen(false); }} className="text-white hover:text-[#289ac7]">About</button>
          <button onClick={() => { scrollToSection(refs.skillsRef); setIsOpen(false); }} className="text-white hover:text-[#289ac7]">Skills</button>
          <button onClick={() => { scrollToSection(refs.projectsRef); setIsOpen(false); }} className="text-white hover:text-[#289ac7]">Projects</button>
          <button onClick={() => { scrollToSection(refs.contactRef); setIsOpen(false); }} className="text-white hover:text-[#289ac7]">Contact</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
