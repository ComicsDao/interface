import Image from "next/future/image"
import comicCover1 from "public/img/comic_cover/comicCover_1.png"
import comicCover2 from "public/img/comic_cover/comicCover_2.png"
import iconCart from "public/img/icon/icon-cart.png"
import style from "styles/ui/carousel.module.scss"

const Carousel = () => {
  return (
    <div className="mb-5 pt-1">
      <div className="font-ubuntu px-[20px] mb-5">
        <div className="relative h-[60px] mb-10 px-[40px] flex items-center">
          <span className="h-[55px] w-[6px] bg-yellow-100 absolute left-0 top-50%"></span>
          <p className=" font-normal text-base text-black-100">Issue #01</p>
        </div>
        <h2 className="px-[40px] font-normal text-5xl mb-5 text-black-200 leading-[120%] ">
          The name of the Nouns Story
        </h2>
        <p className="px-[40px] font-light text-base italic text-black-200 leading-9	">
          A short description about the edition and some useful information
          which concerns the project A short description about the edition and
          some useful information which concerns the project.
        </p>
      </div>
      <div className="ml-[60px] flex items-center gap-2 mb-6 overflow-hidden min-h-[400px] relative">
        <div className="h-[395px] w-[265px] absolute left-0">
          <Image
            src={comicCover1}
            alt="comic cover"
            className={`h-full w-full rounded-3xl`}
          />
        </div>
        <div className="absolute -right-[45%] h-[245px] w-[245px]">
          <Image
            src={comicCover2}
            alt="comic cover"
            className={`h-full w-full rounded-3xl`}
          />
        </div>
      </div>
      <div className="font-ubuntu px-[60px] mb-5">
        <h3 className=" font-normal text-2xl mb-[30px]">Generative Cover</h3>
        <p className="font-light text-base italic text-black-200 leading-9 mb-5	">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
          imperdiet, sapien at vestibulum ullamcorper, sapien lectus bibendum
          ex, sit amet vehicula leo dui eget odio. Aliquam erat volutpat.
        </p>
        <div className=" flex justify-end">
          <a className="bg-yellow-100 border-solid border-2 border-black-100 h-[50px] w-[50px] flex items-center justify-center rounded-full p-3">
            <Image src={iconCart} alt="icon cart" height={20} width={20} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Carousel
