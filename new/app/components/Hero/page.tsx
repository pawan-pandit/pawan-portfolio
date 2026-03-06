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

  const getBlocks = () => {
    const blockSize = windowsWidth * 0.05
    const nbOfBlocks = Math.ceil(window.innerHeight / blockSize)
    return [...Array(nbOfBlocks).keys()].map((_, index) => {
      return (
        <div
          onMouseEnter={(e) => {
            colorize(e.target)
          }}
          key={index}
        ></div>
      )
    })
  }

  const colorize = (el: any) => {
    el.style.backgroundColor = "white"
    setTimeout(() => {
      el.style.backgroundColor = "transparent"
    }, 300)
  }



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
      <div className={`${styles.container} h-[60vh] xl:h-[70vh] `}>

        <div className={`${styles.body} h-[60vh] xl:h-[70vh]  max-w-7xl px-6 md:px-10  lg:px-10 flex items-center gap-10 `}>
          <FlickeringGrid
            className="absolute  inset-0 mask-[radial-gradient(350px_circle_at_center,white,transparent)]"
            squareSize={4}
            gridGap={3}
            color="#60A5FA"
            maxOpacity={0.5}
            flickerChance={0.1}
          />
          <div className="lg:max-w-2xl xl:max-w-3xl text-left lg:pt-10">
            <p className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-sans ">Pawan Sharma</p>
            <p className="text-3xl md:text-5xl  lg:text-6xl xl:text-7xl  font-sans mt-2">
              Creative Developer
            </p>

            <p className="text-xs  md:text-sm lg:text-sm xl:text-base font-extralight mt-4 text-gray-200 tracking-wider">
              I’m a Full-Stack Developer with 2+ year of experience building modern web
              applications using React, Next.js, and NestJS. I enjoy creating clean,
              responsive interfaces and scalable backend systems. I’ve worked on several
              live projects where I collaborated with designers and teams to improve UI/UX
              and deliver high-performance applications. Currently, I’m expanding my
              skills in Full-Stack development with Generative AI while exploring new
              technologies to build smarter and more impactful digital products.
              <br /> Open to Internships & New Opportunities
            </p>

            <div className="flex items-center gap-5 mt-6  text-xl md:text-2xl  ">
              <a
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-blue-400 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className="hover:text-gray-300 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                className="hover:text-pink-400 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                className="hover:text-red-500 transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
         
          {/* RIGHT SIDE IMAGE */}
       <div className="relative hidden lg:flex 
                w-full  lg:w-[35%] xl:w-[40%] 
                items-center justify-center aspect-square">

  <div className="relative z-20 w-full h-full overflow-hidden">
    <Image
      src="/pawan1.png"
      alt="Pawan"
      fill
      className="object-cover rounded-[100%_60%_40%_50%]"
    />
  </div>

</div>

        </div>
        <div className={styles.grid}>
          {windowsWidth > 0 &&
            [...Array(20).keys()].map((_, index) => {
              return (
                <div key={index} className={styles.column}>
                  {getBlocks()}
                </div>
              )
            })}
        </div>
      </div>

      <main className=" relative flex h-[10vh]  overflow-hidden  bg-[#191919]">

        <div className="absolute w-full overflow-hidden">
          <div ref={slider} className="relative whitespace-nowrap">
            <p
              ref={firstText}
              className="relative m-0 text-white text-[6vh]  md:text-[4vw] font-bold pr-[50px] tracking-wider "
            >
              •  Freelance Developer •  Freelance Frontend Developer  •  Freelance Developer •  Freelance Frontend Developer • Web Designer • UI/UX Enthusiast      </p>
          </div>
        </div>
      </main>
    </>
  )
}
