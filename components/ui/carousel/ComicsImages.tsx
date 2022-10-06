import Image from "next/future/image"
import { getStrapiMedia } from "../../../lib/getStrapiMedia"

const ComicsImages = ({ cards, handleCarousel, id }) => {
  return (
    <div className="ml-[60px] md:ml-[80px] md:h-[600px] flex items-center mb-6 overflow-hidden relative h-[400px]">
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
          className={`"h-[245px] w-[245px] md:h-[345px] md:w-[345px] absolute left-[280px] md:left-[420px] img-carousel-${id}-2 z-10`}
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
  )
}

export default ComicsImages
