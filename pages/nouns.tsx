import type { NextPage } from "next"
import Head from "next/head"
import {
  DoubleText,
  CarouselSm,
  CarouselMd,
  CarouselLg,
  CarouselFull
} from "../components/ui"
import { useEffect, useState } from "react"
import { timeline } from "motion"
import { TimelineDefinition } from "@motionone/dom/types/timeline/types"
import arrow from "public/img/icon/arrow.svg"
import Image from "next/image"
import { useScreenSize } from "../provider/ScreenSizeProvider"

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(true)
  const hendelClick = () => {
    setIsOpen(isOpen == false ? true : false)
  }

  const { screenSize } = useScreenSize()
  // Animation
  useEffect(() => {
    const sequence = [
      [
        ".animate-bouncy",
        {
          transform: [
            "scale(4)",
            "scale(1)",
            "scale(1.6)",
            "scale(1.1)",
            "scale(1.2)",
            "scale(1)"
          ]
        },
        { offset: [0, 0.3, 0.5, 0.7, 0.8, 0.9, 1], duration: 0.8 }
      ],
      [
        ".yellow-circle",
        { opacity: 1, transform: "scale(30)" },
        { duration: 0.4 }
      ],
      [".animate-bouncy", { opacity: 0 }],
      [".main-animation-box", { backgroundColor: "transparent" }],
      [
        ".container-animation",
        { zIndex: 0, position: "relative" },
        { duration: 0.1 }
      ],
      [
        ".yellow-circle",
        { opacity: 0, transform: "scale(0)" },
        { duration: 0.4 }
      ],
      [".navbar-scroll", { zIndex: 30 }],
      [".comics-text", { opacity: 1 }, { at: 1.8 }],
      [".comics-text", { transform: "scale(1)" }, { delay: 0.4 }],
      [".cards-box", { opacity: 1 }],
      [".arrow-box", { opacity: 1 }],
      [
        ".cards-box",
        { right: "90px", top: "-5px" },
        { at: 3.4, duration: 0.4 }
      ],
      [
        ".animated-card-1",
        {
          width: "220px",
          height: "260px",
          transform: "rotate(-12deg) translate(-85px, 45px)"
        },
        { at: 3.4, duration: 0.4 }
      ],
      [
        ".animated-card-2",
        {
          width: "220px",
          height: "260px",
          transform: "rotate(11deg) translate(-30px, 23px)"
        },
        { at: 3.4, duration: 0.4 }
      ],
      [
        ".animated-card-3",
        { width: "220px", height: "260px", transform: "rotate(28deg)" },
        { at: 3.4, duration: 0.4 }
      ],
      [".main-animation-box", { zIndex: "-10" }]
    ] as TimelineDefinition

    const animationTimeline = timeline(sequence)

    return () => animationTimeline.cancel()
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="fixed w-screen h-screen z-30 container-animation">
        <main className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-white main-animation-box">
          <div className="absolute animate-bouncy">
            <DoubleText text="POW" className="-rotate-12 double-text" />
          </div>
          <div className="absolute w-16 h-16 -translate-x-1/2 -translate-y-1/2 bg-yellow-100 rounded-full opacity-0 top-1/2 left-1/2 yellow-circle"></div>
          <div className="text-center scale-75 opacity-0 comics-text">
            <p className="lg:text-[12rem] z-10 font-londrina text-8xl text-black-100 relative">
              NOUNS
              <br />
              COMICS
            </p>
            <p className="absolute z-10 text-sm -bottom-1 right-2 text-black-100 font-ubuntu">
              Powered by ComicsDAO
            </p>
            <div className="absolute opacity-0 -top-10 right-3/4 lg:top-[-110px] lg:right-[78px] cards-box">
              <div className="absolute rounded animated-card-1 w-[80px] h-[95px] lg:w-[220px] lg:h-[265px] border-2 border-solid border-black-100 bg-red"></div>
              <div className="absolute rounded animated-card-2 left-3 w-[80px] h-[95px] lg:w-[220px] lg:h-[265px] bg-yellow-200 border-2 border-solid border-black-100"></div>
              <div className="absolute rounded animated-card-3 left-6 w-[80px] h-[95px] lg:w-[220px] lg:h-[265px] border-2 border-solid border-black-100 bg-orange"></div>
            </div>
          </div>
        </main>
      </div>
      <div className="absolute flex justify-end mt-8 opacity-0 animate-bounce arrow-box bottom-10 lg:bottom-20 left-1/2">
        <a
          href="#box-carousels"
          className="bg-yellow-100 lg:hover:bg-orange -translate-x-1/2 cursor-pointer border-solid border-2 border-black-100 h-[50px] w-[50px] flex items-center justify-center rounded-full p-3"
        >
          <Image src={arrow} alt="arrow down" height={20} width={20} />
        </a>
      </div>
      <div id="box-carousels" className="pt-[95px]">
        {screenSize === "mobile" && <CarouselSm onClick={hendelClick} />}
        {screenSize === "tablet" && <CarouselMd onClick={hendelClick} />}
        {screenSize === "desktop" && <CarouselLg onClick={hendelClick} />}
        <CarouselFull onClick={hendelClick} isOpen={isOpen} />
      </div>
    </>
  )
}

export default Home
