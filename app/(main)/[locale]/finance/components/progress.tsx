"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

export function FinanceProgress({ value, className }: { value: number; className?: string }) {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Progress
      value={progress}
      postfix="%"
      className={cn("h-[32px] w-full bg-background font-heading text-base text-background shadow-lg", className)}
    />
  )
}
