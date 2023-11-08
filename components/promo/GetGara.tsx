"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { useTimer } from "react-timer-hook"

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
        <div className="font-heading text-xl font-bold text-primary">
          Register and get 100 USDT reward in GARAGECoin (GARA)
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
