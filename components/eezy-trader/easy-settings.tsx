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
    <div className="container mt-12 flex flex-col-reverse items-center justify-between pt-20 lg:mt-36 lg:h-[556px] lg:flex-row">
      <div className="relative mx-auto h-[344px] w-80 rounded-lg sm:h-[460px] sm:w-[428px]">
        <Image
          src="/images/eezy-trader/easySettings/tablet.png"
          width={428}
          height={544}
          alt="Tablet Background"
          className="absolute inset-0"
          style={{ objectFit: "cover" }}
        />

        <div className="absolute inset-0 px-6">
          <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4000 })]} className="w-full">
            <CarouselContent className="h-[544px]">
              {SAMPLE_IMAGES.map((src, index) => (
                <CarouselItem key={index} className="relative h-full">
                  <div className="-mt-16 flex h-full items-center justify-center sm:mt-0">
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

      <div className="mb-14 ml-0 max-w-[546px] lg:mb-0">
        <h3 className="mb-9 text-center font-heading text-4xl font-bold lg:pr-10 lg:text-start">{t("header")}</h3>
        <div>
          {Array.from({ length: CHECK_MARKS }, (_, i) => (
            <span key={i} className="mb-6 flex items-center space-x-2">
              <Check className="mr-4 text-primary" />
              <span className="font-heading text-xl">{t(`checkmarks.${i + 1}`)}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EasySettings
