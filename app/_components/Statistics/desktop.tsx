import { CardsInfo } from "@/app/_components/Statistics/cardsInfo"
import Image from "next/image"
const Desktop = () => {
  return (
    <div className=" flex flex-col items-center bg-gray-200 py-24 px-2">
      <div className="max-w-xl w-full text-center flex flex-col gap-2">
        <h2 className="text-4xl font-bold">Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>

      <div className="max-w-6xl w-full flex items-start">
        <div className="w-1/4">
          <div className="flex flex-col  relative  bg-white mt-10 rounded px-6 pb-6 ">
            <figure className="h-20 w-20 grid place-items-center rounded-full relative -top-10  bg-[#3b3054]">
              <div className="h-2/4 w-2/4 relative">
                <Image
                  src={"icon-brand-recognition.svg"}
                  alt="Brand Recognition"
                  fill
                />
              </div>
            </figure>

            <p className="text-2xl font-bold">
              {CardsInfo.BRAND_RECOGNITION.title}
            </p>
            <p>{CardsInfo.BRAND_RECOGNITION.description}</p>
          </div>
        </div>

        <div className="h-3 grow self-center bg-[#2acfcf]"></div>

        <div className="w-1/4 mt-10 ">
          <div className="flex flex-col  relative bg-white mt-10 rounded px-6 pb-6">
            <figure className="h-20 w-20 grid place-items-center rounded-full relative -top-10  bg-[#3b3054]">
              <div className="h-2/4 w-2/4 relative">
                <Image
                  src={"icon-detailed-records.svg"}
                  alt="Brand Recognition"
                  fill
                />
              </div>
            </figure>

            <p className="text-2xl font-bold">
              {CardsInfo.DETAILED_RECORDS.title}
            </p>
            <p>{CardsInfo.DETAILED_RECORDS.description}</p>
          </div>
        </div>

        <div className="h-3 grow self-center bg-[#2acfcf]"></div>

        <div className="w-1/4 mt-20">
          <div className="flex flex-col  relative bg-white mt-10 rounded px-6 pb-6 max-w-sm">
            <figure className="h-20 w-20 grid place-items-center rounded-full relative -top-10  bg-[#3b3054]">
              <div className="h-2/4 w-2/4 relative">
                <Image
                  src={"icon-fully-customizable.svg"}
                  alt="Brand Recognition"
                  fill
                />
              </div>
            </figure>

            <p className="text-2xl font-bold">
              {CardsInfo.FULLY_CUSTOMIZABLE.title}
            </p>
            <p>{CardsInfo.FULLY_CUSTOMIZABLE.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Desktop
