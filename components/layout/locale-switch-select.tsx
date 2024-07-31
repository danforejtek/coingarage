"use client"

import { ChangeEvent, ReactNode, useTransition } from "react"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { localesLabel } from "@/config"
// import { useRouter, usePathname } from "../navigation"

type Props = {
  children: ReactNode
  defaultValue: string
  label: string
}

export default function LocaleSwitcherSelect({ children, defaultValue, label, locales }: Props) {
  console.log(locales)
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()

  function onSelectChange(value: any) {
    const nextLocale = value
    startTransition(() => {
      router.push(`/${nextLocale}${pathname.substring(3)}`, { locale: nextLocale })
    })
  }

  return (
    <>
      <p className="sr-only">{label}</p>
      {/* <select
        title="Select language"
        className={cn(
          "flex h-10 w-10 appearance-none flex-row items-center justify-center rounded-full bg-transparent text-center text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          isPending && "transition-opacity [&:disabled]:opacity-30"
        )}
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select> */}
      <Select defaultValue={defaultValue} disabled={isPending} onValueChange={onSelectChange}>
        <SelectTrigger
          className="w-[44px] items-center rounded-full border-none bg-transparent hover:bg-background"
          hideIcon={true}
        >
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {locales.map((locale: string) => {
              return (
                <SelectItem key={locale} value={locale}>
                  {localesLabel?.[locale]}
                </SelectItem>
              )
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  )
}
