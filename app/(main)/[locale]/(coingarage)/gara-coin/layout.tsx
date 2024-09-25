import "@rainbow-me/rainbowkit/styles.css"
import type { Metadata } from "next"
import { WalletProviders } from "@/app/(main)/[locale]/(coingarage)/gara-coin/components/wallet-providers"
import { SmartlookScript } from "@/components/smartlook-script"

export const metadata: Metadata = {
  title: "Garage coin - GARA | Coingarage",
  description:
    "Discover a higher level of financial privacy and freedom than traditional banking systems offer In the simple and secure environment of our exchange. We are an exchange based in the heart of European union. The first to introduce regulation That will make crypto explode here!",
  keywords: "crypto, exchange, bitcoin, ethereum, crypto exchange, crypto trading, crypto wallet, crypto",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `/site.webmanifest`,
}

export default function RootLayout({ children, locale }: { children: React.ReactNode; locale: string }) {
  return (
    <>
      <WalletProviders locale={locale}>
        {/* <div className="primary-gradient absolute left-0 top-0 -z-10 h-[100vh] w-full overflow-x-hidden"></div> */}
        {children}
      </WalletProviders>
      <SmartlookScript />
    </>
  )
}
