"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { useTranslations } from "next-intl"

const partners = [
  "/images/finance/partners/blockchainLegalDarkMode.png",
  "/images/finance/partners/creativeHeroes.svg",
  "/images/finance/partners/effectiveSolutions.svg",
  "/images/finance/partners/findrock.svg",
  "/images/finance/partners/simplex.svg",
  "/images/finance/partners/zen.svg",
]
const benefitsImgs = ["staking", "payment_protection", "payment", "money_withdrawal"];

export const BenefitCarousel = () => {
  const t = useTranslations("eezy-trader.BtcSaving")
  return (
    <Carousel
      opts={{      
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      className="w-[calc(100%-33px)] relative left-4"
    >
      <CarouselContent>
        {
          benefitsImgs.map((img, index) => (
            <CarouselItem id="carouselItem" key={img} className="bg-card p-6 rounded-xlg md:basis-[47%] lg:basis-1/5 mr-[5%] grow lg:last:mr-0">
              <Image src={`/images/eezy-trader/icons/${img}.svg`} alt="" width={55} height={55} className="mx-auto" />
              <h3 className="card-caption text-center my-6">{t("whatIsSavingPlan.cards.card" + (index + 1) + ".header")}</h3>

              <p className="text-center">{t("whatIsSavingPlan.cards.card" + (index + 1) + ".text")}</p>
            </CarouselItem>))
        }

      </CarouselContent>
      <CarouselPrevious className="ml-4 !bg-transparent text-primary lg:hidden" />
      <CarouselNext className="mr-4 !bg-transparent text-primary lg:hidden" />
    </Carousel>
  )
}
