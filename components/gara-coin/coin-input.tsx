import { cn } from "@/lib/utils"
import Image from "next/image"

export function CoinInput({
  name,
  type,
  placeholder,
  coin,
  className,
  ...rest
}: {
  name: string
  coin: string
  placeholder?: string
  type: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex flex-row justify-between gap-4 rounded-full bg-neutral-100 px-6 py-2 ring-neutral-200 dark:bg-neutral-900 dark:ring-1 dark:ring-neutral-800",
        className
      )}
    >
      <input
        name={coin}
        type="number"
        placeholder={placeholder}
        className="flex-1 bg-transparent font-heading text-lg text-neutral-900 outline-none dark:text-white"
        {...rest}
      />
      <div className="flex flex-row items-center justify-end gap-4 font-heading text-base font-semibold text-neutral-900 dark:text-white">
        <Image src={`/icons/coins/${coin?.toLowerCase()}.png`} alt={coin} width={32} height={32} />
        <span className="w-[46px]">{coin}</span>
      </div>
    </div>
  )
}
