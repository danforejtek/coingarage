import { BuyGara } from "@/components/gara-coin/buy-gara"
import { useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"
import Image from "next/image"

export default function Page({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations("GARA")

  return (
    <>
      <section className="container mx-auto mt-8 flex flex-wrap items-center justify-center gap-12 lg:grid lg:grid-cols-2 lg:flex-row lg:items-start xl:mt-20 xl:justify-between xl:gap-6">
        <div className="absolute right-[-100px] top-[540px] -z-50 h-[470px] w-[774px] max-w-[96vw] overflow-hidden lg:top-[24px]">
          <Image src="/images/fin.svg" alt="" className="scale-x-[-1] object-contain" fill={true} />
        </div>
        <div>
          <hgroup className="mb-8 flex flex-row gap-3 font-heading text-5xl font-bold">
            <h1>GARAGE Coin</h1>
            <p className="ml-4 text-primary">GARA</p>
          </hgroup>
          <p className="text-md mb-6 max-w-[600px] text-justify text-neutral-600 dark:text-neutral-300 lg:text-left">
            {t("main.text1")}
          </p>
          <p className="text-md mb-4 max-w-[600px] text-justify text-neutral-600 dark:text-neutral-300 lg:text-left">
            {t("main.text2")}
          </p>
        </div>
        <div className="flex flex-row justify-end">
          <BuyGara />
        </div>
      </section>
    </>
  )
}
