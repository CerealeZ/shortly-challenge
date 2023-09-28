import MediaQuerySelecter from "@/app/_helpers/MediaQuerySelecter"
import Mobile from "@/app/_components/Principal/mobile"
import Desktop from "@/app/_components/Principal/desktop"

export default function Principal() {
  return <MediaQuerySelecter sm={<Mobile />} lg={<Desktop />} />
}
