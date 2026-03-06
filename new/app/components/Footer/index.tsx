import React from "react";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#191919] text-white px-6 py-12">
      
      {/* Banner */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold  mb-3">
          Let’s Build Something Great Together
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-sm md:text-base lg:text-lg xl:text-xl ">
          I’m a freelance frontend and full-stack web developer available for
          React, Next.js, and modern web development projects.
        </p>
      </div>

      {/* Contact Links */}
      <div className="flex justify-center gap-8 mb-8">
        {/* WhatsApp */}
        <a
          href="https://wa.me/917357546622"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact via WhatsApp"
          className="text-green-400 hover:scale-110 transition"
        >
          <FaWhatsapp size={28} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/your-linkedin-username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit LinkedIn profile"
          className="text-blue-400 hover:scale-110 transition"
        >
          <FaLinkedin size={28} />
        </a>

        {/* Email */}
        <a
          href="mailto:pawansharmaaddii@gmail.com"
          aria-label="Send email"
          className="text-red-400 hover:scale-110 transition"
        >
          <FaEnvelope size={28} />
        </a>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Pawan Sharma • Freelance Web Developer
      </div>
    </footer>
  );
};

export default Footer;
