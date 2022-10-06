import Image from "next/future/image"
import { getStrapiMedia } from "../../../lib/getStrapiMedia"
import arrow from "public/img/icon/arrow.svg"
import { useScreenSize } from "../../../provider/ScreenSizeProvider"
import { useState } from "react"

const NounsImages = ({ cards, handleCarousel, id, activeCard }) => {
  const { screenSize } = useScreenSize()
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if ((isLeftSwipe || isRightSwipe) && cards.length > 1)
      handleCarousel(activeCard)
  }

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className="ml-[60px] h-[400px] md:h-[600px] flex items-center mb-6 overflow-hidden relative lg:ml-0 lg:mb-0 lg:w-1/2"
    >
      <div
        className={`h-[395px] w-[265px] md:h-[590px] md:w-[400px] absolute img-carousel-${id}-1 z-0`}
        onClick={() => handleCarousel(1)}
      >
        <Image
          src={getStrapiMedia(cards[0].image).url}
          alt="comic cover"
          className={`h-full w-full rounded-3xl object-cover object-center`}
          width={getStrapiMedia(cards[0].image).width}
          height={getStrapiMedia(cards[0].image).height}
        />
      </div>
      {cards.length > 1 && (
        <div
          className={`"h-[245px] w-[245px] md:h-[345px] md:w-[345px] absolute left-[280px] md:left-[410px] img-carousel-${id}-2 z-10`}
          onClick={() => handleCarousel(2)}
        >
          <Image
            src={getStrapiMedia(cards[1].image).url}
            alt="comic cover"
            className={`h-full w-full rounded-3xl object-cover object-center`}
            width={getStrapiMedia(cards[1].image).width}
            height={getStrapiMedia(cards[1].image).height}
          />
        </div>
      )}
      {(screenSize === "tablet" || screenSize === "desktop") &&
        cards.length > 1 && (
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

export default NounsImages
