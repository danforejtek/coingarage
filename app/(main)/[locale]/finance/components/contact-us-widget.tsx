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
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"
// import { useViewportSize } from "@mantine/hooks"

export function ContactUsWidget() {
  const t = useTranslations("widget")
  const [isOpen, setIsOpen] = useState<boolean>(false)
  // const { width } = useViewportSize()

  const toggleOpen = () => {
    setIsOpen((prev) => !prev)
  }
  const handleClose = () => {
    setIsOpen(false)
  }

  // if (width > 1024) {
  //   return (
  //     <div className="mr-0 w-screen rounded-t-2xl bg-backgroundMuted lg:mr-4 lg:w-[400px]">
  //       <div className="p-8">
  //         <GetMoreInfoForm onSuccess={handleClose} className="mt-0" />
  //       </div>
  //       <Button
  //         onClick={toggleOpen}
  //         variant="ghost"
  //         className={cn(
  //           "relative mr-0 flex h-[44px] w-screen flex-row items-center justify-center !rounded-b-2xl bg-primary px-4 lg:mr-4 lg:w-[400px]",
  //           isOpen && "bg-backgroundMuted"
  //         )}
  //       >
  //         Chci se dozvědět více
  //       </Button>
  //     </div>
  //   )
  // }

  return (
    <div
      className={cn(
        "fixed bottom-0 right-0 transition-all duration-300",
        isOpen ? "translate-y-12" : "translate-y-0 delay-500"
      )}
    >
      <Drawer open={isOpen} onOpenChange={(isOpen) => setIsOpen(isOpen)}>
        <DrawerTrigger
          onClick={toggleOpen}
          className="relative mr-0 flex h-[44px] w-screen flex-row items-center justify-center rounded-t-3xl bg-primary text-background lg:mr-4 lg:w-[400px]"
        >
          Chci se dozvědět více
          <ChevronUp className="absolute right-8 top-2.5 h-6 w-6" />
        </DrawerTrigger>
        <DrawerContent className="max-h-[96%] px-8 pb-2 lg:bottom-4 lg:left-[unset] lg:right-4 lg:w-[400px] lg:!rounded-xl">
          <div className="mb-3 overflow-auto">
            <DrawerHeader className="pt-6">
              <DrawerTitle>{t("header")}</DrawerTitle>
              <DrawerDescription className="mt-2">{t("text")}</DrawerDescription>
            </DrawerHeader>
            <div>
              <GetMoreInfoForm onSuccess={handleClose} type="widget" className="mt-4" />
            </div>
          </div>
          <DrawerFooter className="hidden !p-2 lg:mt-0 lg:flex">
            <DrawerClose className="flex flex-row justify-center">
              <Button variant="ghost" size="sm" className="w-full" onClick={handleClose}>
                <ChevronDown className="h-6 w-6" />
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
