import { unstable_setRequestLocale } from "next-intl/server"
import Footer from "@/components/layout/footer"
import "@/styles/globals.scss"
import type { Metadata } from "next"
import { locales } from "@/config"
import { Sidebar } from "@/app/(main)/[locale]/eezy-trader/components/sidebar"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useTranslations } from "next-intl"
import { cn } from "@/lib/utils"
import LocaleSwitcher from "@/components/layout/locale-switch"
import Link from "next/link"
import MobileNav from "@/app/(main)/[locale]/eezy-trader/components/mobile-nav"
import Image from "next/image"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: "EEZY TRADER | Crypto, Banking & Trading, Exchange",
  description:
    "EEZY TRADER is your gateway to the future of finance, offering a seamless and secure way to buy, sell, and trade cryptocurrencies.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `/site.webmanifest`,
}

const IS_PRODUCTION = process.env.NODE_ENV === "production"

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)
  const t = useTranslations("Menu")
  return (
    <>
      {/* <Header /> */}
      <div className="flex min-h-screen flex-col justify-between">
        <main className="relative grid w-full rounded-xl bg-background lg:grid-cols-[284px_1fr]">
          <Sidebar />
          <div>
            <div className="flex flex-row items-center justify-between border-b p-4">
              <div className="hidden lg:block">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/">
                    <ArrowLeft className="mr-4 h-4 w-4" />
                    Back to Coingarage
                  </Link>
                </Button>
              </div>
              <div className="block lg:hidden">
                <Image src="/images/eezy-trader/logo/logo.png" width={200} height={31} alt="logo" />
              </div>
              <div className="flex h-full items-center justify-end">
                <div className="hidden lg:block">
                  <div className="flex gap-2">
                    <Button variant="ghost" className={cn("text-sm")} asChild>
                      <a href="https://trade.coingarage.io/login">{t("login")}</a>
                    </Button>
                    <Button className="mr-2 text-center text-sm leading-none" asChild>
                      <a href="https://trade.coingarage.io/signup">{t("signUp")}</a>
                    </Button>
                    <LocaleSwitcher />
                  </div>
                </div>
                <div className="lg:hidden">
                  <MobileNav />
                </div>
              </div>
            </div>
            <div className="container px-12">{children}</div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
