"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import MobileNav from "./mobile-nav"
import { useScrollPosition } from "@/hooks/use-scroll-position"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { ModeToggle } from "./mode-toggle"
import { GarageCoinPresale } from "@/components/promo/garage-coin-presale"
import { useTranslations } from "next-intl"
import LocaleSwitcher from "@/components/layout/locale-switch"

export default function Header() {
  const t = useTranslations("Menu")
  const tEz = useTranslations("eezy-trader.nav")
  const scrollPosition = useScrollPosition()
  const [scrolledVariant, setScrolledVariant] = useState(false)

  useEffect(() => {
    if (scrollPosition > 64) setScrolledVariant(true)
    if (scrollPosition === 0) setScrolledVariant(false)
  }, [scrollPosition])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 h-[86px] items-center px-4 transition-[height] duration-300 ease-in-out md:px-8",
        scrolledVariant ? "h-[64px] bg-white/50 shadow backdrop-blur-lg dark:bg-black/50" : null
      )}
    >
      <div className="grid h-full grid-cols-[1fr_40px] lg:flex lg:flex-row lg:justify-between">
        <nav className="flex items-center gap-10" aria-label="Global">
          <Link href="/eezy-trader">
            <div className="h-[30] w-[206px]">
              <Image src="/images/eezy-trader/logo/logo.png" width={206} height={31} alt="logo" />
            </div>
          </Link>
          <div className="hidden max-w-[746px] flex-row gap-2 lg:flex">
            <Button variant="ghost" className={cn("text-sm")} asChild>
              <a href="https://trade.coingarage.io/login">{tEz("knowledgeBase")}</a>
            </Button>
            <Button variant="ghost" className={cn("text-sm")} asChild>
              <Link href="/eezy-trader/affiliate">{tEz("affiliateProgram")}</Link>
            </Button>
            <Button variant="ghost" className={cn("text-sm")} asChild>
              <Link href="/eezy-trader/subscription">{tEz("payments")}</Link>
            </Button>
          </div>
        </nav>
        <div className="flex h-full items-center justify-end">
          <div className="hidden lg:block">
            <div className="flex gap-2">
              <Button variant="ghost" className={cn("text-sm")} asChild>
                <a href="https://trade.coingarage.io/login">{t("login")}</a>
              </Button>
              <Button className="mr-2 text-center text-sm leading-none" variant="violet" asChild>
                <a href="https://trade.coingarage.io/signup">{t("signUp")}</a>
              </Button>
              <ModeToggle />
              <LocaleSwitcher />
            </div>
          </div>
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
