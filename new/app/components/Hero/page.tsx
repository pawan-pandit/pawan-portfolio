"use client"
import { useRef, useEffect, useState, useLayoutEffect } from "react"
import styles from "./home.module.css"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { motion, Easing } from "framer-motion"
import { FaGithub, FaInstagram, FaLinkedin, FaLinkedinIn, FaYoutube } from "react-icons/fa"
import { FlickeringGrid } from "../ui/dot-pattern"


export default function Home() {
  const [windowsWidth, setWindowsWidth] = useState(0)

  useEffect(() => {
    setWindowsWidth(window.innerWidth)
  }, [])

  // const getBlocks = () => {
  //   const blockSize = windowsWidth * 0.05
  //   const nbOfBlocks = Math.ceil(window.innerHeight / blockSize)
  //   return [...Array(nbOfBlocks).keys()].map((_, index) => {
  //     return (
  //       <div
  //         onMouseEnter={(e) => {
  //           colorize(e.target)
  //         }}
  //         key={index}
  //       ></div>
  //     )
  //   })
  // }

  // const colorize = (el: any) => {
  //   el.style.backgroundColor = "white"
  //   setTimeout(() => {
  //     el.style.backgroundColor = "transparent"
  //   }, 300)
  // }



  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 1,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }
    else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent })
    gsap.set(secondText.current, { xPercent: xPercent })
    requestAnimationFrame(animate);
    xPercent += 0.10 * direction;
  }



  return (
    <>
      <div className={`${styles.container} relative h-[70vh] xl:h-[80vh] `}>
        <FlickeringGrid
          className="absolute right-0 top-0 z-0 w-[80%] h-full mix-blend-hard-light mask-[radial-gradient(800px_circle_at_center,white,transparent)]"
          squareSize={4}
          gridGap={3}
          color="#60A5FA"
          maxOpacity={0.5}
          flickerChance={0.1}
        />
        <div className={`${styles.body} h-[60vh] xl:h-[70vh]  max-w-7xl px-6 md:px-10  lg:px-10 flex items-center gap-10 `}>

          <div className="lg:max-w-4xl xl:max-w-5xl text-left lg:pt-10">
            <p className="text-4xl sm:text-6xl xl:text-8xl font-normal tracking-tight leading-[1.1] mb-4 sm:mb-6 text-transparent bg-clip-text bg-linear-to-b from-white to-gray-500 font-sans ">Pawan Sharma <br />  Creative Developer
            </p>



            <p className="text-sm  md:text-sm lg:text-sm xl:text-lg font-thin leading-relaxed mt-4 text-gray-300 tracking-wider">
              I’m a Full-Stack Developer with 2+ year of experience building modern web
              applications using  <span className="font-semibold">React, Next.js, and NestJS.</span> I enjoy creating clean,
              responsive interfaces and scalable backend systems. I’ve worked on several
              live projects where I collaborated with designers and teams to improve UI/UX
              and deliver high-performance applications. Currently, I’m expanding my
              skills in Full-Stack development with Generative AI while exploring new
              technologies to build smarter and more impactful digital products.
              <br /> <span className="underline "> Open to Internships & New Opportunities</span>
            </p>

            <div className="flex items-center gap-2 mt-6  text-xl md:text-2xl   divide-x divide-gray-200   ">
              <a
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-blue-400 transition p-2"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className="hover:text-gray-300 transition  p-1"
              >
                <FaGithub />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                className="hover:text-pink-400 transition  p-2"
              >
                <FaInstagram />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                className="hover:text-red-500 transition  p-1"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="relative hidden md:flex 
                w-full 
                items-center justify-center lg:h-[50vh] xl:h-[60vh]">

            <div className="relative z-20 w-full h-full overflow-hidden">
              <Image
                src="/pawan11.png"
                alt="Pawan"
                fill
                className="object-contain  grayscale"
              />
            </div>

          </div>

        </div>

        {/* <div className={styles.grid}>
          {windowsWidth > 0 &&
            [...Array(20).keys()].map((_, index) => {
              return (
                <div key={index} className={styles.column}>
                  {getBlocks()}
                </div>
              )
            })}
        </div> */}
      </div>

      <div className=" relative flex min-h-[7vh] text-center items-center justify-center  overflow-hidden border-none bg-[#000000]  ">
        <FlickeringGrid
          className="absolute right-0 top-0 z-0 w-[80%] h-full mix-blend-hard-light mask-[radial-gradient(800px_circle_at_center,white,transparent)]"
          squareSize={4}
          gridGap={3}
          color="#60A5FA"
          maxOpacity={0.5}
          flickerChance={0.1}
        />
        <div className="absolute w-full overflow-hidden">
          <div ref={slider} className="relative whitespace-nowrap flex gap-10">
            <p
              ref={firstText}
              className="relative m-0 tracking-tight leading-[1.1] text-transparent bg-clip-text bg-linear-to-b from-white to-gray-500 font-sans text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold"
            >
              • Freelance Developer • Freelance Frontend Developer • Freelance Developer • Freelance Frontend Developer • Web Designer • UI/UX Enthusiast
            </p>

            <p
              ref={secondText}
              className="relative m-0 tracking-tight leading-[1.1] text-transparent bg-clip-text bg-linear-to-b from-white to-gray-500 font-sans text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold"
            >
              • Freelance Developer • Freelance Frontend Developer • Freelance Developer • Freelance Frontend Developer • Web Designer • UI/UX Enthusiast
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
