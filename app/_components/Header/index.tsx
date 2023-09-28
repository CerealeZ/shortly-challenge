import MediaQuerySelecter from "@/app/_helpers/MediaQuerySelecter"
import Image from "next/image"
import Menu from "@/app/_components/Header/Menu"
export default function Header() {
  return (
    <MediaQuerySelecter
      sm={
        <header className="flex flex-col py-4 px-5 items-center z-20">
          <div className="justify-between relative flex w-full">
            <Image src="/logo.svg" alt="logo" width={100} height={100} />
            <div className="text-2xl">
              <Menu />
            </div>
          </div>
        </header>
      }
      lg={<Desktop />}
    />
  )
}

const Desktop = () => {
  return (
    <header className="flex flex-col py-4 px-2 items-center">
      <div className="max-w-6xl w-full flex justify-between">
        <div className="flex gap-8 text-gray-400 font-bold items-center">
          <Image src="/logo.svg" alt="logo" width={100} height={100} />
          <a className="active:text-black cursor-pointer">Features</a>
          <a className="active:text-black cursor-pointer">Pricing</a>
          <a className="active:text-black cursor-pointer">Resources</a>
        </div>

        <div className="flex gap-8 items-center">
          <a className="text-gray-400 font-bold active:text-black cursor-pointer">
            Login
          </a>
          <a className="rounded-3xl font-bold bg-[#2acfcf] active:bg-[#94e7e7] py-2 px-8 text-white cursor-pointer">
            Sign up
          </a>
        </div>
      </div>
    </header>
  )
}
