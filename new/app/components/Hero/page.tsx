"use client"

import Image from "next/image"
import { useRef, useEffect, useState } from "react"

const Hero = () => {
  const textDivRef = useRef<HTMLDivElement>(null)
  const [textHeight, setTextHeight] = useState(0)

  useEffect(() => {
    if (textDivRef.current) {
      setTextHeight(textDivRef.current.offsetHeight)
    }

    const handleResize = () => {
      if (textDivRef.current) {
        setTextHeight(textDivRef.current.offsetHeight)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="bg-[#f7f7e6] text-black w-full flex flex-col relative overflow-hidden min-h-screen">
      {/* Mobile Layout */}
      <div className="flex flex-col md:flex-row items-stretch relative w-full">
        {/* Left Section - Text */}
        <div className="w-full md:w-1/3 flex items-center justify-center relative p-4 sm:p-6 md:p-8 md:pl-8 z-10 order-1 md:order-1">
          <div className="flex flex-col md:flex-row md:h-full md:justify-between md:items-stretch text-center md:text-left font-black tracking-wide">
            <div className="md:w-1/2 flex items-center justify-center md:py-0">
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wider md:[writing-mode:vertical-rl] md:rotate-180 leading-tight">
                CREATIVE DEVELOPER
              </h1>
            </div>

            <div className="md:w-1/2 flex items-center justify-center md:py-0">
              <h2 className="text-xl sm:text-3xl md:text-4xl  lg:text-5xl xl:text-6xl tracking-wider md:[writing-mode:vertical-rl] md:rotate-180 leading-tight">
                & DIGITAL DESIGNER
              </h2>
            </div>
          </div>
        </div>

        {/* Right Section - Image & Info */}
        <div className="w-full md:w-2/3 bg-[#a96748] relative z-0 overflow-visible flex flex-col justify-end order-2 md:order-2">
          <div className="relative w-full flex justify-center px-4 sm:px-6 md:px-0 py-4 sm:py-6 md:py-0 md:pb-0 order-1">
            <div
              className="h-70 sm:h-70 md:h-[30vh] lg:h-[45vh] xl:h-[50vh] 2xl:h-[30vh] relative w-full sm:mx-10 sm:mt-10"
            >
              {/* Base Image */}
              <Image src="/pawan3.png" alt="Pawan Sharma" fill className="object-cover" priority />

              <div className="absolute bottom-0 -left-1/4 w-12 h-12 sm:w-16 sm:h-16 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48">
                <Image
                  src="/black1.png"
                  alt="Overlay Design Element"
                  fill
                  className="object-contain drop-shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>

          <div
            ref={textDivRef}
            className="bg-[#a96748] px-4 sm:px-6 md:px-10 pb-6 sm:pb-8 md:py-8 roboto flex flex-col items-center md:items-end justify-center relative order-2"
          >
            <p className="text-sm md:text-base lg:text-lg xl:text-xl md:text-right mb-1 md:mb-3 roboto">
              ❝ I build every project with the same dedication as if it were my own brand.❞
            </p>
            <h3 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-4xl md:text-right font-black">
              Pawan Sharma
            </h3>
            <p className="text-xs md:text-sm lg:text-base xl:text-base md:text-right mt-2 md:mt-3 bg-white/10 px-2">
              Freelance Front-End Developer • Next.js • Nest.js • UI/UX Enthusiast • Learning SQL & Python | Open to
              Internships & New Opportunities
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
