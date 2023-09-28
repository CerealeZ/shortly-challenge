import Boost from "@/app/_components/Boost"
import Footer from "@/app/_components/Footer"
import Header from "@/app/_components/Header"
import Principal from "@/app/_components/Principal"
import Shorter from "@/app/_components/Shorter"
import Statistics from "@/app/_components/Statistics"

export default function Home() {
  return (
    <>
      <Header />
      <Principal />
      <Shorter />
      <Statistics />
      <Boost />
      <Footer />
    </>
  )
}
