"use client"

import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"

const endDate = 1740787199
const firstRoundEndDate = 1735689599
const secondRoundEndDate = 1738367999

const CountdownTimer = ({ className }: { className?: string }) => {
  const t = useTranslations("GARA.garaDepo.timer")
  const currentTime = new Date().getTime()
  let targetDate = new Date().getTime()
  // Set the target date/time
  if (firstRoundEndDate * 1000 > Number(currentTime)) {
    targetDate = firstRoundEndDate
  } else if (secondRoundEndDate * 1000 > Number(currentTime)) {
    targetDate = secondRoundEndDate
  } else if (endDate * 1000 > Number(currentTime)) {
    targetDate = endDate
  }
  // const targetDate = new Date("2024-12-31T23:59").getTime()

  // State to hold remaining time
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Function to calculate the time difference
  const calculateTimeLeft = () => {
    const now = new Date().getTime()
    const difference = targetDate * 1000 - now

    const days = Math.floor(Number(difference) / (1000 * 60 * 60 * 24))
    const hours = Math.floor((Number(difference) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((Number(difference) % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((Number(difference) % (1000 * 60)) / 1000)

    setTimeLeft({ days, hours, minutes, seconds })
  }

  // Update the time every second
  useEffect(() => {
    const timer = setInterval(() => calculateTimeLeft(), 1000)
    return () => clearInterval(timer) // Cleanup timer
  }, [])

  return (
    <div className={cn("flex items-center justify-start space-x-2", className)}>
      {/* Days */}
      <div className="flex w-[74px] flex-col items-center rounded-xl border p-2 font-heading shadow-md md:min-w-[80px]">
        <div className="text-2xl font-bold text-primary md:text-3xl">{String(timeLeft.days).padStart(2, "0")}</div>
        <div className="text-sm font-medium md:text-base">{t("day")}</div>
      </div>

      {/* Hours */}
      <div className="pb-8 text-2xl font-bold text-primary md:text-3xl">:</div>

      <div className="flex w-[74px] flex-col items-center rounded-xl border p-2 font-heading shadow-md md:min-w-[80px]">
        <div className="text-2xl font-bold text-primary md:text-3xl">{String(timeLeft.hours).padStart(2, "0")}</div>
        <div className="text-sm font-medium md:text-base">{t("hours")}</div>
      </div>

      {/* Minutes */}
      <div className="pb-8 text-2xl font-bold text-primary md:text-3xl">:</div>

      <div className="flex w-[74px] flex-col items-center rounded-xl border p-2 font-heading shadow-md md:min-w-[80px]">
        <div className="text-2xl font-bold text-primary md:text-3xl">{String(timeLeft.minutes).padStart(2, "0")}</div>
        <div className="text-sm font-medium md:text-base">{t("minutes")}</div>
      </div>

      {/* Seconds */}
      <div className="pb-8 text-2xl font-bold text-primary md:text-3xl">:</div>

      <div className="flex w-[74px] flex-col items-center rounded-xl border p-2 font-heading shadow-md md:min-w-[80px]">
        <div className="text-2xl font-bold text-primary md:text-3xl">{String(timeLeft.seconds).padStart(2, "0")}</div>
        <div className="text-sm font-medium md:text-base">{t("seconds")}</div>
      </div>
    </div>
  )
}

export default CountdownTimer
