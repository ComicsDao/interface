import { timeline } from "motion"
import { TimelineDefinition } from "@motionone/dom/types/timeline/types"
import { useScreenSize } from "../../../provider/ScreenSizeProvider"
import NounsTitle from "./NounsTitle"
import NounsImages from "./NounsImages"
import NounsCardButton from "./NounsCardButton"
import NounsCardDescription from "./NounsCardDescription"
import { useState } from "react"
import NounsViewer from "./NounsViewer"

const NounsSection = ({ comic }) => {
  const [activeCard, setActiveCard] = useState(2)
  const [isOpen, setIsOpen] = useState(true)
  const { screenSize } = useScreenSize()

  const comicsToRead = comic.attributes?.Cards.filter(
    (card) => card.__component === "card.comics-card"
  )[0]

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

  const handleCarousel = (number: number) => {
    if (number == activeCard) {
      setActiveCard(activeCard == 1 ? 2 : 1)
    }
    const zIndex1 = { zIndex: 10 }
    const zIndex2 = { zIndex: 0 }
    const blockText = {
      opacity: 1,
      zIndex: 10
    }
    const hiddenText = {
      opacity: 0,
      zIndex: 0
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
          duration: 0.5,
          easing: "ease-in-out",
          at: 0.5
        }
      ],
      [
        `.text-animation-${comic.id}-2`,
        number === 1 ? hiddenText : blockText,
        {
          duration: 0.5,
          easing: "ease-in-out",
          at: 0.5
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
          <div className="relative pl-[160px] w-[45%] min-h-[600px] flex justify-between flex-col">
            <NounsTitle attr={attr} />
            {cards.length > 0 && (
              <div className="relative flex">
                <div className={`w-full z-10 text-animation-${comic.id}-1`}>
                  <NounsCardDescription card={cards[0]} />
                  <NounsCardButton
                    card={cards[0]}
                    onClick={() => setIsOpen(!isOpen)}
                  />
                </div>
                {cards.length > 1 && (
                  <div
                    className={`w-full absolute bottom-0 opacity-0 text-animation-${comic.id}-2`}
                  >
                    <NounsCardDescription card={cards[1]} />
                    <NounsCardButton
                      card={cards[1]}
                      onClick={() => setIsOpen(!isOpen)}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
          {cards.length > 0 && (
            <NounsImages
              id={comic.id}
              cards={cards}
              handleCarousel={handleCarousel}
              activeCard={activeCard}
            />
          )}
        </div>
      )}
      {(screenSize === "mobile" || screenSize === "tablet") && (
        <>
          <NounsTitle attr={attr} />
          {cards.length > 0 && (
            <>
              <NounsImages
                id={comic.id}
                cards={cards}
                handleCarousel={handleCarousel}
                activeCard={activeCard}
              />
              <div className="font-ubuntu px-[20px] mb-5 flex items-center justify-between overflow-hidden relative">
                <div
                  className={`px-[40px] w-full text-animation-${comic.id}-1`}
                >
                  <NounsCardDescription card={cards[0]} />
                  <NounsCardButton
                    card={cards[0]}
                    onClick={() => setIsOpen(!isOpen)}
                  />
                </div>
                {cards.length > 1 && (
                  <div
                    className={`px-[40px] w-full absolute left-full opacity-0 text-animation-${comic.id}-2 scale-50`}
                  >
                    <NounsCardDescription card={cards[1]} />
                    <NounsCardButton
                      card={cards[1]}
                      onClick={() => setIsOpen(!isOpen)}
                    />
                  </div>
                )}
              </div>
            </>
          )}
        </>
      )}
      {comicsToRead && (
        <NounsViewer
          onClick={() => setIsOpen(!isOpen)}
          comicsToRead={comicsToRead}
          isOpen={isOpen}
        />
      )}
    </div>
  )
}

export default NounsSection
