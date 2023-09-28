"use client"

import MediaQuerySelecter from "@/app/_helpers/MediaQuerySelecter"
import { ChangeEvent, useEffect, useRef, useState } from "react"

const PURPLE = "#3b3054"
const CYAN = "#2acfcf"
export default function Shorter() {
  const search = useRef(new FormData())
  const form = useRef<HTMLFormElement>(null)
  const [urls, setUrls] = useState<{ url: string; original: string }[]>([])
  const [loading, setLoading] = useState(false)
  const [copiedLink, setCopiedLink] = useState<string>()
  const [error, setError] = useState<string>()

  const shortUrl = (e: React.FormEvent) => {
    e.preventDefault()
    const url = search.current.get("url") as string | null

    if (error) return
    if (!url) {
      return setError("Please add a link")
    } else {
      setError("")
    }

    setLoading(true)

    fetch("/api/urls?search=" + url)
      .then((res) => {
        if (!res.ok) {
          setError("Invalid URL")
          return
        }
        res.json().then((response) => {
          setUrls([response, ...urls])
          search.current.delete("url")
          form.current?.reset()
          setError('')
        })
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(
    function setValidity() {
      if (!form.current) return
      const input = form.current.elements.namedItem("url") as HTMLInputElement
      input.setCustomValidity(error ?? "")
    },
    [error]
  )

  const setSearchUrl = (e: ChangeEvent<HTMLInputElement>) => {
    setError("")
    search.current.set("url", e.target.value)
  }

  const copyUrl = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url)
      setCopiedLink(url)
    } catch (error) {
      console.log("Unable to copy")
    }
  }

  const ChildrenProps = {
    formRef: form,
    onSearchUrl: shortUrl,
    onTypingUrl: setSearchUrl,
    error: error,
    urls: urls,
    actualUrl: copiedLink,
    onCopyUrl: copyUrl,
    loading: loading,
  }

  return (
    <MediaQuerySelecter
      sm={<Mobile {...ChildrenProps} />}
      lg={<Desktop {...ChildrenProps} />}
    />
  )
}

interface ChildrenProps {
  formRef: React.RefObject<HTMLFormElement>
  onSearchUrl: (e: React.FormEvent) => void
  onTypingUrl: (e: ChangeEvent<HTMLInputElement>) => void
  error: string | undefined
  urls: { url: string; original: string }[]
  actualUrl: string | undefined
  onCopyUrl: (url: string) => void
  loading: boolean
}

const Mobile = ({
  formRef,
  onSearchUrl,
  error,
  onTypingUrl,
  urls,
  actualUrl,
  onCopyUrl,
  loading,
}: ChildrenProps) => {
  return (
    <div className="flex flex-col gap-4 items-center bg-gray-200 relative pt-36">
      <div className="w-full max-w-sm flex flex-col items-center absolute -top-20 px-2">
        <form
          ref={formRef}
          style={{ backgroundImage: "url('/bg-shorten-mobile.svg')" }}
          className={`flex flex-col gap-4 bg-no-repeat rounded bg-[${PURPLE}] bg-right-top p-4 w-full`}
        >
          <input
            className="rounded p-4 outline-none invalid:outline invalid:outline-[#f46262]"
            onChange={onTypingUrl}
            disabled={loading}
            id="url"
            placeholder="Shorten a link here..."
            type="text"
          ></input>
          {error && <span className="text-[#f46262] italic">{error}</span>}
          <button
            disabled={loading}
            onClick={onSearchUrl}
            className="p-4 rounded active:opacity-50 bg-[#2acfcf] active:bg-[#94e7e7] text-white font-bold"
          >
            Shorten it!
          </button>
        </form>
      </div>

      <div className="max-w-sm w-full px-2 bg-gray-200 flex flex-col gap-4">
        {urls.map(({ original, url }) => (
          <div className="rounded bg-white font-bold" key={url}>
            <div className="border-b-2 py-3 px-4">
              <p className="text-ellipsis overflow-hidden whitespace-nowrap">
                {original}
              </p>
            </div>
            <div className="py-3 px-4 flex flex-col gap-3">
              <a
                href={new URL(url).href}
                target="_blank"
                className="text-[#2acfcf] underline"
              >
                {url}
              </a>
              <button
                onClick={() => onCopyUrl(url)}
                className={` text-white active:bg-[#94e7e7] rounded p-2 ${
                  actualUrl === url ? "bg-[#3b3054]" : "bg-[#2acfcf]"
                }`}
              >
                {actualUrl === url ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const Desktop = ({
  formRef,
  onSearchUrl,
  error,
  onTypingUrl,
  urls,
  actualUrl,
  onCopyUrl,
  loading,
}: ChildrenProps) => {
  return (
    <div className="flex flex-col gap-4 items-center bg-gray-200 relative px-2">
      <div className="max-w-6xl w-full relative pt-24">
        <div className="flex flex-col w-full items-center absolute -top-[76px]">
          <form
            ref={formRef}
            style={{ backgroundImage: "url('/bg-shorten-desktop.svg')" }}
            className={`flex gap-4 bg-no-repeat rounded bg-[${PURPLE}] bg-cover bg-right-top px-16 py-12 box-border w-full items-start`}
          >
            <div className="flex flex-col grow gap-2 relative">
              <input
                className="rounded-lg p-4 outline-none invalid:outline invalid:outline-[#f46262]"
                onChange={onTypingUrl}
                id="url"
                disabled={loading}
                placeholder="Shorten a link here..."
                type="text"
              ></input>
              <span className="text-[#f46262] absolute top-16 italic ">
                {error}
              </span>
            </div>

            <button
              onClick={onSearchUrl}
              disabled={loading}
              className="p-4 rounded-lg w-2/12  bg-[#2acfcf] active:bg-[#94e7e7] whitespace-nowrap text-white font-bold"
            >
              Shorten it!
            </button>
          </form>
        </div>

        <div className="max-w-6xl w-full bg-gray-200 flex flex-col gap-4">
          {urls.map(({ original, url }) => (
            <div
              className="rounded bg-white font-bold flex items-center p-4 justify-between"
              key={url}
            >
              <div>
                <p>{original}</p>
              </div>
              <div className="flex gap-4 w-6/12 justify-end items-center">
                <a
                  href={new URL(url).href}
                  target="_blank"
                  className="text-[#2acfcf] underline"
                >
                  {url}
                </a>
                <button
                  onClick={() => onCopyUrl(url)}
                  className={`text-white rounded p-2 w-1/4 active:bg-[#94e7e7] ${
                    actualUrl === url ? "bg-[#3b3054]" : "bg-[#2acfcf]"
                  }`}
                >
                  {actualUrl === url ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
