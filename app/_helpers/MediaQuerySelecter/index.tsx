"use client"

import {
  useIsClient,
  useMediaQuery,
} from "@/app/_helpers/MediaQuerySelecter/hooks"

interface MediaQuerySelecterProps {
  sm: JSX.Element
  lg: JSX.Element
}

const MediaQuerySelecter = ({ sm, lg }: MediaQuerySelecterProps) => {
  const matches = useMediaQuery("(min-width: 768px)")

  const isClient = useIsClient()

  if (isClient) {
    return matches ? lg : sm
  }

  //   return matches ? lg : sm
}

export default MediaQuerySelecter
