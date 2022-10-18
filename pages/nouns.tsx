import type { NextPage } from "next"
import Head from "next/head"
import { DoubleText, NounsSection } from "../components/ui"
import React, { useEffect, useState } from "react"
import { timeline } from "motion"
import { TimelineDefinition } from "@motionone/dom/types/timeline/types"
import arrow from "public/img/icon/arrow.svg"
import Image from "next/image"
import { NavbarNouns } from "../components/shared"
import { fetchAPI } from "../lib/api"

const Home: NextPage = ({ comics }: any) => {
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
        { opacity: 1, transform: "scale(50)" },
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
        <link rel="icon" href="/favicon.ico" />
        <title>Nouns Comics | Powered by Comics DAO</title>
        <meta name="description" content="Comics DAO, visit us." />
        <link rel="canonical" hrefLang={"en"} href={`https://comicsdao.wtf`} />
        <link href={`https://comicsdao.wtf`} rel="x-default" />
        <meta property="og:title" content="Comics DAO" />
        <meta property="og:description" content="Comics DAO, visit us." />
        <meta
          property="og:image"
          content="https://comicsdao.wtf/img/icon/close.png"
        />
        <meta property="og:url" content={"https://comicsdao.wtf"} />
        <meta property="og:locale" content={"en"} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Comics DAO" />
        <meta name="twitter:description" content="Comics DAO, visit us." />
        <meta
          name="twitter:image"
          content="https://comicsdao.wtf/img/icon/close.png"
        />
        <meta name="twitter:creator" content="@ComicsDAO" />
      </Head>
      <NavbarNouns />
      <div className="fixed z-30 w-screen h-screen 2xl:w-full container-animation">
        <main className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-white max-w-screen-2xl main-animation-box">
          <div className="absolute animate-bouncy">
            <DoubleText text="POW" className="-rotate-12 double-text" />
          </div>
          <div className="fixed w-16 h-16 -translate-x-1/2 -translate-y-1/2 bg-yellow-100 rounded-full opacity-0 top-1/2 left-1/2 yellow-circle"></div>
          <div className="text-center scale-75 opacity-0 comics-text">
            <h1 className="xl:text-[11rem] lg:text-[9rem] z-10 font-londrina text-8xl text-black-100 relative">
              NOUNS
              <br />
              COMICS
            </h1>
            <h2 className="absolute z-10 text-sm -bottom-1 right-2 text-black-100 font-ubuntu">
              Powered by ComicsDAO
            </h2>
            <div className="absolute opacity-0 -top-10 right-3/4 lg:top-[-50px] lg:right-[78px] cards-box lg:pt-6 xl:pt-0 ">
              <div className="absolute rounded-lg animated-card-1 w-[80px] h-[95px] lg:w-[220px] lg:h-[265px] border-4 border-solid border-black-100 bg-red"></div>
              <div className="absolute rounded-lg animated-card-2 left-3 w-[80px] h-[95px] lg:w-[220px] lg:h-[265px] bg-yellow-200 border-4 border-solid border-black-100"></div>
              <div className="absolute rounded-lg animated-card-3 left-6 w-[80px] h-[95px] lg:w-[220px] lg:h-[265px] border-4 border-solid border-black-100 bg-orange"></div>
            </div>
          </div>
        </main>
      </div>
      <div className="absolute flex justify-end mt-8 opacity-0 animate-bounce arrow-box bottom-[2vh] 2xl:bottom-[20%] left-1/2">
        <a
          href="#box-carousels"
          className="bg-yellow-100 lg:hover:bg-orange -translate-x-1/2 cursor-pointer border-solid border-2 border-black-100 h-[50px] w-[50px] flex items-center justify-center rounded-full p-3"
        >
          <Image src={arrow} alt="arrow down" height={20} width={20} />
        </a>
      </div>
      <div id="box-carousels" className="pt-[145px]">
        {comics.map((comic, index) => {
          return (
            <React.Fragment key={index}>
              <NounsSection comic={comic} />
            </React.Fragment>
          )
        })}
      </div>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const apiRes = await fetchAPI(
    "/nouns-comics",
    {
      populate: {
        Cards: {
          populate: "*"
        }
      }
    },
    { method: "GET" },
    process.env.STRAPI_KEY
  )

  return {
    props: {
      comics: apiRes.data
    },
    revalidate: 60
  }
}
