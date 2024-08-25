"use client"
import { Check } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { ReactElement } from "react"
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const CHECK_MARKS = 5
const SAMPLE_IMAGES = [
  "/images/eezy-trader/easySettings/1.png",
  "/images/eezy-trader/easySettings/2.png",
  "/images/eezy-trader/easySettings/3.png",
]

const EasySettings = (): ReactElement => {
  const t = useTranslations("eezyTrader.environment")

  return (
    <div className="container flex flex-col-reverse justify-between pt-20 mt-36 lg:flex-row lg:h-[556px] items-center">
      <div className="relative h-[544px] w-[428px] overflow-hidden rounded-lg">
        <Image
          src="/images/eezy-trader/easySettings/tablet.jpg"
          width={428}
          height={544}
          alt="Tablet Background"
          className="absolute inset-0"
        />

        <div className="absolute w-[428px] inset-0 overflow-hidden">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 4000 })]}
            className="w-full"
          >
            <CarouselContent className="h-[544px] w-full">
              {SAMPLE_IMAGES.map((src, index) => (
                <CarouselItem key={index} className="relative h-full w-full overflow-hidden">
                  <div className="flex h-full items-center justify-center">
                    <div className="relative h-[346px] w-[325px]">
                      <Image src={src} alt={`Carousel image ${index + 1}`} fill className="" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <div className="max-w-[546px] mb-14 lg:mb-0 ml-0 md:-ml-44">
        <h3 className="text-[38px] mb-9">{t("header")}</h3>

        <div>
          {Array.from({ length: CHECK_MARKS }, (_, i) => (
            <span key={i} className="flex items-center space-x-2 mb-6">
              <Check className="text-primary mr-4" />
              <span className="text-xl">{t(`checkmarks.${i + 1}`)}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EasySettings
