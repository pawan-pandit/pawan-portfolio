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



  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect( () => {
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
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.10 * direction;
  }


 
  return (
    <>
      <div className={`${styles.container} h-[60vh] xl:h-[70vh] `}>
        <div className={` ${styles.body} px-4  text-3xl md:text-5xl font-bold`}>
          <p>  Pawan Sharma</p>
          <p>  CREATIVE DEVELOPER</p>


          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-center mt-2 md:mt-3  text-gray-300  max-w-3xl mx-auto  tracking-wider ">
            Freelance Full Stack Developer • Next.js • Nest.js • UI/UX Enthusiast • Learning SQL & Python | Open to
            Internships & New Opportunities
          </p>

          <div className="max-w-xl lg:max-w-2xl mx-auto flex p-4 gap-1  lg:gap-4">
            <Image src="/pawan1.png" alt="pawan image" width={60} height={60} className="rounded-full h-[40px] w-[40px] xl:h-[45px] xl:w-[45px]"></Image>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-center mb-1 md:mb-3  normal-case tracking-wider max-w-2xl text-white/95">
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
