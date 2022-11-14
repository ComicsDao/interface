const NounsCardDescription = ({ card }) => {
  return (
    <>
      <h4 className="font-ubuntu font-normal text-2xl mb-[30px]">
        {card.title}
      </h4>
      <p className="mb-5 text-base italic font-thin leading-9 font-ubuntu text-black-200">
        {card.description}
      </p>
    </>
  )
}

export default NounsCardDescription
