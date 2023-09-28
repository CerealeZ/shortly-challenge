"use client"

import { useState } from "react"

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Hamburguer />
      </div>

      {isMenuOpen && (
        <ul className="absolute w-full max-w-sm z-10 right-0 translate-y-5 p-5 bg-[#3b3054] rounded-xl flex-col flex gap-4 text-white items-center text-base">
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Resources</a>
          </li>

          <hr className="w-full"></hr>
          <li>
            <a>Login</a>
          </li>

          <li className="rounded-3xl font-bold self-stretch text-center bg-[#2acfcf] py-2 px-8 text-white cursor-pointer">
            <a>Sign up</a>
          </li>
        </ul>
      )}
    </>
  )
}

const Hamburguer = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
      <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
    </svg>
  )
}

export default Menu
