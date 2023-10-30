"use client"

import Image from "next/image"
import { Menu } from "./Menu"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import MobileNav from "./MobileNav"
import { useScrollPosition } from "@/hooks/use-scroll-position"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export default function Header() {
  const scrollPosition = useScrollPosition()
  const [scrolledVariant, setScrolledVariant] = useState(false)

  useEffect(() => {
    if (scrollPosition > 64) setScrolledVariant(true)
    if (scrollPosition === 0) setScrolledVariant(false)
  }, [scrollPosition])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 h-[86px] items-center px-8 transition-[height] duration-300 ease-in-out",
        scrolledVariant ? "h-[64px] bg-white/50 shadow backdrop-blur-2xl" : null
      )}
    >
      <div className="grid h-full grid-cols-[1fr_26px] lg:grid-cols-2">
        <nav className="flex items-center gap-10" aria-label="Global">
          <Link href="/">
            <div className="h-[30] w-[206px]">
              <Image src="/logo.svg" width={206} height={31} alt="logo" />
            </div>
          </Link>
          <div className="hidden lg:block">
            <Menu textColor={"text-secondary"} />
          </div>
        </nav>
        <div className="flex h-full items-center justify-end">
          <div className="hidden lg:block">
            <div className="flex  gap-4">
              <Button variant="ghost" className={cn("text-md")} asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button className="text-md" asChild>
                <Link href="/sign-up">Sign up</Link>
              </Button>
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
