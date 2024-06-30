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
  placeholder: string
  type: string
}) {
  return (
    <div className={cn("bg-g flex flex-row justify-between gap-4 rounded-full bg-neutral-100 px-6 py-2", className)}>
      <input
        name={coin}
        type="number"
        placeholder={placeholder}
        className="bg-transparent font-heading text-lg text-neutral-900 outline-none dark:text-white"
        {...rest}
      />
      <div className="flex flex-row items-center justify-end gap-4 font-heading text-base font-semibold text-neutral-900 dark:text-white">
        <Image src={`/icons/coins/${coin}.png`} alt={coin} width={32} height={32} />
        <span className="w-[46px]">{coin}</span>
      </div>
    </div>
  )
}
