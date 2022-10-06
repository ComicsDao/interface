import Image from "next/future/image"
import comicCover1 from "public/img/comic_cover/comicCover_1.png"
import comicCover2 from "public/img/comic_cover/comicCover_2.png"
import iconCart from "public/img/icon/icon-cart.png"
import arrow from "public/img/icon/arrow.svg"
import { useState } from "react"
import { timeline } from "motion"
import { TimelineDefinition } from "@motionone/dom/types/timeline/types"
import { getStrapiMedia } from "../../../lib/getStrapiMedia"

const CarouselLg = ({ onClick, comic }) => {
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
      position: "relative",
      left: 0
    }
    const hiddenText = {
      position: "absolute",
      left: "100%"
    }
    const opacity1Text = { opacity: 1 }
    const opacity0Text = { opacity: 0 }

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
        ".text-animation-1",
        number === 1 ? opacity1Text : opacity0Text,
        {
          duration: 0.2,
          at: 0
        }
      ],
      [
        ".text-animation-2",
        number === 1 ? opacity0Text : opacity1Text,
        {
          duration: 0.2,
          at: 0
        }
      ],
      [
        ".text-animation-1",
        number === 1 ? blockText : hiddenText,
        {
          duration: 0.5,
          easing: "ease-in-out",
          at: 0
        }
      ],
      [
        ".text-animation-2",
        number === 1 ? hiddenText : blockText,
        {
          duration: 0.5,
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

  const attr = comic.attributes
  const cards = attr.Cards

  return (
    <div className="flex items-start justify-between relative pl-[40px] mb-[124px]">
      <div className="w-1/2 xl:w-[35%] pl-[150px] flex justify-between flex-col min-h-[590px]">
        <span className="h-full w-[6px] bg-yellow-100 absolute left-[40px] top-0"></span>
        <p className=" font-medium text-lg text-black-100 absolute left-[55px] top-0">
          {attr.issue}
        </p>
        <div>
          <h2 className=" font-normal text-5xl text-black-200 leading-[120%] mb-5">
            {attr.title}
          </h2>
          <p className="text-sm italic font-light leading-6 text-black-200 ">
            {attr.description}
          </p>
        </div>
        {cards.length > 0 && (
          <>
            <div className="relative overflow-hidden">
              <div className="text-animation-1">
                <h3 className="font-normal text-3xl mb-[20px]">
                  {cards[0].title}
                </h3>
                <p className="mb-6 text-sm italic font-light leading-6 text-black-200">
                  {cards[0].description}
                </p>
                {cards[0].__component === "card.generative-card" ? (
                  <a
                    href={cards[0].link}
                    className="flex items-center justify-center w-2/3 py-3 text-base font-normal transition-all bg-yellow-100 border-2 border-solid rounded-full cursor-pointer font-ubuntu border-black-100 px-14 hover:bg-orange"
                  >
                    <Image
                      src={iconCart}
                      alt="icon cart"
                      height={20}
                      width={20}
                      className="mr-3"
                    />
                    Buy It
                  </a>
                ) : (
                  <p
                    className="flex items-center justify-center w-2/3 py-3 text-base font-normal transition-all bg-yellow-100 border-2 border-solid rounded-full cursor-pointer font-ubuntu border-black-100 px-14 hover:bg-orange"
                    onClick={onClick}
                  >
                    Read Comics
                  </p>
                )}
              </div>
              {cards.length > 1 && (
                <div className="absolute opacity-0 left-full text-animation-2">
                  <h3 className="font-normal text-3xl mb-[20px]">
                    {cards[1].title}
                  </h3>
                  <p className="mb-6 text-sm italic font-light leading-6 text-black-200">
                    {cards[1].description}
                  </p>
                  {cards[0].__component === "card.generative-card" ? (
                    <a
                      href={cards[1].link}
                      className="flex items-center justify-center w-2/3 py-3 text-base font-normal transition-all bg-yellow-100 border-2 border-solid rounded-full cursor-pointer font-ubuntu border-black-100 px-14 hover:bg-orange"
                    >
                      <Image
                        src={iconCart}
                        alt="icon cart"
                        height={20}
                        width={20}
                        className="mr-3"
                      />
                      Buy It
                    </a>
                  ) : (
                    <p
                      className="flex items-center justify-center w-2/3 py-3 text-base font-normal transition-all bg-yellow-100 border-2 border-solid rounded-full cursor-pointer font-ubuntu border-black-100 px-14 hover:bg-orange"
                      onClick={onClick}
                    >
                      Read Comics
                    </p>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </div>
      {cards.length > 0 && (
        <div className="w-1/2 flex items-center overflow-hidden relative h-[600px] ml-[50px]">
          <div
            className="h-[590px] w-[400px] absolute img-carousel-1 z-0 cursor-pointer"
            onClick={() => handleCarousel(1)}
          >
            <Image
              src={getStrapiMedia(cards[0].image, "large").url}
              alt="comic cover"
              className={`h-full w-full rounded-3xl object-cover object-center`}
              width={getStrapiMedia(cards[0].image, "large").width}
              height={getStrapiMedia(cards[0].image, "large").height}
            />
          </div>
          {cards.length > 1 && (
            <>
              <div
                className="h-[320px] w-[320px] absolute left-[410px] img-carousel-2 z-10 cursor-pointer"
                onClick={() => handleCarousel(2)}
              >
                <Image
                  src={getStrapiMedia(cards[1].image, "large").url}
                  alt="comic cover"
                  className={`h-full w-full rounded-3xl object-cover object-center`}
                  width={getStrapiMedia(cards[1].image, "large").width}
                  height={getStrapiMedia(cards[1].image, "large").height}
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
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default CarouselLg
