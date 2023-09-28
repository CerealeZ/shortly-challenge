const Desktop = () => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-no-repeat bg-[105%_50%] h-[768px] px-2"
      style={{ backgroundImage: "url(illustration-working.svg)" }}
    >
      <div className="max-w-6xl w-full grid grid-cols-2">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-5xl font-bold">More than just shorter links</h2>
          <h3>
            Build your brand&apos;s recognition and get detailed insights on how
            your links are performing
          </h3>

          <a className="rounded-3xl font-bold cursor-pointer active:bg-[#94e7e7] bg-[#2acfcf]  py-3 px-8 text-white">
            Get Started
          </a>
        </div>
      </div>
    </div>
  )
}

export default Desktop
