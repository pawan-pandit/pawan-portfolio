"use client"

import { Home, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="bg-[#f7f7e6] text-black w-full flex flex-col relative overflow-hidden">
      <div className="flex justify-between items-center p-4 md:p-6 md:pr-20">
        {/* Left Navigation Menu */}
        <ul className="flex gap-6 md:gap-8 text-sm xl:text-xl font-bold cormor tracking-wider">
          <li>
            <Link
              href="#home"
              className="flex items-center gap-1 hover:text-[#a96748] hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <Home size={18} className="md:hidden" />
              <span className="hidden md:inline">Home</span>
            </Link>
          </li>

          <li>
            <Link
              href="#work"
              className="hover:text-[#a96748] hover:scale-110 transition-all duration-300 ease-in-out"
            >
              Work
            </Link>
          </li>

          <li>
            <Link
              href="#process"
              className="hover:text-[#a96748] hover:scale-110 transition-all duration-300 ease-in-out"
            >
              Process
            </Link>
          </li>

          <li>
            <Link
              href="#contact"
              className="hover:text-[#a96748] hover:scale-110 transition-all duration-300 ease-in-out"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Email Section (Text on desktop, Icon on mobile) */}
        <a
          href="mailto:pawansharmaaddii@gmail.com"
          className="flex items-center gap-2 text-xs xl:text-xl font-light hover:text-[#a96748] hover:scale-105 transition-all duration-300 ease-in-out"
        >
          {/* Mobile Icon */}
          <Mail size={20} className="block md:hidden" />

          {/* Desktop Text */}
          <span className="hidden md:inline">pawansharmaaddii@gmail.com</span>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
