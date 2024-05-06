"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { useTheme } from "next-themes"

const partners = [
  "/images/finance/partners/blockchainLegalDarkMode.png",
  "/images/finance/partners/blockchainLegalLightMode.png",
  "/images/finance/partners/creativeHeroes.svg",
  "/images/finance/partners/effectiveSolutions.svg",
  "/images/finance/partners/findrock.svg",
  "/images/finance/partners/simplex.svg",
  "/images/finance/partners/zen.svg",
]

export const PartnerCarousel = () => {
  const { resolvedTheme } = useTheme()
  const _partners =
    resolvedTheme === "dark"
      ? partners.filter((src) => !src.includes("LightMode"))
      : partners.filter((src) => !src.includes("DarkMode"))
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
      className="w-full"
    >
      <CarouselContent className="h-[144px] ">
        {_partners.map((src, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="flex flex-row items-center justify-center p-1">
              <div className="relative h-[144px] w-[288px]">
                <Image src={src} alt="" fill className="object-contain" />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-4 !bg-transparent text-primary" />
      <CarouselNext className="mr-4 !bg-transparent text-primary" />
    </Carousel>
  )
}
