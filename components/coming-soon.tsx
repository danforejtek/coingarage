"use client"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
import Image from "next/image"

export default function ComingSoon() {
  const t = useTranslations("security")
  return (
    <section className="container mx-auto">
      <div className="flex flex-col items-center">
        <Image src="/logo/coingarage_full_gradient.svg" alt="" width={200} height={111} />
        <div className="text-center font-heading text-4xl font-bold text-black dark:text-neutral-200">
          {t("newDesign")}
        </div>
        <Button variant="default" size="lg" className="text-md mt-6 font-bold" asChild>
          <a href="https://trade.coingarage.io/grid-trading/dashboard">{t("continueToTrader")}</a>
        </Button>
        <div className="grid w-full grid-cols-1 gap-8 pt-8 md:grid-cols-2">
          <div className="relative h-[200px] w-full md:h-[400px]">
            <Image
              src="/images/trader/trader_1.png"
              alt=""
              fill={true}
              style={{ objectFit: "contain" }}
              quality={100}
            />
          </div>
          <div className="relative h-[200px] w-full md:h-[400px]">
            <Image
              src="/images/trader/trader_2.png"
              alt=""
              fill={true}
              style={{ objectFit: "contain" }}
              quality={100}
            />
          </div>
          <div className="relative h-[200px] w-full md:h-[400px]">
            <Image
              src="/images/trader/trader_3.png"
              alt=""
              fill={true}
              style={{ objectFit: "contain" }}
              quality={100}
            />
          </div>
          <div className="relative h-[200px] w-full md:h-[400px]">
            <Image
              src="/images/trader/trader_4.png"
              alt=""
              fill={true}
              style={{ objectFit: "contain" }}
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
