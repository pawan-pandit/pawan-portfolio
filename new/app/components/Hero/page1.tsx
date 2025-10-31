import Image from "next/image"

const hero = () => {
  return (
    <div className="bg-[#f7f7e6] text-black w-full flex flex-col relative overflow-hidden min-h-screen">
      {/* Mobile Layout */}
      <div className="flex flex-col md:flex-row items-stretch relative w-full">
        {/* Left Section - Text */}
        <div className="w-full md:w-1/3 flex items-center justify-center relative p-4 sm:p-6 md:p-8 md:pl-8 z-10 order-1 md:order-1">
          <div className="flex flex-col md:flex-row md:h-full md:justify-between md:items-stretch text-center md:text-left font-black tracking-wide">
            <div className="md:w-1/2 flex items-center justify-center   md:py-0">
              <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl tracking-wider md:[writing-mode:vertical-rl] md:rotate-180 leading-tight">
                CREATIVE DEVELOPER
              </h1>
            </div>

            <div className="md:w-1/2 flex items-center justify-center  md:py-0">
              <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl  tracking-wider md:[writing-mode:vertical-rl] md:rotate-180 leading-tight">
                & DIGITAL DESIGNER
              </h2>
            </div>
          </div>
        </div>

        {/* Right Section - Image & Info */}
        <div className="w-full md:w-2/3 bg-[#a96748] relative z-0 overflow-visible flex flex-col justify-end order-2 md:order-2 md:mt-[12vh]">
          <div className="relative w-full flex justify-center md:absolute md:-top-[15%] lg:-top-[20%] xl:-top-[20%] md:right-0 md:w-[45vh] lg:w-[55vh] xl:w-[60vh] md:mr-4 lg:mr-10 xl:mr-20 h-auto z-10 px-4 sm:px-6 md:px-0 py-4 sm:py-6 md:py-0">
            <div className="h-70 sm:h-70 md:h-[35vh] lg:h-[50vh] xl:h-[60vh] w-full md:w-[45vh] lg:w-[55vh] xl:w-[60vh] relative">
              {/* Base Image */}
              <Image src="/pawan3.png" alt="Pawan Sharma" fill className="object-contain" priority />

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

          <div className="mt-12 sm:mt-16 md:mt-32 lg:mt-40 xl:mt-100 bg-[#a96748] px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-8 flex flex-col items-center md:items-end justify-center relative">
            <p className="text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-4xl font-extralight md:text-right mb-2 md:mb-3 leading-snug">
              Crafting modern, high-performing websites
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:text-right leading-tight font-black">
              Pawan Sharma
            </h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium md:text-right mt-2 md:mt-3 leading-snug">
              Freelance Front-End Developer • Next.js Expert • UI/UX Enthusiast
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default hero
