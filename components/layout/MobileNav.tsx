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
      <div className="relative w-full max-w-[400px] bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full">
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
          </ul>
          <div className="flex items-center justify-end p-6 lg:px-8 gap-4">
            <Button variant="ghost" className="text-md" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button className="text-md" asChild>
              <Link href="/sign-up">Sign up</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  return (
    <>
      <Button variant="ghost" className="text-md" onClick={onOpen}>
        <Icons.menu className="h-6 w-6" color="black" />
      </Button>
      {isOpen ? <Nav onClose={onClose} /> : null}
    </>
  )
}
