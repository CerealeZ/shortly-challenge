import Desktop from "@/app/_components/Statistics/desktop"
import MediaQuerySelecter from "@/app/_helpers/MediaQuerySelecter"
import Image from "next/image"
import { CardsInfo } from "@/app/_components/Statistics/cardsInfo"

export default function Statistics() {
  return <MediaQuerySelecter sm={<Mobile />} lg={<Desktop />} />
}

const Mobile = () => {
  return (
    <div className="text-center bg-gray-200 py-24 px-6">
      <h2 className="text-4xl font-bold">Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard
      </p>

      <div className="flex flex-col items-center mt-10">
        <div className="flex flex-col items-center relative bg-white mt-10 rounded px-6 pb-6 max-w-sm">
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
        <div className="w-3 h-10 bg-[#2acfcf]"></div>
        <div className="flex flex-col items-center relative bg-white mt-10 rounded px-6 pb-6 max-w-sm">
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

        <div className="w-3 h-10 bg-[#2acfcf]"></div>
        <div className="flex flex-col items-center relative bg-white mt-10 rounded px-6 pb-6 max-w-sm">
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
  )
}
