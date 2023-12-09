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

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/Icons"

import { navItems } from "./Menu"
import { useEffect, useState } from "react"

const MobileNav = ({ scrolled = false }) => {
  const [isOpen, setOpen] = useState(false)
  const toggleOnpen = () => setOpen(!isOpen)
  const pathname = usePathname()
  useEffect(() => {
    setOpen(false)
  }, [pathname])
  // useLockBody()

  return (
    <Dialog open={isOpen} onOpenChange={toggleOnpen}>
      {/* <DialogTrigger asChild> */}
      <Button variant="ghost" className="text-md p-0" onClick={toggleOnpen}>
        <Icons.menu className="h-6 w-6" color={scrolled ? "white" : "black"} />
      </Button>
      {/* </DialogTrigger> */}
      <DialogContent className="h-screen w-screen">
        <DialogHeader>
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
              <Button variant="ghost" className="text-md">
                <Icons.close className="h-6 w-6" />
              </Button>
              {/* </div> */}
            </DialogClose>
          </div>
        </DialogHeader>
        <div className="flex justify-center overflow-auto border-t border-gray-100">
          <ul className="p-6">
            {navItems.map(({ title, href, subItems }, index) => {
              return (
                <li key={index} className="mb-4">
                  {!subItems ? (
                    <Button variant="ghost" className="text-md w-full font-heading text-lg text-primary">
                      <Link href={href}>{title}</Link>
                    </Button>
                  ) : (
                    <span className="inline-flex w-full justify-center font-heading text-lg text-primary">{title}</span>
                  )}
                  {subItems ? (
                    <ul>
                      {subItems.map(({ title, href }, index) => {
                        return (
                          <li key={index}>
                            <Button variant="ghost" className="w-full text-sm">
                              <Link href={href}>{title}</Link>
                            </Button>
                          </li>
                        )
                      })}
                    </ul>
                  ) : null}
                </li>
              )
            })}
          </ul>
        </div>
        <DialogFooter className="items-center justify-center border-t border-gray-100">
          <ul className="mt-4 flex flex-row justify-center gap-6">
            <li>
              <Button variant="outline" className="text-md w-full" asChild>
                <Link href="https://trade.coingarage.io/login">Login</Link>
              </Button>
            </li>
            <li>
              <Button className="text-md w-full" asChild>
                <Link href="https://trade.coingarage.io/signup">Sign up</Link>
              </Button>
            </li>
          </ul>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default MobileNav
