import { cn } from "@/lib/utils"
import Figure from "../Figure"

export default function Advantages({ className }: { className?: string }) {
  return (
    <section className={cn("container mx-auto mt-16 flex flex-row justify-between lg:mt-28", className)}>
      <div className="flex w-full flex-row flex-wrap justify-center gap-8 xl:justify-between">
        <Figure icon="/icons/exchange.svg" caption="150+ Currencies Listed" />
        <Figure icon="/icons/globe.svg" caption="100+ Participating Countries" />
        <Figure icon="/icons/currency.svg" caption="12 Assets for staking" />
        <Figure icon="/icons/phone.svg" caption="P2P Banktransfer Option" />
        <Figure icon="/icons/payment.svg" caption="Deposit EUR via Sepa or Card" />
      </div>
    </section>
  )
}
