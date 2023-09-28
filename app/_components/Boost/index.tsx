import MediaQuerySelecter from "@/app/_helpers/MediaQuerySelecter"

export default function Boost() {
  return (
    <MediaQuerySelecter
      sm={
        <div
          style={{ backgroundImage: "url(bg-boost-mobile.svg)" }}
          className="bg-no-repeat bg-right h-72 bg-[#3b3054] flex flex-col justify-center items-center gap-2 text-white font-bold"
        >
          <p className="text-xl">Boost your links today</p>
          <a className="rounded-3xl font-bold bg-[#2acfcf] cursor-pointer active:bg-[#94e7e7] py-3 px-8 text-white">
            Get Started
          </a>
        </div>
      }
      lg={<Desktop />}
    />
  )
}

const Desktop = () => {
  return (
    <div
      style={{ backgroundImage: "url(bg-boost-desktop.svg)" }}
      className="bg-no-repeat bg-cover py-16 bg-[#3b3054] flex flex-col justify-center items-center gap-4 text-white font-bold"
    >
      <p className="text-3xl">Boost your links today</p>
      <a className="rounded-3xl font-bold cursor-pointer active:bg-[#94e7e7] bg-[#2acfcf] py-3 text-lg px-8 text-white">
        Get Started
      </a>
    </div>
  )
}
