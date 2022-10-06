import Image from "next/future/image"
import arrow from "public/img/icon/arrow.svg"
import close from "public/img/icon/close.png"
import { useState } from "react"

const NounsViewer = ({ onClick, isOpen, comicsToRead }) => {
  const [active, setActive] = useState(0)
  const pages = comicsToRead.comics.data
  const numberOfPages = pages.length
  const [images, setImages] = useState([pages[0]])

  const handleImages = (direction) => {
    if (direction === "left") {
      setActive(active - 1)
    } else {
      if (images.length != pages.length) {
        const newPage = pages[images.length]
        setImages([...images, newPage])
      }
      setActive(active + 1)
    }
  }

  return (
    <div
      className={` fixed z-30 backdrop-blur left-0 top-0 bottom-0 right-0 h-screen w-screen transition-all ${
        isOpen == true
          ? " opacity-0 scale-0 -z-30"
          : " opacity-100 scale-100 z-30"
      }`}
    >
      <div className="flex items-center justify-center w-full h-full">
        <div
          className="absolute top-[10px] right-[10px] md:top-[40px] md:right-[40px] bg-yellow-100 border-solid border-2 border-black-100 h-[40px] w-[40px] flex items-center justify-center rounded-full p-3 lg:hover:bg-orange cursor-pointer transition-all"
          onClick={onClick}
        >
          <Image
            src={close}
            alt="close"
            height={20}
            width={20}
            className="rotate-90 "
          />
        </div>
        <div className="relative h-[85vh]">
          {numberOfPages > 1 && active > 0 && (
            <div
              onClick={() => handleImages("left")}
              className="animate-bounce absolute top-[93%] md:top-1/2 left-[20%]  md:-left-[100px] lg:-left-[90px] bg-yellow-100 border-solid border-2 border-black-100 h-[50px] w-[50px] md:h-[70px] md:w-[70px] flex items-center justify-center rounded-full p-4 lg:hover:bg-orange cursor-pointer transition-all"
            >
              <Image
                src={arrow}
                alt="arrow left"
                height={20}
                width={20}
                className="rotate-90 "
              />
            </div>
          )}
          <div className="w-[75vw] md:w-[60vw] h-screen">
            {images.map((image, index) => (
              <div
                key={index}
                className={`w-[75vw] md:w-[50vw] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-[500px] ${
                  index == active ? "opacity-1" : "opacity-0"
                }`}
              >
                <Image
                  src={image.attributes.url}
                  alt="comic"
                  className={`h-full w-full rounded-3xl object-cover object-center`}
                  width={image.attributes.width}
                  height={image.attributes.height}
                />
              </div>
            ))}
          </div>
          {numberOfPages > 1 && active < numberOfPages - 1 && (
            <div
              onClick={() => handleImages("right")}
              className="animate-bounce absolute top-[93%] md:top-1/2 right-[20%]  md:-right-[100px] lg:-right-[90px] bg-yellow-100 border-solid border-2 border-black-100 h-[50px] w-[50px] md:h-[70px] md:w-[70px] flex items-center justify-center rounded-full p-4 lg:hover:bg-orange cursor-pointer transition-all"
            >
              <Image
                src={arrow}
                alt="arrow right"
                height={20}
                width={20}
                className="-rotate-90"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NounsViewer
