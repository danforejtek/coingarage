import { cn } from "@/lib/utils"
import Figure from "../Figure"

export default function Advantages({ className }: { className?: string }) {
  return (
    <section className={cn("container mx-auto mt-16 flex flex-row justify-between lg:mt-28", className)}>
      <div className="flex w-full flex-row flex-wrap justify-center gap-8 sm:flex-shrink lg:flex-shrink xl:justify-between">
        <Figure icon="/icons/exchange.svg" caption="100 Currencies Listed" />
        <Figure icon="/icons/globe.svg" caption="100+ Participating Countries" />
        <Figure icon="/icons/currency.svg" caption="12 Assets for staking coming soon" />
        <Figure icon="/icons/phone.svg" caption="Buy crypto" />
        <Figure icon="/icons/payment.svg" caption="Deposit EUR via Sepa or Card" />
      </div>
    </section>
  )
}
