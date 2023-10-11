import "./globals.css"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"

const inter = Poppins({ subsets: ["latin"], weight: ["500", "700"] })

export const metadata: Metadata = {
  title: "Shortly",
  description: "Shorty, the best url shorter!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
