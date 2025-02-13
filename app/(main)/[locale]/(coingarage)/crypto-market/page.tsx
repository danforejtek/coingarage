// import Figure from "@/components/Figure"
import { useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
// import { useTranslations } from "next-intl"
import Image from "next/image"
import CryptoMarketTableSsrData from "@/components/crypto-market-table-SSR-data"
import CryptoStats from "@/components/crypto-stats"

export default function Affiliate({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations("eezy-trader.affiliate")
  const tAfi = useTranslations("Affiliate")

  return (
    <main className="relative">
      <section className="container mx-auto mt-16 flex flex-col flex-wrap items-center justify-center lg:flex-row xl:justify-between">
        <section id="hot-coins" className="container mx-auto mt-28">
          <CryptoMarketTableSsrData />
          <div className="mt-12">
            <CryptoStats />
          </div>
        </section>        
      </section>
    </main>
  )
}
