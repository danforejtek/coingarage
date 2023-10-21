import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import "@/styles/globals.scss"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Coingarage | Crypto, Banking & Trading, Exchange",
  description:
    "Coingarage is your gateway to the future of finance, offering a seamless and secure way to buy, sell, and trade cryptocurrencies.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `/site.webmanifest`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div
        className="absolute left-0 top-0 -z-10 h-[100vh] w-full"
        style={{
          background: "linear-gradient(to top, rgba(217, 217, 217, 0.00) 60%, rgba(255, 31, 112, 0.22) 100%)",
        }}
      ></div>
      {children}
    </div>
  )
}
