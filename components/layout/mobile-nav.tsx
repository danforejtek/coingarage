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
import { useParams, usePathname } from "next/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

import { navItems } from "./menu"
import { useEffect, useState } from "react"
import { GarageCoinPresale } from "@/components/promo/garage-coin-presale"
import { ModeToggle } from "@/components/layout/mode-toggle"
import LocaleSwitcher from "@/components/layout/locale-switch"
import { cn } from "@/lib/utils"

const MobileNav = ({ scrolled = false }) => {
  const pathname = usePathname()
  const { locale } = useParams()
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, "")
  const [isOpen, setOpen] = useState(false)
  const toggleOpen = () => setOpen(!isOpen)
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
      <DialogContent className="h-[100dvh] max-w-screen-2xl grid-rows-[56px_1fr_56px] p-4 px-6" showClose={false}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
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
        <div className="flex justify-center overflow-auto border-b border-t border-gray-100 dark:border-gray-700">
          <ul className="p-6">
            <li>
              <div className="mb-4">
                <GarageCoinPresale />
              </div>
            </li>
            {navItems.map(({ title, href, subItems }, index) => {
              const hasActiveSubItem =
                pathnameWithoutLocale.endsWith(pathname) ||
                subItems?.some(({ href }) => pathnameWithoutLocale.endsWith(href))
              const isActive = pathnameWithoutLocale.endsWith(href) || (href.includes(pathname) && pathname !== "/")

              return (
                <li key={index} className="mb-4">
                  {!subItems ? (
                    <Button
                      variant="ghost"
                      className={cn("text-md w-full font-heading text-lg", isActive ? "text-primary" : "")}
                    >
                      <Link href={href}>{title}</Link>
                    </Button>
                  ) : (
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1" className="border-b-0">
                        <AccordionTrigger className={cn("justify-center", hasActiveSubItem ? "text-primary" : "")}>
                          {title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul>
                            {subItems.map(({ title, href }, index) => {
                              const isActive =
                                pathnameWithoutLocale.endsWith(href) || (href.includes(pathname) && pathname !== "/")
                              return (
                                <li key={index}>
                                  <Button
                                    variant="ghost"
                                    className={cn("w-full text-sm", isActive ? "!text-primary" : "")}
                                    data-active={isActive}
                                  >
                                    <Link href={href}>{title}</Link>
                                  </Button>
                                </li>
                              )
                            })}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
        <DialogFooter className="flex-row items-center justify-between sm:justify-between">
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
