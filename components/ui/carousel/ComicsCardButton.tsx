import Image from "next/future/image"
import iconCart from "public/img/icon/icon-cart.png"

const ComicsCardButton = ({ card, onClick }) => {
  return (
    <div className="flex justify-end ">
      {card.__component === "card.generative-card" ? (
        <a
          href={card.link}
          className="bg-yellow-100 border-solid border-2 border-black-100 min-h-[50px] min-w-[50px] flex items-center justify-center rounded-full p-3"
        >
          <Image src={iconCart} alt="icon cart" height={20} width={20} />
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
  )
}

export default ComicsCardButton
