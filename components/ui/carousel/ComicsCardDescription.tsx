const ComicsCardDescription = ({ card }) => {
  return (
    <>
      <h3 className="font-ubuntu font-normal text-2xl mb-[30px]">
        {card.title}
      </h3>
      <p className="font-ubuntu mb-5 text-base italic font-light leading-9 text-black-200">
        {card.description}
      </p>
    </>
  )
}

export default ComicsCardDescription
