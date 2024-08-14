import { useTranslations } from "next-intl"
import React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { Button } from "../ui/button"
import Image from "next/image"

type Props = {}

const partners = [
  // "/images/finance/partners/blockchainLegalDarkMode.png",
  // "/images/finance/partners/blockchainLegalLightMode.png",
  "/images/finance/partners/creativeHeroes.svg",
  "/images/finance/partners/effectiveSolutions.svg",
  "/images/finance/partners/findrock.svg",
  "/images/finance/partners/simplex.svg",
  "/images/finance/partners/zen.svg",
  "/images/finance/partners/creativeHeroes.svg",
  "/images/finance/partners/effectiveSolutions.svg",
  "/images/finance/partners/findrock.svg",
  "/images/finance/partners/simplex.svg",
  "/images/finance/partners/zen.svg",
]

const BestTraders = (props: Props) => {
  const t = useTranslations("eezyTrader.results")

  return (
    <div className="container flex justify-between">
      <div className="w-[440px]">
        <h4 className="mb-2 text-[28px] text-primary">{t("subheader")}</h4>
        <h3 className="mb-6 text-4xl font-bold">{t("header")}</h3>
        <p className="mb-4 text-base font-normal">{t("text1")}</p>
        <p>{t("text2")}</p>
        <Button className="mt-8 w-32">{t("startBtn")}</Button>
      </div>

      <div>
        <div className="w-[768px]">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
            orientation="horizontal"
          >
            <CarouselContent className="h-[435px] w-[768px] flex">
              {partners.map((src, index) => (
                <div key={index} className="">
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 border-2 border-rose-600">
                    <div className="flex flex-row items-center justify-center w-[234px] h-[201px]">
                      <div className="relative h-[144px] w-[288px]"> {index}
                        <Image src={src} alt="" fill className="object-contain" />
                      </div>
                    </div>
                  </CarouselItem>
                </div>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-4 !bg-transparent text-primary" />
            <CarouselNext className="mr-4 !bg-transparent text-primary" />
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default BestTraders
