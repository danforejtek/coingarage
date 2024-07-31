import { cn } from "@/lib/utils"
import Figure from "../figure"
// import { getTranslations } from "next-intl/server"
import { useTranslations } from "next-intl"

export default function Advantages({ className }: { className?: string }) {
  const t = useTranslations("Statistics")

  return (
    <section className={cn("container mx-auto mt-16 flex flex-row justify-between lg:mt-28", className)}>
      <div className="flex w-full flex-row flex-wrap justify-center gap-8 xl:justify-between">
        <Figure icon="/icons/exchange.svg" caption={t("icon1")} />
        <Figure icon="/icons/globe.svg" caption={t("icon2")} />
        <Figure icon="/icons/currency.svg" caption={t("icon3")} />
        <Figure icon="/icons/phone.svg" caption={t("icon4")} />
        <Figure icon="/icons/payment.svg" caption={t("icon5")} />
      </div>
    </section>
  )
}
