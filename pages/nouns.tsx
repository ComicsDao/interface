import type { NextPage } from "next"
import Head from "next/head"
import { DoubleText, NounsSection } from "../components/ui"
import React, { useEffect, useState } from "react"
import { timeline } from "motion"
import { TimelineDefinition } from "@motionone/dom/types/timeline/types"
import arrow from "public/img/icon/arrow.svg"
import Image from "next/future/image"
import { NavbarNouns } from "../components/shared"
import { fetchAPI } from "../lib/api"
import pinkComic from "public/img/pink.png"
import orangeComic from "public/img/orange.png"
import yellowComic from "public/img/yellow.png"

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
      // [
      //   ".cards-box",
      //   { right: "90px", top: "-5px" },
      //   { at: 3.4, duration: 0.4 }
      // ],
      [
        ".animated-card-1",
        {
          transform: "rotate(-10deg) translate(-5px, -5px)"
        },
        { at: 3.4, duration: 0.4 }
      ],
      [
        ".animated-card-2",
        {
          transform: "rotate(5deg) translate(-10px, 0px)"
        },
        { at: 3.4, duration: 0.4 }
      ],
      [
        ".animated-card-3",
        { transform: "rotate(20deg)" },
        { at: 3.4, duration: 0.4 }
      ],
      [
        ".animated-card-1",
        {
          transform: "rotate(-12deg) translate(-5px, -5px)"
        },
        { at: 3.8, duration: 0.2 }
      ],
      [
        ".animated-card-2",
        {
          transform: "rotate(7deg) translate(-10px, 0px)"
        },
        { at: 3.8, duration: 0.2 }
      ],
      [
        ".animated-card-3",
        { transform: "rotate(18deg)" },
        { at: 3.8, duration: 0.2 }
      ],
      [
        ".animated-card-1",
        {
          transform: "rotate(-10deg) translate(-5px, -5px)"
        },
        { at: 4.0, duration: 0.2 }
      ],
      [
        ".animated-card-2",
        {
          transform: "rotate(5deg) translate(-10px, 0px)"
        },
        { at: 4.0, duration: 0.2 }
      ],
      [
        ".animated-card-3",
        { transform: "rotate(20deg)" },
        { at: 4.0, duration: 0.2 }
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
        <link
          rel="canonical"
          hrefLang={"en"}
          href={`https://comicsdao.wtf/nouns`}
        />
        <link href={`https://comicsdao.wtf`} rel="x-default" />
        <meta property="og:title" content="Comics DAO" />
        <meta property="og:description" content="Comics DAO, visit us." />
        <meta
          property="og:image"
          content="https://comicsdao.wtf/img/nounspreview.png"
        />
        <meta property="og:url" content={"https://comicsdao.wtf/nouns"} />
        <meta property="og:locale" content={"en"} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Comics DAO" />
        <meta name="twitter:description" content="Comics DAO, visit us." />
        <meta
          name="twitter:image"
          content="https://comicsdao.wtf/img/nounspreview.png"
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
            <div className="absolute opacity-0 -top-10 right-[30px] lg:top-[-30px] lg:right-[60px] cards-box lg:pt-6 xl:pt-0 ">
              <div className="absolute animated-card-1 left-[-35px] top-[-10px] w-[160px] rotate-[20deg]">
                <Image src={pinkComic} alt="comics illustration" />
              </div>
              <div className="absolute animated-card-2 left-1 top-[-10px] w-[160px] rotate-[-32deg]">
                <Image src={yellowComic} alt="comics illustration" />
              </div>
              <div className="absolute animated-card-3 left-6 top-[-5px] w-[160px] rotate-[35deg]">
                <Image src={orangeComic} alt="comics illustration" />
              </div>
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
