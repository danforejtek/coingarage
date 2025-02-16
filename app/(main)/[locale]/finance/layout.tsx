import "@/styles/globals.scss"
import { unstable_setRequestLocale } from "next-intl/server"
import type { Metadata } from "next"

import HeaderFinance from "@/components/layout/header-finance"
import FooterFinance from "@/components/layout/footer-finance"

import { locales, metaLanguagePaths } from "@/config"
import { ContactUsWidget } from "@/app/(main)/[locale]/finance/components/contact-us-widget"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  metadataBase: new URL("https://coingarage-finance.com"),
  alternates: {
    canonical: "/",
    languages: metaLanguagePaths,
  },
  title: "Coingarage Finance | Crypto, Banking & Trading, Exchange",
  description:
    "Coingarage is your gateway to the future of finance, offering a seamless and secure way to buy, sell, and trade cryptocurrencies.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `/site.webmanifest`,
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)
  return (
    <>
      <div className="tertiary-gradient absolute left-0 top-0 -z-10 h-[100vh] w-full"></div>
      <HeaderFinance locale={locale} />
      <div className="flex min-h-screen flex-col justify-between">
        <div className="flex-1">{children}</div>
        <ContactUsWidget />
        <FooterFinance />
      </div>
    </>
  )
}
