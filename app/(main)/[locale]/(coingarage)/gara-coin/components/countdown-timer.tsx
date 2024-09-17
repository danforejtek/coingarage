"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

const CountdownTimer = ({ className }: { className: string }) => {
  // Set the target date/time
  const targetDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000 // 7 days from now

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
    const difference = targetDate - now

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)

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
      <div className="flex min-w-[102px] flex-col items-center rounded-xl border p-2 font-heading shadow-lg">
        <div className="text-3xl font-bold text-primary">{String(timeLeft.days).padStart(2, "0")}</div>
        <div className="text-lg font-medium">DNÍ</div>
      </div>

      {/* Hours */}
      <div className="pb-8 text-3xl font-bold text-primary">:</div>

      <div className="flex min-w-[102px] flex-col items-center rounded-xl border p-2 font-heading shadow-lg">
        <div className="text-3xl font-bold text-primary">{String(timeLeft.hours).padStart(2, "0")}</div>
        <div className="text-lg font-medium">HODIN</div>
      </div>

      {/* Minutes */}
      <div className="pb-8 text-3xl font-bold text-primary">:</div>

      <div className="flex min-w-[102px] flex-col items-center rounded-xl border p-2 font-heading shadow-lg">
        <div className="text-3xl font-bold text-primary">{String(timeLeft.minutes).padStart(2, "0")}</div>
        <div className="text-lg font-medium">MINUT</div>
      </div>

      {/* Seconds */}
      <div className="pb-8 text-3xl font-bold text-primary">:</div>

      <div className="flex min-w-[102px] flex-col items-center rounded-xl border p-2 font-heading shadow-lg">
        <div className="text-3xl font-bold text-primary">{String(timeLeft.seconds).padStart(2, "0")}</div>
        <div className="text-lg font-medium">SEKUND</div>
      </div>
    </div>
  )
}

export default CountdownTimer
