"use client"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export const CoinInput = forwardRef<
  HTMLInputElement,
  {
    name: string
    coin: string
    placeholder?: string
    type: string
    readOnly?: boolean
    className?: string
    showIcon?: boolean
  } & React.InputHTMLAttributes<HTMLInputElement>
>(({ coin, className, showIcon = true, error, ...rest }, ref) => {
  return (
    <div className="flex flex-col self-center">
      <div
        className={cn(
          "flex w-full flex-row justify-between gap-4 rounded-full bg-neutral-100 px-6 py-2 ring-1 ring-neutral-200 focus-within:ring-neutral-300 dark:bg-neutral-900 dark:ring-1 dark:ring-neutral-800"
        )}
      >
        <input
          ref={ref}
          min="0"
          step="0.0001"
          // max={"100000"}
          className={cn(
            "flex-1 bg-transparent font-heading text-lg text-neutral-900 outline-none dark:text-white",
            className
          )}
          {...rest}
        />
        {showIcon ? (
          <div className="mr-3 flex flex-row items-center justify-end gap-4 font-heading text-base font-semibold text-neutral-900 dark:text-white">
            <Image src={`/icons/coins/${coin?.toLowerCase()}.png`} alt={coin} width={32} height={32} />
            <span className="w-[46px]">{coin}</span>
          </div>
        ) : null}
      </div>
      {error ? <span className="ml-4 mt-1 text-sm text-red-500">{error}</span> : null}
    </div>
  )
})
