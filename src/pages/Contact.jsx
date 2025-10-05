import React, { useEffect } from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Facebook, Linkedin, Instagram, GithubIcon } from "lucide-react";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const contacts = [
  { name: "Email", icon: <MdOutlineMailOutline />, detail: "mudassir.iqbal0999@gmail.com" },
  { name: "Phone", icon: <FaPhoneAlt />, detail: "03245754638" },
  { name: "Address", icon: <FaLocationDot />, detail: "Available Worldwide" }
]

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div id='contact' className="mt-30 px-6 md:px-10">
      {/* Heading */}
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-center md:text-5xl font-bold text-[#19d6e0]">Let's Work Together</h1>
        <p className="text-xl mt-2 text-center">
          Let's build something amazing together. Whether you're looking for a developer, collaborator, or just want to chat tech — I'm just a message away.
        </p>
        <span className="block w-24 h-0.5 bg-[#19d6e0] mt-5"></span>
      </div>

      {/* Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 mt-20 gap-20'>

        {/* Contact Info */}
        <div>
          {contacts.map((e, id) => (
            <div
              data-aos="flip-up"
              key={id}
              className='transition-all duration-300 hover:translate-x-2 hover:shadow-lg hover:shadow-[#19d6e0]/40 flex gap-3 md:gap-7 mb-7 bg-gray-800/50 p-5 rounded-xl'
            >
              <h2 className='bg-[#289ac7] py-5 px-5 text-xl rounded-full transition-colors duration-300 hover:bg-[#19d6e0]'>
                {e.icon}
              </h2>
              <div className='flex flex-col py-1'>
                <h2 className="font-semibold transition-colors duration-300 hover:text-[#19d6e0]">{e.name}</h2>
                <h2 className="transition-colors duration-300 hover:text-[#19d6e0]">{e.detail}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div
          className='transition-all duration-300 hover:translate-x-2 hover:shadow-lg hover:shadow-[#19d6e0]/40  bg-gray-800/50 h-[93%] rounded-lg py-15 px-10 md:px-15'
          data-aos="flip-up"
        >
          <div className='flex gap-5 mb-3'>
            <span className='hidden md:w-4 md:h-4 rounded-full bg-green-500'></span>
            <span className='text-xl font-bold'>Available For Freelance</span>
          </div>
          <span>I'm currently available for new projects and collaborations.</span>

          <div className='flex flex-col mt-10'>
            <h2 className='text-lg font-medium'>Follow Me On</h2>
            <div className='flex pt-5 gap-3'>
              <Link to="https://facebook.com/maharmudassir.iqbal"
                className='h-10 w-10 rounded-full bg-gray-600 flex items-center justify-center transition-all duration-300 hover:bg-[#1877F2] hover:shadow-md hover:shadow-[#1877F2]/40 hover:text-white'>
                <Facebook />
              </Link>
              <Link to="https://www.instagram.com/mudassiriqbal232/"
                className='h-10 w-10 rounded-full bg-gray-600 flex items-center justify-center transition-all duration-300 hover:bg-[#E4405F] hover:shadow-md hover:shadow-[#E4405F]/40 hover:text-white'>
                <Instagram />
              </Link>
              <Link to="https://www.linkedin.com/in/mudassir-iqbal09"
                className='h-10 w-10 rounded-full bg-gray-600 flex items-center justify-center transition-all duration-300 hover:bg-[#0A66C2] hover:shadow-md hover:shadow-[#0A66C2]/40 hover:text-white'>
                <Linkedin />
              </Link>
              <Link to="https://github.com/Mudassir-Iqbal-733"
                className='h-10 w-10 rounded-full bg-gray-600 flex items-center justify-center transition-all duration-300 hover:bg-black hover:shadow-md hover:shadow-black/40 hover:text-white'>
                <GithubIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
