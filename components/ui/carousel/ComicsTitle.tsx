const ComicsTitle = ({ attr }) => {
  return (
    <div className="font-ubuntu px-[20px] mb-5">
      <div className="relative h-[60px] mb-10 px-[40px] flex items-center -z-10">
        <span className="h-[55px] w-[6px] bg-yellow-100 absolute left-0 top-50%"></span>
        <p className="text-base font-normal text-black-100">{attr.issue}</p>
      </div>
      <h2 className="px-[40px] font-normal text-5xl mb-5 text-black-200 leading-[120%] ">
        {attr.title}
      </h2>
      <p className="px-[40px] font-light text-base italic text-black-200 leading-9	">
        {attr.description}
      </p>
    </div>
  )
}

export default ComicsTitle
