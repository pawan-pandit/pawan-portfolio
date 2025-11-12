"use client"
import { useRef, useEffect, useState, useLayoutEffect } from "react"
import styles from "./home.module.css"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { motion, Easing } from "framer-motion"


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



  const textDivRef = useRef<HTMLDivElement>(null)
  const [textHeight, setTextHeight] = useState(0)

  const firstText = useRef<HTMLParagraphElement>(null)
  const secondText = useRef<HTMLParagraphElement>(null)
  const slider = useRef<HTMLDivElement>(null)
  let xPercent = 0
  let direction = -1

  useEffect(() => {
    if (textDivRef.current) {
      setTextHeight(textDivRef.current.offsetHeight)
    }
    const handleResize = () => {
      if (textDivRef.current) setTextHeight(textDivRef.current.offsetHeight)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    })
    requestAnimationFrame(animate)
  }, [])

  const animate = () => {
    if (xPercent < -100) xPercent = 0
    else if (xPercent > 0) xPercent = -100
    gsap.set(firstText.current, { xPercent })
    gsap.set(secondText.current, { xPercent: xPercent + 100 })
    requestAnimationFrame(animate)
    xPercent += 0.1 * direction
  }

  const slideUp = {
    initial: { y: 300 },
    enter: {
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1] as Easing, // ✅ Cast to Easing
        delay: 0.8,
      },
    },
  }


  return (
    <>
      <div className={`${styles.container} h-[60vh] xl:h-[70vh] `}>
        <div className={` ${styles.body} px-4  `}>
          <p>  Pawan Sharma</p>
          <p>  CREATIVE DEVELOPER</p>


          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-center mt-2 md:mt-3  px-2 max-w-3xl mx-auto  tracking-wide ">
            Freelance Full Stack Developer • Next.js • Nest.js • UI/UX Enthusiast • Learning SQL & Python | Open to
            Internships & New Opportunities
          </p>

          <div className="max-w-xl lg:max-w-2xl mx-auto flex p-4 gap-1  lg:gap-4">
            <Image src="/pawan1.png" alt="pawan image" width={60} height={60} className="rounded-full h-[40px] w-[40px] xl:h-[45px] xl:w-[45px]"></Image>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-center mb-1 md:mb-3  normal-case tracking-wide max-w-2xl">
              ❝ I build every project with the same dedication as if it were my own brand. ❞
            </p>
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

      <motion.main
        variants={slideUp}
        initial="initial"
        animate="enter"
        className="relative flex overflow-hidden h-[5vh] md:h-[20vh] text-center items-center bg-[#191919]"
      >
        <div className="  w-full overflow-hidden">
          <div ref={slider} className="relative whitespace-nowrap">
            <p
              ref={firstText}
              className="inline-block m-0 text-white text-[5vw] font-bold pr-[50px]"
            >
              •  Freelance Developer •  Freelance Frontend Developer  •  Freelance Developer •  Freelance Frontend Developer • Web Designer • UI/UX Enthusiast
            </p>
            <p
              ref={secondText}
              className="inline-block m-0 text-white text-[5vw] font-bold pr-[50px]"
            >
              •  Freelance Developer •  Freelance Frontend Developer  •  Freelance Developer •  Freelance Frontend Developer • Web Designer • UI/UX Enthusiast
            </p>
          </div>
        </div>
      </motion.main>
    </>
  )
}
