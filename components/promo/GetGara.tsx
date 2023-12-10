"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { useTimer } from "react-timer-hook"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog"

export default function GetGara({ className }: { className?: string }) {
  const expiryTimestamp = new Date()
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 900)
  const { totalSeconds, seconds, minutes, hours, days, isRunning, start, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  })

  return (
    <div className={cn("grid grid-cols-[60px_1fr] items-center gap-5", className)}>
      <Image src="/images/promo/gift.png" alt="" width={60} height={61} />
      <div className="flex flex-col">
        <div className="inline-flex font-heading text-xl font-bold text-primary">
          <span className="text-md">
            Register and get up to 100 USDT reward in GARAGECoin (GARA)
            <div className="relative inline-flex h-4 w-4 cursor-pointer select-none">
              <div className=" absolute -right-2 top-0">
                <div className="hidden lg:flex">
                  <HoverCard>
                    <HoverCardTrigger className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary text-sm text-white">
                      {"?"}
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <ul className="checklist checklist-sm">
                        <li>Each new user on the exchange will receive 10 USDT in the GARA exchange token.</li>
                        <li>Every 50th user will receive 50 USDT in GARA exchange token.</li>
                        <li>Every 100th user will receive 100 USDT in a GARA exchange token. </li>
                        <li>Refer a new user and you will receive the same reward as each new user you refered.</li>
                      </ul>
                    </HoverCardContent>
                  </HoverCard>
                </div>
                <div className="flex lg:hidden">
                  <Dialog>
                    <DialogTrigger className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary text-sm text-white">
                      {"?"}
                    </DialogTrigger>
                    <DialogContent className="w-[80%]">
                      <DialogHeader>
                        <ul className="checklist checklist-sm mt-6">
                          <li>Each new user on the exchange will receive 10 USDT in the GARA exchange token.</li>
                          <li>Every 50th user will receive 50 USDT in GARA exchange token.</li>
                          <li>Every 100th user will receive 100 USDT in a GARA exchange token. </li>
                          <li>Refer a new user and you will receive the same reward as each new user you refered.</li>
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
          <span className="font-heading font-bold">Limited offer for you</span>
          <span className="font-heading text-neutral-500 sm:ml-5">
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
