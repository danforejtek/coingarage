"use client"

import { useState } from "react"
import { GetMoreInfoForm } from "@/app/(main)/[locale]/finance/components/get-more-info-form"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { ChevronUp } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { useViewportSize } from "@mantine/hooks"

export function ContactUsWidget() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { width } = useViewportSize()

  const toggleOpen = () => {
    console.log("toggleOpen")
    setIsOpen((prev) => !prev)
  }
  const handleClose = () => {
    setIsOpen(false)
  }

  if (width > 1024) {
    return (
      <div className="mr-0 w-screen rounded-t-2xl bg-backgroundMuted lg:mr-4 lg:w-[400px]">
        {isOpen && (
          <div className="p-8">
            <GetMoreInfoForm onSuccess={handleClose} className="mt-0" />
          </div>
        )}
        <Button
          onClick={toggleOpen}
          variant="ghost"
          className={cn(
            "relative mr-0 flex h-[44px] w-screen flex-row items-center justify-center !rounded-b-2xl bg-primary px-4 lg:mr-4 lg:w-[400px]",
            isOpen && "bg-backgroundMuted"
          )}
        >
          Chci se dozvědět více
        </Button>
      </div>
    )
  }

  return (
    <Drawer open={isOpen}>
      <DrawerTrigger
        onClick={toggleOpen}
        className="relative mr-0 flex h-[44px] w-screen flex-row items-center justify-center rounded-t-3xl bg-primary px-4 lg:mr-4 lg:w-[400px]"
      >
        Chci se dozvědět více
        <ChevronUp className="absolute right-8 top-2.5 h-6 w-6" />
      </DrawerTrigger>
      <DrawerContent className="px-8 pb-8">
        <DrawerHeader className="pt-6">
          <DrawerTitle>Rádi zodpovíme všechny vaše dotazy</DrawerTitle>
          <DrawerDescription className="mt-6">
            Nezávazně nám pošlete nám svůj e-mail a telefonní číslo a náš obchodní zástupce vás bude kontaktovat a
            zodpoví vám všechny vaše dotazy.
          </DrawerDescription>
        </DrawerHeader>
        <div>
          <GetMoreInfoForm onSuccess={handleClose} />
        </div>
        <DrawerFooter className="mt-4 p-0">
          <DrawerClose className="flex flex-row justify-end">
            <Button variant="outline" onClick={handleClose}>
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
