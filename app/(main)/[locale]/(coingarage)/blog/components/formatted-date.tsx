"use client"
import { cn, formatDateString } from "@/lib/utils"

export function FormattedDate({ date, className }: { date: string; className?: string }) {
  return (
    <p className={cn(className)} suppressHydrationWarning>
      {formatDateString(date)}
    </p>
  )
}
