import Image from "next/future/image"
import comicCover1 from "public/img/comic_cover/comicCover_1.png"
import comicCover2 from "public/img/comic_cover/comicCover_2.png"
import iconCart from "public/img/icon/icon-cart.png"
import { timeline } from "motion"
import { TimelineDefinition } from "@motionone/dom/types/timeline/types"
import { getStrapiMedia } from "../../../lib/getStrapiMedia"

const CarouselSm = ({ onClick, comic }) => {
  const handleCarousel = (number: number) => {
    const position1 = { left: 0, width: "265px", height: "395px" }
    const position2 = {
      left: "280px",
      width: "245px",
      height: "245px"
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
        ".text-animation-1",
        number === 1 ? blockText : hiddenText,
        {
          duration: 1,
          easing: "ease-in-out",
          at: 0
        }
      ],
      [
        ".text-animation-2",
        number === 1 ? hiddenText : blockText,
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
  const attr = comic.attributes
  const cards = attr.Cards

  return (
    <div className="items-center justify-between pt-1 mb-8">
      <div>
        <div className="font-ubuntu px-[20px] mb-5">
          <div className="relative h-[60px] mb-10 px-[40px] flex items-center -z-10">
            <span className="h-[55px] w-[6px] bg-yellow-100 absolute left-0 top-50%"></span>
            <p className="text-base font-normal text-black-100">{attr.issue}</p>
          </div>
          <h2 className="px-[40px] font-normal text-5xl mb-5 text-black-200 leading-[120%] ">
            {attr.title}
          </h2>
          <p className="px-[40px] font-light text-base italic text-black-200 leading-9	">
            {attr.description}
          </p>
        </div>
        {cards.length > 0 && (
          <>
            <div className="ml-[60px] flex items-center mb-6 overflow-hidden relative h-[400px]">
              <div
                className="h-[395px] w-[265px] absolute img-carousel-1 z-0"
                onClick={() => handleCarousel(1)}
              >
                <Image
                  src={getStrapiMedia(cards[0].image, "small").url}
                  alt="comic cover"
                  className={`h-full w-full rounded-3xl object-cover object-center`}
                  width={getStrapiMedia(cards[0].image, "small").width}
                  height={getStrapiMedia(cards[0].image, "small").height}
                />
              </div>
              {cards.length > 1 && (
                <div
                  className="h-[245px] w-[245px] absolute left-[280px] img-carousel-2 z-10"
                  onClick={() => handleCarousel(2)}
                >
                  <Image
                    src={getStrapiMedia(cards[1].image, "small").url}
                    alt="comic cover"
                    className={`h-full w-full rounded-3xl object-cover object-center`}
                    width={getStrapiMedia(cards[1].image, "small").width}
                    height={getStrapiMedia(cards[1].image, "small").height}
                  />
                </div>
              )}
            </div>
            <div className="font-ubuntu px-[20px] mb-5 flex items-center justify-between overflow-hidden relative">
              <div className="px-[40px] w-full text-animation-1">
                <h3 className="font-normal text-2xl mb-[30px]">
                  {cards[0].title}
                </h3>
                <p className="mb-5 text-base italic font-light leading-9 text-black-200">
                  {cards[0].description}
                </p>
                <div className="flex justify-end ">
                  {cards[0].__component === "card.generative-card" ? (
                    <a
                      href={cards[0].link}
                      className="bg-yellow-100 border-solid border-2 border-black-100 min-h-[50px] min-w-[50px] flex items-center justify-center rounded-full p-3"
                    >
                      <Image
                        src={iconCart}
                        alt="icon cart"
                        height={20}
                        width={20}
                      />
                    </a>
                  ) : (
                    <p
                      className="font-ubuntu font-normal text-base bg-yellow-100 border-solid border-2 border-black-100 min-h-[50px] min-w-[50px] flex items-center justify-center rounded-full p-3"
                      onClick={onClick}
                    >
                      Read comics
                    </p>
                  )}
                </div>
              </div>
              {cards.length > 1 && (
                <div className="px-[40px] w-full absolute left-full opacity-0 text-animation-2 scale-50">
                  <h3 className="font-normal text-2xl mb-[30px]">
                    {cards[1].title}
                  </h3>
                  <p className="mb-5 text-base italic font-light leading-9 text-black-200">
                    {cards[1].description}
                  </p>
                  <div className="flex justify-end ">
                    {cards[1].__component === "card.generative-card" ? (
                      <a
                        href={cards[1].link}
                        className="bg-yellow-100 border-solid border-2 border-black-100 min-h-[50px] min-w-[50px] flex items-center justify-center rounded-full p-3"
                      >
                        <Image
                          src={iconCart}
                          alt="icon cart"
                          height={20}
                          width={20}
                        />
                      </a>
                    ) : (
                      <p
                        className="font-ubuntu font-normal text-base bg-yellow-100 border-solid border-2 border-black-100 min-h-[50px] min-w-[50px] flex items-center justify-center rounded-full p-3"
                        onClick={onClick}
                      >
                        Read comics
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default CarouselSm
