type Params = {
  text: string
  className: string
}

const DoubleText = ({ text, className }: Params) => {
  return (
    <div
      className={`relative ${className} md:text-[20rem] font-londrina text-9xl`}
    >
      <p className="relative z-10 text-black-100 ">{text}</p>
      <p className="absolute text-yellow-300 left-[-6px] md:left-[-18px] top-[-3px] md:top-[-9px] ">
        {text}
      </p>
    </div>
  )
}

export default DoubleText
