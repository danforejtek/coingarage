"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import MobileNavFinance from "./mobile-nav-finance"
import { useScrollPosition } from "@/hooks/use-scroll-position"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { ModeToggle } from "./mode-toggle"
import { useTranslations } from "next-intl"
import LocaleSwitcher from "@/components/layout/locale-switch"
import { MenuFinance } from "@/components/layout/menu-finance"

export default function HeaderFinance() {
  const t = useTranslations("Menu")
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
      <div className="grid h-full grid-cols-[1fr_40px] xl:flex xl:flex-row xl:justify-between">
        <nav className="flex items-center gap-10" aria-label="Global">
          <Link href="/">
            <div className="h-[30] w-[206px]">
              <Image src="/icons/coingarage-finance.svg" width={206} height={35} alt="logo" />
            </div>
          </Link>
          <div className="hidden max-w-[752px] flex-row gap-2 xl:flex">
            <MenuFinance />
          </div>
        </nav>
        <div className="flex h-full items-center justify-end">
          <div className="hidden xl:block">
            <div className="flex gap-2">
              <Button variant="ghost" className={cn("text-sm")} asChild>
                <a href="https://app.coingarage-finance.com/accounts/login">{t("login")}</a>
              </Button>
              <Button className="mr-2 text-center text-sm leading-none" asChild>
                <a href="https://app.coingarage-finance.com/accounts/signup">{t("becomeAShareholder")}</a>
              </Button>
              <ModeToggle />
              <LocaleSwitcher isFinance={true} />
            </div>
          </div>
          <div className="xl:hidden">
            <MobileNavFinance />
          </div>
        </div>
      </div>
    </header>
  )
}
