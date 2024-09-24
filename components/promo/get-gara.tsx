"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { useTimer } from "react-timer-hook"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { useTranslations } from "next-intl"

export default function GetGara({ className }: { className?: string }) {
  const expiryTimestamp = new Date()
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 900)
  const { totalSeconds, seconds, minutes, hours, days, isRunning, start, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  })
  const t = useTranslations("CryptoLandingPage")

  return (
    <div className={cn("grid grid-cols-[60px_1fr] items-center gap-5", className)}>
      <Image src="/images/promo/gift.png" alt="" width={60} height={61} />
      <div className="flex flex-col">
        <div className="inline-flex font-heading text-xl font-bold text-primary">
          <span className="text-md">
            {t("register.content")}
            <div className="relative inline-flex h-4 w-4 cursor-pointer select-none">
              <div className=" absolute -right-2 top-0">
                <div className="hidden lg:flex">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary text-sm text-white">
                        {"?"}
                      </TooltipTrigger>
                      <TooltipContent className="max-w-[400px]">
                        <ul className="checklist checklist-sm p-4">
                          <li>{t("register.mark.option1")}</li>
                          <li>{t("register.mark.option2")}</li>
                          <li>{t("register.mark.option3")}</li>
                          <li>{t("register.mark.option4")}</li>
                        </ul>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="flex lg:hidden">
                  <Dialog>
                    <DialogTrigger className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary text-sm text-white">
                      {"?"}
                    </DialogTrigger>
                    <DialogContent className="w-[80%]">
                      <DialogHeader>
                        <ul className="checklist checklist-sm mt-6">
                          <li>{t("register.mark.option1")}</li>
                          <li>{t("register.mark.option2")}</li>
                          <li>{t("register.mark.option3")}</li>
                          <li>{t("register.mark.option4")}</li>
                        </ul>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </span>
        </div>
        <div className="flex flex-col sm:flex-row">
          <span className="font-heading font-bold">{t("register.limitedOffer")}</span>
          <span className="font-heading text-neutral-500 sm:ml-5" suppressHydrationWarning>
            {hours > 0 ? (hours < 10 ? `0${hours}` : hours) : "00"}
            {" : "}
            {minutes > 0 ? (minutes < 10 ? `0${minutes}` : minutes) : "00"}
            {" : "}
            {seconds > 0 ? (seconds < 10 ? `0${seconds}` : seconds) : "00"}
          </span>
        </div>
      </div>
    </div>
  )
}
