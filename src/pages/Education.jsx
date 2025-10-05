import React from "react";

const education = [
  {
    title: "Matric",
    date: "22/03/2020",
    description:
      "I completed my Matric in Science from Cambridge School in March 2020 with good marks.",
  },
  {
    title: "Intermediate",
    date: "29/06/2022",
    description:
      "I completed my Intermediate (ICS) from Riphah International College Lodhran in June 2022 with good marks.",
  },
  {
    title: "ADP (2 Years Program)",
    date: "30/11/2024",
    description:
      "I completed my ADP in Computer Science from Islamia University Bahawalpur in November 2024 with a good CGPA.",
  },
  {
    title: "MERN Stack Development",
    date: "15/03/2025",
    description:
      "I completed MERN Stack Development at Tareen Institute of Computer Education & Resources Lodhran in March 2025, gaining hands-on experience in Blogs, Business, Portfolio, and E-commerce sites.",
  },
];

const Education = () => {
  return (
    <section id="education" className=" mt-40 text-white px-4 sm:px-6 py-10 rounded-xl max-w-4xl mx-auto shadow-lg">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-[#19d6e0]">
          Education & Courses
        </h1>
        <span className="block w-20 h-1 bg-[#19d6e0] mt-3 rounded-full"></span>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 content-start border-gray-600 ml-4 sm:ml-6">
        {education.map((item, idx) => (
          <div
            key={idx}
            className="mb-10 ml-6 sm:ml-10 relative group transition-transform duration-300 hover:translate-x-1"
          >
            {/* Timeline Dot */}
            <span className="absolute w-4 h-4 bg-[#19d6e0] rounded-full -left-[25px] sm:-left-[33px] border-4 border-gray-900 group-hover:scale-110 transition-transform"></span>

            {/* Card Content */}
            <div className="bg-gray-800/60 p-4 sm:p-5 rounded-lg shadow-md hover:shadow-[#19d6e0]/30 transition">
              <h3 className="text-lg sm:text-xl font-semibold text-[#19d6e0]">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-2">
                Completed on: {item.date}
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
