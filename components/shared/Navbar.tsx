import { useState } from "react"
import style from "styles/shared/navbar.module.scss"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const hendelClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="max-w-screen-2xl fixed w-full h-[95px] border-yellow-100	border-solid	border-b-2 md:px-[40px] md:flex justify-between items-center bg-white">
      <div className="h-full bg-white flex justify-between items-center z-10 relative px-[20px] md:px-0">
        <p className="text-black-100 flex flex-col">
          <span className="font-londrina font-normal text-4xl">
            NOUNS COMICS
          </span>
          <span className="font-ubuntu font-light text-xs">
            Powered by ComicsDAO
          </span>
        </p>
        <div
          className="relative w-[40px] h-[25px] md:hidden"
          onClick={hendelClick}
        >
          <span
            className={`h-[2px] w-full bg-black-100 absolute rounded transition-all	${
              isOpen ? "top-[50%] opacity-0" : "top-0"
            }`}
          ></span>
          <span className="h-[2px] w-full bg-black-100 absolute rounded top-[50%]"></span>
          <span
            className={`h-[2px] w-full bg-black-100 absolute rounded transition-all	${
              isOpen ? "bottom-[50%] opacity-0" : "bottom-0"
            }`}
          ></span>
        </div>
      </div>
      <ul
        className={`absolute w-full px-[20px] h-[45px] pl-[40%] flex items-center justify-between left-0 transition-all	 bg-yellow-100 text-black-100
        ${
          isOpen ? "opacity-100 -bottom-[45px]" : "opacity-0 bottom-0"
        } md:static md:opacity-100 md:px-0 md:h-full md:w-1/2 md:bg-transparent `}
      >
        <li
          className={`font-ubuntu font-normal text-xs relative py-[3px] px-1 cursor-pointer md:text-base ${style.link_after}`}
        >
          <a>Support</a>
        </li>
        <li
          className={`font-ubuntu font-normal text-xs relative py-[3px] px-1 cursor-pointer md:text-base ${style.link_after}`}
        >
          <a>Join Discord</a>
        </li>
        <li
          className={`font-ubuntu font-normal text-xs relative py-[3px] px-1 cursor-pointer md:text-base ${style.link_after}`}
        >
          <a>Connect</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
