import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Facebook, Linkedin, Github, Instagram, GithubIcon } from "lucide-react";
import { Link } from 'react-router-dom';

const contacts = [
    {name : "Email",icon : <MdOutlineMailOutline  /> , detail : "mudassir.iqbal0999@gmail.com"},
    {name : "Phone",icon : <FaPhoneAlt /> , detail : "03245754638"},
    {name : "Adress",icon : <FaLocationDot />, detail : "Available Worldwide" }
]

const Contact = () => {
  return (
    <div className="mt-30 px-6 md:px-10">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-center md:text-5xl font-bold">Let's Work Together</h1>
        <p className="text-xl mt-2 text-center">
        Let's build something amazing together. Whether you're looking for a developer, collaborator, or just want to chat tech — I'm just a message away.
        </p>
        <span className="block w-24 h-0.5 bg-[#19d6e0] mt-5"></span>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-20 gap-20'>
       <div className=''>
{
    contacts.map((e,id)=>(
        <div key={id} className='flex gap-3 md:gap-7 mb-7 bg-gray-900 p-3 rounded-xl hover:bg-gray-700'>
           <h2 className='bg-[#289ac7] py-5 px-5 text-xl rounded-full'>{e.icon}</h2>
           <div className='flex flex-col py-1'>
            <h2>{e.name}</h2>
            <h2>{e.detail}</h2>
           </div>
        </div>
    ))
}
       </div>
       <div className='bg-gray-900 h-[93%] rounded-lg py-15 px-15 hover:bg-gray-700'>
<div className='flex gap-5 mb-3'>
  <span className='block md:w-4 md:h-4 rounded-full  bg-green-500'></span>
  <span className='text-xl font-bold'>Available For Freelance</span>
</div>
<span>I'm currently available for new projects and collaborations.</span>
<div className='flex flex-col mt-10'>
  <h2 className='text-lg font-medium'>Follow Me On</h2>
<div className='flex pt-5 gap-3'>
  <Link className='block h-10 w-10 rounded-full bg-gray-600 py-2 px-2 '><Facebook  /></Link>
  <Link className='block h-10 w-10 rounded-full bg-gray-600 py-2 px-2 '><Instagram  /></Link>
  <Link className='block h-10 w-10 rounded-full bg-gray-600 py-2 px-2 '><Linkedin  /></Link>
  <Link className='block h-10 w-10 rounded-full bg-gray-600 py-2 px-2 '><GithubIcon  /></Link>
</div>
</div>
       </div>
       </div>
      </div>
  )
}

export default Contact