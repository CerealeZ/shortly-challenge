import Image from "next/image"

const Mobile = () => {
  return (
    <div className="mb-32">
      <div className="h-96 relative">
        <Image
          className="object-cover object-left"
          src={"/illustration-working.svg"}
          alt="Illustração"
          fill
        />
      </div>

      <div className="text-center flex flex-col gap-5 items-center px-2 mt-5">
        <h2 className="text-4xl font-bold">More than just shorter links</h2>
        <h3>
          Build your brand&apos;s recognition and get detailed insights on how
          your links are performing
        </h3>

        <a className="rounded-3xl font-bold active:bg-[#94e7e7] cursor-pointer bg-[#2acfcf]  py-3 px-8 text-white">
          Get Started
        </a>
      </div>
    </div>
  )
}

export default Mobile
