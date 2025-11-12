"use client"

import { useEffect, useState } from "react"
import { Home, Mail } from "lucide-react"
import Link from "next/link"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 z-50 w-full transition-all duration-75 ease-in-out bg-[#191919]`}>
      <div
        className={`flex justify-between items-center py-3 px-2 md:p-2 lg:p-3 xl:p-4 transition-all duration-1000 ease-in-out
           text-black bg-white/5 skew-x-[-10deg]
        ${scrolled ? "mx-auto max-w-full" : "mx-auto max-w-[94%] md:max-w-[90%]"

          }`}
      >
        <ul className="flex gap-6 md:gap-8 text-sm xl:text-xl font-bold cormor tracking-wider text-white/95">
          {[
            { href: "#home", label: "", icon: <Home className="w-5 h-5 md:h-7 md:w-7" /> },
            { href: "#work", label: "Work" },
            { href: "#process", label: "Process" },
            { href: "#contact", label: "Contact" },
          ].map(({ href, label, icon }) => (
            <li key={href}>
              <Link
                href={href}
                className="group flex items-center gap-1 cursor-pointer"
              >
                <div className="wavy-phrase-container flex items-center gap-1">
                  {icon && (
                    <span className="icon-motion flex items-center justify-center">
                      {icon}</span>
                  )}
                  {label.split("").map((char, index) => (
                    <p key={index} style={{ "--char-index": index } as any}>
                      {char}
                    </p>
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="mailto:pawansharmaaddii@gmail.com"
          className="flex items-center gap-2 text-xs xl:text-xl font-light text-white hover:text-[#f7f7e6] hover:scale-105 transition-all duration-300 ease-in-out md:border p-1"
        >
          <Mail size={20} className="block md:hidden" />

          <span className="hidden md:inline">pawansharmaaddii@gmail.com</span>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
