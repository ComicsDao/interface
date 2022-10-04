import Image from "next/future/image"
import comicCover1 from "public/img/comic_cover/comicCover_1.png"
import comicCover2 from "public/img/comic_cover/comicCover_2.png"
import iconCart from "public/img/icon/icon-cart.png"
import arrow from "public/img/icon/arrow.svg"
import { useState } from "react"
import { timeline } from "motion"
import { TimelineDefinition } from "@motionone/dom/types/timeline/types"

const CarouselLg = () => {
  const [activeCard, setActiveCard] = useState(2)

  const handleCarousel = (number: number) => {
    if (number == activeCard) {
      setActiveCard(activeCard == 1 ? 2 : 1)
    }
    const position1 = { left: 0, width: "400px", height: "590px" }
    const position2 = {
      left: "420px",
      width: "345px",
      height: "345px"
    }
    const zIndex1 = { zIndex: 10 }
    const zIndex2 = { zIndex: 0 }
    const blockText = {
      opacity: 1,
      position: "relative",
      left: 0,
      transform: "scale(1)"
    }
    const hiddenText = {
      opacity: 0,
      position: "absolute",
      left: "100%",
      transform: "scale(.5)"
    }

    const sequence = [
      [
        ".img-carousel-1",
        number === 1 ? position1 : position2,
        {
          duration: 1,
          easing: "ease-in-out"
        }
      ],
      [
        ".img-carousel-2",
        number === 1 ? position2 : position1,
        {
          duration: 1,
          easing: "ease-in-out",
          at: 0
        }
      ],
      [
        ".img-carousel-1",
        number === 1 ? zIndex1 : zIndex2,
        {
          duration: 0,
          at: 1
        }
      ],
      [
        ".img-carousel-2",
        number === 1 ? zIndex2 : zIndex1,
        {
          duration: 0,
          at: 1
        }
      ]
    ] as TimelineDefinition

    const animationTimeline = timeline(sequence)

    return () => animationTimeline.cancel()
  }

  return (
    <div className="flex items-start justify-between relative pl-[40px] mb-[40px]">
      <div className="w-1/2 xl:w-[35%] pl-[150px] flex justify-between flex-col min-h-[590px]">
        <span className="h-full w-[6px] bg-yellow-100 absolute left-[40px] top-0"></span>
        <p className=" font-medium text-lg text-black-100 absolute left-[55px] top-0">
          Issue #01
        </p>
        <div>
          <h2 className=" font-normal text-5xl text-black-200 leading-[120%] mb-5">
            The name of the Nouns Story
          </h2>
          <p className="font-light text-sm italic text-black-200 leading-6	">
            A short description about the edition and some useful information
            which concerns the project A short description about the edition and
            some useful information which concerns the project.
          </p>
        </div>
        <div>
          <h3 className="font-normal text-3xl mb-[20px]">Generative Cover 1</h3>
          <p className="font-light text-sm italic text-black-200 leading-6 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            imperdiet, sapien at vestibulum ullamcorper, sapien lectus bibendum
            ex, sit amet vehicula leo dui eget odio. Aliquam erat volutpat. 1111
          </p>
          <a className=" w-2/3 font-ubuntu font-normal text-base bg-yellow-100 border-solid border-2 border-black-100 flex items-center justify-center rounded-full px-14 py-3 hover:bg-orange cursor-pointer transition-all">
            <Image
              src={iconCart}
              alt="icon cart"
              height={20}
              width={20}
              className="mr-3"
            />
            Buy It
          </a>
        </div>
      </div>
      <div className="w-1/2 flex items-center overflow-hidden relative h-[600px] ml-[50px]">
        <div
          className="h-[590px] w-[400px] absolute img-carousel-1 z-0 cursor-pointer"
          onClick={() => handleCarousel(1)}
        >
          <Image
            src={comicCover1}
            alt="comic cover"
            className={`h-full w-full rounded-3xl object-cover object-center`}
          />
        </div>
        <div
          className="h-[320px] w-[320px] absolute left-[410px] img-carousel-2 z-10 cursor-pointer"
          onClick={() => handleCarousel(2)}
        >
          <Image
            src={comicCover2}
            alt="comic cover"
            className={`h-full w-full rounded-3xl object-cover object-center`}
          />
        </div>
        <a
          className="animate-bounce absolute bottom-[10px] right-[60px] bg-yellow-100 border-solid border-2 border-black-100 h-[50px] w-[50px] flex items-center justify-center rounded-full p-4 hover:bg-orange cursor-pointer transition-all"
          onClick={() => handleCarousel(activeCard)}
        >
          <Image
            src={arrow}
            alt="icon arrow"
            height={20}
            width={20}
            className="-rotate-90"
          />
        </a>
      </div>
    </div>
  )
}

export default CarouselLg
