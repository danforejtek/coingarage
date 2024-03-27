"use client"

import Link from "next/link"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { usePathname } from "next/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/Icons"
import { useEffect, useState } from "react"
import { GarageCoinPresale } from "@/components/promo/GarageCoinPresale"
import { ModeToggle } from "@/components/layout/ModeToggle"
import LocaleSwitcher from "@/components/layout/LocaleSwitch"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import { ArrowDown, ChevronRight, BookOpen, Users, CreditCard } from "lucide-react"
import { useTranslations } from "next-intl"

const activeLinkStyle = "text-primary hover:text-primary"

const MobileNav = ({ scrolled = false }) => {
  const currentPath = usePathname()
  const t = useTranslations("knowledgeBase")
  const tSub = useTranslations("eezy-trader.subscription.plans")
  const tEzNav = useTranslations("eezy-trader.nav")
  const [isOpen, setOpen] = useState(false)
  const toggleOpen = () => setOpen(!isOpen)
  const pathname = usePathname()
  useEffect(() => {
    setOpen(false)
  }, [pathname])
  // useLockBody()

  return (
    <Dialog open={isOpen} onOpenChange={toggleOpen}>
      {/* <DialogTrigger asChild> */}
      <Button variant="ghost" className="text-md h-6 w-10 p-0" onClick={toggleOpen}>
        <Icons.menu className="h-6 w-6 dark:fill-white" />
      </Button>
      {/* </DialogTrigger> */}
      <DialogContent className="grid h-[100dvh] w-screen grid-rows-[64px_1fr_64px] p-4 px-6" showClose={false}>
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex h-12 items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Link href="/">
                  <Icons.logo className="h-10 w-10" />
                </Link>
              </div>
            </div>
            <DialogClose asChild>
              {/* <div className="flex items-center gap-4"> */}
              <Button variant="ghost" className="text-md px-2">
                <Icons.close className="h-6 w-6" />
              </Button>
              {/* </div> */}
            </DialogClose>
          </div>
        </DialogHeader>
        <div className="flex flex-1 justify-center overflow-auto border-gray-100 dark:border-gray-700">
          <ul className="p-6">
            <Collapsible className="w-full" defaultOpen={true}>
              <CollapsibleTrigger className="" asChild>
                <Button
                  variant="ghost"
                  className={cn("group flex w-full flex-row items-center justify-between gap-4 text-start text-base")}
                >
                  <div className="flex flex-row items-center gap-4">
                    <BookOpen className="h-6 w-6" />
                    {tEzNav("knowledgeBase")}
                  </div>
                  <ChevronRight className="h-4 w-4 group-data-[state=open]:rotate-90" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="ml-14 flex flex-col border-l pl-2">
                <Button variant="ghost" size="sm" className="justify-start" asChild>
                  <Link
                    className={cn(currentPath.endsWith("/eezy-trader/knowledge-base") ? activeLinkStyle : "")}
                    href="/eezy-trader/knowledge-base"
                  >
                    {t("general.name")}
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="justify-start" asChild>
                  <Link
                    className={cn(currentPath.includes("/eezy-trader/knowledge-base/grid-bot") ? activeLinkStyle : "")}
                    href="/eezy-trader/knowledge-base/grid-bot"
                  >
                    Grid bot
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="justify-start" asChild>
                  <Link
                    className={cn(currentPath.includes("/eezy-trader/knowledge-base/dca-bot") ? activeLinkStyle : "")}
                    href="/eezy-trader/knowledge-base/dca-bot"
                  >
                    DCA bot
                  </Link>
                </Button>
              </CollapsibleContent>
            </Collapsible>
            <Button
              variant="ghost"
              className="group flex w-full flex-row items-center justify-between gap-4 text-start text-base"
            >
              <div className="flex flex-row items-center gap-4">
                <Users className="h-6 w-6" />
                {tEzNav("affiliateProgram")}
              </div>
            </Button>
            <Button
              variant="ghost"
              className="group flex w-full flex-row items-center justify-between gap-4 text-start text-base"
            >
              <div className="flex flex-row items-center gap-4">
                <CreditCard className="h-6 w-6" />
                {tSub("header")}
              </div>
            </Button>
          </ul>
        </div>
        <DialogFooter className="h-12 flex-row items-center justify-between">
          <div className="flex flex-row gap-2">
            <ModeToggle />
            <LocaleSwitcher />
          </div>
          <ul className="flex flex-row items-center justify-center gap-6">
            <li>
              <Button variant="outline" className="text-md w-full" asChild>
                <a href="https://trade.coingarage.io/login" rel="noopener noreferrer">
                  Login
                </a>
              </Button>
            </li>
            <li>
              <Button className="text-md w-full" asChild>
                <a href="https://trade.coingarage.io/signup" rel="noopener noreferrer">
                  Sign up
                </a>
              </Button>
            </li>
          </ul>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default MobileNav
