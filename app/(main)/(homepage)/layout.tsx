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
      <div className="primary-gradient absolute left-0 top-0 -z-10 h-[100vh] w-full"></div>
      {children}
    </div>
  )
}
