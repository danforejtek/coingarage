"use client"

import { useState } from "react"

import Link from "next/link"

import { useLockBody } from "@/hooks/use-lock-body"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/Icons"

import { navItems } from "./Menu"

const Nav = ({ onClose }: { onClose: () => void }) => {
  useLockBody()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-[400px] rounded-lg bg-white shadow-lg">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <Link href="/">
                <Icons.logo className="h-10 w-10" />
              </Link>
            </div>
            {/* <div className="text-lg font-medium">Navigation</div> */}
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-md" onClick={onClose}>
              <Icons.close className="h-6 w-6" />
            </Button>
          </div>
        </div>
        <div className="border-t border-gray-100">
          <ul className="p-6">
            {navItems.map(({ title, href, subItems }, index) => {
              return (
                <li key={index} className="mb-4">
                  <Button variant="ghost" className="text-md w-full">
                    <Link href={href}>{title}</Link>
                  </Button>
                </li>
              )
            })}
            <li className="mb-4 mt-12">
              <Button variant="outline" className="text-md w-full" asChild>
                <Link href="/login">Login</Link>
              </Button>
            </li>
            <li className="mb-4">
              <Button className="text-md w-full" asChild>
                <Link href="/sign-up">Sign up</Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function MobileNav({ scrolled = false }) {
  const [isOpen, setIsOpen] = useState(false)

  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  return (
    <>
      <Button variant="ghost" className="text-md p-0" onClick={onOpen}>
        <Icons.menu className="h-6 w-6" color={scrolled ? "white" : "black"} />
      </Button>
      {isOpen ? <Nav onClose={onClose} /> : null}
    </>
  )
}
