"use client"
import React, { useState } from "react";

const tabs = ["Frontend", "Backend", "Tools", "Resume"];

const data = {
  Frontend: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "NestJS", "SQL", "Firebase"],
  Tools: ["Git", "GitHub", "VS Code", "Postman", "cPanel", "Hostiger"],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <div className="bg-[#191919] text-white py-10 md:py-20 px-4 md:px-10  mx-auto font-bold  tracking-wide   ">

      <div className="max-w-4xl mb-10 mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold  mb-4">
          Technical Skills & Tools – Freelance Web Developer
        </h2>
        <p className="text-gray-300 text-sm md:text-base lg:text-lg xl:text-xl  font-normal">
          A detailed overview of my frontend and backend development skills,
          programming languages, and professional tools. I specialize in
          building modern, responsive web applications using React, Next.js,
          Node.js, and industry-standard development tools.
        </p>
      </div>
      <div className="flex gap-3 flex-wrap mb-8  text-sm lg:text-xl  ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-2xl font-bold   text-sm lg:text-lg tracking-wider transition 
              ${activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-black"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-white/10 shadow-lg rounded-xl p-6">
        {activeTab !== "Resume" ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {data[activeTab].map((item, index) => (
              <div
                key={index}
                className="border rounded-lg p-3 text-center font-bold text-xs lg:text-lg "
              >
                {item}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <h3 className=" text-sm lg:text-lg uppercase font-bold mb-4">My Resume</h3>
            <p className="text-blue-200 underline hover:scale-105 mb-6 text-sm lg:text-lg">
              Download my resume to know more about my skills and experience.
            </p>
            <a
              href="/Pawan_Sharma_Resume.pdf"
              download
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Download Resume
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
