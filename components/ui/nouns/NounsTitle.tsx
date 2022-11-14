import { useScreenSize } from "../../../provider/ScreenSizeProvider"

const NounsTitle = ({ attr }) => {
  const { screenSize } = useScreenSize()
  return (
    <div className="font-ubuntu px-[20px] mb-5 lg:px-0 lg:mb-10">
      {(screenSize === "mobile" || screenSize === "tablet") && (
        <div className="relative h-[60px] mb-10 px-[40px] flex items-center -z-10">
          <span className="h-[55px] w-[6px] bg-yellow-100 absolute left-0 top-50%"></span>
          <p className="text-base font-normal text-black-100">{attr.issue}</p>
        </div>
      )}
      {screenSize === "desktop" && (
        <>
          <span className="h-[110%] w-[6px] bg-yellow-100 absolute left-[40px] top-0"></span>
          <p className="lg:w-20 font-normal text-lg text-black-100 absolute left-[55px] top-0">
            {attr.issue}
          </p>
        </>
      )}
      <h3 className="px-[40px] lg:px-0 font-normal text-5xl mb-5 text-black-200 leading-[120%] ">
        {attr.title}
      </h3>
      <p className="px-[40px] lg:px-0 italic font-light text-base text-black-200 leading-9	">
        {attr.description}
      </p>
    </div>
  )
}

export default NounsTitle
