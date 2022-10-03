import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const hendelClick = () => {}
  return (
    <div className="relative">
      <div className="w-full h-[95px] px-[20px] lg:px-[40px] bg-white border-yellow-100	border-solid	border-b-2 flex justify-between items-center">
        <a className="text-black-100">
          <p className="text-4xl font-normal font-londrina">NOUNS COMICS</p>
          <p className="text-xs font-light font-ubuntu">Powered by ComicsDAO</p>
        </a>
        <div className="relative w-[40px] h-[25px]" onClick={hendelClick}>
          <span className="h-[2px] w-full bg-black-100 absolute rounded top-0"></span>
          <span className="h-[2px] w-full bg-black-100 absolute rounded top-[50%]"></span>
          <span className="h-[2px] w-full bg-black-100 absolute rounded bottom-0"></span>
        </div>
        <ul className="absolute bg-black-100 w-full px-[20px] py-[40px] h-[95px] flex justify-between items-center left-0 -bottom-full">
          <li>
            <a>Support</a>
          </li>
          <li>
            <a>Join Discord</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
