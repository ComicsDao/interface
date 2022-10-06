import { timeline } from "motion"
import { TimelineDefinition } from "@motionone/dom/types/timeline/types"
import { useScreenSize } from "../../../provider/ScreenSizeProvider"
import ComicsTitle from "./ComicsTitle"
import ComicsImages from "./ComicsImages"
import ComicsCardButton from "./ComicsCardButton"
import ComicsCardDescription from "./ComicsCardDescription"
import { useState } from "react"

const ComicsCarousel = ({ onClick, comic }) => {
  const [activeCard, setActiveCard] = useState(2)
  const { screenSize } = useScreenSize()
  const positions =
    screenSize === "mobile"
      ? [
          { left: 0, width: "265px", height: "395px" },
          {
            left: "280px",
            width: "245px",
            height: "245px"
          }
        ]
      : [
          { left: 0, width: "400px", height: "590px" },
          {
            left: "420px",
            width: "345px",
            height: "345px"
          }
        ]
  console.log(comic.id)

  const handleCarousel = (number: number) => {
    if (number == activeCard) {
      setActiveCard(activeCard == 1 ? 2 : 1)
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
        `.img-carousel-${comic.id}-1`,
        number === 1 ? positions[0] : positions[1],
        {
          duration: 1,
          easing: "ease-in-out"
        }
      ],
      [
        `.img-carousel-${comic.id}-2`,
        number === 1 ? positions[1] : positions[0],
        {
          duration: 1,
          easing: "ease-in-out",
          at: 0
        }
      ],
      [
        `.text-animation-${comic.id}-1`,
        number === 1 ? blockText : hiddenText,
        {
          duration: 1,
          easing: "ease-in-out",
          at: 0
        }
      ],
      [
        `.text-animation-${comic.id}-2`,
        number === 1 ? hiddenText : blockText,
        {
          duration: 1,
          easing: "ease-in-out",
          at: 0
        }
      ],
      [
        `.img-carousel-${comic.id}-1`,
        number === 1 ? zIndex1 : zIndex2,
        {
          duration: 0,
          at: 1
        }
      ],
      [
        `.img-carousel-${comic.id}-2`,
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
    <div className="pt-1 mb-[100px] lg:pt-0">
      {screenSize === "desktop" && (
        <div className="flex items-center justify-between">
          {cards.length > 0 && (
            <>
              <div className="relative pl-[150px] w-[45%] h-[600px] flex justify-between flex-col">
                <ComicsTitle attr={attr} />
                <div className="relative flex">
                  <div className={`w-full text-animation-${comic.id}-1`}>
                    <ComicsCardDescription card={cards[0]} />
                    <ComicsCardButton card={cards[0]} onClick={onClick} />
                  </div>
                  {cards.length > 1 && (
                    <div
                      className={`w-full absolute left-full opacity-0 text-animation-${comic.id}-2 scale-50`}
                    >
                      <ComicsCardDescription card={cards[1]} />
                      <ComicsCardButton card={cards[1]} onClick={onClick} />
                    </div>
                  )}
                </div>
              </div>
              <ComicsImages
                id={comic.id}
                cards={cards}
                handleCarousel={handleCarousel}
                activeCard={activeCard}
              />
            </>
          )}
        </div>
      )}
      {(screenSize === "mobile" || screenSize === "tablet") && (
        <>
          <ComicsTitle attr={attr} />
          {cards.length > 0 && (
            <>
              <ComicsImages
                id={comic.id}
                cards={cards}
                handleCarousel={handleCarousel}
                activeCard={activeCard}
              />
              <div className="font-ubuntu px-[20px] mb-5 flex items-center justify-between overflow-hidden relative">
                <div
                  className={`px-[40px] w-full text-animation-${comic.id}-1`}
                >
                  <ComicsCardDescription card={cards[0]} />
                  <ComicsCardButton card={cards[0]} onClick={onClick} />
                </div>
                {cards.length > 1 && (
                  <div
                    className={`px-[40px] w-full absolute left-full opacity-0 text-animation-${comic.id}-2 scale-50`}
                  >
                    <ComicsCardDescription card={cards[1]} />
                    <ComicsCardButton card={cards[1]} onClick={onClick} />
                  </div>
                )}
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default ComicsCarousel
