import Image from "next/future/image"
import { getStrapiMedia } from "../../../lib/getStrapiMedia"
import arrow from "public/img/icon/arrow.svg"
import { useScreenSize } from "../../../provider/ScreenSizeProvider"

const ComicsImages = ({ cards, handleCarousel, id, activeCard }) => {
  const { screenSize } = useScreenSize()
  return (
    <div className="ml-[60px] h-[400px] md:h-[600px] flex items-center mb-6 overflow-hidden relative lg:ml-0 lg:mb-0 lg:w-1/2">
      <div
        className={`h-[395px] w-[265px] md:h-[590px] md:w-[400px] absolute img-carousel-${id}-1 z-0`}
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
          className={`"h-[245px] w-[245px] md:h-[345px] md:w-[345px] absolute left-[280px] md:left-[410px] img-carousel-${id}-2 z-10`}
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
      {(screenSize === "tablet" || screenSize === "desktop") && (
        <p
          className="animate-bounce absolute bottom-[10px] left-[420px] bg-yellow-100 border-solid border-2 border-black-100 h-[50px] w-[50px] flex items-center justify-center rounded-full p-4 hover:bg-orange cursor-pointer transition-all"
          onClick={() => handleCarousel(activeCard)}
        >
          <Image
            src={arrow}
            alt="icon arrow"
            height={20}
            width={20}
            className="-rotate-90"
          />
        </p>
      )}
    </div>
  )
}

export default ComicsImages
