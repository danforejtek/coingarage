"use client"

import { ChangeEvent, ReactNode, useTransition } from "react"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
// import { useRouter, usePathname } from "../navigation"

type Props = {
  children: ReactNode
  defaultValue: string
  label: string
}

export default function LocaleSwitcherSelect({ children, defaultValue, label }: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value
    startTransition(() => {
      router.push(`/${nextLocale}${pathname.substring(3)}`, { locale: nextLocale })
    })
  }

  return (
    <>
      <p className="sr-only">{label}</p>
      <select
        title="Select language"
        className={cn(
          "inline-flex h-10 w-10 appearance-none items-center justify-center rounded-full bg-transparent text-center text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          isPending && "transition-opacity [&:disabled]:opacity-30"
        )}
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </>
  )
}
